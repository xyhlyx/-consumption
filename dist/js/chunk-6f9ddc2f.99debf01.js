(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f9ddc2f"],{"0e1f":function(e,t,s){var a=s("b10a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=s("499e").default;i("042b7204",a,!0,{})},"8cf1":function(e,t,s){"use strict";s.r(t);s("7f7f"),s("96cf");var a=s("1da1"),i=s("be94"),n=s("2b0e"),r=s("dce1"),o=s("05fa"),d=s("4e46"),h=s("a6f7"),c=s("582b"),l=s("6925"),u=s("1481"),f=s("2fa8"),w=s("d4bb"),v=s("81b6"),p=s("4d68"),m=s("68bb"),g=s("6a95"),b=s("3234"),x=s("4e0d"),C=(s("8517"),s("2f62")),k=s("904c");n["a"].use(d["a"]);c["a"],f["a"],w["a"],v["a"],p["a"],m["a"],g["a"],b["a"],x["a"],u["a"],h["a"],l["a"],o["a"],Object(i["a"])({},Object(C["b"])({getAddress:"getAddressList",createAddress:"createNewAddress",updateAddress:"updateAddress",deleteAddress:"deleteAddress"}),{chooseArea:function(e){e&&(this.hasChoosed=!0),console.log(arguments)},checkName:function(e){return""!=e||(this.showtishi=!0,this.showTip="收货人不能为空",!1)},checkTel:function(e){if(""==e.trim())this.showtishi=!0,this.showTip="手机号码不能为空";else if(11!=e.length)this.showtishi=!0,this.showTip="手机号字符必须为11位";else{if(/^1[34578]\d{9}$/.test(e.trim()))return!0;this.showtishi=!0,this.showTip="手机号字符格式不正确"}return!1},checkarea:function(e){return!(0==e.length||!this.hasChoosed)||(this.showtishi=!0,this.showTip="请选择区域",!1)},checkaddress:function(e){return""!=e||(this.showtishi=!0,this.showTip="请输入详细地址",!1)},saveInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("点击保存"),!(this.checkName(this.name)&&this.checkTel(this.tel)&&this.checkarea(this.area)&&this.checkaddress(this.detailaddress)&&this.swit)){e.next=9;break}return this.loadingShow=!0,e.next=5,this.createAddress({districtId:this.area[2]?this.area[2]:this.area[1]?this.area[1]:this.area[0],phone:this.tel,name:this.name,address:this.addressChoosed+this.detailaddress});case 5:t=e.sent,console.log(t),this.loadingShow=!1,this.$router.go(-1);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),validRule:function(){1==this.$refs.refname.valid&&""!=this.name&&1==this.$refs.reftel.valid&&""!=this.tel&&1==this.$refs.refdetailaddress.valid&&""!=this.detailaddress?this.swit=!0:this.swit=!1},onShadowChange:function(e,t){this.area=e,this.addressChoosed=t.join(""),console.log(arguments)}});n["a"].use(d["a"]);var A={directives:{TransferDom:c["a"]},components:{Flexbox:f["a"],FlexboxItem:w["a"],Divider:v["a"],XInput:p["a"],Group:m["a"],XButton:g["a"],Cell:b["a"],XAddress:x["a"],XHeader:u["a"],LoadingPlugin:h["a"],Loading:l["a"],Confirm:o["a"]},data:function(){return{name:"",tel:"",area:[],detailaddress:"",disabled:!0,swit:!1,addressChoosed:"",hasChoosed:!1,nameValue:function(e){return{valid:/^.{1,20}$/.test(e),msg:"验证码有误!"}},telValue:function(e){return{valid:e.length>=11&&/^1[34578]\d{9}$/.test(e),msg:"请输入11位手机号码"}},areaValue:function(e){return{valid:0===e.length,msg:"验证码有误!"}},detailaddressValue:function(e){return{valid:/^.{1,50}$/.test(e.trim()),msg:"验证码有误!"}},addressData:k,title:"所在区域",showAddress:!1,address_One:0,loadingShow:!1,member_id:"",showTip:"",showtishi:!1,showCancel:!1}},methods:Object(i["a"])({},Object(C["b"])({getAddress:"getAddressList",createAddress:"createNewAddress",updateAddress:"updateAddress",deleteAddress:"deleteAddress"}),{chooseArea:function(e){e&&(this.hasChoosed=!0),console.log(arguments)},checkName:function(e){return""!=e||(this.showtishi=!0,this.showTip="收货人不能为空",!1)},checkTel:function(e){if(""==e.trim())this.showtishi=!0,this.showTip="手机号码不能为空";else if(11!=e.length)this.showtishi=!0,this.showTip="手机号字符必须为11位";else{if(/^1[34578]\d{9}$/.test(e.trim()))return!0;this.showtishi=!0,this.showTip="手机号字符格式不正确"}return!1},checkarea:function(e){return!(0==e.length||!this.hasChoosed)||(this.showtishi=!0,this.showTip="请选择区域",!1)},checkaddress:function(e){return""!=e||(this.showtishi=!0,this.showTip="请输入详细地址",!1)},saveInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("点击保存"),!(this.checkName(this.name)&&this.checkTel(this.tel)&&this.checkarea(this.area)&&this.checkaddress(this.detailaddress)&&this.swit)){e.next=9;break}return this.loadingShow=!0,e.next=5,this.createAddress({districtId:this.area[2]?this.area[2]:this.area[1]?this.area[1]:this.area[0],phone:this.tel,name:this.name,address:this.addressChoosed+this.detailaddress});case 5:t=e.sent,console.log(t),this.loadingShow=!1,this.$router.go(-1);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),validRule:function(){1==this.$refs.refname.valid&&""!=this.name&&1==this.$refs.reftel.valid&&""!=this.tel&&1==this.$refs.refdetailaddress.valid&&""!=this.detailaddress?this.swit=!0:this.swit=!1},onShadowChange:function(e,t){this.area=e,this.addressChoosed=t.join(""),console.log(arguments)}}),mounted:function(){this.member_id=r["a"].getMemberId()}},T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addresswrap"},[s("x-header",{staticClass:"header",attrs:{"left-options":{backText:""}}},[e._v("添加收货地址")]),e._v(" "),s("flexbox",{staticClass:"mainCon",attrs:{orient:"vertical"}},[s("flexbox-item",{staticClass:"contents",attrs:{orient:"vertical"}},[s("group",[s("x-input",{ref:"refname",attrs:{placeholder:"收货人","is-type":e.nameValue},on:{"on-change":e.validRule},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),s("x-input",{ref:"reftel",attrs:{type:"text",placeholder:"手机号码","is-type":e.telValue},on:{"on-change":e.validRule},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}}),e._v(" "),s("x-address",{attrs:{title:e.title,"is-type":e.areaValue,placeholder:"选择区域",list:e.addressData,show:e.showAddress},on:{"on-hide":e.chooseArea,"on-shadow-change":e.onShadowChange}}),e._v(" "),s("x-input",{ref:"refdetailaddress",attrs:{placeholder:"详细地址","is-type":e.detailaddressValue},on:{"on-change":e.validRule},model:{value:e.detailaddress,callback:function(t){e.detailaddress=t},expression:"detailaddress"}})],1),e._v(" "),s("div",{staticClass:"save-btn"},[s("x-button",{staticClass:"save-info",class:!0===e.swit?"act":"",attrs:{"action-type":"submit"},nativeOn:{click:function(t){return e.saveInfo(t)}}},[e._v("保存")])],1)],1)],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("loading",{attrs:{show:e.loadingShow,text:"保存中.."}})],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("confirm",{attrs:{"show-cancel-button":e.showCancel},model:{value:e.showtishi,callback:function(t){e.showtishi=t},expression:"showtishi"}},[s("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.showTip))])])],1)],1)},$=[],_=s("2455");function j(e){s("0e1f")}var y=!1,S=j,O="data-v-ef51ec6c",R=null,V=Object(_["a"])(A,T,$,y,S,O,R);t["default"]=V.exports},a6f7:function(e,t,s){"use strict";var a,i,n=s("53ca"),r=s("6925"),o=s("e58f"),d=null,h={install:function(e,t){var s=e.extend(r["a"]);a||(a=new s({el:document.createElement("div")}),document.body.appendChild(a.$el));var h={show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i&&i(),"string"===typeof e?a.text=e:"object"===Object(n["a"])(e)&&Object(o["a"])(a,e),("object"===Object(n["a"])(e)&&e.onShow||e.onHide)&&(i=a.$watch("show",function(t){t&&e.onShow&&e.onShow(a),!1===t&&e.onHide&&e.onHide(a)})),d&&clearTimeout(d),d=setTimeout(function(){a.show=!0},e.delay||0)},hide:function(){d&&(clearTimeout(d),d=null),a.show=!1},isVisible:function(){return a.show}};e.$vux?e.$vux.loading=h:e.$vux={loading:h},e.mixin({created:function(){this.$vux=e.$vux}})}};t["a"]=h;h.install},b10a:function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,"\n.addresswrap[data-v-ef51ec6c] {\n  width: 100%;\n  height: 100vh;\n  background: #F5F5F5;\n}\n.addresswrap .topCont[data-v-ef51ec6c] {\n    color: #fff;\n    height: 17.06vw !important;\n    margin-bottom: 3vw;\n    font-size: 4.8vw;\n    background: #CD2E2E;\n}\n.addresswrap .topCont[data-v-ef51ec6c] .vux-header-title {\n      line-height: 17.06vw;\n}\n.addresswrap .topCont[data-v-ef51ec6c] .vux-header-left {\n      top: 6vw;\n}\n.addresswrap .save-btn[data-v-ef51ec6c] {\n    position: fixed;\n    bottom: 6.67vw;\n    width: 100%;\n    text-align: center;\n}\n.addresswrap .save-info[data-v-ef51ec6c] {\n    background: #CCCCCC;\n    display: inline-block;\n    width: 90%;\n    color: #fff;\n    height: 12vw;\n    border: none;\n    border-radius: 1vw;\n}\n.addresswrap .act[data-v-ef51ec6c] {\n    background: #CD2E2E;\n}\n.addresswrap .mainCon[data-v-ef51ec6c] {\n    margin-top: -4.5vw;\n}\n",""])}}]);
//# sourceMappingURL=chunk-6f9ddc2f.99debf01.js.map