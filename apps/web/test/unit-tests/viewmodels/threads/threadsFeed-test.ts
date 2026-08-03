/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, PendingEventOrdering, Room } from "matrix-js-sdk/src/matrix";

import { stubClient } from "../../../test-utils";
import { populateThread } from "../../../test-utils/threads";
import { NotificationLevel } from "../../../../src/stores/notifications/NotificationLevel";
import * as RoomNotifs from "../../../../src/RoomNotifs";
import {
    collectRoomEntries,
    filterEntries,
    hasParticipated,
    sortEntries,
    type ThreadFeedEntry,
    ThreadsFeedFilter,
} from "../../../../src/viewmodels/threads/threadsFeed";

const ME = "@me:example.org";
const OTHER = "@other:example.org";

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

    describe("collectRoomEntries", () => {
        it("includes threads the user participated in", async () => {
            await populateThread({ room, client, authorId: OTHER, participantUserIds: [ME] });

            const entries = collectRoomEntries(room, ME);

            expect(entries).toHaveLength(1);
            expect(entries[0].participated).toBe(true);
        });

        it("excludes threads the user has neither joined nor been highlighted in", async () => {
            await populateThread({ room, client, authorId: OTHER, participantUserIds: [OTHER] });

            expect(collectRoomEntries(room, ME)).toHaveLength(0);
        });

        it("includes threads the user is highlighted in even without participating", async () => {
            await populateThread({ room, client, authorId: OTHER, participantUserIds: [OTHER] });
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

    describe("filterEntries", () => {
        const entries = [
            { threadId: "$none", level: NotificationLevel.None },
            { threadId: "$activity", level: NotificationLevel.Activity },
            { threadId: "$notification", level: NotificationLevel.Notification },
            { threadId: "$highlight", level: NotificationLevel.Highlight },
        ] as ThreadFeedEntry[];

        it("returns everything for All", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.All)).toHaveLength(4);
        });

        it("returns anything with activity or above for Unread", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.Unread).map((e) => e.threadId)).toEqual([
                "$activity",
                "$notification",
                "$highlight",
            ]);
        });

        it("returns only highlights for Mentions", () => {
            expect(filterEntries(entries, ThreadsFeedFilter.Mentions).map((e) => e.threadId)).toEqual(["$highlight"]);
        });
    });
});
