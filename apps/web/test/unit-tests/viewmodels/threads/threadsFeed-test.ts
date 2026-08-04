/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    EventStatus,
    EventType,
    type MatrixClient,
    type MatrixEvent,
    MsgType,
    PendingEventOrdering,
    RelationType,
    Room,
} from "matrix-js-sdk/src/matrix";

import { mkEvent, stubClient } from "../../../test-utils";
import { populateThread } from "../../../test-utils/threads";
import { NotificationLevel } from "../../../../src/stores/notifications/NotificationLevel";
import * as RoomNotifs from "../../../../src/RoomNotifs";
import {
    applyHeldOrder,
    collectRoomEntries,
    filterEntries,
    hasParticipated,
    hasReplied,
    sortEntries,
    type ThreadFeedEntry,
    ThreadsFeedFilter,
    wasMentioned,
} from "../../../../src/viewmodels/threads/threadsFeed";

const ME = "@me:example.org";
const OTHER = "@other:example.org";

/** Adds intentional mentions to an already-created event, as a sender's client would have. */
function addMentions(event: MatrixEvent, mentions: { user_ids?: string[]; room?: boolean }): void {
    Object.assign(event.getContent(), { "m.mentions": mentions });
}

/**
 * A reply of the user's that has not landed on the server yet. Detached pending ordering keeps
 * local echoes out of the timeline, so this is the shape `thread.replyToEvent` hands back.
 */
function pendingReply(threadId: string, status: EventStatus): MatrixEvent {
    const event = mkEvent({
        event: true,
        type: EventType.RoomMessage,
        user: ME,
        room: "!room:example.org",
        content: {
            "msgtype": MsgType.Text,
            "body": "On its way",
            "m.relates_to": { rel_type: RelationType.Thread, event_id: threadId },
        },
    });
    event.status = status;
    return event;
}

/** A reaction, which the SDK files in the thread's timeline alongside its replies. */
function reactionFrom(userId: string, targetId: string): MatrixEvent {
    return mkEvent({
        event: true,
        type: EventType.Reaction,
        user: userId,
        room: "!room:example.org",
        content: { "m.relates_to": { rel_type: RelationType.Annotation, event_id: targetId, key: "👍" } },
    });
}

