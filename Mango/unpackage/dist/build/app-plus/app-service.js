(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function a(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=a(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(r.length>1){var u=r.pop();s=r.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=r[0];console[i](s)}n.r(e),n.d(e,"log",(function(){return i})),n.d(e,"default",(function(){return r}))},1110:function(t,e,n){"use strict";n("2cdf");var a=i(n("8bbf")),o=i(n("ba0b"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.config.productionTip=!1,o.default.mpType="app";var c=new a.default(s({},o.default));c.$mount()},"2cdf":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("8d6a").default)})),__definePage("pages/turn/turn",(function(){return Vue.extend(n("7d04").default)})),__definePage("pages/owner/owner",(function(){return Vue.extend(n("5f05").default)}))},"2e8c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"3b98":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","intro"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","intro"),attrs:{_i:1}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.con,expression:"con"}],attrs:{_i:2},domProps:{value:t._$s(2,"v-model",t.con)},on:{input:function(e){e.target.composing||(t.con=e.target.value)}}})]),n("view",{staticClass:t._$s(3,"sc","intro"),attrs:{_i:3}},[n("button",{attrs:{_i:4},on:{click:t.turn}})]),n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(5,"v-show",t.show),expression:"_$s(5,'v-show',show)"}],staticClass:t._$s(5,"sc","intro"),attrs:{_i:5}},[n("br"),n("view",{staticClass:t._$s(7,"sc","intro"),attrs:{_i:7}},[n("text")]),n("br"),n("view",{staticClass:t._$s(10,"sc","intro"),attrs:{_i:10}},[n("cover-image",{attrs:{src:t._$s(11,"a-src",t.data.item_info.pict_url),_i:11}})]),n("view",{staticClass:t._$s(12,"sc","intro"),attrs:{_i:12}},[n("b",[n("text",{attrs:{_i:14},domProps:{textContent:t._s(t._$s(14,"v-text",t.data.item_info.title))}})])]),n("view",{staticClass:t._$s(15,"sc","intro"),attrs:{_i:15}},[n("view",{staticClass:t._$s(16,"sc","intro"),attrs:{_i:16}},[n("b",[n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(18,"v-show",!t.data.has_coupon),expression:"_$s(18,'v-show',!data.has_coupon)"}],attrs:{_i:18}}),n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(19,"v-show",t.data.has_coupon),expression:"_$s(19,'v-show',data.has_coupon)"}],attrs:{_i:19}}),n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(20,"v-show",t.data.has_coupon),expression:"_$s(20,'v-show',data.has_coupon)"}],attrs:{_i:20},domProps:{textContent:t._s(t._$s(20,"v-text",t.data.youhuiquan+"元"))}})])])]),n("view",{staticClass:t._$s(21,"sc","intro"),attrs:{_i:21}},[n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(22,"v-show",t.data.has_coupon),expression:"_$s(22,'v-show',data.has_coupon)"}],attrs:{_i:22},domProps:{textContent:t._s(t._$s(22,"v-text","券后价："+(t.data.item_info.zk_final_price-t.data.youhuiquan)+"元"))}}),n("text",{directives:[{name:"show",rawName:"v-show",value:t._$s(23,"v-show",!t.data.has_coupon),expression:"_$s(23,'v-show',!data.has_coupon)"}],attrs:{_i:23},domProps:{textContent:t._s(t._$s(23,"v-text","抢购价："+t.data.item_info.zk_final_price+"元"))}}),n("br"),n("text",{attrs:{id:t._$s(25,"a-id",t.tkl),_i:25},domProps:{textContent:t._s(t._$s(25,"v-text",t.data.tpwd))}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.tpwd,expression:"data.tpwd"}],attrs:{_i:26},domProps:{value:t._$s(26,"v-model",t.data.tpwd)},on:{input:function(e){e.target.composing||t.$set(t.data,"tpwd",e.target.value)}}})]),n("view",{staticClass:t._$s(27,"sc","intro"),attrs:{_i:27}},[n("button",{attrs:{_i:28},on:{click:t.openUrl}}),n("button",{attrs:{_i:29},on:{click:t.copyTkl}})])])])},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"44de":function(t,e,n){"use strict";n.r(e);var a=n("e64a"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4f05":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","intro"),attrs:{_i:0}},[n("web-view",{})])},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"566a":function(t,e,n){"use strict";n.r(e);var a=n("7fb0"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"5f05":function(t,e,n){"use strict";n.r(e);var a=n("928b"),o=n("566a");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},"62e0":function(t,e,n){"use strict";n.r(e);var a=n("2e8c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},7938:function(t,e,n){"use strict";n.r(e);var a=n("fc6f"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"7d04":function(t,e,n){"use strict";n.r(e);var a=n("3b98"),o=n("44de");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},"7fb0":function(t,e){},"8bbf":function(t,e){t.exports=Vue},"8d6a":function(t,e,n){"use strict";n.r(e);var a=n("4f05"),o=n("7938");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},"928b":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},ba0b:function(t,e,n){"use strict";n.r(e);var a=n("62e0");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var i,r,s,u,c=n("f0c5"),d=Object(c["a"])(a["default"],i,r,!1,null,null,null,!1,s,u);e["default"]=d.exports},e64a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{content:"此处显示转链之后的内容",con:"",data:{has_coupon:!1,short_url:"短链接",tpwd:"淘口令",youhuiquan:"优惠券",coupon_click_url:"优惠券链接",item_url:"二合一链接",quanlimit:"券限制",coupon_info:"券信息",item_info:{pict_url:"主图链接",zk_final_price:"售价",title:"商品标题"}},show:!1}},methods:{turn:function(){if(""==this.con)alert("请输入淘口令或者商品链接，不能为空");else{t("log","开始转链"," at pages/turn/turn.vue:73");var e=this.con,n="/taobao/highTurnByAll.php",a="c90dbafa-95f2-e430-8b58-a085740c9e5c",o="mm_129779402_46770368_109694000456",i="mc陌宇",r=this;uni.request({url:n,data:{apkey:a,pid:o,extsearch:1,tpwd:1,shorturl:1,tbname:i,content:e},success:function(t){r.data.has_coupon=t.data.data.has_coupon,r.data.short_url=t.data.data.short_url,r.data.tpwd=t.data.data.tpwd,r.data.coupon_click_url=t.data.data.coupon_click_url,r.data.item_info.pict_url=t.data.data.item_info.pict_url,r.data.item_info.title=t.data.data.item_info.title,r.data.item_info.zk_final_price=t.data.data.item_info.zk_final_price,r.data.has_coupon?(r.data.youhuiquan=t.data.data.youhuiquan,r.data.quanlimit=t.data.data.quanlimit,r.data.coupon_info=t.data.data.coupon_info):r.data.item_url=t.data.data.item_url,r.run()}})}},run:function(){var t="",e="";this.data.has_coupon?(this.data.quanlimit>this.data.youhuiquan?(t="\n【券限制】"+this.data.coupon_info,e="【在售价】"+this.data.item_info.zk_final_price):e="【券后价】"+(this.data.item_info.zk_final_price-this.data.youhuiquan),this.content=this.data.item_info.title+"\n【优惠券】"+this.data.youhuiquan+"元\n"+e+"元"+t+"\n【淘口令】"+this.data.tpwd+"\n【抢购点】"+this.data.short_url):this.content=this.data.item_info.title+"\n【在售价】"+this.data.item_info.zk_final_price+"元\n【淘口令】"+this.data.tpwd+"\n【抢购点】"+this.data.short_url,this.show=!0},openUrl:function(){window.open(this.data.short_url)},copyTkl:function(){var t=document.querySelector("input");t.select(),document.execCommand("Copy"),alert("已复制好！请打开手机淘宝将自动识别淘口令。")},openTb:function(){window.open("https://t.asczwa.com/taobao?backurl="+this.data.short_url)}}};e.default=n}).call(this,n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function a(t,e,n,a,o,i,r,s,u,c){var d,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var l=Object.prototype.hasOwnProperty;for(var _ in u)l.call(u,_)&&!l.call(f.components,_)&&(f.components[_]=u[_])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),a&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),r?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=d):o&&(d=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(f.functional){f._injectStyles=d;var p=f.render;f.render=function(t,e){return d.call(e),p(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:f}}n.d(e,"a",(function(){return a}))},fc6f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{}};e.default=a}},[["1110","app-config"]]]);