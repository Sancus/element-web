/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ClientEvent, MatrixEventEvent, type Room, RoomEvent, Thread } from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import { throttle } from "lodash";

import { useMatrixClientContext } from "../../contexts/MatrixClientContext";
import { useSettingValue } from "../../hooks/useSettings";
import { useEventEmitter } from "../../hooks/useEventEmitter";
import {
    collectRoomEntries,
    filterEntries,
    getFeedRooms,
    sortEntries,
    type ThreadFeedEntry,
    type ThreadsFeedFilter,
} from "./threadsFeed";

const MIN_UPDATE_INTERVAL_MS = 500;

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
 */
export function useThreadsFeed(filter: ThreadsFeedFilter): ThreadsFeedState {
    const client = useMatrixClientContext();
    const msc3946ProcessDynamicPredecessor = useSettingValue("feature_dynamic_room_predecessors");

    const [allEntries, setAllEntries] = useState<ThreadFeedEntry[]>([]);
    const [backfilledCount, setBackfilledCount] = useState(0);
    const [backfilling, setBackfilling] = useState(false);

    // Rooms are ordered once per mount so that backfill progress stays stable while the
    // user scrolls, rather than being reshuffled by incoming activity.
    const feedRooms = useMemo(
        () => orderRoomsForBackfill(getFeedRooms(client, msc3946ProcessDynamicPredecessor)),
        [client, msc3946ProcessDynamicPredecessor],
    );

    const recompute = useCallback(() => {
        const userId = client.getUserId();
        if (!userId) return;
        const collected = getFeedRooms(client, msc3946ProcessDynamicPredecessor).flatMap((room) =>
            collectRoomEntries(room, userId),
        );
        setAllEntries(sortEntries(collected));
    }, [client, msc3946ProcessDynamicPredecessor]);

    // Trailing-only, matching the upstream threads activity centre: a burst of sync traffic
    // coalesces into a single pass instead of rescanning once per event.
    const scheduleRecompute = useMemo(
        () => throttle(recompute, MIN_UPDATE_INTERVAL_MS, { leading: false, trailing: true }),
        [recompute],
    );

    useEffect(() => {
        recompute();
        return () => scheduleRecompute.cancel();
    }, [recompute, scheduleRecompute]);

    // Only events the client re-emits are useful here. `ThreadEvent.*` is emitted on Room
    // and never re-emitted to the client, but thread replies also surface as
    // `RoomEvent.Timeline`, which is re-emitted, so this still reacts to new replies.
    useEventEmitter(client, ClientEvent.Sync, scheduleRecompute);
    useEventEmitter(client, MatrixEventEvent.Decrypted, scheduleRecompute);
    useEventEmitter(client, RoomEvent.Timeline, scheduleRecompute);
    useEventEmitter(client, RoomEvent.Receipt, scheduleRecompute);

    // Without the server-side threads list, fetching a room's threads means creating a
    // persistent server-side filter and requesting its entire history. Doing that for every
    // room would litter the account with filters that every other client also syncs, so the
    // feed stays limited to threads already in memory instead.
    const canBackfill = Boolean(Thread.hasServerSideListSupport) && client.supportsThreads();

    const inFlight = useRef(false);
    const cursor = useRef(0);
    const cancelled = useRef(false);
    useEffect(() => {
        cancelled.current = false;
        return () => {
            cancelled.current = true;
        };
    }, []);

    const runBackfill = useCallback(
        async (limit: number): Promise<void> => {
            if (!canBackfill || inFlight.current) return;
            const batch = feedRooms.slice(cursor.current, cursor.current + limit);
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
                    } catch (e) {
                        logger.warn(`useThreadsFeed: failed to fetch threads for ${room.roomId}`, e);
                    }
                });
            } finally {
                cursor.current += batch.length;
                inFlight.current = false;
                if (!cancelled.current) {
                    setBackfilledCount(cursor.current);
                    setBackfilling(false);
                    recompute();
                }
            }
        },
        [canBackfill, feedRooms, recompute],
    );

    const startedRef = useRef(false);
    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;
        void runBackfill(INITIAL_BACKFILL_ROOMS);
    }, [runBackfill]);

    const loadMore = useCallback(() => {
        void runBackfill(BACKFILL_BATCH_ROOMS);
    }, [runBackfill]);

    const entries = useMemo(() => filterEntries(allEntries, filter), [allEntries, filter]);
    const hasMore = canBackfill && backfilledCount < feedRooms.length;

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
