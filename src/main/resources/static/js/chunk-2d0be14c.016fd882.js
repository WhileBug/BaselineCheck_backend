(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be14c"],{"2f79":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("PageHeader",{attrs:{title:t.title,items:t.items}}),s("el-dialog",{attrs:{title:"用户信息",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("el-form",{attrs:{model:t.form}},[s("el-form-item",{attrs:{label:"用户名","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),s("el-form-item",{attrs:{label:"密码","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userPasswrod,callback:function(e){t.$set(t.form,"userPasswrod",e)},expression:"form.userPasswrod"}})],1),s("el-form-item",{attrs:{label:"用户状态","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userStatus,callback:function(e){t.$set(t.form,"userStatus",e)},expression:"form.userStatus"}})],1),s("el-form-item",{attrs:{label:"用户权限","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userAuth,callback:function(e){t.$set(t.form,"userAuth",e)},expression:"form.userAuth"}})],1),s("el-form-item",{attrs:{label:"手机号","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userPhone,callback:function(e){t.$set(t.form,"userPhone",e)},expression:"form.userPhone"}})],1),s("el-form-item",{attrs:{label:"邮箱","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.userEmail,callback:function(e){t.$set(t.form,"userEmail",e)},expression:"form.userEmail"}})],1),s("el-form-item",{attrs:{label:"部门ID","label-width":t.formLabelWidth}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.departmentId,callback:function(e){t.$set(t.form,"departmentId",e)},expression:"form.departmentId"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.editUser()}}},[t._v("确 定")])],1)],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body pt-0"},[s("b-tabs",{attrs:{"nav-class":"nav-tabs-custom"}},[s("b-tab",{attrs:{"title-link-class":"p-3"},scopedSlots:t._u([{key:"title",fn:function(){return[s("a",{staticClass:"font-weight-bold active"},[t._v("部门成员管理")])]},proxy:!0}])},[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-sm-12 col-md-6"},[s("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[s("label",{staticClass:"d-inline-flex align-items-center"},[t._v("   "),s("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" 条 ")],1)])]),s("div",{staticClass:"col-sm-12 col-md-5"},[s("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[s("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Search: "),s("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),s("div",{staticClass:"table-responsive"},[s("b-table",{staticClass:"table-centered table-hover",attrs:{items:t.userList,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(userPasswrod)",fn:function(e){return[s("div",{staticClass:"badge font-size-12"},[t._v(t._s(t.ommit(e.value)))])]}},{key:"cell(paymentstatus)",fn:function(e){return[s("div",{staticClass:"badge font-size-12",class:{"badge-soft-danger":""+e.value==="Chargeback","badge-soft-success":""+e.value==="Paid","badge-soft-warning":""+e.value==="Unpaid"}},[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-3 text-primary",attrs:{href:"javascript:void(0);",title:"Edit"},on:{click:function(s){return t.openEdit(e)}}},[s("i",{staticClass:"mdi mdi-pencil font-size-18"})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-danger",attrs:{href:"javascript:void(0);",title:"Delete"},on:{click:function(s){return t.open(e)}}},[s("i",{staticClass:"mdi mdi-trash-can font-size-18"})])]}}])})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[s("ul",{staticClass:"pagination pagination-rounded mb-0"},[s("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])],1)],1)])])])],1)},o=[],r=s("5658"),l=s("2579"),i=s("6cba"),n=s.n(i),c={components:{Layout:r["a"],PageHeader:l["a"]},data:function(){return{title:"部门成员管理",departmentId:1,form:{id:"",userName:"",userPasswrod:"",userStatus:"",userAuth:"",userPhone:"",userEmail:"",lastLoginTime:"",departmentId:""},formLabelWidth:"120px",dialogFormVisible:!1,items:[{text:"部门管理"},{text:"部门成员管理",active:!0}],userList:[{orderid:"#NZ1563",date:"28 Mar, 2020",billingname:"Frank Dean",total:"$164",paymentstatus:"Unpaid"}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"id",sortDesc:!1,fields:[{key:"id",sortable:!0,label:"用户ID"},{key:"userName",sortable:!1,label:"用户名"},{key:"userPasswrod",sortable:!1,label:"密码"},{key:"userStatus",sortable:!1,label:"用户状态"},{key:"userAuth",sortable:!1,label:"用户权限"},{key:"userPhone",sortable:!1,label:"手机号"},{key:"userEmail",sortable:!1,label:"邮箱"},{key:"lastLoginTime",sortable:!0,label:"最后登录时间"},{key:"departmentId",sortable:!0,label:"部门ID"},{key:"action"}]}},computed:{rows:function(){return this.userList.length}},mounted:function(){},created:function(){this.departmentId=sessionStorage.getItem("did"),this.getAll()},methods:{ommit:function(t){return t.length>8?t.substring(0,8)+"...":t},editUser:function(){var t=this;this.dialogFormVisible=!1,console.log(this.form),n.a.post("http://localhost:8848/users/updateById",this.form).then((function(e){return console.log(e),t.$message({type:"success",message:"修改成功!"}),t.getAll()})).catch((function(t){console.log(t)}))},getAll:function(){var t=this;n.a.get("http://localhost:8848/users/selectByDepartmentId",{params:{departmentId:this.departmentId}}).then((function(e){return t.userList=e.data.obj,console.log(t.userList),t.totalRows=t.userList.length})).catch((function(t){console.log(t)}))},open:function(t){var e=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.delUser(t)})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},openEdit:function(t){console.log(t),this.dialogFormVisible=!0,this.form.id=t.item.id,this.form.userName=t.item.userName,this.form.userPasswrod=t.item.userPasswrod,this.form.userPhone=t.item.userPhone,this.form.userEmail=t.item.userEmail,this.form.userStatus=t.item.userStatus,this.form.userAuth=t.item.userAuth,this.form.departmentId=t.item.departmentId},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},delUser:function(t){var e=this;console.log(t),n.a.post("http://localhost:8848/users/deleteById",null,{params:{id:1}}).then((function(t){return console.log(t),e.$message({type:"success",message:"删除成功!"}),e.getAll()})).catch((function(t){console.log(t)}))}}},u=c,m=s("2877"),d=Object(m["a"])(u,a,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0be14c.016fd882.js.map