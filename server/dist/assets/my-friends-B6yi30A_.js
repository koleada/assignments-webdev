import{F as w,g as I,d as F,a as m,b as y}from"./FriendCard-Bf0y_bep.js";import{g,x as k,s as b,_,a as c,b as s,F as h,r as v,e as U,f,y as C,n as S,k as p,o as u}from"./index-CiLAeTpy.js";const M={components:{FriendCard:w},data(){return{userFriends:g([]),isModalOpen:!1,searchQuery:"",searchResults:[]}},methods:{async handleUnfollow(t){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}const d=(await I(parseInt(localStorage.getItem("loggedInUserId")),t.userId,e)).data.id;try{await F(d,e),window.location.reload()}catch{console.log("Error unfollowing friend")}},async searchForFriends(){if(!this.searchQuery.trim()){this.searchResults=[];return}const t=localStorage.getItem("loggedInUserId"),e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{this.searchResults=[];const d=(await k({name:this.searchQuery.trim()},e)).data,n=(await m(t,e)).data,a=new Set(n.map(o=>o.friendUserId)),i=d.filter(o=>o.userId!=t).map(o=>({...o,isFollowing:a.has(o.userId)}));console.log(i),this.searchResults=i}catch(l){console.error("Error searching for friends:",l)}},openModel(){this.searchResults=[],this.searchQuery="",this.isModalOpen=!0},async handleFollow(t){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{await y({userId:parseInt(localStorage.getItem("loggedInUserId")),friendUserId:t.userId},e),window.location.reload()}catch{console.log("Error following friend")}}},async mounted(){const t=g([]);try{const e=localStorage.getItem("loggedInUserId"),l=localStorage.getItem("jwtToken")||"";if(!l){console.log("No token found");return}(await m(e,l)).data.forEach(async n=>{const a=await b(n.friendUserId);this.userFriends.push(a.data)})}catch(e){console.error("Error fetching user friends:",e)}console.log(t.value)}},N={class:"main"},R={class:"content"},B={key:0},E={class:"modal-card"},O={class:"modal-card-head"},Q={class:"modal-card-body"},V={class:"field"},x={class:"control"},T={class:"modal-card-foot"};function j(t,e,l,d,r,n){const a=p("FriendCard"),i=p("o-autocomplete");return u(),c(h,null,[s("div",N,[e[6]||(e[6]=s("h1",{class:"title is-3"},"Your Friends:",-1)),s("div",R,[(u(!0),c(h,null,v(r.userFriends,o=>(u(),c("div",{class:"friend",key:o.userId},[f(a,{class:"friend-card",showFollowButtons:!0,onUnfollow:n.handleUnfollow,user:o},null,8,["onUnfollow","user"])]))),128)),r.userFriends.length==0?(u(),c("div",B,e[5]||(e[5]=[s("h3",{class:"subtitle is-5"},"No friends found. Add some friends to start following.",-1)]))):U("",!0),s("button",{class:"button is-primary",onClick:e[0]||(e[0]=(...o)=>n.openModel&&n.openModel(...o))},"Search For Friends")])]),s("div",{class:S(["modal",{"is-active":r.isModalOpen}])},[s("div",{class:"modal-background",onClick:e[1]||(e[1]=o=>r.isModalOpen=!1)}),s("div",E,[s("header",O,[e[7]||(e[7]=s("p",{class:"modal-card-title title is-3",style:{color:"#00d1b2","margin-bottom":"0!important"}},"Search for Friends",-1)),s("button",{class:"delete","aria-label":"close",onClick:e[2]||(e[2]=o=>r.isModalOpen=!1)})]),s("section",Q,[s("div",V,[e[8]||(e[8]=s("label",{class:"label"},"Search",-1)),s("div",x,[f(i,{modelValue:r.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=o=>r.searchQuery=o),data:r.searchResults,onInput:n.searchForFriends,placeholder:"Enter name or username",debounce:300,clearable:""},{default:C(({option:o})=>[f(a,{user:o,showFollowButtons:!0,actionType:"follow",follow:!o.isFollowing,onFollow:n.handleFollow,onUnfollow:n.handleUnfollow},null,8,["user","follow","onFollow","onUnfollow"])]),_:1},8,["modelValue","data","onInput"])])])]),s("footer",T,[s("button",{class:"button",onClick:e[4]||(e[4]=o=>r.isModalOpen=!1)},"Close")])])],2)],64)}const L=_(M,[["render",j],["__scopeId","data-v-c2548974"]]);export{L as default};