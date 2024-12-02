
<template>
    <div class="main">
        <div class="mainTitle">
            <h1 class="title is-3" style="text-align: center;">{{ user.name }}'s Fitness Activity:</h1>
        </div>
        <div  id="allStats">
            <div class="allTime box">
                <h2 class="title is-5">{{ user.name }}'s All-Time Stats</h2>
                <div class="stat">
                    <p class="title is-5">{{ allTimeStats.totalDistance }}</p>
                    <p class="subtitle is-6">Total Distance</p>
                </div>
                <div class="stat">
                    <p class="title is-5">{{ allTimeStats.totalTime }}</p>
                    <p class="subtitle is-6">Total Time</p>
                </div>    
                <div class="stat">
                    <p class="title is-5">{{ allTimeStats.totalCals }}</p>
                    <p class="subtitle is-6">Total Calories Burned</p>
                </div>    
            </div>
            <div class="weekly box"> 
                <h2 class="title is-5">{{ user.name }}'s Weekly Stats</h2>
                <div class="stat"> 
                    <p class="title is-5">{{ weeklyStats.totalDistance }}</p>
                    <p class="subtitle is-6">Total Distance</p>
                </div>
                <div class="stat">
                    <p class="title is-5">{{ weeklyStats.totalTime }}</p>
                    <p class="subtitle is-6">Total Time</p>
                </div>    
                <div class="stat">
                    <p class="title is-5">{{ weeklyStats.totalCals }}</p>
                    <p class="subtitle is-6">Total Calories Burned</p>
                </div>    
            </div>
        </div>
        <div class="activity" >
            <h2 class="title is-3" id="history-title">{{ user.name }}'s Activity History</h2>
            <button @click="showModal" class="button addBtn">Add Activity</button>
            <div class="modal" :class="{ 'is-active': showForm }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title title is-3">{{ isEditMode ? 'Update Activity' : 'Add Activity' }}</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <workout-form :initialData="isEditMode ? selectedWorkout : null" :newWorkout="newWorkout" @add-workout="updateWorkout" />
                    </section>
                    <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-primary" @click="handleSubmit">Submit</button>
                    </div> 
                    </footer>
                </div>
            </div>

            
            <activity-card class='activity-card' :showDeleteButton="true" v-for="workout in workouts" @edit-workout="openEditModal" @delete-workout="handleDeleteWorkout" :key="workout.id" :workout="workout" />
        </div>
    </div>
</template>

