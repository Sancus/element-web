/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type JSX, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ThreadsIcon } from "@vector-im/compound-design-tokens/assets/web/icons";
import { AutoHideScrollbar } from "@element-hq/web-shared-components";
import { Button, Heading } from "@vector-im/compound-web";
import { logger } from "matrix-js-sdk/src/logger";

import { _t } from "../../languageHandler";
import { SDKContext } from "../../contexts/SDKContext";
import { useMatrixClientContext } from "../../contexts/MatrixClientContext";
import { isClearableByReceipt } from "../../stores/notifications/NotificationLevel";
import { clearThreadNotification } from "../../utils/notifications";
import { applyHeldOrder, ThreadsFeedFilter, type ThreadsFeedFilters } from "../../viewmodels/threads/threadsFeed";
import { useThreadsFeed } from "../../viewmodels/threads/useThreadsFeed";
import { ThreadCard } from "../views/threads/ThreadCard";
import { ThreadsViewFilters } from "../views/threads/ThreadsViewFilters";
import EmptyState from "../views/right_panel/EmptyState";
import Spinner from "../views/elements/Spinner";

/** Cards rendered initially, and added each time the user scrolls near the bottom. */
const RENDER_BATCH = 20;
/** Distance from the bottom, in pixels, at which the next batch is rendered. */
const SCROLL_THRESHOLD_PX = 600;
/** Scroll offset, in pixels, still counted as being at the top of the feed. */
const AT_TOP_THRESHOLD_PX = 8;
/** Read receipts sent at once when marking the feed read. */
const MARK_READ_BATCH = 10;
/** No filters, which is the whole feed. */
const NO_FILTERS: ThreadsFeedFilters = new Set();

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
    const client = useMatrixClientContext();
    const [filters, setFilters] = useState<ThreadsFeedFilters>(NO_FILTERS);
    const [renderCount, setRenderCount] = useState(RENDER_BATCH);
    const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

    // The active thread is exempt from filtering: reading it is what makes it stop matching
    // "Unread", and a card that deletes itself as it is read takes the composer with it.
    const { entries, backfilling, hasMore, loadMore, initialised } = useThreadsFeed(filters, activeThreadId);

    /** Whether the feed is scrolled to the top, where re-sorting is safe to show. */
    const [atTop, setAtTop] = useState(true);

    /** The order the feed was last painted in. */
    const paintedOrder = useRef<string[]>([]);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Changing filter is an explicit request for a different list, so the feed re-windows and
    // returns to the top. The held order below is deliberately not reset: an expanded card stays
    // exempt from the filter, and re-ranking around it is what would move its composer.
    useEffect(() => {
        setRenderCount(RENDER_BATCH);
        setAtTop(true);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [filters]);

    // The feed is sorted by latest activity, so a reply arriving anywhere in the account can move
    // cards. That is only acceptable while the user is at the top and can see it happen: further
    // down, it moves whatever they are reading out from under them, and if a card is expanded it
    // takes the composer they are typing in with it. In either case the painted order is held and
    // newly arrived threads wait at the end, until the feed is scrolled back to the top with
    // nothing expanded — which is also when a thread jumping to the top reads as new activity
    // rather than as the page shuffling itself.
    //
    // Tested for on screen rather than merely set, because a card can leave the feed while it is
    // the active one — its room hidden or left, its root redacted — and it unmounts without
    // getting to say so. A hold left down by a card that is gone is one the user cannot release:
    // collapsing it is the only way, and there is nothing left to collapse. Being in the feed is
    // the same thing as being rendered here, which is what `visible` below guarantees.
    const activeOnScreen = useMemo(
        () => activeThreadId !== null && entries.some((entry) => entry.threadId === activeThreadId),
        [activeThreadId, entries],
    );
    const frozen = activeOnScreen || !atTop;
    const ordered = useMemo(
        () => (frozen ? applyHeldOrder(entries, paintedOrder.current) : entries),
        [entries, frozen],
    );

    // Recorded after painting rather than during render, and while frozen as well as live, because
    // what the order has to be held to is what the user is actually looking at. Recording it during
    // render would let an abandoned render hold the feed to an order that was never shown, and not
    // recording it while frozen would leave every thread that arrives during the freeze tied for
    // last place, so each new arrival would reshuffle the ones before it.
    useEffect(() => {
        paintedOrder.current = ordered.map((entry) => entry.threadId);
    }, [ordered]);

    // Whether the feed on screen is no longer the order the sort would give, and saying so is
    // useful: only while the hold is down to scroll position, because returning to the top is then
    // all it takes to release it. A hold caused by an expanded card is deliberately silent — the
    // only way to release that is to collapse the card, which throws away the reply being written.
    const stale = useMemo(() => {
        if (atTop || activeOnScreen) return false;
        if (ordered.length !== entries.length) return true;
        return ordered.some((entry, index) => entry.threadId !== entries[index].threadId);
    }, [atTop, activeOnScreen, ordered, entries]);

    const onShowNewActivity = useCallback(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        setAtTop(true);
    }, []);

    // The active card is rendered wherever it ranks, not only if it falls inside the window.
    // Filtering re-windows to the first batch, and a card holding a reply being written must survive
    // that: the draft exists only in the mounted composer, and click-away deliberately will not
    // discard it. Nothing extra gets rendered by this — a card can only be made active by being
    // clicked, so its rank is one the window already reached a moment ago.
    const visible = useMemo(() => {
        const activeIndex =
            activeThreadId === null ? -1 : ordered.findIndex((entry) => entry.threadId === activeThreadId);
        return ordered.slice(0, Math.max(renderCount, activeIndex + 1));
    }, [ordered, renderCount, activeThreadId]);
    const canRenderMore = renderCount < ordered.length;
    const isEmpty = visible.length === 0;
    /** Whether anything could still arrive: the first scan, or rooms left to search. */
    const searching = !initialised || backfilling || hasMore;

    /**
     * Brings the end of the feed within reach again: renders more of what is known, or searches
     * more rooms once it is all on screen. Also keeps `atTop` in step with where the feed is.
     */
    const advance = useCallback(() => {
        const el = scrollRef.current;
        // Treated as at the top and as within reach of the end until measurable, so that a first
        // pass still runs before there is any layout to measure.
        setAtTop(!el || el.scrollTop <= AT_TOP_THRESHOLD_PX);
        if (el && el.scrollHeight - el.scrollTop - el.clientHeight > SCROLL_THRESHOLD_PX) return;

        if (canRenderMore) setRenderCount((count) => count + RENDER_BATCH);
        else if (hasMore && !backfilling) loadMore();
    }, [canRenderMore, hasMore, backfilling, loadMore]);

    // Scrolling cannot be the only thing that drives this. A feed that does not overflow its
    // container never fires a scroll event, so a short result from the first rooms searched would
    // strand the user with nothing to scroll and most of the account never searched. Nor does a
    // feed already scrolled to its end, where a thread arriving below the render window — which is
    // where a thread arriving during a freeze goes — would otherwise stay unrendered until the user
    // scrolled up and back down. Re-measuring here also stops `atTop` going stale when the content
    // shrinks under the viewport, which moves the scroll offset without the user touching it.
    useEffect(() => {
        advance();
        // Collapsing is included because an expanded card is the tallest thing in the feed, so
        // collapsing one shrinks the content most, and otherwise this would be relying on the
        // browser to fire a scroll event when it clamps the offset it has invalidated.
    }, [advance, ordered.length, renderCount, activeThreadId]);

    const unreadEntries = useMemo(() => entries.filter((entry) => isClearableByReceipt(entry.level)), [entries]);

    const [markingAllRead, setMarkingAllRead] = useState(false);

    // Only marks what the feed knows about. Backfill is still walking the account in the
    // background, so this is "everything on this page" rather than "every thread you have" — which
    // is also the only promise a button on this page can honestly make.
    const onMarkAllRead = useCallback(async () => {
        setMarkingAllRead(true);
        try {
            // One receipt per unread thread, and an account can have hundreds. Fired all at once
            // they are hundreds of simultaneous requests to the homeserver, so they go out in
            // batches instead — slower to finish, but it does not stall the rest of the client
            // behind a queue of its own making.
            for (let i = 0; i < unreadEntries.length; i += MARK_READ_BATCH) {
                await Promise.all(
                    unreadEntries.slice(i, i + MARK_READ_BATCH).map((entry) =>
                        clearThreadNotification(entry.thread, entry.room, client).catch((e) => {
                            logger.warn(`ThreadsView: failed to mark thread ${entry.threadId} read`, e);
                        }),
                    ),
                );
            }
        } finally {
            setMarkingAllRead(false);
        }
    }, [unreadEntries, client]);

    // A single filter can say something specific about what is missing. Combinations would need a
    // string each to do the same, so they share one that names none of them.
    const emptyState = useMemo(() => {
        if (filters.size === 0) {
            return (
                <EmptyState
                    Icon={ThreadsIcon}
                    title={_t("threads_view|empty_title")}
                    description={_t("threads_view|empty_description", {
                        replyInThread: _t("action|reply_in_thread"),
                    })}
                />
            );
        }

        if (filters.size > 1) {
            return (
                <EmptyState
                    Icon={ThreadsIcon}
                    title={_t("threads_view|empty_filtered_title")}
                    description={_t("threads_view|empty_filtered_description")}
                />
            );
        }

        const [only] = filters;
        switch (only) {
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
            case ThreadsFeedFilter.Unreplied:
                return (
                    <EmptyState
                        Icon={ThreadsIcon}
                        title={_t("threads_view|empty_unreplied_title")}
                        description={_t("threads_view|empty_unreplied_description")}
                    />
                );
            default: {
                const exhaustive: never = only;
                throw new Error(`Unhandled threads feed filter: ${exhaustive}`);
            }
        }
    }, [filters]);

    return (
        <main className="mx_ThreadsView" aria-label={_t("common|threads")}>
            <header className="mx_ThreadsView_header">
                <div className="mx_ThreadsView_headerRow">
                    <Heading as="h1" size="md" className="mx_ThreadsView_heading">
                        {_t("common|threads")}
                    </Heading>
                    <Button
                        kind="tertiary"
                        size="md"
                        className="mx_ThreadsView_markAllRead"
                        disabled={unreadEntries.length === 0 || markingAllRead}
                        onClick={() => void onMarkAllRead()}
                    >
                        {_t("threads_view|mark_all_read")}
                    </Button>
                </div>
                <ThreadsViewFilters filters={filters} onChange={setFilters} />
            </header>

            <AutoHideScrollbar
                className="mx_ThreadsView_scroller"
                onScroll={advance}
                wrappedRef={(ref) => {
                    scrollRef.current = ref;
                }}
                tabIndex={0}
            >
                {/* Announced as a status so that the feed having gone stale is not something only
                    a sighted user scrolled to the top can discover. */}
                <div className="mx_ThreadsView_newActivity" role="status">
                    {stale && (
                        <button type="button" className="mx_ThreadsView_newActivityButton" onClick={onShowNewActivity}>
                            {_t("threads_view|new_activity")}
                        </button>
                    )}
                </div>

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
                        active={activeThreadId === entry.threadId}
                        onSetActive={setActiveThreadId}
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
