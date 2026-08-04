/*
Copyright 2024, 2025 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
    MatrixEvent,
    NotificationCountType,
    Room,
    type MatrixClient,
    ReceiptType,
    type AccountDataEvents,
    type Thread,
    PendingEventOrdering,
    EventStatus,
} from "matrix-js-sdk/src/matrix";
import { type Mocked, mocked } from "jest-mock-vitest-adapter";

import {
    localNotificationsAreSilenced,
    getLocalNotificationAccountDataEventType,
    createLocalNotificationSettingsIfNeeded,
    deviceNotificationSettingsKeys,
    clearAllNotifications,
    clearRoomNotification,
    clearThreadNotification,
    notificationLevelToIndicator,
    getThreadNotificationLevel,
    getMarkedUnreadState,
    setMarkedUnreadState,
} from "../../../src/utils/notifications";
import { getMockClientWithEventEmitter, mockClientMethodsServer } from "../../test-utils/client";
import { mkMessage, stubClient } from "../../test-utils/test-utils";
import { populateThread } from "../../test-utils/threads";
import { MatrixClientPeg } from "../../../src/MatrixClientPeg";
import { NotificationLevel } from "../../../src/stores/notifications/NotificationLevel";
import { SettingLevel } from "../../../src/settings/SettingLevel";
import MatrixClientBackedController from "../../../src/settings/controllers/MatrixClientBackedController";
import SettingsStore from "../../../src/settings/SettingsStore";

describe("notifications", () => {
    let accountDataStore: Record<string, MatrixEvent> = {};
    let mockClient: Mocked<MatrixClient>;
    let accountDataEventKey: keyof AccountDataEvents;

    beforeEach(() => {
        jest.clearAllMocks();
        mockClient = getMockClientWithEventEmitter({
            ...mockClientMethodsServer(),
            isGuest: jest.fn().mockReturnValue(false),
            getAccountData: jest.fn().mockImplementation((eventType) => accountDataStore[eventType]),
            setAccountData: jest.fn().mockImplementation((eventType, content) => {
                accountDataStore[eventType] = new MatrixEvent({
                    type: eventType,
                    content,
                });
            }),
            isVersionSupported: jest.fn().mockImplementation(async (v) => v === "v1.4"),
        });

        // Ensure unstable settings are supported, otherwise it will use the default value.
        MatrixClientBackedController.matrixClient = mockClient;
        accountDataStore = {};
        accountDataEventKey = getLocalNotificationAccountDataEventType(mockClient.deviceId!);
        // Disable all notifications
        deviceNotificationSettingsKeys.forEach((k) => SettingsStore.setValue(k, null, SettingLevel.DEVICE, false));
    });

    afterEach(() => {
        jest.restoreAllMocks();
        SettingsStore.reset();
    });

    describe("createLocalNotification", () => {
        it("creates account data event", async () => {
            await createLocalNotificationSettingsIfNeeded(mockClient);
            const event = mockClient.getAccountData(accountDataEventKey);
            expect(event?.getContent().is_silenced).toBe(true);
        });

        it("does not do anything for guests", async () => {
            mockClient.isGuest.mockReset().mockReturnValue(true);
            await createLocalNotificationSettingsIfNeeded(mockClient);
            const event = mockClient.getAccountData(accountDataEventKey);
            expect(event).toBeFalsy();
        });

        it.each(deviceNotificationSettingsKeys)(
            "unsilenced for existing sessions when %s setting is truthy",
            async (settingKey) => {
                // We need to spy `getValue` because setting these keys requires mocking
                // the platform to support notifications, which is out of scope for this test.
                const origFn = SettingsStore.getValue;
                jest.spyOn(SettingsStore, "getValue").mockImplementation((name, ...args) => {
                    if (name === settingKey) {
                        return true;
                    }
                    return origFn(name, ...args);
                });
                await createLocalNotificationSettingsIfNeeded(mockClient);
                const event = mockClient.getAccountData(accountDataEventKey);
                expect(event?.getContent().is_silenced).toBe(false);
            },
        );

        it("does not override an existing account event data", async () => {
            mockClient.setAccountData(accountDataEventKey, {
                is_silenced: false,
            });

            await createLocalNotificationSettingsIfNeeded(mockClient);
            const event = mockClient.getAccountData(accountDataEventKey);
            expect(event?.getContent().is_silenced).toBe(false);
        });
    });

    describe("localNotificationsAreSilenced", () => {
        it("defaults to false when no setting exists", () => {
            expect(localNotificationsAreSilenced(mockClient)).toBeFalsy();
        });
        it("checks the persisted value", () => {
            mockClient.setAccountData(accountDataEventKey, { is_silenced: true });
            expect(localNotificationsAreSilenced(mockClient)).toBeTruthy();

            mockClient.setAccountData(accountDataEventKey, { is_silenced: false });
            expect(localNotificationsAreSilenced(mockClient)).toBeFalsy();
        });
    });

    describe("clearRoomNotification", () => {
        let client: MatrixClient;
        let room: Room;
        let sendReadReceiptSpy: jest.SpyInstance;
        const ROOM_ID = "123";
        const USER_ID = "@bob:example.org";
        let message: MatrixEvent;

        beforeEach(() => {
            stubClient();
            client = mocked(MatrixClientPeg.safeGet());
            room = new Room(ROOM_ID, client, USER_ID);
            message = mkMessage({
                event: true,
                room: ROOM_ID,
                user: USER_ID,
                msg: "Hello",
            });
            room.addLiveEvents([message], { addToState: true });
            sendReadReceiptSpy = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});
            jest.spyOn(client, "getRooms").mockReturnValue([room]);
            SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, true);
        });

        it("sends a request even if everything has been read", async () => {
            await clearRoomNotification(room, client);
            expect(sendReadReceiptSpy).toHaveBeenCalledWith(message, ReceiptType.Read, true);
        });

        it("marks the room as read even if the receipt failed", async () => {
            room.setUnreadNotificationCount(NotificationCountType.Total, 5);
            sendReadReceiptSpy = jest.spyOn(client, "sendReadReceipt").mockReset().mockRejectedValue({ error: 42 });

            await expect(async () => {
                await clearRoomNotification(room, client);
            }).rejects.toEqual({ error: 42 });
            expect(room.getUnreadNotificationCount(NotificationCountType.Total)).toBe(0);
        });

        describe("when sendReadReceipts setting is disabled", () => {
            it("should send a private read receipt", async () => {
                SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, false);
                await clearRoomNotification(room, client);
                expect(sendReadReceiptSpy).toHaveBeenCalledWith(message, ReceiptType.ReadPrivate, true);
            });
        });
    });

    describe("clearThreadNotification", () => {
        let client: MatrixClient;
        let room: Room;
        let sendReadReceiptSpy: jest.SpyInstance;
        const ROOM_ID = "!threads:example.org";
        const USER_ID = "@bob:example.org";

        beforeEach(() => {
            stubClient();
            client = mocked(MatrixClientPeg.safeGet());
            client.supportsThreads = () => true;
            room = new Room(ROOM_ID, client, USER_ID, { pendingEventOrdering: PendingEventOrdering.Detached });
            sendReadReceiptSpy = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});
            SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, true);
        });

        async function makeThread(): Promise<Thread> {
            const { thread } = await populateThread({
                room,
                client,
                authorId: USER_ID,
                participantUserIds: ["@alice:example.org"],
                length: 4,
            });
            return thread;
        }

        it("sends a threaded receipt against the newest reply", async () => {
            const thread = await makeThread();
            await clearThreadNotification(thread, room, client);

            const [event, receiptType, unthreaded] = sendReadReceiptSpy.mock.calls[0];
            expect(event.getId()).toBe(thread.lastReply()!.getId());
            expect(receiptType).toBe(ReceiptType.Read);
            // Unthreaded receipts mark the whole room, which is the one thing a per-thread
            // control must not do.
            expect(unthreaded).toBeFalsy();
        });

        it("never sends a receipt against the thread root", async () => {
            // The state a card in the feed starts in: the thread is known from the root's bundled
            // relations, and its own timeline has not been fetched yet. The SDK counts a thread
            // root as part of the main timeline, so a receipt against it would advance the room's
            // main-timeline receipt and mark messages the user has never opened.
            const thread = await makeThread();
            jest.spyOn(thread, "lastReply").mockReturnValue(null);
            jest.spyOn(thread, "replyToEvent", "get").mockReturnValue(thread.rootEvent!);

            await expect(clearThreadNotification(thread, room, client)).resolves.toBeUndefined();
            expect(sendReadReceiptSpy).not.toHaveBeenCalled();
        });

        it("does not send a receipt for a reply that is still sending", async () => {
            const thread = await makeThread();
            const pending = thread.lastReply()!;
            pending.status = EventStatus.SENDING;
            jest.spyOn(thread, "replyToEvent", "get").mockReturnValue(pending);

            await expect(clearThreadNotification(thread, room, client)).resolves.toBeUndefined();
            expect(sendReadReceiptSpy).not.toHaveBeenCalled();
        });

        it("sends a private receipt when read receipts are disabled", async () => {
            SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, false);
            const thread = await makeThread();
            await clearThreadNotification(thread, room, client);

            expect(sendReadReceiptSpy.mock.calls[0][1]).toBe(ReceiptType.ReadPrivate);
        });

        it("clears the thread's counts even if the receipt fails", async () => {
            const thread = await makeThread();
            room.setThreadUnreadNotificationCount(thread.id, NotificationCountType.Total, 5);
            sendReadReceiptSpy.mockReset().mockRejectedValue({ error: 42 });

            await expect(clearThreadNotification(thread, room, client)).rejects.toEqual({ error: 42 });
            expect(room.getThreadUnreadNotificationCount(thread.id, NotificationCountType.Total)).toBe(0);
        });
    });

    describe("clearAllNotifications", () => {
        let client: MatrixClient;
        let room: Room;
        let sendReadReceiptSpy: jest.SpyInstance;

        const ROOM_ID = "123";
        const USER_ID = "@bob:example.org";

        beforeEach(() => {
            stubClient();
            client = mocked(MatrixClientPeg.safeGet());
            room = new Room(ROOM_ID, client, USER_ID);
            sendReadReceiptSpy = jest.spyOn(client, "sendReadReceipt").mockResolvedValue({});
            jest.spyOn(client, "getRooms").mockReturnValue([room]);
            SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, true);
        });

        it("does not send any requests if everything has been read", () => {
            clearAllNotifications(client);
            expect(sendReadReceiptSpy).not.toHaveBeenCalled();
        });

        it("sends unthreaded receipt requests", async () => {
            const message = mkMessage({
                event: true,
                room: ROOM_ID,
                user: USER_ID,
                ts: 1,
            });
            room.addLiveEvents([message], { addToState: true });
            room.setUnreadNotificationCount(NotificationCountType.Total, 1);

            await clearAllNotifications(client);

            expect(sendReadReceiptSpy).toHaveBeenCalledWith(message, ReceiptType.Read, true);
        });

        it("sends private read receipts", async () => {
            const message = mkMessage({
                event: true,
                room: ROOM_ID,
                user: USER_ID,
                ts: 1,
            });
            room.addLiveEvents([message], { addToState: true });
            room.setUnreadNotificationCount(NotificationCountType.Total, 1);

            SettingsStore.setValue("sendReadReceipts", null, SettingLevel.DEVICE, false);

            await clearAllNotifications(client);

            expect(sendReadReceiptSpy).toHaveBeenCalledWith(message, ReceiptType.ReadPrivate, true);
        });
    });

    describe("getMarkedUnreadState", () => {
        let client: MatrixClient;
        let room: Room;

        const ROOM_ID = "123";
        const USER_ID = "@bob:example.org";

        beforeEach(() => {
            stubClient();
            client = mocked(MatrixClientPeg.safeGet());
            room = new Room(ROOM_ID, client, USER_ID);
        });

        it("reads from stable prefix", async () => {
            room.getAccountData = jest.fn().mockImplementation((eventType: string) => {
                if (eventType === "m.marked_unread") {
                    return { getContent: jest.fn().mockReturnValue({ unread: true }) };
                }
                return null;
            });
            expect(getMarkedUnreadState(room)).toBe(true);
        });

        it("reads from unstable prefix", async () => {
            room.getAccountData = jest.fn().mockImplementation((eventType: string) => {
                if (eventType === "com.famedly.marked_unread") {
                    return { getContent: jest.fn().mockReturnValue({ unread: true }) };
                }
                return null;
            });
            expect(getMarkedUnreadState(room)).toBe(true);
        });

        it("returns undefined if neither prefix is present", async () => {
            room.getAccountData = jest.fn().mockImplementation((eventType: string) => {
                return null;
            });
            expect(getMarkedUnreadState(room)).toBe(undefined);
        });
    });

    describe("setUnreadMarker", () => {
        let client: MatrixClient;
        let room: Room;

        const ROOM_ID = "123";
        const USER_ID = "@bob:example.org";

        beforeEach(() => {
            stubClient();
            client = mocked(MatrixClientPeg.safeGet());
            room = new Room(ROOM_ID, client, USER_ID);
        });

        // set true, no existing event
        it("sets unread flag if event doesn't exist", async () => {
            await setMarkedUnreadState(room, client, true);
            expect(client.setRoomAccountData).toHaveBeenCalledWith(ROOM_ID, "m.marked_unread", {
                unread: true,
            });
        });

        // set false, no existing event
        it("does nothing when clearing if flag is false", async () => {
            await setMarkedUnreadState(room, client, false);
            expect(client.setRoomAccountData).not.toHaveBeenCalled();
        });

        // set true, existing event = false
        it("sets unread flag to if existing event is false", async () => {
            room.getAccountData = jest
                .fn()
                .mockReturnValue({ getContent: jest.fn().mockReturnValue({ unread: false }) });
            await setMarkedUnreadState(room, client, true);
            expect(client.setRoomAccountData).toHaveBeenCalledWith(ROOM_ID, "m.marked_unread", {
                unread: true,
            });
        });

        // set false, existing event = false
        it("does nothing if set false and existing event is false", async () => {
            room.getAccountData = jest
                .fn()
                .mockReturnValue({ getContent: jest.fn().mockReturnValue({ unread: false }) });
            await setMarkedUnreadState(room, client, false);
            expect(client.setRoomAccountData).not.toHaveBeenCalled();
        });

        // set true, existing event = true
        it("does nothing if setting true and existing event is true", async () => {
            room.getAccountData = jest
                .fn()
                .mockReturnValue({ getContent: jest.fn().mockReturnValue({ unread: true }) });
            await setMarkedUnreadState(room, client, true);
            expect(client.setRoomAccountData).not.toHaveBeenCalled();
        });

        // set false, existing event = true
        it("sets flag if setting false and existing event is true", async () => {
            room.getAccountData = jest
                .fn()
                .mockReturnValue({ getContent: jest.fn().mockReturnValue({ unread: true }) });
            await setMarkedUnreadState(room, client, false);
            expect(client.setRoomAccountData).toHaveBeenCalledWith(ROOM_ID, "m.marked_unread", {
                unread: false,
            });
        });
    });

    describe("notificationLevelToIndicator", () => {
        it("returns undefined if notification level is None", () => {
            expect(notificationLevelToIndicator(NotificationLevel.None)).toBeUndefined();
        });

        it("returns default if notification level is Activity", () => {
            expect(notificationLevelToIndicator(NotificationLevel.Activity)).toEqual("default");
        });

        it("returns success if notification level is Notification", () => {
            expect(notificationLevelToIndicator(NotificationLevel.Notification)).toEqual("success");
        });

        it("returns critical if notification level is Highlight", () => {
            expect(notificationLevelToIndicator(NotificationLevel.Highlight)).toEqual("critical");
        });
    });

    describe("getThreadNotificationLevel", () => {
        let room: Room;

        const ROOM_ID = "123";
        const USER_ID = "@bob:example.org";

        beforeEach(() => {
            room = new Room(ROOM_ID, MatrixClientPeg.safeGet(), USER_ID);
        });

        it.each([
            { notificationCountType: NotificationCountType.Highlight, expected: NotificationLevel.Highlight },
            { notificationCountType: NotificationCountType.Total, expected: NotificationLevel.Notification },
            { notificationCountType: null, expected: NotificationLevel.Activity },
        ])(
            "returns NotificationLevel $expected when notificationCountType is $expected",
            ({ notificationCountType, expected }) => {
                jest.spyOn(room, "threadsAggregateNotificationType", "get").mockReturnValue(notificationCountType);
                expect(getThreadNotificationLevel(room)).toEqual(expected);
            },
        );
    });
});
