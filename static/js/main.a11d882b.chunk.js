(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{172:function(e,t,c){},242:function(e,t){},253:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(30),s=c.n(n),d=c(102),i=c(258),r=c(260),l=c(146),j=c(51),o=c(33),b=c(259),h=c(261),u=(c(154),c(99)),x=c.n(u),O=(c(172),c(8));function p(e,t){return"https://api.covalenthq.com/v1/".concat(e,"/address/").concat(t,"/balances_v2/?&key=ckey_f0c909ff7e964c99919b15ae7f8")}function _(){const[e]=i.a.useForm(),[t,c]=Object(a.useState)(null),[n,s]=Object(a.useState)(null),[u,_]=Object(a.useState)(!1);return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsxs)(i.a,{form:e,onFinish:e=>{const t=p(1,e.address),a=p(56,e.address);_(!0),Promise.all([x.a.get(t),x.a.get(a)]).then((e=>{_(!1),c(e[0].data.data),s(e[1].data.data)})).catch((e=>{_(!1),console.log(e)}))},children:[Object(O.jsx)(i.a.Item,{name:"address",label:"Address",rules:[{required:!0}],children:Object(O.jsx)(r.a,{})}),Object(O.jsxs)(i.a.Item,{children:[Object(O.jsx)(l.a,{type:"primary",htmlType:"submit",disabled:u,loading:u,children:"Submit"}),Object(O.jsx)(l.a,{htmlType:"button",onClick:()=>{e.resetFields(),c(null)},disabled:u,children:"Reset"})]})]})}),Boolean(t)&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"address: ".concat(t.address)}),Object(O.jsx)("p",{children:"updated_at: ".concat(t.updated_at)}),Object(O.jsx)("p",{children:"next_update_at: ".concat(t.next_update_at)}),Object(O.jsx)("p",{children:"quote_currency: ".concat(t.quote_currency)}),Object(O.jsx)("p",{children:"chain_id: ".concat(t.chain_id)})]}),(null===t||void 0===t?void 0:t.items)&&t.items.length>0&&Object(O.jsx)(j.a,{gutter:16,children:t.items.map((e=>Object(O.jsx)(o.a,{span:8,children:Object(O.jsx)(b.a,{title:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.a,{src:e.logo_url,style:{margin:"0 10px"}}),Object(O.jsx)("span",{children:e.contract_ticker_symbol})]}),children:Object(O.jsx)("p",{children:"balance: ".concat(d.a.utils.formatUnits(e.balance,e.contract_decimals))})})},e.contract_address)))})]}),Boolean(n)&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"address: ".concat(n.address)}),Object(O.jsx)("p",{children:"updated_at: ".concat(n.updated_at)}),Object(O.jsx)("p",{children:"next_update_at: ".concat(n.next_update_at)}),Object(O.jsx)("p",{children:"quote_currency: ".concat(n.quote_currency)}),Object(O.jsx)("p",{children:"chain_id: ".concat(n.chain_id)})]}),(null===n||void 0===n?void 0:n.items)&&n.items.length>0&&Object(O.jsx)(j.a,{gutter:16,children:n.items.map((e=>Object(O.jsx)(o.a,{span:8,children:Object(O.jsx)(b.a,{title:Object(O.jsxs)("div",{children:[Object(O.jsx)(h.a,{src:e.logo_url,style:{margin:"0 10px"}}),Object(O.jsx)("span",{children:e.contract_ticker_symbol})]}),children:Object(O.jsx)("p",{children:"balance: ".concat(d.a.utils.formatUnits(e.balance,e.contract_decimals))})})},e.contract_address)))})]})]})}const m=document.getElementById("root");s.a.render(Object(O.jsx)(a.StrictMode,{children:Object(O.jsx)(_,{})}),m)}},[[253,1,2]]]);
//# sourceMappingURL=main.a11d882b.chunk.js.map