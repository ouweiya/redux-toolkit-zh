"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[2425],{3354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(4848),o=r(8453),a=r(1470),l=r(9365),s=r(9760);const c={id:"handling-empty-array-results",title:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",sidebar_label:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",hide_title:!0,description:"Handling Empty Array Results"},i="\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",u={id:"reselect/usage/handling-empty-array-results",title:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",description:"Handling Empty Array Results",source:"@site/docs/reselect/usage/handling-empty-array-results.mdx",sourceDirName:"reselect/usage",slug:"/reselect/usage/handling-empty-array-results",permalink:"/redux-toolkit-zh/reselect/usage/handling-empty-array-results",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reselect/usage/handling-empty-array-results.mdx",tags:[],version:"current",frontMatter:{id:"handling-empty-array-results",title:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",sidebar_label:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",hide_title:!0,description:"Handling Empty Array Results"},sidebar:"reselect",previous:{title:"\u5e38\u89c1\u9519\u8bef",permalink:"/redux-toolkit-zh/reselect/usage/common-mistakes"},next:{title:"\u521b\u5efa\u9009\u62e9\u5668",permalink:"/redux-toolkit-zh/reselect/api/createSelector"}},d={},p=[];function m(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return s.d||f("InternalLinks",!1),s.d.ResultFunction||f("InternalLinks.ResultFunction",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c",children:"\u5904\u7406\u7a7a\u6570\u7ec4\u7ed3\u679c"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u4e86\u51cf\u5c11\u91cd\u65b0\u8ba1\u7b97\uff0c\u5f53 ",(0,n.jsx)(t.code,{children:"array.filter"})," \u6216\u7c7b\u4f3c\u65b9\u6cd5\u7ed3\u679c\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u7a7a\u6570\u7ec4\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6240\u4ee5\u4f60\u53ef\u4ee5\u6709\u50cf\u8fd9\u6837\u7684\u6a21\u5f0f\uff1a"}),"\n","\n",(0,n.jsxs)(a.A,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,n.jsx)(l.A,{value:"ts",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="handling-empty-array-results/firstPattern.ts"',children:"import { createSelector } from 'reselect'\r\n\r\nexport interface RootState {\r\n  todos: {\r\n    id: number\r\n    title: string\r\n    description: string\r\n    completed: boolean\r\n  }[]\r\n}\r\n\r\nconst EMPTY_ARRAY: [] = []\r\n\r\nconst selectCompletedTodos = createSelector(\r\n  [(state: RootState) => state.todos],\r\n  todos => {\r\n    const completedTodos = todos.filter(todo => todo.completed === true)\r\n    return completedTodos.length === 0 ? EMPTY_ARRAY : completedTodos\r\n  }\r\n)\n"})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="handling-empty-array-results/firstPattern.js"',children:"import { createSelector } from 'reselect'\r\n\r\nconst EMPTY_ARRAY = []\r\n\r\nconst selectCompletedTodos = createSelector([state => state.todos], todos => {\r\n  const completedTodos = todos.filter(todo => todo.completed === true)\r\n  return completedTodos.length === 0 ? EMPTY_ARRAY : completedTodos\r\n})\n"})})})]}),"\n","\n",(0,n.jsx)(t.p,{children:"\u6216\u8005\u4e3a\u4e86\u907f\u514d\u91cd\u590d\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5305\u88c5\u51fd\u6570\u5e76\u91cd\u7528\u5b83\uff1a"}),"\n","\n",(0,n.jsxs)(a.A,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,n.jsx)(l.A,{value:"ts",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="handling-empty-array-results/fallbackToEmptyArray.ts"',children:"import { createSelector } from 'reselect'\r\nimport type { RootState } from './firstPattern'\r\n\r\nconst EMPTY_ARRAY: [] = []\r\n\r\nexport const fallbackToEmptyArray = <T>(array: T[]) => {\r\n  return array.length === 0 ? EMPTY_ARRAY : array\r\n}\r\n\r\nconst selectCompletedTodos = createSelector(\r\n  [(state: RootState) => state.todos],\r\n  todos => {\r\n    return fallbackToEmptyArray(todos.filter(todo => todo.completed === true))\r\n  }\r\n)\n"})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="handling-empty-array-results/fallbackToEmptyArray.js"',children:"import { createSelector } from 'reselect'\r\n\r\nconst EMPTY_ARRAY = []\r\n\r\nexport const fallbackToEmptyArray = array => {\r\n  return array.length === 0 ? EMPTY_ARRAY : array\r\n}\r\n\r\nconst selectCompletedTodos = createSelector([state => state.todos], todos => {\r\n  return fallbackToEmptyArray(todos.filter(todo => todo.completed === true))\r\n})\n"})})})]}),"\n","\n",(0,n.jsxs)(t.p,{children:["\u8fd9\u6837\uff0c\u5982\u679c ",(0,n.jsx)(s.d.ResultFunction,{})," \u8fde\u7eed\u4e24\u6b21\u8fd4\u56de\u7a7a\u6570\u7ec4\uff0c\u4f60\u7684\u7ec4\u4ef6\u5c06\u4e0d\u4f1a\u56e0\u4e3a\u7a33\u5b9a\u7684\u7a7a\u6570\u7ec4\u5f15\u7528\u800c\u91cd\u65b0\u6e32\u67d3\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const completedTodos = selectCompletedTodos(store.getState())\r\n\r\nstore.dispatch(addTodo())\r\n\r\nconsole.log(completedTodos === selectCompletedTodos(store.getState())) //=> true\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9365:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(4164);const o={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(6540),o=r(4164),a=r(3104),l=r(6347),s=r(205),c=r(7485),i=r(1682),u=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=p(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,d]=h({queryString:r,groupId:o}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),b=(()=>{const e=i??f;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),o=s[r].value;o!==n&&(i(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function A(e){const t=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},9760:(e,t,r)=>{r.d(t,{d:()=>l});var n=r(8774),o=r(6540),a=r(4848);const l={Selector:(0,o.memo)((e=>{let{text:t="selector"}=e;return(0,a.jsx)(n.A,{to:"/introduction/getting-started#selector-function",title:"Selector Function",children:t})})),InputSelectors:(0,o.memo)((e=>{let{text:t="input selectors"}=e;return(0,a.jsx)(n.A,{to:"/introduction/getting-started#input-selectors",title:"Input Selectors",children:t})})),OutputSelector:(0,o.memo)((e=>{let{text:t="output selector"}=e;return(0,a.jsx)(n.A,{to:"/introduction/getting-started#output-selector",title:"Output Selector",children:t})})),ResultFunction:(0,o.memo)((e=>{let{text:t="result function"}=e;return(0,a.jsx)(n.A,{to:"/introduction/getting-started#result-function",title:"Result Function",children:t})})),Dependencies:(0,o.memo)((e=>{let{text:t="dependencies"}=e;return(0,a.jsx)(n.A,{to:"/introduction/getting-started#dependencies",title:"Dependencies",children:t})})),CascadingMemoization:(0,o.memo)((e=>{let{text:t="Cascading Memoization"}=e;return(0,a.jsxs)(n.A,{to:"/introduction/how-does-reselect-work#cascading-memoization",title:"Cascading Memoization",children:['"',t,'"']})})),OutputSelectorFields:(0,o.memo)((e=>{let{text:t="Output Selector Fields"}=e;return(0,a.jsx)(n.A,{to:"/api/createSelector#output-selector-fields",title:"Output Selector Fields",children:t})})),CreateSelector:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/createSelector",title:"createSelector",children:(0,a.jsx)("code",{children:"createSelector"})}))),CreateSelectorCreator:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/createSelectorCreator",title:"createSelectorCreator",children:(0,a.jsx)("code",{children:"createSelectorCreator"})}))),LruMemoize:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/lruMemoize",title:"lruMemoize",children:(0,a.jsx)("code",{children:"lruMemoize"})}))),WeakMapMemoize:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/weakMapMemoize",title:"weakMapMemoize",children:(0,a.jsx)("code",{children:"weakMapMemoize"})}))),UnstableAutotrackMemoize:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/unstable_autotrackMemoize",title:"unstable_autotrackMemoize",children:(0,a.jsx)("code",{children:"unstable_autotrackMemoize"})}))),CreateStructuredSelector:(0,o.memo)((()=>(0,a.jsx)(n.A,{to:"/api/createStructuredSelector",title:"createStructuredSelector",children:(0,a.jsx)("code",{children:"createStructuredSelector"})})))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(6540);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);