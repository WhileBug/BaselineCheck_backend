(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228e64"],{dac4:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("Layout",[o("PageHeader",{attrs:{title:t.title,items:t.items}}),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("form-wizard",{attrs:{color:"#5664d2"},on:{"on-complete":t.onComplete}},[o("tab-content",{attrs:{title:"主机信息","before-change":t.beforeTabSwitch}},[o("div",{staticClass:"tab-pane",attrs:{id:"basic-info"}},[o("h4",{staticClass:"card-title"},[t._v("填写主机信息")]),o("p",{staticClass:"card-title-desc"},[t._v("请填入以下所有基本信息")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"productname"}},[t._v("主机IP")]),t._v("* "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.hostIp,expression:"form.hostIp"}],staticClass:"form-control",attrs:{id:"productname",name:"productname",type:"text"},domProps:{value:t.form.hostIp},on:{input:function(s){s.target.composing||t.$set(t.form,"hostIp",s.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"productname"}},[t._v("主机MAC")]),t._v("* "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.hostMac,expression:"form.hostMac"}],staticClass:"form-control",attrs:{id:"productname",name:"productname",type:"text"},domProps:{value:t.form.hostMac},on:{input:function(s){s.target.composing||t.$set(t.form,"hostMac",s.target.value)}}})]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"productname"}},[t._v("主机用户名")]),t._v("* "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.hostUserName,expression:"form.hostUserName"}],staticClass:"form-control",attrs:{id:"productname",name:"productname",type:"text"},domProps:{value:t.form.hostUserName},on:{input:function(s){s.target.composing||t.$set(t.form,"hostUserName",s.target.value)}}})])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[t._v("主机密码")]),t._v("* "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.hostUserPassword,expression:"form.hostUserPassword"}],staticClass:"form-control",attrs:{id:"productname",name:"productname",type:"password"},domProps:{value:t.form.hostUserPassword},on:{input:function(s){s.target.composing||t.$set(t.form,"hostUserPassword",s.target.value)}}})])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[t._v("主机端口")]),t._v("* "),o("multiselect",{attrs:{options:["22","22"]},model:{value:t.form.hostUerPort,callback:function(s){t.$set(t.form,"hostUerPort",s)},expression:"form.hostUerPort"}})],1)])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[t._v("主机协议")]),t._v("* "),o("multiselect",{attrs:{options:["SSL","SSL"]},model:{value:t.form.hostUserProtocol,callback:function(s){t.$set(t.form,"hostUserProtocol",s)},expression:"form.hostUserProtocol"}})],1)])])])])]),o("tab-content",{staticStyle:{margin:"3%"},attrs:{title:"确认连接"}},[o("div",{staticClass:"tab-pane",staticStyle:{color:"#9494b8"},attrs:{id:"product-img"}},[o("h1",{staticStyle:{"margin-left":"15%"}},[t._v("您的验证码为：")]),o("h1",{staticStyle:{"margin-left":"38%"}},[t._v(t._s(this.veryCode))]),o("h1",{staticStyle:{"margin-left":"50%"}},[t._v("请在客户端输入验证码")])])]),o("el-button",{attrs:{slot:"prev",type:"primary",plain:""},slot:"prev"},[t._v("返回")]),o("el-button",{attrs:{slot:"next",type:"primary",plain:""},slot:"next"},[t._v("下一步")]),o("el-button",{attrs:{slot:"finish",type:"primary",plain:""},slot:"finish"},[t._v("提交申请")])],1)],1)])])])],1)},a=[],r=o("8e5f"),i=o.n(r),l=o("2ee4"),n=o("6cba"),c=o.n(n),m=o("5658"),d=o("2579"),u={components:{Layout:m["a"],PageHeader:d["a"],FormWizard:l["FormWizard"],TabContent:l["TabContent"],Multiselect:i.a},data:function(){return{pid:"",form:{userId:"",hostIp:"",hostMac:"",hostUserName:"",hostUserPassword:"",hostUerPort:"22",hostUserProtocol:"SSL"},veryCode:"123",loading:"",isAllFill:!1,leaderName:"",leaderClass:"",title:"添加主机",items:[{text:"主机管理"},{text:"添加主机",active:!0}],value:null,value1:null,options:["Touchscreen","Call Function","Notifications","Fitness","Outdoor"],dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}}}},watch:{form:{handler:function(){this.isAllFill=""!=this.form.hostIp&&""!=this.form.hostMac&&""!=this.form.hostUserName&&""!=this.form.hostUserPassword&&""!=this.form.hostUserPort&&""!=this.form.hostUserProtocol},deep:!0}},methods:{beforeTabSwitch:function(){return!!this.isAllFill||(this.$message({type:"warning",message:"请填写所有必填项"}),!1)},openFullScreen:function(){this.loading=this.$loading({lock:!0,text:"尝试连接",background:"rgba(0, 0, 0, 0.7)"})},onComplete:function(){var t=this,s=this.form;this.openFullScreen(),s["pid"]=this.veryCode,s["userId"]=this.userId,c.a.post("http://localhost:8848/hostregister/successornot",s).then((function(s){return console.log(s),setTimeout((function(){t.loading.close(),t.$message({type:"success",message:"添加成功!"}),t.$router.push("/hostList")}),2e3)})).catch((function(t){console.log(t)}))}},created:function(){this.userId=sessionStorage.getItem("id"),this.veryCode=sessionStorage.getItem("pid"),console.log(this.veryCode)}},p=u,h=o("2877"),f=Object(h["a"])(p,e,a,!1,null,null,null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d228e64.b7deffef.js.map