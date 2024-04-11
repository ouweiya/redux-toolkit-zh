"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[1213],{2085:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=o(4848),s=o(8453),r=o(9760),i=o(782);const c={id:"how-does-reselect-work",title:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",sidebar_label:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",hide_title:!0,description:"How Does Reselect Work?"},l="Reselect \u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",d={id:"reselect/introduction/how-does-reselect-work",title:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",description:"How Does Reselect Work?",source:"@site/docs/reselect/introduction/how-does-reselect-work.mdx",sourceDirName:"reselect/introduction",slug:"/reselect/introduction/how-does-reselect-work",permalink:"/redux-toolkit-zh/reselect/introduction/how-does-reselect-work",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/reselect/introduction/how-does-reselect-work.mdx",tags:[],version:"current",frontMatter:{id:"how-does-reselect-work",title:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",sidebar_label:"Reselect\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",hide_title:!0,description:"How Does Reselect Work?"},sidebar:"reselect",previous:{title:"Reselect \u5165\u95e8\u6307\u5357",permalink:"/redux-toolkit-zh/reselect/introduction/getting-started"},next:{title:"5.0.0\u7248\u672c\u4e2d\u6709\u4ec0\u4e48\u65b0\u529f\u80fd\uff1f",permalink:"/redux-toolkit-zh/reselect/introduction/v5-summary"}},a={},u=[{value:"\u7ea7\u8054 Memoization",id:"\u7ea7\u8054-memoization",level:2},{value:"Reselect \u4e0e\u6807\u51c6 Memoization \u7684\u6bd4\u8f83",id:"reselect-\u4e0e\u6807\u51c6-memoization-\u7684\u6bd4\u8f83",level:3},{value:"\u6807\u51c6 Memoization",id:"\u6807\u51c6-memoization",level:4},{value:"\u4f7f\u7528 Reselect \u7684 Memoization",id:"\u4f7f\u7528-reselect-\u7684-memoization",level:4},{value:"\u4e3a\u4ec0\u4e48 Reselect \u7ecf\u5e38\u4e0e <ExternalLinks.Redux>Redux</ExternalLinks.Redux> \u4e00\u8d77\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48-reselect-\u7ecf\u5e38\u4e0e-redux-\u4e00\u8d77\u4f7f\u7528",level:2}];function x(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return i.t||h("ExternalLinks",!1),i.t.Memoization||h("ExternalLinks.Memoization",!0),i.t.Redux||h("ExternalLinks.Redux",!0),r.d||h("InternalLinks",!1),r.d.CascadingMemoization||h("InternalLinks.CascadingMemoization",!0),r.d.InputSelectors||h("InternalLinks.InputSelectors",!0),r.d.OutputSelector||h("InternalLinks.OutputSelector",!0),r.d.ResultFunction||h("InternalLinks.ResultFunction",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reselect-\u662f\u5982\u4f55\u5de5\u4f5c\u7684",children:"Reselect \u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"}),"\n",(0,n.jsxs)(t.p,{children:["Reselect\uff0c\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0c\u662f\u4e00\u4e2a\u7528\u4e8e\u5728 JavaScript \u5e94\u7528\u4e2d\u521b\u5efa memoized \u9009\u62e9\u5668\u7684\u5e93\u3002\u5b83\u7684\u4e3b\u8981\u89d2\u8272\u662f\u6839\u636e\u63d0\u4f9b\u7684\u8f93\u5165\u6709\u6548\u5730\u8ba1\u7b97\u6d3e\u751f\u6570\u636e\u3002Reselect \u5185\u90e8\u673a\u5236\u7684\u4e00\u4e2a\u5173\u952e\u65b9\u9762\u662f\u5b83\u5982\u4f55\u7ec4\u7ec7\u4ece\u6700\u7ec8\u9009\u62e9\u5668\u5230\u5176\u7ec4\u6210\u7684 ",(0,n.jsx)(r.d.InputSelectors,{})," \u7684\u53c2\u6570\u6d41\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const finalSelector = (...args) => {\r\n  const extractedValues = inputSelectors.map(inputSelector =>\r\n    inputSelector(...args)\r\n  )\r\n  return resultFunc(...extractedValues)\r\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e2d\uff0c",(0,n.jsx)(t.code,{children:"finalSelector"})," \u7531\u51e0\u4e2a ",(0,n.jsx)(r.d.InputSelectors,{})," \u7ec4\u6210\uff0c",(0,n.jsx)(t.strong,{children:"\u6240\u6709\u8fd9\u4e9b\u9009\u62e9\u5668\u90fd\u63a5\u6536\u4e0e\u6700\u7ec8\u9009\u62e9\u5668\u76f8\u540c\u7684\u53c2\u6570"}),"\u3002\u6bcf\u4e2a\u8f93\u5165\u9009\u62e9\u5668\u5904\u7406\u5176\u6570\u636e\u7684\u4e00\u90e8\u5206\uff0c\u7136\u540e\u7ed3\u679c\u88ab\u7ec4\u5408\u5e76\u7531 ",(0,n.jsx)(r.d.ResultFunction,{})," \u8fdb\u4e00\u6b65\u5904\u7406\u3002\u7406\u89e3\u8fd9\u79cd\u53c2\u6570\u6d41\u5bf9\u4e8e\u7406\u89e3 Reselect \u5982\u4f55\u4f18\u5316\u6570\u636e\u8ba1\u7b97\u548c\u6700\u5c0f\u5316\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u8ba1\u7b97\u81f3\u5173\u91cd\u8981\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u7ea7\u8054-memoization",children:"\u7ea7\u8054 Memoization"}),"\n",(0,n.jsx)(t.p,{children:'Reselect \u4f7f\u7528\u4e24\u9636\u6bb5\u7684 "\u7ea7\u8054" \u65b9\u6cd5\u6765 memoizing \u51fd\u6570\uff1a'}),"\n",(0,n.jsx)(t.p,{children:"Reselect \u7684\u5de5\u4f5c\u65b9\u5f0f\u53ef\u4ee5\u5206\u89e3\u4e3a\u591a\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u521d\u59cb\u8fd0\u884c"}),"\uff1a\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\uff0cReselect \u8fd0\u884c\u6240\u6709\u7684 ",(0,n.jsx)(r.d.InputSelectors,{}),"\uff0c\u6536\u96c6\u5b83\u4eec\u7684\u7ed3\u679c\uff0c\u5e76\u5c06\u5b83\u4eec\u4f20\u9012\u7ed9 ",(0,n.jsx)(r.d.ResultFunction,{}),"\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u540e\u7eed\u8fd0\u884c"}),"\uff1a\u5bf9\u4e8e\u540e\u7eed\u7684\u8c03\u7528\uff0cReselect \u6267\u884c\u4e24\u7ea7\u68c0\u67e5\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u7b2c\u4e00\u7ea7"}),"\uff1a\u5b83\u5c06\u5f53\u524d\u7684\u53c2\u6570\u4e0e\u4e4b\u524d\u7684\u53c2\u6570\u8fdb\u884c\u6bd4\u8f83\uff08\u7531 ",(0,n.jsx)(t.code,{children:"argsMemoize"})," \u5b8c\u6210\uff09\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u5b83\u4eec\u76f8\u540c\uff0c\u5b83\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\uff0c\u800c\u4e0d\u8fd0\u884c ",(0,n.jsx)(r.d.InputSelectors,{})," \u6216 ",(0,n.jsx)(r.d.ResultFunction,{}),"\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'\u5982\u679c\u5b83\u4eec\u4e0d\u540c\uff0c\u5b83\u7ee7\u7eed\uff08"\u7ea7\u8054"\uff09\u5230\u7b2c\u4e8c\u7ea7\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u7b2c\u4e8c\u7ea7"}),"\uff1a\u5b83\u8fd0\u884c ",(0,n.jsx)(r.d.InputSelectors,{})," \u5e76\u5c06\u5b83\u4eec\u5f53\u524d\u7684\u7ed3\u679c\u4e0e\u4e4b\u524d\u7684\u7ed3\u679c\u8fdb\u884c\u6bd4\u8f83\uff08\u7531 ",(0,n.jsx)(t.code,{children:"memoize"})," \u5b8c\u6210\uff09\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4efb\u4f55\u4e00\u4e2a ",(0,n.jsx)(r.d.InputSelectors,{})," \u8fd4\u56de\u4e00\u4e2a\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u6240\u6709\u7684 ",(0,n.jsx)(r.d.InputSelectors,{})," \u90fd\u5c06\u91cd\u65b0\u8ba1\u7b97\u3002"]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u5982\u679c\u7ed3\u679c\u76f8\u540c\uff0c\u5b83\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\uff0c\u800c\u4e0d\u8fd0\u884c ",(0,n.jsx)(r.d.ResultFunction,{}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:["\u5982\u679c\u7ed3\u679c\u4e0d\u540c\uff0c\u5b83\u8fd0\u884c ",(0,n.jsx)(r.d.ResultFunction,{}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u79f0\u8fd9\u79cd\u884c\u4e3a\u4e3a ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"\u7ea7\u8054 Memoization"})}),"\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"reselect-\u4e0e\u6807\u51c6-memoization-\u7684\u6bd4\u8f83",children:"Reselect \u4e0e\u6807\u51c6 Memoization \u7684\u6bd4\u8f83"}),"\n",(0,n.jsx)(t.h4,{id:"\u6807\u51c6-memoization",children:"\u6807\u51c6 Memoization"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"normal-memoization-function",src:o(4405).A+"",width:"685",height:"294"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u6807\u51c6 memoization \u53ea\u6bd4\u8f83\u53c2\u6570\u3002\u5982\u679c\u5b83\u4eec\u76f8\u540c\uff0c\u5b83\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002"})}),"\n",(0,n.jsx)(t.h4,{id:"\u4f7f\u7528-reselect-\u7684-memoization",children:"\u4f7f\u7528 Reselect \u7684 Memoization"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"reselect-memoization",src:o(1732).A+"",width:"931",height:"441"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Reselect \u901a\u8fc7 ",(0,n.jsx)(r.d.InputSelectors,{})," \u6dfb\u52a0\u4e86\u7b2c\u4e8c\u5c42\u68c0\u67e5\u3002\u8fd9\u5728 ",(0,n.jsx)(i.t.Redux,{})," \u5e94\u7528\u4e2d\u81f3\u5173\u91cd\u8981\uff0c\u5176\u4e2d\u72b6\u6001\u5f15\u7528\u7ecf\u5e38\u53d8\u5316\u3002"]})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e00\u4e2a\u6b63\u5e38\u7684 ",(0,n.jsx)(i.t.Memoization,{})," \u51fd\u6570\u5c06\u6bd4\u8f83\u53c2\u6570\uff0c\u5982\u679c\u5b83\u4eec\u4e0e\u4e0a\u6b21\u76f8\u540c\uff0c\u5b83\u5c06\u8df3\u8fc7\u8fd0\u884c\u51fd\u6570\u5e76\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002\u7136\u800c\uff0cReselect \u901a\u8fc7\u5f15\u5165\u5176 ",(0,n.jsx)(r.d.InputSelectors,{})," \u7684\u7b2c\u4e8c\u5c42\u68c0\u67e5\u6765\u589e\u5f3a\u8fd9\u4e00\u70b9\u3002\u4f20\u9012\u7ed9\u8fd9\u4e9b ",(0,n.jsx)(r.d.InputSelectors,{})," \u7684\u53c2\u6570\u53ef\u80fd\u4f1a\u6539\u53d8\uff0c\u4f46\u5b83\u4eec\u7684\u7ed3\u679c\u4ecd\u7136\u76f8\u540c\u3002\u5f53\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u65f6\uff0cReselect \u907f\u514d\u91cd\u65b0\u6267\u884c ",(0,n.jsx)(r.d.ResultFunction,{}),"\uff0c\u5e76\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8fd9\u4e2a\u7279\u6027\u5728 ",(0,n.jsx)(i.t.Redux,{})," \u5e94\u7528\u4e2d\u53d8\u5f97\u81f3\u5173\u91cd\u8981\uff0c\u56e0\u4e3a\u6bcf\u5f53\u6d3e\u53d1\u4e00\u4e2a ",(0,n.jsx)(t.code,{children:"action"})," \u65f6\uff0c",(0,n.jsx)(t.code,{children:"state"})," \u90fd\u4f1a\u6539\u53d8\u5176\u5f15\u7528\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r.d.InputSelectors,{})," \u63a5\u6536\u4e0e ",(0,n.jsx)(r.d.OutputSelector,{})," \u76f8\u540c\u7684\u53c2\u6570\u3002"]})}),"\n",(0,n.jsxs)(t.h2,{id:"\u4e3a\u4ec0\u4e48-reselect-\u7ecf\u5e38\u4e0e-redux-\u4e00\u8d77\u4f7f\u7528",children:["\u4e3a\u4ec0\u4e48 Reselect \u7ecf\u5e38\u4e0e ",(0,n.jsx)(i.t.Redux,{children:"Redux"})," \u4e00\u8d77\u4f7f\u7528"]}),"\n",(0,n.jsx)(t.p,{children:"\u867d\u7136 Reselect \u53ef\u4ee5\u72ec\u7acb\u4e8e Redux \u4f7f\u7528\uff0c\u4f46\u5b83\u662f\u5927\u591a\u6570 Redux \u5e94\u7528\u4e2d\u7528\u4e8e\u5e2e\u52a9\u4f18\u5316\u8ba1\u7b97\u548c UI \u66f4\u65b0\u7684\u6807\u51c6\u5de5\u5177\uff1a"}),"\n",(0,n.jsx)(t.p,{children:"\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u50cf\u8fd9\u6837\u7684\u9009\u62e9\u5668\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const selectCompletedTodos = (state: RootState) =>\r\n  state.todos.filter(todo => todo.completed === true)\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6240\u4ee5\u4f60\u51b3\u5b9a\u5bf9\u5b83\u8fdb\u884c memoize\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const selectCompletedTodos = someMemoizeFunction((state: RootState) =>\r\n  state.todos.filter(todo => todo.completed === true)\r\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u7136\u540e\u4f60\u66f4\u65b0 ",(0,n.jsx)(t.code,{children:"state.alerts"}),"\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"store.dispatch(toggleRead(0))\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u73b0\u5728\u5f53\u4f60\u8c03\u7528 ",(0,n.jsx)(t.code,{children:"selectCompletedTodos"})," \u65f6\uff0c\u5b83\u91cd\u65b0\u8fd0\u884c\uff0c\u56e0\u4e3a\u6211\u4eec\u5b9e\u9645\u4e0a\u5df2\u7ecf\u7834\u574f\u4e86 memoization\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"selectCompletedTodos(store.getState())\r\n// \u4e0d\u4f1a\u8fd0\u884c\uff0c\u5c06\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002\r\nselectCompletedTodos(store.getState())\r\nstore.dispatch(toggleRead(0))\r\n// \u5b83\u91cd\u65b0\u8ba1\u7b97\u3002\r\nselectCompletedTodos(store.getState())\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4f46\u4e3a\u4ec0\u4e48\uff1f",(0,n.jsx)(t.code,{children:"selectCompletedTodos"})," \u53ea\u9700\u8981\u8bbf\u95ee ",(0,n.jsx)(t.code,{children:"state.todos"}),"\uff0c\u4e0e ",(0,n.jsx)(t.code,{children:"state.alerts"})," \u65e0\u5173\uff0c\u6240\u4ee5\u6211\u4eec\u4e3a\u4ec0\u4e48\u7834\u574f\u4e86 memoization\uff1f\u90a3\u662f\u56e0\u4e3a\u5728 ",(0,n.jsx)(i.t.Redux,{})," \u4e2d\uff0c\u6bcf\u5f53\u4f60\u5bf9\u6839 ",(0,n.jsx)(t.code,{children:"state"})," \u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5b83\u90fd\u4f1a\u88ab\u6d45\u66f4\u65b0\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u7684\u5f15\u7528\u4f1a\u6539\u53d8\uff0c\u56e0\u6b64\u4e00\u4e2a\u6b63\u5e38\u7684 memoization \u51fd\u6570\u5c06\u59cb\u7ec8\u5728\u53c2\u6570\u4e0a\u5931\u8d25\u68c0\u67e5\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u4f46\u662f\u4f7f\u7528 Reselect\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const selectCompletedTodos = createSelector(\r\n  [(state: RootState) => state.todos],\r\n  todos => todos.filter(todo => todo.completed === true)\r\n)\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86 memoization\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"selectCompletedTodos(store.getState())\r\n// \u4e0d\u4f1a\u8fd0\u884c\uff0c\u5c06\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002\r\nselectCompletedTodos(store.getState())\r\nstore.dispatch(toggleRead(0))\r\n// `input selectors` \u5c06\u8fd0\u884c\uff0c\u4f46 `result function` \u88ab\r\n// \u8df3\u8fc7\uff0c\u5c06\u8fd4\u56de\u7f13\u5b58\u7684\u7ed3\u679c\u3002\r\nselectCompletedTodos(store.getState())\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5373\u4f7f\u6574\u4f53 ",(0,n.jsx)(t.code,{children:"state"})," \u53d1\u751f\u53d8\u5316\uff0cReselect \u4e5f\u901a\u8fc7\u5176\u72ec\u7279\u7684\u65b9\u6cd5\u786e\u4fdd\u4e86\u6709\u6548\u7684 memoization\u3002\u5982\u679c ",(0,n.jsx)(t.code,{children:"state"})," \u7684\u76f8\u5173\u90e8\u5206\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e3a ",(0,n.jsx)(t.code,{children:"state.todos"}),"\uff09\u4fdd\u6301\u4e0d\u53d8\uff0c",(0,n.jsx)(r.d.ResultFunction,{})," \u4e0d\u4f1a\u91cd\u65b0\u8fd0\u884c\u3002\u8fd9\u662f\u7531\u4e8e Reselect \u7684 ",(0,n.jsx)(r.d.CascadingMemoization,{text:"\u7ea7\u8054 Memoization"}),"\u3002\u7b2c\u4e00\u5c42\u68c0\u67e5\u6574\u4e2a ",(0,n.jsx)(t.code,{children:"state"}),"\uff0c\u7b2c\u4e8c\u5c42\u68c0\u67e5 ",(0,n.jsx)(r.d.InputSelectors,{})," \u7684\u7ed3\u679c\u3002\u5982\u679c\u7b2c\u4e00\u5c42\u5931\u8d25\uff08\u7531\u4e8e ",(0,n.jsx)(t.code,{children:"state"})," \u7684\u6574\u4f53\u53d8\u5316\uff09\u4f46\u7b2c\u4e8c\u5c42\u6210\u529f\uff08\u56e0\u4e3a ",(0,n.jsx)(t.code,{children:"state.todos"})," \u672a\u6539\u53d8\uff09\uff0cReselect \u5c06\u8df3\u8fc7\u91cd\u65b0\u8ba1\u7b97 ",(0,n.jsx)(r.d.ResultFunction,{}),"\u3002\u8fd9\u79cd\u53cc\u91cd\u68c0\u67e5\u673a\u5236\u4f7f Reselect \u5728 ",(0,n.jsx)(i.t.Redux,{})," \u5e94\u7528\u4e2d\u7279\u522b\u6709\u6548\uff0c\u786e\u4fdd\u53ea\u5728\u771f\u6b63\u9700\u8981\u65f6\u8fdb\u884c\u8ba1\u7b97\u3002"]}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},782:(e,t,o)=>{o.d(t,{t:()=>i,y:()=>c});var n=o(8774),s=o(6540),r=o(4848);const i={WeakMap:(0,s.memo)((e=>{let{text:t="WeakMap"}=e;return(0,r.jsx)(n.A,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",title:"WeakMap",children:(0,r.jsx)("code",{children:t})})})),ReferenceEqualityCheck:(0,s.memo)((e=>{let{text:t="Reference Equality Check"}=e;return(0,r.jsx)(n.A,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",title:"Reference Equality Check",children:t})})),Memoization:(0,s.memo)((e=>{let{text:t="memoization"}=e;return(0,r.jsx)(n.A,{to:"https://en.wikipedia.org/wiki/Memoization",title:"Memoization",children:t})})),IdentityFunction:(0,s.memo)((e=>{let{text:t="Identity Function"}=e;return(0,r.jsx)(n.A,{to:"https://en.wikipedia.org/wiki/Identity_function",title:"Identity Function",children:t})})),UseMemo:(0,s.memo)((e=>{let{text:t="useMemo"}=e;return(0,r.jsx)(n.A,{to:"https://react.dev/reference/react/useMemo#usememo",title:"useMemo",children:(0,r.jsx)("code",{children:t})})})),ReReselect:(0,s.memo)((e=>{let{text:t="Re-reselect"}=e;return(0,r.jsx)(n.A,{to:"https://github.com/toomuchdesign/re-reselect",title:"re-reselect",children:t})})),Redux:(0,s.memo)((e=>{let{text:t="Redux"}=e;return(0,r.jsx)(n.A,{to:"https://cn.redux.js.org",title:"Redux",children:t})})),React:(0,s.memo)((e=>{let{text:t="React"}=e;return(0,r.jsx)(n.A,{to:"https://react.dev",title:"React",children:t})})),ReactRedux:(0,s.memo)((e=>{let{text:t="React-Redux"}=e;return(0,r.jsx)(n.A,{to:"https://react-cn.redux.js.org",title:"React-Redux",children:t})})),ReduxToolkit:(0,s.memo)((e=>{let{text:t="Redux-Toolkit"}=e;return(0,r.jsx)(n.A,{to:"https://redux-toolkit.js.org",title:"Redux-Toolkit",children:t})}))},c=(0,s.memo)((()=>(0,r.jsx)("ul",{children:Object.values(i).map(((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("b",{children:(0,r.jsx)(e,{})})},t)))})))},9760:(e,t,o)=>{o.d(t,{d:()=>i});var n=o(8774),s=o(6540),r=o(4848);const i={Selector:(0,s.memo)((e=>{let{text:t="selector"}=e;return(0,r.jsx)(n.A,{to:"/introduction/getting-started#selector-function",title:"Selector Function",children:t})})),InputSelectors:(0,s.memo)((e=>{let{text:t="input selectors"}=e;return(0,r.jsx)(n.A,{to:"/introduction/getting-started#input-selectors",title:"Input Selectors",children:t})})),OutputSelector:(0,s.memo)((e=>{let{text:t="output selector"}=e;return(0,r.jsx)(n.A,{to:"/introduction/getting-started#output-selector",title:"Output Selector",children:t})})),ResultFunction:(0,s.memo)((e=>{let{text:t="result function"}=e;return(0,r.jsx)(n.A,{to:"/introduction/getting-started#result-function",title:"Result Function",children:t})})),Dependencies:(0,s.memo)((e=>{let{text:t="dependencies"}=e;return(0,r.jsx)(n.A,{to:"/introduction/getting-started#dependencies",title:"Dependencies",children:t})})),CascadingMemoization:(0,s.memo)((e=>{let{text:t="Cascading Memoization"}=e;return(0,r.jsxs)(n.A,{to:"/introduction/how-does-reselect-work#cascading-memoization",title:"Cascading Memoization",children:['"',t,'"']})})),OutputSelectorFields:(0,s.memo)((e=>{let{text:t="Output Selector Fields"}=e;return(0,r.jsx)(n.A,{to:"/api/createSelector#output-selector-fields",title:"Output Selector Fields",children:t})})),CreateSelector:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/createSelector",title:"createSelector",children:(0,r.jsx)("code",{children:"createSelector"})}))),CreateSelectorCreator:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/createSelectorCreator",title:"createSelectorCreator",children:(0,r.jsx)("code",{children:"createSelectorCreator"})}))),LruMemoize:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/lruMemoize",title:"lruMemoize",children:(0,r.jsx)("code",{children:"lruMemoize"})}))),WeakMapMemoize:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/weakMapMemoize",title:"weakMapMemoize",children:(0,r.jsx)("code",{children:"weakMapMemoize"})}))),UnstableAutotrackMemoize:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/unstable_autotrackMemoize",title:"unstable_autotrackMemoize",children:(0,r.jsx)("code",{children:"unstable_autotrackMemoize"})}))),CreateStructuredSelector:(0,s.memo)((()=>(0,r.jsx)(n.A,{to:"/api/createStructuredSelector",title:"createStructuredSelector",children:(0,r.jsx)("code",{children:"createStructuredSelector"})})))}},4405:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/normal-memoization-function-c95c5046435f3768eca038a851c5b127.png"},1732:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/reselect-memoization-52b66000c0f0ff9e452c678243f6d695.png"},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);