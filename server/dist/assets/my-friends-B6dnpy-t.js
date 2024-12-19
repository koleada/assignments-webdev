import{F as w,g as F,d as I,a as h,b as y}from"./FriendCard-B6MgwMVt.js";import{g as m,x as k,s as v,_ as b,a,b as s,F as f,r as g,e as U,p as S,v as _,n as R,o as d,f as p,k as T}from"./index-D7aEfaW_.js";const C={components:{FriendCard:w},data(){return{userFriends:m([]),isModalOpen:!1,searchQuery:"",searchResults:[],throttleTimer:0}},methods:{async handleUnfollow(n){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}const u=(await F(parseInt(localStorage.getItem("loggedInUserId")),n.userId,e)).data.id;try{await I(u,e),window.location.reload()}catch{console.log("Error unfollowing friend")}},async searchForFriends(){this.throttleTimer&&clearTimeout(this.throttleTimer),this.throttleTimer=setTimeout(async()=>{if(!this.searchQuery.trim()){this.searchResults=[];return}const n=localStorage.getItem("loggedInUserId"),e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{this.searchResults=[];const u=(await k({name:this.searchQuery.trim()},e)).data,t=(await h(n,e)).data,i=new Set(t.map(c=>c.friendUserId)),o=u.filter(c=>c.userId!=n).map(c=>({...c,isFollowing:i.has(c.userId)}));console.log(o),this.searchResults=o}catch(l){console.error("Error searching for friends:",l)}},300)},openModel(){this.searchResults=[],this.searchQuery="",this.isModalOpen=!0},async handleFollow(n){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{await y({userId:parseInt(localStorage.getItem("loggedInUserId")),friendUserId:n.userId},e),window.location.reload()}catch{console.log("Error following friend")}}},async mounted(){const n=m([]);try{const e=localStorage.getItem("loggedInUserId"),l=localStorage.getItem("jwtToken")||"";if(!l){console.log("No token found");return}(await h(e,l)).data.forEach(async t=>{const i=await v(t.friendUserId);this.userFriends.push(i.data)})}catch(e){console.error("Error fetching user friends:",e)}console.log(n.value)}},M={class:"main"},N={class:"content"},B={key:0},E={class:"modal-card"},x={class:"modal-card-head"},O={class:"modal-card-body"},Q={class:"field"},j={class:"control"},V={key:0,class:"results"},z={key:1},A={class:"modal-card-foot"};function D(n,e,l,u,r,t){const i=T("FriendCard");return d(),a(f,null,[s("div",M,[e[7]||(e[7]=s("h1",{class:"title is-3"},"Your Friends:",-1)),s("div",N,[(d(!0),a(f,null,g(r.userFriends,o=>(d(),a("div",{class:"friend",key:o.userId},[p(i,{class:"friend-card",showFollowButtons:!0,onUnfollow:t.handleUnfollow,user:o},null,8,["onUnfollow","user"])]))),128)),r.userFriends.length==0?(d(),a("div",B,e[6]||(e[6]=[s("h3",{class:"subtitle is-5"},"No friends found. Add some friends to start following.",-1)]))):U("",!0),s("button",{class:"button is-primary",onClick:e[0]||(e[0]=(...o)=>t.openModel&&t.openModel(...o))},"Search For Friends")])]),s("div",{class:R(["modal",{"is-active":r.isModalOpen}])},[s("div",{class:"modal-background",onClick:e[1]||(e[1]=o=>r.isModalOpen=!1)}),s("div",E,[s("header",x,[e[8]||(e[8]=s("p",{class:"modal-card-title title is-3",style:{color:"#00d1b2","margin-bottom":"0!important"}},"Search for Friends",-1)),s("button",{class:"delete","aria-label":"close",onClick:e[2]||(e[2]=o=>r.isModalOpen=!1)})]),s("section",O,[s("div",Q,[e[9]||(e[9]=s("label",{class:"label"},"Search",-1)),s("div",j,[S(s("input",{class:"input is-primary",type:"text",placeholder:"Enter name or username","onUpdate:modelValue":e[3]||(e[3]=o=>r.searchQuery=o),onInput:e[4]||(e[4]=(...o)=>t.searchForFriends&&t.searchForFriends(...o))},null,544),[[_,r.searchQuery]])])]),r.searchResults.length>0?(d(),a("div",V,[e[10]||(e[10]=s("h3",{class:"subtitle is-5"},"Search Results:",-1)),(d(!0),a(f,null,g(r.searchResults,o=>(d(),a("div",{key:o.id,class:"searchResults"},[p(i,{user:o,showFollowButtons:!0,actionType:"follow",follow:!o.isFollowing,onFollow:t.handleFollow,onUnfollow:t.handleUnfollow},null,8,["user","follow","onFollow","onUnfollow"])]))),128))])):(d(),a("p",z,"No friends found."))]),s("footer",A,[s("button",{class:"button",onClick:e[5]||(e[5]=o=>r.isModalOpen=!1)},"Close")])])],2)],64)}const q=b(C,[["render",D],["__scopeId","data-v-335691b2"]]);export{q as default};
