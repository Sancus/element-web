import{i as e}from"./dist-BeCe7NoK.js";import{n as t}from"./react-dom-7c1ks7JI.js";import{Xt as n,en as r,mr as i,on as a,wr as o}from"./RoomListItemView-BgJ8m5Px.js";import{n as s,t as c}from"./RoomListView-D7IAr4pj.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./story-mocks-DCyzUesh.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{t(),a(),s(),n(),u(),h=o(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=Array.from({length:1e3},(e,t)=>`!room${t}:server`),v=[{id:`chats`,roomIds:_}],y=[{id:`favourites`,roomIds:_.slice(0,50)},{id:`chats`,roomIds:_.slice(50,900)},{id:`low-priority`,roomIds:_.slice(900)}],b=m(_),x=(()=>{let e=new Map;return _.forEach((t,n)=>{let r=p(t,`Room ${n}`,n),i={...r.getSnapshot(),showMoreOptionsMenu:!1,showNotificationMenu:!1};e.set(t,{...r,getSnapshot:()=>i})}),t=>e.get(t)})(),S=e=>(0,h.jsxs)(`div`,{style:{position:`relative`,display:`flex`},children:[l(e?.name??`Room`),(0,h.jsx)(i,{label:`Online`,children:(0,h.jsx)(`span`,{"aria-label":`Online`,style:{position:`absolute`,right:0,bottom:0,width:`8px`,height:`8px`,borderRadius:`50%`,backgroundColor:`#0DBD8B`}})})]}),C=({onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:i,getSectionHeaderViewModel:a,updateVisibleRooms:o,updateVisibleFold:s,renderAvatar:l,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:f,changeRoomSection:p,changeSectionOrder:m,onSectionDragStart:g,onSectionDragEnd:_,...v})=>(0,h.jsx)(c,{vm:r(v,{onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:i,getSectionHeaderViewModel:a,updateVisibleRooms:o,updateVisibleFold:s,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:f,changeRoomSection:p,changeSectionOrder:m,onSectionDragStart:g,onSectionDragEnd:_}),renderAvatar:l}),w={title:`Room List/RoomListPerf`,component:C,decorators:[e=>(0,h.jsx)(`div`,{style:{width:`320px`,height:`900px`,display:`flex`,flexDirection:`column`},children:(0,h.jsx)(e,{})})],args:{isLoadingRooms:!1,isRoomListEmpty:!1,filterIds:[`unread`,`people`,`rooms`],activeFilterId:void 0,roomListState:{activeRoomIndex:void 0,spaceId:`!space:server`,filterKeys:void 0},sections:v,canCreateRoom:!0,onToggleFilter:g(),createChatRoom:g(),createRoom:g(),getRoomItemViewModel:b,getSectionHeaderViewModel:d(y.map(e=>e.id)),updateVisibleRooms:g(),updateVisibleFold:g(),renderAvatar:f,isFlatList:!0,toast:void 0,closeToast:g(),scrollToUnreadActivity:g(),setScrollToIndex:g(),changeRoomSection:g(),changeSectionOrder:g(),onSectionDragStart:g(),onSectionDragEnd:g()}},T={},E={args:{isFlatList:!1,sections:y}},D={args:{isFlatList:!1,sections:[{id:`favourites`,roomIds:_.slice(0,5)},{id:`chats`,roomIds:_.slice(5,90)},{id:`low-priority`,roomIds:_.slice(90,100)}]}},O={args:{isFlatList:!1,sections:y,getRoomItemViewModel:x}},k={args:{isFlatList:!1,sections:y,renderAvatar:S}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`1000 rooms, flat list (no section headers, no drag-and-drop).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections
  }
}`,...E.parameters?.docs?.source},description:{story:`1000 rooms across the three default sections: the configuration users actually ship with.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Control for {@link GroupedThousand}. Virtualization means both render the same number of rows,
so if scrolling costs the same at 100 rooms as at 1000, the cost is per-row rather than per-list.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    getRoomItemViewModel: getRoomItemViewModelNoMenus
  }
}`,...O.parameters?.docs?.source},description:{story:`A/B control for {@link GroupedThousand}: identical, minus the per-row hover menu.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    renderAvatar: renderDecoratedAvatar
  }
}`,...k.parameters?.docs?.source},description:{story:`The configuration that actually matches a real account: default sections, and avatars carrying
the badge decoration tooltip that \`RoomAvatarView\` renders. This is the story to trust when
judging whether scrolling is fast, because the others understate per-row cost.`,...k.parameters?.docs?.description}}},A=[`FlatThousand`,`GroupedThousand`,`GroupedHundred`,`GroupedThousandNoHoverMenu`,`GroupedThousandRealAvatar`]}))();export{T as FlatThousand,D as GroupedHundred,E as GroupedThousand,O as GroupedThousandNoHoverMenu,k as GroupedThousandRealAvatar,A as __namedExportsOrder,w as default};