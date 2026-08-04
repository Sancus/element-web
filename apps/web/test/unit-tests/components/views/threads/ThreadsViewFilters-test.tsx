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
    function renderFilters(filter = ThreadsFeedFilter.All): { onChange: jest.Mock } {
        const onChange = jest.fn();
        render(<ThreadsViewFilters filter={filter} onChange={onChange} />);
        return { onChange };
    }

    it("offers only the two filters, with no chip for the unfiltered feed", () => {
        renderFilters();

        expect(screen.getAllByRole("option").map((chip) => chip.textContent)).toEqual(["Unread", "Mentions"]);
    });

    it("marks nothing as selected when the feed is unfiltered", () => {
        renderFilters();

        for (const chip of screen.getAllByRole("option")) {
            expect(chip).toHaveAttribute("aria-selected", "false");
        }
    });

    it("selects the filter that was clicked", () => {
        const { onChange } = renderFilters();

        fireEvent.click(screen.getByRole("option", { name: "Mentions" }));

        expect(onChange).toHaveBeenCalledWith(ThreadsFeedFilter.Mentions);
    });

    it("clears the filter when the selected chip is clicked again", () => {
        // The only route back to the whole feed, now that there is no "All" chip to return to.
        const { onChange } = renderFilters(ThreadsFeedFilter.Unread);

        fireEvent.click(screen.getByRole("option", { name: "Unread" }));

        expect(onChange).toHaveBeenCalledWith(ThreadsFeedFilter.All);
    });

    it("reports the active filter to assistive technology", () => {
        renderFilters(ThreadsFeedFilter.Unread);

        expect(screen.getByRole("option", { name: "Unread" })).toHaveAttribute("aria-selected", "true");
        expect(screen.getByRole("option", { name: "Mentions" })).toHaveAttribute("aria-selected", "false");
    });
});
