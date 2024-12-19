import{_ as p,a,b as s,p as t,v as d,e as u,o as i}from"./index-D7aEfaW_.js";const f={props:{newUser:{type:Object,required:!0},showPasswordFields:{type:Boolean,default:!0},adminForm:{type:Boolean,default:!1}},data(){return{formData:{name:"",username:"",password:"",confirmPassword:"",email:"",profileImageUrl:"",userId:-1},passwordError:""}},watch:{newUser:{immediate:!0,handler(m){this.formData={...m}}}},methods:{updateNewUser(){this.$emit("add-user",{...this.formData})}}},w={class:"main"},U={class:"field"},v={class:"control"},y={class:"field"},D={class:"control"},N={class:"field"},b={class:"control"},I={class:"field"},x={class:"control"},P={key:0,class:"field"},V={class:"field"},g={class:"control"},F={key:1,class:"field"},k={class:"field"},B={class:"control"},j={key:2,class:"field"},E={class:"field"},c={class:"control"};function A(m,e,n,C,r,o){return i(),a("div",w,[e[21]||(e[21]=s("div",{class:"close"},[s("i",{class:"fa-solid fa-x"})],-1)),s("div",U,[e[14]||(e[14]=s("label",{class:"label"},"Name:",-1)),s("div",v,[t(s("input",{class:"input is-rounded is-primary",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>r.formData.name=l),onInput:e[1]||(e[1]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"John Doe"},null,544),[[d,r.formData.name]])])]),s("div",y,[e[15]||(e[15]=s("label",{class:"label"},"Username:",-1)),s("div",D,[t(s("input",{class:"input is-primary is-rounded",type:"text","onUpdate:modelValue":e[2]||(e[2]=l=>r.formData.username=l),onInput:e[3]||(e[3]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"johndoe1"},null,544),[[d,r.formData.username]])])]),s("div",N,[e[16]||(e[16]=s("label",{class:"label"},"Email:",-1)),s("div",b,[t(s("input",{class:"input is-primary is-rounded",type:"email","onUpdate:modelValue":e[4]||(e[4]=l=>r.formData.email=l),onInput:e[5]||(e[5]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"johndoe@example.com"},null,544),[[d,r.formData.email]])])]),s("div",I,[e[17]||(e[17]=s("label",{class:"label"},"Profile Image:",-1)),s("div",x,[t(s("input",{class:"input is-primary is-rounded",type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>r.formData.profileImageUrl=l),onInput:e[7]||(e[7]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"https://my-image.com/example.jpg"},null,544),[[d,r.formData.profileImageUrl]])])]),n.adminForm?(i(),a("div",P,[s("div",V,[e[18]||(e[18]=s("label",{class:"label"},"User ID:",-1)),s("div",g,[t(s("input",{class:"input is-primary is-rounded",type:"number","onUpdate:modelValue":e[8]||(e[8]=l=>r.formData.userId=l),onInput:e[9]||(e[9]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"10000"},null,544),[[d,r.formData.userId]])])])])):u("",!0),n.showPasswordFields?(i(),a("div",F,[s("div",k,[e[19]||(e[19]=s("label",{class:"label"},"Password:",-1)),s("div",B,[t(s("input",{class:"input is-primary is-rounded",type:"password","onUpdate:modelValue":e[10]||(e[10]=l=>r.formData.password=l),onInput:e[11]||(e[11]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"password"},null,544),[[d,r.formData.password]])])])])):u("",!0),n.showPasswordFields?(i(),a("div",j,[s("div",E,[e[20]||(e[20]=s("label",{class:"label"},"Confirm Password:",-1)),s("div",c,[t(s("input",{class:"input is-primary is-rounded",type:"password","onUpdate:modelValue":e[12]||(e[12]=l=>r.formData.confirmPassword=l),onInput:e[13]||(e[13]=(...l)=>o.updateNewUser&&o.updateNewUser(...l)),placeholder:"confirm password"},null,544),[[d,r.formData.confirmPassword]])])])])):u("",!0)])}const J=p(f,[["render",A]]);export{J as A};
