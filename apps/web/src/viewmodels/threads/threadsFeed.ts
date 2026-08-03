/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, type Room, type Thread } from "matrix-js-sdk/src/matrix";

import { NotificationLevel } from "../../stores/notifications/NotificationLevel";
import { determineUnreadState } from "../../RoomNotifs";
import { isRoomVisible } from "../../stores/room-list-v3/isRoomVisible";

/**
 * How the threads feed is filtered. Held in component state only: deliberately not
 * persisted, so no fork-specific keys end up in storage shared with other Matrix clients.
 */
export enum ThreadsFeedFilter {
    All,
    Unread,
    Mentions,
}

/** A single thread in the cross-room threads feed. */
export interface ThreadFeedEntry {
    threadId: string;
    thread: Thread;
    room: Room;
    /** Timestamp of the most recent event in the thread, used for ordering. */
    latestTs: number;
    /** Notification level of this thread specifically, not of its room. */
    level: NotificationLevel;
    /** Whether the current user has sent anything in this thread. */
    participated: boolean;
}

/**
 * Whether the current user has participated in a thread.
 *
 * Prefers the server's `current_user_participated` on the bundled relationship, which the
 * SDK exposes as `hasCurrentUserParticipated`. That is only populated when the homeserver
 * supports threads, so fall back to scanning the loaded timeline, matching what the SDK
 * itself does when building an unsupported-server thread list.
 */
export function hasParticipated(thread: Thread, userId: string): boolean {
    if (thread.hasCurrentUserParticipated) return true;
    if (thread.rootEvent?.getSender() === userId) return true;
    return thread.timeline.some((event) => event.getSender() === userId);
}

/** Timestamp used to order the feed. Includes not-yet-sent local echoes. */
function getLatestTs(thread: Thread): number {
    return thread.replyToEvent?.getTs() ?? thread.rootEvent?.getTs() ?? 0;
}

/**
 * Build feed entries for a single room.
 *
 * Only reads threads the client already has in memory, so this performs no network
 * requests. Rooms are backfilled separately.
 */
export function collectRoomEntries(room: Room, userId: string): ThreadFeedEntry[] {
    const entries: ThreadFeedEntry[] = [];

    for (const thread of room.getThreads()) {
        // A thread with no root cannot be rendered.
        if (!thread.rootEvent) continue;

        const participated = hasParticipated(thread, userId);
        const { level } = determineUnreadState(room, thread.id, false);

        // Slack surfaces threads you follow. The closest Matrix equivalents are threads you
        // have taken part in, plus threads where something needs your attention even though
        // you have not replied yet.
        if (!participated && level < NotificationLevel.Highlight) continue;

        entries.push({
            threadId: thread.id,
            thread,
            room,
            latestTs: getLatestTs(thread),
            level,
            participated,
        });
    }

    return entries;
}

/** Rooms eligible for the feed, in the same visibility terms the room list uses. */
export function getFeedRooms(client: MatrixClient, msc3946ProcessDynamicPredecessor: boolean): Room[] {
    return client.getVisibleRooms(msc3946ProcessDynamicPredecessor).filter((room) => isRoomVisible(room));
}

/** Most recent thread activity first. */
export function sortEntries(entries: ThreadFeedEntry[]): ThreadFeedEntry[] {
    return [...entries].sort((a, b) => b.latestTs - a.latestTs);
}

export function filterEntries(entries: ThreadFeedEntry[], filter: ThreadsFeedFilter): ThreadFeedEntry[] {
    switch (filter) {
        case ThreadsFeedFilter.All:
            return entries;
        case ThreadsFeedFilter.Unread:
            return entries.filter((entry) => entry.level >= NotificationLevel.Activity);
        case ThreadsFeedFilter.Mentions:
            return entries.filter((entry) => entry.level >= NotificationLevel.Highlight);
        default: {
            const exhaustive: never = filter;
            throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
        }
    }
}
