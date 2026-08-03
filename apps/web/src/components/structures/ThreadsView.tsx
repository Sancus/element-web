/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ThreadsIcon } from "@vector-im/compound-design-tokens/assets/web/icons";
import { AutoHideScrollbar } from "@element-hq/web-shared-components";
import { Heading } from "@vector-im/compound-web";

import { _t } from "../../languageHandler";
import { SDKContext } from "../../contexts/SDKContext";
import { ThreadsFeedFilter } from "../../viewmodels/threads/threadsFeed";
import { useThreadsFeed } from "../../viewmodels/threads/useThreadsFeed";
import { ThreadCard } from "../views/threads/ThreadCard";
import { ThreadsViewFilterMenu } from "../views/threads/ThreadsViewFilterMenu";
import EmptyState from "../views/right_panel/EmptyState";
import Spinner from "../views/elements/Spinner";

/** Cards rendered initially, and added each time the user scrolls near the bottom. */
const RENDER_BATCH = 20;
/** Distance from the bottom, in pixels, at which the next batch is rendered. */
const SCROLL_THRESHOLD_PX = 600;

/**
 * A cross-room feed of threads the user takes part in.
 *
 * Deliberately not virtualized. The cards have widely varying heights, change height when
 * expanded, and contain focusable controls including a composer, all of which fight both
 * height measurement and the roving-focus model used by the room list's virtualized list.
 * Instead the feed renders a bounded window of cards and grows it as the user scrolls, which
 * keeps the DOM size bounded without either of those problems.
 */
export function ThreadsView(): JSX.Element {
    const sdkContext = useContext(SDKContext);
    const [filter, setFilter] = useState<ThreadsFeedFilter>(ThreadsFeedFilter.All);
    const [renderCount, setRenderCount] = useState(RENDER_BATCH);
    const [expandedThreadId, setExpandedThreadId] = useState<string | null>(null);

    const { entries, loading, hasMore, loadMore } = useThreadsFeed(filter);

    // Changing filter re-windows the feed from the top.
    useEffect(() => {
        setRenderCount(RENDER_BATCH);
    }, [filter]);

    const visible = useMemo(() => entries.slice(0, renderCount), [entries, renderCount]);
    const canRenderMore = renderCount < entries.length;

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const onScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
        if (remaining > SCROLL_THRESHOLD_PX) return;

        if (canRenderMore) {
            setRenderCount((count) => count + RENDER_BATCH);
        } else if (hasMore) {
            // Everything known is on screen, so search more rooms for threads.
            loadMore();
        }
    }, [canRenderMore, hasMore, loadMore]);

    const onToggleExpanded = useCallback((threadId: string) => {
        setExpandedThreadId((current) => (current === threadId ? null : threadId));
    }, []);

    const emptyState = useMemo(() => {
        switch (filter) {
            case ThreadsFeedFilter.Unread:
                return (
                    <EmptyState
                        Icon={ThreadsIcon}
                        title={_t("threads_view|empty_unread_title")}
                        description={_t("threads_view|empty_unread_description")}
                    />
                );
            case ThreadsFeedFilter.Mentions:
                return (
                    <EmptyState
                        Icon={ThreadsIcon}
                        title={_t("threads_view|empty_mentions_title")}
                        description={_t("threads_view|empty_mentions_description")}
                    />
                );
            case ThreadsFeedFilter.All:
                return (
                    <EmptyState
                        Icon={ThreadsIcon}
                        title={_t("threads_view|empty_title")}
                        description={_t("threads_view|empty_description", {
                            replyInThread: _t("action|reply_in_thread"),
                        })}
                    />
                );
            default: {
                const exhaustive: never = filter;
                throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
            }
        }
    }, [filter]);

    return (
        <main className="mx_ThreadsView" aria-label={_t("common|threads")}>
            <header className="mx_ThreadsView_header">
                <Heading as="h1" size="md" className="mx_ThreadsView_heading">
                    {_t("common|threads")}
                </Heading>
                <ThreadsViewFilterMenu filter={filter} onChange={setFilter} />
            </header>

            <AutoHideScrollbar
                className="mx_ThreadsView_scroller"
                onScroll={onScroll}
                wrappedRef={(ref) => {
                    scrollRef.current = ref;
                }}
                tabIndex={0}
            >
                {visible.length === 0 && !loading && emptyState}

                {visible.map((entry) => (
                    <ThreadCard
                        key={entry.threadId}
                        entry={entry}
                        expanded={expandedThreadId === entry.threadId}
                        onToggleExpanded={onToggleExpanded}
                        resizeNotifier={sdkContext.resizeNotifier}
                    />
                ))}

                {(loading || (visible.length > 0 && (canRenderMore || hasMore))) && (
                    <div className="mx_ThreadsView_spinner">
                        <Spinner />
                    </div>
                )}
            </AutoHideScrollbar>
        </main>
    );
}
