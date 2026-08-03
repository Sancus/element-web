/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { act, renderHook } from "jest-matrix-react";
import {
    ClientEvent,
    FeatureSupport,
    type MatrixClient,
    PendingEventOrdering,
    Room,
    RoomEvent,
    Thread,
} from "matrix-js-sdk/src/matrix";

import MatrixClientContext from "../../../../src/contexts/MatrixClientContext";
import { stubClient } from "../../../test-utils";
import { populateThread } from "../../../test-utils/threads";
import { useThreadsFeed } from "../../../../src/viewmodels/threads/useThreadsFeed";
import { ThreadsFeedFilter } from "../../../../src/viewmodels/threads/threadsFeed";

const ME = "@me:example.org";
const OTHER = "@other:example.org";

/** Per-room dirty rescans are throttled by this much; whole-account rescans by five seconds. */
const DIRTY_THROTTLE_MS = 500;
const FULL_THROTTLE_MS = 5000;

describe("useThreadsFeed", () => {
    let client: MatrixClient;
    let visibleRooms: Room[];

    beforeEach(() => {
        client = stubClient();
        client.supportsThreads = () => true;
        client.getUserId = () => ME;
        client.getSafeUserId = () => ME;

        visibleRooms = [];
        client.getVisibleRooms = jest.fn(() => visibleRooms);
        client.getRoom = jest.fn((roomId) => visibleRooms.find((room) => room.roomId === roomId) ?? null);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.useRealTimers();
    });

    /** A room carrying one thread the user has replied in, so it qualifies for the feed. */
    async function makeRoomWithThread(roomId: string): Promise<Room> {
        const room = new Room(roomId, client, ME, { pendingEventOrdering: PendingEventOrdering.Detached });
        await populateThread({ room, client, authorId: OTHER, participantUserIds: [ME] });
        return room;
    }

    function renderFeed(filter = ThreadsFeedFilter.All) {
        return renderHook(() => useThreadsFeed(filter), {
            wrapper: ({ children }) => (
                <MatrixClientContext.Provider value={client}>{children}</MatrixClientContext.Provider>
            ),
        });
    }

    /**
     * Lets the hook's throttled rescans and in-flight fetches settle.
     *
     * Rescans are throttled by design, so real waiting would mean multi-second tests; the fetches
     * are promise-based, which `act` flushes.
     */
    async function settle(ms = 0): Promise<void> {
        await act(async () => {
            if (ms > 0) jest.advanceTimersByTime(ms);
        });
    }

    it("seeds from threads already in memory", async () => {
        visibleRooms = [await makeRoomWithThread("!a:example.org")];

        const { result } = renderFeed();

        expect(result.current.entries).toHaveLength(1);
        expect(result.current.entries[0].room.roomId).toBe("!a:example.org");
        expect(result.current.initialised).toBe(true);
    });

    it("picks up a thread in a room that has become active", async () => {
        const room = await makeRoomWithThread("!a:example.org");
        visibleRooms = [room];

        const { result } = renderFeed();
        expect(result.current.entries).toHaveLength(1);

        const second = await makeRoomWithThread("!b:example.org");
        visibleRooms = [room, second];
        // A dirty rescan only trusts rooms the last whole-account scan found visible, so the new
        // room has to be known before its own events count.
        jest.useFakeTimers();
        act(() => {
            client.emit(ClientEvent.Sync, "SYNCING" as never, null);
        });
        await settle(FULL_THROTTLE_MS);

        act(() => {
            client.emit(RoomEvent.Timeline, second.getLiveTimeline().getEvents()[0], second, false, false, {
                liveEvent: true,
            } as never);
        });
        await settle(DIRTY_THROTTLE_MS);

        expect(result.current.entries).toHaveLength(2);
    });

    it("drops a room that has left the visible set", async () => {
        const room = await makeRoomWithThread("!a:example.org");
        visibleRooms = [room];

        const { result } = renderFeed();
        expect(result.current.entries).toHaveLength(1);

        // Leaving a room removes it from getVisibleRooms; the whole-account rescan runs on sync.
        visibleRooms = [];
        jest.useFakeTimers();
        act(() => {
            client.emit(ClientEvent.Sync, "SYNCING" as never, null);
        });
        await settle(FULL_THROTTLE_MS);

        expect(result.current.entries).toHaveLength(0);
    });

    it("does not resurrect a room that sync has since hidden", async () => {
        const room = await makeRoomWithThread("!a:example.org");
        visibleRooms = [room];

        const { result } = renderFeed();
        expect(result.current.entries).toHaveLength(1);

        // An upgraded room is excluded by getVisibleRooms, which decides visibility by looking at
        // every room's predecessors — a per-room predicate cannot tell. `getRoom` still returns it.
        visibleRooms = [];
        client.getRoom = jest.fn(() => room);
        jest.useFakeTimers();
        act(() => {
            client.emit(ClientEvent.Sync, "SYNCING" as never, null);
        });
        await settle(FULL_THROTTLE_MS);
        expect(result.current.entries).toHaveLength(0);

        act(() => {
            client.emit(RoomEvent.Timeline, room.getLiveTimeline().getEvents()[0], room, false, false, {
                liveEvent: true,
            } as never);
        });
        await settle(DIRTY_THROTTLE_MS);

        expect(result.current.entries).toHaveLength(0);
    });

    describe("backfill", () => {
        beforeEach(() => {
            Thread.hasServerSideListSupport = FeatureSupport.Stable;
        });

        afterEach(() => {
            Thread.hasServerSideListSupport = FeatureSupport.None;
        });

        it("searches rooms for threads and reports when it is done", async () => {
            const room = await makeRoomWithThread("!a:example.org");
            const fetchRoomThreads = jest.spyOn(room, "fetchRoomThreads").mockResolvedValue(undefined);
            jest.spyOn(room, "createThreadsTimelineSets").mockResolvedValue([] as never);
            visibleRooms = [room];

            const { result } = renderFeed();

            await settle();
            expect(fetchRoomThreads).toHaveBeenCalled();
            expect(result.current.hasMore).toBe(false);
            expect(result.current.backfilling).toBe(false);
        });

        it("retries a room whose fetch failed, then gives up on it", async () => {
            const room = await makeRoomWithThread("!a:example.org");
            jest.spyOn(room, "createThreadsTimelineSets").mockResolvedValue([] as never);
            const fetchRoomThreads = jest
                .spyOn(room, "fetchRoomThreads")
                .mockRejectedValue(new Error("server said no"));
            visibleRooms = [room];

            const { result } = renderFeed();

            // The room is recorded as searched even though it failed, so the queue cannot stall on
            // it, but one retry stays outstanding.
            await settle();
            expect(fetchRoomThreads).toHaveBeenCalledTimes(1);
            expect(result.current.hasMore).toBe(true);

            await act(async () => {
                result.current.loadMore();
            });
            expect(fetchRoomThreads).toHaveBeenCalledTimes(2);

            // Retried once only: a second failure leaves nothing more to do.
            expect(result.current.hasMore).toBe(false);
        });

        it("searches a newly joined room without restarting from the beginning", async () => {
            const first = await makeRoomWithThread("!a:example.org");
            jest.spyOn(first, "createThreadsTimelineSets").mockResolvedValue([] as never);
            const fetchFirst = jest.spyOn(first, "fetchRoomThreads").mockResolvedValue(undefined);
            visibleRooms = [first];

            const { result } = renderFeed();
            await settle();
            expect(result.current.hasMore).toBe(false);
            expect(fetchFirst).toHaveBeenCalledTimes(1);

            // Joining a room has to put it in the queue: a queue derived from the client alone, or
            // indexed by a cursor into the old list, would never search it.
            const joined = await makeRoomWithThread("!b:example.org");
            jest.spyOn(joined, "createThreadsTimelineSets").mockResolvedValue([] as never);
            const fetchJoined = jest.spyOn(joined, "fetchRoomThreads").mockResolvedValue(undefined);
            visibleRooms = [first, joined];

            jest.useFakeTimers();
            act(() => {
                client.emit(ClientEvent.Sync, "SYNCING" as never, null);
            });
            await settle(FULL_THROTTLE_MS);
            expect(result.current.hasMore).toBe(true);

            await act(async () => {
                result.current.loadMore();
            });

            expect(fetchJoined).toHaveBeenCalled();
            // The already-searched room is not fetched again.
            expect(fetchFirst).toHaveBeenCalledTimes(1);
        });

        it("does not backfill without server-side thread list support", async () => {
            Thread.hasServerSideListSupport = FeatureSupport.None;
            const room = await makeRoomWithThread("!a:example.org");
            const fetchRoomThreads = jest.spyOn(room, "fetchRoomThreads").mockResolvedValue(undefined);
            visibleRooms = [room];

            const { result } = renderFeed();

            await settle();
            expect(result.current.hasMore).toBe(false);
            expect(fetchRoomThreads).not.toHaveBeenCalled();
        });
    });
});
