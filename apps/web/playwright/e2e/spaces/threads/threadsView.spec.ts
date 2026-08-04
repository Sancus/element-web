/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { test, expect } from ".";

test.describe("Threads view", { tag: "@no-firefox" }, () => {
    test.use({
        displayName: "Alice",
        botCreateOpts: { displayName: "Other User" },
    });

    test("should not show an indicator when there are no threads", async ({ room1, util }) => {
        await util.goTo(room1);
        await util.assertNoThreadsIndicator();
    });

    test("should show a notification indicator when there is a message in a thread", async ({
        room1,
        util,
        msg,
        page,
    }) => {
        await util.goTo(room1);
        await util.receiveMessages(room1, ["Msg1", msg.threadedOff("Msg1", "Resp1")]);
        // Reading the room does not read its threads.
        await page.reload();

        await util.assertNotificationIndicator();
    });

    test("should show a highlight indicator when there is a mention in a thread", async ({
        room1,
        util,
        msg,
        user,
    }) => {
        await util.goTo(room1);
        await util.receiveMessages(room1, [
            "Msg1",
            msg.threadedOff("Msg1", {
                "body": "Alice",
                "format": "org.matrix.custom.html",
                "formatted_body": `<a href="https://matrix.to/#/${user.userId}">Alice</a>`,
                "m.mentions": { user_ids: [user.userId] },
            }),
        ]);

        await util.assertHighlightIndicator();
    });

    test("should open a page listing threads from every room", async ({ room1, room2, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room2, msg, user);

        await util.openThreadsPage();

        // Msg3 in room1 is the most recent, then Msg2 and Msg1 in room2.
        await util.assertThreadsInFeed(["Msg3", "Msg2", "Msg1"]);
    });

    test("should name the room each thread belongs to", async ({ room1, room2, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room2, msg, user);

        await util.openThreadsPage();

        await expect(util.getThreadCard("Msg3")).toContainText(room1.name);
        await expect(util.getThreadCard("Msg2")).toContainText(room2.name);
    });

    test("should show only mentions when filtered to mentions", async ({ room1, room2, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room2, msg, user);

        await util.openThreadsPage();
        await util.setFilter("Mentions");

        // Only the thread off Msg1 mentions the user.
        await util.assertThreadsInFeed(["Msg1"]);
    });

    test("should reply to a thread from the feed", async ({ room1, util, msg, page, user }) => {
        await util.goTo(room1);
        // Mentioned rather than participated: the feed lists threads you have taken part in or been
        // pinged in, and being pinged then replying from the inbox is the journey this page is for.
        await util.receiveThreadMentioningUser(room1, msg, user, "Msg1");

        await util.openThreadsPage();
        await util.expandThreadCard("Msg1");

        const card = util.getThreadCard("Msg1");
        await util.getCardComposer(card).fill("My reply");
        await util.getCardComposer(card).press("Enter");

        await expect(card).toContainText("My reply");

        // The reply belongs to the thread, not the room's main timeline. Asserting only that the
        // timeline does not mention it would be unfalsifiable: the thread summary hanging off the
        // root previews the newest reply, and the summary sits inside the message list.
        await util.goTo(room1);
        const timelineMessages = page.locator(".mx_RoomView_MessageList .mx_MTextBody");
        // The reply reached the thread.
        await expect(page.locator(".mx_ThreadSummary")).toContainText("My reply");
        // The root is still the timeline's only message. Asserted positively as well as
        // negatively, so that the count below is known to be counting something: on a timeline
        // that failed to render, "no message contains the reply" would hold trivially.
        await expect(timelineMessages.filter({ hasText: "Msg1" })).toHaveCount(1);
        await expect(timelineMessages.filter({ hasText: "My reply" })).toHaveCount(0);
    });

    test("should expand only one thread at a time", async ({ room1, room2, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room2, msg, user);

        await util.openThreadsPage();
        await util.expandThreadCard("Msg3");
        await util.expandThreadCard("Msg2");

        await expect(util.getThreadCard("Msg2").getByRole("button", { name: "Collapse thread" })).toBeVisible();
        // Msg3 is asserted still present as well as collapsed: a missing card would satisfy the
        // absence of its collapse button just as well, and the test would then be lying.
        await expect(util.getThreadCard("Msg3")).toBeVisible();
        await expect(util.getThreadCard("Msg3").getByRole("button", { name: "Collapse thread" })).toHaveCount(0);
    });

    test("should expand a thread from the hidden reply count", async ({ room1, util, msg }) => {
        await util.goTo(room1);
        // Enough replies that the collapsed card hides some behind the count. The other tests
        // reach the expanded state through the reply prompt, so without this one the count is
        // never actually clicked, and it can stop taking clicks without anything failing.
        await util.receiveMessages(room1, [
            "Msg1",
            msg.threadedOff("Msg1", "Reply1"),
            msg.threadedOff("Msg1", "Reply2"),
            msg.threadedOff("Msg1", "Reply3"),
            msg.threadedOff("Msg1", "Reply4"),
        ]);
        await util.sendMessages(room1, [msg.threadedOff("Msg1", "Mine")]);

        await util.openThreadsPage();
        const card = util.getThreadCard("Msg1");
        const showMore = card.getByRole("button", { name: /^Show \d+ more repl/ });
        await expect(showMore).toBeVisible();
        await showMore.click();

        await expect(card.getByRole("button", { name: "Collapse thread" })).toBeVisible();
        await expect(card).toContainText("Reply1");
    });

    test("should clear the thread's unread state once read", async ({ room1, util, msg, page, user }) => {
        await util.goTo(room1);
        await util.receiveThreadMentioningUser(room1, msg, user, "Msg1");
        await page.reload();
        await util.assertHighlightIndicator();

        await util.openThreadsPage();
        await util.expandThreadCard("Msg1");

        await util.assertNoThreadsIndicator();
    });

    test("should keep a card open under Unread while reading marks it read", async ({
        room1,
        util,
        msg,
        page,
        user,
    }) => {
        await util.goTo(room1);
        await util.receiveThreadMentioningUser(room1, msg, user, "Msg1");
        await page.reload();

        await util.openThreadsPage();
        await util.setFilter("Unread");
        await expect(util.getThreadCard("Msg1")).toBeVisible();

        // Expanding sends a read receipt, which stops the thread matching this filter. The card
        // being read has to survive that: otherwise it takes the composer with it as it goes.
        await util.expandThreadCard("Msg1");

        const card = util.getThreadCard("Msg1");
        await expect(card.getByRole("button", { name: "Collapse thread" })).toBeVisible();
        await expect(util.getCardComposer(card)).toBeVisible();
        // Still gone once collapsed, since it is genuinely read by then.
        await card.getByRole("button", { name: "Collapse thread" }).click();
        await expect(util.getThreadCard("Msg1")).not.toBeVisible();
    });

    test("should show an empty state when there are no threads", async ({ room1, util }) => {
        await util.goTo(room1);

        await util.openThreadsPage();

        await expect(util.getThreadsPage()).toContainText("No threads yet");
    });

    test("should mark the nav button as the current page", async ({ room1, util }) => {
        await util.goTo(room1);
        await expect(util.getThreadsNavButton()).not.toHaveAttribute("aria-current", "page");

        await util.openThreadsPage();

        await expect(util.getThreadsNavButton()).toHaveAttribute("aria-current", "page");
    });
});
