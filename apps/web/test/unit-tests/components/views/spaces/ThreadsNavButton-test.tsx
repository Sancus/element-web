/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { render, screen } from "jest-matrix-react";
import userEvent from "@testing-library/user-event";
import { type MatrixClient } from "matrix-js-sdk/src/matrix";

import MatrixClientContext from "../../../../../src/contexts/MatrixClientContext";
import { stubClient } from "../../../../test-utils";
import { ThreadsNavButton } from "../../../../../src/components/views/spaces/threads/ThreadsNavButton";
import defaultDispatcher from "../../../../../src/dispatcher/dispatcher";
import { Action } from "../../../../../src/dispatcher/actions";

// The notification indicator itself is a CSS pseudo-element on a Compound wrapper, so it is
// not assertable from the DOM. The level feeding it is covered by useUnreadThreadRooms-test.
describe("ThreadsNavButton", () => {
    let client: MatrixClient;

    beforeEach(() => {
        client = stubClient();
        client.supportsThreads = () => true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    function renderButton(props: Partial<React.ComponentProps<typeof ThreadsNavButton>> = {}) {
        return render(
            <MatrixClientContext.Provider value={client}>
                <ThreadsNavButton {...props} />
            </MatrixClientContext.Provider>,
        );
    }

    it("shows only an icon when collapsed", () => {
        const { container } = renderButton();

        expect(screen.getByRole("button", { name: "Threads" })).toBeInTheDocument();
        expect(container.querySelector(".mx_ThreadsNavButton_label")).toBeNull();
    });

    it("shows a label when expanded", () => {
        const { container } = renderButton({ displayLabel: true });

        expect(container.querySelector(".mx_ThreadsNavButton_label")).toHaveTextContent("Threads");
    });

    it("navigates to the threads page when clicked", async () => {
        const dispatch = jest.spyOn(defaultDispatcher, "dispatch");
        renderButton();

        await userEvent.click(screen.getByRole("button", { name: "Threads" }));

        expect(dispatch).toHaveBeenCalledWith({ action: Action.ViewThreadsPage });
    });

    it("marks itself as the current page when active", () => {
        renderButton({ isActive: true });

        expect(screen.getByRole("button", { name: "Threads" })).toHaveAttribute("aria-current", "page");
    });

    it("is not marked as current when inactive", () => {
        renderButton();

        expect(screen.getByRole("button", { name: "Threads" })).not.toHaveAttribute("aria-current");
    });
});
