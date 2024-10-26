
<template>
    <div class="main">
        <div class="mainTitle">
            <h1 class="title is-2" style="text-align: center;">{{ user.name }}'s Fitness Activity:</h1>
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
                    <p class="modal-card-title title is-3">Add Activity</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <workout-form :newWorkout="newWorkout" @add-workout="updateWorkout" />
                    </section>
                    <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-primary" @click="addWorkout">Submit</button>
                    </div>
                    </footer>
                </div>
            </div>

            
            <activity-card class='activity-card' v-for="workout in workouts" @delete-workout="handleDeleteWorkout" :key="workout.id" :workout="workout" />
        </div>
    </div>
</template>

<script lang="ts">
  import  { getUserById } from "@/models/users";
  import { type Workout, getWorkoutsByUserId } from "@/models/workouts";
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
          user:  getUserById(-1), 
          workouts: ref<Workout[]>([]),
          allTimeStats: {totalDistance: 0, totalTime: '', totalCals: 0,},
          weeklyStats: {totalDistance: 0, totalTime: '', totalCals: 0,},
          showForm: false,
          newWorkout: {
            id: null,
            description: '',
            dateOfPosting: '',
            imageUrl: '',
            distance: 0,
            location: '',
            type: '',
            duration: 0,
            userId: -1
          }

        };
    },
    methods: {  
      handleDeleteWorkout(id) {
          this.workouts = this.workouts.filter((workout) => workout.id !== id);
      },
      showModal() {
        this.showForm = true;
      },
      closeModal() {
        this.showForm = false;
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
        addWorkout() {
            const uniqueId = this.generateUniqueId(); 
            this.newWorkout.id = uniqueId; 
            const userId = parseInt(localStorage.getItem('loggedInUserId'));
            this.newWorkout.userId = userId;
            this.workouts.push({ ...this.newWorkout }); 
            this.newWorkout = { 
                id: null,
                description: '',
                dateOfPosting: '',
                imageUrl: '',
                distance: 0,
                location: '',
                type: '',
                duration: 0,
            };
            this.showForm = false; // Close the modal after adding the workout
        },
        updateWorkout(updatedWorkout) {
          this.newWorkout = updatedWorkout; 
        },
        generateUniqueId(): number {
            return Math.floor(Math.random() * 1000000); 
        }
    },

    mounted() {
      const id = localStorage.getItem('loggedInUserId');
      
      if (!id) {
        return;
      }
      const workouts = ref<Workout[]>([]);
      workouts.value = getWorkoutsByUserId(parseInt(id));
      this.workouts = workouts.value;
      const user = getUserById(parseInt(id));
      
      this.user = user;
      this.allTimeStats = this.getAllTimeStats(workouts.value);
      this.weeklyStats = this.getWeeklyStats(workouts.value);
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