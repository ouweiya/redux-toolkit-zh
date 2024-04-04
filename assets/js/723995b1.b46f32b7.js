"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7645],{7023:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(4848),t=n(8453);const i={id:"why-rtk-is-redux-today",title:"\u4e3a\u4ec0\u4e48 Redux Toolkit \u662f\u4eca\u5929\u4f7f\u7528 Redux \u7684\u65b9\u5f0f",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core"},o=void 0,s={id:"introduction/why-rtk-is-redux-today",title:"\u4e3a\u4ec0\u4e48 Redux Toolkit \u662f\u4eca\u5929\u4f7f\u7528 Redux \u7684\u65b9\u5f0f",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core",source:"@site/docs/introduction/why-rtk-is-redux-today.md",sourceDirName:"introduction",slug:"/introduction/why-rtk-is-redux-today",permalink:"/redux-toolkit-zh/introduction/why-rtk-is-redux-today",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/why-rtk-is-redux-today.md",tags:[],version:"current",frontMatter:{id:"why-rtk-is-redux-today",title:"\u4e3a\u4ec0\u4e48 Redux Toolkit \u662f\u4eca\u5929\u4f7f\u7528 Redux \u7684\u65b9\u5f0f",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core"},sidebar:"docs",previous:{title:"\u5f00\u59cb\u4f7f\u7528",permalink:"/redux-toolkit-zh/introduction/getting-started"},next:{title:"\u6559\u7a0b\u6982\u89c8",permalink:"/redux-toolkit-zh/tutorials/overview"}},l={},c=[{value:"\u4ec0\u4e48\u662f Redux Toolkit\uff1f",id:"\u4ec0\u4e48\u662f-redux-toolkit",level:2},{value:"Redux Toolkit \u4e0e Redux \u6838\u5fc3\u6709\u4f55\u4e0d\u540c",id:"redux-toolkit-\u4e0e-redux-\u6838\u5fc3\u6709\u4f55\u4e0d\u540c",level:2},{value:"\u4ec0\u4e48\u662f &quot;Redux&quot;\uff1f",id:"\u4ec0\u4e48\u662f-redux",level:3},{value:"Redux \u6838\u5fc3\u505a\u4e86\u4ec0\u4e48\uff1f",id:"redux-\u6838\u5fc3\u505a\u4e86\u4ec0\u4e48",level:3},{value:"Redux Toolkit \u662f\u505a\u4ec0\u4e48\u7684\uff1f",id:"redux-toolkit-\u662f\u505a\u4ec0\u4e48\u7684",level:3},{value:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5e0c\u671b\u4f60\u4f7f\u7528 Redux Toolkit",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5e0c\u671b\u4f60\u4f7f\u7528-redux-toolkit",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}];function x(e){const d={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h2,{id:"\u4ec0\u4e48\u662f-redux-toolkit",children:"\u4ec0\u4e48\u662f Redux Toolkit\uff1f"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"https://redux-toolkit.js.org",children:(0,r.jsx)(d.strong,{children:"Redux Toolkit"})}),"\uff08\u4e5f\u88ab\u7b80\u79f0\u4e3a ",(0,r.jsx)(d.strong,{children:'"RTK"'}),"\uff09\u662f\u6211\u4eec\u5b98\u65b9\u63a8\u8350\u7684\u7f16\u5199 Redux \u903b\u8f91\u7684\u65b9\u6cd5\u3002",(0,r.jsx)(d.code,{children:"@reduxjs/toolkit"})," \u5305\u88c5\u4e86\u6838\u5fc3\u7684 ",(0,r.jsx)(d.code,{children:"redux"})," \u5305\uff0c\u5e76\u5305\u542b\u6211\u4eec\u8ba4\u4e3a\u6784\u5efa Redux \u5e94\u7528\u6240\u5fc5\u9700\u7684 API \u65b9\u6cd5\u548c\u5e38\u89c1\u4f9d\u8d56\u3002Redux Toolkit \u5185\u7f6e\u4e86\u6211\u4eec\u5efa\u8bae\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u7b80\u5316\u4e86\u5927\u591a\u6570 Redux \u4efb\u52a1\uff0c\u9632\u6b62\u4e86\u5e38\u89c1\u9519\u8bef\uff0c\u4f7f\u7f16\u5199 Redux \u5e94\u7528\u66f4\u52a0\u5bb9\u6613\u3002"]}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.strong,{children:"\u5982\u679c\u4f60\u4eca\u5929\u6b63\u5728\u7f16\u5199\u4efb\u4f55 Redux \u903b\u8f91\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 Redux Toolkit \u6765\u7f16\u5199\u90a3\u4e9b\u4ee3\u7801\uff01"})}),"\n",(0,r.jsxs)(d.p,{children:["RTK \u5305\u542b\u4e86\u5e2e\u52a9\u7b80\u5316\u8bb8\u591a\u5e38\u89c1\u7528\u4f8b\u7684\u5b9e\u7528\u5de5\u5177\uff0c\u5305\u62ec",(0,r.jsx)(d.a,{href:"https://redux-toolkit.js.org/api/configureStore",children:"\u8bbe\u7f6e store"}),"\uff0c\n",(0,r.jsx)(d.a,{href:"https://redux-toolkit.js.org/api/createreducer",children:"\u521b\u5efa reducers \u548c\u7f16\u5199\u4e0d\u53ef\u53d8\u7684\u66f4\u65b0\u903b\u8f91"}),"\uff0c\n\u751a\u81f3",(0,r.jsx)(d.a,{href:"https://redux-toolkit.js.org/api/createslice",children:'\u4e00\u6b21\u6027\u521b\u5efa\u6574\u4e2a "slices" \u7684\u72b6\u6001'}),"\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u65e0\u8bba\u4f60\u662f\u521a\u5f00\u59cb\u4f7f\u7528 Redux \u7684\u65b0\u7528\u6237\uff0c\u8fd8\u662f\u60f3\u8981\u7b80\u5316\u73b0\u6709\u5e94\u7528\u7684\u7ecf\u9a8c\u4e30\u5bcc\u7684\u7528\u6237\uff0c",(0,r.jsx)(d.strong,{children:(0,r.jsx)(d.a,{href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})})," \u90fd\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6539\u8fdb\u4f60\u7684 Redux \u4ee3\u7801\u3002"]}),"\n",(0,r.jsxs)(d.admonition,{type:"tip",children:[(0,r.jsx)(d.p,{children:'\u67e5\u770b\u8fd9\u4e9b\u9875\u9762\uff0c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Redux Toolkit \u8fdb\u884c "\u73b0\u4ee3 Redux" \u7f16\u7a0b\uff1a'}),(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts",children:(0,r.jsx)(d.strong,{children:'"Redux \u57fa\u7840" \u6559\u7a0b'})}),'\uff0c\u6559\u4f60\u5982\u4f55\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u4f7f\u7528 Redux Toolkit \u8fdb\u884c "\u6b63\u786e\u7684" Redux \u7f16\u7a0b\uff0c']}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux",children:(0,r.jsx)(d.strong,{children:"Redux \u57fa\u7840\uff0c\u7b2c8\u90e8\u5206\uff1a\u4f7f\u7528 Redux Toolkit \u7684\u73b0\u4ee3 Redux"})}),"\uff0c\u5c55\u793a\u5982\u4f55\u5c06\u6559\u7a0b\u524d\u9762\u90e8\u5206\u7684\u4f4e\u7ea7\u793a\u4f8b\u8f6c\u6362\u4e3a\u73b0\u4ee3 Redux Toolkit \u7b49\u6548\u9879"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"/redux-toolkit-zh/usage/migrating-to-modern-redux",children:(0,r.jsx)(d.strong,{children:"\u4f7f\u7528 Redux\uff1a\u8fc1\u79fb\u5230\u73b0\u4ee3 Redux"})}),"\uff0c\u4ecb\u7ecd\u5982\u4f55\u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u65e7\u7248 Redux \u903b\u8f91\u8fc1\u79fb\u5230\u73b0\u4ee3 Redux \u7b49\u6548\u9879"]}),"\n"]})]}),"\n",(0,r.jsx)(d.h2,{id:"redux-toolkit-\u4e0e-redux-\u6838\u5fc3\u6709\u4f55\u4e0d\u540c",children:"Redux Toolkit \u4e0e Redux \u6838\u5fc3\u6709\u4f55\u4e0d\u540c"}),"\n",(0,r.jsx)(d.h3,{id:"\u4ec0\u4e48\u662f-redux",children:'\u4ec0\u4e48\u662f "Redux"\uff1f'}),"\n",(0,r.jsx)(d.p,{children:'\u9996\u5148\u8981\u95ee\u7684\u662f\uff0c"\u4ec0\u4e48\u662f Redux\uff1f"'}),"\n",(0,r.jsx)(d.p,{children:"Redux \u5b9e\u9645\u4e0a\u662f\uff1a"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:'\u5305\u542b "\u5168\u5c40" \u72b6\u6001\u7684\u5355\u4e00 store'}),"\n",(0,r.jsx)(d.li,{children:"\u5f53\u5e94\u7528\u53d1\u751f\u67d0\u4e9b\u4e8b\u60c5\u65f6\uff0c\u5411 store \u5206\u53d1\u7eaf\u5bf9\u8c61\u64cd\u4f5c"}),"\n",(0,r.jsx)(d.li,{children:"\u7eaf reducer \u51fd\u6570\u67e5\u770b\u8fd9\u4e9b\u64cd\u4f5c\u5e76\u8fd4\u56de\u4e0d\u53ef\u53d8\u66f4\u65b0\u7684\u72b6\u6001"}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46",(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns",children:"\u4f60\u7684 Redux \u4ee3\u7801\u901a\u5e38\u4e5f\u5305\u62ec"}),"\uff1a"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"\u751f\u6210\u8fd9\u4e9b\u64cd\u4f5c\u5bf9\u8c61\u7684\u64cd\u4f5c\u521b\u5efa\u5668"}),"\n",(0,r.jsx)(d.li,{children:"\u542f\u7528\u526f\u4f5c\u7528\u7684\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(d.li,{children:"\u5305\u542b\u6709\u526f\u4f5c\u7528\u7684\u540c\u6b65\u6216\u5f02\u6b65\u903b\u8f91\u7684 Thunk \u51fd\u6570"}),"\n",(0,r.jsx)(d.li,{children:"\u4f7f\u5f97\u53ef\u4ee5\u901a\u8fc7 ID \u67e5\u627e\u9879\u76ee\u7684\u89c4\u8303\u5316\u72b6\u6001"}),"\n",(0,r.jsx)(d.li,{children:"\u4f7f\u7528 Reselect \u5e93\u8fdb\u884c\u6d3e\u751f\u6570\u636e\u4f18\u5316\u7684 Memoized \u9009\u62e9\u5668\u51fd\u6570"}),"\n",(0,r.jsx)(d.li,{children:"\u67e5\u770b\u4f60\u7684\u64cd\u4f5c\u5386\u53f2\u548c\u72b6\u6001\u53d8\u5316\u7684 Redux DevTools \u6269\u5c55"}),"\n",(0,r.jsx)(d.li,{children:"\u64cd\u4f5c\u3001\u72b6\u6001\u548c\u5176\u4ed6\u51fd\u6570\u7684 TypeScript \u7c7b\u578b"}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u6b64\u5916\uff0cRedux \u901a\u5e38\u4e0e React-Redux \u5e93\u4e00\u8d77\u4f7f\u7528\uff0c\u8ba9\u4f60\u7684 React \u7ec4\u4ef6\u80fd\u591f\u4e0e Redux store \u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,r.jsx)(d.h3,{id:"redux-\u6838\u5fc3\u505a\u4e86\u4ec0\u4e48",children:"Redux \u6838\u5fc3\u505a\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,r.jsx)(d.p,{children:"Redux \u6838\u5fc3\u662f\u4e00\u4e2a\u975e\u5e38\u5c0f\u4e14\u6545\u610f\u65e0\u4e3b\u89c1\u7684\u5e93\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5c0f\u7684 API \u539f\u8bed\uff1a"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createStore"})," \u5b9e\u9645\u4e0a\u521b\u5efa\u4e00\u4e2a Redux store"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"combineReducers"})," \u5c06\u591a\u4e2a slice reducers \u5408\u5e76\u6210\u4e00\u4e2a\u66f4\u5927\u7684 reducer"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"applyMiddleware"})," \u5c06\u591a\u4e2a\u4e2d\u95f4\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a store \u589e\u5f3a\u5668"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"compose"})," \u5c06\u591a\u4e2a store \u589e\u5f3a\u5668\u5408\u5e76\u6210\u4e00\u4e2a store \u589e\u5f3a\u5668"]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u7684\u5e94\u7528\u4e2d\u6240\u6709\u5176\u4ed6\u4e0e Redux \u76f8\u5173\u7684\u903b\u8f91\u90fd\u5fc5\u987b\u5b8c\u5168\u7531\u4f60\u81ea\u5df1\u7f16\u5199\u3002"}),"\n",(0,r.jsxs)(d.p,{children:["\u597d\u6d88\u606f\u662f\uff0c\u8fd9\u610f\u5473\u7740 Redux ",(0,r.jsx)(d.em,{children:"\u53ef\u4ee5"})," \u4ee5\u8bb8\u591a\u4e0d\u540c\u7684\u65b9\u5f0f\u4f7f\u7528\u3002\u574f\u6d88\u606f\u662f\uff0c\u6ca1\u6709\u4efb\u4f55\u52a9\u624b\u53ef\u4ee5\u4f7f\u4f60\u7684\u4ee3\u7801\u66f4\u5bb9\u6613\u7f16\u5199\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u4f8b\u5982\uff0creducer \u51fd\u6570\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u3002\u5728 Redux Toolkit \u4e4b\u524d\uff0c\u4f60\u901a\u5e38\u4f1a\u4f7f\u7528 ",(0,r.jsx)(d.code,{children:"switch"})," \u8bed\u53e5\u548c\u624b\u52a8\u66f4\u65b0\u6765\u7f16\u5199\u90a3\u4e2a reducer\u3002\u4f60\u53ef\u80fd\u8fd8\u4f1a\u624b\u52a8\u7f16\u5199\u64cd\u4f5c\u521b\u5efa\u5668\u548c\u64cd\u4f5c\u7c7b\u578b\u5e38\u91cf\uff1a"]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-js",metastring:'title="\u624b\u52a8\u7f16\u5199\u7684\u65e7\u7248 Redux \u4f7f\u7528"',children:"const ADD_TODO = 'ADD_TODO'\nconst TODO_TOGGLED = 'TODO_TOGGLED'\n\nexport const addTodo = (text) => ({\n  type: ADD_TODO,\n  payload: { text, id: nanoid() },\n})\n\nexport const todoToggled = (id) => ({\n  type: TODO_TOGGLED,\n  payload: { id },\n})\n\nexport const todosReducer = (state = [], action) => {\n  switch (action.type) {\n    case ADD_TODO:\n      return state.concat({\n        id: action.payload.id,\n        text: action.payload.text,\n        completed: false,\n      })\n    case TODO_TOGGLED:\n      return state.map((todo) => {\n        if (todo.id !== action.payload.id) return todo\n\n        return {\n          ...todo,\n          completed: !todo.completed,\n        }\n      })\n    default:\n      return state\n  }\n}\n"})}),"\n",(0,r.jsxs)(d.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u5e76\u6ca1\u6709\u7279\u522b\u4f9d\u8d56 ",(0,r.jsx)(d.code,{children:"redux"})," \u6838\u5fc3\u5e93\u7684\u4efb\u4f55 API\u3002\u4f46\u662f\uff0c\u8fd9\u662f\u9700\u8981\u7f16\u5199\u7684\u5927\u91cf\u4ee3\u7801\u3002\u4e0d\u53ef\u53d8\u7684\u66f4\u65b0\u9700\u8981\u5927\u91cf\u7684\u624b\u5199\u5bf9\u8c61\u6269\u5c55\u548c\u6570\u7ec4\u64cd\u4f5c\uff0c\u800c\u4e14\u5f88\u5bb9\u6613\u5728\u8fc7\u7a0b\u4e2d\u72af\u9519\u8bef\u5e76\u610f\u5916\u5730\u6539\u53d8\u72b6\u6001\uff08\u8fd9\u603b\u662f Redux bugs \u7684\u4e00\u5927\u539f\u56e0\uff01\uff09\u3002\u867d\u7136\u4e0d\u662f\u4e25\u683c\u8981\u6c42\uff0c\u4f46\u901a\u5e38\u4f1a\u5c06\u4e00\u4e2a\u7279\u6027\u7684\u4ee3\u7801\u5206\u6563\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5982 ",(0,r.jsx)(d.code,{children:"actions/todos.js"}),"\uff0c",(0,r.jsx)(d.code,{children:"constants/todos.js"})," \u548c ",(0,r.jsx)(d.code,{children:"reducers/todos.js"}),"\u3002"]}),"\n",(0,r.jsx)(d.p,{children:"\u6b64\u5916\uff0cstore \u7684\u8bbe\u7f6e\u901a\u5e38\u9700\u8981\u4e00\u7cfb\u5217\u6b65\u9aa4\u6765\u6dfb\u52a0\u5e38\u7528\u7684\u4e2d\u95f4\u4ef6\uff0c\u5982 thunks\uff0c\u5e76\u542f\u7528 Redux DevTools \u6269\u5c55\u7684\u652f\u6301\uff0c\u5c3d\u7ba1\u8fd9\u4e9b\u90fd\u662f\u51e0\u4e4e\u6bcf\u4e2a Redux \u5e94\u7528\u90fd\u4f1a\u4f7f\u7528\u7684\u6807\u51c6\u5de5\u5177\u3002"}),"\n",(0,r.jsx)(d.h3,{id:"redux-toolkit-\u662f\u505a\u4ec0\u4e48\u7684",children:"Redux Toolkit \u662f\u505a\u4ec0\u4e48\u7684\uff1f"}),"\n",(0,r.jsx)(d.p,{children:"\u867d\u7136\u8fd9\u4e9b\u539f\u672c\u662f Redux \u6587\u6863\u4e2d\u5c55\u793a\u7684\u6a21\u5f0f\uff0c\u4f46\u4e0d\u5e78\u7684\u662f\uff0c\u5b83\u4eec\u9700\u8981\u5927\u91cf\u7684\u5197\u957f\u548c\u91cd\u590d\u7684\u4ee3\u7801\u3002\u5927\u90e8\u5206\u7684\u6837\u677f\u4ee3\u7801\u5e76\u4e0d\u662f\u4f7f\u7528 Redux \u5fc5\u8981\u7684\u3002\u6b64\u5916\uff0c\u6837\u677f\u4ee3\u7801\u5bfc\u81f4\u4e86\u66f4\u591a\u7684\u9519\u8bef\u673a\u4f1a\u3002"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:'\u6211\u4eec\u7279\u522b\u521b\u5efa\u4e86 Redux Toolkit \u6765\u6d88\u9664\u624b\u5199 Redux \u903b\u8f91\u7684 "\u6837\u677f"\uff0c\u9632\u6b62\u5e38\u89c1\u9519\u8bef\uff0c\u5e76\u63d0\u4f9b\u7b80\u5316\u6807\u51c6 Redux \u4efb\u52a1\u7684 API'}),"\u3002"]}),"\n",(0,r.jsx)(d.p,{children:"Redux Toolkit \u4ece\u4e24\u4e2a\u5173\u952e API \u5f00\u59cb\uff0c\u7b80\u5316\u4e86\u4f60\u5728\u6bcf\u4e2a Redux \u5e94\u7528\u4e2d\u6700\u5e38\u505a\u7684\u4e8b\u60c5\uff1a"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"configureStore"})," \u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u914d\u7f6e\u826f\u597d\u7684 Redux \u5b58\u50a8\uff0c\u5305\u62ec\u7ec4\u5408 reducers\uff0c\u6dfb\u52a0 thunk \u4e2d\u95f4\u4ef6\uff0c\u5e76\u8bbe\u7f6e Redux DevTools \u96c6\u6210\u3002\u5b83\u6bd4 ",(0,r.jsx)(d.code,{children:"createStore"})," \u66f4\u5bb9\u6613\u914d\u7f6e\uff0c\u56e0\u4e3a\u5b83\u63a5\u53d7\u547d\u540d\u7684\u9009\u9879\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createSlice"})," \u8ba9\u4f60\u7f16\u5199\u4f7f\u7528 ",(0,r.jsx)(d.a,{href:"https://immerjs.github.io/immer/",children:"Immer \u5e93"}),' \u7684 reducers\uff0c\u4ee5\u4fbf\u4f7f\u7528 "mutating" JS \u8bed\u6cd5\uff08\u5982 ',(0,r.jsx)(d.code,{children:"state.value = 123"}),"\uff09\u7f16\u5199\u4e0d\u53ef\u53d8\u66f4\u65b0\uff0c\u65e0\u9700\u6269\u5c55\u3002\u5b83\u8fd8\u4f1a\u4e3a\u6bcf\u4e2a reducer \u81ea\u52a8\u751f\u6210 action \u521b\u5efa\u51fd\u6570\uff0c\u5e76\u6839\u636e\u4f60\u7684 reducer \u7684\u540d\u79f0\u5728\u5185\u90e8\u751f\u6210 action \u7c7b\u578b\u5b57\u7b26\u4e32\u3002\u6700\u540e\uff0c\u5b83\u4e0e TypeScript \u914d\u5408\u5f97\u5f88\u597d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u8fd9\u610f\u5473\u7740\u4f60\u7f16\u5199\u7684\u4ee3\u7801\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u3002\u4f8b\u5982\uff0c\u540c\u6837\u7684 todos reducer \u53ef\u4ee5\u662f\uff1a"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-js",metastring:'title="features/todos/todosSlice.js"',children:"import { createSlice } from '@reduxjs/toolkit'\n\nconst todosSlice = createSlice({\n  name: 'todos',\n  initialState: [],\n  reducers: {\n    todoAdded(state, action) {\n      state.push({\n        id: action.payload.id,\n        text: action.payload.text,\n        completed: false,\n      })\n    },\n    todoToggled(state, action) {\n      const todo = state.find((todo) => todo.id === action.payload)\n      todo.completed = !todo.completed\n    },\n  },\n})\n\nexport const { todoAdded, todoToggled } = todosSlice.actions\nexport default todosSlice.reducer\n"})}),"\n",(0,r.jsx)(d.p,{children:"\u6240\u6709\u7684 action \u521b\u5efa\u8005\u548c action \u7c7b\u578b\u90fd\u662f\u81ea\u52a8\u751f\u6210\u7684\uff0creducer \u4ee3\u7801\u66f4\u77ed\uff0c\u66f4\u5bb9\u6613\u7406\u89e3\u3002\u6bcf\u79cd\u60c5\u51b5\u4e0b\u5b9e\u9645\u66f4\u65b0\u7684\u5185\u5bb9\u4e5f\u66f4\u6e05\u6670\u3002"}),"\n",(0,r.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(d.code,{children:"configureStore"}),"\uff0c\u5b58\u50a8\u8bbe\u7f6e\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-js",metastring:'title="app/store.js"',children:"import { configureStore } from '@reduxjs/toolkit'\nimport todosReducer from '../features/todos/todosSlice'\nimport filtersReducer from '../features/filters/filtersSlice'\n\nexport const store = configureStore({\n  reducer: {\n    todos: todosReducer,\n    filters: filtersReducer,\n  },\n})\n"})}),"\n",(0,r.jsxs)(d.p,{children:["\u6ce8\u610f\uff0c",(0,r.jsxs)(d.strong,{children:["\u8fd9\u4e00\u4e2a ",(0,r.jsx)(d.code,{children:"configureStore"})," \u8c03\u7528\u81ea\u52a8\u5b8c\u6210\u4e86\u4f60\u901a\u5e38\u9700\u8981\u624b\u52a8\u5b8c\u6210\u7684\u6240\u6709\u8bbe\u7f6e\u5de5\u4f5c"]}),"\uff1a"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["slice reducers \u81ea\u52a8\u4f20\u9012\u7ed9 ",(0,r.jsx)(d.code,{children:"combineReducers()"})]}),"\n",(0,r.jsxs)(d.li,{children:["\u81ea\u52a8\u6dfb\u52a0\u4e86 ",(0,r.jsx)(d.code,{children:"redux-thunk"})," \u4e2d\u95f4\u4ef6"]}),"\n",(0,r.jsx)(d.li,{children:"\u6dfb\u52a0\u4e86\u7528\u4e8e\u6355\u83b7\u610f\u5916\u7a81\u53d8\u7684\u5f00\u53d1\u6a21\u5f0f\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(d.li,{children:"\u81ea\u52a8\u8bbe\u7f6e\u4e86 Redux DevTools \u6269\u5c55"}),"\n",(0,r.jsx)(d.li,{children:"\u4e2d\u95f4\u4ef6\u548c DevTools \u589e\u5f3a\u5668\u88ab\u7ec4\u5408\u5728\u4e00\u8d77\u5e76\u6dfb\u52a0\u5230\u5b58\u50a8\u4e2d"}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["\u540c\u65f6\uff0c",(0,r.jsxs)(d.strong,{children:[(0,r.jsx)(d.code,{children:"configureStore"})," \u63d0\u4f9b\u4e86\u9009\u9879\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u4efb\u4f55\u8fd9\u4e9b\u9ed8\u8ba4\u884c\u4e3a"]}),"\uff08\u5982\u5173\u95ed thunks \u548c\u6dfb\u52a0 sagas\uff0c\u6216\u5728\u751f\u4ea7\u4e2d\u7981\u7528 DevTools\uff09\uff0c"]}),"\n",(0,r.jsx)(d.p,{children:"\u4ece\u90a3\u91cc\uff0cRedux Toolkit \u5305\u62ec\u5176\u4ed6\u5e38\u89c1 Redux \u4efb\u52a1\u7684 API\uff1a"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createAsyncThunk"}),'\uff1a\u62bd\u8c61\u4e86\u6807\u51c6\u7684 "\u5728\u5f02\u6b65\u8bf7\u6c42\u524d\u540e\u5206\u6d3e\u64cd\u4f5c" \u6a21\u5f0f']}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createEntityAdapter"}),"\uff1a\u9884\u6784\u5efa\u7684 reducers \u548c\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u5bf9\u89c4\u8303\u5316\u72b6\u6001\u8fdb\u884c CRUD \u64cd\u4f5c"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createSelector"}),"\uff1a\u7528\u4e8e memoized \u9009\u62e9\u5668\u7684\u6807\u51c6 Reselect API \u7684\u91cd\u65b0\u5bfc\u51fa"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"createListenerMiddleware"}),"\uff1a\u4e00\u4e2a\u526f\u4f5c\u7528\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u54cd\u5e94\u5206\u6d3e\u7684\u64cd\u4f5c\u8fd0\u884c\u903b\u8f91"]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:['\u6700\u540e\uff0cRTK \u5305\u8fd8\u5305\u62ec "RTK Query"\uff0c\u8fd9\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6570\u636e\u83b7\u53d6\u548c\u7f13\u5b58\u89e3\u51b3\u65b9\u6848\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u53ef\u9009 ',(0,r.jsx)(d.code,{children:"@reduxjs/toolkit/query"})," \u5165\u53e3\u70b9\u3002\u5b83\u8ba9\u4f60\u5b9a\u4e49\u7aef\u70b9\uff08REST\uff0cGraphQL\uff0c\u6216\u4efb\u4f55\u5f02\u6b65\u51fd\u6570\uff09\uff0c\u5e76\u751f\u6210\u4e00\u4e2a reducer \u548c\u4e2d\u95f4\u4ef6\uff0c\u5b8c\u5168\u7ba1\u7406\u83b7\u53d6\u6570\u636e\uff0c\u66f4\u65b0\u52a0\u8f7d\u72b6\u6001\uff0c\u548c\u7f13\u5b58\u7ed3\u679c\u3002\u5b83\u8fd8\u81ea\u52a8\u751f\u6210\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7684 React \u94a9\u5b50\u6765\u83b7\u53d6\u6570\u636e\uff0c\u5982 ",(0,r.jsx)(d.code,{children:"const { data, isFetching} = useGetPokemonQuery('pikachu')"})]}),"\n",(0,r.jsxs)(d.p,{children:["\u8fd9\u4e9b API \u6bcf\u4e00\u4e2a\u90fd\u662f\u5b8c\u5168\u53ef\u9009\u7684\uff0c\u8bbe\u8ba1\u7528\u4e8e\u7279\u5b9a\u7684\u4f7f\u7528\u573a\u666f\uff0c",(0,r.jsx)(d.strong,{children:"\u4f60\u53ef\u4ee5\u6311\u9009\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u5b9e\u9645\u4f7f\u7528\u54ea\u4e9b API"}),"\u3002\u4f46\u662f\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u662f\u5f3a\u70c8\u63a8\u8350\u7684\uff0c\u4ee5\u5e2e\u52a9\u5b8c\u6210\u8fd9\u4e9b\u4efb\u52a1\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u6ce8\u610f\uff0c",(0,r.jsx)(d.strong,{children:'Redux Toolkit \u4ecd\u7136\u662f "Redux"\uff01'})," \u4ecd\u7136\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u5b58\u50a8\uff0c\u7528\u4e8e\u66f4\u65b0\u7684\u5206\u6d3e\u64cd\u4f5c\u5bf9\u8c61\uff0c\u4ee5\u53ca\u4e0d\u53ef\u53d8\u66f4\u65b0\u72b6\u6001\u7684 reducers\uff0c\u52a0\u4e0a\u7f16\u5199\u5f02\u6b65\u903b\u8f91\u7684 thunks\uff0c\u7ba1\u7406\u89c4\u8303\u5316\u72b6\u6001\uff0c\u4f7f\u7528 TypeScript \u7c7b\u578b\u5316\u4f60\u7684\u4ee3\u7801\uff0c\u548c\u4f7f\u7528 DevTools \u7684\u80fd\u529b\u3002",(0,r.jsx)(d.strong,{children:"\u53ea\u662f\u4f60\u9700\u8981\u7f16\u5199\u7684\u4ee3\u7801\u5c11\u4e86\u5f88\u591a\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u5374\u662f\u4e00\u6837\u7684\uff01"})]}),"\n",(0,r.jsx)(d.h2,{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5e0c\u671b\u4f60\u4f7f\u7528-redux-toolkit",children:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u5e0c\u671b\u4f60\u4f7f\u7528 Redux Toolkit"}),"\n",(0,r.jsx)(d.p,{children:"\u4f5c\u4e3a Redux \u7684\u7ef4\u62a4\u8005\uff0c\u6211\u4eec\u7684\u89c2\u70b9\u662f\uff1a"}),"\n",(0,r.jsx)(d.admonition,{type:"tip",children:(0,r.jsx)(d.p,{children:(0,r.jsxs)(d.strong,{children:["\u6211\u4eec\u5e0c\u671b ",(0,r.jsx)(d.em,{children:"\u6240\u6709"})," \u7684 Redux \u7528\u6237\u90fd\u4f7f\u7528 Redux Toolkit \u6765\u7f16\u5199\u4ed6\u4eec\u7684 Redux \u4ee3\u7801\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u7b80\u5316\u4f60\u7684\u4ee3\u7801 ",(0,r.jsx)(d.em,{children:"\u5e76\u4e14"})," \u6d88\u9664\u8bb8\u591a\u5e38\u89c1\u7684 Redux \u9519\u8bef\u548c bug\uff01"]})})}),"\n",(0,r.jsxs)(d.p,{children:['\u65e9\u671f Redux \u6a21\u5f0f\u7684 "\u6837\u677f" \u548c\u590d\u6742\u6027\u4ece\u6765\u90fd\u4e0d\u662f Redux \u7684 ',(0,r.jsx)(d.em,{children:"\u5fc5\u8981"})," \u90e8\u5206\u3002\u8fd9\u4e9b\u6a21\u5f0f\u4e4b\u6240\u4ee5\u5b58\u5728\uff0c\u662f\u56e0\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:'\u539f\u59cb\u7684 "Flux \u67b6\u6784" \u4f7f\u7528\u4e86\u4e00\u4e9b\u76f8\u540c\u7684\u65b9\u6cd5'}),"\n",(0,r.jsx)(d.li,{children:"\u65e9\u671f\u7684 Redux \u6587\u6863\u5c55\u793a\u4e86\u50cf action \u7c7b\u578b\u5e38\u91cf\u8fd9\u6837\u7684\u4e1c\u897f\uff0c\u4ee5\u4fbf\u5c06\u4ee3\u7801\u6309\u7c7b\u578b\u5206\u9694\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d"}),"\n",(0,r.jsx)(d.li,{children:"JavaScript \u9ed8\u8ba4\u662f\u4e00\u79cd\u53ef\u53d8\u7684\u8bed\u8a00\uff0c\u7f16\u5199\u4e0d\u53ef\u53d8\u7684\u66f4\u65b0\u9700\u8981\u624b\u52a8\u7684\u5bf9\u8c61\u6269\u5c55\u548c\u6570\u7ec4\u66f4\u65b0"}),"\n",(0,r.jsx)(d.li,{children:"Redux \u6700\u521d\u53ea\u7528\u4e86\u51e0\u5468\u7684\u65f6\u95f4\u5c31\u88ab\u6784\u5efa\u51fa\u6765\uff0c\u800c\u4e14\u6709\u610f\u8bbe\u8ba1\u6210\u53ea\u6709\u51e0\u4e2a API \u539f\u8bed"}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u6b64\u5916\uff0cRedux \u793e\u533a\u91c7\u7528\u4e86\u4e00\u4e9b\u7279\u5b9a\u7684\u65b9\u6cd5\uff0c\u589e\u52a0\u4e86\u989d\u5916\u7684\u6837\u677f\uff1a"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["\u5f3a\u8c03\u4f7f\u7528 ",(0,r.jsx)(d.code,{children:"redux-saga"})," \u4e2d\u95f4\u4ef6\u4f5c\u4e3a\u7f16\u5199\u526f\u4f5c\u7528\u7684\u5e38\u89c1\u65b9\u6cd5"]}),"\n",(0,r.jsx)(d.li,{children:"\u575a\u6301\u624b\u5199 Redux action \u5bf9\u8c61\u7684 TS \u7c7b\u578b\uff0c\u5e76\u521b\u5efa\u8054\u5408\u7c7b\u578b\u4ee5\u9650\u5236\u5728\u7c7b\u578b\u7ea7\u522b\u53ef\u4ee5\u5206\u6d3e\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["\u591a\u5e74\u6765\uff0c\u6211\u4eec\u770b\u5230\u4e86\u4eba\u4eec\u5b9e\u9645\u4e0a\u5982\u4f55\u4f7f\u7528 Redux\u3002\u6211\u4eec\u770b\u5230\u4e86\u793e\u533a\u5982\u4f55\u4e3a\u751f\u6210 action \u7c7b\u578b\u548c\u521b\u5efa\u8005\u3001\u5f02\u6b65\u903b\u8f91\u548c\u526f\u4f5c\u7528\u3001\u6570\u636e\u83b7\u53d6\u7b49\u4efb\u52a1\u7f16\u5199\u4e86\u6570\u767e\u4e2a\u9644\u52a0\u5e93\u3002\u6211\u4eec\u4e5f\u770b\u5230\u4e86\u4e00\u76f4\u7ed9\u6211\u4eec\u7684\u7528\u6237\u5e26\u6765\u75db\u82e6\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u610f\u5916\u5730\u7a81\u53d8\u72b6\u6001\uff0c\u53ea\u662f\u4e3a\u4e86\u505a\u4e00\u4e2a\u7b80\u5355\u7684\u72b6\u6001\u66f4\u65b0\u5c31\u9700\u8981\u7f16\u5199\u51e0\u5341\u884c\u4ee3\u7801\uff0c\u4ee5\u53ca\u5728\u8ffd\u8e2a\u4ee3\u7801\u5e93\u5982\u4f55\u7ec4\u5408\u5728\u4e00\u8d77\u65f6\u9047\u5230\u56f0\u96be\u3002\u6211\u4eec\u5e2e\u52a9\u4e86\u6570\u5343\u4e2a\u8bd5\u56fe\u5b66\u4e60\u548c\u4f7f\u7528 Redux \u7684\u7528\u6237\uff0c\u4ed6\u4eec\u52aa\u529b\u7406\u89e3\u6240\u6709\u7684\u90e8\u5206\u662f\u5982\u4f55\u7ec4\u5408\u5728\u4e00\u8d77\u7684\uff0c\u5bf9\u4ed6\u4eec\u5fc5\u987b\u7f16\u5199\u7684\u6982\u5ff5\u6570\u91cf\u548c\u989d\u5916\u4ee3\u7801\u611f\u5230\u56f0\u60d1\u3002\u6211\u4eec ",(0,r.jsx)(d.em,{children:"\u77e5\u9053"})," \u6211\u4eec\u7684\u7528\u6237\u9762\u4e34\u4ec0\u4e48\u95ee\u9898\u3002"]}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.strong,{children:"\u6211\u4eec\u7279\u522b\u8bbe\u8ba1\u4e86 Redux Toolkit \u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff01"})}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u5c06\u5b58\u50a8\u8bbe\u7f6e\u7b80\u5316\u4e3a\u4e00\u4e2a\u6e05\u6670\u7684\u51fd\u6570\u8c03\u7528\uff0c\u540c\u65f6\u4fdd\u7559\u4e86\u5982\u679c\u9700\u8981\u7684\u8bdd\u5b8c\u5168\u914d\u7f6e\u5b58\u50a8\u9009\u9879\u7684\u80fd\u529b"}),"\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u6d88\u9664\u4e86\u610f\u5916\u7684\u7a81\u53d8\uff0c\u8fd9\u4e00\u76f4\u662f Redux bug \u7684\u7b2c\u4e00\u5927\u539f\u56e0"}),"\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u6d88\u9664\u4e86\u624b\u52a8\u7f16\u5199\u4efb\u4f55 action \u521b\u5efa\u8005\u6216 action \u7c7b\u578b\u7684\u9700\u8981"}),"\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u6d88\u9664\u4e86\u7f16\u5199\u624b\u52a8\u548c\u5bb9\u6613\u51fa\u9519\u7684\u4e0d\u53ef\u53d8\u66f4\u65b0\u903b\u8f91\u7684\u9700\u8981"}),"\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u4f7f\u5f97\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7f16\u5199 Redux \u7279\u6027\u7684\u4ee3\u7801\u53d8\u5f97\u5bb9\u6613\uff0c\u800c\u4e0d\u662f\u5c06\u5176\u5206\u6563\u5728\u591a\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d"}),"\n",(0,r.jsx)(d.li,{children:"Redux Toolkit \u63d0\u4f9b\u4e86\u4f18\u79c0\u7684 TS \u652f\u6301\uff0c\u5176 API \u8bbe\u8ba1\u4e3a\u63d0\u4f9b\u4f18\u79c0\u7684\u7c7b\u578b\u5b89\u5168\u6027\uff0c\u5e76\u6700\u5c0f\u5316\u4f60\u5728\u4ee3\u7801\u4e2d\u9700\u8981\u5b9a\u4e49\u7684\u7c7b\u578b\u6570\u91cf"}),"\n",(0,r.jsxs)(d.li,{children:["RTK Query \u53ef\u4ee5\u6d88\u9664\u7f16\u5199 ",(0,r.jsx)(d.em,{children:"\u4efb\u4f55"})," thunk\uff0creducer\uff0caction \u521b\u5efa\u8005\uff0c\u6216\u7ba1\u7406\u83b7\u53d6\u6570\u636e\u548c\u8ddf\u8e2a\u52a0\u8f7d\u72b6\u6001\u7684 effect hook \u7684\u9700\u8981"]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u56e0\u6b64\uff1a"}),"\n",(0,r.jsx)(d.admonition,{type:"tip",children:(0,r.jsx)(d.p,{children:(0,r.jsxs)(d.strong,{children:["\u6211\u4eec\u7279\u522b\u63a8\u8350\u6211\u4eec\u7684\u7528\u6237 ",(0,r.jsx)(d.em,{children:"\u5e94\u8be5"})," \u4f7f\u7528 Redux Toolkit\uff08",(0,r.jsx)(d.code,{children:"@reduxjs/toolkit"})," \u5305\uff09\uff0c\u5e76\u4e14 ",(0,r.jsx)(d.em,{children:"\u4e0d\u5e94\u8be5"})," \u5728\u4eca\u5929\u7684\u4efb\u4f55\u65b0\u7684 Redux \u4ee3\u7801\u4e2d\u4f7f\u7528\u65e7\u7248\u7684 ",(0,r.jsx)(d.code,{children:"redux"})," \u6838\u5fc3\u5305\uff01"]})})}),"\n",(0,r.jsxs)(d.p,{children:["\u5373\u4f7f\u5bf9\u4e8e\u73b0\u6709\u7684\u5e94\u7528\uff0c\u6211\u4eec\u4e5f\u63a8\u8350\u81f3\u5c11\u5c06 ",(0,r.jsx)(d.code,{children:"createStore"})," \u5207\u6362\u4e3a ",(0,r.jsx)(d.code,{children:"configureStore"}),"\uff0c\u56e0\u4e3a\u5f00\u53d1\u6a21\u5f0f\u4e2d\u95f4\u4ef6\u4e5f\u5c06\u5e2e\u52a9\u4f60\u6355\u83b7\u73b0\u6709\u4ee3\u7801\u5e93\u4e2d\u7684\u610f\u5916\u7a81\u53d8\u548c\u53ef\u5e8f\u5217\u5316\u9519\u8bef\u3002\u6211\u4eec\u4e5f\u5e0c\u671b\u9f13\u52b1\u4f60\u5c06\u4f60\u6700\u5e38\u4f7f\u7528\u7684 reducer\uff08\u4ee5\u53ca\u4f60\u5c06\u6765\u7f16\u5199\u7684\u4efb\u4f55 reducer\uff09\u5207\u6362\u4e3a ",(0,r.jsx)(d.code,{children:"createSlice"})," - \u4ee3\u7801\u5c06\u66f4\u77ed\uff0c\u66f4\u5bb9\u6613\u7406\u89e3\uff0c\u5b89\u5168\u6027\u7684\u63d0\u5347\u5c06\u4e3a\u4f60\u8282\u7701\u65f6\u95f4\u548c\u7cbe\u529b\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsxs)(d.strong,{children:[(0,r.jsx)(d.code,{children:"redux"})," \u6838\u5fc3\u5305\u4ecd\u7136\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u4eca\u5929\u6211\u4eec\u8ba4\u4e3a\u5b83\u5df2\u7ecf\u8fc7\u65f6"]}),"\u3002\u6240\u6709\u7684 API \u4e5f\u90fd\u4ece ",(0,r.jsx)(d.code,{children:"@reduxjs/toolkit"})," \u4e2d\u91cd\u65b0\u5bfc\u51fa\uff0c",(0,r.jsx)(d.code,{children:"configureStore"})," \u505a\u4e86 ",(0,r.jsx)(d.code,{children:"createStore"})," \u6240\u505a\u7684\u6240\u6709\u4e8b\u60c5\uff0c\u4f46\u5177\u6709\u66f4\u597d\u7684\u9ed8\u8ba4\u884c\u4e3a\u548c\u53ef\u914d\u7f6e\u6027\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u7406\u89e3\u4f4e\u7ea7\u6982\u5ff5 ",(0,r.jsx)(d.em,{children:"\u662f"})," \u6709\u7528\u7684\uff0c\u8fd9\u6837\u4f60\u5c31\u80fd\u66f4\u597d\u5730\u7406\u89e3 Redux Toolkit \u4e3a\u4f60\u505a\u4e86\u4ec0\u4e48\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48",(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/fundamentals/part-1-overview",children:"\u201cRedux \u57fa\u7840\u201d\u6559\u7a0b\u5c55\u793a\u4e86 Redux \u5982\u4f55\u5de5\u4f5c\uff0c\u6ca1\u6709\u4efb\u4f55\u62bd\u8c61"}),"\u3002",(0,r.jsx)(d.em,{children:"\u4f46\u662f"}),"\uff0c\u5b83\u4ec5\u4ec5\u4f5c\u4e3a\u4e00\u4e2a\u5b66\u4e60\u5de5\u5177\u5c55\u793a\u4e86\u8fd9\u4e9b\u4f8b\u5b50\uff0c\u5e76\u6700\u540e\u5c55\u793a\u4e86 Redux Toolkit \u5982\u4f55\u7b80\u5316\u65e7\u7684\u624b\u5199 Redux \u4ee3\u7801\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u5355\u72ec\u4f7f\u7528 ",(0,r.jsx)(d.code,{children:"redux"})," \u6838\u5fc3\u5305\uff0c\u4f60\u7684\u4ee3\u7801\u5c06\u7ee7\u7eed\u5de5\u4f5c\u3002",(0,r.jsxs)(d.strong,{children:["\u4f46\u662f\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5207\u6362\u5230 ",(0,r.jsx)(d.code,{children:"@reduxjs/toolkit"}),"\uff0c\u5e76\u66f4\u65b0\u4f60\u7684\u4ee3\u7801\u4ee5\u4f7f\u7528 Redux Toolkit API\uff01"]})]}),"\n",(0,r.jsx)(d.h2,{id:"\u66f4\u591a\u4fe1\u606f",children:"\u66f4\u591a\u4fe1\u606f"}),"\n",(0,r.jsx)(d.p,{children:"\u67e5\u770b\u8fd9\u4e9b\u6587\u6863\u9875\u9762\u548c\u535a\u5ba2\u6587\u7ae0\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/essentials/part-2-app-structure",children:"Redux \u57fa\u7840\uff1aRedux Toolkit \u5e94\u7528\u7ed3\u6784"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux",children:"Redux \u57fa\u7840\uff1a\u73b0\u4ee3 Redux \u4e0e Redux Toolkit"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://redux.js.org/style-guide/",children:"Redux \u98ce\u683c\u6307\u5357\uff1a\u6700\u4f73\u5b9e\u8df5\u548c\u63a8\u8350"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://blog.isquaredsoftware.com/2022/06/presentations-modern-redux-rtk/",children:"\u6f14\u793a\uff1a\u73b0\u4ee3 Redux \u4e0e Redux Toolkit"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://blog.isquaredsoftware.com/2019/10/redux-toolkit-1.0/",children:"Mark Erikson\uff1aRedux Toolkit 1.0 \u516c\u544a\u548c\u5f00\u53d1\u5386\u53f2"})}),"\n"]})]})}function u(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>o,x:()=>s});var r=n(6540);const t={},i=r.createContext(t);function o(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function s(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);