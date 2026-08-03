/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, memo, useCallback, useEffect, useId, useRef, useState } from "react";
import {
    Direction,
    type IEventRelation,
    type MatrixClient,
    type MatrixEvent,
    ReceiptType,
    type Relations,
    type Room,
    type Thread,
    THREAD_RELATION_TYPE,
} from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import classNames from "classnames";

import { _t } from "../../../languageHandler";
import { haveRendererForEvent } from "../../../events/EventTileFactory";
import shouldHideEvent from "../../../shouldHideEvent";
import SettingsStore from "../../../settings/SettingsStore";
import { Action } from "../../../dispatcher/actions";
import defaultDispatcher from "../../../dispatcher/dispatcher";
import { type ActionPayload } from "../../../dispatcher/payloads";
import { type FocusComposerPayload } from "../../../dispatcher/payloads/FocusComposerPayload";
import { type ViewRoomPayload } from "../../../dispatcher/payloads/ViewRoomPayload";
import { useDispatcher } from "../../../hooks/useDispatcher";
import { useMatrixClientContext } from "../../../contexts/MatrixClientContext";
import { ScopedRoomContextProvider } from "../../../contexts/ScopedRoomContext";
import { RoomUploadContextProvider } from "../../../viewmodels/room/RoomUploadViewModel";
import { type RoomContextType, TimelineRenderingType } from "../../../contexts/RoomContext";
import EditorStateTransfer from "../../../utils/EditorStateTransfer";
import { Layout } from "../../../settings/enums/Layout";
import { formatRelativeTime } from "../../../DateUtils";
import { formatList } from "../../../utils/FormattingUtils";
import { NotificationLevel } from "../../../stores/notifications/NotificationLevel";
import { type ThreadFeedEntry } from "../../../viewmodels/threads/threadsFeed";
import EventTile from "../rooms/EventTile";
import MessageComposer from "../rooms/MessageComposer";
import RoomAvatar from "../avatars/RoomAvatar";
import { StatelessNotificationBadge } from "../rooms/NotificationBadge/StatelessNotificationBadge";
import type ResizeNotifier from "../../../utils/ResizeNotifier";
import { usePermalinkCreator, useThreadCardRoomContext } from "./useThreadCardRoomContext";

/** Replies shown on a collapsed card, newest last. */
const COLLAPSED_REPLY_COUNT = 2;
/** Replies requested per "load earlier" step. */
const PAGINATE_LIMIT = 20;

interface ThreadCardProps {
    entry: ThreadFeedEntry;
    expanded: boolean;
    onToggleExpanded: (threadId: string) => void;
    resizeNotifier: ResizeNotifier;
}

/**
 * Builds the relation used when replying into a thread.
 *
 * Mirrors `ThreadView`'s relation exactly so replies sent from the feed are
 * indistinguishable from replies sent in the thread panel.
 */
export function makeThreadRelation(thread: Thread): IEventRelation {
    const relation: IEventRelation = {
        rel_type: THREAD_RELATION_TYPE.name,
        event_id: thread.id,
        is_falling_back: true,
    };

    relation["m.in_reply_to"] = { event_id: thread.lastReply()?.getId() ?? thread.id };

    return relation;
}

/**
 * The thread's renderable replies, oldest first, excluding the root event.
 *
 * The SDK puts reactions and edits into the thread's timeline alongside real replies. They have
 * no tile renderer, so passing them to `EventTile` renders a literal "This event could not be
 * displayed" row — and since people habitually react to the newest message, a collapsed card's
 * last-two-replies slice would very often be one reply and one error row. This applies the same
 * pair of predicates `TimelinePanel` uses when it builds tiles.
 */
function getReplies(thread: Thread, client: MatrixClient, context: RoomContextType): MatrixEvent[] {
    const rootId = thread.rootEvent?.getId();
    return thread.timeline.filter(
        (event) =>
            event.getId() !== rootId &&
            haveRendererForEvent(event, client, context.showHiddenEvents) &&
            !shouldHideEvent(event, context),
    );
}

/**
 * The single latest reply the server bundled with the thread root, used as a preview while
 * the thread's own timeline is still empty.
 */
