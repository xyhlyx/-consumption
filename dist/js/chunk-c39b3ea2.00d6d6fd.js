(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c39b3ea2"],{"1bea":function(t,e,n){"use strict";n.r(e);n("6b54");var o=n("be94"),i=n("2b0e"),a=n("05fa"),s=n("2f62"),c=(n("dce1"),n("8517"),n("1c46"),n("9c05")),h=n("3f83"),r=n("1481"),l=n("4e46"),d=n("a6f7"),u=n("2fa8"),p=n("d4bb"),v=n("81b6"),f=n("4d68"),w=n("68bb"),g=n("6a95"),m=n("3234"),b=n("4e0d"),x=(n("5537d"),n("6925"));i["a"].use(l["a"]),i["a"].use(d["a"]);u["a"],p["a"],v["a"],f["a"],w["a"],g["a"],m["a"],b["a"],x["a"],r["a"],a["a"],Object(o["a"])({},Object(s["c"])({updateMyPhone:"updateMyPhone"}),{back:function(){},checkTel:function(t){var e="";if(""==this.tel)e="手机号码不能为空";else if(11!=this.tel.length)e="手机号字符长度必须是11位";else{if(/^1[34578]\d{9}$/.test(this.tel))return this.redTips=2,!0;e="手机号字符格式不正确"}return t&&(this.showtishi=!0,this.showTip=e),this.redTips=1,!1},checkCode:function(t){var e="";if(""==this.code)e="验证码不能为空";else{if(6==this.code.length)return this.redTips=6,!0;e="请输入6位字符串"}return t&&(this.showtishi=!0,this.showTip=e),this.redTips=3,!1},getCode:function(){if(this.tel)if(this.tel==this.myInfo.phone)this.showtishi=!0,this.showTip="该手机号已经绑定过";else{if(this.showtishi=!1,this.showTip="",!this.canClick)return;this.getCodeData()}else this.showTip="手机号不能为空",this.showtishi=!0},getCodeData:function(){var t=this;this.$vux.loading.show({text:"Loading"}),c["a"].getValiCode(this.tel.toString()).then(function(e){if(t.$vux.loading.hide(),200===e.code){t.canClick=!1,t.content=t.totalTime+"s";var n=window.setInterval(function(){t.totalTime--,t.content=t.totalTime+"s",t.totalTime<0&&(window.clearInterval(n),t.content="获取验证码",t.totalTime=59,t.canClick=!0)},1e3);t.$vux.toast.text("已发送验证码","bottom")}else t.$vux.toast.text(e.message,"bottom")}).catch(function(e){t.$vux.loading.hide(),t.$vux.toast.text("获取验证码失败","bottom"),console.error(e)})},saveInfo:function(){var t=this;if(this.checkTel(!0)&&this.checkCode(!0)){this.$vux.loading.show({text:"绑定中"});var e={phone:this.tel.toString(),code:this.code};c["a"].validatePhone(e).then(function(n){t.$vux.loading.hide(),200===n.code?(t.updateMyPhone(e.phone),h["a"].behaveLogs(h["a"].BEHAVIOR_AUTH_MOBILE),0===t.type?t.$router.push({path:"/voucherDetails"}):1===t.type?(console.log("返回到红包券详情"),t.$router.push({path:"/voucherDetails"})):2===t.type?(console.log("从我的页面进入"),t.$router.push({path:"/coupons"})):3===t.type?(console.log("返回到抵扣券详情"),t.$router.push({path:"/voucherDetails",query:{source:0}})):4===t.type?(console.log("返回到送祝福页面"),t.$router.push("/blessing")):7===t.type&&(console.log("返回到我的页面"),t.$router.push({path:"/mys"}))):t.$vux.toast.text(n.message,"bottom")})}},validRule:function(t){this.checkTel()&&this.checkCode()?this.swit=!0:this.swit=!1}}),Object(o["a"])({},Object(s["d"])({myInfo:function(t){return t.user.myInfo}}));i["a"].use(l["a"]),i["a"].use(d["a"]);var y={components:{Flexbox:u["a"],FlexboxItem:p["a"],Divider:v["a"],XInput:f["a"],Group:w["a"],XButton:g["a"],Cell:m["a"],XAddress:b["a"],Loading:x["a"],XHeader:r["a"],Confirm:a["a"]},data:function(){return{data:{},type:0,tel:"",curTel:"",curmobile:"",code:"",swit:!1,show2:!1,content:"获取验证码",totalTime:60,canClick:!0,telValue:function(t){return{valid:t.length>=11&&/^1[34578]\d{9}$/.test(t),msg:"验证码有误!"}},codeValue:function(t){return{valid:/\d{4}/.test(t)&&t.length>=4,msg:"验证码有误！"}},redTips:"",showTip:"",showtishi:!1,showCancel:!1}},methods:Object(o["a"])({},Object(s["c"])({updateMyPhone:"updateMyPhone"}),{back:function(){},checkTel:function(t){var e="";if(""==this.tel)e="手机号码不能为空";else if(11!=this.tel.length)e="手机号字符长度必须是11位";else{if(/^1[34578]\d{9}$/.test(this.tel))return this.redTips=2,!0;e="手机号字符格式不正确"}return t&&(this.showtishi=!0,this.showTip=e),this.redTips=1,!1},checkCode:function(t){var e="";if(""==this.code)e="验证码不能为空";else{if(6==this.code.length)return this.redTips=6,!0;e="请输入6位字符串"}return t&&(this.showtishi=!0,this.showTip=e),this.redTips=3,!1},getCode:function(){if(this.tel)if(this.tel==this.myInfo.phone)this.showtishi=!0,this.showTip="该手机号已经绑定过";else{if(this.showtishi=!1,this.showTip="",!this.canClick)return;this.getCodeData()}else this.showTip="手机号不能为空",this.showtishi=!0},getCodeData:function(){var t=this;this.$vux.loading.show({text:"Loading"}),c["a"].getValiCode(this.tel.toString()).then(function(e){if(t.$vux.loading.hide(),200===e.code){t.canClick=!1,t.content=t.totalTime+"s";var n=window.setInterval(function(){t.totalTime--,t.content=t.totalTime+"s",t.totalTime<0&&(window.clearInterval(n),t.content="获取验证码",t.totalTime=59,t.canClick=!0)},1e3);t.$vux.toast.text("已发送验证码","bottom")}else t.$vux.toast.text(e.message,"bottom")}).catch(function(e){t.$vux.loading.hide(),t.$vux.toast.text("获取验证码失败","bottom"),console.error(e)})},saveInfo:function(){var t=this;if(this.checkTel(!0)&&this.checkCode(!0)){this.$vux.loading.show({text:"绑定中"});var e={phone:this.tel.toString(),code:this.code};c["a"].validatePhone(e).then(function(n){t.$vux.loading.hide(),200===n.code?(t.updateMyPhone(e.phone),h["a"].behaveLogs(h["a"].BEHAVIOR_AUTH_MOBILE),0===t.type?t.$router.push({path:"/voucherDetails"}):1===t.type?(console.log("返回到红包券详情"),t.$router.push({path:"/voucherDetails"})):2===t.type?(console.log("从我的页面进入"),t.$router.push({path:"/coupons"})):3===t.type?(console.log("返回到抵扣券详情"),t.$router.push({path:"/voucherDetails",query:{source:0}})):4===t.type?(console.log("返回到送祝福页面"),t.$router.push("/blessing")):7===t.type&&(console.log("返回到我的页面"),t.$router.push({path:"/mys"}))):t.$vux.toast.text(n.message,"bottom")})}},validRule:function(t){this.checkTel()&&this.checkCode()?this.swit=!0:this.swit=!1}}),mounted:function(){var t=this.$route.query,e=t.type,n=t.data;this.type=parseInt(e),this.data=n},computed:Object(o["a"])({},Object(s["d"])({myInfo:function(t){return t.user.myInfo}}))},T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap"},[o("x-header",{staticClass:"header",attrs:{"left-options":{backText:""}}},[t._v("\n        "+t._s(t.myInfo.id?t.myInfo.phone?"更新手机":"绑定手机":"")+"\n    ")]),t._v(" "),o("flexbox",{attrs:{orient:"vertical"}},[o("flexbox-item",{staticClass:"content"},[t.myInfo.id&&!t.myInfo.phone?o("div",{staticClass:"rewardImg"},[o("img",{staticClass:"img",attrs:{src:n("e359")}})]):t._e(),t._v(" "),t.myInfo.phone?o("div",{staticClass:"curTel"},[t._v("\n                当前手机号码："+t._s(t._f("encrypted")(t.myInfo.phone))+"\n            ")]):t._e(),t._v(" "),o("group",{staticStyle:{position:"relative"}},[o("x-input",{class:["telInp",1==t.redTips?"redTips":""],attrs:{max:11,type:"text",placeholder:"请输入手机号"},on:{"on-change":t.validRule},model:{value:t.tel,callback:function(e){t.tel="string"===typeof e?e.trim():e},expression:"tel"}},[o("button",{staticClass:"btn-get-code",class:t.canClick?"":"active",attrs:{slot:"right"},on:{click:t.getCode},slot:"right"},[t._v("\n                        "+t._s(t.content)+"\n                    ")])]),t._v(" "),o("x-input",{ref:"refcode",class:3==t.redTips?"redTips":"",attrs:{type:"text",max:6,placeholder:"请输入短信验证码"},on:{"on-change":t.validRule},model:{value:t.code,callback:function(e){t.code="string"===typeof e?e.trim():e},expression:"code"}})],1),t._v(" "),o("div",{staticClass:"save-btn"},[o("x-button",{staticClass:"save-info",class:!0===t.swit?"act":"",attrs:{"action-type":"submit"},nativeOn:{click:function(e){return t.saveInfo(e)}}},[t._v("\n                    保存\n                ")])],1),t._v(" "),o("loading",{attrs:{show:t.show2,text:"加载中"}}),t._v(" "),o("div",[o("confirm",{attrs:{"show-cancel-button":t.showCancel},model:{value:t.showtishi,callback:function(e){t.showtishi=e},expression:"showtishi"}},[o("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.showTip))])])],1)],1)],1)],1)},C=[],$=n("2455");function k(t){n("e9d6")}var I=!1,E=k,_="data-v-44c75704",O=null,D=Object($["a"])(y,T,C,I,E,_,O);e["default"]=D.exports},"7eaa":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.redTips[data-v-44c75704] {\n  color: #CD2E2E;\n}\n.wrap[data-v-44c75704] {\n  width: 100%;\n  height: 100vh;\n  background: #F5F5F5;\n}\n.wrap .topCont[data-v-44c75704] {\n    color: #fff;\n    height: 17.06vw !important;\n    margin-bottom: 3vw;\n    font-size: 4.8vw;\n    background: #CD2E2E;\n}\n.wrap .topCont[data-v-44c75704] .vux-header-title {\n      line-height: 17.06vw;\n}\n.wrap .topCont[data-v-44c75704] .vux-header-left {\n      top: 6vw;\n}\n.wrap .content[data-v-44c75704] {\n    margin-top: -1vw !important;\n}\n.wrap .rewardImg[data-v-44c75704] {\n    width: 100%;\n    height: 33.33vw;\n}\n.wrap .rewardImg .img[data-v-44c75704] {\n      width: 100%;\n      height: 100%;\n}\n.wrap .save-btn[data-v-44c75704] {\n    bottom: 6.67vw;\n    width: 100%;\n    text-align: center;\n    margin-top: 13.33vw;\n}\n.wrap .save-info[data-v-44c75704] {\n    background: #CCCCCC;\n    display: inline-block;\n    width: 90%;\n    color: #fff;\n    height: 12vw;\n    border: none;\n    border-radius: 1vw;\n}\n.wrap .act[data-v-44c75704] {\n    background: #CD2E2E;\n}\n.wrap .telInp[data-v-44c75704] {\n    position: relative;\n}\n.wrap .btn-get-code[data-v-44c75704] {\n    position: absolute;\n    width: 20vw;\n    height: 8vw;\n    color: #CD2E2E;\n    border: 1px solid #CD2E2E;\n    border-radius: 1.7vw;\n    background: #fff;\n    right: 10vw;\n    z-index: 99;\n    transform: translateY(-50%);\n    top: 50%;\n}\n.wrap .active[data-v-44c75704] {\n    background: #E6E6E6;\n    color: #999999;\n    border: 1px solid #E6E6E6;\n}\n.wrap .btn-get-code.active[data-v-44c75704] {\n    border: 1px solid #E6E6E6 !important;\n}\n.wrap .curTel[data-v-44c75704] {\n    height: 14vw;\n    display: flex;\n    align-items: center;\n    margin-bottom: -6vw;\n    padding-left: 5vw;\n}\n",""])},a6f7:function(t,e,n){"use strict";var o,i,a=n("53ca"),s=n("6925"),c=n("e58f"),h=null,r={install:function(t,e){var n=t.extend(s["a"]);o||(o=new n({el:document.createElement("div")}),document.body.appendChild(o.$el));var r={show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i&&i(),"string"===typeof t?o.text=t:"object"===Object(a["a"])(t)&&Object(c["a"])(o,t),("object"===Object(a["a"])(t)&&t.onShow||t.onHide)&&(i=o.$watch("show",function(e){e&&t.onShow&&t.onShow(o),!1===e&&t.onHide&&t.onHide(o)})),h&&clearTimeout(h),h=setTimeout(function(){o.show=!0},t.delay||0)},hide:function(){h&&(clearTimeout(h),h=null),o.show=!1},isVisible:function(){return o.show}};t.$vux?t.$vux.loading=r:t.$vux={loading:r},t.mixin({created:function(){this.$vux=t.$vux}})}};e["a"]=r;r.install},e359:function(t,e,n){t.exports=n.p+"img/plus.2b1bdb68.png"},e9d6:function(t,e,n){var o=n("7eaa");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("2f67d6d6",o,!0,{})}}]);
//# sourceMappingURL=chunk-c39b3ea2.00d6d6fd.js.map