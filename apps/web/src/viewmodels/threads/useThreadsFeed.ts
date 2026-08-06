/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    ClientEvent,
    type MatrixEvent,
    MatrixEventEvent,
    type Room,
    RoomEvent,
    Thread,
} from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import { throttle } from "lodash";

import { useMatrixClientContext } from "../../contexts/MatrixClientContext";
import { useSettingValue } from "../../hooks/useSettings";
import { useEventEmitter } from "../../hooks/useEventEmitter";
import {
    collectRoomEntries,
    entriesEqual,
    filterEntries,
    getFeedRooms,
    isFeedRoom,
    sortEntries,
    type ThreadFeedEntry,
    type ThreadsFeedFilters,
} from "./threadsFeed";

/** How quickly a change in one room is reflected in the feed. */
const MIN_UPDATE_INTERVAL_MS = 500;
/**
 * How often every room may be re-scanned. Much longer than the per-room interval because this
 * pass is O(rooms + threads) and only exists to notice rooms being joined, left, or hidden.
 */
const FULL_RESCAN_INTERVAL_MS = 5000;

/** Rooms whose threads are fetched in the first backfill pass. */
const INITIAL_BACKFILL_ROOMS = 20;
/** Rooms fetched per subsequent pass, triggered by scrolling towards the end of the feed. */
const BACKFILL_BATCH_ROOMS = 20;
/** Concurrent `/threads` requests. Kept low to stay clear of server rate limits. */
const BACKFILL_CONCURRENCY = 3;

export interface ThreadsFeedState {
    /** Filtered, most-recent-first list of threads. */
    entries: ThreadFeedEntry[];
    /** True only while a backfill pass is actually in flight. */
    backfilling: boolean;
    /** Whether more rooms remain to be searched for threads. */
    hasMore: boolean;
    /** Fetch the next batch of rooms. Safe to call repeatedly. */
    loadMore: () => void;
    /**
     * Whether the first scan has run. Distinguishes "nothing found" from "nothing looked at yet",
     * which would otherwise flash an empty state on first paint.
     */
    initialised: boolean;
}

/**
 * Collects threads across every room into a single feed.
 *
 * Matrix has no cross-room threads endpoint, so this aggregates client-side in two stages:
 * an immediate pass over threads already in memory from sync, then a progressive
 * room-by-room backfill driven by scrolling.
 *
 * Entries are cached per room and recomputed only for rooms that have actually changed.
 * Rebuilding the whole feed on every sync would mean an unread-state computation for every
 * thread in every room several times a second, which on a large account is enough main-thread
 * work to be felt.
 */
