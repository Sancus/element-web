/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { mocked } from "jest-mock-vitest-adapter";
import { type MatrixClient, PendingEventOrdering, Room } from "matrix-js-sdk/src/matrix";

import { determineUnreadState } from "../../src/RoomNotifs";
import { MatrixClientPeg } from "../../src/MatrixClientPeg";
import { NotificationLevel } from "../../src/stores/notifications/NotificationLevel";
import { stubClient } from "../test-utils/test-utils";
import { populateThread } from "../test-utils/threads";

describe("determineUnreadState", () => {
    const ROOM_ID = "!rooms:example.org";
    const ALICE = "@alice:example.org";

    let client: MatrixClient;
    let room: Room;

    beforeEach(() => {
        stubClient();
        client = mocked(MatrixClientPeg.safeGet());
        client.supportsThreads = () => true;
        room = new Room(ROOM_ID, client, client.getSafeUserId(), {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });
    });

    /** Marks the room unread the way the "Mark as unread" menu item does, via room account data. */
    function markRoomUnread(): void {
        room.getAccountData = jest
            .fn()
            .mockImplementation((eventType: string) =>
                eventType === "m.marked_unread"
                    ? { getContent: jest.fn().mockReturnValue({ unread: true }) }
                    : undefined,
            );
    }

    it("reports a room the user marked unread as unread", () => {
        markRoomUnread();

        expect(determineUnreadState(room).level).toBe(NotificationLevel.Notification);
    });

    it("does not spread a room's marked-unread state onto its threads", async () => {
        // The flag is room account data and says nothing about any one thread. Spread over them it
        // would light every thread in the room over something the user never said about them, and
        // that no per-thread control could put out: only unmarking the room clears it.
        const { thread } = await populateThread({
            room,
            client,
            authorId: ALICE,
            participantUserIds: [client.getSafeUserId()],
            length: 4,
        });
        markRoomUnread();

        expect(determineUnreadState(room, thread.id).level).not.toBe(NotificationLevel.Notification);
    });
});
