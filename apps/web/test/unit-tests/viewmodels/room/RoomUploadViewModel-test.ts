/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { type MatrixClient, Room, RoomEvent } from "matrix-js-sdk/src/matrix";

import { stubClient } from "../../../test-utils";
import { RoomUploadViewModel } from "../../../../src/viewmodels/room/RoomUploadViewModel";
import { TimelineRenderingType } from "../../../../src/contexts/RoomContext";
import defaultDispatcher from "../../../../src/dispatcher/dispatcher";
import { ModuleApi } from "../../../../src/modules/Api";
import { ModuleComposerApiEvents } from "../../../../src/modules/ComposerApi";

describe("RoomUploadViewModel", () => {
    let client: MatrixClient;
    let room: Room;

    beforeEach(() => {
        client = stubClient();
        room = new Room("!room:example.org", client, client.getSafeUserId());
    });

    function makeViewModel(): RoomUploadViewModel {
        return new RoomUploadViewModel(
            room,
            client,
            TimelineRenderingType.Room,
            defaultDispatcher,
            undefined,
            undefined,
            () => {},
        );
    }

    it("leaves nothing subscribed once disposed", () => {
        // One composer is created per thread card opened in the threads feed, so a listener left
        // behind by each is a leak that grows for as long as the page is used.
        const composerApi = ModuleApi.instance.composer;
        const before = {
            room: room.listenerCount(RoomEvent.CurrentStateUpdated),
            composer: composerApi.listenerCount(ModuleComposerApiEvents.UploaderOptionsChanged),
        };

        for (let i = 0; i < 3; i++) {
            makeViewModel().dispose();
        }

        expect(room.listenerCount(RoomEvent.CurrentStateUpdated)).toBe(before.room);
        expect(composerApi.listenerCount(ModuleComposerApiEvents.UploaderOptionsChanged)).toBe(before.composer);
    });

    it("subscribes each handler once while it is alive", () => {
        // Registering the same handler twice also runs it twice per event, so the count matters
        // beyond the leak.
        const vm = makeViewModel();

        expect(room.listenerCount(RoomEvent.CurrentStateUpdated)).toBe(1);

        vm.dispose();
    });

    it("still tracks whether the room may be sent to", () => {
        jest.spyOn(room, "maySendMessage").mockReturnValue(false);
        const vm = makeViewModel();
        expect(vm.getSnapshot().mayDragAndDropFile).toBe(false);

        jest.spyOn(room, "maySendMessage").mockReturnValue(true);
        room.emit(RoomEvent.CurrentStateUpdated, room, room.currentState, room.currentState);

        expect(vm.getSnapshot().mayDragAndDropFile).toBe(true);
        vm.dispose();
    });
});
