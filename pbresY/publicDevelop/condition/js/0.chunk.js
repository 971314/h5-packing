webpackJsonp([0],[,function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports={default:n(3),__esModule:!0}},function(t,e,n){var a=n(1),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["msgTip"]}},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var a,i;a=n(4);var o=n(10);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal dialog-info",attrs:{id:"msgTipDialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("p",{staticClass:"tipP"},[t._v("提示")]),t._v(" "),n("div",{staticClass:"modal-header dialog-bottom"},[t._v("\n                "+t._s(t.msgTip)+"\n            ")]),t._v(" "),n("div",{staticClass:"modal-body",attrs:{"data-dismiss":"modal"}},[t._v("\n                确认\n            ")])])])])},staticRenderFns:[]}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:n)(t)}},function(t,e,n){var a=n(32),i=n(11);t.exports=function(t){return a(i(t))}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),o=a(i),r=n(2),s=a(r),c={HOUR_TOKENS:["HH","H","hh","h","kk","k"],MINUTE_TOKENS:["mm","m"],SECOND_TOKENS:["ss","s"],APM_TOKENS:["A","a"]};e.default={name:"VueTimepicker",props:{value:{type:Object},hideClearButton:{type:Boolean},format:{type:String},minuteInterval:{type:Number},secondInterval:{type:Number},id:{type:String}},data:function(){return{hours:[],minutes:[],seconds:[],apms:[],showDropdown:!1,muteWatch:!1,hourType:"HH",minuteType:"mm",secondType:"",apmType:"",hour:"",minute:"",second:"",apm:"",fullValues:void 0}},computed:{displayTime:function(){var t=String(this.format||"HH:mm");return this.hour&&(t=t.replace(new RegExp(this.hourType,"g"),this.hour)),this.minute&&(t=t.replace(new RegExp(this.minuteType,"g"),this.minute)),this.second&&this.secondType&&(t=t.replace(new RegExp(this.secondType,"g"),this.second)),this.apm&&this.apmType&&(t=t.replace(new RegExp(this.apmType,"g"),this.apm)),t},showClearBtn:function(){return!!(this.hour&&""!==this.hour||this.minute&&""!==this.minute)}},watch:{format:"renderFormat",minuteInterval:function(t){this.renderList("minute",t)},secondInterval:function(t){this.renderList("second",t)},value:"readValues",displayTime:"fillValues"},methods:{formatValue:function(t,e){switch(t){case"H":case"m":case"s":return String(e);case"HH":case"mm":case"ss":return e<10?"0"+e:String(e);case"h":case"k":return String(e+1);case"hh":case"kk":return e+1<10?"0"+(e+1):String(e+1);default:return""}},checkAcceptingType:function(t,e,n){if(!t||!e||!e.length)return"";for(var a=0;a<t.length;a++)if(e.indexOf(t[a])>-1)return t[a];return n||""},renderFormat:function(t){t=t||this.format,t&&t.length||(t="HH:mm"),this.hourType=this.checkAcceptingType(c.HOUR_TOKENS,t,"HH"),this.minuteType=this.checkAcceptingType(c.MINUTE_TOKENS,t,"mm"),this.secondType=this.checkAcceptingType(c.SECOND_TOKENS,t),this.apmType=this.checkAcceptingType(c.APM_TOKENS,t),this.renderHoursList(),this.renderList("minute"),this.secondType&&this.renderList("second"),this.apmType&&this.renderApmList();var e=this;this.$nextTick(function(){e.readValues()})},renderHoursList:function(){var t="h"===this.hourType||"hh"===this.hourType?12:24;this.hours=[];for(var e=0;e<t;e++)this.hours.push(this.formatValue(this.hourType,e))},renderList:function(t,e){if("second"===t)e=e||this.secondInterval;else{if("minute"!==t)return;e=e||this.minuteInterval}0===e?e=60:e>60?(window.console.warn("`"+t+"-interval` should be less than 60. Current value is",e),e=1):e<1?(window.console.warn("`"+t+"-interval` should be NO less than 1. Current value is",e),e=1):e||(e=1),"minute"===t?this.minutes=[]:this.seconds=[];for(var n=0;n<60;n+=e)"minute"===t?this.minutes.push(this.formatValue(this.minuteType,n)):this.seconds.push(this.formatValue(this.secondType,n))},renderApmList:function(){this.apms=[],this.apmType&&(this.apms="A"===this.apmType?["AM","PM"]:["am","pm"])},readValues:function(){if(this.value&&!this.muteWatch){var t=JSON.parse((0,s.default)(this.value||{})),e=(0,o.default)(t);0!==e.length&&(e.indexOf(this.hourType)>-1&&(this.hour=t[this.hourType]),e.indexOf(this.minuteType)>-1&&(this.minute=t[this.minuteType]),e.indexOf(this.secondType)>-1?this.second=t[this.secondType]:this.second=0,e.indexOf(this.apmType)>-1&&(this.apm=t[this.apmType]),this.fillValues())}},fillValues:function(){var t={},e=this.hour,n=this.hourType,a=e||0===e?Number(e):"",i=this.isTwelveHours(n),o=!(!i||!this.apm)&&String(this.apm).toLowerCase();if(c.HOUR_TOKENS.forEach(function(r){if(r===n)return void(t[r]=e);var s=void 0,c=void 0;switch(r){case"H":case"HH":if(!String(a).length)return void(t[r]="");s=i?"pm"===o?a<12?a+12:a:a%12:a%24,t[r]="HH"===r&&s<10?"0"+s:String(s);break;case"k":case"kk":if(!String(a).length)return void(t[r]="");s=i?"pm"===o?a<12?a+12:a:12===a?24:a:0===a?24:a,t[r]="kk"===r&&s<10?"0"+s:String(s);break;case"h":case"hh":if(o)s=a,c=o||"am";else{if(!String(a).length)return t[r]="",t.a="",void(t.A="");a>11?(c="pm",s=12===a?12:a%12):(c=i?"":"am",s=a%12===0?12:a)}t[r]="hh"===r&&s<10?"0"+s:String(s),t.a=c,t.A=c.toUpperCase()}}),this.minute||0===this.minute){var r=Number(this.minute);t.m=String(r),t.mm=r<10?"0"+r:String(r)}else t.m="",t.mm="";if(this.second||0===this.second){var s=Number(this.second);t.s=String(s),t.ss=s<10?"0"+s:String(s)}else t.s="",t.ss="";this.fullValues=t,this.updateTimeValue(t),this.$emit("change",{data:t})},updateTimeValue:function(t){this.muteWatch=!0;var e=this,n=JSON.parse((0,s.default)(this.value||{})),a={};(0,o.default)(n).forEach(function(e){a[e]=t[e]}),this.$emit("input",a),this.$nextTick(function(){e.muteWatch=!1})},isTwelveHours:function(t){return"h"===t||"hh"===t},toggleDropdown:function(){this.showDropdown=!this.showDropdown},select:function(t,e){"hour"===t?this.hour=e:"minute"===t?this.minute=e:"second"===t?this.second=e:"apm"===t&&(this.apm=e)},clearTime:function(){this.hour="",this.minute="",this.second="",this.apm=""}},mounted:function(){this.renderFormat()}}},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{priceInfoClick:function(t){this.$emit("priceInfoClick",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["selectContract"],created:function(){console.log(this.selectContract)},methods:{selectContractClick:function(t,e,n){this.$emit("selectContractClick",t,e,n)}}}},function(t,e,n){t.exports={default:n(20),__esModule:!0}},function(t,e,n){n(45),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var a=n(8);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var a=n(13),i=n(41),o=n(40);t.exports=function(t){return function(e,n,r){var s,c=a(e),u=i(c.length),l=o(r,u);if(t&&n!=n){for(;u>l;)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var a=n(21);t.exports=function(t,e,n){if(a(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,a){return t.call(e,n,a)};case 3:return function(n,a,i){return t.call(e,n,a,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var a=n(8),i=n(7).document,o=a(i)&&a(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var a=n(7),i=n(1),o=n(25),r=n(30),s="prototype",c=function(t,e,n){var u,l,d,p=t&c.F,f=t&c.G,m=t&c.S,h=t&c.P,v=t&c.B,b=t&c.W,C=f?i:i[e]||(i[e]={}),g=C[s],O=f?a:m?a[e]:(a[e]||{})[s];f&&(n=e);for(u in n)l=!p&&O&&void 0!==O[u],l&&u in C||(d=l?O[u]:n[u],C[u]=f&&"function"!=typeof O[u]?n[u]:v&&l?o(d,a):b&&O[u]==d?function(t){var e=function(e,n,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,a)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):h&&"function"==typeof d?o(Function.call,d):d,h&&((C.virtual||(C.virtual={}))[u]=d,t&c.R&&g&&!g[u]&&r(g,u,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var a=n(33),i=n(37);t.exports=n(5)?function(t,e,n){return a.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(5)&&!n(6)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var a=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},function(t,e,n){var a=n(22),i=n(31),o=n(43),r=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(a(t),e=o(e,!0),a(n),i)try{return r(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var a=n(29),i=n(13),o=n(23)(!1),r=n(38)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=r&&a(s,n)&&u.push(n);for(;e.length>c;)a(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var a=n(34),i=n(27);t.exports=Object.keys||function(t){return a(t,i)}},function(t,e,n){var a=n(28),i=n(1),o=n(6);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],r={};r[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var a=n(39)("keys"),i=n(44);t.exports=function(t){return a[t]||(a[t]=i(t))}},function(t,e,n){var a=n(7),i="__core-js_shared__",o=a[i]||(a[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var a=n(12),i=Math.max,o=Math.min;t.exports=function(t,e){return t=a(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var a=n(12),i=Math.min;t.exports=function(t){return t>0?i(a(t),9007199254740991):0}},function(t,e,n){var a=n(11);t.exports=function(t){return Object(a(t))}},function(t,e,n){var a=n(8);t.exports=function(t,e){if(!a(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!a(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!a(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+a).toString(36))}},function(t,e,n){var a=n(42),i=n(35);n(36)("keys",function(){return function(t){return i(a(t))}})},function(t,e,n){e=t.exports=n(14)(),e.i(n(47),""),e.push([t.id,"",""])},function(t,e,n){e=t.exports=n(14)(),e.push([t.id,".time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.time-picker *{box-sizing:border-box}.time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.time-picker .clear-btn{position:absolute;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;top:0;right:0;bottom:0;margin-top:-.15em;z-index:3;font-size:1.1em;line-height:1em;vertical-align:middle;width:1.3em;color:#d2d2d2;background:hsla(0,0%,100%,0);text-align:center;font-style:normal;-webkit-transition:color .2s;transition:color .2s}.time-picker .clear-btn:hover{color:#797979;cursor:pointer}.time-picker .time-picker-overlay{z-index:2;position:fixed;top:0;left:0;right:0;bottom:0}.time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:flex;flex-flow:row nowrap;align-items:stretch;justify-content:space-between}.time-picker .dropdown ul{padding:0;margin:0;list-style:none;flex:1;overflow-x:hidden;overflow-y:auto}.time-picker .dropdown ul.apms,.time-picker .dropdown ul.minutes,.time-picker .dropdown ul.seconds{border-left:1px solid #fff}.time-picker .dropdown ul li{text-align:center;padding:.3em 0;color:#161616}.time-picker .dropdown ul li:not(.hint):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.time-picker .dropdown ul li.active,.time-picker .dropdown ul li.active:hover{background:#41b883;color:#fff}.time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}",""])},function(t,e,n){var a,i;n(60),a=n(15);var o=n(57);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},,function(t,e,n){var a,i;a=n(17);var o=n(55);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,i;a=n(18);var o=n(53);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal  dialog-info",attrs:{id:"selectContractDialog",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[t.selectContract?n("div",{staticClass:"modal-content selectCon"},t._l(t.selectContract,function(e){return n("div",{staticClass:"modal-body dialog-bottom",attrs:{"data-dismiss":"modal"},on:{click:function(n){t.selectContractClick(e.name,e.market,e.code)}}},[t._v("\n                "+t._s(e.name?e.name:"----")+"\n            ")])})):n("div",{staticClass:"modal-content selectCon"},[n("div",{staticClass:"modal-body",staticStyle:{height:"100px","padding-top":"41px"},attrs:{"data-dismiss":"modal"}},[t._v("\n                请先添加自选！\n            ")])])])])},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal  dialog-info",attrs:{id:"priceInfoDialog",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content",staticStyle:{"border-radius":"10px"}},[n("div",{staticClass:"modal-body dialog-bottom",attrs:{"data-dismiss":"modal"},on:{click:function(e){t.priceInfoClick(1)}}},[t._v("\n                涨停价\n            ")]),t._v(" "),n("div",{staticClass:"modal-body dialog-bottom",attrs:{"data-dismiss":"modal"},on:{click:function(e){t.priceInfoClick(2)}}},[t._v("\n                跌停价\n            ")]),t._v(" "),n("div",{staticClass:"modal-body dialog-bottom",attrs:{"data-dismiss":"modal"},on:{click:function(e){t.priceInfoClick(3)}}},[t._v("\n                对手价\n            ")]),t._v(" "),n("div",{staticClass:"modal-body dialog-bottom",staticStyle:{"border-bottom":"none"},attrs:{"data-dismiss":"modal"},on:{click:function(e){t.priceInfoClick(4)}}},[t._v("\n                最新价\n            ")])])])])},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"time-picker"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.displayTime,expression:"displayTime"}],staticClass:"display-time",attrs:{id:t.id,type:"text",readonly:""},domProps:{value:t._s(t.displayTime)},on:{click:function(e){e.stopPropagation(),t.toggleDropdown(e)},input:function(e){e.target.composing||(t.displayTime=e.target.value)}}}),t._v(" "),t.hideClearButton?t._e():n("span",{directives:[{name:"show",rawName:"v-show",value:!t.showDropdown&&t.showClearBtn,expression:"!showDropdown && showClearBtn"}],staticClass:"clear-btn",on:{click:function(e){e.stopPropagation(),t.clearTime(e)}}},[t._v("×")]),t._v(" "),t.showDropdown?n("div",{staticClass:"time-picker-overlay",on:{click:function(e){e.stopPropagation(),t.toggleDropdown(e)}}}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"dropdown"},[n("div",{staticClass:"select-list"},[n("ul",{staticClass:"hours"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.hourType)}}),t._v(" "),t._l(t.hours,function(e){return n("li",{class:{active:t.hour===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("hour",e)}}})})],2),t._v(" "),n("ul",{staticClass:"minutes"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.minuteType)}}),t._v(" "),t._l(t.minutes,function(e){return n("li",{class:{active:t.minute===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("minute",e)}}})})],2),t._v(" "),t.secondType?n("ul",{staticClass:"seconds"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.secondType)}}),t._v(" "),t._l(t.seconds,function(e){return n("li",{class:{active:t.second===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("second",e)}}})})],2):t._e(),t._v(" "),t.apmType?n("ul",{staticClass:"apms"},[n("li",{staticClass:"hint",domProps:{textContent:t._s(t.apmType)}}),t._v(" "),t._l(t.apms,function(e){return n("li",{class:{active:t.apm===e},domProps:{textContent:t._s(e)},on:{click:function(n){n.stopPropagation(),t.select("apm",e)}}})})],2):t._e()])])])},staticRenderFns:[]}},,function(t,e,n){function a(t,e){for(var n=0;n<t.length;n++){var a=t[n],i=d[a.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(c(a.parts[o],e))}else{for(var r=[],o=0;o<a.parts.length;o++)r.push(c(a.parts[o],e));d[a.id]={id:a.id,refs:1,parts:r}}}}function i(t){for(var e=[],n={},a=0;a<t.length;a++){var i=t[a],o=i[0],r=i[1],s=i[2],c=i[3],u={css:r,media:s,sourceMap:c};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(t,e){var n=m(),a=b[b.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function c(t,e){var n,a,i;if(e.singleton){var o=v++;n=h||(h=s(e)),a=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=s(e),a=l.bind(null,n),i=function(){r(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}function u(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=C(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function l(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return a(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r],c=d[s.id];c.refs--,o.push(c)}if(t){var u=i(t);a(u,e)}for(var r=0;r<o.length;r++){var c=o[r];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var C=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var a=n(46);"string"==typeof a&&(a=[[t.id,a,""]]);n(59)(a,{});a.locals&&(t.exports=a.locals)},function(t,e,n){t.exports=n(48)},,,,,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,o,r,s,c,u,l=n(2),d=a(l),p=n(61),f=a(p),m=n(51),h=a(m),v=n(50),b=a(v),C=n(9),g=a(C),O="";e.default={data:function(){return{selectContractName:"选择期货合约",selectContract:"",setDataObj:{contractMarket:"",contractCode:"",validity:1,tj:1,tjTime:"19:50:00",Operator:"<=",tjPriceValue:"",dealOpen:0,OffsetFlag:0,Volume:"",LimitPriceType:"",LimitPrice:"",priceName:"",conditionName:"",TradeDate:"",selectPriceName:""},touchTimeValue:{HH:"10",mm:"05",ss:"00"},validPrice:!0,validTime:!0,conPrice:!0,conTime:!0,buyPrice:!0,buyTime:!0,openCang:!0,pingCang:!0,pingDay:!0,pingCangBlue:!1,openCangFFF:!1,pingDayBlue:!1,initAddBtn:!0,blueBtn:!1,trustPriceType:1,token:testToken,authId:testId,userId:testUserId,CID:"",orgCode:orgCode,initPrice:!0,initTime:!1,msgTip:"",loginClass:loginClass,accountClass:accountClass,loginAccount:loginAccount,WTInfo:{wtCode:"",wtMarket:""},HQInfo:{hqCode:"",hqMarket:""},pingDayShow:!0,destroyMarket:""}},components:{VueTimepicker:f.default,selectConDialog:h.default,priceDialog:b.default,tipMsg:g.default},created:function(){var t={callbacks:[{module:9e4,callback:function(t){var e=t.jData.Data;console.log(e);for(var n=0;n<e.length;n++)e[n][10]==O&&(e[n][29]?(o=e[n][29]/i,$("#newPrice").html(e[n][29]/i)):$("#newPrice").html("--"),e[n][30]&&(c=e[n][30]/i),e[n][31]&&(u=e[n][31]/i),e[n].BidSize[0][40]&&(s=e[n].BidSize[0][40]/i),e[n].AskSize[0][42]&&(r=e[n].AskSize[0][42]/i))}},{fun:6044,callback:function(t){console.log(t);var e=t.jData.data;e&&(e[0]?($("#openBuy").html(e[0][250]),console.log(e[0][250])):$("#openBuy").html(0))}},{fun:102001,callback:function(t){null==testUserId&&t&&102001==t.functionNo&&(testUserId=pbE.WT().wtGetYunTradeUserId(pbE.WT().wtGetCurrentConnectionCID()))}}],reload:function(){},refresh:function(){},fresh:function(){},doShow:function(t){}};pbPage.initPage(t);var e=this;if(window.pbE&&(e.CID=pbE.WT().wtGetCurrentConnectionCID(),e.WTInfo.wtCode=e.$route.query.wtCode,e.WTInfo.wtMarket=e.$route.query.wtMarket,e.HQInfo.hqCode=e.$route.query.hqCode,e.HQInfo.hqMarket=e.$route.query.hqMarket,3==this.$route.params.id))if(e.WTInfo.wtCode&&e.WTInfo.wtMarket){var n=pbE.WT().wtGetHQInfo(e.WTInfo.wtCode,e.WTInfo.wtMarket);if(n){var a=JSON.parse(n);e.setDataObj.conditionName=a.HQName,e.setDataObj.contractMarket=a.HQMarket,e.setDataObj.contractCode=a.HQCode,e.selectContractName=a.HQName,O=e.WTInfo.wtCode,pbE.HQ().hqSubscribe(0,(0,d.default)({1:[{2:e.WTInfo.wtMarket,3:e.WTInfo.wtCode}]})),i=pbE.HQ().hqGetPriceRate(e.WTInfo.wtCode,e.WTInfo.wtMarket)}}else if(e.HQInfo.hqCode&&e.HQInfo.hqMarket){var l=pbE.WT().wtGetCurrentConnectionCID(),p=pbE.HQ().hqGetWTInfo(e.HQInfo.hqCode,e.HQInfo.hqMarket,l),f=pbE.HQ().getHQInfo(e.HQInfo.hqCode,e.HQInfo.hqMarket);if(p||f){var a=JSON.parse(p);e.setDataObj.contractMarket=a.WTMarket,e.setDataObj.contractCode=a.WTCode;var m=JSON.parse(f);e.selectContractName=m.name,O=e.HQInfo.hqCode,pbE.HQ().hqSubscribe(0,(0,d.default)({1:[{2:e.HQInfo.hqMarket,3:e.HQInfo.hqCode}]})),i=pbE.HQ().hqGetPriceRate(e.HQInfo.hqCode,e.HQInfo.hqMarket)}}if(window.pbE){var h=pbE.WT().wtLoginRe(e.CID);if(h){var a=JSON.parse(h).data;e.setDataObj.TradeDate=a[0][75]}}if(window.pbE){var v=pbE.ZX().getSelfStock(0);v&&(e.selectContract=JSON.parse(v))}else e.selectContract=[{name:"沪铜1702",market:"2001",code:"010002"},{name:"沪铝1702",market:"2001",code:"010102"},{name:"沪锌1702",market:"2001",code:"010302"},{name:"沪铅1702",market:"2001",code:"010902"},{name:"黄金1706",market:"2001",code:"010506"}];window.pbE&&(e.userId=pbE.WT().wtGetYunTradeUserId(e.CID),e.userId||(testUserId=null))},destroyed:function(){window.pbE&&pbE.HQ().hqUnSubscribe(0,(0,d.default)({1:[{2:this.destroyMarket,3:O}]}))},watch:{selectContractName:function(t,e){var n=this;this.selectContractName=t,1==this.setDataObj.tj?t&&n.setDataObj.tjPriceValue&&n.setDataObj.priceName&&n.setDataObj.Volume&&(n.blueBtn=!0,n.initAddBtn=!1):t&&n.setDataObj.priceName&&n.setDataObj.Volume?(n.blueBtn=!0,n.initAddBtn=!1):(n.blueBtn=!1,n.initAddBtn=!0)},"setDataObj.tjPriceValue":function(t,e){var n=this;this.setDataObj.tjPriceValue=t,this.selectContractName&&t&&n.setDataObj.priceName&&n.setDataObj.Volume?(n.blueBtn=!0,n.initAddBtn=!1):(n.blueBtn=!1,n.initAddBtn=!0)},"setDataObj.priceName":function(t,e){this.setDataObj.priceName=t;var n=this;1==this.setDataObj.tj?this.selectContractName&&n.setDataObj.tjPriceValue&&t&&n.setDataObj.Volume&&(n.blueBtn=!0,n.initAddBtn=!1):this.selectContractName&&t&&n.setDataObj.Volume?(n.blueBtn=!0,n.initAddBtn=!1):(n.blueBtn=!1,n.initAddBtn=!0),n.getStockBuyNum()},"setDataObj.Volume":function(t,e){this.setDataObj.Volume=t;var n=this;1==this.setDataObj.tj?this.selectContractName&&n.setDataObj.tjPriceValue&&n.setDataObj.priceName&&t&&(n.blueBtn=!0,n.initAddBtn=!1,window.pbE):this.selectContractName&&n.setDataObj.priceName&&t?(n.blueBtn=!0,n.initAddBtn=!1):(n.blueBtn=!1,n.initAddBtn=!0)}},methods:{selectContractDialog:function(){$("#selectContractDialog").modal("show")},priceInfoDialog:function(){$("#priceInfoDialog").modal("show")},conditionClick:function(t){var e=this;0==t&&(e.conPrice=!0,e.conTime=!0,e.initPrice=!0,e.initFooter=!1,e.setDataObj.tj=1),1==t&&(e.conPrice=!1,e.conTime=!1,e.initPrice=!1,e.initFooter=!1,e.setDataObj.tj=2)},validDateClick:function(t){var e=this;0==t&&(e.validPrice=!0,e.validTime=!0,e.setDataObj.validity=1,e.pingDayShow=!0),1==t&&(e.validPrice=!1,e.validTime=!1,e.setDataObj.validity=2,e.pingDayShow=!1)},buyClick:function(t){var e=this;0==t&&(e.buyPrice=!0,e.buyTime=!0,e.setDataObj.dealOpen=0,e.setDataObj.selectPriceName=s,e.getCanBuy(e.setDataObj.contractMarket,e.setDataObj.contractCode,0,null)),1==t&&(e.buyPrice=!1,e.buyTime=!1,e.setDataObj.dealOpen=1,e.setDataObj.selectPriceName=r,e.getCanBuy(e.setDataObj.contractMarket,e.setDataObj.contractCode,1,null))},storehouseTypeClick:function(t){var e=this;if(0==t&&(e.openCang=!0,e.openCangFFF=!1,e.pingCangBlue=!1,e.pingDayBlue=!1,e.setDataObj.OffsetFlag=0),1==t){e.pingCangBlue=!0,e.openCang=!1,e.openCangFFF=!0,e.pingDayBlue=!1,e.setDataObj.OffsetFlag=1;var n;0==e.setDataObj.dealOpen?n=1:1==e.setDataObj.dealOpen&&(n=0),(e.pingDayShow=!0)?e.getCanBuy(e.setDataObj.contractMarket,e.setDataObj.contractCode,n,2):e.getCanBuy(e.setDataObj.contractMarket,e.setDataObj.contractCode,n,null)}if(2==t){e.pingDayBlue=!0,e.pingCangBlue=!1,e.openCang=!1,e.openCangFFF=!0,e.setDataObj.OffsetFlag=2;var n;0==e.setDataObj.dealOpen?n=1:1==e.setDataObj.dealOpen&&(n=0),e.getCanBuy(e.setDataObj.contractMarket,e.setDataObj.contractCode,n,1)}},trustFocus:function(){this.setDataObj.priceName=""},priceTypeClick:function(){">="==this.setDataObj.Operator?this.setDataObj.Operator="<=":this.setDataObj.Operator=">="},addContractInfo:function(){var t=this,e=new setConData;return t.selectContractName&&"选择期货合约"==t.selectContractName?(t.msgTip="请选择选择期货合约！",void $("#msgTipDialog").modal("show")):t.userId?(e.Contracts[0]={ExchangeCode:t.setDataObj.contractMarket,ContractCode:t.setDataObj.contractCode},e.TimeCondition=t.setDataObj.validity,e.TradeDate=t.setDataObj.TradeDate,e.ConditionChoiced=t.setDataObj.tj,1==t.setDataObj.tj&&(e.ConditionList[0].Price.Operator=t.setDataObj.Operator,numRex.test(t.setDataObj.tjPriceValue)?e.ConditionList[0].Price.Value=1*t.setDataObj.tjPriceValue:e.ConditionList[0].Price.Value=parseInt(t.setDataObj.tjPriceValue)),2==t.setDataObj.tj&&(e.ConditionList[1].Time=t.touchTimeValue.HH+":"+t.touchTimeValue.mm+":"+t.touchTimeValue.ss),e.OrderAction.SmartOrder.Order.Contract={ExchangeCode:t.setDataObj.contractMarket,ContractCode:t.setDataObj.contractCode},e.OrderAction.SmartOrder.Order.Direction=t.setDataObj.dealOpen+"",e.OrderAction.SmartOrder.Order.OffsetFlag=t.setDataObj.OffsetFlag+"",e.OrderAction.SmartOrder.Order.Volume=parseInt(t.setDataObj.Volume),2==t.trustPriceType?e.OrderAction.SmartOrder.Order.LimitPriceType=t.setDataObj.priceName:1==t.trustPriceType&&(e.OrderAction.SmartOrder.Order.LimitPrice=t.setDataObj.priceName+"",e.OrderAction.SmartOrder.Order.LimitPriceType="CustomPrice"),t.setDataObj.conditionName||(1==t.setDataObj.tj?t.setDataObj.conditionName=t.selectContractName+t.setDataObj.Operator+t.setDataObj.tjPriceValue:t.setDataObj.conditionName=t.selectContractName+t.touchTimeValue.HH+":"+t.touchTimeValue.mm+":"+t.touchTimeValue.ss),e.OrderAction.SmartOrder.Order.EAccountId[67]=t.loginClass,e.OrderAction.SmartOrder.Order.EAccountId[53]=t.accountClass,e.OrderAction.SmartOrder.Order.EAccountId[249]=t.loginAccount,console.log(e),circleShowPass("正在下单"),void $.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:(0,d.default)({func:addContract,token:t.token,id:t.authId,name:t.setDataObj.conditionName,subType:t.setDataObj.tj+"",HYMC:t.selectContractName,orgCode:t.orgCode,type:contractType,terminal:"",userID:t.userId,data:e}),success:function(e){return 0!=e.status?(circleHidePass(),t.msgTip=e.msg,void $("#msgTipDialog").modal("show")):(circleHidePass(),t.pageNoneNum=0,t.dataOrFlag=1,console.log("设置成功！"),t.$router.push("/noneConList/1"),void 0)},error:function(){circleHidePass(),t.msgTip="服务器异常",$("#msgTipDialog").modal("show")}})):(t.msgTip="userId不能为空！",void $("#msgTipDialog").modal("show"))},trustPrice:function(t){this.trustPriceType=t},selectContractClick:function(t,e,n){var a=this;if(a.selectContractName=t,a.destroyMarket=e,window.pbE){O=n,pbE.HQ().hqSubscribe(0,(0,d.default)({1:[{2:e,3:n}]})),i=pbE.HQ().hqGetPriceRate(n,e);var o=pbE.WT().wtGetCurrentConnectionCID(),r=pbE.HQ().hqGetWTInfo(n,e,o);if(r){var s=JSON.parse(r);a.setDataObj.contractMarket=s.WTMarket,a.setDataObj.contractCode=s.WTCode;var c=pbE.WT().wtGetCurrentConnectionCID(),u=pbE.WT().wtQueryStockRe(c);if(u){for(var l=JSON.parse(u).data,p=0;p<l.length;p++)s.WTMarket==l[p][54]&&s.WTCode==l[p][63]&&(l[p][137]?$("#openNum").html(l[p][137]):$("#openNum").html(0));s.WTMarket==marketSHFE||marketBOCE||marketHXCE||marketWXBXG||marketQDGCXH?a.pingDayShow=!0:a.pingDayShow=!1}}a.getStockBuyNum()}},priceInfoClick:function(t){this.trustPriceType=2;var e=this;1==t&&(this.setDataObj.priceName="涨停价",this.setDataObj.selectPriceName=c),2==t&&(this.setDataObj.priceName="跌停价",this.setDataObj.selectPriceName=u),3==t&&(this.setDataObj.priceName="对手价",0==e.setDataObj.dealOpen?e.setDataObj.selectPriceName=s:1==e.setDataObj.dealOpen&&(e.setDataObj.selectPriceName=r)),
4==t&&(this.setDataObj.priceName="最新价",this.setDataObj.selectPriceName=o),e.getStockBuyNum()},getCanBuy:function(t,e,n,a){var i=pbE.WT().wtGetCurrentConnectionCID(),o=pbE.WT().wtQueryStockRe(i);if(o)for(var r=JSON.parse(o).data,s=0;s<r.length;s++)(t==r[s][54]&&e==r[s][63]||n==r[s][112]||a==r[s][503])&&(r[s][137]?$("#openNum").html(r[s][137]):$("#openNum").html(0))},getStockBuyNum:function(){var t=this;if(this.selectContractName&&t.setDataObj.priceName&&window.pbE){var e;2==t.trustPriceType?e=t.setDataObj.selectPriceName+"":1==t.trustPriceType&&(e=t.setDataObj.priceName+"");var n=pbE.WT().wtGetGDZH(t.setDataObj.contractMarket),a=pbE.WT().wtGetXWH(t.setDataObj.contractMarket),i={63:t.setDataObj.contractCode,54:t.setDataObj.contractMarket,129:e,112:t.setDataObj.dealOpen+"",117:t.setDataObj.OffsetFlag+"",119:"1",52:n,125:"0",161:a,40:"2",41:"3",42:"1"};console.log((0,d.default)(i)),pbE.WT().wtQueryStockBuy(t.CID,(0,d.default)(i))}}}}},,,,,,,,,,,function(t,e,n){var a,i;a=n(71);var o=n(92);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"39px"}},[n("div",{staticClass:"setDiv"},[n("div",{staticClass:"setOut"},[n("ul",[n("li",[n("div",{staticClass:"setDivOne"},[n("span",{staticClass:"inputText",staticStyle:{display:"inline-block"},domProps:{textContent:t._s(t.selectContractName)},on:{click:t.selectContractDialog}})]),t._v(" "),n("div",{staticClass:"setDivTwo"},[t._v("最新：")]),t._v(" "),n("div",{staticClass:"setDivThree",attrs:{id:"newPrice"}},[t._v("--")])]),t._v(" "),n("li",[n("div",{staticClass:"priceOne"},[t._v("\n                        条件单名称\n                    ")]),t._v(" "),n("div",{staticClass:"priceTwo"}),t._v(" "),n("div",{staticClass:"priceThree"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDataObj.conditionName,expression:"setDataObj.conditionName"}],attrs:{type:"text",placeholder:"条件单名称（可选填）"},domProps:{value:t._s(t.setDataObj.conditionName)},on:{input:function(e){e.target.composing||(t.setDataObj.conditionName=e.target.value)}}})])]),t._v(" "),n("li",[n("div",{staticClass:"conOne"},[t._v("有效期")]),t._v(" "),n("div",{staticClass:"conTwo"},[n("span",{class:[t.validPrice?"conSpanOne":"conSpanThree"],on:{click:function(e){t.validDateClick(0)}}},[t._v("当日")]),t._v(" "),n("span",{class:[t.validTime?"conSpanTwo":"conSpanFour"],on:{click:function(e){t.validDateClick(1)}}},[t._v("永久")])])]),t._v(" "),n("li",[n("div",{staticClass:"conOne"},[t._v("条件")]),t._v(" "),n("div",{staticClass:"conTwo"},[n("span",{class:[t.conPrice?"conSpanOne":"conSpanThree"],on:{click:function(e){t.conditionClick(0)}}},[t._v("价格")]),t._v(" "),n("span",{class:[t.conTime?"conSpanTwo":"conSpanFour"],on:{click:function(e){t.conditionClick(1)}}},[t._v("时间")])])]),t._v(" "),t.initPrice?n("li",[n("div",{staticClass:"priceOne"},[n("span",{staticClass:"priceStyle",domProps:{textContent:t._s(t.setDataObj.Operator)},on:{click:t.priceTypeClick}})]),t._v(" "),n("div",{staticClass:"priceTwo"}),t._v(" "),n("div",{staticClass:"priceThree"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDataObj.tjPriceValue,expression:"setDataObj.tjPriceValue"}],attrs:{type:"text",onkeyup:"value=value.replace(/[^\\.\\d]/g,'')",placeholder:"价格"},domProps:{value:t._s(t.setDataObj.tjPriceValue)},on:{input:function(e){e.target.composing||(t.setDataObj.tjPriceValue=e.target.value)}}})])]):n("li",[n("div",{staticClass:"timeConOne"},[t._v("时间到达")]),t._v(" "),n("div",{staticClass:"timeConTwo"},[n("vue-timepicker",{directives:[{name:"model",rawName:"v-model",value:t.touchTimeValue,expression:"touchTimeValue"}],attrs:{format:"HH:mm:ss"},domProps:{value:t.touchTimeValue},on:{input:function(e){t.touchTimeValue=e}}})],1)]),t._v(" "),n("li",[n("div",{staticClass:"conOne"},[t._v("买卖方向")]),t._v(" "),n("div",{staticClass:"conTwo"},[n("span",{class:[t.buyPrice?"conSpanOne":"conSpanThree"],on:{click:function(e){t.buyClick(0)}}},[t._v("买")]),t._v(" "),n("span",{class:[t.buyTime?"conSpanTwo":"conSpanFour"],on:{click:function(e){t.buyClick(1)}}},[t._v("卖")])])]),t._v(" "),n("li",[n("div",{staticClass:"conTypeOne"},[t._v("类型")]),t._v(" "),n("div",{staticClass:"conTypeTwo"},[n("span",{class:{conSpanTyeOne:t.openCang,conSpanTyeOneBlue:t.openCangFFF},on:{click:function(e){t.storehouseTypeClick(0)}}},[t._v("开仓")]),t._v(" "),n("span",{class:{conSpanTyeTwo:t.pingCang,conSpanTyeTwoBlue:t.pingCangBlue},on:{click:function(e){t.storehouseTypeClick(1)}}},[t._v("平仓")]),t._v(" "),t.pingDayShow?[n("span",{class:{conSpanTyeThree:t.pingDay,conSpanTyeThreeBlue:t.pingDayBlue},on:{click:function(e){t.storehouseTypeClick(2)}}},[t._v("平今")])]:[n("span",{class:{pingDayB:t.pingDay,conSpanTyeThreeBlue:t.pingDayBlue}},[t._v("平今")])]],2)]),t._v(" "),n("li",[n("div",{staticClass:"entrustOne"},[t._v("委托价格")]),t._v(" "),n("div",{staticClass:"entrustTwo"},[n("span",{staticClass:"trustSpan"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDataObj.priceName,expression:"setDataObj.priceName"}],staticClass:"inputText",attrs:{type:"text"},domProps:{value:t._s(t.setDataObj.priceName)},on:{change:function(e){t.trustPrice(1)},focus:t.trustFocus,input:function(e){e.target.composing||(t.setDataObj.priceName=e.target.value)}}})]),t._v(" "),n("span",{staticClass:"trustSpanOne",on:{click:t.priceInfoDialog}},[t._v("\n                        类型\n                    ")])])]),t._v(" "),n("li",[n("div",{staticClass:"conOne"},[t._v("委托数量")]),t._v(" "),n("div",{staticClass:"conTwo"},[n("span",{staticClass:"market"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDataObj.Volume,expression:"setDataObj.Volume"}],staticClass:"inputText",attrs:{type:"text",onkeyup:"value=value.replace(/[^\\.\\d]/g,'')"},domProps:{value:t._s(t.setDataObj.Volume)},on:{input:function(e){e.target.composing||(t.setDataObj.Volume=e.target.value)}}})])])])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.initAddBtn,expression:"initAddBtn"}],staticClass:"btnDiv conBtn"},[n("button",{staticClass:"btnSubmitFFF",attrs:{type:"button","data-toggle":"button"}},[t._v("\n            添加\n        ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.blueBtn,expression:"blueBtn"}],staticClass:"btnDiv conBtn"},[n("button",{staticClass:"btnSubmit",attrs:{type:"button","data-toggle":"button"},on:{click:t.addContractInfo}},[t._v("\n            添加\n        ")])]),t._v(" "),n("select-con-dialog",{attrs:{selectContract:t.selectContract},on:{selectContractClick:t.selectContractClick}}),t._v(" "),n("price-dialog",{on:{priceInfoClick:t.priceInfoClick}}),t._v(" "),n("tip-msg",{attrs:{msgTip:t.msgTip}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"conDivInfo"},[n("span",{staticClass:"spanRed"},[t._v("\n       可开：  "),n("span",{attrs:{id:"openBuy"}},[t._v("--")])]),t._v(" "),n("span",{staticClass:"spanBlue"},[t._v("\n       可平： "),n("span",{attrs:{id:"openNum"}},[t._v("--")])])])}]}}]);