"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3277],{9748:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=d(4848),n=d(8453);const a={id:"createDynamicMiddleware",title:"createDynamicMiddleware",sidebar_label:"createDynamicMiddleware",hide_title:!0},r="createDynamicMiddleware",c={id:"api/createDynamicMiddleware",title:"createDynamicMiddleware",description:"&nbsp;",source:"@site/docs/api/createDynamicMiddleware.mdx",sourceDirName:"api",slug:"/api/createDynamicMiddleware",permalink:"/redux-toolkit-zh/api/createDynamicMiddleware",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/createDynamicMiddleware.mdx",tags:[],version:"current",frontMatter:{id:"createDynamicMiddleware",title:"createDynamicMiddleware",sidebar_label:"createDynamicMiddleware",hide_title:!0},sidebar:"docs",previous:{title:"createListenerMiddleware",permalink:"/redux-toolkit-zh/api/createListenerMiddleware"},next:{title:"getDefaultEnhancers",permalink:"/redux-toolkit-zh/api/getDefaultEnhancers"}},s={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5b9e\u4f8b\u521b\u5efa",id:"\u5b9e\u4f8b\u521b\u5efa",level:2},{value:"\u52a8\u6001\u4e2d\u95f4\u4ef6\u5b9e\u4f8b",id:"\u52a8\u6001\u4e2d\u95f4\u4ef6\u5b9e\u4f8b",level:2},{value:"<code>middleware</code>",id:"middleware",level:3},{value:"<code>addMiddleware</code>",id:"addmiddleware",level:3},{value:"<code>withMiddleware</code>",id:"withmiddleware",level:3},{value:"React \u96c6\u6210",id:"react-\u96c6\u6210",level:2},{value:"<code>createDispatchWithMiddlewareHook</code>",id:"createdispatchwithmiddlewarehook",level:3},{value:"<code>createDispatchWithMiddlewareHookFactory</code>",id:"createdispatchwithmiddlewarehookfactory",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"\xa0"}),"\n",(0,t.jsx)(i.h1,{id:"createdynamicmiddleware",children:(0,t.jsx)(i.code,{children:"createDynamicMiddleware"})}),"\n",(0,t.jsx)(i.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsx)(i.p,{children:'\u4e00\u4e2a"\u5143\u4e2d\u95f4\u4ef6"\uff0c\u5141\u8bb8\u5728\u5b58\u50a8\u521d\u59cb\u5316\u540e\u5411\u8c03\u5ea6\u94fe\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u3002'}),"\n",(0,t.jsx)(i.h2,{id:"\u5b9e\u4f8b\u521b\u5efa",children:"\u5b9e\u4f8b\u521b\u5efa"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"import { createDynamicMiddleware, configureStore } from '@reduxjs/toolkit'\n\nconst dynamicMiddleware = createDynamicMiddleware()\n\nconst store = configureStore({\n  reducer: {\n    todos: todosReducer,\n  },\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().prepend(dynamicMiddleware.middleware),\n})\n"})}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:["\u53ef\u4ee5\u5411 ",(0,t.jsx)(i.code,{children:"createDynamicMiddleware"})," \u4f20\u9012\u4e24\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c",(0,t.jsx)(i.code,{children:"State"})," \u548c ",(0,t.jsx)(i.code,{children:"Dispatch"}),"\u3002"]}),(0,t.jsx)(i.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u88ab\u63a5\u6536\u4e2d\u95f4\u4ef6\u7684\u65b9\u6cd5\u4f7f\u7528\uff0c\u4ee5\u786e\u4fdd\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6\u4e0e\u63d0\u4f9b\u7684\u7c7b\u578b\u517c\u5bb9\u3002"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"const dynamicMiddleware = createDynamicMiddleware<State, Dispatch>()\n"})}),(0,t.jsx)(i.p,{children:"\u7136\u800c\uff0c\u5982\u679c\u8fd9\u4e9b\u503c\u662f\u4ece\u5b58\u50a8\u4e2d\u6d3e\u751f\u51fa\u6765\u7684\uff08\u5c31\u50cf\u5b83\u4eec\u5e94\u8be5\u7684\u90a3\u6837\uff09\uff0c\u5c31\u4f1a\u5f62\u6210\u4e00\u4e2a\u5faa\u73af\u7c7b\u578b\u4f9d\u8d56\u3002"}),(0,t.jsxs)(i.p,{children:["\u56e0\u6b64\uff0c\u6700\u597d\u4f7f\u7528 ",(0,t.jsx)(i.code,{children:"addMiddleware"}),"\uff0c",(0,t.jsx)(i.code,{children:"withMiddleware"})," \u548c ",(0,t.jsx)(i.code,{children:"createDispatchWithMiddlewareHook"})," \u4e0a\u9644\u52a0\u7684 ",(0,t.jsx)(i.code,{children:"withTypes"})," \u5e2e\u52a9\u5668\u3002"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"import { createDynamicMiddleware } from '@reduxjs/toolkit/react'\nimport type { RootState, AppDispatch } from './store'\n\nconst dynamicMiddleware = createDynamicMiddleware()\n\nconst {\n  middleware,\n  addMiddleware,\n  withMiddleware,\n  createDispatchWithMiddlewareHook,\n} = dynamicMiddleware\n\ninterface MiddlewareApiConfig {\n  state: RootState\n  dispatch: AppDispatch\n}\n\nexport const addAppMiddleware = addMiddleware.withTypes<MiddlewareApiConfig>()\n\nexport const withAppMiddleware = withMiddleware.withTypes<MiddlewareApiConfig>()\n\nexport const createAppDispatchWithMiddlewareHook =\n  createDispatchWithMiddlewareHook.withTypes<MiddlewareApiConfig>()\n\nexport default middleware\n"})})]}),"\n",(0,t.jsx)(i.h2,{id:"\u52a8\u6001\u4e2d\u95f4\u4ef6\u5b9e\u4f8b",children:"\u52a8\u6001\u4e2d\u95f4\u4ef6\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(i.p,{children:["\u4ece ",(0,t.jsx)(i.code,{children:"createDynamicMiddleware"}),' \u8fd4\u56de\u7684 "\u52a8\u6001\u4e2d\u95f4\u4ef6\u5b9e\u4f8b" \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7c7b\u4f3c\u4e8e ',(0,t.jsx)(i.code,{children:"createListenerMiddleware"})," \u751f\u6210\u7684\u5bf9\u8c61\u3002\u5b9e\u4f8b\u5bf9\u8c61 ",(0,t.jsx)(i.em,{children:"\u4e0d\u662f"})," \u5b9e\u9645\u7684 Redux \u4e2d\u95f4\u4ef6\u672c\u8eab\u3002\u76f8\u53cd\uff0c\u5b83\u5305\u542b\u4e2d\u95f4\u4ef6\u548c\u4e00\u4e9b\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u7528\u4e8e\u5411\u94fe\u4e2d\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"export type DynamicMiddlewareInstance<\n  State = unknown,\n  Dispatch extends ReduxDispatch<UnknownAction> = ReduxDispatch<UnknownAction>,\n> = {\n  middleware: DynamicMiddleware<State, Dispatch>\n  addMiddleware: AddMiddleware<State, Dispatch>\n  withMiddleware: WithMiddleware<State, Dispatch>\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"middleware",children:(0,t.jsx)(i.code,{children:"middleware"})}),"\n",(0,t.jsx)(i.p,{children:"\u5305\u88c5\u5668\u4e2d\u95f4\u4ef6\u5b9e\u4f8b\uff0c\u6dfb\u52a0\u5230 Redux \u5b58\u50a8\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u5c06\u5b83\u653e\u5728\u4e2d\u95f4\u4ef6\u94fe\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u4f46\u8bf7\u6ce8\u610f\uff0c\u4f60\u6ce8\u5165\u5230\u6b64\u5b9e\u4f8b\u7684\u6240\u6709\u4e2d\u95f4\u4ef6\u90fd\u5c06\u5305\u542b\u5728\u6b64\u4f4d\u7f6e\u5185\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"addmiddleware",children:(0,t.jsx)(i.code,{children:"addMiddleware"})}),"\n",(0,t.jsx)(i.p,{children:"\u5c06\u4e00\u7ec4\u4e2d\u95f4\u4ef6\u6ce8\u5165\u5230\u5b9e\u4f8b\u4e2d\u3002"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"addMiddleware(logger, listenerMiddleware.instance)\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"\u4e2d\u95f4\u4ef6\u901a\u8fc7\u51fd\u6570\u5f15\u7528\u8fdb\u884c\u6bd4\u8f83\uff0c\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u53ea\u88ab\u6dfb\u52a0\u5230\u94fe\u4e2d\u4e00\u6b21\u3002"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"\u4e2d\u95f4\u4ef6\u5b58\u50a8\u5728 ES6 map \u4e2d\uff0c\u56e0\u6b64\u5728\u8c03\u5ea6\u671f\u95f4\u6309\u63d2\u5165\u987a\u5e8f\u8c03\u7528\u3002"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(i.h3,{id:"withmiddleware",children:(0,t.jsx)(i.code,{children:"withMiddleware"})}),"\n",(0,t.jsxs)(i.p,{children:["\u63a5\u53d7\u4e00\u7ec4\u4e2d\u95f4\u4ef6\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u52a8\u4f5c\u3002\u5f53\u8c03\u5ea6\u65f6\uff0c\u5b83\u6ce8\u5165\u4e2d\u95f4\u4ef6\u5e76\u8fd4\u56de\u4e00\u4e2a\u7248\u672c\u7684 ",(0,t.jsx)(i.code,{children:"dispatch"}),"\uff0c\u8be5\u7248\u672c\u88ab\u7c7b\u578b\u5316\u4ee5\u77e5\u9053\u4efb\u4f55\u6dfb\u52a0\u7684\u6269\u5c55\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"const listenerDispatch = store.dispatch(\n  withMiddleware(listenerMiddleware.middleware),\n)\n\nconst unsubscribe = listenerDispatch(addListener({ type, effect }))\n"})}),"\n",(0,t.jsx)(i.h2,{id:"react-\u96c6\u6210",children:"React \u96c6\u6210"}),"\n",(0,t.jsxs)(i.p,{children:["\u5f53\u4ece React-specific \u5165\u53e3\u70b9 (",(0,t.jsx)(i.code,{children:"@reduxjs/toolkit/react"}),") \u5bfc\u5165\u65f6\uff0c\u8c03\u7528 ",(0,t.jsx)(i.code,{children:"createDynamicMiddleware"})," \u7684\u7ed3\u679c\u5c06\u9644\u52a0\u989d\u5916\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["\u8fd9\u4e9b\u4f9d\u8d56\u4e8e\u5df2\u5b89\u88c5 ",(0,t.jsx)(i.code,{children:"react-redux"}),"\u3002"]})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"interface ReactDynamicMiddlewareInstance<\n  State = any,\n  Dispatch extends ReduxDispatch<UnknownAction> = ReduxDispatch<UnknownAction>,\n> extends DynamicMiddlewareInstance<State, Dispatch> {\n  createDispatchWithMiddlewareHook: CreateDispatchWithMiddlewareHook<\n    State,\n    Dispatch\n  >\n  createDispatchWithMiddlewareHookFactory: (\n    context?: Context<\n      ReactReduxContextValue<State, ActionFromDispatch<Dispatch>>\n    >,\n  ) => CreateDispatchWithMiddlewareHook<State, Dispatch>\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"createdispatchwithmiddlewarehook",children:(0,t.jsx)(i.code,{children:"createDispatchWithMiddlewareHook"})}),"\n",(0,t.jsxs)(i.p,{children:["\u63a5\u53d7\u4e00\u7ec4\u4e2d\u95f4\u4ef6\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,t.jsx)(i.a,{href:"https://react-redux.js.org/api/hooks#usedispatch",children:(0,t.jsx)(i.code,{children:"useDispatch"})})," \u94a9\u5b50\uff0c\u8fd4\u56de\u4e00\u4e2a ",(0,t.jsx)(i.code,{children:"dispatch"}),"\uff0c\u7c7b\u578b\u5316\u4ee5\u5305\u542b\u6765\u81ea\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6\u7684\u6269\u5c55\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"const useListenerDispatch = createDispatchWithMiddlewareHook(\n  listenerInstance.middleware,\n)\n\nconst Component = () => {\n  const listenerDispatch = useListenerDispatch()\n  useEffect(() => {\n    const unsubscribe = listenerDispatch(addListener({ type, effect }))\n    return () => unsubscribe()\n  }, [dispatch])\n}\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["\u5f53\u8c03\u7528 ",(0,t.jsx)(i.code,{children:"createDispatchWithMiddlewareHook"})," \u65f6\uff0c\u800c\u4e0d\u662f\u5f53 ",(0,t.jsx)(i.code,{children:"useDispatch"})," \u94a9\u5b50\u88ab\u4f7f\u7528\u65f6\uff0c\u4e2d\u95f4\u4ef6\u88ab\u6ce8\u5165\u3002"]})}),"\n",(0,t.jsx)(i.h3,{id:"createdispatchwithmiddlewarehookfactory",children:(0,t.jsx)(i.code,{children:"createDispatchWithMiddlewareHookFactory"})}),"\n",(0,t.jsxs)(i.p,{children:["\u63a5\u53d7\u4e00\u4e2a React context \u5b9e\u4f8b\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u6784\u5efa\u7528\u4e8e\u4f7f\u7528\u8be5 context \u7684 ",(0,t.jsx)(i.code,{children:"createDispatchWithMiddlewareHook"}),"\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:"no-transpile",children:"const createDispatchWithMiddlewareHook =\n  createDispatchWithMiddlewareHookFactory(context)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,t.jsx)(i.a,{href:"https://react-redux.js.org/using-react-redux/accessing-store#providing-custom-context",children:"custom context"})," for React Redux\uff0c\u8fd9\u5c06\u5f88\u6709\u7528\u3002"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,i,d)=>{d.d(i,{R:()=>r,x:()=>c});var t=d(6540);const n={},a=t.createContext(n);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);