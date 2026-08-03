/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { act, render, screen } from "jest-matrix-react";
import { type MatrixClient, type MatrixEvent, PendingEventOrdering, Room, type Thread } from "matrix-js-sdk/src/matrix";

import MatrixClientContext from "../../../../../src/contexts/MatrixClientContext";
import { SDKContext } from "../../../../../src/contexts/SDKContext";
import { SDKContextClass } from "../../../../../src/contexts/SDKContextClass";
import { mkReaction, stubClient } from "../../../../test-utils";
import { populateThread } from "../../../../test-utils/threads";
import { ThreadCard } from "../../../../../src/components/views/threads/ThreadCard";
import { type ThreadFeedEntry } from "../../../../../src/viewmodels/threads/threadsFeed";
import { NotificationLevel } from "../../../../../src/stores/notifications/NotificationLevel";
import { TimelineRenderingType } from "../../../../../src/contexts/RoomContext";
import { Action } from "../../../../../src/dispatcher/actions";
import defaultDispatcher from "../../../../../src/dispatcher/dispatcher";
import ResizeNotifier from "../../../../../src/utils/ResizeNotifier";
import DMRoomMap from "../../../../../src/utils/DMRoomMap";

// EventTile and MessageComposer are exercised by their own suites; stubbing them keeps this
// focused on the card's own behaviour, which is deciding which dispatched actions are its own.
jest.mock("../../../../../src/components/views/rooms/EventTile", () => ({
    __esModule: true,
    default: ({ mxEvent, editState }: { mxEvent: MatrixEvent; editState?: unknown }) => (
        <li data-testid={`tile-${mxEvent.getId()}`} data-editing={editState ? "yes" : "no"} />
    ),
}));

jest.mock("../../../../../src/components/views/rooms/MessageComposer", () => ({
    __esModule: true,
    default: ({ room, replyToEvent }: { room: Room; replyToEvent?: MatrixEvent }) => (
        <div data-testid={`composer-${room.roomId}`} data-reply-to={replyToEvent?.getId() ?? ""} />
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

    async function makeEntry(roomId: string): Promise<{ entry: ThreadFeedEntry; thread: Thread; reply: MatrixEvent }> {
        const room = new Room(roomId, client, ME, { pendingEventOrdering: PendingEventOrdering.Detached });
        jest.spyOn(client, "getRoom").mockReturnValue(room);
        const { thread, events } = await populateThread({
            room,
            client,
            authorId: OTHER,
            participantUserIds: [ME],
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
            },
            thread,
            reply: events[1],
        };
    }

    function renderCards(
        cards: Array<{ entry: ThreadFeedEntry; expanded: boolean }>,
        onToggleExpanded = jest.fn(),
    ): { onToggleExpanded: jest.Mock } {
        render(
            <Providers>
                {cards.map(({ entry, expanded }) => (
                    <ThreadCard
                        key={entry.threadId}
                        entry={entry}
                        expanded={expanded}
                        onToggleExpanded={onToggleExpanded}
                        resizeNotifier={resizeNotifier}
                    />
                ))}
            </Providers>,
        );
        return { onToggleExpanded };
    }

    it("sends a reply action to the card owning the event, not whichever card is expanded", async () => {
        const a = await makeEntry("!a:example.org");
        const b = await makeEntry("!b:example.org");

        const { onToggleExpanded } = renderCards([
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
        expect(onToggleExpanded).toHaveBeenCalledWith(b.entry.threadId);
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

    it("gives the composer an upload context only while expanded", async () => {
        const a = await makeEntry("!a:example.org");
        const b = await makeEntry("!b:example.org");

        const { container } = render(
            <Providers>
                <ThreadCard
                    entry={a.entry}
                    expanded={true}
                    onToggleExpanded={jest.fn()}
                    resizeNotifier={resizeNotifier}
                />
                <ThreadCard
                    entry={b.entry}
                    expanded={false}
                    onToggleExpanded={jest.fn()}
                    resizeNotifier={resizeNotifier}
                />
            </Providers>,
        );

        // The upload provider renders the hidden file input it owns. A collapsed card has no
        // composer, so a second input would mean a second provider racing for module file inserts.
        expect(container.querySelectorAll('input[type="file"]')).toHaveLength(1);
    });
});
