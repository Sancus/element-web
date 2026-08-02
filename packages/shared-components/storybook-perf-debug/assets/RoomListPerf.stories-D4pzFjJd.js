import { i as __esmMin } from "./dist-DHqTAwVy.js";
import { c as useMockedViewModel, f as require_jsx_runtime, i as RoomNotifState, l as MockViewModel, n as init_RoomListView, o as init_viewmodel, p as require_react, r as init_RoomListItemView, t as RoomListView } from "./iframe-DBvGUzxq.js";
//#region src/room-list/story-mocks.tsx
function createMockRoomItemViewModel(roomId, name, index) {
	const snapshot = createMockRoomSnapshot(roomId, name, index);
	return {
		getSnapshot: () => snapshot,
		subscribe: fn$1(),
		onOpenRoom: fn$1(),
		onMarkAsRead: fn$1(),
		onMarkAsUnread: fn$1(),
		onToggleFavorite: fn$1(),
		onToggleLowPriority: fn$1(),
		onInvite: fn$1(),
		onCopyRoomLink: fn$1(),
		onLeaveRoom: fn$1(),
		onSetRoomNotifState: fn$1(),
		onCreateSection: fn$1(),
		onToggleSection: fn$1(),
		onRemoveFromSection: fn$1()
	};
}
var import_jsx_runtime$1, fn$1, mockAvatar, renderAvatar, roomNames, createMockRoomSnapshot, createGetRoomItemViewModel, createGetSectionHeaderViewModel, mock10RoomsIds, mockRoomIds, mockSmallListRoomIds, mockLargeListRoomIds;
var init_story_mocks = __esmMin((() => {
	require_react();
	init_RoomListItemView();
	init_viewmodel();
	import_jsx_runtime$1 = require_jsx_runtime();
	({fn: fn$1} = __STORYBOOK_MODULE_TEST__);
	mockAvatar = (name) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
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
				onClick: fn$1(),
				onFocus: fn$1()
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
})), import_jsx_runtime, fn, perfRoomIds, perfFlatSections, perfGroupedSections, getRoomItemViewModel, getRoomItemViewModelNoMenus, RoomListViewWrapper, meta, FlatThousand, GroupedThousand, GroupedHundred, GroupedThousandNoHoverMenu, __namedExportsOrder;
//#endregion
__esmMin((() => {
	require_react();
	init_RoomListView();
	init_viewmodel();
	init_story_mocks();
	import_jsx_runtime = require_jsx_runtime();
	({fn} = __STORYBOOK_MODULE_TEST__);
	perfRoomIds = Array.from({ length: 1e3 }, (_, i) => `!room${i}:server`);
	perfFlatSections = [{
		id: "chats",
		roomIds: perfRoomIds
	}];
	perfGroupedSections = [
		{
			id: "favourites",
			roomIds: perfRoomIds.slice(0, 50)
		},
		{
			id: "chats",
			roomIds: perfRoomIds.slice(50, 900)
		},
		{
			id: "low-priority",
			roomIds: perfRoomIds.slice(900)
		}
	];
	getRoomItemViewModel = createGetRoomItemViewModel(perfRoomIds);
	getRoomItemViewModelNoMenus = (() => {
		const viewModels = /* @__PURE__ */ new Map();
		perfRoomIds.forEach((roomId, index) => {
			const vm = createMockRoomItemViewModel(roomId, `Room ${index}`, index);
			const snapshot = {
				...vm.getSnapshot(),
				showMoreOptionsMenu: false,
				showNotificationMenu: false
			};
			viewModels.set(roomId, {
				...vm,
				getSnapshot: () => snapshot
			});
		});
		return (roomId) => viewModels.get(roomId);
	})();
	RoomListViewWrapper = ({ onToggleFilter, createChatRoom, createRoom, getRoomItemViewModel: getRoomItemVM, getSectionHeaderViewModel, updateVisibleRooms, updateVisibleFold, renderAvatar: renderAvatarProp, closeToast, scrollToUnreadActivity, setScrollToIndex, changeRoomSection, changeSectionOrder, onSectionDragStart, onSectionDragEnd, ...rest }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListView, {
			vm: useMockedViewModel(rest, {
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
				onSectionDragEnd
			}),
			renderAvatar: renderAvatarProp
		});
	};
	meta = {
		title: "Room List/RoomListPerf",
		component: RoomListViewWrapper,
		decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				width: "320px",
				height: "900px",
				display: "flex",
				flexDirection: "column"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {})
		})],
		args: {
			isLoadingRooms: false,
			isRoomListEmpty: false,
			filterIds: [
				"unread",
				"people",
				"rooms"
			],
			activeFilterId: void 0,
			roomListState: {
				activeRoomIndex: void 0,
				spaceId: "!space:server",
				filterKeys: void 0
			},
			sections: perfFlatSections,
			canCreateRoom: true,
			onToggleFilter: fn(),
			createChatRoom: fn(),
			createRoom: fn(),
			getRoomItemViewModel,
			getSectionHeaderViewModel: createGetSectionHeaderViewModel(perfGroupedSections.map((section) => section.id)),
			updateVisibleRooms: fn(),
			updateVisibleFold: fn(),
			renderAvatar,
			isFlatList: true,
			toast: void 0,
			closeToast: fn(),
			scrollToUnreadActivity: fn(),
			setScrollToIndex: fn(),
			changeRoomSection: fn(),
			changeSectionOrder: fn(),
			onSectionDragStart: fn(),
			onSectionDragEnd: fn()
		}
	};
	FlatThousand = {};
	GroupedThousand = { args: {
		isFlatList: false,
		sections: perfGroupedSections
	} };
	GroupedHundred = { args: {
		isFlatList: false,
		sections: [
			{
				id: "favourites",
				roomIds: perfRoomIds.slice(0, 5)
			},
			{
				id: "chats",
				roomIds: perfRoomIds.slice(5, 90)
			},
			{
				id: "low-priority",
				roomIds: perfRoomIds.slice(90, 100)
			}
		]
	} };
	GroupedThousandNoHoverMenu = { args: {
		isFlatList: false,
		sections: perfGroupedSections,
		getRoomItemViewModel: getRoomItemViewModelNoMenus
	} };
	FlatThousand.parameters = {
		...FlatThousand.parameters,
		docs: {
			...FlatThousand.parameters?.docs,
			source: {
				originalSource: "{}",
				...FlatThousand.parameters?.docs?.source
			},
			description: {
				story: "1000 rooms, flat list (no section headers, no drag-and-drop).",
				...FlatThousand.parameters?.docs?.description
			}
		}
	};
	GroupedThousand.parameters = {
		...GroupedThousand.parameters,
		docs: {
			...GroupedThousand.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFlatList: false,\n    sections: perfGroupedSections\n  }\n}",
				...GroupedThousand.parameters?.docs?.source
			},
			description: {
				story: "1000 rooms across the three default sections: the configuration users actually ship with.",
				...GroupedThousand.parameters?.docs?.description
			}
		}
	};
	GroupedHundred.parameters = {
		...GroupedHundred.parameters,
		docs: {
			...GroupedHundred.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFlatList: false,\n    sections: [{\n      id: \"favourites\",\n      roomIds: perfRoomIds.slice(0, 5)\n    }, {\n      id: \"chats\",\n      roomIds: perfRoomIds.slice(5, 90)\n    }, {\n      id: \"low-priority\",\n      roomIds: perfRoomIds.slice(90, 100)\n    }]\n  }\n}",
				...GroupedHundred.parameters?.docs?.source
			},
			description: {
				story: "Control for {@link GroupedThousand}. Virtualization means both render the same number of rows,\nso if scrolling costs the same at 100 rooms as at 1000, the cost is per-row rather than per-list.",
				...GroupedHundred.parameters?.docs?.description
			}
		}
	};
	GroupedThousandNoHoverMenu.parameters = {
		...GroupedThousandNoHoverMenu.parameters,
		docs: {
			...GroupedThousandNoHoverMenu.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFlatList: false,\n    sections: perfGroupedSections,\n    getRoomItemViewModel: getRoomItemViewModelNoMenus\n  }\n}",
				...GroupedThousandNoHoverMenu.parameters?.docs?.source
			},
			description: {
				story: "A/B control for {@link GroupedThousand}: identical, minus the per-row hover menu.",
				...GroupedThousandNoHoverMenu.parameters?.docs?.description
			}
		}
	};
	__namedExportsOrder = [
		"FlatThousand",
		"GroupedThousand",
		"GroupedHundred",
		"GroupedThousandNoHoverMenu"
	];
}))();
export { FlatThousand, GroupedHundred, GroupedThousand, GroupedThousandNoHoverMenu, __namedExportsOrder, meta as default };

//# sourceMappingURL=RoomListPerf.stories-D4pzFjJd.js.map