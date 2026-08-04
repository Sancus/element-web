/*
Copyright 2024 New Vector Ltd.
Copyright 2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type JSHandle, type Locator, type Page } from "@playwright/test";

import type { MatrixEvent, IContent, Room, Preset } from "matrix-js-sdk/src/matrix";
import { test as base, expect } from "../../../element-web-test";
import { type Bot } from "../../../pages/bot";
import { type Client } from "../../../pages/client";
import { type ElementAppPage } from "../../../pages/ElementAppPage";
import { type Credentials } from "../../../plugins/homeserver";

type RoomRef = { name: string; roomId: string };

/**
 * Set up for a read receipt test:
 * - Create a user with the supplied name
 * - As that user, create two rooms with the supplied names
 * - Create a bot with the supplied name
 * - Invite the bot to both rooms and ensure that it has joined
 */
export const test = base.extend<{
    room1Name: string;
    room1: { name: string; roomId: string };
    room2Name: string;
    room2: { name: string; roomId: string };
    msg: MessageBuilder;
    util: Helpers;
}>({
    displayName: "Mae",
    botCreateOpts: { displayName: "Other User" },

    room1Name: "Room 1",
    room1: async ({ room1Name: name, app, user, bot }, use) => {
        const roomId = await app.client.createRoom({
            name,
            invite: [bot.credentials!.userId],
            preset: "public_chat" as Preset,
        });
        await bot.awaitRoomMembership(roomId);
        await use({ name, roomId });
    },
    room2Name: "Room 2",
    room2: async ({ room2Name: name, app, user, bot }, use) => {
        const roomId = await app.client.createRoom({ name, invite: [bot.credentials!.userId] });
        await bot.awaitRoomMembership(roomId);
        await use({ name, roomId });
    },
    msg: async ({ page, app, util }, use) => {
        await use(new MessageBuilder());
    },
    util: async ({ room1, room2, page, app, bot }, use) => {
        await use(new Helpers(page, app, bot));
    },
});

/**
 * A utility that is able to find messages based on their content, by looking
 * inside the `timeline` objects in the object model.
 *
 * Crucially, we hold on to references to events that have been edited or
 * redacted, so we can still look them up by their old content.
 *
 * Provides utilities that build on the ability to find messages, e.g. replyTo,
 * which finds a message and then constructs a reply to it.
 */
export class MessageBuilder {
    /**
     * Map of message content -> event.
     */
    messages = new Map<string, Promise<JSHandle<MatrixEvent>>>();

    /**
     * Utility to find a MatrixEvent by its body content
     * @param room - the room to search for the event in
     * @param message - the body of the event to search for
     * @param includeThreads - whether to search within threads too
     */
    async getMessage(room: JSHandle<Room>, message: string, includeThreads = false): Promise<JSHandle<MatrixEvent>> {
        const cached = this.messages.get(message);
        if (cached) {
            return cached;
        }

        const promise = room.evaluateHandle(
            async (room, { message, includeThreads }) => {
                let ev = room.timeline.find((e) => e.getContent().body === message);
                if (!ev && includeThreads) {
                    for (const thread of room.getThreads()) {
                        ev = thread.timeline.find((e) => e.getContent().body === message);
                        if (ev) break;
                    }
                }

                if (ev) return ev;

                return new Promise<MatrixEvent>((resolve) => {
                    room.on("Room.timeline" as any, (ev: MatrixEvent) => {
                        if (ev.getContent().body === message) {
                            resolve(ev);
                        }
                    });
                });
            },
            { message, includeThreads },
        );

        this.messages.set(message, promise);
        return promise;
    }

    /**
     * MessageContentSpec to send a threaded response into a room
     * @param rootMessage - the body of the thread root message to send a response to
     * @param newMessage - the message body to send into the thread response or an object with the message content
     */
    threadedOff(rootMessage: string, newMessage: string | IContent): MessageContentSpec {
        return new (class extends MessageContentSpec {
            public async getContent(room: JSHandle<Room>): Promise<Record<string, unknown>> {
                const ev = await this.messageFinder.getMessage(room, rootMessage);
                return ev.evaluate((ev, newMessage) => {
                    if (typeof newMessage === "string") {
                        return {
                            "msgtype": "m.text",
                            "body": newMessage,
                            "m.relates_to": {
                                event_id: ev.getId(),
                                is_falling_back: true,
                                rel_type: "m.thread",
                            },
                        };
                    } else {
                        return {
                            "msgtype": "m.text",
                            "m.relates_to": {
                                event_id: ev.getId(),
                                is_falling_back: true,
                                rel_type: "m.thread",
                            },
                            ...newMessage,
                        };
                    }
                }, newMessage);
            }
        })(this);
    }
}

/**
 * Something that can provide the content of a message.
 *
 * For example, we return and instance of this from {@link
 * MessageBuilder.replyTo} which creates a reply based on a previous message.
 */
export abstract class MessageContentSpec {
    constructor(public readonly messageFinder: MessageBuilder) {}

    public abstract getContent(room: JSHandle<Room>): Promise<Record<string, unknown>>;
}

