import{A as u}from"./AddUserForm-QaJPfX2p.js";import{d as w,o as a,a as n,b as s,n as i,t as d,e as c,f as h,F as U,r as f,g as p,h as g,i as b,u as M,j as k,_ as I}from"./index-D7aEfaW_.js";const v={class:"main"},D={class:"top"},C={class:"modal-card"},E={class:"modal-card-head"},y={class:"modal-card-title title is-3"},A={class:"modal-card-body"},F={key:0,class:"help is-danger"},P={class:"modal-card-foot"},N={class:"buttons"},S={class:"box"},B=["src"],$={class:"actions"},j=["onClick"],T=["onClick"],V={class:"modal-card"},q={class:"modal-card-head"},z={class:"modal-card-body",id:"deleteUserModelBody"},L={class:"buttons"},G={meta:{requiresAdmin:!0},components:{AddUserForm:u},data(){return{users:p([]),showForm:!1,isEditMode:!1,showDeleteModal:!1,newUser:{name:"",username:"",password:"",confirmPassword:"",email:"",profileImageUrl:"",userId:""},passwordError:""}},methods:{showModal(){this.showForm=!0,this.isEditMode=!1,this.newUser={name:"",username:"",password:"",confirmPassword:"",email:"",profileImageUrl:"",userId:""}},closeModal(){this.showForm=!1},openDeleteModal(t){this.selectedUser=t,this.showDeleteModal=!0},closeDeleteModal(){this.selectedUser=null,this.showDeleteModal=!1},async deleteAUser(t){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}await g(t,e),window.location.reload()},editUser(t){delete t.password,this.newUser={...t},this.isEditMode=!0,this.showForm=!0},async addUser(){this.newUser.password===this.newUser.confirmPassword?(delete this.newUser.userId,await b(this.newUser),this.newUser={name:"",username:"",password:"",email:"",profileImageUrl:"",userId:-1},this.showForm=!1,window.location.reload()):(this.passwordError="Passwords do not match",this.newUser.password="",this.newUser.confirmPassword="")},async saveUserEdits(){const t=localStorage.getItem("jwtToken")||"";if(!t){console.log("No token found");return}delete this.newUser.password,delete this.newUser.confirmPassword,await M(this.newUser.userId,this.newUser,t),this.closeModal(),window.location.reload()},updateUser(t){this.newUser=t}},async mounted(){(localStorage.getItem("loggedInUserId")||null)!=0&&this.$router.push("/");const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}k(e).then(o=>this.users=o.data)}},H=w({...G,__name:"admin",setup(t){return(e,o)=>{var r;return a(),n("div",v,[s("div",D,[o[9]||(o[9]=s("h1",{class:"title is-3"},"Admin Panel",-1)),s("button",{onClick:o[0]||(o[0]=(...l)=>e.showModal&&e.showModal(...l)),class:"button",id:"formBtn"},"Add User"),s("div",{class:i(["modal",{"is-active":e.showForm}])},[o[8]||(o[8]=s("div",{class:"modal-background"},null,-1)),s("div",C,[s("header",E,[s("p",y,d(e.isEditMode?"Edit User":"Add User"),1),s("button",{class:"delete","aria-label":"close",onClick:o[1]||(o[1]=(...l)=>e.closeModal&&e.closeModal(...l))})]),s("section",A,[e.passwordError?(a(),n("p",F,d(e.passwordError),1)):c("",!0),h(u,{newUser:e.newUser,adminForm:!0,"show-password-fields":!e.isEditMode,onAddUser:e.updateUser},null,8,["newUser","show-password-fields","onAddUser"])]),s("footer",P,[s("div",N,[s("button",{class:"button is-primary",onClick:o[2]||(o[2]=l=>e.isEditMode?e.saveUserEdits():e.addUser())},"Submit")])])])],2)]),s("div",S,[s("table",null,[o[12]||(o[12]=s("thead",null,[s("tr",null,[s("th",null,"Profile Image"),s("th",null,"Name"),s("th",null,"Username"),s("th",null,"Email"),s("th",null,"User ID"),s("th",null,"Actions")])],-1)),s("tbody",null,[(a(!0),n(U,null,f(e.users,l=>(a(),n("tr",{key:l.userId},[s("td",null,[s("img",{src:l.profileImageUrl,alt:"Profile Image",class:"image is-64x64"},null,8,B)]),s("td",null,d(l.name),1),s("td",null,d(l.username),1),s("td",null,d(l.email),1),s("td",null,d(l.userId),1),s("td",$,[s("button",{onClick:m=>e.openDeleteModal(l),class:"button"},o[10]||(o[10]=[s("i",{class:"far fa-trash-alt"},null,-1)]),8,j),s("button",{onClick:m=>e.editUser(l),class:"button"},o[11]||(o[11]=[s("i",{class:"fas fa-user-edit"},null,-1)]),8,T)])]))),128))])])]),s("div",{class:i(["modal",{"is-active":e.showDeleteModal}])},[s("div",{class:"modal-background",onClick:o[3]||(o[3]=(...l)=>e.closeDeleteModal&&e.closeDeleteModal(...l))}),s("div",V,[s("header",q,[o[13]||(o[13]=s("p",{class:"modal-card-title title is-3"},"Delete User?",-1)),s("button",{class:"delete","aria-label":"close",onClick:o[4]||(o[4]=(...l)=>e.closeDeleteModal&&e.closeDeleteModal(...l))})]),s("section",z,[o[14]||(o[14]=s("p",null,"Are you sure you want to delete this user?",-1)),s("p",null,[s("strong",null,d((r=e.selectedUser)==null?void 0:r.name),1)]),s("div",L,[s("button",{class:"button is-danger",onClick:o[5]||(o[5]=l=>e.deleteAUser(e.selectedUser.userId))},"Confirm"),s("button",{class:"button",onClick:o[6]||(o[6]=(...l)=>e.closeDeleteModal&&e.closeDeleteModal(...l))},"Cancel")])])]),s("button",{class:"modal-close is-large","aria-label":"close",onClick:o[7]||(o[7]=(...l)=>e.closeDeleteModal&&e.closeDeleteModal(...l))})],2)])}}}),O=I(H,[["__scopeId","data-v-f1376a7f"]]);export{O as default};
