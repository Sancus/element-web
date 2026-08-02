/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { useState, type JSX } from "react";
import { fn } from "storybook/test";
import { Tooltip } from "@vector-im/compound-web";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoomListView, type RoomListViewSnapshot, type RoomListViewActions } from "./RoomListView";
import type { Room } from "../VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView";
import { useMockedViewModel } from "../../core/viewmodel";
import {
    mockAvatar,
    renderAvatar,
    createGetRoomItemViewModel,
    createGetSectionHeaderViewModel,
    createMockRoomItemViewModel,
} from "../story-mocks";
import type { RoomListItemViewModel } from "../VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView";

/**
 * Scale at which the room list is exercised here. Chosen to match the "power user" accounts
 * that scroll-performance reports come from (hundreds to ~1000 joined rooms).
 */
const ROOM_COUNT = 1000;

const perfRoomIds = Array.from({ length: ROOM_COUNT }, (_, i) => `!room${i}:server`);

/** A single section holding every room: exercises the flat-list code path. */
const perfFlatSections = [{ id: "chats", roomIds: perfRoomIds }];

/**
 * Three sections, matching the default shipped layout (Favourites / Chats / Low priority).
 * This is the grouped code path, which is what users get by default and which additionally
 * mounts the drag-and-drop providers.
 */
const perfGroupedSections = [
    { id: "favourites", roomIds: perfRoomIds.slice(0, 50) },
    { id: "chats", roomIds: perfRoomIds.slice(50, 900) },
    { id: "low-priority", roomIds: perfRoomIds.slice(900) },
];

const getRoomItemViewModel = createGetRoomItemViewModel(perfRoomIds);

/**
 * Same rooms, but with the hover menu suppressed. Comparing against `getRoomItemViewModel`
 * isolates the cost of the always-mounted more-options / notification menus and their tooltips,
 * without patching any component internals.
 */
const getRoomItemViewModelNoMenus = ((): ((roomId: string) => RoomListItemViewModel) => {
    const viewModels = new Map<string, RoomListItemViewModel>();
    perfRoomIds.forEach((roomId, index) => {
        const vm = createMockRoomItemViewModel(roomId, `Room ${index}`, index);
        const snapshot = { ...vm.getSnapshot(), showMoreOptionsMenu: false, showNotificationMenu: false };
        viewModels.set(roomId, { ...vm, getSnapshot: () => snapshot });
    });
    return (roomId: string) => viewModels.get(roomId)!;
})();

/**
 * Mirrors what the web app actually renders for a room avatar.
 *
 * `RoomAvatarView` wraps the badge decoration in `<Tooltip label={...}>` whenever a room has one,
 * which covers every DM showing presence plus every public and video room. A label tooltip keeps
 * its floating element in the DOM while closed, so each one runs a Floating-UI `autoUpdate` loop
 * for the lifetime of the row — the same cost the hover menu had.
 *
 * The default story-mocks avatar is a bare div, so benchmarks built on it cannot see any of this.
 */
const renderDecoratedAvatar = (room: Room): React.ReactElement => {
    const name = (room as { name?: string } | undefined)?.name ?? "Room";
    return (
        <div style={{ position: "relative", display: "flex" }}>
            {mockAvatar(name)}
            <Tooltip label="Online">
                <span
                    aria-label="Online"
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#0DBD8B",
                    }}
                />
            </Tooltip>
        </div>
    );
};

const presenceDot = (
    <span
        aria-label="Online"
        style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#0DBD8B",
        }}
    />
);

/**
 * Mirrors the gating applied to `RoomAvatarView`: the badge tooltip is mounted only while the
 * pointer is over the avatar, so closed tooltips stop running Floating-UI `autoUpdate` loops on
 * the off-screen rows the virtualised list keeps mounted.
 */
function GatedDecoratedAvatar({ name }: { name: string }): JSX.Element {
    const [pointerOver, setPointerOver] = useState(false);
    return (
        <div
            data-testid="gated-avatar"
            style={{ position: "relative", display: "flex" }}
            onMouseMove={() => setPointerOver(true)}
            onMouseLeave={() => setPointerOver(false)}
        >
            {mockAvatar(name)}
            {pointerOver ? <Tooltip label="Online">{presenceDot}</Tooltip> : presenceDot}
        </div>
    );
}

const renderGatedAvatar = (room: Room): React.ReactElement => (
    <GatedDecoratedAvatar name={(room as { name?: string } | undefined)?.name ?? "Room"} />
);

