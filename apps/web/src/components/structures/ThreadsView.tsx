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
import { applyHeldOrder, ThreadsFeedFilter } from "../../viewmodels/threads/threadsFeed";
import { useThreadsFeed } from "../../viewmodels/threads/useThreadsFeed";
import { ThreadCard } from "../views/threads/ThreadCard";
import { ThreadsViewFilterMenu } from "../views/threads/ThreadsViewFilterMenu";
import EmptyState from "../views/right_panel/EmptyState";
import Spinner from "../views/elements/Spinner";

/** Cards rendered initially, and added each time the user scrolls near the bottom. */
const RENDER_BATCH = 20;
/** Distance from the bottom, in pixels, at which the next batch is rendered. */
const SCROLL_THRESHOLD_PX = 600;
/** Scroll offset, in pixels, still counted as being at the top of the feed. */
const AT_TOP_THRESHOLD_PX = 8;

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

    // The expanded thread is exempt from filtering: reading it is what makes it stop matching
    // "Unread", and a card that deletes itself as it is read takes the composer with it.
    const { entries, backfilling, hasMore, loadMore, initialised } = useThreadsFeed(filter, expandedThreadId);

    /** Whether the feed is scrolled to the top, where re-sorting is safe to show. */
    const [atTop, setAtTop] = useState(true);

    const order = useRef<string[]>([]);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Changing filter re-windows the feed from the top, and is an explicit request for a different
    // list, so it also releases the held order below rather than ranking a new set of threads
    // against the order of the old one.
    useEffect(() => {
        setRenderCount(RENDER_BATCH);
        order.current = [];
        setAtTop(true);
        scrollRef.current?.scrollTo({ top: 0 });
    }, [filter]);

    // The feed is sorted by latest activity, so a reply arriving anywhere in the account can move
    // cards. That is only acceptable while the user is at the top and can see it happen: further
    // down, it moves whatever they are reading out from under them, and if a card is expanded it
    // takes the composer they are typing in with it. In either case the previous order is held and
    // newly arrived threads wait at the end, until the feed is scrolled back to the top with
    // nothing expanded — which is also when a thread jumping to the top reads as new activity
    // rather than as the page shuffling itself.
    const frozen = expandedThreadId !== null || !atTop;
    const ordered = useMemo(() => {
        if (!frozen) {
            order.current = entries.map((entry) => entry.threadId);
            return entries;
        }
        return applyHeldOrder(entries, order.current);
    }, [entries, frozen]);

    const visible = useMemo(() => ordered.slice(0, renderCount), [ordered, renderCount]);
    const canRenderMore = renderCount < ordered.length;
    const isEmpty = visible.length === 0;
    /** Whether anything could still arrive: the first scan, or rooms left to search. */
    const searching = !initialised || backfilling || hasMore;

    const onScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setAtTop(el.scrollTop <= AT_TOP_THRESHOLD_PX);

        const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
        if (remaining > SCROLL_THRESHOLD_PX) return;

        if (canRenderMore) {
            setRenderCount((count) => count + RENDER_BATCH);
        } else if (hasMore) {
            // Everything known is on screen, so search more rooms for threads.
            loadMore();
        }
    }, [canRenderMore, hasMore, loadMore]);

    // Scrolling cannot be the only thing that drives backfill: a feed that does not overflow its
    // container never fires a scroll event, so a short or empty result from the first rooms would
    // strand the user with nothing to scroll and most of the account never searched. Whenever the
    // content is too short to scroll, keep searching. Each pass advances the room cursor, so this
    // terminates once the viewport fills or the rooms run out.
    useEffect(() => {
        if (backfilling || canRenderMore || !hasMore) return;
        const el = scrollRef.current;
        // Treated as underflowing until measurable, so a pass still runs before first layout.
        if (el && el.scrollHeight > el.clientHeight + SCROLL_THRESHOLD_PX) return;
        loadMore();
    }, [backfilling, canRenderMore, hasMore, loadMore, visible.length]);

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
                {/* "No threads" is only true once every room has been searched. Before that the
                    feed is still filling, and claiming otherwise tells a user with hundreds of
                    threads in older rooms that they have none. */}
                {isEmpty && !searching && emptyState}

                {isEmpty && searching && (
                    <div className="mx_ThreadsView_spinner">
                        <Spinner />
                        <span className="mx_ThreadsView_searching">{_t("threads_view|searching")}</span>
                    </div>
                )}

                {visible.map((entry) => (
                    <ThreadCard
                        key={entry.threadId}
                        entry={entry}
                        expanded={expandedThreadId === entry.threadId}
                        onToggleExpanded={onToggleExpanded}
                        resizeNotifier={sdkContext.resizeNotifier}
                    />
                ))}

                {!isEmpty && backfilling && (
                    <div className="mx_ThreadsView_spinner">
                        <Spinner />
                    </div>
                )}

                {/* Backfill continues on its own while the feed is short and on scroll once it is
                    long, so this is only a manual fallback for a full viewport the user has not
                    scrolled to the end of. */}
                {!isEmpty && !backfilling && !canRenderMore && hasMore && (
                    <button type="button" className="mx_ThreadsView_loadMore" onClick={loadMore}>
                        {_t("threads_view|load_more")}
                    </button>
                )}
            </AutoHideScrollbar>
        </main>
    );
}