<script lang="ts">
  import  { getFriendByUserId } from "@/models/users";
  import { type Workout, getWorkoutsByUserId, deleteWorkout, addWorkout, editWorkout } from "@/models/workouts";
  import ActivityCard from '@/components/ActivityCard.vue';
  import WorkoutForm from "@/components/WorkoutForm.vue";
  import { ref } from 'vue';

  export default {
    components: {
        ActivityCard,
        WorkoutForm
    },
    
    data() {
        return {
          user: {
              name: '',
              username: '',
              password: '',
              email: '', 
              profileImageUrl: '',
              userId: -1
          }, 
          workouts: ref<Workout[]>([]),
          allTimeStats: {totalDistance: 0, totalTime: '', totalCals: 0,},
          weeklyStats: {totalDistance: 0, totalTime: '', totalCals: 0,},
          showForm: false,
          newWorkout: {
            description: '',
            dateOfPosting: '',
            imageUrl: '',
            distance: 0,
            location: '',
            type: '',
            duration: 0,
            userId: -1
          },
          selectedWorkout: null,
          isEditMode: false

        };
    },
    methods: {  
      async handleDeleteWorkout(id: number) {
        const token = localStorage.getItem("jwtToken") || ''
        if (!token) {
            console.log('No token found');
            return;
        }
        try {
            await deleteWorkout(id, token)
            await this.fetchWorkouts(parseInt(localStorage.getItem('loggedInUserId')))
        } catch (error) {
            console.log(error)
        }
        
      },
      openEditModal(workout) {
        this.selectedWorkout = null
        this.selectedWorkout = { ...workout }; // Prefill with workout data
        this.newWorkout = { ...workout }; 
        this.isEditMode = true;
        this.showForm = true;
      },
      showModal() {
        this.showForm = true;
      },
      closeModal() {
        this.showForm = false; 
        this.selectedWorkout = null;
        this.isEditMode = false;
        this.newWorkout = { 
            id: -1,
            description: '',
            dateOfPosting: '',
            imageUrl: '',
            distance: 0,
            location: '',
            type: '',
            duration: 0, 
            userId: -1
        };

      },
      getAllTimeStats(workouts : Workout[]) {
        const allTimeStats = {
            totalDistance: 0,
            totalTime: '',
            totalCals: 0,
        };
        let totalTime = 0
        workouts.forEach(workout => {
            allTimeStats.totalDistance += workout.distance;
            totalTime += workout.duration;
        });

        allTimeStats.totalCals = allTimeStats.totalDistance * 100
        // Format total time
        allTimeStats.totalTime = formatTime(totalTime);

        return allTimeStats;
      },
      getWeeklyStats(workouts: Workout[]){
        const weeklyStats = {
            totalDistance: 0,
            totalTime: '',
            totalCals: 0,
        };

        let totalTime = 0;
        const currentDate = new Date();
        const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

        workouts.forEach(workout => {
            const workoutDate = new Date(workout.dateOfPosting);

            if (workoutDate >= oneWeekAgo) {
            weeklyStats.totalDistance += workout.distance;
            totalTime += workout.duration;
            console.log(weeklyStats.totalTime)
            }
        });
        weeklyStats.totalCals = weeklyStats.totalDistance * 100
        // Format total time
        weeklyStats.totalTime = formatTime(totalTime);

        return weeklyStats;
      },
        async handleSubmit() {
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                return;
            }
            if(!this.isEditMode){
                this.newWorkout.userId = parseInt(localStorage.getItem('loggedInUserId'));
                
                try {
                    await addWorkout(this.newWorkout, token)
                } catch (error) {
                    console.log(error)
                }
                
                this.newWorkout = { 
                    id: -1,
                    description: '',
                    dateOfPosting: '',
                    imageUrl: '',
                    distance: 0,
                    location: '',
                    type: '',
                    duration: 0, 
                    userId: -1
                };
                this.showForm = false;
                await this.fetchWorkouts(parseInt(localStorage.getItem('loggedInUserId')))
            } else {
                this.newWorkout.userId = this.selectedWorkout.userId
                try {
                    await editWorkout(this.selectedWorkout.id, this.newWorkout, token)
                } catch (error) {
                    console.log(error)
                }
                this.newWorkout = { 
                    id: -1,
                    description: '',
                    dateOfPosting: '',
                    imageUrl: '',
                    distance: 0,
                    location: '',
                    type: '',
                    duration: 0, 
                    userId: -1
                };
                this.selectedWorkout = null;
                this.isEditMode = false;
                this.showForm = false; 
                window.location.reload();
            }
        },
        updateWorkout(updatedWorkout: Workout) {
          this.newWorkout = updatedWorkout; 
        },
        async fetchWorkouts(userId) {
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                return;
            }

            try {
                const data = await getWorkoutsByUserId(parseInt(userId), token);
                this.workouts = data.data; // Updates the reactive `workouts` array
            } catch (error) {
                console.error("Error fetching workouts:", error);
            }
        },
        async fetchUserData(userId) {
            try {
                const response = await getFriendByUserId(parseInt(userId));
                if (response.isSuccess) {
                    this.user = response.data;
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        },
    },
    async mounted() {
      const id = localStorage.getItem('loggedInUserId');
      
      if (!id) {
        return;
      }
      const token = localStorage.getItem("jwtToken") || ''
      if (!token) {
          console.log('No token found');
          return;
      }
      await this.fetchWorkouts(id)

      await this.fetchUserData(id);

      
      this.allTimeStats = this.getAllTimeStats(this.workouts);
      this.weeklyStats = this.getWeeklyStats(this.workouts);
    },
  };
  function formatTime(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;


    return `${hoursString}:${minutesString}`;

  }
</script>

<style scoped>
    h2{
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 0!important;
    }
    h1{
        padding-top: 4vh;
        margin-bottom: 0!important;
        padding-bottom: 3vh;
        color: #00d1b2;
    }
    #allStats{
        display: flex;
        justify-content: space-around;
        background-color: #8d9195;
        padding-top: 4vh;
        padding-bottom: 4vh;
    }
    .allTime, .weekly{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30vw;
        height: auto;
        background-color: #00d1b2;
        margin-bottom: 0;
    }
    .stat{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 4vh;
    }
    .main{
        min-height: 100vh;
    }
    .activity{
        background-color: #00d1b2;
        min-height: 40vh;
        padding-top: 2vh;
        padding-bottom: 2vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .activity-card{
        background-color: #090a0c;
        color: #00d1b2;
    }
    .activity-card *{
        color: #00d1b2!important;
    }
    
    #history-title{
        margin-bottom: 2vh!important;
    }
    .mainTitle{
        width: 100%;
        height: 100%;
        background-color: #090a0c;
    }
    .modal-card-title{
        font-weight: bold;
        color: #00d1b2;
        margin-bottom: 0!important;
    }
    .addBtn{
        margin-bottom: 2vh;
    }
</style>