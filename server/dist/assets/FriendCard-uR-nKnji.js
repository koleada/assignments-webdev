import{A as l,d as _,g as m,o as d,a as c,b as o,f as p,B as w,n as g,w as h,t as r,e as v,k as F,_ as b}from"./index-BMMDxlvw.js";async function V(e,s){return l("friends/getFriends/"+e,null,"GET",s)}async function A(e,s){return l("friends/"+e,null,"DELETE",s)}async function D(e,s){return l("friends",e,"POST",s)}async function G(e,s,n){return l("friends/getFriendId/"+e+"/"+s,null,"GET",n)}const k={class:"box"},y={class:"media"},C={class:"image is-64x64"},B=["src"],E={class:"title is-5"},I={class:"subtitle is-6"},T=_({__name:"FriendCard",props:{user:{},follow:{},showFollowButtons:{}},emits:["follow","unfollow"],setup(e,{emit:s}){const n=e,t=m(n.user),i=s;function u(){n.follow?i("follow",n.user):i("unfollow",n.user)}return(a,x)=>{const f=F("router-link");return d(),c("div",k,[o("div",y,[o("div",null,[o("figure",null,[o("div",C,[o("img",{src:t.value.profileImageUrl,alt:"Profile Image"},null,8,B)])])]),p(f,{to:`/people/${t.value.userId}`,style:{color:"black"}},{default:w(()=>[o("div",null,[o("p",E,r(t.value.name),1),o("p",I,"@"+r(t.value.username),1)])]),_:1},8,["to"]),o("div",null,[a.showFollowButtons?(d(),c("button",{key:0,class:g(["button",a.follow?"is-primary":"is-danger"]),onClick:h(u,["stop"])},r(a.follow?"Follow":"Unfollow"),3)):v("",!0)])])])}}}),P=b(T,[["__scopeId","data-v-c6f027b9"]]);export{P as F,V as a,D as b,A as d,G as g};
