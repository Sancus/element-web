/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, useState } from "react";
import { IconButton, Menu, MenuItem } from "@vector-im/compound-web";
import {
    OverflowHorizontalIcon,
    MarkAsReadIcon,
    VisibilityOnIcon,
} from "@vector-im/compound-design-tokens/assets/web/icons";

import { _t } from "../../../languageHandler";

interface ThreadCardMenuProps {
    /** Whether the thread has anything to mark as read. */
    unread: boolean;
    onMarkRead: () => void;
    onViewInRoom: () => void;
}

/**
 * Per-thread actions, on the card's header.
 *
 * Hidden until the card is hovered or focused, so that a feed of cards is a list of conversations
 * rather than a list of buttons. It stays in the DOM either way, so it keeps its place in the tab
 * order for anyone not using a pointer.
 */
export function ThreadCardMenu({ unread, onMarkRead, onViewInRoom }: ThreadCardMenuProps): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <Menu
            open={open}
            onOpenChange={setOpen}
            title={_t("threads_view|thread_options")}
            showTitle={false}
            align="end"
            trigger={
                <IconButton
                    size="24px"
                    // Kept visible while its own menu is open, or the menu would be left hanging
                    // off a control that vanished when the pointer moved away from the card.
                    className="mx_ThreadCard_menuButton"
                    data-open={open || undefined}
                    tooltip={_t("threads_view|thread_options")}
                    aria-label={_t("threads_view|thread_options")}
                >
                    <OverflowHorizontalIcon />
                </IconButton>
            }
        >
            <MenuItem
                Icon={MarkAsReadIcon}
                label={_t("threads_view|mark_read")}
                disabled={!unread}
                onSelect={onMarkRead}
            />
            <MenuItem Icon={VisibilityOnIcon} label={_t("threads_view|view_in_room")} onSelect={onViewInRoom} />
        </Menu>
    );
}
