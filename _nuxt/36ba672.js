(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{240:function(e,t,n){e.exports=n.p+"img/eucp_logo.abb841e.png"},242:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex p-4"},[r("img",{attrs:{src:n(240),alt:"EUCP Logo"}}),e._v(" "),r("h1",{staticClass:"text-2xl"},[e._v("\n    Overview of EUCP Example use case\n  ")])])}],l={},c=n(40),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,null,null);t.default=component.exports},243:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:null,required:!1},description:{type:String,default:null,required:!1},usecase:{type:Array,default:function(){return[]},required:!1}}},l=n(40),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row overflow-auto p-4 shadow-xl"},[n("div",{staticClass:"no-wrap text-left"},[e.usecase.length>0?n("NuxtLink",{attrs:{to:e.usecase[0].path}},[n("h4",{staticClass:"text-2xl m-2"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("p",{staticClass:"text-left m-2"},[e._v("\n        "+e._s(e.description)+"\n      ")])]):e._e()],1),e._v(" "),n("div",{staticClass:"container mx-auto w-1/2 m-3"},[n("vueper-slides",{attrs:{fractions:"",progress:"",fade:"","slide-ratio":1,"arrows-outside":"","bullets-outside":"","slide-image-inside":""}},e._l(e.usecase,(function(t){return n("vueper-slide",{key:t.id,scopedSlots:e._u([{key:"content",fn:function(){return[n("NuxtLink",{attrs:{to:t.path}},[n("img",{staticClass:"object-contain w-auto h-full max-w-full max-h-full mx-auto",attrs:{src:t.image}})])]},proxy:!0}],null,!0)})})),1)],1)])}),[],!1,null,null,null);t.default=component.exports},258:function(e,t,n){"use strict";n.r(t);var r=n(6),l=(n(39),{data:function(){return{usecaseItems:{},usecase0:[],error:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("usecaseItems").fetch();case 2:return e.usecaseItems=t.sent,t.next=5,e.$content("usecase_0").sortBy("slug","asc").fetch();case 5:e.usecase0=t.sent;case 6:case"end":return t.stop()}}),t)})))()}}),c=n(40),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col w-screen h-screen bg-gray-200 p-2"},[n("div",{staticClass:"banner"},[n("Banner")],1),e._v(" "),n("div",{staticClass:"flex flex-col overflow-auto w-screen h-screen p-2"},[n("div",{staticClass:"m-2 rounded"},[n("h3",{staticClass:"text-2xl p-2 m-2"},[e._v("\n        Category 1\n      ")]),e._v(" "),n("div",{staticClass:"text-left w-1/3 shadow-xl bg-white m-2"},[n("UseCaseCard",{key:e.usecaseItems.example_usecase_id,attrs:{title:e.usecaseItems.example_usecase_name,description:e.usecaseItems.example_usecase_description,usecase:e.usecase0}})],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Banner:n(242).default,UseCaseCard:n(243).default})}}]);