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
    filterEntries,
    getFeedRooms,
    isFeedRoom,
    sortEntries,
    type ThreadFeedEntry,
    type ThreadsFeedFilter,
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
export function useThreadsFeed(filter: ThreadsFeedFilter): ThreadsFeedState {
    const client = useMatrixClientContext();
    const msc3946ProcessDynamicPredecessor = useSettingValue("feature_dynamic_room_predecessors");

    const [allEntries, setAllEntries] = useState<ThreadFeedEntry[]>([]);
    const [backfilledCount, setBackfilledCount] = useState(0);
    const [backfilling, setBackfilling] = useState(false);
    const [pendingRetries, setPendingRetries] = useState(0);

    // Rooms are ordered once per room list so that backfill progress stays stable while the
    // user scrolls, rather than being reshuffled by incoming activity.
    const feedRooms = useMemo(
        () => orderRoomsForBackfill(getFeedRooms(client, msc3946ProcessDynamicPredecessor)),
        [client, msc3946ProcessDynamicPredecessor],
    );

    const entriesByRoom = useRef(new Map<string, ThreadFeedEntry[]>());
    const dirtyRooms = useRef(new Set<string>());

    const publish = useCallback(() => {
        setAllEntries(sortEntries([...entriesByRoom.current.values()].flat()));
    }, []);

    /** Rebuilds the cached entries for the given rooms, forgetting rooms with none. */
    const scanRooms = useCallback(
        (rooms: Room[]) => {
            const userId = client.getUserId();
            if (!userId) return;
            for (const room of rooms) {
                const entries = collectRoomEntries(room, userId);
                if (entries.length > 0) entriesByRoom.current.set(room.roomId, entries);
                else entriesByRoom.current.delete(room.roomId);
            }
        },
        [client],
    );

    const rescanAll = useCallback(() => {
        // Rebuilt from scratch rather than merged, so rooms that have been left or hidden drop out.
        entriesByRoom.current = new Map();
        dirtyRooms.current.clear();
        scanRooms(getFeedRooms(client, msc3946ProcessDynamicPredecessor));
        publish();
    }, [client, msc3946ProcessDynamicPredecessor, scanRooms, publish]);

    const rescanDirty = useCallback(() => {
        if (dirtyRooms.current.size === 0) return;

        const rooms: Room[] = [];
        for (const roomId of dirtyRooms.current) {
            const room = client.getRoom(roomId);
            if (room && isFeedRoom(room)) rooms.push(room);
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
    const cursor = useRef(0);
    const cancelled = useRef(false);
    /** Rooms whose fetch failed, retried once before the pass moves on. */
    const retryRooms = useRef<Room[]>([]);
    const retried = useRef(new Set<string>());
    /** Bumped when the room list is replaced, to disown a pass started against the old one. */
    const generation = useRef(0);
    const started = useRef(false);

    useEffect(() => {
        cancelled.current = false;
        return () => {
            cancelled.current = true;
        };
    }, []);

    // Declared before the effect that starts the first pass, so a new room list resets progress
    // before that pass is restarted against it.
    useEffect(() => {
        generation.current += 1;
        cursor.current = 0;
        retryRooms.current = [];
        retried.current.clear();
        started.current = false;
        setBackfilledCount(0);
        setPendingRetries(0);
    }, [feedRooms]);

    const runBackfill = useCallback(
        async (limit: number): Promise<void> => {
            if (!canBackfill || inFlight.current) return;

            // Previously failed rooms are retried alongside the next unsearched ones, so a
            // transient error does not drop a room's threads from the feed permanently.
            const retries = retryRooms.current;
            retryRooms.current = [];
            const fresh = feedRooms.slice(cursor.current, cursor.current + limit);
            const batch = [...retries, ...fresh];
            if (batch.length === 0) return;

            const startedGeneration = generation.current;
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
                // A pass against a superseded room list must not advance the new cursor, but still
                // has to stop the spinner it started.
                if (generation.current === startedGeneration) cursor.current += fresh.length;
                if (!cancelled.current) {
                    setBackfilledCount(cursor.current);
                    setPendingRetries(retryRooms.current.length);
                    setBackfilling(false);
                    rescanDirty();
                }
            }
        },
        [canBackfill, feedRooms, markDirty, rescanDirty],
    );

    useEffect(() => {
        if (started.current) return;
        started.current = true;
        void runBackfill(INITIAL_BACKFILL_ROOMS);
    }, [runBackfill]);

    const loadMore = useCallback(() => {
        void runBackfill(BACKFILL_BATCH_ROOMS);
    }, [runBackfill]);

    const entries = useMemo(() => filterEntries(allEntries, filter), [allEntries, filter]);
    const hasMore = canBackfill && (backfilledCount < feedRooms.length || pendingRetries > 0);

    return {
        entries,
        backfilling,
        hasMore,
        loadMore,
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