/**
 * Something that we will turn into a message or event when we pass it in to
 * e.g. receiveMessages.
 */
export type Message = string | MessageContentSpec;

export class Helpers {
    constructor(
        private page: Page,
        private app: ElementAppPage,
        private bot: Bot,
    ) {}

    /**
     * Use the supplied client to send messages or perform actions as specified by
     * the supplied {@link Message} items.
     */
    async sendMessageAsClient(cli: Client, roomRef: RoomRef, messages: Message[]) {
        const roomId = roomRef.roomId;
        const room = await this.findRoomById(roomId);
        expect(room).toBeTruthy();

        for (const message of messages) {
            if (typeof message === "string") {
                await cli.sendMessage(roomId, { body: message, msgtype: "m.text" });
            } else if (message instanceof MessageContentSpec) {
                await cli.sendMessage(roomId, await message.getContent(room));
            }
            // TODO: without this wait, some tests that send lots of messages flake
            // from time to time. I (andyb) have done some investigation, but it
            // needs more work to figure out. The messages do arrive over sync, but
            // they never appear in the timeline, and they never fire a
            // Room.timeline event. I think this only happens with events that refer
            // to other events (e.g. replies), so it might be caused by the
            // referring event arriving before the referred-to event.
            await this.page.waitForTimeout(100);
        }
    }

    /**
     * Open the room with the supplied name.
     */
    async goTo(room: RoomRef) {
        await this.app.viewRoomByName(typeof room === "string" ? room : room.name);
    }

    /**
     * Click the thread with the supplied content in the thread root to open it in
     * the Threads panel.
     */
    async openThread(rootMessage: string) {
        const tile = this.page.locator(".mx_RoomView_body .mx_EventTile[data-scroll-tokens]", { hasText: rootMessage });
        await tile.hover();
        await tile.getByRole("button", { name: "Reply in thread" }).click();
        await expect(this.page.locator(".mx_ThreadView_timelinePanelWrapper")).toBeVisible();
    }

    async findRoomById(roomId: string): Promise<JSHandle<Room>> {
        return this.app.client.evaluateHandle((cli, roomId) => {
            return cli.getRooms().find((r) => r.roomId === roomId)!;
        }, roomId);
    }

    /**
     * Sends messages into given room as a bot
     * @param room - the name of the room to send messages into
     * @param messages - the list of messages to send, these can be strings or implementations of MessageSpec like `editOf`
     */
    async receiveMessages(room: RoomRef, messages: Message[]) {
        await this.sendMessageAsClient(this.bot, room, messages);
    }

    /**
     * Sends messages into the given room as the logged-in user, which is what makes them a
     * participant in a thread and so puts it in the feed.
     */
    async sendMessages(room: RoomRef, messages: Message[]) {
        await this.sendMessageAsClient(this.app.client, room, messages);
    }

    /**
     * Get the space panel button that opens the threads page
     */
    getThreadsNavButton(): Locator {
        return this.page.getByRole("navigation", { name: "Spaces" }).getByLabel("Threads");
    }

    /**
     * Open the threads page
     */
    async openThreadsPage() {
        await this.getThreadsNavButton().click();
        await expect(this.getThreadsPage()).toBeVisible();

        // The room list's release announcement is a floating popover anchored next to the left
        // panel, and it reaches far enough across to swallow clicks aimed at the feed's own filter
        // chips. Other suites dismiss it in a `beforeEach`; here it only matters once the page is
        // open, and dismissing it is cheap enough to do on the way in.
        const announcement = this.page.getByRole("dialog", { name: "Introducing Sections" });
        if (await announcement.isVisible()) {
            await announcement.getByRole("button", { name: "OK" }).click();
            await expect(announcement).not.toBeVisible();
        }
    }

    /**
     * The threads page itself
     */
    getThreadsPage(): Locator {
        return this.page.getByRole("main", { name: "Threads" });
    }

    /**
     * Every thread card currently rendered in the feed, in feed order
     */
    getThreadCards(): Locator {
        return this.getThreadsPage().locator(".mx_ThreadCard");
    }

    /**
     * The card for the thread rooted at the message with the given body
     */
    getThreadCard(rootMessage: string): Locator {
        return this.getThreadCards().filter({ hasText: rootMessage });
    }

    /**
     * Assert that the threads nav button has no indicator
     */
    async assertNoThreadsIndicator() {
        // Asserted as the absence of any indicator rather than of the two named ones:
        // `notificationLevelToIndicator` can also return "default" for activity-level unreads, and
        // a residual grey dot would satisfy a check that only looked for success and critical.
        // Anchored on the button existing first, so this cannot pass by the whole space panel
        // having failed to render.
        await expect(this.getThreadsNavButton()).toBeVisible();
        await expect(this.getThreadsNavButton().locator("[data-indicator]")).not.toBeAttached();
    }

    /**
     * Assert that the threads nav button has a notification indicator
     */
    assertNotificationIndicator() {
        return expect(this.getThreadsNavButton().locator("[data-indicator='success']")).toBeVisible();
    }

    /**
     * Assert that the threads nav button has a highlight indicator
     */
    assertHighlightIndicator() {
        return expect(this.getThreadsNavButton().locator("[data-indicator='critical']")).toBeVisible();
    }