export function useThreadsFeed(filters: ThreadsFeedFilters, keepThreadId?: string | null): ThreadsFeedState {
    const client = useMatrixClientContext();
    const msc3946ProcessDynamicPredecessor = useSettingValue("feature_dynamic_room_predecessors");

    const [allEntries, setAllEntries] = useState<ThreadFeedEntry[]>([]);
    const [backfilling, setBackfilling] = useState(false);
    const [pendingRetries, setPendingRetries] = useState(0);
    /** False until the first scan of in-memory threads has run, so the page can hold its empty state. */
    const [initialised, setInitialised] = useState(false);
    /**
     * Rooms already searched for threads. Progress is tracked as a set rather than an index into
     * the room list, because that list is rebuilt whenever rooms are joined, left, or upgraded:
     * an index into the old list would silently point somewhere else in the new one.
     */
    const [searchedRooms, setSearchedRooms] = useState<ReadonlySet<string>>(new Set());
    /**
     * The backfill queue, most recently active room first. Held in state and replaced only when the
     * rooms in it actually change: rebuilding it sorts the whole account, which is not something to
     * do on every render, and a queue derived from the client alone would never notice a join or a
     * leave. Reordering between passes is harmless because progress is a set of room IDs.
     */
    const [feedRooms, setFeedRooms] = useState<Room[]>([]);

    /** Feed rooms not yet searched, in the order they should be searched. */
    const unsearchedRooms = useMemo(
        () => feedRooms.filter((room) => !searchedRooms.has(room.roomId)),
        [feedRooms, searchedRooms],
    );

    const entriesByRoom = useRef(new Map<string, ThreadFeedEntry[]>());
    const dirtyRooms = useRef(new Set<string>());
    /**
     * IDs of the rooms in the most recent full scan. `getVisibleRooms()` hides a room that has
     * been upgraded, which it can only determine by looking at every room's predecessors, so a
     * per-room predicate cannot reproduce it — without this, an event in an upgraded room would
     * put it back into the feed on the next dirty rescan.
     */
    const visibleRoomIds = useRef<ReadonlySet<string>>(new Set());

    const publish = useCallback(() => {
        setAllEntries(sortEntries([...entriesByRoom.current.values()].flat()));
    }, []);

    /**
     * Rebuilds the cached entries for the given rooms, forgetting rooms with none.
     *
     * `reuseFrom` is consulted for entries to keep rather than replace: a room whose entries come
     * out saying the same thing keeps the objects it already had, so `ThreadCard`'s memo holds and
     * neither the card nor its event tiles re-render. Only the whole-account pass passes it. The
     * dirty pass must not, because it is the sole reason a card re-renders when somebody else's
     * read receipt lands — a receipt changes none of the fields an entry carries, so entries that
     * compare equal are exactly the case where fresh identity is still needed.
     */
    const scanRooms = useCallback(
        (rooms: Room[], reuseFrom?: ReadonlyMap<string, ThreadFeedEntry[]>) => {
            const userId = client.getUserId();
            if (!userId) return;
            for (const room of rooms) {
                const entries = collectRoomEntries(room, userId);
                if (entries.length === 0) {
                    entriesByRoom.current.delete(room.roomId);
                    continue;
                }

                const previous = reuseFrom?.get(room.roomId);
                entriesByRoom.current.set(
                    room.roomId,
                    previous && entriesEqual(previous, entries) ? previous : entries,
                );
            }
        },
        [client],
    );

    const rescanAll = useCallback(() => {
        // Built into a fresh map rather than merged into the old one, so rooms that have been left
        // or hidden drop out. The entries themselves are carried over where a room still says the
        // same thing: this runs off every sync, and rebuilding every entry object would break the
        // memo on every mounted card several times a minute, re-rendering the whole feed and each
        // card's event tiles with it.
        const previousEntries = entriesByRoom.current;
        entriesByRoom.current = new Map();
        dirtyRooms.current.clear();

        const rooms = getFeedRooms(client, msc3946ProcessDynamicPredecessor);
        const roomIds = new Set(rooms.map((room) => room.roomId));
        const changed =
            roomIds.size !== visibleRoomIds.current.size || [...roomIds].some((id) => !visibleRoomIds.current.has(id));
        visibleRoomIds.current = roomIds;

        scanRooms(rooms, previousEntries);
        publish();
        setInitialised(true);
        if (changed) setFeedRooms(orderRoomsForBackfill(rooms));
    }, [client, msc3946ProcessDynamicPredecessor, scanRooms, publish]);

    const rescanDirty = useCallback(() => {
        if (dirtyRooms.current.size === 0) return;

        const rooms: Room[] = [];
        for (const roomId of dirtyRooms.current) {
            const room = client.getRoom(roomId);
            // Checked against the last full scan as well as the per-room predicate, because room
            // visibility is not a per-room property: an upgraded room is hidden only by virtue of
            // its successor existing.
            if (room && isFeedRoom(room) && visibleRoomIds.current.has(roomId)) rooms.push(room);
            else entriesByRoom.current.delete(roomId);
        }
        dirtyRooms.current.clear();

        scanRooms(rooms);
        publish();
    }, [client, scanRooms, publish]);

    // Trailing-only: a burst of sync traffic coalesces into a single pass at the end rather than
    // rescanning on the first event of the burst and again on the last.
    const scheduleDirtyRescan = useMemo(
        () =>
            throttle(rescanDirty, MIN_UPDATE_INTERVAL_MS, {
                leading: false,
                trailing: true,
            }),
        [rescanDirty],
    );
    const scheduleFullRescan = useMemo(
        () =>
            throttle(rescanAll, FULL_RESCAN_INTERVAL_MS, {
                leading: false,
                trailing: true,
            }),
        [rescanAll],
    );

    useEffect(() => {
        rescanAll();
        return () => {
            scheduleDirtyRescan.cancel();
            scheduleFullRescan.cancel();
        };
    }, [rescanAll, scheduleDirtyRescan, scheduleFullRescan]);

    const markDirty = useCallback(
        (roomId?: string | null) => {
            if (!roomId) return;
            dirtyRooms.current.add(roomId);
            scheduleDirtyRescan();
        },
        [scheduleDirtyRescan],
    );

    // Only events the client re-emits are useful here. `ThreadEvent.*` is emitted on Room and
    // never re-emitted to the client, but thread replies also surface as `RoomEvent.Timeline`,
    // which is re-emitted, so this still reacts to new replies.
    useEventEmitter(client, RoomEvent.Timeline, (_event: MatrixEvent, room?: Room) => markDirty(room?.roomId));
    useEventEmitter(client, RoomEvent.Receipt, (_event: MatrixEvent, room?: Room) => markDirty(room?.roomId));
    // Sending from a card produces a local echo, which with detached pending ordering never enters
    // the thread's timeline and so raises no `RoomEvent.Timeline`. Without this the feed does not
    // react to the user's own send at all, including its failure.
    useEventEmitter(client, RoomEvent.LocalEchoUpdated, (_event: MatrixEvent, room?: Room) => markDirty(room?.roomId));
    useEventEmitter(client, MatrixEventEvent.Decrypted, (event: MatrixEvent) => markDirty(event.getRoomId()));
    // Sync names no room, and is the only signal for the room list itself changing, so it drives
    // the whole-account pass instead of a per-room one.
    useEventEmitter(client, ClientEvent.Sync, scheduleFullRescan);

    // Without the server-side threads list, fetching a room's threads means creating a
    // persistent server-side filter and requesting its entire history. Doing that for every
    // room would litter the account with filters that every other client also syncs, so the
    // feed stays limited to threads already in memory instead.
    const canBackfill = Boolean(Thread.hasServerSideListSupport) && client.supportsThreads();

    const inFlight = useRef(false);
    const cancelled = useRef(false);
    /** Rooms whose fetch failed, retried once before the pass moves on. */
    const retryRooms = useRef<Room[]>([]);
    const retried = useRef(new Set<string>());
    const started = useRef(false);

    useEffect(() => {
        cancelled.current = false;
        return () => {
            cancelled.current = true;
        };
    }, []);

    const runBackfill = useCallback(
        async (limit: number): Promise<void> => {
            if (!canBackfill || inFlight.current) return;

            // Previously failed rooms are retried alongside the next unsearched ones, so a
            // transient error does not drop a room's threads from the feed permanently.
            const retries = retryRooms.current;
            retryRooms.current = [];
            const fresh = unsearchedRooms.slice(0, limit);
            const batch = [...retries, ...fresh];
            if (batch.length === 0) return;

            inFlight.current = true;
            setBackfilling(true);
            try {
                await forEachWithConcurrency(batch, BACKFILL_CONCURRENCY, async (room) => {
                    if (cancelled.current) return;
                    try {
                        // Both calls are no-ops once a room's threads are ready, so repeated
                        // passes over the same room cost nothing.
                        await room.createThreadsTimelineSets();
                        await room.fetchRoomThreads();
                        markDirty(room.roomId);
                    } catch (e) {
                        logger.warn(`useThreadsFeed: failed to fetch threads for ${room.roomId}`, e);
                        if (!retried.current.has(room.roomId)) {
                            retried.current.add(room.roomId);
                            retryRooms.current.push(room);
                        }
                    }
                });
            } finally {
                inFlight.current = false;
                if (!cancelled.current) {
                    // Recorded even for rooms that failed twice, so a room erroring persistently
                    // cannot hold up the queue. Retries are tracked separately.
                    setSearchedRooms((searched) => {
                        const next = new Set(searched);
                        for (const room of fresh) next.add(room.roomId);
                        return next;
                    });
                    setPendingRetries(retryRooms.current.length);
                    setBackfilling(false);
                    rescanDirty();
                }
            }
        },
        [canBackfill, unsearchedRooms, markDirty, rescanDirty],
    );

    useEffect(() => {
        if (started.current) return;
        // `Thread.hasServerSideListSupport` is set from server capabilities fetched asynchronously
        // at startup, so a page mounted from a deep link can render before it is known. Claiming
        // the one-shot start before there is anything to search would leave the first pass never
        // run; leaving it unclaimed means a later render picks it up.
        if (!canBackfill || unsearchedRooms.length === 0) return;
        started.current = true;
        void runBackfill(INITIAL_BACKFILL_ROOMS);
    }, [canBackfill, unsearchedRooms.length, runBackfill]);

    const loadMore = useCallback(() => {
        void runBackfill(BACKFILL_BATCH_ROOMS);
    }, [runBackfill]);

    const entries = useMemo(
        () => filterEntries(allEntries, filters, keepThreadId),
        [allEntries, filters, keepThreadId],
    );
    const hasMore = canBackfill && (unsearchedRooms.length > 0 || pendingRetries > 0);

    return {
        entries,
        backfilling,
        hasMore,
        loadMore,
        initialised,
    };
}

/**
 * Most recently active rooms first, so the first backfill pass covers the rooms whose
 * threads the user is most likely looking for.
 */
function orderRoomsForBackfill(rooms: Room[]): Room[] {
    return [...rooms].sort((a, b) => b.getLastActiveTimestamp() - a.getLastActiveTimestamp());
}

/** Runs `fn` over `items`, with at most `concurrency` outstanding at a time. */
async function forEachWithConcurrency<T>(
    items: T[],
    concurrency: number,
    fn: (item: T) => Promise<void>,
): Promise<void> {
    let next = 0;
    const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
        while (next < items.length) {
            await fn(items[next++]);
        }
    });
    await Promise.all(workers);
}