type RoomListViewProps = RoomListViewSnapshot &
    RoomListViewActions & { renderAvatar: (room: Room) => React.ReactElement };

const RoomListViewWrapper = ({
    onToggleFilter,
    createChatRoom,
    createRoom,
    getRoomItemViewModel: getRoomItemVM,
    getSectionHeaderViewModel,
    updateVisibleRooms,
    updateVisibleFold,
    renderAvatar: renderAvatarProp,
    closeToast,
    scrollToUnreadActivity,
    setScrollToIndex,
    changeRoomSection,
    changeSectionOrder,
    onSectionDragStart,
    onSectionDragEnd,
    ...rest
}: RoomListViewProps): JSX.Element => {
    const vm = useMockedViewModel(rest, {
        onToggleFilter,
        createChatRoom,
        createRoom,
        getRoomItemViewModel: getRoomItemVM,
        getSectionHeaderViewModel,
        updateVisibleRooms,
        updateVisibleFold,
        closeToast,
        scrollToUnreadActivity,
        setScrollToIndex,
        changeRoomSection,
        changeSectionOrder,
        onSectionDragStart,
        onSectionDragEnd,
    });
    return <RoomListView vm={vm} renderAvatar={renderAvatarProp} />;
};

const meta = {
    title: "Room List/RoomListPerf",
    component: RoomListViewWrapper,
    decorators: [
        (Story) => (
            // Sized like a real left panel rather than the 320x600 used by the visual-regression
            // stories, so the rendered row count matches what users actually get.
            <div
                style={{
                    width: "320px",
                    height: "900px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Story />
            </div>
        ),
    ],
    args: {
        isLoadingRooms: false,
        isRoomListEmpty: false,
        filterIds: ["unread", "people", "rooms"],
        activeFilterId: undefined,
        roomListState: {
            activeRoomIndex: undefined,
            spaceId: "!space:server",
            filterKeys: undefined,
        },
        sections: perfFlatSections,
        canCreateRoom: true,
        onToggleFilter: fn(),
        createChatRoom: fn(),
        createRoom: fn(),
        getRoomItemViewModel,
        getSectionHeaderViewModel: createGetSectionHeaderViewModel(
            perfGroupedSections.map((section) => section.id),
        ),
        updateVisibleRooms: fn(),
        updateVisibleFold: fn(),
        renderAvatar,
        isFlatList: true,
        toast: undefined,
        closeToast: fn(),
        scrollToUnreadActivity: fn(),
        setScrollToIndex: fn(),
        changeRoomSection: fn(),
        changeSectionOrder: fn(),
        onSectionDragStart: fn(),
        onSectionDragEnd: fn(),
    },
} satisfies Meta<typeof RoomListViewWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 1000 rooms, flat list (no section headers, no drag-and-drop). */
export const FlatThousand: Story = {};

/** 1000 rooms across the three default sections: the configuration users actually ship with. */
export const GroupedThousand: Story = {
    args: {
        isFlatList: false,
        sections: perfGroupedSections,
    },
};

/**
 * Control for {@link GroupedThousand}. Virtualization means both render the same number of rows,
 * so if scrolling costs the same at 100 rooms as at 1000, the cost is per-row rather than per-list.
 */
export const GroupedHundred: Story = {
    args: {
        isFlatList: false,
        sections: [
            { id: "favourites", roomIds: perfRoomIds.slice(0, 5) },
            { id: "chats", roomIds: perfRoomIds.slice(5, 90) },
            { id: "low-priority", roomIds: perfRoomIds.slice(90, 100) },
        ],
    },
};

/** A/B control for {@link GroupedThousand}: identical, minus the per-row hover menu. */
export const GroupedThousandNoHoverMenu: Story = {
    args: {
        isFlatList: false,
        sections: perfGroupedSections,
        getRoomItemViewModel: getRoomItemViewModelNoMenus,
    },
};

/**
 * The configuration that actually matches a real account: default sections, and avatars carrying
 * the badge decoration tooltip that `RoomAvatarView` renders. This is the story to trust when
 * judging whether scrolling is fast, because the others understate per-row cost.
 */
export const GroupedThousandRealAvatar: Story = {
    args: {
        isFlatList: false,
        sections: perfGroupedSections,
        renderAvatar: renderDecoratedAvatar,
    },
};

/** {@link GroupedThousandRealAvatar} with the badge tooltip gated on pointer-over. */
export const GroupedThousandGatedAvatar: Story = {
    args: {
        isFlatList: false,
        sections: perfGroupedSections,
        renderAvatar: renderGatedAvatar,
    },
};
