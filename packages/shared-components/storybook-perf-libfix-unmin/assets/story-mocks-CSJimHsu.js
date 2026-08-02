import { i as __esmMin } from "./dist-DHqTAwVy.js";
import { n as require_react } from "./react-dom-BWFRaAn0.js";
import { Xt as init_viewmodel, c as RoomNotifState, t as init_RoomListItemView, tn as MockViewModel, wr as require_jsx_runtime } from "./RoomListItemView-DO4BiWnM.js";
//#region src/room-list/story-mocks.tsx
function createMockRoomItemViewModel(roomId, name, index) {
	const snapshot = createMockRoomSnapshot(roomId, name, index);
	return {
		getSnapshot: () => snapshot,
		subscribe: fn(),
		onOpenRoom: fn(),
		onMarkAsRead: fn(),
		onMarkAsUnread: fn(),
		onToggleFavorite: fn(),
		onToggleLowPriority: fn(),
		onInvite: fn(),
		onCopyRoomLink: fn(),
		onLeaveRoom: fn(),
		onSetRoomNotifState: fn(),
		onCreateSection: fn(),
		onToggleSection: fn(),
		onRemoveFromSection: fn()
	};
}
var import_jsx_runtime, fn, mockAvatar, renderAvatar, roomNames, createMockRoomSnapshot, createGetRoomItemViewModel, createGetSectionHeaderViewModel, mock10RoomsIds, mockRoomIds, mockSmallListRoomIds, mockLargeListRoomIds;
var init_story_mocks = __esmMin((() => {
	require_react();
	init_RoomListItemView();
	init_viewmodel();
	import_jsx_runtime = require_jsx_runtime();
	({fn} = __STORYBOOK_MODULE_TEST__);
	mockAvatar = (name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": `${name} avatar`,
		style: {
			width: "32px",
			height: "32px",
			borderRadius: "50%",
			backgroundColor: "#0B7F67",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "white",
			fontWeight: "bold",
			fontSize: "12px"
		},
		children: name.substring(0, 2).toUpperCase()
	});
	renderAvatar = (room) => {
		return mockAvatar(room?.name || "Room");
	};
	roomNames = [
		"General",
		"Random",
		"Engineering",
		"Design",
		"Product",
		"Marketing",
		"Sales",
		"Support",
		"Announcements",
		"Off-topic",
		"Team Alpha",
		"Team Beta",
		"Project X",
		"Project Y",
		"Water Cooler",
		"Feedback",
		"Ideas",
		"Bugs",
		"Features",
		"Releases"
	];
	createMockRoomSnapshot = (id, name, index) => ({
		id,
		room: { name },
		name,
		isBold: index % 3 === 0,
		messagePreview: index % 2 === 0 ? `Last message in ${name}` : void 0,
		notification: {
			hasAnyNotificationOrActivity: index % 5 === 0,
			isUnsentMessage: false,
			invited: false,
			isMention: index % 5 === 0,
			isActivityNotification: false,
			isNotification: index % 5 === 0,
			hasUnreadCount: index % 5 === 0,
			count: index % 5 === 0 ? index : 0,
			muted: false
		},
		showMoreOptionsMenu: true,
		showNotificationMenu: true,
		isFavourite: false,
		isLowPriority: false,
		canInvite: true,
		canCopyRoomLink: true,
		canMarkAsRead: false,
		canMarkAsUnread: true,
		roomNotifState: RoomNotifState.AllMessages,
		sections: [],
		areSectionsEnabled: true
	});
	createGetRoomItemViewModel = (roomIds) => {
		const viewModels = /* @__PURE__ */ new Map();
		roomIds.forEach((roomId, index) => {
			const name = roomNames[index % roomNames.length];
			viewModels.set(roomId, createMockRoomItemViewModel(roomId, name, index));
		});
		return (roomId) => viewModels.get(roomId);
	};
	createGetSectionHeaderViewModel = (sectionIds) => {
		const viewModels = /* @__PURE__ */ new Map();
		sectionIds.forEach((sectionId) => {
			const vm = new MockViewModel({
				id: sectionId,
				title: sectionId[0].toUpperCase() + sectionId.slice(1),
				isExpanded: true,
				isUnread: false,
				displaySectionMenu: false,
				canBeReordered: true
			});
			Object.assign(vm, {
				onClick: fn(),
				onFocus: fn()
			});
			viewModels.set(sectionId, vm);
		});
		return (sectionId) => viewModels.get(sectionId);
	};
	mock10RoomsIds = Array.from({ length: 10 }, (_, i) => `!room${i}:server`);
	mock10RoomsIds.slice(0, 3), mock10RoomsIds.slice(3, 4), mock10RoomsIds.slice(4);
	mockRoomIds = Array.from({ length: 20 }, (_, i) => `!room${i}:server`);
	mockRoomIds.slice(0, 5), mockRoomIds.slice(5, 15), mockRoomIds.slice(15);
	mockSmallListRoomIds = mockRoomIds.slice(0, 5);
	mockSmallListRoomIds.slice(0, 2), mockSmallListRoomIds.slice(2, 0);
	mockLargeListRoomIds = Array.from({ length: 100 }, (_, i) => `!room${i}:server`);
	mockLargeListRoomIds.slice(0, 23), mockLargeListRoomIds.slice(23, 52), mockLargeListRoomIds.slice(52);
	mockAvatar.__docgenInfo = {
		"description": "Mock avatar component for stories",
		"methods": [],
		"displayName": "mockAvatar"
	};
	renderAvatar.__docgenInfo = {
		"description": "Render avatar function for stories",
		"methods": [],
		"displayName": "renderAvatar"
	};
}));
//#endregion
export { mockAvatar as a, init_story_mocks as i, createGetSectionHeaderViewModel as n, renderAvatar as o, createMockRoomItemViewModel as r, createGetRoomItemViewModel as t };

//# sourceMappingURL=story-mocks-CSJimHsu.js.map