    /**
     * Assert that the feed contains exactly these threads, identified by their root message,
     * in this order.
     */
    async assertThreadsInFeed(rootMessages: string[]) {
        await expect(this.getThreadCards()).toHaveCount(rootMessages.length);

        for (const [index, rootMessage] of rootMessages.entries()) {
            await expect(this.getThreadCards().nth(index)).toContainText(rootMessage);
        }
    }

    /**
     * Expand the card for the thread rooted at the given message
     */
    async expandThreadCard(rootMessage: string) {
        const card = this.getThreadCard(rootMessage);
        // Anchored so that the bare "Reply" alternative cannot also match a control like
        // "Reply in thread" that happens to render earlier in the card.
        await card
            .getByRole("button", { name: /^(Show \d+ more repl|Reply…$)/ })
            .first()
            .click();
        await expect(card.getByRole("button", { name: "Collapse thread" })).toBeVisible();
    }

    /**
     * The composer inside an expanded thread card.
     *
     * The accessible name comes from the placeholder, which differs by encryption state — an
     * unencrypted room says "Send an unencrypted message…" where an encrypted one says "Send a
     * message…" — so this matches either rather than pinning the tests to how the fixture rooms
     * happen to be created.
     */
    getCardComposer(card: Locator): Locator {
        return card.getByRole("textbox", { name: /^Send an? (unencrypted )?message…$/ });
    }

    /**
     * Choose one of the feed's filter chips, or clear the current one.
     *
     * There is no "All threads" chip: the unfiltered feed is what no selection means, so getting
     * back to it is a matter of switching whichever chip is on back off again.
     */
    async setFilter(name: "All threads" | "Unread" | "Mentions") {
        const filters = this.getThreadsPage().getByRole("listbox", { name: "Filter threads" });
        if (name === "All threads") {
            const selected = filters.getByRole("option", { selected: true });
            if ((await selected.count()) > 0) await selected.click();
            await expect(filters.getByRole("option", { selected: true })).toHaveCount(0);
            return;
        }

        await filters.getByRole("option", { name }).click();
        await expect(filters.getByRole("option", { name })).toHaveAttribute("aria-selected", "true");
    }

    /**
     * A threaded reply from the bot that pings the user, which is one of the two things that puts
     * a thread in the feed.
     */
    private mentionOf(msg: MessageBuilder, rootMessage: string, user: Credentials): MessageContentSpec {
        return msg.threadedOff(rootMessage, {
            "body": user.displayName,
            "format": "org.matrix.custom.html",
            "formatted_body": `<a href="https://matrix.to/#/${user.userId}">${user.displayName}</a>`,
            "m.mentions": { user_ids: [user.userId] },
        });
    }

    /**
     * Have the bot start a thread and ping the user in it, so it reaches the feed as a mention
     * without the user having taken part.
     */
    async receiveThreadMentioningUser(room: RoomRef, msg: MessageBuilder, user: Credentials, rootMessage: string) {
        await this.receiveMessages(room, [rootMessage, this.mentionOf(msg, rootMessage, user)]);
    }

    /**
     * Have the bot start a thread and the user reply in it, so it reaches the feed by
     * participation.
     */
    async receiveThreadWithOwnReply(room: RoomRef, msg: MessageBuilder, rootMessage: string, reply: string) {
        await this.receiveMessages(room, [rootMessage, msg.threadedOff(rootMessage, `Resp to ${rootMessage}`)]);
        await this.sendMessages(room, [msg.threadedOff(rootMessage, reply)]);
    }

    /**
     * Populate the rooms with threads that the feed will actually show.
     *
     * The feed lists threads the user has taken part in or been mentioned in, so a thread composed
     * entirely of other people's messages is deliberately excluded and cannot be used as fixture
     * data here. Msg1 reaches the feed as a mention and Msg2/Msg3 by participation, which also
     * gives the Mentions filter exactly one thread to find.
     *
     * Ordering, oldest activity first: Msg1, Msg2, Msg3 — so the feed shows the reverse.
     */
    async populateThreads(room1: RoomRef, room2: RoomRef, msg: MessageBuilder, user: Credentials, hasMention = true) {
        if (hasMention) {
            await this.receiveThreadMentioningUser(room2, msg, user, "Msg1");
        }
        await this.receiveThreadWithOwnReply(room2, msg, "Msg2", "My reply to Msg2");
        await this.receiveThreadWithOwnReply(room1, msg, "Msg3", "My reply to Msg3");
    }

    /**
     * Get the space panel
     */
    getSpacePanel() {
        return this.page.getByRole("navigation", { name: "Spaces" });
    }

    /**
     * Expand the space panel
     */
    expandSpacePanel() {
        return this.page.getByRole("navigation", { name: "Spaces" }).getByRole("button", { name: "Expand" }).click();
    }

    /**
     * Clicks the button to mark all threads as read in the current room
     */
    clickMarkAllThreadsRead() {
        return this.page.locator("#thread-panel").getByRole("button", { name: "Mark all as read" }).click();
    }
}

export { expect };
