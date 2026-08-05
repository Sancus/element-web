/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { closeReleaseAnnouncement, rejectToast } from "@element-hq/element-web-playwright-common";

import { expect, test } from "../../../element-web-test";
import { SettingLevel } from "../../../../src/settings/SettingLevel";
import { readSampleFileSync } from "../../../sample-files";
import { getRoomList } from "./utils";

test.describe("Room list compact layout", () => {
    test.use({ displayName: "Alice" });

    // Geometry, so there is nowhere else this can be pinned down: jsdom has no layout engine and
    // would report the same numbers whether the rule under test were present or not.
    test("draws a room's avatar image square", async ({ page, app, user }) => {
        await rejectToast(page, "Verify this device");
        await rejectToast(page, "Notifications");
        await closeReleaseAnnouncement(page, "Introducing Sections");

        const image = readSampleFileSync("element.png", null);
        const { content_uri: url } = await app.client.uploadContent(image, {
            name: "element.png",
            type: "image/png",
        });
        const roomId = await app.client.createRoom({ name: "Pictured" });
        await app.client.sendStateEvent(roomId, "m.room.avatar", { url });

        await app.settings.setValue("RoomList.compactLayout", null, SettingLevel.DEVICE, true);

        const avatar = getRoomList(page)
            .locator(".mx_RoomListItemView", { hasText: "Pictured" })
            .locator(".mx_BaseAvatar");
        const img = avatar.locator("img");
        await expect(img).toBeVisible();

        const drawn = (await img.boundingBox())!;
        const container = (await avatar.boundingBox())!;

        // Asserted first, so that a run which quietly stayed at the default density fails here rather
        // than passing a squareness check that the default density satisfies anyway.
        expect(drawn.width).toBeLessThan(32);
        // The image carries width and height attributes from the size prop the avatar was rendered
        // with, and only its width follows the smaller size the compact row asks for. Left to itself
        // it is drawn 32 tall in a 26 wide box, so the picture is cropped off centre.
        expect(drawn.height).toBeCloseTo(drawn.width, 1);
        expect(drawn.height).toBeCloseTo(container.height, 1);
    });
});
