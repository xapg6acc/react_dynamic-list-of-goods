(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(6),c=e.n(r),o=e(3),a=e(5),u=e(1),s=e.n(u),i=e(2),f=(e(12),e(0)),d=function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],c=Object(i.useState)(!1),u=Object(a.a)(c,2),j=u[0],h=u[1],m=function(){var t=Object(o.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=2;break}return t.abrupt("return");case 2:return h(!0),t.next=5,n();case 5:e=t.sent,r(e),h(!1);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button",onClick:function(){return m(l)},children:"Load All goods"}),Object(f.jsx)("button",{type:"button",onClick:function(){return m(b)},children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button",onClick:function(){return m(p)},children:"Load red goods"}),Object(f.jsx)(d,{goods:e})]})};c.a.render(Object(f.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.75d93eb2.chunk.js.map