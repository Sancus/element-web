/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX } from "react";
import { ChatFilter } from "@vector-im/compound-web";

import { _t } from "../../../languageHandler";
import { ThreadsFeedFilter, type ThreadsFeedFilters } from "../../../viewmodels/threads/threadsFeed";

interface ThreadsViewFiltersProps {
    filters: ThreadsFeedFilters;
    onChange: (filters: ThreadsFeedFilters) => void;
}

/**
 * The filters the feed can be narrowed by, in the order they are shown.
 *
 * "All" is deliberately absent: it is what no selection means, the same way the room list's
 * filters work, rather than a chip that has to be chosen to undo the others.
 */
const OPTIONS: readonly ThreadsFeedFilter[] = [
    ThreadsFeedFilter.Unread,
    ThreadsFeedFilter.Mentions,
    ThreadsFeedFilter.Unreplied,
];

function labelFor(filter: ThreadsFeedFilter): string {
    switch (filter) {
        case ThreadsFeedFilter.Unread:
            return _t("threads_view|filter_unread");
        case ThreadsFeedFilter.Mentions:
            return _t("threads_view|filter_mentions");
        case ThreadsFeedFilter.Unreplied:
            return _t("threads_view|filter_unreplied");
        default: {
            const exhaustive: never = filter;
            throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
        }
    }
}

/**
 * Chips selecting which threads the feed shows.
 *
 * Styled to match the room list's filters, because they sit a few hundred pixels apart and do the
 * same job, except that these combine: the useful question is usually a narrower one than any
 * single chip asks, such as which unread threads mention you.
 *
 * Toggle buttons rather than the room list's listbox of options. Each chip here is independent, so
 * a listbox would have to answer arrow keys, Home/End and roving focus to be the thing it claims to
 * be, and `role="option"` costs the button semantics that already describe a chip exactly: focusable
 * in turn, activated with Enter or Space, and announced as pressed or not.
 */
export function ThreadsViewFilters({ filters, onChange }: ThreadsViewFiltersProps): JSX.Element {
    const toggle = (option: ThreadsFeedFilter): void => {
        const next = new Set(filters);
        if (!next.delete(option)) next.add(option);
        onChange(next);
    };

    return (
        <div className="mx_ThreadsView_filters" role="group" aria-label={_t("threads_view|filters_label")}>
            {OPTIONS.map((option) => {
                const selected = filters.has(option);
                return (
                    <ChatFilter key={option} aria-pressed={selected} selected={selected} onClick={() => toggle(option)}>
                        {labelFor(option)}
                    </ChatFilter>
                );
            })}
        </div>
    );
}
