/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { fireEvent, render, screen } from "jest-matrix-react";

import { ThreadsViewFilters } from "../../../../../src/components/views/threads/ThreadsViewFilters";
import { ThreadsFeedFilter } from "../../../../../src/viewmodels/threads/threadsFeed";

describe("ThreadsViewFilters", () => {
    function renderFilters(...filters: ThreadsFeedFilter[]): { onChange: jest.Mock } {
        const onChange = jest.fn();
        render(<ThreadsViewFilters filters={new Set(filters)} onChange={onChange} />);
        return { onChange };
    }

    it("offers a chip per filter, with none for the unfiltered feed", () => {
        renderFilters();

        expect(screen.getAllByRole("button").map((chip) => chip.textContent)).toEqual([
            "Unread",
            "Mentions",
            "Never Replied",
        ]);
    });

    it("marks nothing as selected when the feed is unfiltered", () => {
        renderFilters();

        for (const chip of screen.getAllByRole("button")) {
            expect(chip).toHaveAttribute("aria-pressed", "false");
        }
    });

    it("selects the filter that was clicked", () => {
        const { onChange } = renderFilters();

        fireEvent.click(screen.getByRole("button", { name: "Mentions" }));

        expect(onChange).toHaveBeenCalledWith(new Set([ThreadsFeedFilter.Mentions]));
    });

    it("adds to the selection rather than replacing it", () => {
        const { onChange } = renderFilters(ThreadsFeedFilter.Unread);

        fireEvent.click(screen.getByRole("button", { name: "Mentions" }));

        expect(onChange).toHaveBeenCalledWith(new Set([ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions]));
    });

    it("clears a filter when its chip is clicked again, leaving the others alone", () => {
        // Clicking a selected chip is the only route back to the whole feed, now that there is no
        // "All" chip to return to.
        const { onChange } = renderFilters(ThreadsFeedFilter.Unread, ThreadsFeedFilter.Mentions);

        fireEvent.click(screen.getByRole("button", { name: "Unread" }));

        expect(onChange).toHaveBeenCalledWith(new Set([ThreadsFeedFilter.Mentions]));
    });

    it("does not hand back the set it was given", () => {
        // A mutated prop would leave the caller's state and its rendered chips disagreeing, which
        // is a filter that has stopped responding.
        const filters = new Set([ThreadsFeedFilter.Unread]);
        const onChange = jest.fn();
        render(<ThreadsViewFilters filters={filters} onChange={onChange} />);

        fireEvent.click(screen.getByRole("button", { name: "Mentions" }));

        expect(onChange.mock.calls[0][0]).not.toBe(filters);
        expect(filters).toEqual(new Set([ThreadsFeedFilter.Unread]));
    });

    it("reports each chip's state to assistive technology", () => {
        // Pressed toggle buttons in a named group, not a listbox: the chips are independent, and a
        // listbox would be promising arrow-key navigation this does not implement.
        renderFilters(ThreadsFeedFilter.Unread, ThreadsFeedFilter.Unreplied);

        expect(screen.getByRole("group", { name: "Filter threads" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Unread" })).toHaveAttribute("aria-pressed", "true");
        expect(screen.getByRole("button", { name: "Never Replied" })).toHaveAttribute("aria-pressed", "true");
        expect(screen.getByRole("button", { name: "Mentions" })).toHaveAttribute("aria-pressed", "false");
    });

    it("leaves each chip a button, so the keyboard works without any handling of ours", () => {
        // Asserted on the element rather than by pressing a key, because a browser's Space-activates-
        // a-button behaviour is the thing being relied on and jsdom does not implement it. An added
        // `role` would silently take it away.
        renderFilters();

        for (const chip of screen.getAllByRole("button")) {
            expect(chip.tagName).toBe("BUTTON");
            // ChatFilter states the role it already has; anything else would be overriding it.
            expect(chip.getAttribute("role") ?? "button").toBe("button");
            expect(chip).not.toHaveAttribute("tabindex", "-1");
        }
    });
});
