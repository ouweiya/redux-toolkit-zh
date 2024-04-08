"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[1684],{4874:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(4848),t=i(8453);const s={id:"prefetching",title:"\u9884\u83b7\u53d6",sidebar_label:"\u9884\u83b7\u53d6",hide_title:!0,description:"RTK Query > Usage > Prefetching: fetching before user interaction"},l="\u9884\u53d6",o={id:"rtk-query/usage/prefetching",title:"\u9884\u83b7\u53d6",description:"RTK Query > Usage > Prefetching: fetching before user interaction",source:"@site/docs/rtk-query/usage/prefetching.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/prefetching",permalink:"/redux-toolkit-zh/rtk-query/usage/prefetching",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/prefetching.mdx",tags:[],version:"current",frontMatter:{id:"prefetching",title:"\u9884\u83b7\u53d6",sidebar_label:"\u9884\u83b7\u53d6",hide_title:!0,description:"RTK Query > Usage > Prefetching: fetching before user interaction"},sidebar:"docs",previous:{title:"\u5206\u9875",permalink:"/redux-toolkit-zh/rtk-query/usage/pagination"},next:{title:"\u8f6e\u8be2",permalink:"/redux-toolkit-zh/rtk-query/usage/polling"}},c={},d=[{value:"\u4f7f\u7528 React Hooks \u8fdb\u884c\u9884\u53d6",id:"\u4f7f\u7528-react-hooks-\u8fdb\u884c\u9884\u53d6",level:2},{value:"\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a",id:"\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a",level:3},{value:"\u89e6\u53d1\u51fd\u6570\u884c\u4e3a",id:"\u89e6\u53d1\u51fd\u6570\u884c\u4e3a",level:3},{value:"\u98df\u8c31\uff1a\u7acb\u5373\u9884\u53d6",id:"\u98df\u8c31\u7acb\u5373\u9884\u53d6",level:3},{value:"\u4e0d\u4f7f\u7528\u94a9\u5b50\u7684\u9884\u53d6",id:"\u4e0d\u4f7f\u7528\u94a9\u5b50\u7684\u9884\u53d6",level:2},{value:"\u9884\u53d6\u793a\u4f8b",id:"\u9884\u53d6\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u9884\u53d6",id:"\u57fa\u672c\u9884\u53d6",level:3},{value:"\u81ea\u52a8\u9884\u53d6",id:"\u81ea\u52a8\u9884\u53d6",level:3},{value:"\u9884\u53d6\u6240\u6709\u5df2\u77e5\u9875\u9762",id:"\u9884\u53d6\u6240\u6709\u5df2\u77e5\u9875\u9762",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.h1,{id:"\u9884\u53d6",children:"\u9884\u53d6"}),"\n",(0,r.jsx)(n.p,{children:"\u9884\u53d6\u7684\u76ee\u6807\u662f\u5728\u7528\u6237\u5bfc\u822a\u5230\u9875\u9762\u6216\u5c1d\u8bd5\u52a0\u8f7d\u4e00\u4e9b\u5df2\u77e5\u5185\u5bb9\u4e4b\u524d\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u80fd\u60f3\u8981\u505a\u8fd9\u4e2a\u7684\u60c5\u51b5\u6709\u5f88\u591a\uff0c\u4f46\u4e00\u4e9b\u975e\u5e38\u5e38\u89c1\u7684\u7528\u4f8b\u662f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u60ac\u505c\u5728\u5bfc\u822a\u5143\u7d20\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u60ac\u505c\u5728\u5217\u8868\u5143\u7d20\u4e0a\uff0c\u8be5\u5143\u7d20\u662f\u4e00\u4e2a\u94fe\u63a5"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u60ac\u505c\u5728\u4e0b\u4e00\u4e2a\u5206\u9875\u6309\u94ae\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u5bfc\u822a\u5230\u4e00\u4e2a\u9875\u9762\uff0c\u4f60\u77e5\u9053\u6811\u4e0b\u7684\u4e00\u4e9b\u7ec4\u4ef6\u5c06\u9700\u8981\u8fd9\u4e9b\u6570\u636e\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u9632\u6b62\u83b7\u53d6\u7011\u5e03\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-react-hooks-\u8fdb\u884c\u9884\u53d6",children:"\u4f7f\u7528 React Hooks \u8fdb\u884c\u9884\u53d6"}),"\n",(0,r.jsxs)(n.p,{children:["\u7c7b\u4f3c\u4e8e ",(0,r.jsx)(n.a,{href:"./mutations",children:(0,r.jsx)(n.code,{children:"useMutation"})})," \u94a9\u5b50\uff0c",(0,r.jsx)(n.code,{children:"usePrefetch"}),' \u94a9\u5b50\u4e0d\u4f1a\u81ea\u52a8\u8fd0\u884c - \u5b83\u8fd4\u56de\u4e00\u4e2a"\u89e6\u53d1\u51fd\u6570"\uff0c\u53ef\u4ee5\u7528\u6765\u542f\u52a8\u884c\u4e3a\u3002']}),"\n",(0,r.jsx)(n.p,{children:"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a\u7b2c\u4e00\u4e2a\u662f\u4f60\u5728 API \u670d\u52a1\u4e2d\u5b9a\u4e49\u7684\u67e5\u8be2\u64cd\u4f5c\u7684\u952e\uff0c\u7b2c\u4e8c\u4e2a\u662f\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\u7684\u5bf9\u8c61\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="usePrefetch \u7b7e\u540d" no-transpile',children:"export type PrefetchOptions =\n  | { force?: boolean }\n  | {\n      ifOlderThan?: false | number;\n    };\n\nusePrefetch<EndpointName extends QueryKeys<Definitions>>(\n    endpointName: EndpointName,\n    options?: PrefetchOptions\n  ): (arg: QueryArgFrom<Definitions[EndpointName]>, options?: PrefetchOptions) => void;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a",children:"\u81ea\u5b9a\u4e49\u94a9\u5b50\u884c\u4e3a"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u58f0\u660e\u94a9\u5b50\u6216\u5728\u8c03\u7528\u7ad9\u70b9\u65f6\u6307\u5b9a\u8fd9\u4e9b\u9884\u53d6\u9009\u9879\u3002\u8c03\u7528\u7ad9\u70b9\u5c06\u4f18\u5148\u4e8e\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ifOlderThan"})," - (default: ",(0,r.jsx)(n.code,{children:"false"})," | ",(0,r.jsx)(n.code,{children:"number"}),") - ",(0,r.jsx)(n.em,{children:"number is value in seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If specified, it will only run the query if the difference between ",(0,r.jsx)(n.code,{children:"new Date()"})," and the last ",(0,r.jsx)(n.code,{children:"fulfilledTimeStamp"})," is greater than the given value"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"force"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"force: true"}),", it will ignore the ",(0,r.jsx)(n.code,{children:"ifOlderThan"})," value if it is set and the query will be run even if it exists in the cache."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u89e6\u53d1\u51fd\u6570\u884c\u4e3a",children:"\u89e6\u53d1\u51fd\u6570\u884c\u4e3a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u89e6\u53d1\u51fd\u6570 ",(0,r.jsx)(n.em,{children:"\u603b\u662f"})," \u8fd4\u56de ",(0,r.jsx)(n.code,{children:"void"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u5728\u58f0\u660e\u6216\u8c03\u7528\u7ad9\u70b9\u8bbe\u7f6e\u4e86 ",(0,r.jsx)(n.code,{children:"force: true"}),"\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u8fd0\u884c\u67e5\u8be2\u3002\u552f\u4e00\u7684\u4f8b\u5916\u662f\u5982\u679c\u76f8\u540c\u7684\u67e5\u8be2\u5df2\u7ecf\u5728\u8fdb\u884c\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u9009\u9879\u5e76\u4e14\u67e5\u8be2\u5b58\u5728\u4e8e\u7f13\u5b58\u4e2d\uff0c\u5c06\u4e0d\u4f1a\u6267\u884c\u67e5\u8be2\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u9009\u9879\u5e76\u4e14\u67e5\u8be2 ",(0,r.jsx)(n.em,{children:"\u4e0d\u5b58\u5728\u4e8e"})," \u7f13\u5b58\u4e2d\uff0c\u5c06\u4f1a\u6267\u884c\u67e5\u8be2\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5047\u8bbe"})," \u4f60\u5728\u6811\u4e2d\u6709\u4e00\u4e2a\u8ba2\u9605\u4e86\u4f60\u6b63\u5728\u9884\u53d6\u7684\u76f8\u540c\u67e5\u8be2\u7684 ",(0,r.jsx)(n.code,{children:"useQuery"})," \u94a9\u5b50\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useQuery"})," \u5c06\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"{isLoading: true, isFetching: true, ...rest}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6307\u5b9a\u4e86 ",(0,r.jsx)(n.code,{children:"ifOlderThan"})," \u4f46\u8ba1\u7b97\u7ed3\u679c\u4e3a false \u5e76\u4e14\u67e5\u8be2\u5728\u7f13\u5b58\u4e2d\uff0c\u5c06\u4e0d\u4f1a\u6267\u884c\u67e5\u8be2\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6307\u5b9a\u4e86 ",(0,r.jsx)(n.code,{children:"ifOlderThan"})," \u5e76\u4e14\u8ba1\u7b97\u7ed3\u679c\u4e3a true\uff0c\u5373\u4f7f\u5b58\u5728\u73b0\u6709\u7684\u7f13\u5b58\u6761\u76ee\uff0c\u4e5f\u4f1a\u6267\u884c\u67e5\u8be2\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5047\u8bbe"})," \u4f60\u5728\u6811\u4e2d\u6709\u4e00\u4e2a\u8ba2\u9605\u4e86\u4f60\u6b63\u5728\u9884\u53d6\u7684\u76f8\u540c\u67e5\u8be2\u7684 ",(0,r.jsx)(n.code,{children:"useQuery"})," \u94a9\u5b50\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useQuery"})," \u5c06\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"{isLoading: false, isFetching: true, ...rest}"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="usePrefetch \u793a\u4f8b"',children:"function User() {\n  const prefetchUser = usePrefetch('getUser')\n\n  // \u4f4e\u4f18\u5148\u7ea7\u7684\u60ac\u505c\u5c06\u4e0d\u4f1a\u89e6\u53d1\uff0c\u9664\u975e\u4e0a\u6b21\u8bf7\u6c42\u53d1\u751f\u572835s\u524d\n  // \u9ad8\u4f18\u5148\u7ea7\u7684\u60ac\u505c\u5c06 _\u603b\u662f_ \u89e6\u53d1\n  return (\n    <div>\n      <button onMouseEnter={() => prefetchUser(4, { ifOlderThan: 35 })}>\n        \u4f4e\u4f18\u5148\u7ea7\n      </button>\n      <button onMouseEnter={() => prefetchUser(4, { force: true })}>\n        \u9ad8\u4f18\u5148\u7ea7\n      </button>\n    </div>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u98df\u8c31\u7acb\u5373\u9884\u53d6",children:"\u98df\u8c31\uff1a\u7acb\u5373\u9884\u53d6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u7acb\u5373\u9884\u53d6\u4e00\u4e2a\u8d44\u6e90\u3002\u4f60\u53ef\u4ee5\u7528\u51e0\u884c\u4ee3\u7801\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="hooks/usePrefetchImmediately.ts" no-transpile',children:"type EndpointNames = keyof typeof api.endpoints\n\nexport function usePrefetchImmediately<T extends EndpointNames>(\n  endpoint: T,\n  arg: Parameters<(typeof api.endpoints)[T]['initiate']>[0],\n  options: PrefetchOptions = {},\n) {\n  const dispatch = useAppDispatch()\n  useEffect(() => {\n    dispatch(api.util.prefetch(endpoint, arg as any, options))\n  }, [])\n}\n\n// \u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\nusePrefetchImmediately('getUser', 5)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u4f7f\u7528\u94a9\u5b50\u7684\u9884\u53d6",children:"\u4e0d\u4f7f\u7528\u94a9\u5b50\u7684\u9884\u53d6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"usePrefetch"})," \u94a9\u5b50\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u6846\u67b6\u4e2d\u81ea\u5df1\u91cd\u73b0\u76f8\u540c\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f60\u50cf\u4e0b\u9762\u8fd9\u6837\u5206\u6d3e ",(0,r.jsx)(n.code,{children:"prefetch"})," thunk \u65f6\uff0c\u4f60\u4f1a\u770b\u5230\u4e0e",(0,r.jsx)(n.a,{href:"#trigger-function-behavior",children:"\u8fd9\u91cc\u63cf\u8ff0\u7684"}),"\u5b8c\u5168\u76f8\u540c\u7684\u884c\u4e3a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="\u975e\u94a9\u5b50\u9884\u53d6\u793a\u4f8b" no-transpile',children:"store.dispatch(\n  api.util.prefetch(endpointName, arg, { force: false, ifOlderThan: 10 }),\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5206\u6d3e\u67e5\u8be2\u64cd\u4f5c\uff0c\u4f46\u4f60\u9700\u8981\u8d1f\u8d23\u5b9e\u73b0\u4efb\u4f55\u989d\u5916\u7684\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="\u624b\u52a8\u9884\u53d6\u7684\u66ff\u4ee3\u65b9\u6cd5" no-transpile',children:"dispatch(api.endpoints[endpointName].initiate(arg, { forceRefetch: true }))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9884\u53d6\u793a\u4f8b",children:"\u9884\u53d6\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u672c\u9884\u53d6",children:"\u57fa\u672c\u9884\u53d6"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u57fa\u672c\u7684\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5f53\u7528\u6237\u60ac\u505c\u5728\u4e0b\u4e00\u4e2a\u7bad\u5934\u4e0a\u65f6\uff0c\u4f60\u53ef\u4ee5\u5982\u4f55\u9884\u53d6\u3002\u8fd9\u53ef\u80fd\u4e0d\u662f\u6700\u4f18\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a\u5982\u679c\u4ed6\u4eec\u60ac\u505c\uff0c\u70b9\u51fb\uff0c\u7136\u540e\u5728\u4e0d\u79fb\u52a8\u9f20\u6807\u7684\u60c5\u51b5\u4e0b\u66f4\u6539\u9875\u9762\uff0c\u6211\u4eec\u4e0d\u4f1a\u77e5\u9053\u8981\u9884\u53d6\u4e0b\u4e00\u9875\uff0c\u56e0\u4e3a\u6211\u4eec\u4e0d\u4f1a\u770b\u5230\u4e0b\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"onMouseEnter"})," \u4e8b\u4ef6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u81ea\u5df1\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\u3002\u4f60\u4e5f\u53ef\u4ee5\u8003\u8651\u81ea\u52a8\u9884\u53d6\u4e0b\u4e00\u9875..."]}),"\n",(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Prefetching Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u52a8\u9884\u53d6",children:"\u81ea\u52a8\u9884\u53d6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u6700\u540e\u4e00\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u81ea\u52a8 ",(0,r.jsx)(n.code,{children:"prefetch"})," \u4e0b\u4e00\u9875\uff0c\u7ed9\u4eba\u4e00\u79cd\u6ca1\u6709\u7f51\u7edc\u5ef6\u8fdf\u7684\u611f\u89c9\u3002"]}),"\n",(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching-automatic?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Automatic Prefetching Example (on hover)",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),"\n",(0,r.jsx)(n.h3,{id:"\u9884\u53d6\u6240\u6709\u5df2\u77e5\u9875\u9762",children:"\u9884\u53d6\u6240\u6709\u5df2\u77e5\u9875\u9762"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"useQuery"})," \u521d\u59cb\u5316\u7684\u7b2c\u4e00\u4e2a\u67e5\u8be2\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u83b7\u53d6\u6240\u6709\u5269\u4f59\u7684\u9875\u9762\u3002"]}),"\n",(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/prefetching-automatic-waterfall?fontsize=12&runonclick=1&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Fposts%2FPostsManager.tsx",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Automatic Prefetching Waterfall Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);