/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, type MatrixEvent, type Room, type Thread } from "matrix-js-sdk/src/matrix";
import { isSupportedReceiptType } from "matrix-js-sdk/src/utils";

import { type IReadReceiptProps } from "../rooms/EventTile";

/**
 * Read receipts for the events a thread card renders, keyed by event ID, newest receipt first.
 *
 * Mirrors `MessagePanel.getReadReceiptsForEvent`, with two deliberate differences.
 *
 * Receipts are read from the thread rather than from the room. `MessagePanel` has to resolve
 * `room.getThread(threadId)` because all it holds is an ID; a card holds the thread itself. Both
 * reach the same receipt store, and neither may fall back to the room: the SDK counts a thread
 * root as main-timeline, so room receipts would attribute reads of the main timeline to the
 * thread.
 *
 * Receipts on events the card has not rendered are dropped, where `MessagePanel` folds receipts
 * from hidden events onto the last shown event. That folding is right for events which have no
 * tile but are still in the timeline; it would be wrong here, where the missing events are
 * usually replies that a collapsed card left out or has not paginated, and moving their receipts
 * onto a rendered event would claim the reader got further than they did.
 *
 * Not memoized, and it cannot usefully be. Receipts change while the events they hang off stay
 * put, so keying a cache on the rendered events would serve stale ones; the card recomputes on
 * every render instead, which is what the feed's per-room invalidation gives it. The work is a
 * `Map` lookup per event plus a member lookup per receipt.
 */
export function collectThreadReadReceipts(
    client: MatrixClient,
    room: Room,
    thread: Thread,
    events: MatrixEvent[],
    enabled: boolean,
): Map<string, IReadReceiptProps[]> {
    const receiptsByEvent = new Map<string, IReadReceiptProps[]>();
    if (!enabled) return receiptsByEvent;

    const myUserId = client.getUserId();

    for (const event of events) {
        const eventId = event.getId();
        if (!eventId) continue;

        const receipts: IReadReceiptProps[] = [];
        for (const receipt of thread.getReceiptsForEvent(event)) {
            // Non-read receipt types, and the reader's own receipt, which is what they are
            // reading with rather than something to show them.
            if (!receipt.userId || !isSupportedReceiptType(receipt.type) || receipt.userId === myUserId) continue;
            if (client.isUserIgnored(receipt.userId)) continue;

            receipts.push({
                userId: receipt.userId,
                roomMember: room.getMember(receipt.userId),
                ts: receipt.data ? receipt.data.ts : 0,
            });
        }

        // Newest first, matching the room timeline, because the group renders the first few
        // avatars and collapses the rest into a count.
        receipts.sort((a, b) => b.ts - a.ts);
        if (receipts.length > 0) receiptsByEvent.set(eventId, receipts);
    }

    return receiptsByEvent;
}
