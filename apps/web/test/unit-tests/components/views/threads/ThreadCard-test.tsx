/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { act, fireEvent, render, screen } from "jest-matrix-react";
import {
    EventStatus,
    type MatrixClient,
    type MatrixEvent,
    PendingEventOrdering,
    Room,
    type Thread,
    THREAD_RELATION_TYPE,
} from "matrix-js-sdk/src/matrix";

import MatrixClientContext from "../../../../../src/contexts/MatrixClientContext";
import { SDKContext } from "../../../../../src/contexts/SDKContext";
import { SDKContextClass } from "../../../../../src/contexts/SDKContextClass";
import { mkEvent, mkMessage, mkReaction, stubClient } from "../../../../test-utils";
import SettingsStore from "../../../../../src/settings/SettingsStore";
import { SettingLevel } from "../../../../../src/settings/SettingLevel";
import { populateThread } from "../../../../test-utils/threads";
import { ThreadCard } from "../../../../../src/components/views/threads/ThreadCard";
import { type ThreadFeedEntry } from "../../../../../src/viewmodels/threads/threadsFeed";
import { NotificationLevel } from "../../../../../src/stores/notifications/NotificationLevel";
import { TimelineRenderingType } from "../../../../../src/contexts/RoomContext";
import { Action } from "../../../../../src/dispatcher/actions";
import defaultDispatcher from "../../../../../src/dispatcher/dispatcher";
import ResizeNotifier from "../../../../../src/utils/ResizeNotifier";
import UserActivity from "../../../../../src/UserActivity";
import * as ShieldUtils from "../../../../../src/utils/ShieldUtils";
import { E2EStatus } from "../../../../../src/utils/ShieldUtils";
import DMRoomMap from "../../../../../src/utils/DMRoomMap";

// EventTile and MessageComposer are exercised by their own suites; stubbing them keeps this
// focused on the card's own behaviour, which is deciding which dispatched actions are its own.
jest.mock("../../../../../src/components/views/rooms/EventTile", () => ({
    __esModule: true,
    default: ({
        mxEvent,
        editState,
        showReadReceipts,
        readReceipts,
    }: {
        mxEvent: MatrixEvent;
        editState?: unknown;
        showReadReceipts?: boolean;
        readReceipts?: Array<{ userId: string }>;
    }) => (
        <li
            data-testid={`tile-${mxEvent.getId()}`}
            data-editing={editState ? "yes" : "no"}
            data-show-receipts={showReadReceipts ? "yes" : "no"}
            data-receipts={(readReceipts ?? []).map((receipt) => receipt.userId).join(" ")}
        />
    ),
}));

jest.mock("../../../../../src/components/views/rooms/MessageComposer", () => ({
    __esModule: true,
    default: ({ room, replyToEvent, e2eStatus }: { room: Room; replyToEvent?: MatrixEvent; e2eStatus?: string }) => (
        <div
            data-testid={`composer-${room.roomId}`}
            data-reply-to={replyToEvent?.getId() ?? ""}
            data-e2e-status={e2eStatus ?? ""}
        >
            {/* The real composer marks its input empty to show its placeholder, and the card reads
                that class to tell an abandoned composer from one with a draft in it. */}
            <div className="mx_BasicMessageComposer_input mx_BasicMessageComposer_inputEmpty" />
        </div>
    ),
}));

const ME = "@me:example.org";
const OTHER = "@other:example.org";