describe("threadsFeed", () => {
    let client: MatrixClient;
    let room: Room;

    beforeEach(() => {
        client = stubClient();
        client.supportsThreads = () => true;
        client.getUserId = () => ME;
        client.getSafeUserId = () => ME;
        room = new Room("!room:example.org", client, ME, {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });
        // Default: nothing is unread, so tests opt in to notification state explicitly.
        jest.spyOn(RoomNotifs, "determineUnreadState").mockReturnValue({
            level: NotificationLevel.None,
            symbol: null,
            count: 0,
            invited: false,
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("hasParticipated", () => {
        it("is true when the user sent a reply", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [ME],
            });
            expect(hasParticipated(thread, ME)).toBe(true);
        });

        it("is true when the user is the thread root author", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: ME,
                participantUserIds: [OTHER],
            });
            expect(hasParticipated(thread, ME)).toBe(true);
        });

        it("is false when the user has not taken part", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            expect(hasParticipated(thread, ME)).toBe(false);
        });
    });

    describe("hasReplied", () => {
        it("is true when the user sent a reply", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [ME],
            });
            expect(hasReplied(thread, ME)).toBe(true);
        });

        it("is false when the user only started the thread", async () => {
            // The whole point of the distinction: a question the user asked is still waiting on
            // somebody else, so it is not something they have replied to.
            const { thread } = await populateThread({
                room,
                client,
                authorId: ME,
                participantUserIds: [OTHER],
            });
            expect(hasReplied(thread, ME)).toBe(false);
        });

        it("is false when the user has not taken part at all", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            expect(hasReplied(thread, ME)).toBe(false);
        });

        it("counts a reply that is still on its way", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            jest.spyOn(thread, "replyToEvent", "get").mockReturnValue(pendingReply(thread.id, EventStatus.SENDING));

            expect(hasReplied(thread, ME)).toBe(true);
        });

        it("does not count a reply that failed to send", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            jest.spyOn(thread, "replyToEvent", "get").mockReturnValue(pendingReply(thread.id, EventStatus.NOT_SENT));

            expect(hasReplied(thread, ME)).toBe(false);
        });

        it("does not count reacting to a thread as replying in it", async () => {
            const { thread, events } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            thread.addEvent(reactionFrom(ME, events[events.length - 1].getId()!), false);

            // Asserted rather than assumed: the reaction only tells us anything about how replies are
            // counted because the SDK files it in the thread's timeline next to them.
            expect(thread.timeline.some((event) => event.getSender() === ME)).toBe(true);
            expect(hasReplied(thread, ME)).toBe(false);
        });

        it("trusts the server's participation flag in a thread the user did not start", async () => {
            // Covers a reply in history this client has never loaded, which is the only thing the
            // flag can tell us that the timeline cannot.
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            jest.spyOn(thread, "hasCurrentUserParticipated", "get").mockReturnValue(true);

            expect(hasReplied(thread, ME)).toBe(true);
        });

        it("does not read the server's participation flag as a reply when the root is unknown", async () => {
            // An unloaded root is not somebody else's root, and taking the flag at face value here
            // would call a thread the user started one they had answered in.
            const { thread } = await populateThread({
                room,
                client,
                authorId: ME,
                participantUserIds: [OTHER],
            });
            jest.spyOn(thread, "hasCurrentUserParticipated", "get").mockReturnValue(true);
            thread.rootEvent = undefined;

            expect(hasReplied(thread, ME)).toBe(false);
        });

        it("does not read the server's participation flag as a reply in the user's own thread", async () => {
            // Servers are entitled to count starting a thread as participating in it, so the flag
            // alone cannot tell "I started this" from "I answered in it".
            const { thread } = await populateThread({
                room,
                client,
                authorId: ME,
                participantUserIds: [OTHER],
            });
            jest.spyOn(thread, "hasCurrentUserParticipated", "get").mockReturnValue(true);

            expect(hasReplied(thread, ME)).toBe(false);
        });
    });

    describe("wasMentioned", () => {
        it("is true when a reply mentions the user", async () => {
            const { thread, events } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            addMentions(events[1], { user_ids: [ME] });

            expect(wasMentioned(thread, ME)).toBe(true);
        });

        it("is true when the thread root mentions the user", async () => {
            const { thread, rootEvent } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            addMentions(rootEvent, { user_ids: [ME] });

            expect(wasMentioned(thread, ME)).toBe(true);
        });

        it("is false when somebody else is mentioned", async () => {
            const { thread, events } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            addMentions(events[1], { user_ids: ["@someone:example.org"] });

            expect(wasMentioned(thread, ME)).toBe(false);
        });

        it("does not treat an @room ping as a mention", async () => {
            const { thread, events } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            addMentions(events[1], { room: true });

            expect(wasMentioned(thread, ME)).toBe(false);
        });

        it("is false when nothing mentions anyone", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });

            expect(wasMentioned(thread, ME)).toBe(false);
        });
    });

    describe("collectRoomEntries", () => {
        it("includes threads the user participated in", async () => {
            await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [ME],
            });

            const entries = collectRoomEntries(room, ME);

            expect(entries).toHaveLength(1);
            expect(entries[0].participated).toBe(true);
        });

        it("excludes threads the user has neither joined nor been highlighted in", async () => {
            await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });

            expect(collectRoomEntries(room, ME)).toHaveLength(0);
        });

        it("includes threads the user is highlighted in even without participating", async () => {
            await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            jest.spyOn(RoomNotifs, "determineUnreadState").mockReturnValue({
                level: NotificationLevel.Highlight,
                symbol: null,
                count: 1,
                invited: false,
            });

            const entries = collectRoomEntries(room, ME);

            expect(entries).toHaveLength(1);
            expect(entries[0].participated).toBe(false);
            expect(entries[0].level).toBe(NotificationLevel.Highlight);
        });

        it("keeps a thread the user was mentioned in after the mention has been read", async () => {
            // `determineUnreadState` is mocked to None for the whole suite, standing in for the
            // mention having been read here or in another client.
            const { events } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [OTHER],
            });
            addMentions(events[1], { user_ids: [ME] });

            const entries = collectRoomEntries(room, ME);

            expect(entries).toHaveLength(1);
            expect(entries[0].participated).toBe(false);
            expect(entries[0].mentioned).toBe(true);
            expect(entries[0].level).toBe(NotificationLevel.None);
        });

        it("does not include a thread whose root has not loaded", async () => {
            const { thread } = await populateThread({
                room,
                client,
                authorId: OTHER,
                participantUserIds: [ME],
            });
            thread.rootEvent = undefined;

            expect(collectRoomEntries(room, ME)).toHaveLength(0);
        });
    });

    describe("sortEntries", () => {
        it("orders by most recent activity first", () => {
            const entries = [{ latestTs: 100 }, { latestTs: 300 }, { latestTs: 200 }] as ThreadFeedEntry[];

            expect(sortEntries(entries).map((e) => e.latestTs)).toEqual([300, 200, 100]);
        });

        it("does not mutate its input", () => {
            const entries = [{ latestTs: 100 }, { latestTs: 300 }] as ThreadFeedEntry[];

            sortEntries(entries);

            expect(entries.map((e) => e.latestTs)).toEqual([100, 300]);
        });
    });

    describe("applyHeldOrder", () => {
        const entriesFor = (threadIds: string[]): ThreadFeedEntry[] =>
            threadIds.map((threadId) => ({ threadId }) as ThreadFeedEntry);

        it("keeps the held order even when activity has resorted the entries", () => {
            // "c" has just received a reply, so the feed now sorts it first.
            const resorted = entriesFor(["c", "a", "b"]);

            expect(applyHeldOrder(resorted, ["a", "b", "c"]).map((e) => e.threadId)).toEqual(["a", "b", "c"]);
        });

        it("puts threads missing from the held order at the end", () => {
            // A thread that did not exist when the order was taken must not appear mid-list, where
            // it would push everything below it down past whatever the user is reading.
            const withNew = entriesFor(["new", "a", "b"]);

            expect(applyHeldOrder(withNew, ["a", "b"]).map((e) => e.threadId)).toEqual(["a", "b", "new"]);
        });

        it("keeps new threads in their own sorted order at the end", () => {
            const withNew = entriesFor(["newer", "older", "a"]);

            expect(applyHeldOrder(withNew, ["a"]).map((e) => e.threadId)).toEqual(["a", "newer", "older"]);
        });

        it("drops held threads that are no longer present", () => {
            expect(applyHeldOrder(entriesFor(["a", "c"]), ["a", "b", "c"]).map((e) => e.threadId)).toEqual(["a", "c"]);
        });

        it("falls back to the entries' own order when nothing is held", () => {
            expect(applyHeldOrder(entriesFor(["a", "b"]), []).map((e) => e.threadId)).toEqual(["a", "b"]);
        });

        it("does not mutate its input", () => {
            const entries = entriesFor(["c", "a"]);

            applyHeldOrder(entries, ["a", "c"]);

            expect(entries.map((e) => e.threadId)).toEqual(["c", "a"]);
        });

        it("appends arrivals one after another when each result is recorded in turn", () => {
            // How the feed uses it: the painted order is recorded after every update, which is what
            // stops a thread that arrived during a freeze being re-ranked by the next arrival.
            // Holding the pre-freeze order instead would tie both arrivals for last place, and
            // "second" — being the more recent — would sort ahead of "first".
            let painted = ["a", "b"];
            const update = (threadIds: string[]): void => {
                painted = applyHeldOrder(entriesFor(threadIds), painted).map((e) => e.threadId);
            };

            update(["first", "a", "b"]);
            expect(painted).toEqual(["a", "b", "first"]);

            update(["second", "first", "a", "b"]);
            expect(painted).toEqual(["a", "b", "first", "second"]);
        });
    });

    describe("filterEntries", () => {
        const entries = [
            {
                threadId: "$none",
                level: NotificationLevel.None,
                mentioned: false,
                replied: true,
            },
            {
                threadId: "$activity",
                level: NotificationLevel.Activity,
                mentioned: false,
                replied: true,
            },
            {
                threadId: "$notification",
                level: NotificationLevel.Notification,
                mentioned: false,
                replied: false,
            },
            {
                threadId: "$highlight",
                level: NotificationLevel.Highlight,
                mentioned: true,
                replied: false,
            },
            {
                threadId: "$readMention",
                level: NotificationLevel.None,
                mentioned: true,
                replied: true,
            },
            {
                threadId: "$unsent",
                level: NotificationLevel.Unsent,
                mentioned: false,
                replied: true,
            },
        ] as ThreadFeedEntry[];

        const ids = (filters: ThreadsFeedFilter[], keepThreadId?: string): string[] =>
            filterEntries(entries, new Set(filters), keepThreadId).map((e) => e.threadId);

        it("returns everything when nothing is selected", () => {
            expect(ids([])).toHaveLength(6);
        });

        it("returns anything with activity or above for Unread", () => {
            expect(ids([ThreadsFeedFilter.Unread])).toEqual(["$activity", "$notification", "$highlight", "$unsent"]);
        });

        it("returns mentions for Mentions, whether or not they are still unread", () => {
            expect(ids([ThreadsFeedFilter.Mentions])).toEqual(["$highlight", "$readMention"]);
        });

        it("does not treat a failed send as a mention", () => {
            // NotificationLevel.Unsent outranks Highlight, so a level test would match it.
            expect(ids([ThreadsFeedFilter.Mentions])).not.toContain("$unsent");
        });

        it("returns threads without a reply from the user for Unreplied", () => {
            expect(ids([ThreadsFeedFilter.Unreplied])).toEqual(["$notification", "$highlight"]);
        });

        it("narrows rather than widens when several are selected", () => {
            // $readMention is a mention but is read, and $activity is unread but not a mention, so
            // an intersection returns neither. A union would return both.
            expect(ids([ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions])).toEqual(["$highlight"]);
            expect(ids([ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions, ThreadsFeedFilter.Unreplied])).toEqual([
                "$highlight",
            ]);
            expect(ids([ThreadsFeedFilter.Mentions, ThreadsFeedFilter.Unreplied])).toEqual(["$highlight"]);
        });

        it("keeps the thread being read even once it no longer matches", () => {
            // Reading a thread is what makes it stop matching Unread, so without this the card the
            // user is reading — and the composer in it — is removed as its read receipt lands.
            expect(ids([ThreadsFeedFilter.Unread], "$none")).toContain("$none");
            expect(ids([ThreadsFeedFilter.Mentions], "$none")).toContain("$none");
            expect(ids([ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions], "$none")).toContain("$none");
        });

        it("does not duplicate the thread being read when it still matches", () => {
            expect(ids([ThreadsFeedFilter.Unread], "$activity")).toEqual([
                "$activity",
                "$notification",
                "$highlight",
                "$unsent",
            ]);
        });
    });
});
