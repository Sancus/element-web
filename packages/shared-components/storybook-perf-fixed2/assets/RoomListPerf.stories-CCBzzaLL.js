import{i as e}from"./dist-BeCe7NoK.js";import{n as t}from"./react-dom-7c1ks7JI.js";import{Xt as n,en as r,wr as i}from"./RoomListItemView-BgJ8m5Px.js";import{n as a,t as o}from"./RoomListView-D7IAr4pj.js";import{a as s,i as c,n as l,r as u,t as d}from"./story-mocks-DtIfhq_H.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{t(),a(),n(),c(),f=i(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=Array.from({length:1e3},(e,t)=>`!room${t}:server`),h=[{id:`chats`,roomIds:m}],g=[{id:`favourites`,roomIds:m.slice(0,50)},{id:`chats`,roomIds:m.slice(50,900)},{id:`low-priority`,roomIds:m.slice(900)}],_=d(m),v=(()=>{let e=new Map;return m.forEach((t,n)=>{let r=u(t,`Room ${n}`,n),i={...r.getSnapshot(),showMoreOptionsMenu:!1,showNotificationMenu:!1};e.set(t,{...r,getSnapshot:()=>i})}),t=>e.get(t)})(),y=({onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:i,getSectionHeaderViewModel:a,updateVisibleRooms:s,updateVisibleFold:c,renderAvatar:l,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:p,changeRoomSection:m,changeSectionOrder:h,onSectionDragStart:g,onSectionDragEnd:_,...v})=>(0,f.jsx)(o,{vm:r(v,{onToggleFilter:e,createChatRoom:t,createRoom:n,getRoomItemViewModel:i,getSectionHeaderViewModel:a,updateVisibleRooms:s,updateVisibleFold:c,closeToast:u,scrollToUnreadActivity:d,setScrollToIndex:p,changeRoomSection:m,changeSectionOrder:h,onSectionDragStart:g,onSectionDragEnd:_}),renderAvatar:l}),b={title:`Room List/RoomListPerf`,component:y,decorators:[e=>(0,f.jsx)(`div`,{style:{width:`320px`,height:`900px`,display:`flex`,flexDirection:`column`},children:(0,f.jsx)(e,{})})],args:{isLoadingRooms:!1,isRoomListEmpty:!1,filterIds:[`unread`,`people`,`rooms`],activeFilterId:void 0,roomListState:{activeRoomIndex:void 0,spaceId:`!space:server`,filterKeys:void 0},sections:h,canCreateRoom:!0,onToggleFilter:p(),createChatRoom:p(),createRoom:p(),getRoomItemViewModel:_,getSectionHeaderViewModel:l(g.map(e=>e.id)),updateVisibleRooms:p(),updateVisibleFold:p(),renderAvatar:s,isFlatList:!0,toast:void 0,closeToast:p(),scrollToUnreadActivity:p(),setScrollToIndex:p(),changeRoomSection:p(),changeSectionOrder:p(),onSectionDragStart:p(),onSectionDragEnd:p()}},x={},S={args:{isFlatList:!1,sections:g}},C={args:{isFlatList:!1,sections:[{id:`favourites`,roomIds:m.slice(0,5)},{id:`chats`,roomIds:m.slice(5,90)},{id:`low-priority`,roomIds:m.slice(90,100)}]}},w={args:{isFlatList:!1,sections:g,getRoomItemViewModel:v}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source},description:{story:`1000 rooms, flat list (no section headers, no drag-and-drop).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections
  }
}`,...S.parameters?.docs?.source},description:{story:`1000 rooms across the three default sections: the configuration users actually ship with.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Control for {@link GroupedThousand}. Virtualization means both render the same number of rows,
so if scrolling costs the same at 100 rooms as at 1000, the cost is per-row rather than per-list.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isFlatList: false,
    sections: perfGroupedSections,
    getRoomItemViewModel: getRoomItemViewModelNoMenus
  }
}`,...w.parameters?.docs?.source},description:{story:`A/B control for {@link GroupedThousand}: identical, minus the per-row hover menu.`,...w.parameters?.docs?.description}}},T=[`FlatThousand`,`GroupedThousand`,`GroupedHundred`,`GroupedThousandNoHoverMenu`]}))();export{x as FlatThousand,C as GroupedHundred,S as GroupedThousand,w as GroupedThousandNoHoverMenu,T as __namedExportsOrder,b as default};