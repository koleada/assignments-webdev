import{g as h,s as k,z as m,_,a as l,b as a,t as p,e as d,l as F,F as I,r as y,k as u,o as t,f as B}from"./index-DRzRCX9e.js";import{F as v,g as w,d as U,b as C}from"./FriendCard-B1wdnoIK.js";import{W as S,b as W}from"./ActivityCard-DkeL7p0D.js";const N={components:{FriendCard:v,WorkoutCard:S},data(){return{user:null,workouts:h([]),isFollowing:null,showFollowButtons:!1}},methods:{async handleUnfollow(r){const o=localStorage.getItem("jwtToken")||"";if(!o){console.log("No token found");return}const s=(await w(parseInt(localStorage.getItem("loggedInUserId")),r.userId,o)).data.id;try{await U(s,o),window.location.reload()}catch{console.log("Error unfollowing friend")}},async handleFollow(r){const o=localStorage.getItem("jwtToken")||"";if(!o){console.log("No token found");return}try{await C({userId:localStorage.getItem("loggedInUserId"),friendUserId:r.userId},o),window.location.reload()}catch{console.log("Error following friend")}}},async mounted(){const o=m().params.id,n=localStorage.getItem("jwtToken")||"";try{const s=await k(o);this.user=s.data,n?(this.showFollowButtons=!0,(await w(parseInt(localStorage.getItem("loggedInUserId")),o,n)).isSuccess?this.isFollowing=!0:this.isFollowing=!1):this.showFollowButtons=!1;const e=await W(o);this.workouts=e.data,window.scrollTo({top:0,behavior:"smooth"})}catch(s){console.error("Error fetching user profile or workouts:",s)}}},b={class:"main"},E={class:"top"},T={key:0,class:"title is-3"},j={key:1},x={class:"workouts"};function V(r,o,n,s,e,i){const g=u("FriendCard"),f=u("WorkoutCard");return t(),l("div",null,[a("div",b,[a("div",E,[e.user!=null?(t(),l("h1",T,p(e.user.name)+"'s Profile",1)):d("",!0)]),e.user!=null?(t(),F(g,{key:0,showFollowButtons:e.showFollowButtons,user:e.user,follow:!e.isFollowing,onUnfollow:i.handleUnfollow,onFollow:i.handleFollow},null,8,["showFollowButtons","user","follow","onUnfollow","onFollow"])):d("",!0),o[0]||(o[0]=a("h2",{class:"title is-3"},"Workouts",-1)),e.workouts.length===0?(t(),l("div",j,"No workouts available.")):d("",!0),a("div",x,[(t(!0),l(I,null,y(e.workouts,c=>(t(),l("div",{class:"workoutCard",key:c.id},[B(f,{workout:c},null,8,["workout"])]))),128))])])])}const L=_(N,[["render",V],["__scopeId","data-v-903d111a"]]);export{L as default};
