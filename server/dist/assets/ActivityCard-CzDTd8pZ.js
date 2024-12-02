import{A as i,d as y,g as p,s as f,o as u,a as d,b as t,t as n,e as v,f as b,B as h,q as c,k as D,_ as I}from"./index-aDwkwW_3.js";async function z(){return i("workouts")}async function J(e,l){return i("workouts/user-workouts/"+e,null,"GET",l)}async function K(e,l){return i("workouts/"+e,null,"DELETE",l)}async function M(e,l){return i("workouts",e,"POST",l)}async function Q(e,l,m){return i("workouts/"+e,l,"PATCH",m)}const W={class:"box"},B={class:"media"},C={class:"media-left"},T={class:"image is-64x64"},A=["src"],E={class:"stat"},U={class:"title is-5"},N={class:"stat"},P={class:"title is-5"},S={class:"media-content"},V={class:"content"},L={id:"top"},O={id:"type"},q={id:"descAndImg"},F={id:"description"},G={class:"image"},H=["src"],$=y({__name:"ActivityCard",props:{workout:{},showDeleteButton:{}},emits:["delete-workout","edit-workout"],setup(e,{emit:l}){const a=p(e.workout),r=p([]);try{f(a.value.userId).then(s=>r.value=s.data)}catch(s){console.log(s)}const k=l,g=()=>{k("delete-workout",a.value.id)},w=()=>{k("edit-workout",a.value)};return(s,o)=>{const _=D("router-link");return u(),d("div",W,[t("article",B,[t("div",C,[t("figure",T,[t("img",{src:r.value.profileImageUrl,alt:"Profile Image"},null,8,A)]),t("div",E,[t("p",U,n(s.workout.distance),1),o[0]||(o[0]=t("p",{class:"subtitle is-6"},"Distance",-1))]),t("div",N,[t("p",P,n(s.workout.duration),1),o[1]||(o[1]=t("p",{class:"subtitle is-6"},"Duration",-1))]),s.showDeleteButton?(u(),d("nav",{key:0,onClick:w,class:"level is-mobile"},o[2]||(o[2]=[t("div",{class:"level-right"},[t("button",{class:"level-item button is-primary"},[t("span",{class:"icon is-medium"},[t("i",{class:"far fa-edit",style:{color:"black!important"}})])])],-1)]))):v("",!0)]),t("div",S,[t("div",V,[t("div",L,[b(_,{to:`/people/${r.value.userId}`,style:{color:"black"}},{default:h(()=>[t("u",null,[t("div",null,[t("strong",null,n(r.value.name),1),o[3]||(o[3]=c(" - ")),t("small",null,"@"+n(r.value.username),1)])])]),_:1},8,["to"]),t("small",null,"Location - "+n(s.workout.location),1),t("small",null,n(new Date(s.workout.dateOfPosting).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),1),s.showDeleteButton?(u(),d("button",{key:0,class:"delete",onClick:g,"aria-label":"close",style:{"background-color":"red!important"}})):v("",!0)]),t("div",O,[t("p",null,[o[4]||(o[4]=t("br",null,null,-1)),c(" Workout Type: "+n(s.workout.type),1)])]),t("div",q,[t("div",F,[t("p",null,[o[5]||(o[5]=t("br",null,null,-1)),c(" Description: "+n(s.workout.description)+" ",1),o[6]||(o[6]=t("br",null,null,-1))])]),t("figure",G,[t("img",{src:s.workout.imageUrl,alt:"Workout Image",class:"workoutImg",style:{"margin-top":"2vh","margin-right":"1vw"}},null,8,H)])])])])])])}}}),R=I($,[["__scopeId","data-v-992c94e4"]]);export{R as W,M as a,J as b,K as d,Q as e,z as g};
