import{m as u,_ as p,a,b as s,t as g,e as h,w as b,p as n,v as d,q as c,o as m}from"./index-aDwkwW_3.js";const y={props:["message"],data(){return{email:"",password:"",errorMessage:""}},methods:{async submitForm(){console.log(this.email,this.password);try{const o=await u(this.email,this.password);if(o.isSuccess){const e=o.data,l=o.token;localStorage.setItem("loggedInUserId",e.userId),localStorage.setItem("jwtToken",l),localStorage.removeItem("newlySignedUpEmail"),localStorage.removeItem("sucess"),this.$router.push("/my-activity").then(()=>{window.location.reload()})}else this.errorMessage="Invalid email or password"}catch(o){console.error(o),this.errorMessage="An error occurred. Please try again later."}}},mounted(){this.email=localStorage.getItem("newlySignedUpEmail")||"",this.email&&localStorage.removeItem("newlySignedUpEmail"),localStorage.getItem("success")==="true"&&(document.getElementById("successMessage").innerHTML="Thanks for signing up, we look forward to helping you reach your fitness goals!",localStorage.removeItem("success"),console.log(this.success))}},v={class:"hero is-fullheight is-black"},f={class:"hero-body"},w={class:"container has-text-centered"},k={key:0,id:"error",class:"subtitle is-5",style:{color:"red","font-size":"1rem"}},x={class:"box",style:{border:"2px solid #00d1b2","border-radius":"8px",padding:"2rem"}},S={class:"field"},I={class:"control"},M={class:"field"},_={class:"control"};function E(o,e,l,U,t,i){return m(),a("section",v,[s("div",f,[s("div",w,[e[8]||(e[8]=s("i",{class:"fas fa-dumbbell logo",style:{"font-size":"3rem",color:"#00d1b2"}},null,-1)),s("div",null,[t.errorMessage?(m(),a("div",k,g(t.errorMessage),1)):h("",!0),e[3]||(e[3]=s("div",{id:"successMessage"},null,-1))]),s("div",x,[e[7]||(e[7]=s("h5",{class:"title is-3 has-text-black",style:{margin:"2vh","text-align":"center",color:"#8D9195"}},"Login",-1)),s("form",{onSubmit:e[2]||(e[2]=b((...r)=>i.submitForm&&i.submitForm(...r),["prevent"]))},[s("div",S,[e[4]||(e[4]=s("label",{class:"label has-text-black"},"Email:",-1)),s("div",I,[n(s("input",{class:"input is-medium is-primary is-rounded",type:"email",placeholder:"Enter your email","onUpdate:modelValue":e[0]||(e[0]=r=>t.email=r),required:""},null,512),[[d,t.email]])])]),s("div",M,[e[5]||(e[5]=s("label",{class:"label has-text-black"},"Password:",-1)),s("div",_,[n(s("input",{class:"input is-medium is-primary is-rounded",type:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=r=>t.password=r),required:""},null,512),[[d,t.password]])])]),e[6]||(e[6]=s("div",{class:"field mt-5"},[s("div",{class:"control"},[s("button",{class:"button is-medium is-fullwidth",style:{"background-color":"#00d1b2",color:"white"},type:"submit"}," Log in ")])],-1))],32)]),e[9]||(e[9]=s("p",{class:"has-text-white mt-4"},[c(" Don't have an account? "),s("a",{href:"/signup",class:"has-text-primary",style:{color:"#00d1b2"}},"Sign up here"),c(". ")],-1))])])])}const V=p(y,[["render",E],["__scopeId","data-v-b7ac6367"]]);export{V as default};
