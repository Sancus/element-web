/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX } from "react";
import { ChevronDownIcon, CheckIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

import { _t } from "../../../languageHandler";
import { ContextMenuButton } from "../../../accessibility/context_menu/ContextMenuButton";
import ContextMenu, { aboveLeftOf, ChevronFace, MenuItemRadio, useContextMenu } from "../../structures/ContextMenu";
import { ThreadsFeedFilter } from "../../../viewmodels/threads/threadsFeed";

interface ThreadsViewFilterMenuProps {
    filter: ThreadsFeedFilter;
    onChange: (filter: ThreadsFeedFilter) => void;
}

function labelFor(filter: ThreadsFeedFilter): string {
    switch (filter) {
        case ThreadsFeedFilter.All:
            return _t("threads_view|filter_all");
        case ThreadsFeedFilter.Unread:
            return _t("threads_view|filter_unread");
        case ThreadsFeedFilter.Mentions:
            return _t("threads_view|filter_mentions");
        default: {
            const exhaustive: never = filter;
            throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
        }
    }
}

const OPTIONS: readonly ThreadsFeedFilter[] = [
    ThreadsFeedFilter.All,
    ThreadsFeedFilter.Unread,
    ThreadsFeedFilter.Mentions,
];

/** Dropdown selecting which threads the feed shows. */
export function ThreadsViewFilterMenu({ filter, onChange }: ThreadsViewFilterMenuProps): JSX.Element {
    const [menuDisplayed, button, openMenu, closeMenu] = useContextMenu();

    return (
        <>
            <ContextMenuButton
                className="mx_ThreadsView_filterButton"
                ref={button}
                isExpanded={menuDisplayed}
                onClick={openMenu}
                // Becomes the button's aria-label, and so has to carry the selected value: it
                // overrides the visible text rather than adding to it.
                label={_t("threads_view|filter_label", {
                    filter: labelFor(filter),
                })}
            >
                {labelFor(filter)}
                <ChevronDownIcon />
            </ContextMenuButton>
            {menuDisplayed && button.current && (
                <ContextMenu
                    // `ContextMenu` positions itself from explicit top/left/right/bottom props.
                    // Spreading the DOMRect does not supply them: its properties are accessors on
                    // the prototype, so the spread yields an empty object and the menu renders
                    // unpositioned in the portal at the end of the document.
                    {...aboveLeftOf(button.current.getBoundingClientRect(), ChevronFace.Top)}
                    onFinished={closeMenu}
                    wrapperClassName="mx_ThreadsView_filterMenu"
                >
                    {OPTIONS.map((option) => (
                        <MenuItemRadio
                            key={option}
                            active={option === filter}
                            className="mx_ThreadsView_filterOption"
                            onClick={() => {
                                onChange(option);
                                closeMenu();
                            }}
                        >
                            {option === filter ? <CheckIcon /> : null}
                            <span>{labelFor(option)}</span>
                        </MenuItemRadio>
                    ))}
                </ContextMenu>
            )}
        </>
    );
}
