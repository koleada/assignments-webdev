<template>
    <div class="main">
        <div class="content">
            <h1 class="title is-3">All Fitness Activity</h1>

            <button v-if="showAddBtn" @click="showModal" class="button addBtn is-primary">Add Activity</button>
            <div class="modal" :class="{ 'is-active': showForm }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title title is-3" style="margin-bottom: 0!important;">Add Activity</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <workout-form :newWorkout="newWorkout" @add-workout="updateWorkout" />
                    </section>
                    <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-primary" @click="handleAddWorkout">Submit</button>
                    </div>
                    </footer>
                </div>
            </div>
        
    
            <div>
                <activity-card class='activity-card' v-for="workout in workouts" :key="workout.id" :workout="workout" />
            </div>
        </div>
    </div>
    <div class="modelDiv">
        <div class="modal" :class="{ 'is-active': showForm }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title title is-3" style="margin-bottom: 0!important;">Add Activity</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body" >
                    <workout-form :newWorkout="newWorkout" @add-workout="updateWorkout" />
                </section>
                <footer class="modal-card-foot">
                <div class="buttons">
                    <button class="button is-primary" @click="handleAddWorkout">Submit</button>
                </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
    import { ref } from 'vue'
    import { getAll,  type Workout } from '@/models/workouts';
    import ActivityCard from '@/components/ActivityCard.vue';
    import WorkoutForm from "@/components/WorkoutForm.vue";
     

    export default{
        data() {
            return {
                workouts: ref<Workout[]>([]),
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
                showForm: false,
                showAddBtn: false,
            }
        },
        components: {
            ActivityCard,
            WorkoutForm
        }, 
        methods: {  
            showModal() {
                this.showForm = true;
            },
            closeModal() {
                this.showForm = false; 
            },
            async handleAddWorkout() {
            
                this.newWorkout.userId = parseInt(localStorage.getItem('loggedInUserId'));
                
                try {
                    await addWorkout(this.newWorkout)
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
                this.showForm = false; // Close the modal after adding the workout
                window.location.reload();
            },
            updateWorkout(updatedWorkout: Workout) {
                this.newWorkout = updatedWorkout; 
            },
        },
        mounted() {
            try{
                getAll().then((data) => this.workouts = data.data);
            }
            catch(error){
                console.error(error);
            }  

            const token = localStorage.getItem('jwtToken') || '';
            if (token) {
                this.showAddBtn = true;
            }
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        background-color: black;
        padding-bottom: 2vh;
        width: 100%;
        min-height: 100vh;
    }
    .title{
        padding-top: 4vh;
        color: #00d1b2;
        margin-bottom: 2vh;
    }
    .media{
        background-color: black;
        color: #00d1b2;
    }
    .addBtn{
        margin-bottom: 2vh;
    }
    .modelDiv{
        background-color: white;
    }
    .activity-card rounter-link * {
        text-decoration: none!important;
        color: black!important;
    }
</style>