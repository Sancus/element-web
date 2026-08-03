/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { fireEvent, render, screen } from "jest-matrix-react";

import { ThreadsViewFilterMenu } from "../../../../../src/components/views/threads/ThreadsViewFilterMenu";
import { ThreadsFeedFilter } from "../../../../../src/viewmodels/threads/threadsFeed";
import UIStore from "../../../../../src/stores/UIStore";

describe("ThreadsViewFilterMenu", () => {
    function openMenu(filter = ThreadsFeedFilter.All): { onChange: jest.Mock } {
        const onChange = jest.fn();
        render(<ThreadsViewFilterMenu filter={filter} onChange={onChange} />);
        fireEvent.click(screen.getByRole("button"));
        return { onChange };
    }

    it("names the selected filter in the button's accessible name", () => {
        render(<ThreadsViewFilterMenu filter={ThreadsFeedFilter.Unread} onChange={jest.fn()} />);

        expect(screen.getByRole("button")).toHaveAccessibleName("Show: Unread");
    });

    it("positions the menu against the button, viewport-relative", () => {
        openMenu();

        // `ContextMenu` positions itself only from explicit coordinate props on a fixed wrapper,
        // so those props have to come from a positioning helper. Passing the button's DOMRect
        // directly cannot work in a browser: its properties are accessors on the prototype, so
        // spreading it yields an empty object and the menu renders detached from the button.
        //
        // That failure is invisible under jsdom, whose getBoundingClientRect returns a plain
        // object that does spread. What still distinguishes the two is the value: `aboveLeftOf`
        // converts the rect into an offset from the far edge of the viewport, whereas the raw
        // rect would put the menu's own edge at the button's coordinate.
        const wrapper = document.querySelector<HTMLElement>(".mx_ContextualMenu_wrapper");
        expect(wrapper).not.toBeNull();

        // The helper expresses the button's position as an inset from the far edge of the viewport,
        // so a menu anchored to a button near the right-hand end of the header has a large `right`.
        // Passing the rect through unconverted leaves it at 0, pinned to the opposite edge. Exact
        // arithmetic is avoided because `ContextMenu` also clamps against the window edge.
        expect(parseInt(wrapper!.style.right, 10)).toBeGreaterThan(UIStore.instance.windowWidth / 2);
    });

    it("reports the chosen filter", () => {
        const { onChange } = openMenu();

        fireEvent.click(screen.getByRole("menuitemradio", { name: "Mentions" }));

        expect(onChange).toHaveBeenCalledWith(ThreadsFeedFilter.Mentions);
    });
});
