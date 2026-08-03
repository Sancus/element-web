/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type Room } from "matrix-js-sdk/src/matrix";

import { type Filter } from ".";
import DMRoomMap from "../../../../utils/DMRoomMap";

/**
 * Matches the rooms the People section holds: the ones moved into it by hand, plus the direct
 * messages that no other section has claimed.
 *
 * The tag is passed in rather than imported to keep the filters free of the section module.
 */
export class PeopleSectionFilter implements Filter {
    /**
     * @param tag - The tag of the People section.
     * @param otherSectionTags - The tags of the sections that take precedence over the automatic
     *     collection of direct messages.
     */
    public constructor(
        private readonly tag: string,
        private readonly otherSectionTags: string[],
    ) {}

    public matches(room: Room): boolean {
        // A room belongs to a single section, and a room tagged into another one is already spoken
        // for — even if it also carries this tag from an earlier move.
        if (this.otherSectionTags.some((tag) => room.tags[tag])) return false;
        if (room.tags[this.tag]) return true;
        return !!DMRoomMap.shared().getUserIdForRoomId(room.roomId);
    }

    public get key(): string {
        return this.tag;
    }
}
