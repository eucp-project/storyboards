(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(e,t,n){"use strict";n.r(t);var r=n(6),c=(n(37),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,o,f,title;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n(r.usecase).sortBy("slug","asc").fetch();case 3:return c=t.sent,t.next=6,n(r.usecase,r.panel).fetch();case 6:return o=t.sent,t.next=9,n("index").fetch();case 9:return f=t.sent,title=f[r.usecase],t.abrupt("return",{usecase:c,panel:o,params:r,title:title});case 12:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("index.yaml").fetch();case 2:e.menu=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{error:!1}}}),o=n(38),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex p-4"},[n("h4",{staticClass:"text-2xl"},[e._v("\n    Category 1\n  ")])])}],!1,null,null,null);t.default=component.exports}}]);