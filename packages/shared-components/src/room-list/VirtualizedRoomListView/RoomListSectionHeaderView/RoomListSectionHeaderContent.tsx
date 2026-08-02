/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { memo, type JSX, useState } from "react";
import ChevronRightIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-right";
import classNames from "classnames";
import { IconButton, Menu, MenuItem, MenuTitle, RadioMenuItem } from "@vector-im/compound-web";
import { OverflowHorizontalIcon, EditIcon, DeleteIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

import { useViewModel } from "../../../core/viewmodel";
import { _t } from "../../../core/i18n/i18n";
import { Flex } from "../../../core/utils/Flex";
import { type RoomListSectionHeaderViewModel } from "./RoomListSectionHeaderView";
import styles from "./RoomListSectionHeaderView.module.css";
import { NotificationDecoration } from "../RoomListItemWrapper/RoomListItemView";

/**
 * Props for {@link RoomListSectionHeaderContent}.
 */
export interface RoomListSectionHeaderContentProps {
    /** The section header view model */
    vm: RoomListSectionHeaderViewModel;
    /** Whether the section header is being dragged — hides the interactive menu when true */
    isDragging?: boolean;
}

/**
 * The inner content of a section header: chevron, title, and menu (or static menu icon when dragging).
 * Used both inside the full {@link RoomListSectionHeaderView} and inside the drag overlay.
 */
export const RoomListSectionHeaderContent = memo(function RoomListSectionHeaderContent({
    vm,
    isDragging = false,
}: RoomListSectionHeaderContentProps): JSX.Element {
    const { title, displaySectionMenu, notification, isExpanded } = useViewModel(vm);
    return (
        <Flex
            className={classNames(styles.container, {
                [styles.dragging]: isDragging,
            })}
            align="center"
            justify="space-between"
            gap="var(--cpd-space-2x)"
        >
            <Flex align="center" gap="var(--cpd-space-0-5x)">
                <ChevronRightIcon
                    className={styles.chevron}
                    width="24px"
                    height="24px"
                    fill="var(--cpd-color-icon-secondary)"
                />
                <span className={styles.title}>{title}</span>
            </Flex>
            {!isExpanded && notification && (
                <div className={styles.notificationDecoration} aria-hidden={true}>
                    <NotificationDecoration {...notification} />
                </div>
            )}
            {displaySectionMenu && !isDragging && <MenuComponent vm={vm} />}
        </Flex>
    );
});

interface MenuComponentProps {
    vm: RoomListSectionHeaderViewModel;
}

function MenuComponent({ vm }: MenuComponentProps): JSX.Element {
    const [open, setOpen] = useState(false);
    const { canEditSection, sortOption, title } = useViewModel(vm);
    // Every header carries this button, so the section is what tells them apart. IconButton labels
    // the trigger from its tooltip (via aria-labelledby), hence the same string for both.
    const label = _t("room_list|section_header|more_options_section", { section: title });

    return (
        <Menu
            open={open}
            onOpenChange={setOpen}
            title={label}
            showTitle={false}
            align="start"
            trigger={
                <IconButton
                    className={styles.menu}
                    tooltip={label}
                    aria-label={label}
                    size="24px"
                    style={{ padding: "2px" }}
                    color="var(--cpd-color-icon-primary)"
                    // The trigger sits inside the header button, which toggles the section on click.
                    // Radix opens the menu on pointerdown, so swallowing the click here is safe.
                    onClick={(evt) => evt.stopPropagation()}
                >
                    <OverflowHorizontalIcon fill="var(--cpd-color-icon-primary)" />
                </IconButton>
            }
        >
            <div
                // We don't want keyboard navigation events to bubble up to the ListView changing the focused item.
                // The menu is portaled but React still propagates its events along the React tree, so a click
                // inside it would otherwise reach the header button and toggle the section. RadioMenuItem takes
                // no onClick of its own, hence stopping here rather than per item.
                onKeyDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
            >
                <MenuTitle title={_t("room_list|sort")} />
                <RadioMenuItem
                    label={_t("room_list|sort_type|default")}
                    checked={sortOption === "default"}
                    onSelect={() => vm.setSortOption("default")}
                />
                <RadioMenuItem
                    label={_t("room_list|sort_type|activity")}
                    checked={sortOption === "recent"}
                    onSelect={() => vm.setSortOption("recent")}
                />
                <RadioMenuItem
                    label={_t("room_list|sort_type|unread_first")}
                    checked={sortOption === "unread-first"}
                    onSelect={() => vm.setSortOption("unread-first")}
                />
                <RadioMenuItem
                    label={_t("room_list|sort_type|atoz")}
                    checked={sortOption === "alphabetical"}
                    onSelect={() => vm.setSortOption("alphabetical")}
                />
                {canEditSection && (
                    <>
                        <MenuItem
                            hideChevron={true}
                            Icon={EditIcon}
                            label={_t("room_list|section_header|edit_section")}
                            onSelect={() => vm.editSection()}
                            onClick={(evt) => evt.stopPropagation()}
                        />
                        <MenuItem
                            hideChevron={true}
                            Icon={DeleteIcon}
                            label={_t("room_list|section_header|remove_section")}
                            onSelect={() => vm.removeSection()}
                            onClick={(evt) => evt.stopPropagation()}
                        />
                    </>
                )}
            </div>
        </Menu>
    );
}
