/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    EventStatus,
    type MatrixClient,
    type MatrixEvent,
    RelationType,
    type Room,
    type Thread,
} from "matrix-js-sdk/src/matrix";

import { NotificationLevel } from "../../stores/notifications/NotificationLevel";
import { determineUnreadState } from "../../RoomNotifs";
import { isRoomVisible } from "../../stores/room-list-v3/isRoomVisible";

/**
 * A way the threads feed can be narrowed. Held in component state only: deliberately not
 * persisted, so no fork-specific keys end up in storage shared with other Matrix clients.
 */
export enum ThreadsFeedFilter {
    Unread = "unread",
    Mentions = "mentions",
    Unreplied = "unreplied",
}

/**
 * The filters currently applied. Any combination is valid and they narrow together, so
 * "Unread" and "Mentions" together means unread mentions. Empty means the whole feed, which is
 * why there is no "All" filter to select.
 */
export type ThreadsFeedFilters = ReadonlySet<ThreadsFeedFilter>;

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
    /** Whether any loaded event in the thread mentions the current user. */
    mentioned: boolean;
    /** Whether the current user has replied in this thread. Starting it does not count. */
    replied: boolean;
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

/**
 * Whether the current user has replied in a thread.
 *
 * Starting a thread is not replying in it: the point of knowing is to find threads still waiting
 * on the user, and a question they asked themselves is not one of them. A reply still in flight
 * counts, so a card does not claim to be unanswered while the answer is being sent; one that
 * failed to send does not.
 *
 * The loaded timeline is checked before the server's `current_user_participated`, because that
 * flag cannot distinguish a reply from having started the thread. It is only trusted for threads
 * the user did not start, where it is the sole way to know about a reply in history this client has
 * never loaded. The cost is that a thread the user started and answered long enough ago for the
 * answer to be unloaded reads as unanswered until the card is opened, which loads it. That is the
 * safer way round to be wrong: it over-reports what is waiting on the user rather than hiding it.
 */
export function hasReplied(thread: Thread, userId: string): boolean {
    // A thread's timeline carries the reactions and edits aimed at it as well as its replies, so
    // sending anything at all is not the test: reacting to a message is not answering it.
    const isReplyFromUser = (event: MatrixEvent): boolean =>
        event.getSender() === userId &&
        event.getId() !== thread.id &&
        event.isRelation(RelationType.Thread) &&
        event.status !== EventStatus.NOT_SENT;

    if (thread.timeline.some(isReplyFromUser)) return true;
    // Local echoes with detached pending ordering never enter the timeline above.
    if (thread.replyToEvent && isReplyFromUser(thread.replyToEvent)) return true;

    // An unknown root is not somebody else's root: without this, a thread whose root has not been
    // loaded would take the flag at face value, which is the reading this exists to avoid.
    const rootSender = thread.rootEvent?.getSender();
    return thread.hasCurrentUserParticipated && rootSender !== undefined && rootSender !== userId;
}

/**
 * Whether any loaded event in the thread mentions the user.
 *
 * Read from intentional mentions (`m.mentions.user_ids`) rather than from the thread's unread
 * state, because a highlight count clears as soon as the mention is read — including from
 * another client — which would drop the thread out of a feed that is supposed to show threads
 * the user was mentioned in.
 *
 * Only direct user mentions count: an `@room` ping is a room-wide announcement rather than a
 * reason to follow one thread. Mentions in events that have not been loaded, and legacy
 * mentions from clients predating `m.mentions`, are not detected; those threads still reach
 * the feed while they carry an unread highlight.
 */
export function wasMentioned(thread: Thread, userId: string): boolean {
    if (thread.rootEvent && mentionsUser(thread.rootEvent, userId)) return true;
    return thread.timeline.some((event) => mentionsUser(event, userId));
}

function mentionsUser(event: MatrixEvent, userId: string): boolean {
    const userIds = event.getContent()["m.mentions"]?.user_ids;
    return Array.isArray(userIds) && userIds.includes(userId);
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
        const mentioned = wasMentioned(thread, userId);
        const { level } = determineUnreadState(room, thread.id, false);

        // Slack surfaces threads you follow. The closest Matrix equivalents are threads you
        // have taken part in or been mentioned in. The unread-highlight case is kept as a
        // safety net for mentions this client cannot see in the loaded events.
        if (!participated && !mentioned && level < NotificationLevel.Highlight) continue;

        entries.push({
            threadId: thread.id,
            thread,
            room,
            latestTs: getLatestTs(thread),
            level,
            participated,
            mentioned,
            replied: hasReplied(thread, userId),
        });
    }

    return entries;
}

/** Whether a room's threads belong in the feed, in the same terms the room list uses. */
export function isFeedRoom(room: Room): boolean {
    return isRoomVisible(room);
}

/** Rooms eligible for the feed, in the same visibility terms the room list uses. */
export function getFeedRooms(client: MatrixClient, msc3946ProcessDynamicPredecessor: boolean): Room[] {
    return client.getVisibleRooms(msc3946ProcessDynamicPredecessor).filter(isFeedRoom);
}

/** Most recent thread activity first. */
export function sortEntries(entries: ThreadFeedEntry[]): ThreadFeedEntry[] {
    return [...entries].sort((a, b) => b.latestTs - a.latestTs);
}

/**
 * Reorders entries to match a previously held order, with anything new at the end.
 *
 * Used to stop the feed re-sorting itself while the user is reading part-way down it or has a
 * card expanded: a reply arriving in any room of the account changes the sort, which would
 * otherwise move whatever they are looking at. Threads absent from `order` are new since it was
 * taken and go last, in their own sorted order, rather than appearing mid-list where they would
 * push the rest down.
 */
export function applyHeldOrder(entries: ThreadFeedEntry[], order: readonly string[]): ThreadFeedEntry[] {
    const rank = new Map(order.map((threadId, index) => [threadId, index]));
    const rankOf = (threadId: string): number => rank.get(threadId) ?? Number.MAX_SAFE_INTEGER;
    return [...entries].sort((a, b) => rankOf(a.threadId) - rankOf(b.threadId));
}

function matchesFilter(entry: ThreadFeedEntry, filter: ThreadsFeedFilter): boolean {
    switch (filter) {
        case ThreadsFeedFilter.Unread:
            return entry.level >= NotificationLevel.Activity;
        case ThreadsFeedFilter.Mentions:
            // Deliberately not a notification-level test: `NotificationLevel.Unsent` outranks
            // `Highlight`, so a thread with a failed local echo would otherwise show up here.
            return entry.mentioned;
        case ThreadsFeedFilter.Unreplied:
            return !entry.replied;
        default: {
            const exhaustive: never = filter;
            throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
        }
    }
}

/**
 * Applies the active filters, always keeping `keepThreadId` whether it matches or not.
 *
 * Filters narrow together rather than widen: "Unread" and "Mentions" together means unread mentions.
 * The looser reading would make each chip added return more, which is not what selecting a filter is
 * for.
 *
 * Reading a thread is what makes it stop matching "Unread", so a card expanded under that filter
 * would otherwise delete itself — and the composer being typed into — the moment its read receipt
 * lands. The thread the user is looking at stays until they collapse it.
 */
export function filterEntries(
    entries: ThreadFeedEntry[],
    filters: ThreadsFeedFilters,
    keepThreadId?: string | null,
): ThreadFeedEntry[] {
    if (filters.size === 0) return entries;
    return entries.filter(
        (entry) => entry.threadId === keepThreadId || [...filters].every((filter) => matchesFilter(entry, filter)),
    );
}
