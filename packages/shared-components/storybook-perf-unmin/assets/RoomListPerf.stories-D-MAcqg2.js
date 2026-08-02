import { i as __esmMin } from "./dist-DHqTAwVy.js";
import { n as require_react } from "./react-dom-BWFRaAn0.js";
import { Xt as init_viewmodel, en as useMockedViewModel, wr as require_jsx_runtime } from "./RoomListItemView-DYy9li3y.js";
import { n as init_RoomListView, t as RoomListView } from "./RoomListView-GRFR9dSE.js";
import { a as renderAvatar, i as init_story_mocks, n as createGetSectionHeaderViewModel, r as createMockRoomItemViewModel, t as createGetRoomItemViewModel } from "./story-mocks-DbEx-qNV.js";
//#region src/room-list/RoomListView/RoomListPerf.stories.tsx
var import_jsx_runtime, fn, perfRoomIds, perfFlatSections, perfGroupedSections, getRoomItemViewModel, getRoomItemViewModelNoMenus, RoomListViewWrapper, meta, FlatThousand, GroupedThousand, GroupedHundred, GroupedThousandNoHoverMenu, __namedExportsOrder;
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

//# sourceMappingURL=RoomListPerf.stories-D-MAcqg2.js.map