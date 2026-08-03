/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { act, fireEvent, render, screen } from "jest-matrix-react";

import { SDKContext } from "../../../../src/contexts/SDKContext";
import { SDKContextClass } from "../../../../src/contexts/SDKContextClass";
import { ThreadsView } from "../../../../src/components/structures/ThreadsView";
import { type ThreadFeedEntry, ThreadsFeedFilter } from "../../../../src/viewmodels/threads/threadsFeed";
import { NotificationLevel } from "../../../../src/stores/notifications/NotificationLevel";
import { type ThreadsFeedState, useThreadsFeed } from "../../../../src/viewmodels/threads/useThreadsFeed";

// The feed hook has its own suite; here it is a lever, so that this one is only about how the page
// decides when to hold its order and when to render more.
jest.mock("../../../../src/viewmodels/threads/useThreadsFeed", () => ({
    __esModule: true,
    useThreadsFeed: jest.fn(),
}));

// A card renders a whole thread timeline and a composer, neither of which this is about. The stub
// exposes the thread ID so the rendered order can be read back, and a way to expand it.
jest.mock("../../../../src/components/views/threads/ThreadCard", () => ({
    __esModule: true,
    ThreadCard: ({
        entry,
        onToggleExpanded,
    }: {
        entry: ThreadFeedEntry;
        onToggleExpanded: (threadId: string) => void;
    }) => (
        <div data-testid="card" data-thread-id={entry.threadId}>
            <button type="button" onClick={() => onToggleExpanded(entry.threadId)}>
                expand {entry.threadId}
            </button>
        </div>
    ),
}));

const mockedUseThreadsFeed = jest.mocked(useThreadsFeed);

/** The heights a real scroller would have; jsdom lays nothing out, so they are supplied. */
interface Geometry {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
}

