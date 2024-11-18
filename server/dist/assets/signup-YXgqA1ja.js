import{_ as p,a,b as s,k as m,w as r,v as t,t as u,j as c,m as d,o as n}from"./index-B42FrlYP.js";const b={data(){return{name:"",email:"",phone:"",password:"",confirmPassword:"",passwordError:""}},methods:{submitForm(){this.password!==this.confirmPassword?this.passwordError="Passwords do not match":(this.passwordError="",console.log("Name:",this.name),console.log("Email:",this.email),console.log("Phone:",this.phone),console.log("Password:",this.password),localStorage.setItem("newlySignedUpEmail",this.email),localStorage.setItem("success",!0),this.$router.push("login"))}}},h={class:"hero is-fullheight is-black"},f={class:"hero-body"},w={class:"container has-text-centered"},y={class:"box",style:{border:"1px solid #00d1b2","border-radius":"8px",padding:"1rem"}},v={class:"field"},g={class:"control"},x={class:"field"},k={class:"control"},E={class:"field"},_={class:"control"},P={class:"field"},U={class:"control"},V={class:"field"},S={class:"control"},N={key:0,class:"help is-danger"};function q(C,o,B,F,e,i){return n(),a("main",null,[s("section",h,[s("div",f,[s("div",w,[o[13]||(o[13]=s("div",{class:"logo mb-6"},[s("i",{class:"fas fa-dumbbell",style:{"font-size":"3rem",color:"#00d1b2"}})],-1)),s("div",y,[o[12]||(o[12]=s("h1",{class:"title",style:{color:"#090a0c"}},"Sign Up",-1)),s("form",{onSubmit:o[5]||(o[5]=m((...l)=>i.submitForm&&i.submitForm(...l),["prevent"]))},[s("div",v,[o[6]||(o[6]=s("label",{class:"label has-text-black"},"Name:",-1)),s("div",g,[r(s("input",{class:"input is-primary is-rounded",type:"text",placeholder:"Enter your name","onUpdate:modelValue":o[0]||(o[0]=l=>e.name=l),required:""},null,512),[[t,e.name]])])]),s("div",x,[o[7]||(o[7]=s("label",{class:"label has-text-black"},"Email:",-1)),s("div",k,[r(s("input",{class:"input is-primary is-rounded",type:"email",placeholder:"Enter your email","onUpdate:modelValue":o[1]||(o[1]=l=>e.email=l),required:""},null,512),[[t,e.email]])])]),s("div",E,[o[8]||(o[8]=s("label",{class:"label has-text-black"},"Phone Number:",-1)),s("div",_,[r(s("input",{class:"input is-primary is-rounded",type:"tel",placeholder:"Enter your phone number","onUpdate:modelValue":o[2]||(o[2]=l=>e.phone=l),required:""},null,512),[[t,e.phone]])])]),s("div",P,[o[9]||(o[9]=s("label",{class:"label has-text-black"},"Password:",-1)),s("div",U,[r(s("input",{class:"input is-primary is-rounded",type:"password",placeholder:"Create a password","onUpdate:modelValue":o[3]||(o[3]=l=>e.password=l),required:""},null,512),[[t,e.password]])])]),s("div",V,[o[10]||(o[10]=s("label",{class:"label has-text-black"},"Confirm Password:",-1)),s("div",S,[r(s("input",{class:"input is-primary is-rounded",type:"password",placeholder:"Confirm your password","onUpdate:modelValue":o[4]||(o[4]=l=>e.confirmPassword=l),required:""},null,512),[[t,e.confirmPassword]])]),e.passwordError?(n(),a("p",N,u(e.passwordError),1)):c("",!0)]),o[11]||(o[11]=s("div",{class:"field mt-5"},[s("div",{class:"control"},[s("button",{class:"button is-primary is-fullwidth",style:{"background-color":"#00d1b2",color:"black"},type:"submit"}," Sign Up ")])],-1))],32)]),o[14]||(o[14]=s("p",{class:"has-text-white mt-4"},[d(" Already have an account? "),s("a",{href:"/login",class:"has-text-primary",style:{color:"#00d1b2"}},"Log in here"),d(". ")],-1))])])])])}const D=p(b,[["render",q],["__scopeId","data-v-d8bef1cd"]]);export{D as default};
