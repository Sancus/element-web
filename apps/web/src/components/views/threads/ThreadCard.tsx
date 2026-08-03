/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, useCallback, useEffect, useRef, useState } from "react";
import {
    Direction,
    type IEventRelation,
    type MatrixEvent,
    ReceiptType,
    type Relations,
    type Thread,
    THREAD_RELATION_TYPE,
} from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import classNames from "classnames";

import { _t } from "../../../languageHandler";
import SettingsStore from "../../../settings/SettingsStore";
import { Action } from "../../../dispatcher/actions";
import defaultDispatcher from "../../../dispatcher/dispatcher";
import { type ActionPayload } from "../../../dispatcher/payloads";
import { type ViewRoomPayload } from "../../../dispatcher/payloads/ViewRoomPayload";
import { useDispatcher } from "../../../hooks/useDispatcher";
import { useMatrixClientContext } from "../../../contexts/MatrixClientContext";
import { ScopedRoomContextProvider } from "../../../contexts/ScopedRoomContext";
import { RoomUploadContextProvider } from "../../../viewmodels/room/RoomUploadViewModel";
import { TimelineRenderingType } from "../../../contexts/RoomContext";
import EditorStateTransfer from "../../../utils/EditorStateTransfer";
import { Layout } from "../../../settings/enums/Layout";
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

    const fallbackEventId = thread.lastReply()?.getId() ?? thread.id;
    if (fallbackEventId) {
        relation["m.in_reply_to"] = { event_id: fallbackEventId };
    }

    return relation;
}

/** The thread's replies, oldest first, excluding the root event. */
function getReplies(thread: Thread): MatrixEvent[] {
    const rootId = thread.rootEvent?.getId();
    return thread.timeline.filter((event) => event.getId() !== rootId);
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

/** Display names of everyone who has spoken in the thread, in first-spoke order. */
function getParticipantNames(thread: Thread): string[] {
    const seen = new Set<string>();
    const names: string[] = [];
    const events = thread.rootEvent ? [thread.rootEvent, ...getReplies(thread)] : getReplies(thread);

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
 */
export function ThreadCard({ entry, expanded, onToggleExpanded, resizeNotifier }: ThreadCardProps): JSX.Element {
    const { thread, room } = entry;
    const client = useMatrixClientContext();
    const roomContext = useThreadCardRoomContext(room, thread);
    const permalinkCreator = usePermalinkCreator(room);
    const [paginating, setPaginating] = useState(false);
    const [replyToEvent, setReplyToEvent] = useState<MatrixEvent | undefined>();
    const [editState, setEditState] = useState<EditorStateTransfer | undefined>();

    const replies = getReplies(thread);
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
                if (payload.context !== TimelineRenderingType.Thread || !ownsEvent(payload.event)) return;
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
    useEffect(() => {
        if (!expanded || entry.level <= NotificationLevel.None) return;

        const latest = thread.lastReply() ?? thread.rootEvent;
        // A local echo has no event ID the server would accept a receipt for.
        if (!latest || latest.status !== null || !latest.getId()) return;

        const receiptType = SettingsStore.getValue("sendReadReceipts", room.roomId)
            ? ReceiptType.Read
            : ReceiptType.ReadPrivate;
        client.sendReadReceipt(latest, receiptType).catch((e) => {
            logger.warn(`ThreadCard: failed to send read receipt for thread ${thread.id}`, e);
        });
    }, [expanded, entry.level, thread, client, room.roomId]);

    const onViewInRoom = useCallback(() => {
        defaultDispatcher.dispatch<ViewRoomPayload>({
            action: Action.ViewRoom,
            room_id: room.roomId,
            event_id: thread.id,
            highlighted: true,
            metricsTrigger: undefined,
        });
    }, [room.roomId, thread.id]);

    const participantNames = getParticipantNames(thread);

    const body = (
        <div className="mx_ThreadCard_body">
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
                        <button type="button" className="mx_ThreadCard_showMore" onClick={onExpand}>
                            {_t("threads_view|show_more_replies", {
                                count: hiddenReplyCount,
                            })}
                        </button>
                    </li>
                )}

                {visibleReplies.map((event) => (
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
                    <button type="button" className="mx_ThreadCard_collapse" onClick={onExpand}>
                        {_t("threads_view|collapse")}
                    </button>
                </>
            ) : (
                <button type="button" className="mx_ThreadCard_replyPrompt" onClick={onExpand}>
                    {_t("threads_view|reply_prompt")}
                </button>
            )}
        </div>
    );

    return (
        <ScopedRoomContextProvider {...roomContext} replyToEvent={replyToEvent}>
            <section
                className={classNames("mx_ThreadCard", {
                    mx_ThreadCard_expanded: expanded,
                })}
                aria-label={_t("threads_view|card_label", {
                    roomName: room.name,
                })}
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
            </section>
        </ScopedRoomContextProvider>
    );
}
