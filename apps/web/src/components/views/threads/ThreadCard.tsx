/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, memo, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
    Direction,
    type IEventRelation,
    type MatrixClient,
    type MatrixEvent,
    type Relations,
    type Room,
    type Thread,
    THREAD_RELATION_TYPE,
} from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import classNames from "classnames";
import { Tooltip } from "@vector-im/compound-web";

import { _t } from "../../../languageHandler";
import { haveRendererForEvent } from "../../../events/EventTileFactory";
import shouldHideEvent from "../../../shouldHideEvent";
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
import UserActivity from "../../../UserActivity";
import { isClearableByReceipt, NotificationLevel } from "../../../stores/notifications/NotificationLevel";
import { clearThreadNotification, threadReceiptTarget } from "../../../utils/notifications";
import { type ThreadFeedEntry } from "../../../viewmodels/threads/threadsFeed";
import { ThreadCardMenu } from "./ThreadCardMenu";
import EventTile from "../rooms/EventTile";
import MessageComposer from "../rooms/MessageComposer";
import RoomAvatar from "../avatars/RoomAvatar";
import { StatelessNotificationBadge } from "../rooms/NotificationBadge/StatelessNotificationBadge";
import type ResizeNotifier from "../../../utils/ResizeNotifier";
import { usePermalinkCreator, useThreadCardRoomContext } from "./useThreadCardRoomContext";

/** Replies shown on a collapsed card, newest last. */
const COLLAPSED_REPLY_COUNT = 2;
/** Participants named in the card header before the rest become "and N others". */
const PARTICIPANT_NAME_LIMIT = 2;
/** Replies requested per pagination request. */
const PAGINATE_LIMIT = 20;
/**
 * Replies fetched in one go when a thread's replies are shown.
 *
 * Normal threads are read in full, because a conversation broken across a "load earlier" button is
 * a conversation the reader has to reassemble by hand. The cap only exists so that opening a
 * thread with thousands of replies does not spend the rest of the session paginating; past it the
 * card keeps the manual control.
 */
const AUTO_LOAD_REPLY_CAP = 200;