describe("ThreadsView", () => {
    let feed: ThreadsFeedState;
    let geometry: Geometry;
    /** Entries per filter, so that changing filter really changes the list, as it does in the app. */
    let entriesByFilter: Partial<Record<ThreadsFeedFilter, ThreadFeedEntry[]>>;

    const entriesFor = (threadIds: string[]): ThreadFeedEntry[] =>
        threadIds.map(
            (threadId) =>
                ({
                    threadId,
                    latestTs: 0,
                    level: NotificationLevel.None,
                    participated: true,
                    mentioned: false,
                }) as ThreadFeedEntry,
        );

    beforeEach(() => {
        // Tall enough to scroll and far enough from the end that nothing auto-advances, unless a
        // test says otherwise.
        geometry = { scrollTop: 0, scrollHeight: 10000, clientHeight: 1000 };
        feed = {
            entries: entriesFor(["a", "b", "c"]),
            backfilling: false,
            hasMore: false,
            loadMore: jest.fn(),
            initialised: true,
        };
        entriesByFilter = {};
        mockedUseThreadsFeed.mockImplementation((filter) => ({
            ...feed,
            entries: entriesByFilter[filter] ?? feed.entries,
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    function renderView(): { rerender: () => void; scroller: HTMLElement } {
        const sdkContext = new SDKContextClass();
        // Built fresh each time: React bails out of re-rendering a referentially identical element,
        // which would silently make every assertion below a restatement of the first render.
        const view = (): React.ReactElement => (
            <SDKContext.Provider value={sdkContext}>
                <ThreadsView />
            </SDKContext.Provider>
        );
        const { rerender } = render(view());

        // `AutoHideScrollbar` puts the caller's class name and the ref it hands back on the same
        // element, so this is the container the component measures.
        const scroller = document.querySelector<HTMLElement>(".mx_ThreadsView_scroller")!;
        Object.defineProperties(scroller, {
            scrollTop: {
                get: () => geometry.scrollTop,
                set: (value: number) => {
                    geometry.scrollTop = value;
                },
            },
            scrollHeight: { get: () => geometry.scrollHeight },
            clientHeight: { get: () => geometry.clientHeight },
        });

        return { rerender: () => rerender(view()), scroller };
    }

    const renderedOrder = (): string[] =>
        screen.getAllByTestId("card").map((card) => card.getAttribute("data-thread-id")!);

    function expandCard(threadId: string): void {
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: `expand ${threadId}` }));
        });
    }

    function chooseFilter(name: string): void {
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: /^Show:/ }));
        });
        act(() => {
            fireEvent.click(screen.getByRole("menuitemradio", { name }));
        });
    }

    /** Scrolls the feed, as the browser would: move the offset, then fire the event. */
    function scrollTo(scroller: HTMLElement, scrollTop: number): void {
        geometry.scrollTop = scrollTop;
        act(() => {
            fireEvent.scroll(scroller);
        });
    }

    /** Replaces the feed's entries, as a reply arriving in some room would. */
    function activityReorders(rerender: () => void, threadIds: string[]): void {
        feed = { ...feed, entries: entriesFor(threadIds) };
        act(() => {
            rerender();
        });
    }

    it("re-sorts while the feed is at the top", () => {
        const { rerender } = renderView();
        expect(renderedOrder()).toEqual(["a", "b", "c"]);

        // "c" has just received a reply, so the feed now sorts it first. The user is at the top and
        // can see it happen, so it is allowed to move.
        activityReorders(rerender, ["c", "a", "b"]);

        expect(renderedOrder()).toEqual(["c", "a", "b"]);
    });

    it("holds the order once the feed is scrolled away from the top", () => {
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 4000);

        activityReorders(rerender, ["c", "a", "b"]);

        expect(renderedOrder()).toEqual(["a", "b", "c"]);
    });

    it("releases the order on return to the top", () => {
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 4000);
        activityReorders(rerender, ["c", "a", "b"]);
        expect(renderedOrder()).toEqual(["a", "b", "c"]);

        scrollTo(scroller, 0);

        expect(renderedOrder()).toEqual(["c", "a", "b"]);
    });

    it("puts threads arriving while held at the end, in the order they arrive", () => {
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 4000);

        // Each arrival sorts to the front of the feed's own order, and must not displace the cards
        // the user is among — nor re-rank the arrival before it.
        activityReorders(rerender, ["first", "a", "b", "c"]);
        expect(renderedOrder()).toEqual(["a", "b", "c", "first"]);

        activityReorders(rerender, ["second", "first", "a", "b", "c"]);
        expect(renderedOrder()).toEqual(["a", "b", "c", "first", "second"]);
    });

    it("keeps holding the order after the feed is scrolled but not back to the top", () => {
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 4000);
        // Scrolling further does not release it; only reaching the top does.
        scrollTo(scroller, 2000);

        activityReorders(rerender, ["c", "a", "b"]);

        expect(renderedOrder()).toEqual(["a", "b", "c"]);
    });

    it("renders a thread that arrives below the render window while scrolled to the end", () => {
        // A full render window, scrolled to the very end. The arrival is held to the end of the
        // order, which puts it outside the window, and there is nothing left to scroll — so no
        // scroll event can fire to grow the window, and the card is unreachable unless the arrival
        // itself grows it. RENDER_BATCH cards exactly fill the window.
        const filled = Array.from({ length: 20 }, (_unused, index) => `t${index}`);
        feed = { ...feed, entries: entriesFor(filled) };
        geometry = { scrollTop: 9000, scrollHeight: 10000, clientHeight: 1000 };
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 9000);
        expect(renderedOrder()).toEqual(filled);

        activityReorders(rerender, ["late", ...filled]);

        expect(renderedOrder()).toEqual([...filled, "late"]);
    });

    it("searches more rooms when the feed is too short to scroll", () => {
        geometry = { scrollTop: 0, scrollHeight: 400, clientHeight: 1000 };
        feed = { ...feed, hasMore: true };

        renderView();

        expect(feed.loadMore).toHaveBeenCalled();
    });

    it("does not search more rooms while a search is already running", () => {
        geometry = { scrollTop: 0, scrollHeight: 400, clientHeight: 1000 };
        feed = { ...feed, hasMore: true, backfilling: true };

        renderView();

        expect(feed.loadMore).not.toHaveBeenCalled();
    });

    it("returns to the top and re-sorts when the filter changes", () => {
        const { rerender, scroller } = renderView();
        scrollTo(scroller, 4000);
        activityReorders(rerender, ["c", "a", "b"]);
        expect(renderedOrder()).toEqual(["a", "b", "c"]);

        chooseFilter("Unread");

        // The held order is not carried into a list the user has explicitly asked to change.
        expect(geometry.scrollTop).toBe(0);
        expect(renderedOrder()).toEqual(["c", "a", "b"]);
    });

    it("still holds the order after the filter has been changed", () => {
        const { rerender, scroller } = renderView();

        chooseFilter("Unread");

        scrollTo(scroller, 4000);
        activityReorders(rerender, ["c", "a", "b"]);

        expect(renderedOrder()).toEqual(["a", "b", "c"]);
    });

    describe("the new activity affordance", () => {
        const newActivity = (): HTMLElement | null =>
            screen.queryByRole("button", { name: "New activity — back to top" });

        it("is not offered while the feed is live", () => {
            const { rerender } = renderView();
            activityReorders(rerender, ["c", "a", "b"]);

            // At the top the reorder is simply shown, so there is nothing to announce.
            expect(newActivity()).toBeNull();
        });

        it("is offered once the held order no longer matches the sort", () => {
            const { rerender, scroller } = renderView();
            scrollTo(scroller, 4000);
            expect(newActivity()).toBeNull();

            activityReorders(rerender, ["c", "a", "b"]);

            expect(newActivity()).not.toBeNull();
        });

        it("is not offered when the feed is held but has not gone stale", () => {
            const { rerender, scroller } = renderView();
            scrollTo(scroller, 4000);

            // Activity that does not change the order leaves nothing out of date.
            activityReorders(rerender, ["a", "b", "c"]);

            expect(newActivity()).toBeNull();
        });

        it("returns to the top and releases the order when taken", () => {
            const { rerender, scroller } = renderView();
            scrollTo(scroller, 4000);
            activityReorders(rerender, ["c", "a", "b"]);

            act(() => {
                fireEvent.click(newActivity()!);
            });

            expect(geometry.scrollTop).toBe(0);
            expect(renderedOrder()).toEqual(["c", "a", "b"]);
            expect(newActivity()).toBeNull();
        });

        it("stays silent while a card is expanded, which it cannot release", () => {
            const { rerender, scroller } = renderView();
            expandCard("a");
            scrollTo(scroller, 4000);

            activityReorders(rerender, ["c", "a", "b"]);

            // Taking it would have to collapse the card, discarding the reply being written, so it
            // is not offered at all.
            expect(newActivity()).toBeNull();
        });
    });

    it("does not reorder around an expanded card when the filter changes", () => {
        // The Unread list is sorted by activity like any other, so it arrives in a different order
        // from the one on screen.
        entriesByFilter[ThreadsFeedFilter.Unread] = entriesFor(["c", "a", "b"]);
        const { rerender } = renderView();

        // Expanding freezes the order without any scrolling, because the composer it opens is what
        // must not move.
        expandCard("a");
        activityReorders(rerender, ["c", "a", "b"]);
        expect(renderedOrder()).toEqual(["a", "b", "c"]);

        // The card stays expanded, and stays exempt from the filter, so the feed must not re-rank
        // around it — that would move the composer, which is the reason the order is held at all.
        chooseFilter("Unread");

        expect(renderedOrder()).toEqual(["a", "b", "c"]);
    });
});
