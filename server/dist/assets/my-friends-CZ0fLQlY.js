import{F as w,g as F,d as I,a as g,b as y}from"./FriendCard-BqU7_eUJ.js";import{g as m,x as k,s as v,_ as b,a,b as s,F as f,r as h,e as U,p as S,v as _,n as C,o as d,f as p,k as R}from"./index-aDwkwW_3.js";const M={components:{FriendCard:w},data(){return{userFriends:m([]),isModalOpen:!1,searchQuery:"",searchResults:[]}},methods:{async handleUnfollow(t){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}const u=(await F(parseInt(localStorage.getItem("loggedInUserId")),t.userId,e)).data.id;try{await I(u,e),window.location.reload()}catch{console.log("Error unfollowing friend")}},async searchForFriends(){if(!this.searchQuery.trim())return;const t=localStorage.getItem("loggedInUserId"),e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{this.searchResults=[];const u=(await k({name:this.searchQuery.trim()},e)).data,n=(await g(t,e)).data,i=new Set(n.map(c=>c.friendUserId)),o=u.filter(c=>c.userId!=t).map(c=>({...c,isFollowing:i.has(c.userId)}));console.log(o),this.searchResults=o}catch(l){console.error("Error searching for friends:",l)}},openModel(){this.searchResults=[],this.searchQuery="",this.isModalOpen=!0},async handleFollow(t){const e=localStorage.getItem("jwtToken")||"";if(!e){console.log("No token found");return}try{await y({userId:parseInt(localStorage.getItem("loggedInUserId")),friendUserId:t.userId},e),window.location.reload()}catch{console.log("Error following friend")}}},async mounted(){const t=m([]);try{const e=localStorage.getItem("loggedInUserId"),l=localStorage.getItem("jwtToken")||"";if(!l){console.log("No token found");return}(await g(e,l)).data.forEach(async n=>{const i=await v(n.friendUserId);this.userFriends.push(i.data)})}catch(e){console.error("Error fetching user friends:",e)}console.log(t.value)}},N={class:"main"},B={class:"content"},E={key:0},x={class:"modal-card"},O={class:"modal-card-head"},Q={class:"modal-card-body"},T={class:"field"},j={class:"control"},V={key:0,class:"results"},z={key:1},A={class:"modal-card-foot"};function D(t,e,l,u,r,n){const i=R("FriendCard");return d(),a(f,null,[s("div",N,[e[7]||(e[7]=s("h1",{class:"title is-3"},"Your Friends:",-1)),s("div",B,[(d(!0),a(f,null,h(r.userFriends,o=>(d(),a("div",{class:"friend",key:o.userId},[p(i,{class:"friend-card",showFollowButtons:!0,onUnfollow:n.handleUnfollow,user:o},null,8,["onUnfollow","user"])]))),128)),r.userFriends.length==0?(d(),a("div",E,e[6]||(e[6]=[s("h3",{class:"subtitle is-5"},"No friends found. Add some friends to start following.",-1)]))):U("",!0),s("button",{class:"button is-primary",onClick:e[0]||(e[0]=(...o)=>n.openModel&&n.openModel(...o))},"Search For Friends")])]),s("div",{class:C(["modal",{"is-active":r.isModalOpen}])},[s("div",{class:"modal-background",onClick:e[1]||(e[1]=o=>r.isModalOpen=!1)}),s("div",x,[s("header",O,[e[8]||(e[8]=s("p",{class:"modal-card-title title is-3",style:{color:"#00d1b2","margin-bottom":"0!important"}},"Search for Friends",-1)),s("button",{class:"delete","aria-label":"close",onClick:e[2]||(e[2]=o=>r.isModalOpen=!1)})]),s("section",Q,[s("div",T,[e[9]||(e[9]=s("label",{class:"label"},"Search",-1)),s("div",j,[S(s("input",{class:"input is-primary",type:"text",placeholder:"Enter name or username","onUpdate:modelValue":e[3]||(e[3]=o=>r.searchQuery=o)},null,512),[[_,r.searchQuery]]),s("button",{class:"button is-primary",onClick:e[4]||(e[4]=(...o)=>n.searchForFriends&&n.searchForFriends(...o))}," Search ")])]),r.searchResults.length>0?(d(),a("div",V,[e[10]||(e[10]=s("h3",{class:"subtitle is-5"},"Search Results:",-1)),(d(!0),a(f,null,h(r.searchResults,o=>(d(),a("div",{key:o.id,class:"searchResults"},[p(i,{user:o,showFollowButtons:!0,actionType:"follow",follow:!o.isFollowing,onFollow:n.handleFollow,onUnfollow:n.handleUnfollow},null,8,["user","follow","onFollow","onUnfollow"])]))),128))])):(d(),a("p",z,"No friends found."))]),s("footer",A,[s("button",{class:"button",onClick:e[5]||(e[5]=o=>r.isModalOpen=!1)},"Close")])])],2)],64)}const q=b(M,[["render",D],["__scopeId","data-v-2ce430ef"]]);export{q as default};
