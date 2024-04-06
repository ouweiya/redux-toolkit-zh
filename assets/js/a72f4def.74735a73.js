"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7790],{3611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>j,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>S});var o=r(4848),n=r(8453),l=r(9760),s=r(782),c=r(2364),i=r(9365),a=r(1470),d=r(6540);const u=[{value:"npm",label:"NPM",command:"install"},{value:"yarn",label:"Yarn",command:"add"},{value:"bun",label:"Bun",command:"add"},{value:"pnpm",label:"PNPM",command:"add"}],m=()=>(0,o.jsx)(a.A,{groupId:"packageManagers",defaultValue:u[0].value,children:u.map((e=>{let{value:t,command:r,label:n}=e;return(0,o.jsx)(i.A,{value:t,label:n,children:(0,o.jsxs)(c.A,{language:"bash",children:[t," ",r," ","reselect"]})},t)}))}),p=(0,d.memo)(m);var x=r(8774);const h={id:"getting-started",title:"\u5165\u95e8\u6307\u5357",sidebar_label:"\u5165\u95e8\u6307\u5357",sidebar_position:1,hide_title:!0,description:"Getting Started"},j="\u5f00\u59cb\u4f7f\u7528 Reselect",g={id:"reselect/introduction/getting-started",title:"\u5165\u95e8\u6307\u5357",description:"Getting Started",source:"@site/docs/reselect/introduction/getting-started.mdx",sourceDirName:"reselect/introduction",slug:"/reselect/introduction/getting-started",permalink:"/redux-toolkit-zh/reselect/introduction/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reselect/introduction/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",title:"\u5165\u95e8\u6307\u5357",sidebar_label:"\u5165\u95e8\u6307\u5357",sidebar_position:1,hide_title:!0,description:"Getting Started"},sidebar:"reselect",next:{title:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",permalink:"/redux-toolkit-zh/reselect/introduction/how-does-reselect-work"}},b={},S=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Redux Toolkit",id:"redux-toolkit",level:3},{value:"\u72ec\u7acb\u4f7f\u7528",id:"\u72ec\u7acb\u4f7f\u7528",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2}];function f(e){const t={b:"b",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return s.t||k("ExternalLinks",!1),s.t.ReactRedux||k("ExternalLinks.ReactRedux",!0),s.t.Redux||k("ExternalLinks.Redux",!0),s.t.ReduxToolkit||k("ExternalLinks.ReduxToolkit",!0),l.d||k("InternalLinks",!1),l.d.CreateSelector||k("InternalLinks.CreateSelector",!0),l.d.Dependencies||k("InternalLinks.Dependencies",!0),l.d.InputSelectors||k("InternalLinks.InputSelectors",!0),l.d.OutputSelector||k("InternalLinks.OutputSelector",!0),l.d.ResultFunction||k("InternalLinks.ResultFunction",!0),l.d.Selector||k("InternalLinks.Selector",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u5f00\u59cb\u4f7f\u7528-reselect",children:"\u5f00\u59cb\u4f7f\u7528 Reselect"}),"\n",(0,o.jsx)(t.p,{children:'\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa memoized "selector" \u51fd\u6570\u7684\u5e93\u3002\u5e38\u4e0e Redux \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e0e\u4efb\u4f55\u666e\u901a\u7684 JS \u4e0d\u53ef\u53d8\u6570\u636e\u4e00\u8d77\u4f7f\u7528\u3002'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Selectors \u53ef\u4ee5\u8ba1\u7b97\u6d3e\u751f\u6570\u636e\uff0c\u5141\u8bb8 ",(0,o.jsx)(s.t.Redux,{})," \u5b58\u50a8\u6700\u5c0f\u53ef\u80fd\u7684\u72b6\u6001\u3002"]}),"\n",(0,o.jsx)(t.li,{children:"Selectors \u662f\u9ad8\u6548\u7684\u3002\u9664\u975e\u5176\u4e2d\u4e00\u4e2a\u53c2\u6570\u53d1\u751f\u53d8\u5316\uff0c\u5426\u5219\u4e0d\u4f1a\u91cd\u65b0\u8ba1\u7b97 selector\u3002"}),"\n",(0,o.jsx)(t.li,{children:"Selectors \u662f\u53ef\u7ec4\u5408\u7684\u3002\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u5176\u4ed6 selectors \u7684\u8f93\u5165\u3002"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Redux \u6587\u6863\u7684 ",(0,o.jsx)(x.A,{to:"https://redux.js.org/usage/deriving-data-selectors",children:"\u4f7f\u7528 Selectors \u6d3e\u751f\u6570\u636e"})," \u9875\u9762"]}),"\u6db5\u76d6\u4e86 selectors \u7684\u76ee\u7684\u548c\u52a8\u673a\uff0c\u4e3a\u4ec0\u4e48 memoized selectors \u662f\u6709\u7528\u7684\uff0c\u5178\u578b\u7684 Reselect \u4f7f\u7528\u6a21\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u4e0e ",(0,o.jsx)(s.t.ReactRedux,{})," \u4e00\u8d77\u4f7f\u7528 selectors\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsx)(t.h3,{id:"redux-toolkit",children:"Redux Toolkit"}),"\n",(0,o.jsxs)(t.p,{children:["\u867d\u7136 Reselect \u4e0d\u4ec5\u9650\u4e8e ",(0,o.jsx)(s.t.Redux,{}),"\uff0c\u4f46\u5b83\u5df2\u7ecf\u9ed8\u8ba4\u5305\u542b\u5728 ",(0,o.jsx)(s.t.ReduxToolkit,{text:"\u5b98\u65b9\u7684 Redux Toolkit \u5305"})," \u4e2d - \u65e0\u9700\u8fdb\u4e00\u6b65\u5b89\u88c5\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createSelector } from '@reduxjs/toolkit'\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\u72ec\u7acb\u4f7f\u7528",children:"\u72ec\u7acb\u4f7f\u7528"}),"\n",(0,o.jsxs)(t.p,{children:["\u5bf9\u4e8e\u72ec\u7acb\u4f7f\u7528\uff0c\u5b89\u88c5 ",(0,o.jsx)(t.code,{children:"reselect"})," \u5305\uff1a"]}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsxs)(t.p,{children:["Reselect \u5bfc\u51fa\u4e86\u4e00\u4e2a ",(0,o.jsx)(t.code,{children:"createSelector"})," API\uff0c\u7528\u4e8e\u751f\u6210 memoized selector \u51fd\u6570\u3002",(0,o.jsx)(t.code,{children:"createSelector"})," \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u8f93\u5165 selectors\uff0c\u8fd9\u4e9b selectors \u4ece\u53c2\u6570\u4e2d\u63d0\u53d6\u503c\uff0c\u4ee5\u53ca\u4e00\u4e2a\u7ed3\u679c\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u63d0\u53d6\u7684\u503c\u5e76\u5e94\u8fd4\u56de\u4e00\u4e2a\u6d3e\u751f\u503c\u3002\u5982\u679c\u591a\u6b21\u8c03\u7528\u751f\u6210\u7684\u8f93\u51fa selector\uff0c\u53ea\u6709\u5728\u63d0\u53d6\u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u8f93\u51fa\u624d\u4f1a\u88ab\u91cd\u65b0\u8ba1\u7b97\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b ",(0,o.jsx)(t.strong,{children:"\u793a\u4f8b"})," \u4e2d\u5c1d\u8bd5 ",(0,o.jsx)(x.A,{to:"https://codesandbox.io/s/reselect-example-g3k9gf?file=/src/index.js",children:"\u8fd9\u4e2a CodeSandbox"}),"\uff1a"]}),"\n","\n",(0,o.jsxs)(a.A,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,o.jsx)(i.A,{value:"ts",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="basicUsage.ts"',children:"import { createSelector } from 'reselect'\r\n\r\ninterface RootState {\r\n  todos: { id: number; completed: boolean }[]\r\n  alerts: { id: number; read: boolean }[]\r\n}\r\n\r\nconst state: RootState = {\r\n  todos: [\r\n    { id: 0, completed: false },\r\n    { id: 1, completed: true }\r\n  ],\r\n  alerts: [\r\n    { id: 0, read: false },\r\n    { id: 1, read: true }\r\n  ]\r\n}\r\n\r\nconst selectCompletedTodos = (state: RootState) => {\r\n  console.log('selector ran')\r\n  return state.todos.filter(todo => todo.completed === true)\r\n}\r\n\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\n\r\nconst memoizedSelectCompletedTodos = createSelector(\r\n  [(state: RootState) => state.todos],\r\n  todos => {\r\n    console.log('memoized selector ran')\r\n    return todos.filter(todo => todo.completed === true)\r\n  }\r\n)\r\n\r\nmemoizedSelectCompletedTodos(state) // \u8fd0\u884c\u4e86\u8bb0\u5fc6\u5316\u7684\u9009\u62e9\u5668\r\nmemoizedSelectCompletedTodos(state)\r\nmemoizedSelectCompletedTodos(state)\r\n\r\nconsole.log(selectCompletedTodos(state) === selectCompletedTodos(state)) //=> false\r\n\r\nconsole.log(\r\n  memoizedSelectCompletedTodos(state) === memoizedSelectCompletedTodos(state)\r\n) //=> true\n"})})}),(0,o.jsx)(i.A,{value:"js",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="basicUsage.js"',children:"import { createSelector } from 'reselect'\r\n\r\nconst state = {\r\n  todos: [\r\n    { id: 0, completed: false },\r\n    { id: 1, completed: true }\r\n  ],\r\n  alerts: [\r\n    { id: 0, read: false },\r\n    { id: 1, read: true }\r\n  ]\r\n}\r\n\r\nconst selectCompletedTodos = state => {\r\n  console.log('selector ran')\r\n  return state.todos.filter(todo => todo.completed === true)\r\n}\r\n\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\nselectCompletedTodos(state) // \u9009\u62e9\u5668\u8fd0\u884c\r\n\r\nconst memoizedSelectCompletedTodos = createSelector(\r\n  [state => state.todos],\r\n  todos => {\r\n    console.log('memoized selector ran')\r\n    return todos.filter(todo => todo.completed === true)\r\n  }\r\n)\r\n\r\nmemoizedSelectCompletedTodos(state) // \u8fd0\u884c\u4e86\u8bb0\u5fc6\u5316\u7684\u9009\u62e9\u5668\r\nmemoizedSelectCompletedTodos(state)\r\nmemoizedSelectCompletedTodos(state)\r\n\r\nconsole.log(selectCompletedTodos(state) === selectCompletedTodos(state)) //=> false\r\n\r\nconsole.log(\r\n  memoizedSelectCompletedTodos(state) === memoizedSelectCompletedTodos(state)\r\n) //=> true\n"})})})]}),"\n","\n",(0,o.jsxs)(t.p,{children:["\u5982\u4e0a\u4f8b\u6240\u793a\uff0c",(0,o.jsx)(t.code,{children:"memoizedSelectCompletedTodos"})," \u5728\u7b2c\u4e8c\u6b21\u6216\u7b2c\u4e09\u6b21\u8fd0\u884c\u65f6\u4e0d\u4f1a\u8fd0\u884c\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u5f97\u5230\u4e0e\u4e0a\u6b21\u76f8\u540c\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u9664\u4e86\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u8ba1\u7b97\uff0c",(0,o.jsx)(t.code,{children:"memoizedSelectCompletedTodos"})," \u5982\u679c\u6ca1\u6709\u91cd\u65b0\u8ba1\u7b97\uff0c\u5c06\u8fd4\u56de\u73b0\u6709\u7684\u7ed3\u679c\u5f15\u7528\u3002\u8fd9\u5bf9\u4e8e\u50cf React-Redux \u6216 React \u8fd9\u6837\u7ecf\u5e38\u4f9d\u8d56\u5f15\u7528\u76f8\u7b49\u6027\u68c0\u67e5\u6765\u4f18\u5316 UI \u66f4\u65b0\u7684\u5e93\u6765\u8bf4\u975e\u5e38\u91cd\u8981\u3002"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"\u672f\u8bed",children:"\u672f\u8bed"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(l.d.Selector,{text:(0,o.jsx)(t.b,{children:"Selector \u51fd\u6570"})}),"\n",": \u4e00\u4e2a\u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a JavaScript \u503c\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u6d3e\u751f\u51fa\u7ed3\u679c\u7684\u51fd\u6570\u3002\u5f53\u4e0e ",(0,o.jsx)(s.t.Redux,{})," \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u901a\u5e38\u662f\u6574\u4e2a Redux store \u72b6\u6001\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(l.d.InputSelectors,{text:(0,o.jsx)(t.b,{children:"\u8f93\u5165 Selectors"})}),"\n",": \u7528\u4f5c\u521b\u5efa memoized selector \u7684\u57fa\u7840\u6784\u5efa\u5757\u7684\u57fa\u672c selector \u51fd\u6570\u3002\u5b83\u4eec\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,o.jsx)(l.d.CreateSelector,{}),"\uff0c\u5e76\u5e26\u6709\u6240\u6709 selector \u53c2\u6570\u3002\u5b83\u4eec\u8d1f\u8d23\u63d0\u53d6\u548c\u63d0\u4f9b\u5fc5\u8981\u7684\u503c\u7ed9 ",(0,o.jsx)(l.d.ResultFunction,{}),"\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(l.d.OutputSelector,{text:(0,o.jsx)(t.b,{children:"\u8f93\u51fa Selector"})}),"\n",": \u7531 ",(0,o.jsx)(l.d.CreateSelector,{})," \u521b\u5efa\u7684\u5b9e\u9645 memoized selectors\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(l.d.ResultFunction,{text:(0,o.jsx)(t.b,{children:"\u7ed3\u679c\u51fd\u6570"})}),"\n",": \u5728 ",(0,o.jsx)(l.d.InputSelectors,{})," \u4e4b\u540e\u7684\u51fd\u6570\u3002\u5b83\u63a5\u53d7 ",(0,o.jsx)(l.d.InputSelectors,{})," \u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u53c2\u6570\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(l.d.Dependencies,{text:(0,o.jsx)(t.b,{children:"\u4f9d\u8d56\u9879"})}),"\n",": \u4e0e ",(0,o.jsx)(l.d.InputSelectors,{})," \u76f8\u540c\u3002\u5b83\u4eec\u662f ",(0,o.jsx)(l.d.OutputSelector,{}),' "\u4f9d\u8d56" \u7684\u5185\u5bb9\u3002']}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u89c6\u89c9\u8f85\u52a9\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const outputSelector = createSelector(\r\n  [inputSelector1, inputSelector2, inputSelector3], // \u4e0e `\u4f9d\u8d56\u9879` \u540c\u4e49\u3002\r\n  resultFunc // \u7ed3\u679c\u51fd\u6570\r\n)\n"})})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}function k(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var o=r(4164);const n={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var o=r(6540),n=r(4164),l=r(3104),s=r(6347),c=r(205),i=r(7485),a=r(1682),d=r(9466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:n}}=e;return{value:t,label:r,attributes:o,default:n}}))}(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:l}))),[a,u]=x({queryString:r,groupId:n}),[h,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=a??h;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function S(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==o&&(a(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,n.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=h(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,b.jsx)(S,{...e,...t}),(0,b.jsx)(f,{...e,...t})]})}function k(e){const t=(0,j.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},782:(e,t,r)=>{r.d(t,{t:()=>s,y:()=>c});var o=r(8774),n=r(6540),l=r(4848);const s={WeakMap:(0,n.memo)((e=>{let{text:t="WeakMap"}=e;return(0,l.jsx)(o.A,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",title:"WeakMap",children:(0,l.jsx)("code",{children:t})})})),ReferenceEqualityCheck:(0,n.memo)((e=>{let{text:t="Reference Equality Check"}=e;return(0,l.jsx)(o.A,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",title:"Reference Equality Check",children:t})})),Memoization:(0,n.memo)((e=>{let{text:t="memoization"}=e;return(0,l.jsx)(o.A,{to:"https://en.wikipedia.org/wiki/Memoization",title:"Memoization",children:t})})),IdentityFunction:(0,n.memo)((e=>{let{text:t="Identity Function"}=e;return(0,l.jsx)(o.A,{to:"https://en.wikipedia.org/wiki/Identity_function",title:"Identity Function",children:t})})),UseMemo:(0,n.memo)((e=>{let{text:t="useMemo"}=e;return(0,l.jsx)(o.A,{to:"https://react.dev/reference/react/useMemo#usememo",title:"useMemo",children:(0,l.jsx)("code",{children:t})})})),ReReselect:(0,n.memo)((e=>{let{text:t="Re-reselect"}=e;return(0,l.jsx)(o.A,{to:"https://github.com/toomuchdesign/re-reselect",title:"re-reselect",children:t})})),Redux:(0,n.memo)((e=>{let{text:t="Redux"}=e;return(0,l.jsx)(o.A,{to:"https://redux.js.org",title:"Redux",children:t})})),React:(0,n.memo)((e=>{let{text:t="React"}=e;return(0,l.jsx)(o.A,{to:"https://react.dev",title:"React",children:t})})),ReactRedux:(0,n.memo)((e=>{let{text:t="React-Redux"}=e;return(0,l.jsx)(o.A,{to:"https://react-redux.js.org",title:"React-Redux",children:t})})),ReduxToolkit:(0,n.memo)((e=>{let{text:t="Redux-Toolkit"}=e;return(0,l.jsx)(o.A,{to:"https://redux-toolkit.js.org",title:"Redux-Toolkit",children:t})}))},c=(0,n.memo)((()=>(0,l.jsx)("ul",{children:Object.values(s).map(((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:(0,l.jsx)(e,{})})},t)))})))},9760:(e,t,r)=>{r.d(t,{d:()=>s});var o=r(8774),n=r(6540),l=r(4848);const s={Selector:(0,n.memo)((e=>{let{text:t="selector"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#selector-function",title:"Selector Function",children:t})})),InputSelectors:(0,n.memo)((e=>{let{text:t="input selectors"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#input-selectors",title:"Input Selectors",children:t})})),OutputSelector:(0,n.memo)((e=>{let{text:t="output selector"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#output-selector",title:"Output Selector",children:t})})),ResultFunction:(0,n.memo)((e=>{let{text:t="result function"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#result-function",title:"Result Function",children:t})})),Dependencies:(0,n.memo)((e=>{let{text:t="dependencies"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#dependencies",title:"Dependencies",children:t})})),CascadingMemoization:(0,n.memo)((e=>{let{text:t="Cascading Memoization"}=e;return(0,l.jsxs)(o.A,{to:"/introduction/how-does-reselect-work#cascading-memoization",title:"Cascading Memoization",children:['"',t,'"']})})),OutputSelectorFields:(0,n.memo)((e=>{let{text:t="Output Selector Fields"}=e;return(0,l.jsx)(o.A,{to:"/api/createSelector#output-selector-fields",title:"Output Selector Fields",children:t})})),CreateSelector:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createSelector",title:"createSelector",children:(0,l.jsx)("code",{children:"createSelector"})}))),CreateSelectorCreator:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createSelectorCreator",title:"createSelectorCreator",children:(0,l.jsx)("code",{children:"createSelectorCreator"})}))),LruMemoize:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/lruMemoize",title:"lruMemoize",children:(0,l.jsx)("code",{children:"lruMemoize"})}))),WeakMapMemoize:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/weakMapMemoize",title:"weakMapMemoize",children:(0,l.jsx)("code",{children:"weakMapMemoize"})}))),UnstableAutotrackMemoize:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/unstable_autotrackMemoize",title:"unstable_autotrackMemoize",children:(0,l.jsx)("code",{children:"unstable_autotrackMemoize"})}))),CreateStructuredSelector:(0,n.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createStructuredSelector",title:"createStructuredSelector",children:(0,l.jsx)("code",{children:"createStructuredSelector"})})))}}}]);