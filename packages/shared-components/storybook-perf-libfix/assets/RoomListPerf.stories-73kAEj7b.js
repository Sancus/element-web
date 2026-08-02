import{c as e,i as t}from"./dist-BeCe7NoK.js";import{n}from"./react-dom-7c1ks7JI.js";import{Xt as r,en as i,mr as a,on as o,wr as s}from"./RoomListItemView-BzP9ibUv.js";import{n as c,t as l}from"./RoomListView-FDDcpePk.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./story-mocks-DtgKlY3C.js";function g({name:e}){let[t,n]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{"data-testid":`gated-avatar`,style:{position:`relative`,display:`flex`},onMouseMove:()=>n(!0),onMouseLeave:()=>n(!1),children:[u(e),t?(0,v.jsx)(a,{label:`Online`,children:E}):E]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{_=e(n(),1),o(),c(),r(),d(),v=s(),{fn:y}=__STORYBOOK_MODULE_TEST__,b=Array.from({length:1e3},(e,t)=>`!room${t}:server`),x=[{id:`chats`,roomIds:b}],S=[{id:`favourites`,roomIds:b.slice(0,50)},{id:`chats`,roomIds:b.slice(50,900)},{id:`low-priority`,roomIds:b.slice(900)}],C=h(b),w=(()=>{let e=new Map;return b.forEach((t,n)=>{let r=m(t,`Room ${n}`,n),i={...r.getSnapshot(),showMoreOptionsMenu:!1,showNotificationMenu:!1};e.set(t,{...r,getSnapshot:()=>i})}),t=>e.get(t)})(),T=e=>(0,v.jsxs)(`div`,{style:{position:`relative`,display:`flex`},children:[u(e?.name??`Room`),(0,v.jsx)(a,{label:`Online`,children:(0,v.jsx)(`span`,{"aria-label":`Online`,style:{position:`absolute`,right:0,bottom:0,width:`8px`,height:`8px`,borderRadius:`50%`,backgroundColor:`#0DBD8B`}})})]}),E=(0,v.jsx)(`span`,{"aria-label":`Online`,style:{position:`absolute`,right:0,bottom:0,width:`8px`,height:`8px`,borderRadius:`50%`,backgroundColor:`#0DBD8B`}}),D=e=>(0,v.jsx)(g,{name:e?.name??`Room`}),O=({onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:r,getSectionHeaderViewModel:a,updateVisibleRooms:o,updateVisibleFold:s,renderAvatar:c,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:f,changeRoomSection:p,changeSectionOrder:m,onSectionDragStart:h,onSectionDragEnd:g,..._})=>(0,v.jsx)(l,{vm:i(_,{onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:r,getSectionHeaderViewModel:a,updateVisibleRooms:o,updateVisibleFold:s,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:f,changeRoomSection:p,changeSectionOrder:m,onSectionDragStart:h,onSectionDragEnd:g}),renderAvatar:c}),k={title:`Room List/RoomListPerf`,component:O,decorators:[e=>(0,v.jsx)(`div`,{style:{width:`320px`,height:`900px`,display:`flex`,flexDirection:`column`},children:(0,v.jsx)(e,{})})],args:{isLoadingRooms:!1,isRoomListEmpty:!1,filterIds:[`unread`,`people`,`rooms`],activeFilterId:void 0,roomListState:{activeRoomIndex:void 0,spaceId:`!space:server`,filterKeys:void 0},sections:x,canCreateRoom:!0,onToggleFilter:y(),createChatRoom:y(),createRoom:y(),getRoomItemViewModel:C,getSectionHeaderViewModel:f(S.map(e=>e.id)),updateVisibleRooms:y(),updateVisibleFold:y(),renderAvatar:p,isFlatList:!0,toast:void 0,closeToast:y(),scrollToUnreadActivity:y(),setScrollToIndex:y(),changeRoomSection:y(),changeSectionOrder:y(),onSectionDragStart:y(),onSectionDragEnd:y()}},A={},j={args:{isFlatList:!1,sections:S}},M={args:{isFlatList:!1,sections:[{id:`favourites`,roomIds:b.slice(0,5)},{id:`chats`,roomIds:b.slice(5,90)},{id:`low-priority`,roomIds:b.slice(90,100)}]}},N={args:{isFlatList:!1,sections:S,getRoomItemViewModel:w}},P={args:{isFlatList:!1,sections:S,renderAvatar:T}},F={args:{isFlatList:!1,sections:S,renderAvatar:D}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source},description:{story:`1000 rooms, flat list (no section headers, no drag-and-drop).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections
  }
}`,...j.parameters?.docs?.source},description:{story:`1000 rooms across the three default sections: the configuration users actually ship with.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: [{
      id: "favourites",
      roomIds: perfRoomIds.slice(0, 5)
    }, {
      id: "chats",
      roomIds: perfRoomIds.slice(5, 90)
    }, {
      id: "low-priority",
      roomIds: perfRoomIds.slice(90, 100)
    }]
  }
}`,...M.parameters?.docs?.source},description:{story:`Control for {@link GroupedThousand}. Virtualization means both render the same number of rows,
so if scrolling costs the same at 100 rooms as at 1000, the cost is per-row rather than per-list.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    getRoomItemViewModel: getRoomItemViewModelNoMenus
  }
}`,...N.parameters?.docs?.source},description:{story:`A/B control for {@link GroupedThousand}: identical, minus the per-row hover menu.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    renderAvatar: renderDecoratedAvatar
  }
}`,...P.parameters?.docs?.source},description:{story:`The configuration that actually matches a real account: default sections, and avatars carrying
the badge decoration tooltip that \`RoomAvatarView\` renders. This is the story to trust when
judging whether scrolling is fast, because the others understate per-row cost.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    renderAvatar: renderGatedAvatar
  }
}`,...F.parameters?.docs?.source},description:{story:`{@link GroupedThousandRealAvatar} with the badge tooltip gated on pointer-over.`,...F.parameters?.docs?.description}}},I=[`FlatThousand`,`GroupedThousand`,`GroupedHundred`,`GroupedThousandNoHoverMenu`,`GroupedThousandRealAvatar`,`GroupedThousandGatedAvatar`]}))();export{A as FlatThousand,M as GroupedHundred,j as GroupedThousand,F as GroupedThousandGatedAvatar,N as GroupedThousandNoHoverMenu,P as GroupedThousandRealAvatar,I as __namedExportsOrder,k as default};