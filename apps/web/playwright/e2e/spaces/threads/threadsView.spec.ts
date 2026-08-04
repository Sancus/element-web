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

        await expect(util.getCardComposer(util.getThreadCard("Msg2"))).toBeVisible();
        // Msg3 is asserted still present as well as closed: a missing card would satisfy the
        // absence of its composer just as well, and the test would then be lying.
        await expect(util.getThreadCard("Msg3")).toBeVisible();
        await expect(util.getCardComposer(util.getThreadCard("Msg3"))).toHaveCount(0);
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

    test("should leave the room's own timeline unread when a thread is read", async ({
        room1,
        room2,
        util,
        msg,
        page,
        app,
        user,
    }) => {
        // Everything below arrives while the user is looking at a different room, so both the
        // thread and the room's own timeline are genuinely unread. Reading the thread must not
        // touch the latter.
        //
        // The plain message goes first deliberately. A receipt is a position, not a flag, so one
        // that lands anywhere in the main timeline marks everything before it read — and a receipt
        // aimed at the thread would only be caught here if there is main-timeline traffic older
        // than the thread for it to swallow.
        await util.goTo(room2);
        await util.receiveMessages(room1, ["Not in any thread"]);
        await util.receiveThreadMentioningUser(room1, msg, user, "Msg1");

        // Reloaded so the thread comes back from sync with only the reply bundled onto its root
        // and an empty timeline of its own. That is the state the receipt bug needed, and it is
        // the state a feed full of threads from rooms the user has not opened is always in.
        await page.reload();
        await expect(util.getThreadsNavButton()).toBeVisible();

        await util.openThreadsPage();
        await util.expandThreadCard("Msg1");
        await util.assertNoThreadsIndicator();

        // Asserted against the receipts rather than the unread counts, which the server owns and
        // delivers on its own schedule: checking a count immediately after reading mostly proves
        // that the next sync has not arrived yet, and passes whatever the receipt said.
        const ids = await app.client.evaluate((cli, roomId) => {
            const room = cli.getRoom(roomId)!;
            const find = (body: string): string | undefined =>
                room
                    .getLiveTimeline()
                    .getEvents()
                    .find((event) => event.getContent().body === body)
                    ?.getId();
            const rootId = find("Msg1");
            return {
                plain: find("Not in any thread"),
                reply: rootId ? room.getThread(rootId)?.lastReply()?.getId() : undefined,
            };
        }, room1.roomId);
        expect(ids.plain).toBeTruthy();
        expect(ids.reply).toBeTruthy();

        const hasRead = (eventId: string): Promise<boolean> =>
            app.client.evaluate(
                (cli, { roomId, eventId }) => cli.getRoom(roomId)!.hasUserReadEvent(cli.getUserId()!, eventId),
                { roomId: room1.roomId, eventId },
            );

        // Waiting for the thread's own reply to read as read is what makes the check below
        // meaningful: it is the point at which the receipt has demonstrably been sent and
        // processed, so "the plain message is still unread" is a fact rather than a head start.
        await expect.poll(() => hasRead(ids.reply!)).toBe(true);
        expect(await hasRead(ids.plain!)).toBe(false);
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
        await expect(util.getCardComposer(card)).toBeVisible();
        // Still gone once closed, since it is genuinely read by then.
        await card.press("Escape");
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

    test("should return to the previous room when the nav button is pressed again", async ({ room1, util, page }) => {
        await util.goTo(room1);
        await util.openThreadsPage();

        await util.getThreadsNavButton().click();

        await expect(util.getThreadsPage()).toBeHidden();
        await expect(util.getThreadsNavButton()).not.toHaveAttribute("aria-current", "page");
        // Which room, not merely "not the threads page": going Home would satisfy everything
        // above it while losing the user's place, which is the whole point of the control.
        await expect(page.getByRole("heading", { name: room1.name, exact: true })).toBeVisible();
    });

    test("should open the composer without unfolding the whole thread", async ({ room1, util, msg }) => {
        await util.goTo(room1);
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
        await card.getByRole("button", { name: "Reply…" }).click();

        // Asking to write a reply is not asking to read the whole thread, so the earlier replies
        // stay behind the count they were behind before.
        await expect(util.getCardComposer(card)).toBeVisible();
        await expect(card.getByRole("button", { name: /^Show \d+ more repl/ })).toBeVisible();
        await expect(card).not.toContainText("Reply1");
    });

    test("should not offer to collapse a thread that is not unfolded", async ({ room1, util, msg }) => {
        await util.goTo(room1);
        await util.receiveMessages(room1, [
            "Msg1",
            msg.threadedOff("Msg1", "Reply1"),
            msg.threadedOff("Msg1", "Reply2"),
            msg.threadedOff("Msg1", "Reply3"),
        ]);
        await util.sendMessages(room1, [msg.threadedOff("Msg1", "Mine")]);

        await util.openThreadsPage();
        const card = util.getThreadCard("Msg1");
        await card.getByRole("button", { name: "Reply…" }).click();
        await expect(util.getCardComposer(card)).toBeVisible();

        // Nothing is unfolded, so there is nothing for a collapse control to act on and offering
        // one describes a state the card is not in.
        await expect(card.getByRole("button", { name: "Collapse thread" })).toHaveCount(0);

        await card.getByRole("button", { name: /^Show \d+ more repl/ }).click();
        await expect(card.getByRole("button", { name: "Collapse thread" })).toBeVisible();
    });

    test("should put an untouched composer away when the user clicks elsewhere", async ({ room1, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room1, msg, user);

        await util.openThreadsPage();
        const card = util.getThreadCard("Msg3");
        await util.expandThreadCard("Msg3");

        await util.getThreadsPage().getByRole("heading", { name: "Threads" }).click();

        await expect(util.getCardComposer(card)).toHaveCount(0);
        await expect(card.getByRole("button", { name: "Reply…" })).toBeVisible();
    });

    test("should keep a composer the user has written in", async ({ room1, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room1, msg, user);

        await util.openThreadsPage();
        const card = util.getThreadCard("Msg3");
        await util.expandThreadCard("Msg3");
        await util.getCardComposer(card).fill("Half a thought");

        await util.getThreadsPage().getByRole("heading", { name: "Threads" }).click();

        // A draft is work in progress, and clearing it away because the user looked elsewhere
        // would read as having thrown it out.
        await expect(util.getCardComposer(card)).toHaveText("Half a thought");
    });

    test("should not call an encrypted room's composer unencrypted", async ({ page, app, util, msg, bot }) => {
        // The composer works its wording out from the encryption status it is handed, and a card
        // that hands it nothing gets the unencrypted wording — under a broken padlock, in a room
        // that is in fact encrypted.
        const roomId = await app.client.createRoom({
            name: "Encrypted Room",
            invite: [bot.credentials!.userId],
            initial_state: [
                {
                    type: "m.room.encryption",
                    state_key: "",
                    content: { algorithm: "m.megolm.v1.aes-sha2" },
                },
            ],
        });
        const room = { name: "Encrypted Room", roomId };
        await util.goTo(room);
        await util.sendMessages(room, ["Msg1"]);
        await util.sendMessages(room, [msg.threadedOff("Msg1", "Mine")]);

        await util.openThreadsPage();
        const card = util.getThreadCard("Msg1");
        await util.expandThreadCard("Msg1");

        await expect(util.getCardComposer(card)).toHaveAttribute("aria-label", "Send a message…");
        await expect(card.getByLabel("Messages in this room are not end-to-end encrypted")).toHaveCount(0);
    });

    test("should load a whole thread rather than asking for it a page at a time", async ({
        room1,
        util,
        msg,
        page,
    }) => {
        await util.goTo(room1);
        await util.receiveMessages(room1, [
            "Msg1",
            ...Array.from({ length: 24 }, (_, i) => msg.threadedOff("Msg1", `Reply${i + 1}`)),
        ]);
        await util.sendMessages(room1, [msg.threadedOff("Msg1", "Mine")]);

        // Reloaded so the replies have to be fetched rather than simply still being in memory from
        // having watched them arrive. A fresh sync gives a thread only the one reply the server
        // bundles with its root, which is the state every card in the feed starts in and the only
        // state in which this can tell the difference between paginating once and paginating until
        // the thread is whole.
        await page.reload();
        await util.openThreadsPage();
        const card = util.getThreadCard("Msg1");
        await expect(card).not.toContainText("Reply1");
        await card.getByRole("button", { name: /^Show \d+ more repl/ }).click();

        // More replies than fit in one page of pagination, so a card that only fetched one would
        // leave the reader to click through the rest by hand.
        await expect(card).toContainText("Reply1");
        await expect(card.getByRole("button", { name: "Load earlier replies" })).toHaveCount(0);
    });

    test("should mark every unread thread read from the header", async ({ room1, room2, util, msg, user }) => {
        await util.goTo(room1);
        await util.populateThreads(room1, room2, msg, user);
        await util.openThreadsPage();

        await util.getThreadsPage().getByRole("button", { name: "Mark all as read" }).click();

        await util.assertNoThreadsIndicator();
    });
});