interface ThreadCardProps {
    entry: ThreadFeedEntry;
    /**
     * Whether this is the feed's active card: the one showing a composer, and the one the feed
     * exempts from filtering and re-sorting. At most one card is active at a time.
     */
    active: boolean;
    /** Makes this card the active one, or clears the active card when passed null. */
    onSetActive: (threadId: string | null) => void;
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
    active,
    onSetActive,
    resizeNotifier,
}: ThreadCardProps): JSX.Element {
    const { thread, room } = entry;
    const client = useMatrixClientContext();
    const roomContext = useThreadCardRoomContext(room, thread);
    const permalinkCreator = usePermalinkCreator(room);
    const [paginating, setPaginating] = useState(false);
    const [replyToEvent, setReplyToEvent] = useState<MatrixEvent | undefined>();
    const [editState, setEditState] = useState<EditorStateTransfer | undefined>();
    /**
     * Whether the whole conversation is shown rather than the last couple of replies.
     *
     * Deliberately separate from `active`: opening the composer to write a reply is not a request
     * to read the entire thread, and conflating the two means clicking "Reply…" unfolds a hundred
     * messages the user did not ask for.
     */
    const [repliesExpanded, setRepliesExpanded] = useState(false);

    const replies = getReplies(thread, client, roomContext);
    // Kept out of `replies` so they do not disturb the hidden-reply arithmetic or the participant
    // summary; they are appended at the end of the card, where they belong chronologically.
    const pendingReplies = getPendingReplies(thread, room);
    // Until a thread's timeline has been paginated the only reply available is the one the
    // server bundles with the root event, so fall back to it rather than showing a card with
    // no replies at all.
    const previewReplies = replies.length > 0 ? replies : getBundledReplyPreview(thread);
    const hiddenReplyCount = Math.max(thread.length - Math.min(previewReplies.length, COLLAPSED_REPLY_COUNT), 0);
    const visibleReplies = repliesExpanded ? replies : previewReplies.slice(-COLLAPSED_REPLY_COUNT);

    // Recomputed every render, as `ThreadView` does, so the reply fallback always points at
    // the newest reply rather than whichever one was latest when the card first mounted.
    const threadRelation = makeThreadRelation(thread);

    const getRelationsForEvent = useCallback(
        (eventId: string, relationType: string, eventType: string): Relations | undefined =>
            thread.timelineSet.relations?.getChildEventsForEvent(eventId, relationType, eventType),
        [thread],
    );

    const canPaginate = Boolean(thread.liveTimeline.getPaginationToken(Direction.Backward));

    // Read through a ref so that fetching does not have to restart every time the room context
    // object is rebuilt, which happens on renders that have nothing to do with this thread.
    const roomContextRef = useRef(roomContext);
    roomContextRef.current = roomContext;

    /**
     * Pages backwards until the thread has `target` replies loaded, or the server runs out.
     *
     * Loops rather than fetching a single page: the number of requests needed is a function of the
     * thread's length and the server's page size, neither of which the reader knows or should have
     * to care about.
     */
    // Bumped whenever a fetch in progress stops being wanted, by the card collapsing or by
    // unmounting. Each loop holds the value it started with, so a loop that has been superseded
    // stops at its next checkpoint instead of fetching pages nobody is going to look at and then
    // reporting its own completion over the top of the loop that replaced it.
    const paginationGeneration = useRef(0);
    const loadReplies = useCallback(
        async (target: number): Promise<void> => {
            const generation = paginationGeneration.current;
            setPaginating(true);
            try {
                while (getReplies(thread, client, roomContextRef.current).length < target) {
                    if (!thread.liveTimeline.getPaginationToken(Direction.Backward)) break;
                    const before = thread.timeline.length;
                    await client.paginateEventTimeline(thread.liveTimeline, {
                        backwards: true,
                        limit: PAGINATE_LIMIT,
                    });
                    if (paginationGeneration.current !== generation) return;
                    // A page that adds nothing renderable would otherwise spin forever: the reply
                    // count cannot reach the target, but the pagination token is still there.
                    if (thread.timeline.length === before) break;
                }
            } catch (e) {
                logger.warn(`ThreadCard: failed to paginate thread ${thread.id}`, e);
            } finally {
                if (paginationGeneration.current === generation) setPaginating(false);
            }
        },
        [client, thread],
    );

    useEffect(() => {
        // The ref itself rather than its value, because the count this needs is the one current
        // when the card goes away, not the one it had when the effect was set up.
        const generation = paginationGeneration;
        return () => {
            generation.current++;
        };
    }, []);

    const onLoadEarlier = useCallback(() => {
        const loaded = getReplies(thread, client, roomContextRef.current).length;
        void loadReplies(loaded + PAGINATE_LIMIT);
    }, [client, thread, loadReplies]);

    /** Set while expanding to read, so that the card does not also grab focus for the composer. */
    const openedToRead = useRef(false);
    /** Set while expanding, so the effect that follows knows to bring the thread's start into view. */
    const scrollToStart = useRef(false);
    /**
     * Whether this card asked for the change it is about to see, rather than being closed because
     * a different card was opened.
     *
     * Focus is the reason this matters. Activating or deactivating unmounts the control that was
     * used, which drops focus to the body, and "focus is on the body" looks identical from every
     * card in the feed — so without this each of them would think the focus was theirs to move and
     * the one that happens to render first would win it.
     */
    const selfInitiated = useRef(false);

    /** `onSetActive`, remembering that the request came from this card. */
    const setActive = useCallback(
        (threadId: string | null) => {
            // Asking for the state the card is already in changes nothing, so the effect that
            // consumes this flag would never run and clear it. It would then be waiting to be
            // read by whatever change came next — including this card being closed because a
            // different one was opened, which is the case the flag exists to exclude.
            if ((threadId === thread.id) === active) return;
            selfInitiated.current = true;
            onSetActive(threadId);
        },
        [onSetActive, thread.id, active],
    );

    const onOpenComposer = useCallback(() => {
        setActive(thread.id);
    }, [setActive, thread.id]);

    const onShowAllReplies = useCallback(() => {
        openedToRead.current = true;
        scrollToStart.current = true;
        setRepliesExpanded(true);
        setActive(thread.id);
    }, [setActive, thread.id]);

    const onCollapse = useCallback(() => {
        setActive(null);
    }, [setActive]);

    /** Whether an action's target event belongs to this card's thread rather than another card's. */
    const ownsEvent = useCallback(
        (event?: MatrixEvent | null): boolean => Boolean(event && event.getThread()?.id === thread.id),
        [thread.id],
    );

    // Reading a thread in the feed clears its unread state, as opening it in the thread panel
    // would.
    //
    // Keyed on the newest event rather than on the thread's notification level, so replies that
    // arrive while the card is open are marked read too. Keying on the level cannot do that: it
    // drops to None as soon as the first receipt lands, and a reply arriving before that leaves it
    // unchanged, so in both cases the effect does not run again.
    const receiptedEventId = useRef<string | null>(null);
    const latestEventId = threadReceiptTarget(thread)?.getId();
    const markRead = useCallback(() => {
        const eventId = threadReceiptTarget(thread)?.getId();
        if (!eventId) return;
        receiptedEventId.current = eventId;
        clearThreadNotification(thread, room, client).catch((e) => {
            logger.warn(`ThreadCard: failed to send read receipt for thread ${thread.id}`, e);
            // The receipt never landed, so the thread is only read on this screen. Releasing the
            // marker lets a later reopen try again instead of leaving it read here and unread
            // everywhere else for the rest of the session.
            if (receiptedEventId.current === eventId) receiptedEventId.current = null;
        });
    }, [thread, room, client]);

    // Whether the replies the user has not read are on screen. Marking a thread read is a claim
    // that they have seen it, so a card still hiding replies behind "Show N more" must not make
    // it: opening the composer to write a reply is not the same as having read what came before.
    //
    // An expanded card qualifies as soon as it has stopped fetching, without waiting for the
    // back-pagination token to run out. Unread replies are the newest ones and arrive at the
    // bottom, where an expanded card always shows them; the token is about the far end of the
    // history, and a thread longer than the auto-load cap keeps one for good, which would leave
    // the longest threads permanently unreadable-as-read.
    const unreadRepliesVisible = repliesExpanded ? !paginating : hiddenReplyCount === 0;

    // Being on screen is not the same as being read: a card left open on an unattended screen
    // would otherwise mark a night's worth of replies read on the strength of nobody being there.
    // The timeline holds its receipts back the same way, running them only while `UserActivity`
    // says the app has the user's attention, which it withdraws on blur and on the tab being
    // hidden. Anything held back is sent by the dispatcher case above as soon as they return.
    const deferredReceipt = useRef(false);
    const sendReceiptIfUnread = useCallback(() => {
        if (!active || !unreadRepliesVisible) return;
        const eventId = threadReceiptTarget(thread)?.getId();
        if (!eventId || receiptedEventId.current === eventId) return;
        if (!UserActivity.sharedInstance().userActiveRecently()) {
            deferredReceipt.current = true;
            return;
        }
        markRead();
    }, [active, unreadRepliesVisible, thread, markRead]);

    useEffect(() => {
        sendReceiptIfUnread();
    }, [sendReceiptIfUnread, latestEventId]);

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
                // The composer only exists on the active card, so replying has to activate it.
                if (!active) setActive(thread.id);
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
                if (!active) setActive(thread.id);
                break;

            // A receipt held back because the user was away is sent once they are back.
            case Action.UserActivity:
                if (!deferredReceipt.current) return;
                deferredReceipt.current = false;
                sendReceiptIfUnread();
                break;

            default:
                break;
        }
    });

    // Deactivating folds the card back up and discards its in-progress reply and edit, so
    // reopening it later does not resume a quote or an edit the user has visibly walked away from.
    useEffect(() => {
        if (active) return;
        setRepliesExpanded(false);
        setReplyToEvent(undefined);
        setEditState(undefined);
        openedToRead.current = false;
        // The replies a fetch in progress would add are no longer on screen to add them to.
        paginationGeneration.current++;
        setPaginating(false);
    }, [active]);

    // Activating and deactivating both unmount the control that was used to trigger them, so
    // without moving focus deliberately it falls back to the document body and a keyboard user is
    // returned to the top of the page. Opening the composer hands focus to it, as clicking a
    // composer-shaped "Reply…" button implies; closing hands it back to the control that replaces
    // it, as a disclosure should.
    const cardRef = useRef<HTMLElement | null>(null);
    const replyPromptRef = useRef<HTMLButtonElement | null>(null);
    const wasActive = useRef(active);
    useEffect(() => {
        const previously = wasActive.current;
        wasActive.current = active;
        if (previously === active) return;

        const initiated = selfInitiated.current;
        selfInitiated.current = false;
        // Closed because another card was opened. That card is where the user is looking, so it
        // is the one that gets to say where the focus goes.
        if (!initiated) return;

        if (!active) {
            // Without `preventScroll` the browser scrolls to the prompt while the card is still at
            // its expanded height, and the replies then collapse out from under the scroll it just
            // performed, which reads as the page lurching for no reason.
            replyPromptRef.current?.focus({ preventScroll: true });
            return;
        }
        // Expanding to read puts the composer at the far end of a conversation the user wants to
        // start reading from the top, and focusing it would scroll them straight back down there.
        // The card itself takes the focus instead, which is both where the reading starts and
        // where the layout effect below is about to scroll.
        if (openedToRead.current) {
            cardRef.current?.focus({ preventScroll: true });
            return;
        }
        defaultDispatcher.dispatch<FocusComposerPayload>({
            action: Action.FocusSendMessageComposer,
            context: TimelineRenderingType.Thread,
        });
    }, [active]);

    // Unfolding a thread adds its whole history below the root, so the messages the user was
    // looking at are pushed down the page and the part they asked to see starts off screen. The
    // thread is read from its start, so that is what the viewport is moved to.
    useLayoutEffect(() => {
        if (!repliesExpanded || !scrollToStart.current) return;
        scrollToStart.current = false;
        cardRef.current?.scrollIntoView({ block: "start" });
    }, [repliesExpanded]);

    const onKeyDown = useCallback(
        (ev: React.KeyboardEvent) => {
            if (!active || ev.key !== "Escape") return;
            // Only collapse if the key press was not consumed by something inside the card, such
            // as a composer autocomplete or an open menu.
            if (ev.defaultPrevented) return;
            ev.stopPropagation();
            setActive(null);
        },
        [active, setActive],
    );

    // "Show N more replies" counts every reply the thread has, but a thread seeded from sync may
    // only have its bundled latest reply loaded, so the replies it promises have to be fetched
    // before they can be shown.
    const autoLoaded = useRef(false);
    useEffect(() => {
        if (!repliesExpanded) {
            autoLoaded.current = false;
            return;
        }
        if (autoLoaded.current) return;
        autoLoaded.current = true;
        void loadReplies(Math.min(thread.length, AUTO_LOAD_REPLY_CAP));
    }, [repliesExpanded, thread.length, loadReplies]);

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
    // Ties "Show N more replies" to the list it adds them to, so a screen reader announces it as
    // a disclosure rather than as a plain button. It names the list rather than the whole card
    // body, which contains the control itself.
    const repliesId = useId();

    const body = (
        // `mx_ThreadView` carries the thread-mode `EventTile` styling, which `_EventTile.pcss`
        // scopes to that class rather than to the rendering type the tiles are given. Without it
        // the tiles fall back to room-timeline layout: room names reappear, and hidden events and
        // their avatars are positioned for a full-width timeline. The panel's own layout rules are
        // compounded onto `.mx_ThreadPanel`, so they are not picked up here.
        <div className="mx_ThreadCard_body mx_ThreadView">
            {/* `EventTile` renders as an `li` in thread mode, so the events form a real
                list, with the controls that sit between them as list items too. */}
            <ol className="mx_ThreadCard_events" id={repliesId}>
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

                {repliesExpanded && canPaginate && (
                    <li className="mx_ThreadCard_control">
                        <button
                            type="button"
                            className="mx_ThreadCard_loadEarlier"
                            disabled={paginating}
                            onClick={onLoadEarlier}
                        >
                            {paginating ? _t("threads_view|loading") : _t("threads_view|load_earlier")}
                        </button>
                    </li>
                )}

                {!repliesExpanded && hiddenReplyCount > 0 && (
                    <li className="mx_ThreadCard_control">
                        <button
                            type="button"
                            className="mx_ThreadCard_showMore"
                            onClick={onShowAllReplies}
                            aria-expanded={repliesExpanded}
                            aria-controls={repliesId}
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

            {active ? (
                <MessageComposer
                    room={room}
                    resizeNotifier={resizeNotifier}
                    relation={threadRelation}
                    replyToEvent={replyToEvent}
                    permalinkCreator={permalinkCreator}
                    compact={true}
                />
            ) : (
                <button
                    type="button"
                    ref={replyPromptRef}
                    className="mx_ThreadCard_replyPrompt"
                    onClick={onOpenComposer}
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
                // Focusable only on purpose, never by tabbing: unfolding a thread to read it moves
                // focus here, so that a keyboard user lands at the start of the conversation they
                // just asked for rather than on the body element.
                tabIndex={-1}
                className={classNames("mx_ThreadCard", {
                    mx_ThreadCard_expanded: active,
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
                    <ThreadCardMenu
                        unread={isClearableByReceipt(entry.level)}
                        onMarkRead={markRead}
                        onViewInRoom={onViewInRoom}
                    />
                    {active && (
                        // Kept in the header rather than below the composer: an expanded card can be
                        // taller than the viewport, and a collapse control at the very bottom means
                        // scrolling the whole conversation to find the way back.
                        // No `aria-expanded` here: a card can be active with its replies still
                        // folded, so claiming the disclosure is open would be a lie in exactly the
                        // case the two states were split apart to allow. The label already says
                        // what the control does.
                        <button type="button" className="mx_ThreadCard_collapse" onClick={onCollapse}>
                            {_t("threads_view|collapse")}
                        </button>
                    )}
                    {/* Last in the header so that it wraps onto its own line below the room name. */}
                    {participantNames.length > 0 &&
                        (participantNames.length > PARTICIPANT_NAME_LIMIT ? (
                            // "and 3 others" says how many people are in a conversation without
                            // saying who, which is most of what the summary is for. Naming them all
                            // in a tooltip keeps the line short without hiding the answer.
                            <Tooltip label={formatList(participantNames)}>
                                <span className="mx_ThreadCard_participants" tabIndex={0}>
                                    {formatList(participantNames, PARTICIPANT_NAME_LIMIT, true)}
                                </span>
                            </Tooltip>
                        ) : (
                            // Short enough that the line already names everyone, so a tooltip would
                            // only repeat it back.
                            <span className="mx_ThreadCard_participants">{formatList(participantNames)}</span>
                        ))}
                </header>

                {/* Only the active card gets an upload context, because it is the only card with
                    a composer or an editor. A `RoomUploadContextProvider` claims any
                    `ComposerFileInsert` aimed at a thread, and the module API's payload names no
                    room or thread, so one provider per card would upload a module's files into
                    every thread in the feed at once. */}
                {active ? (
                    <RoomUploadContextProvider threadRelation={threadRelation}>{body}</RoomUploadContextProvider>
                ) : (
                    body
                )}
            </article>
        </ScopedRoomContextProvider>
    );
});
