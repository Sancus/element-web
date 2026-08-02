import { c as __toESM, i as __esmMin } from "./dist-DHqTAwVy.js";
import { n as require_react } from "./react-dom-BWFRaAn0.js";
import { Xt as init_viewmodel, en as useMockedViewModel, mr as Tooltip, on as init_dist, wr as require_jsx_runtime } from "./RoomListItemView-DO4BiWnM.js";
import { n as init_RoomListView, t as RoomListView } from "./RoomListView-DrV5d9wh.js";
import { a as mockAvatar, i as init_story_mocks, n as createGetSectionHeaderViewModel, o as renderAvatar, r as createMockRoomItemViewModel, t as createGetRoomItemViewModel } from "./story-mocks-CSJimHsu.js";
//#region src/room-list/RoomListView/RoomListPerf.stories.tsx
/**
* Mirrors the gating applied to `RoomAvatarView`: the badge tooltip is mounted only while the
* pointer is over the avatar, so closed tooltips stop running Floating-UI `autoUpdate` loops on
* the off-screen rows the virtualised list keeps mounted.
*/
function GatedDecoratedAvatar({ name }) {
	const [pointerOver, setPointerOver] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-testid": "gated-avatar",
		style: {
			position: "relative",
			display: "flex"
		},
		onMouseMove: () => setPointerOver(true),
		onMouseLeave: () => setPointerOver(false),
		children: [mockAvatar(name), pointerOver ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
			label: "Online",
			children: presenceDot
		}) : presenceDot]
	});
}
var import_react, import_jsx_runtime, fn, perfRoomIds, perfFlatSections, perfGroupedSections, getRoomItemViewModel, getRoomItemViewModelNoMenus, renderDecoratedAvatar, presenceDot, renderGatedAvatar, RoomListViewWrapper, meta, FlatThousand, GroupedThousand, GroupedHundred, GroupedThousandNoHoverMenu, GroupedThousandRealAvatar, GroupedThousandGatedAvatar, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist();
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
	renderDecoratedAvatar = (room) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				position: "relative",
				display: "flex"
			},
			children: [mockAvatar(room?.name ?? "Room"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				label: "Online",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-label": "Online",
					style: {
						position: "absolute",
						right: 0,
						bottom: 0,
						width: "8px",
						height: "8px",
						borderRadius: "50%",
						backgroundColor: "#0DBD8B"
					}
				})
			})]
		});
	};
	presenceDot = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": "Online",
		style: {
			position: "absolute",
			right: 0,
			bottom: 0,
			width: "8px",
			height: "8px",
			borderRadius: "50%",
			backgroundColor: "#0DBD8B"
		}
	});
	renderGatedAvatar = (room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatedDecoratedAvatar, { name: room?.name ?? "Room" });
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
	GroupedThousandRealAvatar = { args: {
		isFlatList: false,
		sections: perfGroupedSections,
		renderAvatar: renderDecoratedAvatar
	} };
	GroupedThousandGatedAvatar = { args: {
		isFlatList: false,
		sections: perfGroupedSections,
		renderAvatar: renderGatedAvatar
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
	GroupedThousandRealAvatar.parameters = {
		...GroupedThousandRealAvatar.parameters,
		docs: {
			...GroupedThousandRealAvatar.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFlatList: false,\n    sections: perfGroupedSections,\n    renderAvatar: renderDecoratedAvatar\n  }\n}",
				...GroupedThousandRealAvatar.parameters?.docs?.source
			},
			description: {
				story: "The configuration that actually matches a real account: default sections, and avatars carrying\nthe badge decoration tooltip that `RoomAvatarView` renders. This is the story to trust when\njudging whether scrolling is fast, because the others understate per-row cost.",
				...GroupedThousandRealAvatar.parameters?.docs?.description
			}
		}
	};
	GroupedThousandGatedAvatar.parameters = {
		...GroupedThousandGatedAvatar.parameters,
		docs: {
			...GroupedThousandGatedAvatar.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFlatList: false,\n    sections: perfGroupedSections,\n    renderAvatar: renderGatedAvatar\n  }\n}",
				...GroupedThousandGatedAvatar.parameters?.docs?.source
			},
			description: {
				story: "{@link GroupedThousandRealAvatar} with the badge tooltip gated on pointer-over.",
				...GroupedThousandGatedAvatar.parameters?.docs?.description
			}
		}
	};
	__namedExportsOrder = [
		"FlatThousand",
		"GroupedThousand",
		"GroupedHundred",
		"GroupedThousandNoHoverMenu",
		"GroupedThousandRealAvatar",
		"GroupedThousandGatedAvatar"
	];
}))();
export { FlatThousand, GroupedHundred, GroupedThousand, GroupedThousandGatedAvatar, GroupedThousandNoHoverMenu, GroupedThousandRealAvatar, __namedExportsOrder, meta as default };

//# sourceMappingURL=RoomListPerf.stories-PPTxjb4z.js.map