describe("ThreadCard", () => {
    let client: MatrixClient;
    let resizeNotifier: ResizeNotifier;
    let sdkContext: SDKContextClass;

    beforeEach(() => {
        client = stubClient();
        client.supportsThreads = () => true;
        client.getUserId = () => ME;
        client.getSafeUserId = () => ME;
        resizeNotifier = new ResizeNotifier();
        sdkContext = new SDKContextClass();
        DMRoomMap.makeShared(client);
    });

    function Providers({ children }: { children: React.ReactNode }): React.ReactElement {
        return (
            <MatrixClientContext.Provider value={client}>
                <SDKContext.Provider value={sdkContext}>{children}</SDKContext.Provider>
            </MatrixClientContext.Provider>
        );
    }

    afterEach(() => {
        jest.restoreAllMocks();
    });

    async function makeEntry(
        roomId: string,
        /** Events in the thread, root included, as `populateThread` counts them. */
        length = 2,
    ): Promise<{ entry: ThreadFeedEntry; thread: Thread; reply: MatrixEvent }> {
        const room = new Room(roomId, client, ME, { pendingEventOrdering: PendingEventOrdering.Detached });
        jest.spyOn(client, "getRoom").mockReturnValue(room);
        const { thread, events } = await populateThread({
            room,
            client,
            authorId: OTHER,
            participantUserIds: [ME],
            length,
        });

        return {
            entry: {
                threadId: thread.id,
                thread,
                room,
                latestTs: 1,
                level: NotificationLevel.None,
                participated: true,
                mentioned: false,
                replied: true,
            },
            thread,
            reply: events[1],
        };
    }

    function renderCards(
        cards: Array<{ entry: ThreadFeedEntry; expanded: boolean }>,
        onSetActive = jest.fn(),
    ): { onSetActive: jest.Mock } {
        render(
            <Providers>
                {cards.map(({ entry, expanded }) => (
                    <ThreadCard
                        key={entry.threadId}
                        entry={entry}
                        active={expanded}
                        onSetActive={onSetActive}
                        resizeNotifier={resizeNotifier}
                    />
                ))}
            </Providers>,
        );
        return { onSetActive };
    }

    describe("the unreplied status", () => {
        // Deliberately not the "Never Replied" the filter chip is called: the label marks the narrower
        // case where somebody asked, so sharing a name with the filter would misdescribe both.
        const unreplied = (): HTMLElement | null => screen.queryByText("Waiting on you");

        it("says so when the user was mentioned and has not replied", async () => {
            const { entry } = await makeEntry("!a:example.org");

            renderCards([{ entry: { ...entry, mentioned: true, replied: false }, expanded: false }]);

            expect(unreplied()).toBeInTheDocument();
        });

        it("says nothing once the user has replied", async () => {
            const { entry } = await makeEntry("!a:example.org");

            renderCards([{ entry: { ...entry, mentioned: true, replied: true }, expanded: false }]);

            expect(unreplied()).toBeNull();
        });

        it("says nothing about a thread that merely went unanswered", async () => {
            // Most of the feed has never been replied to. Labelling all of it would say nothing; the
            // label is there for threads where somebody asked the user directly.
            const { entry } = await makeEntry("!a:example.org");

            renderCards([{ entry: { ...entry, mentioned: false, replied: false }, expanded: false }]);

            expect(unreplied()).toBeNull();
        });
    });

    it("sends a reply action to the card owning the event, not whichever card is expanded", async () => {
        const a = await makeEntry("!a:example.org");
        const b = await makeEntry("!b:example.org");

        const { onSetActive } = renderCards([
            { entry: a.entry, expanded: true },
            { entry: b.entry, expanded: false },
        ]);

        // Reply to an event in the collapsed card while the other card has the open composer.
        act(() => {
            defaultDispatcher.dispatch(
                {
                    action: "reply_to_event",
                    event: b.reply,
                    context: TimelineRenderingType.Thread,
                },
                true,
            );
        });

        // The expanded card must not have adopted another thread's reply.
        expect(screen.getByTestId("composer-!a:example.org")).toHaveAttribute("data-reply-to", "");
        // The card that owns the event opens instead.
        expect(onSetActive).toHaveBeenCalledWith(b.entry.threadId);
    });

    it("shows the quoted reply once the owning card is expanded", async () => {
        const a = await makeEntry("!a:example.org");

        renderCards([{ entry: a.entry, expanded: true }]);

        act(() => {
            defaultDispatcher.dispatch(
                {
                    action: "reply_to_event",
                    event: a.reply,
                    context: TimelineRenderingType.Thread,
                },
                true,
            );
        });

        expect(screen.getByTestId("composer-!a:example.org")).toHaveAttribute("data-reply-to", a.reply.getId()!);
    });

    it("clears the quoted reply when the composer cancels it", async () => {
        const a = await makeEntry("!a:example.org");

        renderCards([{ entry: a.entry, expanded: true }]);

        act(() => {
            defaultDispatcher.dispatch(
                { action: "reply_to_event", event: a.reply, context: TimelineRenderingType.Thread },
                true,
            );
        });
        expect(screen.getByTestId("composer-!a:example.org")).toHaveAttribute("data-reply-to", a.reply.getId()!);

        // Escape in the composer cancels by dispatching a null event, which names no thread to
        // match the card against.
        act(() => {
            defaultDispatcher.dispatch(
                { action: "reply_to_event", event: null, context: TimelineRenderingType.Thread },
                true,
            );
        });

        expect(screen.getByTestId("composer-!a:example.org")).toHaveAttribute("data-reply-to", "");
    });

    it("ignores reply actions from outside a thread timeline", async () => {
        const a = await makeEntry("!a:example.org");

        renderCards([{ entry: a.entry, expanded: true }]);

        act(() => {
            defaultDispatcher.dispatch(
                {
                    action: "reply_to_event",
                    event: a.reply,
                    context: TimelineRenderingType.Room,
                },
                true,
            );
        });

        expect(screen.getByTestId("composer-!a:example.org")).toHaveAttribute("data-reply-to", "");
    });

    it("opens the editor only on the tile whose event is being edited", async () => {
        const a = await makeEntry("!a:example.org");
        const b = await makeEntry("!b:example.org");

        renderCards([
            { entry: a.entry, expanded: true },
            { entry: b.entry, expanded: false },
        ]);

        act(() => {
            defaultDispatcher.dispatch(
                {
                    action: Action.EditEvent,
                    event: b.reply,
                    timelineRenderingType: TimelineRenderingType.Thread,
                },
                true,
            );
        });

        expect(screen.getByTestId(`tile-${b.reply.getId()}`)).toHaveAttribute("data-editing", "yes");
        expect(screen.getByTestId(`tile-${a.reply.getId()}`)).toHaveAttribute("data-editing", "no");
    });

    it("does not build a tile for a reaction sitting in the thread timeline", async () => {
        const a = await makeEntry("!a:example.org");

        // The SDK puts reactions into the thread's own timeline. They have no tile renderer, so
        // rendering one produces a literal "This event could not be displayed" row on the card.
        const reaction = mkReaction(a.reply);
        act(() => {
            a.thread.addEvent(reaction, false, true);
        });

        renderCards([{ entry: a.entry, expanded: true }]);

        expect(screen.queryByTestId(`tile-${reaction.getId()}`)).toBeNull();
        expect(screen.getByTestId(`tile-${a.reply.getId()}`)).toBeInTheDocument();
    });

    it("does not count a reaction-only sender as a thread participant", async () => {
        const a = await makeEntry("!a:example.org");

        const reaction = mkReaction(a.reply, { user: "@lurker:example.org" });
        act(() => {
            a.thread.addEvent(reaction, false, true);
        });

        renderCards([{ entry: a.entry, expanded: false }]);

        expect(screen.queryByText(/lurker/)).toBeNull();
    });

    it("renders a reply that is still being sent", async () => {
        const a = await makeEntry("!a:example.org");
        const room = client.getRoom("!a:example.org")!;

        // Element uses detached pending-event ordering, so a local echo lives in the room's pending
        // list, never in the thread timeline. A card that only reads the timeline shows nothing at
        // all when you send — including when the send fails.
        const pending = mkMessage({
            room: room.roomId,
            user: ME,
            msg: "still sending",
            event: true,
            relatesTo: { rel_type: THREAD_RELATION_TYPE.name, event_id: a.thread.id },
        });
        pending.setStatus(EventStatus.SENDING);
        jest.spyOn(a.thread.timelineSet, "getPendingEvents").mockReturnValue([pending]);
        jest.spyOn(room, "eventShouldLiveIn").mockReturnValue({
            shouldLiveInRoom: false,
            shouldLiveInThread: true,
            threadId: a.thread.id,
        });

        renderCards([{ entry: a.entry, expanded: true }]);

        expect(screen.getByTestId(`tile-${pending.getId()}`)).toBeInTheDocument();
    });

    describe("opening the composer versus opening the thread", () => {
        it("does not unfold the thread when the reply prompt is clicked", async () => {
            // The two used to be one flag, so asking to write a reply also dumped the whole
            // conversation open underneath the composer.
            // Enough replies that some stay hidden behind the count on a folded card.
            const a = await makeEntry("!a:example.org", 8);
            expect(a.thread.length).toBeGreaterThan(2);

            const { rerender } = render(
                <Providers>
                    <ThreadCard
                        entry={a.entry}
                        active={false}
                        onSetActive={jest.fn()}
                        resizeNotifier={resizeNotifier}
                    />
                </Providers>,
            );

            act(() => {
                screen.getByRole("button", { name: "Reply…" }).click();
            });
            // The feed owns the active card, so becoming active arrives as a prop.
            rerender(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            expect(screen.getByTestId(`composer-${a.entry.room.roomId}`)).toBeInTheDocument();
            // Still folded: the hidden-reply count is what a folded card shows.
            expect(screen.getByRole("button", { name: /more repl/ })).toBeInTheDocument();
        });

        it("unfolds the thread when the hidden reply count is clicked", async () => {
            const a = await makeEntry("!a:example.org", 8);

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            act(() => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            expect(screen.queryByRole("button", { name: /more repl/ })).toBeNull();
        });

        it("brings the start of the thread into view when it is unfolded", async () => {
            // Unfolding pushes everything below the root down the page, so without this the reader
            // is left looking at the composer at the far end of what they just asked to read.
            const a = await makeEntry("!a:example.org", 8);
            const scrollIntoView = jest.fn();
            jest.spyOn(HTMLElement.prototype, "scrollIntoView").mockImplementation(scrollIntoView);
            const dispatch = jest.spyOn(defaultDispatcher, "dispatch");

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            act(() => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            expect(scrollIntoView).toHaveBeenCalledWith({ block: "start" });
            // Scrolling to the top is undone if the composer then pulls focus to the bottom of the
            // thread, so the absence of that is as much a part of the fix as the scroll itself.
            expect(dispatch).not.toHaveBeenCalledWith(
                expect.objectContaining({ action: Action.FocusSendMessageComposer }),
            );
        });
    });

    describe("loading the rest of a thread", () => {
        it("keeps paginating until an ordinary thread is whole", async () => {
            // One page per expansion left every thread past a single page showing a "load earlier"
            // button, which is not something a reader should have to work through by hand.
            const a = await makeEntry("!a:example.org", 8);
            // Claim more replies than one page can supply, and a token to fetch them with.
            jest.spyOn(a.thread, "length", "get").mockReturnValue(45);

            // A server that hands back a page at a time, as a real one does. Anything that stops
            // after the first page leaves the reader short of the 45 replies they were promised.
            let next = 0;
            // The token goes away when the history runs out, which is what removes the manual
            // control; a token that never expired would leave it on screen whatever the card did.
            jest.spyOn(a.thread.liveTimeline, "getPaginationToken").mockImplementation(() =>
                next >= 40 ? null : "t1",
            );
            const paginate = jest.spyOn(client, "paginateEventTimeline").mockImplementation(async () => {
                for (let i = 0; i < 20; i++) {
                    a.thread.addEvent(
                        mkMessage({
                            room: a.entry.room.roomId,
                            user: OTHER,
                            msg: `page reply ${next++}`,
                            relatesTo: { rel_type: THREAD_RELATION_TYPE.name, event_id: a.thread.id },
                            event: true,
                        }),
                        true,
                    );
                }
                return true;
            });

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            // 7 replies already loaded, 45 claimed, 20 a page: one page leaves it short, two do not.
            expect(paginate).toHaveBeenCalledTimes(2);
            expect(screen.queryByRole("button", { name: "Load earlier replies" })).toBeNull();
        });

        it("stops when the server stops supplying replies", async () => {
            // The pagination token outlives the events, so a loop that trusted the token alone
            // would keep asking for a page that is never going to come.
            const a = await makeEntry("!a:example.org", 8);
            jest.spyOn(a.thread, "length", "get").mockReturnValue(45);
            jest.spyOn(a.thread.liveTimeline, "getPaginationToken").mockReturnValue("t1");
            const paginate = jest.spyOn(client, "paginateEventTimeline").mockResolvedValue(false);

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            expect(paginate).toHaveBeenCalledTimes(1);
        });

        it("stops fetching once the card is collapsed", async () => {
            // Pages that arrive after the card folds have nowhere to go, and the request for them
            // is competing with whatever the user opened instead.
            const a = await makeEntry("!a:example.org", 8);
            jest.spyOn(a.thread, "length", "get").mockReturnValue(200);
            jest.spyOn(a.thread.liveTimeline, "getPaginationToken").mockReturnValue("t1");

            let releasePage: () => void = () => {};
            const paginate = jest.spyOn(client, "paginateEventTimeline").mockImplementation(
                () =>
                    new Promise<boolean>((resolve) => {
                        releasePage = () => {
                            a.thread.addEvent(
                                mkMessage({
                                    room: a.entry.room.roomId,
                                    user: OTHER,
                                    msg: "late page",
                                    relatesTo: { rel_type: THREAD_RELATION_TYPE.name, event_id: a.thread.id },
                                    event: true,
                                }),
                                true,
                            );
                            resolve(true);
                        };
                    }),
            );

            const { rerender } = render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            act(() => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });
            expect(paginate).toHaveBeenCalledTimes(1);

            // Collapsed while the first page is still in flight.
            rerender(
                <Providers>
                    <ThreadCard
                        entry={a.entry}
                        active={false}
                        onSetActive={jest.fn()}
                        resizeNotifier={resizeNotifier}
                    />
                </Providers>,
            );
            await act(async () => {
                releasePage();
            });

            expect(paginate).toHaveBeenCalledTimes(1);
        });
    });

    describe("composer encryption state", () => {
        it("tells the composer the room is encrypted", async () => {
            const a = await makeEntry("!a:example.org");
            jest.spyOn(a.entry.room, "hasEncryptionStateEvent").mockReturnValue(true);
            const shield = jest.spyOn(ShieldUtils, "shieldStatusForRoom").mockResolvedValue(E2EStatus.Verified);

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            // Encrypted from the first frame: waiting for the shield would mean offering to send an
            // unencrypted message in the meantime, which is the bug this replaces.
            expect(screen.getByTestId(`composer-${a.entry.room.roomId}`)).toHaveAttribute(
                "data-e2e-status",
                E2EStatus.Normal,
            );

            await act(async () => {
                await shield.mock.results[0].value;
            });

            expect(screen.getByTestId(`composer-${a.entry.room.roomId}`)).toHaveAttribute(
                "data-e2e-status",
                E2EStatus.Verified,
            );
        });

        it("leaves the composer unencrypted in an unencrypted room", async () => {
            const a = await makeEntry("!a:example.org");
            jest.spyOn(a.entry.room, "hasEncryptionStateEvent").mockReturnValue(false);
            const shield = jest.spyOn(ShieldUtils, "shieldStatusForRoom");

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            expect(screen.getByTestId(`composer-${a.entry.room.roomId}`)).toHaveAttribute("data-e2e-status", "");
            expect(shield).not.toHaveBeenCalled();
        });
    });

    describe("dismissing the composer", () => {
        it("offers to collapse the thread only once the replies are unfolded", async () => {
            const a = await makeEntry("!a:example.org", 8);

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            // The composer is open, but nothing is unfolded for a collapse to act on.
            expect(screen.queryByRole("button", { name: "Collapse thread" })).not.toBeInTheDocument();

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            expect(screen.getByRole("button", { name: "Collapse thread" })).toBeInTheDocument();
        });

        it("puts an untouched composer away when the user clicks elsewhere", async () => {
            const a = await makeEntry("!a:example.org");
            const onSetActive = jest.fn();

            render(
                <Providers>
                    <ThreadCard
                        entry={a.entry}
                        active={true}
                        onSetActive={onSetActive}
                        resizeNotifier={resizeNotifier}
                    />
                </Providers>,
            );

            await act(async () => {
                fireEvent.pointerDown(document.body);
            });

            expect(onSetActive).toHaveBeenCalledWith(null);
        });

        it("keeps a composer the user has written in", async () => {
            const a = await makeEntry("!a:example.org");
            const onSetActive = jest.fn();

            const { container } = render(
                <Providers>
                    <ThreadCard
                        entry={a.entry}
                        active={true}
                        onSetActive={onSetActive}
                        resizeNotifier={resizeNotifier}
                    />
                </Providers>,
            );

            // What the composer does to itself as soon as anything is typed into it.
            container
                .querySelector(".mx_BasicMessageComposer_input")!
                .classList.remove("mx_BasicMessageComposer_inputEmpty");

            await act(async () => {
                fireEvent.pointerDown(document.body);
            });

            expect(onSetActive).not.toHaveBeenCalled();
        });

        it("stays open for clicks inside the card and in the menus it opens", async () => {
            const a = await makeEntry("!a:example.org");
            const onSetActive = jest.fn();

            const { container } = render(
                <Providers>
                    <ThreadCard
                        entry={a.entry}
                        active={true}
                        onSetActive={onSetActive}
                        resizeNotifier={resizeNotifier}
                    />
                </Providers>,
            );

            await act(async () => {
                fireEvent.pointerDown(container.querySelector(".mx_ThreadCard_body")!);
            });
            expect(onSetActive).not.toHaveBeenCalled();

            // The emoji picker and the attachment menu are portalled out of the card, so hit-testing
            // against the card alone would treat using one as walking away from the composer.
            const portal = document.createElement("div");
            portal.className = "mx_ContextualMenu_wrapper";
            const inPortal = document.createElement("button");
            portal.appendChild(inPortal);
            document.body.appendChild(portal);

            await act(async () => {
                fireEvent.pointerDown(inPortal);
            });
            expect(onSetActive).not.toHaveBeenCalled();

            portal.remove();
        });
    });

    describe("marking read", () => {
        // Every case here is about a user who is sitting in front of the card. The one that is
        // not says so for itself.
        beforeEach(() => {
            jest.spyOn(UserActivity.sharedInstance(), "userActiveRecently").mockReturnValue(true);
        });

        it("does not mark a thread read while it is still hiding replies", async () => {
            // Opening the composer is not a claim to have read anything, and a threaded receipt
            // covers every reply before the one it names — including the ones behind the count.
            const a = await makeEntry("!a:example.org", 8);
            const sendReadReceipt = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            expect(screen.getByRole("button", { name: /more repl/ })).toBeInTheDocument();
            expect(sendReadReceipt).not.toHaveBeenCalled();
        });

        it("marks a long thread read even though older history is still fetchable", async () => {
            // Unread replies are the newest ones, and an expanded card shows those whatever else
            // it has not fetched. Waiting for the pagination token to run out instead would leave
            // every thread past the auto-load cap permanently unread, because such a thread always
            // has one.
            const a = await makeEntry("!a:example.org", 8);
            jest.spyOn(a.thread, "length", "get").mockReturnValue(500);
            jest.spyOn(a.thread.liveTimeline, "getPaginationToken").mockReturnValue("t1");
            jest.spyOn(client, "paginateEventTimeline").mockImplementation(async () => {
                for (let i = 0; i < 20; i++) {
                    a.thread.addEvent(
                        mkMessage({
                            room: a.entry.room.roomId,
                            user: OTHER,
                            msg: `old reply ${i}`,
                            relatesTo: { rel_type: THREAD_RELATION_TYPE.name, event_id: a.thread.id },
                            event: true,
                        }),
                        true,
                    );
                }
                return true;
            });
            const sendReadReceipt = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            // Still more to fetch, and still read.
            expect(screen.getByRole("button", { name: "Load earlier replies" })).toBeInTheDocument();
            expect(sendReadReceipt).toHaveBeenCalled();
        });

        it("marks a thread read once the whole thread is on screen", async () => {
            const a = await makeEntry("!a:example.org", 8);
            const sendReadReceipt = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            expect(sendReadReceipt).toHaveBeenCalled();
            // Never the root: the SDK files a receipt against a thread root under the main
            // timeline, which would mark the room's own messages read as a side effect.
            expect(sendReadReceipt.mock.calls[0][0]!.getId()).not.toBe(a.thread.id);
        });

        it("waits for the user to come back before marking a reply that arrived while they were away", async () => {
            jest.spyOn(UserActivity.sharedInstance(), "userActiveRecently").mockReturnValue(false);
            const a = await makeEntry("!a:example.org", 8);
            const sendReadReceipt = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});

            render(
                <Providers>
                    <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                </Providers>,
            );

            await act(async () => {
                screen.getByRole("button", { name: /more repl/ }).click();
            });

            // On screen, but nobody is there to be reading it.
            expect(sendReadReceipt).not.toHaveBeenCalled();

            jest.spyOn(UserActivity.sharedInstance(), "userActiveRecently").mockReturnValue(true);
            await act(async () => {
                defaultDispatcher.dispatch({ action: Action.UserActivity }, true);
            });

            expect(sendReadReceipt).toHaveBeenCalled();
        });
    });

    describe("read receipts", () => {
        /** Delivers a threaded read receipt the way a sync does. */
        function sendReceipt(room: Room, threadId: string, userId: string, event: MatrixEvent): void {
            room.addReceipt(
                mkEvent({
                    event: true,
                    type: "m.receipt",
                    room: room.roomId,
                    user: userId,
                    content: {
                        [event.getId()!]: { "m.read": { [userId]: { ts: 1, thread_id: threadId } } },
                    },
                }),
            );
        }

        afterEach(async () => {
            await SettingsStore.setValue("showReadReceipts", null, SettingLevel.DEVICE, true);
        });

        it("shows a receipt on the reply it was sent against", async () => {
            const { entry, thread, reply } = await makeEntry("!a:example.org");
            sendReceipt(entry.room, thread.id, OTHER, reply);

            renderCards([{ entry, expanded: false }]);

            const tile = screen.getByTestId(`tile-${reply.getId()}`);
            expect(tile).toHaveAttribute("data-receipts", OTHER);
            // The root was rendered too, and nobody has read up to only it.
            expect(screen.getByTestId(`tile-${thread.id}`)).toHaveAttribute("data-receipts", "");
        });

        it("passes nothing to the tiles while the setting is off", async () => {
            await SettingsStore.setValue("showReadReceipts", null, SettingLevel.DEVICE, false);
            const { entry, thread, reply } = await makeEntry("!a:example.org");
            sendReceipt(entry.room, thread.id, OTHER, reply);

            renderCards([{ entry, expanded: false }]);

            const tile = screen.getByTestId(`tile-${reply.getId()}`);
            expect(tile).toHaveAttribute("data-show-receipts", "no");
            expect(tile).toHaveAttribute("data-receipts", "");
        });
    });

    it("gives the composer an upload context only while expanded", async () => {
        const a = await makeEntry("!a:example.org");
        const b = await makeEntry("!b:example.org");

        const { container } = render(
            <Providers>
                <ThreadCard entry={a.entry} active={true} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
                <ThreadCard entry={b.entry} active={false} onSetActive={jest.fn()} resizeNotifier={resizeNotifier} />
            </Providers>,
        );

        // The upload provider renders the hidden file input it owns. A collapsed card has no
        // composer, so a second input would mean a second provider racing for module file inserts.
        expect(container.querySelectorAll('input[type="file"]')).toHaveLength(1);
    });
});
