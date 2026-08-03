/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, useCallback, useState } from "react";
import {
    Direction,
    type IEventRelation,
    type MatrixEvent,
    type Relations,
    type Thread,
    THREAD_RELATION_TYPE,
} from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import classNames from "classnames";

import { _t } from "../../../languageHandler";
import { Action } from "../../../dispatcher/actions";
import defaultDispatcher from "../../../dispatcher/dispatcher";
import { type ViewRoomPayload } from "../../../dispatcher/payloads/ViewRoomPayload";
import { useMatrixClientContext } from "../../../contexts/MatrixClientContext";
import { ScopedRoomContextProvider } from "../../../contexts/ScopedRoomContext";
import { RoomUploadContextProvider } from "../../../viewmodels/room/RoomUploadViewModel";
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

    const replies = getReplies(thread);
    const hiddenReplyCount = Math.max(thread.length - Math.min(replies.length, COLLAPSED_REPLY_COUNT), 0);
    const visibleReplies = expanded ? replies : replies.slice(-COLLAPSED_REPLY_COUNT);

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

    return (
        <ScopedRoomContextProvider {...roomContext}>
            <RoomUploadContextProvider threadRelation={threadRelation}>
                <section
                    className={classNames("mx_ThreadCard", { mx_ThreadCard_expanded: expanded })}
                    aria-label={_t("threads_view|card_label", { roomName: room.name })}
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

                    <div className="mx_ThreadCard_body">
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
                            />
                        )}

                        {expanded && canPaginate && (
                            <button
                                type="button"
                                className="mx_ThreadCard_loadEarlier"
                                disabled={paginating}
                                onClick={() => void onLoadEarlier()}
                            >
                                {paginating ? _t("threads_view|loading") : _t("threads_view|load_earlier")}
                            </button>
                        )}

                        {!expanded && hiddenReplyCount > 0 && (
                            <button type="button" className="mx_ThreadCard_showMore" onClick={onExpand}>
                                {_t("threads_view|show_more_replies", { count: hiddenReplyCount })}
                            </button>
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
                            />
                        ))}

                        {expanded ? (
                            <>
                                <MessageComposer
                                    room={room}
                                    resizeNotifier={resizeNotifier}
                                    relation={threadRelation}
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
                </section>
            </RoomUploadContextProvider>
        </ScopedRoomContextProvider>
    );
}
