import { c as __toESM, i as __esmMin } from "./dist-DHqTAwVy.js";
import { n as require_react } from "./react-dom-BWFRaAn0.js";
import { Xt as init_viewmodel, c as RoomNotifState, en as useMockedViewModel, l as init_RoomNotifs, n as RoomListItemView, r as init_RoomListItemView, wr as require_jsx_runtime } from "./RoomListItemView-DO4BiWnM.js";
import { i as init_story_mocks, o as renderAvatar } from "./story-mocks-CSJimHsu.js";
//#region .storybook/withViewDocs.ts
/**
* Copies the component description and props documentation from a View's
* `__docgenInfo` (injected at build time by Storybook's react-docgen-typescript
* Vite plugin) onto the story wrapper component.
*
* This lets Storybook's default `extractComponentDescription` pick up the
* View's JSDoc and display per-field descriptions in the ArgTypes table.
*
* **Important:** the wrapper must be defined as a named variable *before*
* being passed here so that react-docgen-typescript can extract its props.
*
* @example
* ```ts
* const MyViewWrapperImpl = (props: MyViewProps) => {
*     const vm = useMockedViewModel(props, {});
*     return <MyView vm={vm} />;
* };
* const MyViewWrapper = withViewDocs(MyViewWrapperImpl, MyView);
* ```
*/
function withViewDocs(wrapper, view) {
	const viewDescription = view.__docgenInfo?.description;
	if (!viewDescription) return wrapper;
	let stored = wrapper.__docgenInfo;
	Object.defineProperty(wrapper, "__docgenInfo", {
		get() {
			return stored;
		},
		set(incoming) {
			stored = {
				...incoming,
				description: incoming.description || viewDescription
			};
		},
		configurable: true,
		enumerable: true
	});
	stored = {
		...stored,
		description: viewDescription
	};
	return wrapper;
}
var init_withViewDocs = __esmMin((() => {}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/default-snapshot.ts
var mockRoom, defaultSnapshot;
var init_default_snapshot = __esmMin((() => {
	init_RoomNotifs();
	mockRoom = { name: "General" };
	defaultSnapshot = {
		id: "!room:server",
		room: mockRoom,
		name: "General",
		isBold: false,
		messagePreview: "Alice: Hey everyone!",
		notification: {
			hasAnyNotificationOrActivity: false,
			isUnsentMessage: false,
			invited: false,
			isMention: false,
			isActivityNotification: false,
			isNotification: false,
			hasUnreadCount: false,
			count: 0,
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
		sections: [
			{
				tag: "m.favourite",
				name: "Favourites",
				isSelected: false
			},
			{
				tag: "element.io.section.work",
				name: "Work with a very long name that should be truncated",
				isSelected: true
			},
			{
				tag: "m.lowpriority",
				name: "Low Priority",
				isSelected: false
			}
		],
		areSectionsEnabled: true
	};
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/mocked-actions.ts
var fn$1, mockedActions;
var init_mocked_actions = __esmMin((() => {
	({fn: fn$1} = __STORYBOOK_MODULE_TEST__);
	mockedActions = {
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
}));
//#endregion
//#region src/room-list/VirtualizedRoomListView/RoomListItemWrapper/RoomListItemView/RoomListItemView.stories.tsx
var import_react, import_jsx_runtime, fn, RoomListItemWrapperImpl, meta, Default, LongContent, Selected, Bold, WithNotification, WithMention, WithVoiceCall, WithVideoCall, Invitation, UnsentMessage, NoMessagePreview, WithHoverMenu, WithoutHoverMenu, WithLargeFont, WithZoom, FirstItem, LastItem, SectionDisabled, WithUserStatus, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_RoomListItemView();
	init_viewmodel();
	init_withViewDocs();
	init_default_snapshot();
	init_story_mocks();
	init_mocked_actions();
	import_jsx_runtime = require_jsx_runtime();
	({fn} = __STORYBOOK_MODULE_TEST__);
	RoomListItemWrapperImpl = ({ onOpenRoom, onMarkAsRead, onMarkAsUnread, onToggleFavorite, onToggleLowPriority, onInvite, onCopyRoomLink, onLeaveRoom, onSetRoomNotifState, onCreateSection, onToggleSection, onRemoveFromSection, isSelected, isFocused, onFocus, isFirstItem, isLastItem, renderAvatar: renderAvatarProp, ...rest }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomListItemView, {
			vm: useMockedViewModel(rest, {
				onOpenRoom,
				onMarkAsRead,
				onMarkAsUnread,
				onToggleFavorite,
				onToggleLowPriority,
				onInvite,
				onCopyRoomLink,
				onLeaveRoom,
				onSetRoomNotifState,
				onCreateSection,
				onToggleSection,
				onRemoveFromSection
			}),
			isSelected,
			isFocused,
			onFocus,
			isFirstItem,
			isLastItem,
			renderAvatar: renderAvatarProp,
			role: "option"
		});
	};
	meta = {
		title: "Room List/RoomListItemView",
		component: withViewDocs(RoomListItemWrapperImpl, RoomListItemView),
		tags: ["autodocs"],
		decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "listbox",
			"aria-label": "Room list",
			style: {
				width: "320px",
				padding: "8px"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {})
		})],
		args: {
			...defaultSnapshot,
			...mockedActions,
			isSelected: false,
			isFocused: false,
			isFirstItem: false,
			isLastItem: false,
			onFocus: fn(),
			renderAvatar
		},
		parameters: { design: {
			type: "figma",
			url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=10800-21153&t=gFDc2D7TMEffSSCo-0"
		} }
	};
	Default = {};
	LongContent = { args: {
		name: "Loooooooooooooooooooooooooooooooooooooong name",
		messagePreview: "Loooooooooooooooooooooooooooooooooooooong preview"
	} };
	Selected = { args: { isSelected: true } };
	Bold = { args: {
		isBold: true,
		name: "Team Updates"
	} };
	WithNotification = { args: {
		isBold: true,
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: false,
			invited: false,
			isMention: false,
			isActivityNotification: false,
			isNotification: true,
			hasUnreadCount: true,
			count: 3,
			muted: false
		}
	} };
	WithMention = { args: {
		isBold: true,
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: false,
			invited: false,
			isMention: true,
			isActivityNotification: false,
			isNotification: true,
			hasUnreadCount: true,
			count: 1,
			muted: false
		}
	} };
	WithVoiceCall = { args: {
		isBold: true,
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: false,
			invited: false,
			isMention: false,
			isActivityNotification: false,
			isNotification: false,
			hasUnreadCount: false,
			count: 0,
			muted: false,
			callType: "voice"
		}
	} };
	WithVideoCall = { args: {
		isBold: true,
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: false,
			invited: false,
			isMention: false,
			isActivityNotification: false,
			isNotification: false,
			hasUnreadCount: false,
			count: 0,
			muted: false,
			callType: "video"
		}
	} };
	Invitation = { args: {
		name: "Secret Project",
		messagePreview: "Bob invited you",
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: false,
			invited: true,
			isMention: false,
			isActivityNotification: false,
			isNotification: false,
			hasUnreadCount: false,
			count: 0,
			muted: false
		}
	} };
	UnsentMessage = { args: {
		messagePreview: "Failed to send message",
		notification: {
			hasAnyNotificationOrActivity: true,
			isUnsentMessage: true,
			invited: false,
			isMention: false,
			isActivityNotification: false,
			isNotification: false,
			hasUnreadCount: false,
			count: 0,
			muted: false
		}
	} };
	NoMessagePreview = { args: { messagePreview: void 0 } };
	WithHoverMenu = { args: { showMoreOptionsMenu: true } };
	WithoutHoverMenu = { args: { showMoreOptionsMenu: false } };
	WithLargeFont = {
		args: { isSelected: true },
		parameters: { docs: { story: {
			inline: false,
			iframeHeight: 170
		} } },
		decorators: [(Story) => {
			(0, import_react.useEffect)(() => {
				const originalFontSize = getComputedStyle(document.documentElement).fontSize;
				document.documentElement.style.setProperty("font-size", "36px");
				return () => {
					document.documentElement.style.setProperty("font-size", originalFontSize);
				};
			}, []);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {});
		}]
	};
	WithZoom = {
		args: { isSelected: true },
		decorators: [(Story, context) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { zoom: 2 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {})
		})]
	};
	FirstItem = { args: {
		isFirstItem: true,
		isSelected: true
	} };
	LastItem = { args: {
		isLastItem: true,
		isSelected: true
	} };
	SectionDisabled = { args: { areSectionsEnabled: false } };
	WithUserStatus = { args: { userStatus: {
		emoji: "🌭",
		text: "Hot"
	} } };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{}",
				...Default.parameters?.docs?.source
			}
		}
	};
	LongContent.parameters = {
		...LongContent.parameters,
		docs: {
			...LongContent.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    name: \"Loooooooooooooooooooooooooooooooooooooong name\",\n    messagePreview: \"Loooooooooooooooooooooooooooooooooooooong preview\"\n  }\n}",
				...LongContent.parameters?.docs?.source
			}
		}
	};
	Selected.parameters = {
		...Selected.parameters,
		docs: {
			...Selected.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isSelected: true\n  }\n}",
				...Selected.parameters?.docs?.source
			}
		}
	};
	Bold.parameters = {
		...Bold.parameters,
		docs: {
			...Bold.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isBold: true,\n    name: \"Team Updates\"\n  }\n}",
				...Bold.parameters?.docs?.source
			}
		}
	};
	WithNotification.parameters = {
		...WithNotification.parameters,
		docs: {
			...WithNotification.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isBold: true,\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: false,\n      invited: false,\n      isMention: false,\n      isActivityNotification: false,\n      isNotification: true,\n      hasUnreadCount: true,\n      count: 3,\n      muted: false\n    }\n  }\n}",
				...WithNotification.parameters?.docs?.source
			}
		}
	};
	WithMention.parameters = {
		...WithMention.parameters,
		docs: {
			...WithMention.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isBold: true,\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: false,\n      invited: false,\n      isMention: true,\n      isActivityNotification: false,\n      isNotification: true,\n      hasUnreadCount: true,\n      count: 1,\n      muted: false\n    }\n  }\n}",
				...WithMention.parameters?.docs?.source
			}
		}
	};
	WithVoiceCall.parameters = {
		...WithVoiceCall.parameters,
		docs: {
			...WithVoiceCall.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isBold: true,\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: false,\n      invited: false,\n      isMention: false,\n      isActivityNotification: false,\n      isNotification: false,\n      hasUnreadCount: false,\n      count: 0,\n      muted: false,\n      callType: \"voice\"\n    }\n  }\n}",
				...WithVoiceCall.parameters?.docs?.source
			}
		}
	};
	WithVideoCall.parameters = {
		...WithVideoCall.parameters,
		docs: {
			...WithVideoCall.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isBold: true,\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: false,\n      invited: false,\n      isMention: false,\n      isActivityNotification: false,\n      isNotification: false,\n      hasUnreadCount: false,\n      count: 0,\n      muted: false,\n      callType: \"video\"\n    }\n  }\n}",
				...WithVideoCall.parameters?.docs?.source
			}
		}
	};
	Invitation.parameters = {
		...Invitation.parameters,
		docs: {
			...Invitation.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    name: \"Secret Project\",\n    messagePreview: \"Bob invited you\",\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: false,\n      invited: true,\n      isMention: false,\n      isActivityNotification: false,\n      isNotification: false,\n      hasUnreadCount: false,\n      count: 0,\n      muted: false\n    }\n  }\n}",
				...Invitation.parameters?.docs?.source
			}
		}
	};
	UnsentMessage.parameters = {
		...UnsentMessage.parameters,
		docs: {
			...UnsentMessage.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    messagePreview: \"Failed to send message\",\n    notification: {\n      hasAnyNotificationOrActivity: true,\n      isUnsentMessage: true,\n      invited: false,\n      isMention: false,\n      isActivityNotification: false,\n      isNotification: false,\n      hasUnreadCount: false,\n      count: 0,\n      muted: false\n    }\n  }\n}",
				...UnsentMessage.parameters?.docs?.source
			}
		}
	};
	NoMessagePreview.parameters = {
		...NoMessagePreview.parameters,
		docs: {
			...NoMessagePreview.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    messagePreview: undefined\n  }\n}",
				...NoMessagePreview.parameters?.docs?.source
			}
		}
	};
	WithHoverMenu.parameters = {
		...WithHoverMenu.parameters,
		docs: {
			...WithHoverMenu.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    showMoreOptionsMenu: true\n  }\n}",
				...WithHoverMenu.parameters?.docs?.source
			}
		}
	};
	WithoutHoverMenu.parameters = {
		...WithoutHoverMenu.parameters,
		docs: {
			...WithoutHoverMenu.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    showMoreOptionsMenu: false\n  }\n}",
				...WithoutHoverMenu.parameters?.docs?.source
			}
		}
	};
	WithLargeFont.parameters = {
		...WithLargeFont.parameters,
		docs: {
			...WithLargeFont.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isSelected: true\n  },\n  // Render the story in an iframe to avoid affecting other story\n  parameters: {\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 170\n      }\n    }\n  },\n  decorators: [Story => {\n    useEffect(() => {\n      const originalFontSize = getComputedStyle(document.documentElement).fontSize;\n      document.documentElement.style.setProperty(\"font-size\", \"36px\");\n      return () => {\n        document.documentElement.style.setProperty(\"font-size\", originalFontSize);\n      };\n    }, []);\n    return <Story />;\n  }]\n}",
				...WithLargeFont.parameters?.docs?.source
			}
		}
	};
	WithZoom.parameters = {
		...WithZoom.parameters,
		docs: {
			...WithZoom.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isSelected: true\n  },\n  decorators: [(Story, context) => <div style={{\n    zoom: 2\n  }}>\n                <Story />\n            </div>]\n}",
				...WithZoom.parameters?.docs?.source
			}
		}
	};
	FirstItem.parameters = {
		...FirstItem.parameters,
		docs: {
			...FirstItem.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isFirstItem: true,\n    isSelected: true\n  }\n}",
				...FirstItem.parameters?.docs?.source
			}
		}
	};
	LastItem.parameters = {
		...LastItem.parameters,
		docs: {
			...LastItem.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    isLastItem: true,\n    isSelected: true\n  }\n}",
				...LastItem.parameters?.docs?.source
			}
		}
	};
	SectionDisabled.parameters = {
		...SectionDisabled.parameters,
		docs: {
			...SectionDisabled.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    areSectionsEnabled: false\n  }\n}",
				...SectionDisabled.parameters?.docs?.source
			}
		}
	};
	WithUserStatus.parameters = {
		...WithUserStatus.parameters,
		docs: {
			...WithUserStatus.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    userStatus: {\n      emoji: \"🌭\",\n      text: \"Hot\"\n    }\n  }\n}",
				...WithUserStatus.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Default",
		"LongContent",
		"Selected",
		"Bold",
		"WithNotification",
		"WithMention",
		"WithVoiceCall",
		"WithVideoCall",
		"Invitation",
		"UnsentMessage",
		"NoMessagePreview",
		"WithHoverMenu",
		"WithoutHoverMenu",
		"WithLargeFont",
		"WithZoom",
		"FirstItem",
		"LastItem",
		"SectionDisabled",
		"WithUserStatus"
	];
}))();
export { Bold, Default, FirstItem, Invitation, LastItem, LongContent, NoMessagePreview, SectionDisabled, Selected, UnsentMessage, WithHoverMenu, WithLargeFont, WithMention, WithNotification, WithUserStatus, WithVideoCall, WithVoiceCall, WithZoom, WithoutHoverMenu, __namedExportsOrder, meta as default };

//# sourceMappingURL=RoomListItemView.stories-C5ZKP7GI.js.map