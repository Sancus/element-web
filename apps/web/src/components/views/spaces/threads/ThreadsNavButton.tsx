/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX } from "react";
import ThreadsSolidIcon from "@vector-im/compound-design-tokens/assets/web/icons/threads-solid";
import classNames from "classnames";
import { IconButton, Text, Tooltip } from "@vector-im/compound-web";
import { KnownMembership } from "matrix-js-sdk/src/types";

import { _t } from "../../../../languageHandler";
import { MatrixClientPeg } from "../../../../MatrixClientPeg";
import { Action } from "../../../../dispatcher/actions";
import defaultDispatcher from "../../../../dispatcher/dispatcher";
import { type ViewRoomPayload } from "../../../../dispatcher/payloads/ViewRoomPayload";
import { notificationLevelToIndicator } from "../../../../utils/notifications";
import PosthogTrackers from "../../../../PosthogTrackers";
import { useUnreadThreadRooms } from "./useUnreadThreadRooms";

interface ThreadsNavButtonProps {
    /**
     * Display the `Threads` label next to the icon.
     */
    displayLabel?: boolean;
    /**
     * Whether the threads page is the page currently being shown.
     */
    isActive?: boolean;
}

/**
 * Space panel entry point for the cross-room threads page.
 *
 * Replaces the upstream Threads Activity Centre popup: instead of opening a menu of rooms,
 * this navigates to a full page listing individual threads.
 */
export function ThreadsNavButton({ displayLabel, isActive }: ThreadsNavButtonProps): JSX.Element {
    // `false` because the notification level is only used for the badge here; there is no
    // popup to populate, so the room list never needs to be force-computed.
    const { greatestNotificationLevel } = useUnreadThreadRooms(false);

    return (
        <Tooltip label={_t("common|threads")} placement="right" open={displayLabel ? false : undefined}>
            <IconButton
                aria-label={_t("common|threads")}
                aria-current={isActive ? "page" : undefined}
                className={classNames("mx_ThreadsNavButton", {
                    mx_ThreadsNavButton_expanded: displayLabel,
                    mx_ThreadsNavButton_active: isActive,
                })}
                indicator={notificationLevelToIndicator(greatestNotificationLevel)}
                onClick={(ev) => {
                    // Reuses the upstream interaction name: `InteractionName` is a closed union
                    // from @matrix-org/analytics-events, so a fork-specific name is not available.
                    PosthogTrackers.trackInteraction("WebThreadsActivityCentreButton", ev);
                    if (!isActive) {
                        defaultDispatcher.dispatch({ action: Action.ViewThreadsPage });
                        return;
                    }

                    // Pressed a second time, so this is a way out of the threads page rather than
                    // a way in. `mx_last_room_id` still names the room the user left to get here,
                    // because `viewThreads` deliberately does not overwrite it.
                    //
                    // It is only a note of where the user was, though, and it survives the room
                    // itself: leaving or forgetting a room does not clear it, and dispatching at a
                    // room that is no longer joined lands on a rejoin prompt or on a room view for
                    // an ID the client knows nothing about. Home is a worse answer than the right
                    // room but a much better one than either of those.
                    const lastRoomId = localStorage.getItem("mx_last_room_id");
                    const lastRoom = lastRoomId ? MatrixClientPeg.get()?.getRoom(lastRoomId) : null;
                    if (lastRoom?.getMyMembership() === KnownMembership.Join) {
                        defaultDispatcher.dispatch<ViewRoomPayload>({
                            action: Action.ViewRoom,
                            room_id: lastRoom.roomId,
                            metricsTrigger: undefined,
                        });
                    } else {
                        // Opened straight into threads, from a permalink or a restored session, so
                        // there is no room to go back to.
                        defaultDispatcher.dispatch({ action: Action.ViewHomePage });
                    }
                }}
            >
                <>
                    <ThreadsSolidIcon className="mx_ThreadsNavButton_icon" />
                    {displayLabel && (
                        <Text className="mx_ThreadsNavButton_label" as="span" size="md" title={_t("common|threads")}>
                            {_t("common|threads")}
                        </Text>
                    )}
                </>
            </IconButton>
        </Tooltip>
    );
}
