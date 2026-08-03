/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, type MatrixEvent, PendingEventOrdering, Room } from "matrix-js-sdk/src/matrix";

import { stubClient } from "../../../test-utils";
import { populateThread } from "../../../test-utils/threads";
import { NotificationLevel } from "../../../../src/stores/notifications/NotificationLevel";
import * as RoomNotifs from "../../../../src/RoomNotifs";
import {
    applyHeldOrder,
    collectRoomEntries,
    filterEntries,
    hasParticipated,
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
    });

    describe("filterEntries", () => {
        const entries = [
            {
                threadId: "$none",
                level: NotificationLevel.None,
                mentioned: false,
            },
            {
                threadId: "$activity",
                level: NotificationLevel.Activity,
                mentioned: false,
            },
            {
                threadId: "$notification",
                level: NotificationLevel.Notification,
                mentioned: false,
            },
            {
                threadId: "$highlight",
                level: NotificationLevel.Highlight,
                mentioned: true,
            },
            {
                threadId: "$readMention",
                level: NotificationLevel.None,
                mentioned: true,
            },
            {
                threadId: "$unsent",
                level: NotificationLevel.Unsent,
                mentioned: false,
            },
        ] as ThreadFeedEntry[];

        it("returns everything for All", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.All)).toHaveLength(6);
        });

        it("returns anything with activity or above for Unread", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.Unread).map((e) => e.threadId)).toEqual([
                "$activity",
                "$notification",
                "$highlight",
                "$unsent",
            ]);
        });

        it("returns mentions for Mentions, whether or not they are still unread", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.Mentions).map((e) => e.threadId)).toEqual([
                "$highlight",
                "$readMention",
            ]);
        });

        it("does not treat a failed send as a mention", () => {
            // NotificationLevel.Unsent outranks Highlight, so a level test would match it.
            expect(filterEntries(entries, ThreadsFeedFilter.Mentions).map((e) => e.threadId)).not.toContain("$unsent");
        });

        it("keeps the thread being read even once it no longer matches", () => {
            // Reading a thread is what makes it stop matching Unread, so without this the card the
            // user is reading — and the composer in it — is removed as its read receipt lands.
            expect(filterEntries(entries, ThreadsFeedFilter.Unread, "$none").map((e) => e.threadId)).toContain("$none");
            expect(filterEntries(entries, ThreadsFeedFilter.Mentions, "$none").map((e) => e.threadId)).toContain(
                "$none",
            );
        });

        it("does not duplicate the thread being read when it still matches", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.Unread, "$activity").map((e) => e.threadId)).toEqual([
                "$activity",
                "$notification",
                "$highlight",
                "$unsent",
            ]);
        });
    });
});
