import{g,s as w,_,a as u,b as s,t as l,n as f,f as W,F as y,r as p,k as m,o as d,l as T}from"./index-CBs0CbkR.js";import{W as S,d as I,a as v,e as D,b}from"./ActivityCard-C-xZCQJ3.js";import{W as C}from"./WorkoutForm-DI4Go84C.js";const E={components:{ActivityCard:S,WorkoutForm:C},data(){return{user:{name:"",username:"",password:"",email:"",profileImageUrl:"",userId:-1},workouts:g([]),allTimeStats:{totalDistance:0,totalTime:"",totalCals:0},weeklyStats:{totalDistance:0,totalTime:"",totalCals:0},showForm:!1,newWorkout:{description:"",dateOfPosting:"",imageUrl:"",distance:0,location:"",type:"",duration:0,userId:-1},selectedWorkout:null,isEditMode:!1}},methods:{async handleDeleteWorkout(o){const t=localStorage.getItem("jwtToken")||"";if(!t){console.log("No token found");return}try{await I(o,t),await this.fetchWorkouts(parseInt(localStorage.getItem("loggedInUserId")))}catch(i){console.log(i)}},openEditModal(o){this.selectedWorkout=null,this.selectedWorkout={...o},this.newWorkout={...o},this.isEditMode=!0,this.showForm=!0},showModal(){this.showForm=!0},closeModal(){this.showForm=!1,this.selectedWorkout=null,this.isEditMode=!1,this.newWorkout={id:-1,description:"",dateOfPosting:"",imageUrl:"",distance:0,location:"",type:"",duration:0,userId:-1}},getAllTimeStats(o){const t={totalDistance:0,totalTime:"",totalCals:0};let i=0;return o.forEach(n=>{t.totalDistance+=n.distance,i+=n.duration}),t.totalCals=t.totalDistance*100,t.totalTime=h(i),t},getWeeklyStats(o){const t={totalDistance:0,totalTime:"",totalCals:0};let i=0;const n=new Date,e=new Date(n.getTime()-7*24*60*60*1e3);return o.forEach(a=>{new Date(a.dateOfPosting)>=e&&(t.totalDistance+=a.distance,i+=a.duration,console.log(t.totalTime))}),t.totalCals=t.totalDistance*100,t.totalTime=h(i),t},async handleSubmit(){const o=localStorage.getItem("jwtToken")||"";if(!o){console.log("No token found");return}if(this.isEditMode){this.newWorkout.userId=this.selectedWorkout.userId;try{await D(this.selectedWorkout.id,this.newWorkout,o)}catch(t){console.log(t)}this.newWorkout={id:-1,description:"",dateOfPosting:"",imageUrl:"",distance:0,location:"",type:"",duration:0,userId:-1},this.selectedWorkout=null,this.isEditMode=!1,this.showForm=!1,window.location.reload()}else{this.newWorkout.userId=parseInt(localStorage.getItem("loggedInUserId"));try{await v(this.newWorkout,o)}catch(t){console.log(t)}this.newWorkout={id:-1,description:"",dateOfPosting:"",imageUrl:"",distance:0,location:"",type:"",duration:0,userId:-1},this.showForm=!1,await this.fetchWorkouts(parseInt(localStorage.getItem("loggedInUserId")))}},updateWorkout(o){this.newWorkout=o},async fetchWorkouts(o){const t=localStorage.getItem("jwtToken")||"";if(!t){console.log("No token found");return}try{const i=await b(parseInt(o),t);this.workouts=i.data}catch(i){console.error("Error fetching workouts:",i)}},async fetchUserData(o){try{const t=await w(parseInt(o));t.isSuccess&&(this.user=t.data)}catch(t){console.error("Error fetching user data:",t)}}},async mounted(){const o=localStorage.getItem("loggedInUserId");if(!o)return;if(!(localStorage.getItem("jwtToken")||"")){console.log("No token found");return}await this.fetchWorkouts(o),await this.fetchUserData(o),this.allTimeStats=this.getAllTimeStats(this.workouts),this.weeklyStats=this.getWeeklyStats(this.workouts)}};function h(o){const t=Math.floor(o/60),i=o%60,n=t<10?`0${t}`:t,e=i<10?`0${i}`:i;return`${n}:${e}`}const A={class:"main"},M={class:"mainTitle"},U={class:"title is-3",style:{"text-align":"center"}},F={id:"allStats"},B={class:"allTime box"},x={class:"title is-5"},N={class:"stat"},O={class:"title is-5"},P={class:"stat"},j={class:"title is-5"},V={class:"stat"},z={class:"title is-5"},H={class:"weekly box"},L={class:"title is-5"},q={class:"stat"},G={class:"title is-5"},J={class:"stat"},K={class:"title is-5"},Q={class:"stat"},R={class:"title is-5"},X={class:"activity"},Y={class:"title is-3",id:"history-title"},Z={class:"modal-card"},$={class:"modal-card-head"},tt={class:"modal-card-title title is-3"},st={class:"modal-card-body"},ot={class:"modal-card-foot"},et={class:"buttons"};function it(o,t,i,n,e,a){const c=m("workout-form"),k=m("activity-card");return d(),u("div",A,[s("div",M,[s("h1",U,l(e.user.name)+"'s Fitness Activity:",1)]),s("div",F,[s("div",B,[s("h2",x,l(e.user.name)+"'s All-Time Stats",1),s("div",N,[s("p",O,l(e.allTimeStats.totalDistance),1),t[3]||(t[3]=s("p",{class:"subtitle is-6"},"Total Distance",-1))]),s("div",P,[s("p",j,l(e.allTimeStats.totalTime),1),t[4]||(t[4]=s("p",{class:"subtitle is-6"},"Total Time",-1))]),s("div",V,[s("p",z,l(e.allTimeStats.totalCals),1),t[5]||(t[5]=s("p",{class:"subtitle is-6"},"Total Calories Burned",-1))])]),s("div",H,[s("h2",L,l(e.user.name)+"'s Weekly Stats",1),s("div",q,[s("p",G,l(e.weeklyStats.totalDistance),1),t[6]||(t[6]=s("p",{class:"subtitle is-6"},"Total Distance",-1))]),s("div",J,[s("p",K,l(e.weeklyStats.totalTime),1),t[7]||(t[7]=s("p",{class:"subtitle is-6"},"Total Time",-1))]),s("div",Q,[s("p",R,l(e.weeklyStats.totalCals),1),t[8]||(t[8]=s("p",{class:"subtitle is-6"},"Total Calories Burned",-1))])])]),s("div",X,[s("h2",Y,l(e.user.name)+"'s Activity History",1),s("button",{onClick:t[0]||(t[0]=(...r)=>a.showModal&&a.showModal(...r)),class:"button addBtn"},"Add Activity"),s("div",{class:f(["modal",{"is-active":e.showForm}])},[t[9]||(t[9]=s("div",{class:"modal-background"},null,-1)),s("div",Z,[s("header",$,[s("p",tt,l(e.isEditMode?"Update Activity":"Add Activity"),1),s("button",{class:"delete","aria-label":"close",onClick:t[1]||(t[1]=(...r)=>a.closeModal&&a.closeModal(...r))})]),s("section",st,[W(c,{initialData:e.isEditMode?e.selectedWorkout:null,newWorkout:e.newWorkout,onAddWorkout:a.updateWorkout},null,8,["initialData","newWorkout","onAddWorkout"])]),s("footer",ot,[s("div",et,[s("button",{class:"button is-primary",onClick:t[2]||(t[2]=(...r)=>a.handleSubmit&&a.handleSubmit(...r))},"Submit")])])])],2),(d(!0),u(y,null,p(e.workouts,r=>(d(),T(k,{class:"activity-card",showDeleteButton:!0,onEditWorkout:a.openEditModal,onDeleteWorkout:a.handleDeleteWorkout,key:r.id,workout:r},null,8,["onEditWorkout","onDeleteWorkout","workout"]))),128))])])}const nt=_(E,[["render",it],["__scopeId","data-v-a52730a3"]]);export{nt as default};
