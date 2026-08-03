/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useContext, useMemo } from "react";
import { EventType, type Room, type Thread } from "matrix-js-sdk/src/matrix";

import RoomContext, { type RoomContextType, TimelineRenderingType } from "../../../contexts/RoomContext";
import { SDKContext } from "../../../contexts/SDKContext";
import { useSettingValue } from "../../../hooks/useSettings";
import { Layout } from "../../../settings/enums/Layout";
import { RoomPermalinkCreator } from "../../../utils/permalinks/Permalinks";

/**
 * A permalink creator per room, loaded once.
 *
 * Uses `load()` rather than `start()`: the latter subscribes to room state for the lifetime
 * of the creator, which would leak a listener per card in a virtualized list.
 */
export function usePermalinkCreator(room: Room): RoomPermalinkCreator {
    return useMemo(() => {
        const creator = new RoomPermalinkCreator(room);
        creator.load();
        return creator;
    }, [room]);
}

/**
 * Builds the room context a thread card needs in order to render `EventTile`s.
 *
 * The threads page is not inside a `RoomView`, so there is no ambient room context to
 * inherit. Reading the context here yields React's default value, which is a complete
 * `RoomContextType` with sensible defaults; this fills in the room-specific fields on top of
 * it. If a real room context ever does sit above this page, inheriting from it is the
 * desired behaviour.
 */
export function useThreadCardRoomContext(room: Room, thread: Thread): RoomContextType {
    const inherited = useContext(RoomContext);
    const sdkContext = useContext(SDKContext);
    const showReadReceipts = useSettingValue("showReadReceipts");
    const showTwelveHourTimestamps = useSettingValue("showTwelveHourTimestamps");
    const showHiddenEvents = useSettingValue("showHiddenEventsInTimeline");
    const userTimezone = useSettingValue("userTimezone");

    return useMemo(
        () => ({
            ...inherited,
            room,
            roomId: room.roomId,
            threadId: thread.id,
            liveTimeline: thread.timelineSet.getLiveTimeline(),
            // Cards render individual thread conversations, so tiles should look like thread
            // messages rather than thread-list summaries.
            timelineRenderingType: TimelineRenderingType.Thread,
            layout: Layout.Group,
            roomLoading: false,
            shouldPeek: false,
            membersLoaded: true,
            matrixClientIsReady: true,
            canReact: room.currentState.maySendEvent(EventType.Reaction, room.client.getSafeUserId()),
            canSendMessages: room.maySendMessage(),
            canSelfRedact: room.currentState.maySendEvent(EventType.RoomRedaction, room.client.getSafeUserId()),
            isRoomEncrypted: room.hasEncryptionStateEvent(),
            showReadReceipts,
            showTwelveHourTimestamps,
            showHiddenEvents,
            userTimezone,
            // Timestamps are always shown so a cross-room feed reads chronologically.
            alwaysShowTimestamps: true,
            // The feed is a reading surface; link previews would make card heights unstable
            // while the virtualized list is measuring them.
            showUrlPreview: false,
            roomViewStore: sdkContext.roomViewStore,
        }),
        [
            inherited,
            room,
            thread,
            showReadReceipts,
            showTwelveHourTimestamps,
            showHiddenEvents,
            userTimezone,
            sdkContext.roomViewStore,
        ],
    );
}
