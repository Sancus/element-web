/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, type MatrixEvent, PendingEventOrdering, Room, type Thread } from "matrix-js-sdk/src/matrix";

import { collectThreadReadReceipts } from "../../../../../src/components/views/threads/threadReadReceipts";
import { mkEvent, stubClient } from "../../../../test-utils";
import { populateThread } from "../../../../test-utils/threads";

const ME = "@me:example.org";
const ALICE = "@alice:example.org";
const BOB = "@bob:example.org";
const ROOM_ID = "!room:example.org";

describe("collectThreadReadReceipts", () => {
    let client: MatrixClient;
    let room: Room;
    let thread: Thread;
    let rootEvent: MatrixEvent;
    let reply: MatrixEvent;

    beforeEach(async () => {
        client = stubClient();
        client.getUserId = () => ME;
        client.getSafeUserId = () => ME;

        room = new Room(ROOM_ID, client, ME, { pendingEventOrdering: PendingEventOrdering.Detached });
        jest.spyOn(client, "getRoom").mockReturnValue(room);

        const populated = await populateThread({
            room,
            client,
            authorId: ALICE,
            participantUserIds: [ME],
            length: 3,
        });
        thread = populated.thread;
        rootEvent = populated.rootEvent;
        reply = populated.events[2];
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    /** Delivers a read receipt the way a sync does, threaded unless told otherwise. */
    function sendReceipt(userId: string, event: MatrixEvent, ts: number, threaded = true): void {
        room.addReceipt(
            mkEvent({
                event: true,
                type: "m.receipt",
                room: ROOM_ID,
                user: userId,
                content: {
                    [event.getId()!]: {
                        "m.read": {
                            [userId]: threaded ? { ts, thread_id: thread.id } : { ts },
                        },
                    },
                },
            }),
        );
    }

    function collect(events: MatrixEvent[], enabled = true): Map<string, ReturnType<typeof userIdsOf>> {
        const receipts = collectThreadReadReceipts(client, room, thread, events, enabled);
        return new Map([...receipts].map(([eventId, list]) => [eventId, userIdsOf(list)]));
    }

    function userIdsOf(list: Array<{ userId: string }>): string[] {
        return list.map((receipt) => receipt.userId);
    }

    it("collects a threaded receipt against the event it was sent for", () => {
        sendReceipt(ALICE, reply, 100);

        expect(collect([rootEvent, reply])).toEqual(new Map([[reply.getId()!, [ALICE]]]));
    });

    it("leaves out the reader's own receipt", () => {
        sendReceipt(ME, reply, 100);
        sendReceipt(ALICE, reply, 100);

        expect(collect([reply]).get(reply.getId()!)).toEqual([ALICE]);
    });

    it("leaves out ignored users", () => {
        sendReceipt(ALICE, reply, 100);
        sendReceipt(BOB, reply, 100);
        jest.spyOn(client, "isUserIgnored").mockImplementation((userId) => userId === BOB);

        expect(collect([reply]).get(reply.getId()!)).toEqual([ALICE]);
    });

    it("orders receipts newest first", () => {
        sendReceipt(ALICE, reply, 100);
        sendReceipt(BOB, reply, 200);

        expect(collect([reply]).get(reply.getId()!)).toEqual([BOB, ALICE]);
    });

    it("collects nothing while the setting is off", () => {
        sendReceipt(ALICE, reply, 100);

        expect(collect([rootEvent, reply], false).size).toBe(0);
    });

    it("ignores receipts on events it was not asked about", () => {
        sendReceipt(ALICE, reply, 100);

        // What a collapsed card does with a receipt on a reply it left out, rather than moving it
        // onto one of the replies it did render.
        expect(collect([rootEvent]).size).toBe(0);
    });

    it("ignores main-timeline receipts on the thread root", () => {
        // A root counts as main-timeline, so a receipt against it lands on the room. Reading the
        // room rather than the thread here would report a reader who never opened the thread.
        sendReceipt(ALICE, rootEvent, 100, false);

        expect(collect([rootEvent]).size).toBe(0);
    });
});