function getBundledReplyPreview(thread: Thread): MatrixEvent[] {
    const latest = thread.replyToEvent;
    if (!latest || latest.getId() === thread.rootEvent?.getId()) return [];
    return [latest];
}

/** The card's edit state, but only for the one event actually being edited. */
function editStateFor(editState: EditorStateTransfer | undefined, event: MatrixEvent): EditorStateTransfer | undefined {
    if (!editState) return undefined;
    return editState.getEvent().getId() === event.getId() ? editState : undefined;
}

/**
 * Replies still being sent, or that failed to send.
 *
 * Element runs with detached pending-event ordering, so a local echo lives in the room's pending
 * list rather than in the thread's timeline. Without this, sending from the feed clears the
 * composer and shows nothing at all: a failed send offers no retry or cancel affordance, because
 * the event it belongs to was never rendered. Matches how `TimelinePanel` appends them.
 */
function getPendingReplies(thread: Thread, room: Room): MatrixEvent[] {
    const pending = thread.timelineSet.getPendingEvents();
    return pending.filter((event) => room.eventShouldLiveIn(event, pending).threadId === thread.id);
}

/**
 * Display names of everyone who has spoken in the thread, in first-spoke order.
 *
 * Takes already-filtered replies so that somebody who only reacted is not listed as having
 * taken part in the conversation.
 */
function getParticipantNames(thread: Thread, replies: MatrixEvent[]): string[] {
    const seen = new Set<string>();
    const names: string[] = [];
    const events = thread.rootEvent ? [thread.rootEvent, ...replies] : replies;

    for (const event of events) {
        const sender = event.getSender();
        if (!sender || seen.has(sender)) continue;
        seen.add(sender);
        names.push(event.sender?.rawDisplayName ?? sender);
    }

    return names;
}

/**
 * A single thread in the cross-room feed: the room it belongs to, the thread root, and
 * either a preview of recent replies or the full conversation with a composer.
 *
 * Memoized because a card is expensive — several event tiles, avatars and relation lookups — and
 * the feed keeps entry objects referentially stable for rooms that have not changed, so a reply
 * arriving in one room re-renders only that room's cards.
 */
