"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9448],{8634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=r(4848),c=r(8453),l=r(9760);const i={id:"createSelectorCreator",title:"\u521b\u5efa\u9009\u62e9\u5668\u521b\u5efa\u5668",sidebar_label:"\u521b\u5efa\u9009\u62e9\u5668\u521b\u5efa\u5668",hide_title:!0,description:"createSelectorCreator"},n="createSelectorCreator",s={id:"reselect/api/createSelectorCreator",title:"\u521b\u5efa\u9009\u62e9\u5668\u521b\u5efa\u5668",description:"createSelectorCreator",source:"@site/docs/reselect/api/createSelectorCreator.mdx",sourceDirName:"reselect/api",slug:"/reselect/api/createSelectorCreator",permalink:"/redux-toolkit-zh/reselect/api/createSelectorCreator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reselect/api/createSelectorCreator.mdx",tags:[],version:"current",frontMatter:{id:"createSelectorCreator",title:"\u521b\u5efa\u9009\u62e9\u5668\u521b\u5efa\u5668",sidebar_label:"\u521b\u5efa\u9009\u62e9\u5668\u521b\u5efa\u5668",hide_title:!0,description:"createSelectorCreator"},sidebar:"reselect",previous:{title:"\u521b\u5efa\u9009\u62e9\u5668",permalink:"/redux-toolkit-zh/reselect/api/createSelector"},next:{title:"\u521b\u5efa\u7ed3\u6784\u5316\u9009\u62e9\u5668",permalink:"/redux-toolkit-zh/reselect/api/createStructuredSelector"}},d={},a=[{value:"\u53c2\u6570 (\u4ece 5.0.0 \u5f00\u59cb)",id:"\u53c2\u6570-\u4ece-500-\u5f00\u59cb",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u7c7b\u578b\u53c2\u6570",id:"\u7c7b\u578b\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528 <code>options</code> (\u4ece 5.0.0 \u5f00\u59cb)",id:"\u4f7f\u7528-options-\u4ece-500-\u5f00\u59cb",level:3},{value:"\u4f7f\u7528 <code>memoize</code> \u548c <code>...memoizeOptions</code>",id:"\u4f7f\u7528-memoize-\u548c-memoizeoptions",level:3},{value:"\u989d\u5916\u7684\u4f8b\u5b50",id:"\u989d\u5916\u7684\u4f8b\u5b50",level:3},{value:"\u4e3a <code>lruMemoize</code> \u5b9a\u5236 <code>equalityCheck</code>",id:"\u4e3a-lrumemoize-\u5b9a\u5236-equalitycheck",level:4},{value:"\u4f7f\u7528 Lodash \u7684 memoize \u51fd\u6570\u8fdb\u884c\u65e0\u754c\u7f13\u5b58",id:"\u4f7f\u7528-lodash-\u7684-memoize-\u51fd\u6570\u8fdb\u884c\u65e0\u754c\u7f13\u5b58",level:4}];function m(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return l.d||h("InternalLinks",!1),l.d.CreateSelector||h("InternalLinks.CreateSelector",!0),l.d.OutputSelector||h("InternalLinks.OutputSelector",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"createselectorcreator",children:(0,o.jsx)(t.code,{children:"createSelectorCreator"})}),"\n",(0,o.jsxs)(t.p,{children:["\u63a5\u53d7\u4e00\u4e2a ",(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\u548c ",(0,o.jsx)(t.code,{children:"...memoizeOptions"})," \u5269\u4f59\u53c2\u6570\uff0c\u6216\u8005\u4ece 5.0.0 \u5f00\u59cb\u63a5\u53d7\u4e00\u4e2a\u5305\u542b ",(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\u7684 ",(0,o.jsx)(t.code,{children:"options"})," \u5bf9\u8c61\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u9009\u62e9\u5668\u521b\u5efa\u51fd\u6570\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u53c2\u6570-\u4ece-500-\u5f00\u59cb",children:"\u53c2\u6570 (\u4ece 5.0.0 \u5f00\u59cb)"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u4e00\u4e2a\u5305\u542b ",(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\u7684\u9009\u9879\u5bf9\u8c61\uff0c\u8be5\u51fd\u6570\u8d1f\u8d23\u5728 ",(0,o.jsx)(l.d.CreateSelector,{})," \u5185\u90e8\u5bf9 ",(0,o.jsx)(t.code,{children:"resultFunc"})," \u8fdb\u884c\u8bb0\u5fc6\u5316\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002\u5b83\u8fd8\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u9009\u9879\u7528\u4e8e\u81ea\u5b9a\u4e49\u8bb0\u5fc6\u5316\u3002\u867d\u7136 ",(0,o.jsx)(t.code,{children:"memoize"})," \u5c5e\u6027\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5176\u4f59\u7684\u90fd\u662f\u53ef\u9009\u7684\u3002"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options.argsMemoize?"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u7528\u4e8e\u8bb0\u5fc6\u5316\u7531 ",(0,o.jsx)(l.d.CreateSelector,{})," \u751f\u6210\u7684 ",(0,o.jsx)(l.d.OutputSelector,{})," \u63a5\u6536\u7684\u53c2\u6570\u7684\u53ef\u9009\u8bb0\u5fc6\u5316\u51fd\u6570\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002",(0,o.jsx)("br",{})," ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"\u9ed8\u8ba4\u503c"})})," = 5.0.0 \u4e4b\u524d\u4e3a ",(0,o.jsx)(t.code,{children:"lruMemoize"}),"\uff0c\u4e4b\u540e\u4e3a ",(0,o.jsx)(t.code,{children:"weakMapMemoize"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options.argsMemoizeOptions?"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,o.jsx)(t.code,{children:"argsMemoize"})," \u51fd\u6570\u7684\u53ef\u9009\u914d\u7f6e\u9009\u9879\u3002\u8fd9\u4e9b\u9009\u9879\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,o.jsx)(t.code,{children:"argsMemoize"})," \u51fd\u6570\u3002",(0,o.jsx)("br",{})," \u4ece 5.0.0 \u5f00\u59cb"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options.inputStabilityCheck?"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u8986\u76d6\u9009\u62e9\u5668\u7684\u5168\u5c40\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u3002\u53ef\u80fd\u7684\u503c\u5305\u62ec\uff1a",(0,o.jsx)("br",{})," ",(0,o.jsx)(t.code,{children:"once"})," - \u53ea\u5728\u9009\u62e9\u5668\u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u65f6\u8fd0\u884c\u3002",(0,o.jsx)("br",{})," ",(0,o.jsx)(t.code,{children:"always"})," - \u6bcf\u6b21\u9009\u62e9\u5668\u88ab\u8c03\u7528\u65f6\u90fd\u8fd0\u884c\u3002",(0,o.jsx)("br",{})," ",(0,o.jsx)(t.code,{children:"never"})," - \u4ece\u4e0d\u8fd0\u884c\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u3002",(0,o.jsx)("br",{})," ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"\u9ed8\u8ba4\u503c"})})," = ",(0,o.jsx)(t.code,{children:"'once'"})," ",(0,o.jsx)("br",{})," \u4ece 5.0.0 \u5f00\u59cb"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options.memoize"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u7528\u4e8e\u5728 ",(0,o.jsx)(l.d.CreateSelector,{})," \u5185\u90e8\u5bf9 ",(0,o.jsx)(t.code,{children:"resultFunc"})," \u8fdb\u884c\u8bb0\u5fc6\u5316\u7684\u8bb0\u5fc6\u5316\u51fd\u6570\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002\u4ece 5.0.0 \u5f00\u59cb"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"options.memoizeOptions?"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\u7684\u53ef\u9009\u914d\u7f6e\u9009\u9879\u3002\u8fd9\u4e9b\u9009\u9879\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\u3002",(0,o.jsx)("br",{})," \u4ece 5.0.0 \u5f00\u59cb"]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"memoize"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u8d1f\u8d23\u5728 ",(0,o.jsx)(l.d.CreateSelector,{})," \u5185\u90e8\u5bf9 ",(0,o.jsx)(t.code,{children:"resultFunc"})," \u8fdb\u884c\u8bb0\u5fc6\u5316\u7684 ",(0,o.jsx)(t.code,{children:"memoize"})," \u51fd\u6570\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"...memoizeOptionsFromArgs"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bb0\u5fc6\u5316\u51fd\u6570\u7684\u53ef\u9009\u914d\u7f6e\u9009\u9879\u3002\u8fd9\u4e9b\u9009\u9879\u7136\u540e\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9\u8bb0\u5fc6\u5316\u51fd\u6570\u3002"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,o.jsxs)(t.p,{children:["\u4e00\u4e2a\u5b9a\u5236\u7684 ",(0,o.jsx)(l.d.CreateSelector,{})," \u51fd\u6570\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u7c7b\u578b\u53c2\u6570",children:"\u7c7b\u578b\u53c2\u6570"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"MemoizeFunction"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u7528\u4e8e\u5728 ",(0,o.jsx)(l.d.CreateSelector,{})," \u5185\u90e8\u5bf9 ",(0,o.jsx)(t.code,{children:"resultFunc"})," \u8fdb\u884c\u8bb0\u5fc6\u5316\u7684\u8bb0\u5fc6\u5316\u51fd\u6570\u7684\u7c7b\u578b\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"ArgsMemoizeFunction"})}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["\u7528\u4e8e\u8bb0\u5fc6\u5316\u7531 ",(0,o.jsx)(l.d.CreateSelector,{})," \u751f\u6210\u7684 ",(0,o.jsx)(l.d.OutputSelector,{})," \u63a5\u6536\u7684\u53c2\u6570\u7684\u53ef\u9009\u8bb0\u5fc6\u5316\u51fd\u6570\u7684\u7c7b\u578b\uff08\u4f8b\u5982\uff0c",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u6216 ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002\u5982\u679c\u6ca1\u6709\u660e\u786e\u63d0\u4f9b\uff0c\u5c06\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"lruMemoize"}),"\u3002"]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsxs)(t.h3,{id:"\u4f7f\u7528-options-\u4ece-500-\u5f00\u59cb",children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"options"})," (\u4ece 5.0.0 \u5f00\u59cb)"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const customCreateSelector = createSelectorCreator({\r\n  memoize: customMemoize, // \u7528\u4e8e\u8bb0\u5fc6\u5316 `resultFunc` \u7684\u51fd\u6570\r\n  memoizeOptions: [memoizeOption1, memoizeOption2], // \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize` \u7684\u9009\u9879\r\n  argsMemoize: customArgsMemoize, // \u7528\u4e8e\u8bb0\u5fc6\u5316\u9009\u62e9\u5668\u7684\u53c2\u6570\u7684\u51fd\u6570\r\n  argsMemoizeOptions: [argsMemoizeOption1, argsMemoizeOption2] // \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customArgsMemoize` \u7684\u9009\u9879\r\n})\r\n\r\nconst customSelector = customCreateSelector(\r\n  [inputSelector1, inputSelector2],\r\n  resultFunc // `resultFunc` \u5c06\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize`\r\n)\r\n\r\ncustomSelector(\r\n  ...selectorArgs // \u5c06\u7531 `customArgsMemoize` \u8fdb\u884c\u8bb0\u5fc6\u5316\r\n)\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"\u4f7f\u7528-memoize-\u548c-memoizeoptions",children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"memoize"})," \u548c ",(0,o.jsx)(t.code,{children:"...memoizeOptions"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"createSelectorCreator"})," \u53ef\u4ee5\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u5b9a\u5236\u7248\u672c\u7684 ",(0,o.jsx)(l.d.CreateSelector,{}),"\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"memoize"})," \u53c2\u6570\u662f\u4e00\u4e2a\u7528\u6765\u66ff\u6362\u9ed8\u8ba4\u914d\u7f6e\u7684 memoizer \u7684 memoization \u51fd\u6570\uff08\u901a\u5e38\u662f ",(0,o.jsx)(t.code,{children:"weakMapMemoize"}),"\uff09\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"...memoizeOptions"})," \u5269\u4f59\u53c2\u6570\u662f\u96f6\u4e2a\u6216\u591a\u4e2a\u8981\u4f20\u9012\u7ed9 ",(0,o.jsx)(t.code,{children:"memoizeFunc"})," \u7684\u914d\u7f6e\u9009\u9879\u3002\u9009\u62e9\u5668\u7684 ",(0,o.jsx)(t.code,{children:"resultFunc"})," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,o.jsx)(t.code,{children:"memoize"}),"\uff0c",(0,o.jsx)(t.code,{children:"memoizeOptions"})," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f00\u59cb\u4f20\u9012\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const customSelectorCreator = createSelectorCreator(\r\n  customMemoize, // \u7528\u4e8e memoize `resultFunc` \u7684\u51fd\u6570\r\n  option1, // `option1` \u5c06\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize`\r\n  option2, // `option2` \u5c06\u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize`\r\n  option3 // `option3` \u5c06\u4f5c\u4e3a\u7b2c\u56db\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize`\r\n)\r\n\r\nconst customSelector = customSelectorCreator(\r\n  [inputSelector1, inputSelector2],\r\n  resultFunc // `resultFunc` \u5c06\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 `customMemoize`\r\n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u5185\u90e8\uff0c",(0,o.jsx)(t.code,{children:"customSelector"})," \u5982\u4e0b\u6240\u793a\u8c03\u7528 memoize \u51fd\u6570\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"customMemoize(resultFunc, option1, option2, option3)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\u989d\u5916\u7684\u4f8b\u5b50",children:"\u989d\u5916\u7684\u4f8b\u5b50"}),"\n",(0,o.jsxs)(t.h4,{id:"\u4e3a-lrumemoize-\u5b9a\u5236-equalitycheck",children:["\u4e3a ",(0,o.jsx)(t.code,{children:"lruMemoize"})," \u5b9a\u5236 ",(0,o.jsx)(t.code,{children:"equalityCheck"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { createSelectorCreator, lruMemoize } from 'reselect'\r\nimport isEqual from 'lodash.isequal'\r\n\r\n// \u521b\u5efa\u4e00\u4e2a\u4f7f\u7528 lodash.isequal \u800c\u4e0d\u662f === \u7684 \"selector creator\"\r\nconst createDeepEqualSelector = createSelectorCreator(lruMemoize, isEqual)\r\n\r\n// \u4f7f\u7528\u65b0\u7684 \"selector creator\" \u521b\u5efa\u4e00\u4e2a\u9009\u62e9\u5668\r\nconst selectSum = createDeepEqualSelector(\r\n  [state => state.values.filter(val => val < 5)],\r\n  values => values.reduce((acc, val) => acc + val, 0)\r\n)\n"})}),"\n",(0,o.jsx)(t.h4,{id:"\u4f7f\u7528-lodash-\u7684-memoize-\u51fd\u6570\u8fdb\u884c\u65e0\u754c\u7f13\u5b58",children:"\u4f7f\u7528 Lodash \u7684 memoize \u51fd\u6570\u8fdb\u884c\u65e0\u754c\u7f13\u5b58"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { createSelectorCreator } from 'reselect'\r\nimport memoize from 'lodash.memoize'\r\n\r\nconst hashFn = (...args) =>\r\n  args.reduce((acc, val) => acc + '-' + JSON.stringify(val), '')\r\n\r\nconst customSelectorCreator = createSelectorCreator(memoize, hashFn)\r\n\r\nconst selector = customSelectorCreator(\r\n  [state => state.a, state => state.b],\r\n  (a, b) => a + b\r\n)\n"})})]})}function x(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9760:(e,t,r)=>{r.d(t,{d:()=>i});var o=r(8774),c=r(6540),l=r(4848);const i={Selector:(0,c.memo)((e=>{let{text:t="selector"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#selector-function",title:"Selector Function",children:t})})),InputSelectors:(0,c.memo)((e=>{let{text:t="input selectors"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#input-selectors",title:"Input Selectors",children:t})})),OutputSelector:(0,c.memo)((e=>{let{text:t="output selector"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#output-selector",title:"Output Selector",children:t})})),ResultFunction:(0,c.memo)((e=>{let{text:t="result function"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#result-function",title:"Result Function",children:t})})),Dependencies:(0,c.memo)((e=>{let{text:t="dependencies"}=e;return(0,l.jsx)(o.A,{to:"/introduction/getting-started#dependencies",title:"Dependencies",children:t})})),CascadingMemoization:(0,c.memo)((e=>{let{text:t="Cascading Memoization"}=e;return(0,l.jsxs)(o.A,{to:"/introduction/how-does-reselect-work#cascading-memoization",title:"Cascading Memoization",children:['"',t,'"']})})),OutputSelectorFields:(0,c.memo)((e=>{let{text:t="Output Selector Fields"}=e;return(0,l.jsx)(o.A,{to:"/api/createSelector#output-selector-fields",title:"Output Selector Fields",children:t})})),CreateSelector:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createSelector",title:"createSelector",children:(0,l.jsx)("code",{children:"createSelector"})}))),CreateSelectorCreator:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createSelectorCreator",title:"createSelectorCreator",children:(0,l.jsx)("code",{children:"createSelectorCreator"})}))),LruMemoize:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/lruMemoize",title:"lruMemoize",children:(0,l.jsx)("code",{children:"lruMemoize"})}))),WeakMapMemoize:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/weakMapMemoize",title:"weakMapMemoize",children:(0,l.jsx)("code",{children:"weakMapMemoize"})}))),UnstableAutotrackMemoize:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/unstable_autotrackMemoize",title:"unstable_autotrackMemoize",children:(0,l.jsx)("code",{children:"unstable_autotrackMemoize"})}))),CreateStructuredSelector:(0,c.memo)((()=>(0,l.jsx)(o.A,{to:"/api/createStructuredSelector",title:"createStructuredSelector",children:(0,l.jsx)("code",{children:"createStructuredSelector"})})))}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>n});var o=r(6540);const c={},l=o.createContext(c);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);