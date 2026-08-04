/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX } from "react";
import { ChatFilter } from "@vector-im/compound-web";

import { _t } from "../../../languageHandler";
import { ThreadsFeedFilter } from "../../../viewmodels/threads/threadsFeed";

interface ThreadsViewFiltersProps {
    filter: ThreadsFeedFilter;
    onChange: (filter: ThreadsFeedFilter) => void;
}

/**
 * The filters the feed can be narrowed to, in the order they are shown.
 *
 * "All" is deliberately absent: it is what no selection means, the same way the room list's
 * filters work, rather than a third chip that has to be chosen to undo the other two.
 */
const OPTIONS: readonly [ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions] = [
    ThreadsFeedFilter.Unread,
    ThreadsFeedFilter.Mentions,
];

function labelFor(filter: ThreadsFeedFilter.Unread | ThreadsFeedFilter.Mentions): string {
    switch (filter) {
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

/**
 * Chips selecting which threads the feed shows.
 *
 * Built to match the room list's filters, down to the listbox semantics, because they sit a few
 * hundred pixels apart and do the same job.
 */
export function ThreadsViewFilters({ filter, onChange }: ThreadsViewFiltersProps): JSX.Element {
    return (
        <div className="mx_ThreadsView_filters" role="listbox" aria-label={_t("threads_view|filters_label")}>
            {OPTIONS.map((option) => {
                const selected = option === filter;
                return (
                    <ChatFilter
                        key={option}
                        role="option"
                        tabIndex={0}
                        aria-selected={selected}
                        selected={selected}
                        // Clicking the selected chip clears it, which is the only way back to the
                        // unfiltered feed now that there is no "All" chip to return to.
                        onClick={() => onChange(selected ? ThreadsFeedFilter.All : option)}
                    >
                        {labelFor(option)}
                    </ChatFilter>
                );
            })}
        </div>
    );
}