export const ThreadCard = memo(function ThreadCard({
    entry,
    expanded,
    onToggleExpanded,
    resizeNotifier,
}: ThreadCardProps): JSX.Element {
    const { thread, room } = entry;
    const client = useMatrixClientContext();
    const roomContext = useThreadCardRoomContext(room, thread);
    const permalinkCreator = usePermalinkCreator(room);
    const [paginating, setPaginating] = useState(false);
    const [replyToEvent, setReplyToEvent] = useState<MatrixEvent | undefined>();
    const [editState, setEditState] = useState<EditorStateTransfer | undefined>();

    const replies = getReplies(thread, client, roomContext);
    // Kept out of `replies` so they do not disturb the hidden-reply arithmetic or the participant
    // summary; they are appended at the end of the card, where they belong chronologically.
    const pendingReplies = getPendingReplies(thread, room);
    // Until a thread's timeline has been paginated the only reply available is the one the
    // server bundles with the root event, so fall back to it rather than showing a card with
    // no replies at all.
    const previewReplies = replies.length > 0 ? replies : getBundledReplyPreview(thread);
    const hiddenReplyCount = Math.max(thread.length - Math.min(previewReplies.length, COLLAPSED_REPLY_COUNT), 0);
    const visibleReplies = expanded ? replies : previewReplies.slice(-COLLAPSED_REPLY_COUNT);

    // Recomputed every render, as `ThreadView` does, so the reply fallback always points at
    // the newest reply rather than whichever one was latest when the card first mounted.
    const threadRelation = makeThreadRelation(thread);

    const getRelationsForEvent = useCallback(
        (eventId: string, relationType: string, eventType: string): Relations | undefined =>
            thread.timelineSet.relations?.getChildEventsForEvent(eventId, relationType, eventType),
        [thread],
    );

    const canPaginate = Boolean(thread.liveTimeline.getPaginationToken(Direction.Backward));

    const onLoadEarlier = useCallback(async () => {
        setPaginating(true);
        try {
            await client.paginateEventTimeline(thread.liveTimeline, {
                backwards: true,
                limit: PAGINATE_LIMIT,
            });
        } catch (e) {
            logger.warn(`ThreadCard: failed to paginate thread ${thread.id}`, e);
        } finally {
            setPaginating(false);
        }
    }, [client, thread]);

    const onExpand = useCallback(() => {
        onToggleExpanded(thread.id);
    }, [onToggleExpanded, thread.id]);

    /** Whether an action's target event belongs to this card's thread rather than another card's. */
    const ownsEvent = useCallback(
        (event?: MatrixEvent | null): boolean => Boolean(event && event.getThread()?.id === thread.id),
        [thread.id],
    );

    // `EventTile`'s reply and edit controls identify their target with nothing but
    // `TimelineRenderingType.Thread`, because upstream never has more than one thread timeline
    // on screen: `RoomViewStore` skips thread replies entirely and `ThreadView` claims them all.
    // The feed has a timeline per card, so each card claims only the actions whose event belongs
    // to its own thread. Without this, a reply started on one card would be captured by whichever
    // card happened to have a composer open, and be sent to the wrong thread.
    useDispatcher(defaultDispatcher, (payload: ActionPayload) => {
        switch (payload.action) {
            case "reply_to_event":
                if (payload.context !== TimelineRenderingType.Thread) return;
                // A null event cancels the reply, which is how the composer clears a quote on
                // Escape. It names no event to match against, so every card drops its reply; only
                // the one with an open composer has one.
                if (!payload.event) {
                    setReplyToEvent(undefined);
                    return;
                }
                if (!ownsEvent(payload.event)) return;
                setReplyToEvent(payload.event);
                // The composer only exists once a card is expanded, so replying has to open it.
                if (!expanded) onToggleExpanded(thread.id);
                break;

            case Action.EditEvent:
                if (payload.timelineRenderingType !== TimelineRenderingType.Thread) return;
                // A null event cancels editing. Only the card actually editing has state to clear.
                if (!payload.event) {
                    setEditState(undefined);
                    return;
                }
                if (!ownsEvent(payload.event)) return;
                setEditState(new EditorStateTransfer(payload.event));
                if (!expanded) onToggleExpanded(thread.id);
                break;

            default:
                break;
        }
    });

    // Collapsing discards the card's in-progress reply and edit, so reopening it later does not
    // resume a quote or an edit the user has visibly walked away from.
    useEffect(() => {
        if (expanded) return;
        setReplyToEvent(undefined);
        setEditState(undefined);
    }, [expanded]);

    // Expanding and collapsing both unmount the control that was activated to trigger them, so
    // without moving focus deliberately it falls back to the document body and a keyboard user is
    // returned to the top of the page. Expanding hands focus to the composer, as clicking a
    // composer-shaped "Reply…" button implies; collapsing hands it back to the control that
    // replaces it, as a disclosure should.
    const cardRef = useRef<HTMLElement | null>(null);
    const replyPromptRef = useRef<HTMLButtonElement | null>(null);
    const wasExpanded = useRef(expanded);
    useEffect(() => {
        const previously = wasExpanded.current;
        wasExpanded.current = expanded;
        if (previously === expanded) return;

        // Only claim focus if this card had it, so a collapse triggered from elsewhere on the page
        // does not drag focus across the feed.
        const active = document.activeElement;
        const heldFocus = active === document.body || (active !== null && cardRef.current?.contains(active) === true);
        if (!heldFocus) return;

        if (expanded) {
            defaultDispatcher.dispatch<FocusComposerPayload>({
                action: Action.FocusSendMessageComposer,
                context: TimelineRenderingType.Thread,
            });
        } else {
            replyPromptRef.current?.focus();
        }
    }, [expanded]);

    const onKeyDown = useCallback(
        (ev: React.KeyboardEvent) => {
            if (!expanded || ev.key !== "Escape") return;
            // Only collapse if the key press was not consumed by something inside the card, such
            // as a composer autocomplete or an open menu.
            if (ev.defaultPrevented) return;
            ev.stopPropagation();
            onToggleExpanded(thread.id);
        },
        [expanded, onToggleExpanded, thread.id],
    );

    // "Show N more replies" counts every reply the thread has, but a thread seeded from sync may
    // only have its bundled latest reply loaded. Fetch one page on expand so the promised replies
    // actually appear, instead of the count being replaced by a "load earlier" button. Bounded to
    // a single page per expansion; the button covers the rest.
    const autoPaginated = useRef(false);
    useEffect(() => {
        if (!expanded) {
            autoPaginated.current = false;
            return;
        }
        if (autoPaginated.current || !canPaginate || replies.length >= thread.length) return;
        autoPaginated.current = true;
        void onLoadEarlier();
    }, [expanded, canPaginate, replies.length, thread.length, onLoadEarlier]);

    // Reading a thread in the feed clears its unread state, as opening it in the thread panel
    // would. `sendReadReceipt` derives the thread from the event's thread root, so this sends
    // a threaded receipt and never marks the whole room as read.
    //
    // Keyed on the newest event rather than on the thread's notification level, so replies that
    // arrive while the card is open are marked read too. Keying on the level cannot do that: it
    // drops to None as soon as the first receipt lands, and a reply arriving before that leaves it
    // unchanged, so in both cases the effect does not run again.
    const receiptedEventId = useRef<string | null>(null);
    const latestEventId = (thread.lastReply() ?? thread.rootEvent)?.getId();
    useEffect(() => {
        if (!expanded) return;

        const latest = thread.lastReply() ?? thread.rootEvent;
        // A local echo has no event ID the server would accept a receipt for.
        if (!latest || latest.status !== null) return;
        const eventId = latest.getId();
        if (!eventId || receiptedEventId.current === eventId) return;
        receiptedEventId.current = eventId;

        const receiptType = SettingsStore.getValue("sendReadReceipts", room.roomId)
            ? ReceiptType.Read
            : ReceiptType.ReadPrivate;
        client.sendReadReceipt(latest, receiptType).catch((e) => {
            logger.warn(`ThreadCard: failed to send read receipt for thread ${thread.id}`, e);
        });
    }, [expanded, latestEventId, thread, client, room.roomId]);

    const onViewInRoom = useCallback(() => {
        defaultDispatcher.dispatch<ViewRoomPayload>({
            action: Action.ViewRoom,
            room_id: room.roomId,
            event_id: thread.id,
            highlighted: true,
            metricsTrigger: undefined,
        });
    }, [room.roomId, thread.id]);

    const participantNames = getParticipantNames(thread, replies);
    // Ties the expand/collapse controls to the region they disclose, so a screen reader
    // announces the card's state rather than treating each control as a plain button.
    const bodyId = useId();

    const body = (
        // `mx_ThreadView` carries the thread-mode `EventTile` styling, which `_EventTile.pcss`
        // scopes to that class rather than to the rendering type the tiles are given. Without it
        // the tiles fall back to room-timeline layout: room names reappear, and hidden events and
        // their avatars are positioned for a full-width timeline. The panel's own layout rules are
        // compounded onto `.mx_ThreadPanel`, so they are not picked up here.
        <div className="mx_ThreadCard_body mx_ThreadView" id={bodyId}>
            {/* `EventTile` renders as an `li` in thread mode, so the events form a real
                list, with the controls that sit between them as list items too. */}
            <ol className="mx_ThreadCard_events">
                {thread.rootEvent && (
                    <EventTile
                        mxEvent={thread.rootEvent}
                        permalinkCreator={permalinkCreator}
                        layout={Layout.Group}
                        showReadReceipts={false}
                        showReactions={true}
                        alwaysShowTimestamps={true}
                        getRelationsForEvent={getRelationsForEvent}
                        isTwelveHour={roomContext.showTwelveHourTimestamps}
                        showUrlPreview={false}
                        editState={editStateFor(editState, thread.rootEvent)}
                    />
                )}

                {expanded && canPaginate && (
                    <li className="mx_ThreadCard_control">
                        <button
                            type="button"
                            className="mx_ThreadCard_loadEarlier"
                            disabled={paginating}
                            onClick={() => void onLoadEarlier()}
                        >
                            {paginating ? _t("threads_view|loading") : _t("threads_view|load_earlier")}
                        </button>
                    </li>
                )}

                {!expanded && hiddenReplyCount > 0 && (
                    <li className="mx_ThreadCard_control">
                        <button
                            type="button"
                            className="mx_ThreadCard_showMore"
                            onClick={onExpand}
                            aria-expanded={expanded}
                            aria-controls={bodyId}
                        >
                            {_t("threads_view|show_more_replies", {
                                count: hiddenReplyCount,
                            })}
                        </button>
                    </li>
                )}

                {[...visibleReplies, ...pendingReplies].map((event) => (
                    <EventTile
                        key={event.getId()}
                        mxEvent={event}
                        permalinkCreator={permalinkCreator}
                        layout={Layout.Group}
                        showReadReceipts={false}
                        showReactions={true}
                        alwaysShowTimestamps={true}
                        getRelationsForEvent={getRelationsForEvent}
                        isTwelveHour={roomContext.showTwelveHourTimestamps}
                        showUrlPreview={false}
                        editState={editStateFor(editState, event)}
                    />
                ))}
            </ol>

            {expanded ? (
                <>
                    <MessageComposer
                        room={room}
                        resizeNotifier={resizeNotifier}
                        relation={threadRelation}
                        replyToEvent={replyToEvent}
                        permalinkCreator={permalinkCreator}
                        compact={true}
                    />
                </>
            ) : (
                <button
                    type="button"
                    ref={replyPromptRef}
                    className="mx_ThreadCard_replyPrompt"
                    onClick={onExpand}
                    aria-expanded={expanded}
                    aria-controls={bodyId}
                >
                    {_t("threads_view|reply_prompt")}
                </button>
            )}
        </div>
    );

    return (
        <ScopedRoomContextProvider {...roomContext} replyToEvent={replyToEvent}>
            <article
                ref={cardRef}
                className={classNames("mx_ThreadCard", {
                    mx_ThreadCard_expanded: expanded,
                })}
                aria-label={_t("threads_view|card_label", {
                    roomName: room.name,
                })}
                onKeyDown={onKeyDown}
            >
                <header className="mx_ThreadCard_roomHeader">
                    <button
                        type="button"
                        className="mx_ThreadCard_roomButton"
                        onClick={onViewInRoom}
                        title={_t("threads_view|view_in_room")}
                    >
                        <RoomAvatar room={room} size="20px" />
                        <span className="mx_ThreadCard_roomName">{room.name}</span>
                    </button>
                    {entry.level > NotificationLevel.None && (
                        <StatelessNotificationBadge level={entry.level} count={0} symbol={null} forceDot={true} />
                    )}
                    {/* The feed is sorted by recency and spans every room, so a card needs to say
                        when it was last active. Event tiles alone cannot: they show time of day,
                        and the date separators that supply the missing context in a room timeline
                        do not exist here. */}
                    <time className="mx_ThreadCard_lastActivity" dateTime={new Date(entry.latestTs).toISOString()}>
                        {formatRelativeTime(new Date(entry.latestTs), roomContext.showTwelveHourTimestamps)}
                    </time>
                    {expanded && (
                        // Kept in the header rather than below the composer: an expanded card can be
                        // taller than the viewport, and a collapse control at the very bottom means
                        // scrolling the whole conversation to find the way back.
                        <button
                            type="button"
                            className="mx_ThreadCard_collapse"
                            onClick={onExpand}
                            aria-expanded={expanded}
                            aria-controls={bodyId}
                        >
                            {_t("threads_view|collapse")}
                        </button>
                    )}
                    {/* Last in the header so that it wraps onto its own line below the room name. */}
                    {participantNames.length > 0 && (
                        <span className="mx_ThreadCard_participants">{formatList(participantNames, 2, true)}</span>
                    )}
                </header>

                {/* Only the expanded card gets an upload context, because it is the only card with
                    a composer or an editor. A `RoomUploadContextProvider` claims any
                    `ComposerFileInsert` aimed at a thread, and the module API's payload names no
                    room or thread, so one provider per card would upload a module's files into
                    every thread in the feed at once. */}
                {expanded ? (
                    <RoomUploadContextProvider threadRelation={threadRelation}>{body}</RoomUploadContextProvider>
                ) : (
                    body
                )}
            </article>
        </ScopedRoomContextProvider>
    );
});
