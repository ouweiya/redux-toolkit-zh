"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3394],{2135:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=o(4848),r=o(8453);const i={id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > Usage > Customizing createApi: adding customized variations"},s="Customizing createApi",c={id:"rtk-query/usage/customizing-create-api",title:"Customizing createApi",description:"RTK Query > Usage > Customizing createApi: adding customized variations",source:"@site/docs/rtk-query/usage/customizing-create-api.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/customizing-create-api",permalink:"/redux-toolkit-zh/rtk-query/usage/customizing-create-api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/customizing-create-api.mdx",tags:[],version:"current",frontMatter:{id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > Usage > Customizing createApi: adding customized variations"},sidebar:"docs",previous:{title:"Persistence and Rehydration",permalink:"/redux-toolkit-zh/rtk-query/usage/persistence-and-rehydration"},next:{title:"Customizing Queries",permalink:"/redux-toolkit-zh/rtk-query/usage/customizing-queries"}},a={},u=[{value:"Customizing the React-Redux Hooks",id:"customizing-the-react-redux-hooks",level:2},{value:"Customizing <code>createSelector</code> for RTKQ",id:"customizing-createselector-for-rtkq",level:2},{value:"Creating your own module",id:"creating-your-own-module",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsxs)(t.h1,{id:"customizing-createapi",children:["Customizing ",(0,n.jsx)(t.code,{children:"createApi"})]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, RTK Query includes two variants of ",(0,n.jsx)(t.code,{children:"createApi"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createBaseApi"}),", which contains only the UI-agnostic Redux logic (the core module)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createApi"}),", which contains both the core and React hooks modules"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can create your own versions of ",(0,n.jsx)(t.code,{children:"createApi"})," by either specifying non-default options for the modules or by adding your own modules."]}),"\n",(0,n.jsx)(t.h2,{id:"customizing-the-react-redux-hooks",children:"Customizing the React-Redux Hooks"}),"\n",(0,n.jsxs)(t.p,{children:["If you want the hooks to use different versions of ",(0,n.jsx)(t.code,{children:"useSelector"}),", ",(0,n.jsx)(t.code,{children:"useDispatch"})," and ",(0,n.jsx)(t.code,{children:"useStore"}),", such as if you are using a custom context, you can pass these in at module creation:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import * as React from 'react'\nimport {\n  createDispatchHook,\n  createSelectorHook,\n  createStoreHook,\n  ReactReduxContextValue,\n} from 'react-redux'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst MyContext = React.createContext<ReactReduxContextValue>(null as any)\nconst customCreateApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({\n    hooks: {\n      useDispatch: createDispatchHook(MyContext),\n      useSelector: createSelectorHook(MyContext),\n      useStore: createStoreHook(MyContext),\n    },\n  }),\n)\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"customizing-createselector-for-rtkq",children:["Customizing ",(0,n.jsx)(t.code,{children:"createSelector"})," for RTKQ"]}),"\n",(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.code,{children:"coreModule"})," and ",(0,n.jsx)(t.code,{children:"reactHooksModule"})," accept a ",(0,n.jsx)(t.code,{children:"createSelector"})," option which should be a selector creator instance from Reselect or with an equivalent signature."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import * as React from 'react'\nimport { createSelectorCreator, lruMemoize } from '@reduxjs/toolkit'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst createLruSelector = createSelectorCreator(lruMemoize)\n\nconst customCreateApi = buildCreateApi(\n  coreModule({ createSelector: createLruSelector }),\n  reactHooksModule({ createSelector: createLruSelector }),\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"creating-your-own-module",children:"Creating your own module"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to create your own module, you should review ",(0,n.jsx)(t.a,{href:"https://github.com/reduxjs/redux-toolkit/blob/b74a52935a5840bebca5acdc8e2265e3b6497afa/src/query/react/module.ts",children:"the react-hooks module"})," to see what an implementation would look like."]}),"\n",(0,n.jsx)(t.p,{children:"Here is a very stripped down version:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"import { CoreModule } from '@internal/core/module'\nimport {\n  BaseQueryFn,\n  EndpointDefinitions,\n  Api,\n  Module,\n  buildCreateApi,\n  coreModule,\n} from '@reduxjs/toolkit/query'\n\nexport const customModuleName = Symbol()\nexport type CustomModule = typeof customModuleName\n\ndeclare module '../apiTypes' {\n  export interface ApiModules<\n    BaseQuery extends BaseQueryFn,\n    Definitions extends EndpointDefinitions,\n    ReducerPath extends string,\n    TagTypes extends string,\n  > {\n    [customModuleName]: {\n      endpoints: {\n        [K in keyof Definitions]: {\n          myEndpointProperty: string\n        }\n      }\n    }\n  }\n}\n\nexport const myModule = (): Module<CustomModule> => ({\n  name: customModuleName,\n  init(api, options, context) {\n    // initialize stuff here if you need to\n\n    return {\n      injectEndpoint(endpoint, definition) {\n        const anyApi = api as any as Api<\n          any,\n          Record<string, any>,\n          string,\n          string,\n          CustomModule | CoreModule\n        >\n        anyApi.endpoints[endpoint].myEndpointProperty = 'test'\n      },\n    }\n  },\n})\n\nexport const myCreateApi = buildCreateApi(coreModule(), myModule())\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);