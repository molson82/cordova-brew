webpackJsonp([1],{"65LL":function(t,e,a){t.exports=a.p+"static/img/gaby-profile.d5a4018.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"brew-header"}},[t._m(0),t._v(" "),a("ul",{staticClass:"sidenav",attrs:{id:"slide-out"}},[t._m(1),t._v(" "),a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/change-week"}},[t._v("Change week")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/calendar"}},[t._v("Google Calendar")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/add"}},[t._v("Add entry")])],1),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper dark-primary"},[e("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"slide-out"}},[e("i",{staticClass:"fa fa-bars fa-2x"})]),this._v(" "),e("a",{staticClass:"brand-logo center",attrs:{href:"index.html"}},[this._v("Brew Co")]),this._v(" "),e("a",{staticClass:"btn-floating profile-btn"},[e("img",{attrs:{src:a("65LL"),alt:"",height:"40",width:"40"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"waves-effect",attrs:{href:"index.html"}},[this._v("Home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"divider"})])}]},i={name:"WeeklyTotals",data:function(){return{totalHours:22,totalMin:42,currentWeek:"# / # / #",totalDollars:135,totalCents:98}},created:function(){this.getWeek()},methods:{getWeek:function(){var t=new Date,e=t.getDate()-t.getDay(),a=new Date(t.setDate(e)).toISOString().split("T")[0].split("-"),s=a[0].split("20")[1],n=a[1]+" / "+a[2]+" / "+s;console.log(n),this.currentWeek=n},updateWeek:function(t){console.log("value: "+t),this.currentWeek=t}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"weekly-totals"}},[a("div",{attrs:{id:"hoursPanel"}},[a("div",{staticClass:"col s12 m6 hours-panel primary-color"},[a("h3",[t._v(t._s(t.totalHours)+" ")]),t._v(" "),a("h5",[t._v("hrs ")]),t._v(" "),a("h3",[t._v(t._s(t.totalMin)+" ")]),t._v(" "),a("h5",[t._v("mins")])]),t._v(" "),a("div",{staticClass:"whole-panel"},[a("div",{staticClass:"col s12 week-panel"},[a("i",{staticClass:"fa fa-calendar fa-lg"}),t._v(" "),a("p",{staticClass:"week-value",attrs:{id:"thisWeekValue"},on:{"changed-week":function(e){t.updateWeek+=e}}},[t._v(t._s(t.currentWeek))])])]),t._v(" "),a("div",{staticClass:"whole-panel right",attrs:{id:"money"}},[a("div",{staticClass:"col s12 money-panel"},[a("i",{staticClass:"fa fa-usd fa-lg"}),t._v(" "),a("p",{staticClass:"week-value"},[t._v(t._s(t.totalDollars)+" . "+t._s(t.totalCents))])])])])])},staticRenderFns:[]},l={name:"App",components:{BrewHeader:a("VU/8")({name:"BrewHeader"},n,!1,null,null,null).exports,WeeklyTotals:a("VU/8")(i,r,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("BrewHeader"),this._v(" "),e("WeeklyTotals"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},o=a("VU/8")(l,c,!1,null,null,null).exports,d=a("/ocq"),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"carousel"}},[a("div",{staticClass:"carousel carousel-slider",attrs:{id:"carouselPanel"}},t._l(t.listOfPanels,function(e,s){return a("div",{key:"panel-"+s,staticClass:"carousel-item secondary-text"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("div",{staticClass:"card green"},[a("div",{staticClass:"card-content white-text center"},[a("span",{staticClass:"card-title"},[t._v(t._s(e.day)+" "+t._s(e.month)+" "+t._s(e.date))]),t._v(" "),a("p",{staticClass:"day-value"},[t._v(t._s(e.hours)+" hours "+t._s(e.mins)+" mins")]),t._v(" "),a("p",{staticClass:"day-value"},[t._v("$ "+t._s(e.dollars)+" . "+t._s(e.cents))])])])])])])}))])},staticRenderFns:[]},h=a("VU/8")({name:"Carousel",data:function(){return{listOfPanels:[]}},created:function(){this.panelTestLoad()},methods:{panelTestLoad:function(){this.listOfPanels.push({day:"Tuesday",month:"Sept",date:"4th",hours:"10",mins:"00",dollars:"126",cents:"78"}),this.listOfPanels.push({day:"Wednesday",month:"Sept",date:"5th",hours:"5",mins:"22",dollars:"26",cents:"99"}),this.listOfPanels.push({day:"Saturday",month:"Sept",date:"8th",hours:"8",mins:"00",dollars:"52",cents:"12"})}}},u,!1,null,null,null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"bottom-panels"}},[e("div",{staticClass:"bottom-panels"},[this._m(0),this._v(" "),e("div",{staticClass:"add-frame"},[e("router-link",{staticClass:"btn-floating btn-large right red darken-3",attrs:{to:"/add"}},[e("i",{staticClass:"fa fa-plus fa-3x"})])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notes-frame"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("textarea",{staticClass:"materialize-textarea",attrs:{id:"textarea1",placeholder:"Enter whatever notes you have here..."}}),this._v(" "),e("label",{attrs:{for:"textarea1"}},[this._v("Notes")])])])])])])}]},f={name:"HomeRoute",components:{Carousel:h,BottomPanels:a("VU/8")({name:"BottomPanels",data:function(){return{}},created:function(){},methods:{}},v,!1,null,null,null).exports},created:function(){}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home-route"}},[e("Carousel"),this._v(" "),e("BottomPanels")],1)},staticRenderFns:[]},m=a("VU/8")(f,_,!1,null,null,null).exports,p={name:"AddEntry",data:function(){return{}},created:function(){$(".sidenav").sidenav("close")},methods:{}},C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"add-entry"}},[a("div",{staticClass:"add-form"},[a("div",{staticClass:"row"},[a("form",{staticClass:"col s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{staticClass:"datepicker",attrs:{id:"datepicker",type:"text"}}),t._v(" "),a("label",{attrs:{for:"datepicker"}},[t._v("Date")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{attrs:{id:"textarea1",type:"number",placeholder:"87.62"}}),t._v(" "),a("label",{staticClass:"active",attrs:{for:"textarea1"}},[t._v("Total cash on hand")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{attrs:{id:"textarea1",type:"number",placeholder:"12.37 or -60.52"}}),t._v(" "),a("label",{staticClass:"active",attrs:{for:"textarea1"}},[t._v("Expected cash")])])])])])]),t._v(" "),a("div",{staticClass:"form-buttons"},[a("a",{staticClass:"waves-effect waves-light btn dark-primary",attrs:{href:"index.html",id:"cancel-btn"}},[t._v("Cancel")]),t._v(" "),a("a",{staticClass:"waves-effect waves-light btn green",attrs:{href:"index.html",id:"submit-btn"}},[t._v("Submit")])])])}]},w=a("VU/8")(p,C,!1,null,null,null).exports,k={name:"Calendar",data:function(){return{}},created:function(){$(".sidenav").sidenav("close")},methods:{}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"calendar"}},[e("div",{staticClass:"calendar-panel"},[e("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/b/1/embed?showTitle=0&showPrint=0&showCalendars=0&showTz=0&height=600&wkst=1&bgcolor=%23ffffff&src=wvandebe%40gmail.com&color=%231B887A&src=en.usa%23holiday%40group.v.calendar.google.com&color=%230F4B38&ctz=America%2FNew_York",width:"100%",height:"600",frameborder:"0",scrolling:"no"}})])])}]},y=a("VU/8")(k,g,!1,null,null,null).exports,b={name:"ChangeWeek",components:{Carousel:h},data:function(){return{listOfWeeks:[],active:0}},created:function(){$(".sidenav").sidenav("close"),$(document).ready(function(){$(".carousel").carousel({fullWidth:!0,indicators:!0})}),this.weekTestLoad()},methods:{weekTestLoad:function(){var t={dateObj:new Date,month:"09",day:"02",year:"18"},e={dateObj:new Date,month:"09",day:"09",year:"18"},a={dateObj:new Date,month:"09",day:"16",year:"18"};this.listOfWeeks.push(t),this.listOfWeeks.push(e),this.listOfWeeks.push(a)},changeActive:function(t){this.active=t;this.listOfWeeks[t].month,this.listOfWeeks[t].day,this.listOfWeeks[t].year}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"change-week"}},[a("Carousel"),t._v(" "),a("div",{staticClass:"changeWeek",attrs:{id:"weekPanel"}},[a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.listOfWeeks,function(e,s){return a("a",{key:"week-"+s,staticClass:"collection-item",class:{active:s==t.active},on:{click:function(e){t.changeActive(s),t.$emit("changed-week",t.listOfWeeks[s])}}},[t._v(t._s(e.month)+" / "+t._s(e.day)+" / "+t._s(e.year))])})],2)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header center"},[e("h4",[this._v("List Of Weeks")])])}]},W=a("VU/8")(b,x,!1,null,null,null).exports;s.a.use(d.a);var E=new d.a({routes:[{path:"/",name:"HomeRoute",component:m},{path:"/add",name:"AddEntry",component:w},{path:"/calendar",name:"Calendar",component:y},{path:"/change-week",name:"ChangeWeek",component:W}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:E,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.0806f2fa832ce80d5cc3.js.map