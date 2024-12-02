<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img  :src="user.profileImageUrl" alt="Profile Image" />
        </figure>
        <div class="stat">
            <p class="title is-5">{{ workout.distance }}</p>
            <p class="subtitle is-6">Distance</p>
        </div>
        <div class="stat">
          <p class="title is-5">{{ workout.duration }}</p>
          <p class="subtitle is-6">Duration</p>
        </div>  
        <nav v-if="showDeleteButton" @click="editWorkout" class="level is-mobile">
          <div class="level-right">
            <button class="level-item button is-primary ">
              <span class="icon is-medium">
                <i class="far fa-edit" style="color: black!important;"></i>
              </span>
            </button>
          </div>
        </nav>  
      </div>
      <div class="media-content">
        <div class="content">
          
            
          <div id="top">
            <router-link :to="`/people/${user.userId}`" style="color: black;"><u><div><strong>{{ user.name }}</strong> - <small>@{{ user.username }}</small></div></u></router-link>
            <small>Location - {{ workout.location }}</small>
            <small>{{ new Date(workout.dateOfPosting).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</small>
            <button v-if="showDeleteButton" class="delete" @click="deleteWorkout" aria-label="close" style="background-color: red!important;"></button>
          </div>
          <div id="type">
            <p> 
              <br>
              Workout Type: {{ workout.type }}
            </p>
          </div>
          <div id="descAndImg">
          <div id="description">
            <p> 
              <br>
              Description: {{ workout.description }}
              <br>
            </p>
          </div>
          <figure class="image">
            <img :src="workout.imageUrl" alt="Workout Image" class="workoutImg" style="margin-top: 2vh; margin-right: 1vw;" />
          </figure>
        </div>
        </div>
      </div>
    </article>
  </div>  
</template>

<script setup lang="ts">
    import type { Workout } from '@/models/workouts';
    import { getFriendByUserId } from '@/models/users';
    import { ref, defineProps, defineEmits } from 'vue';
    
    const props = defineProps<{
        workout: Workout, 
        showDeleteButton: {
            type: boolean,
            default: false,
        }, 
    }>()

    const w= ref(props.workout);
    const user = ref<User>([]);
    try {
      getFriendByUserId(w.value.userId).then((data) => user.value = data.data);
    } catch (error) {
      console.log(error)
    }
    

    
    const emit = defineEmits(["delete-workout", "edit-workout"]);

    const deleteWorkout = () => {
      emit("delete-workout", w.value.id);
    };

    const editWorkout = () => {
      emit("edit-workout", w.value);
    }
    
</script>

<style scoped>
    #top{
      display: flex;
      justify-content: space-between;
    }
    #lower{
       display: flex;
       justify-content: space-between;
    }
    #stats{
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }
    .box{
      width: 60vw;
      background-color: #00d1b2;
      padding: 2rem;
      text-wrap: wrap;

    }
    i {
      color: black;
    }
    .stat{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .workoutImg{
      width: 12vw!important;
      height: 14vh!important;
    }
    .media-left{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vh;
     }
     #descAndImg{
      display: flex;
      justify-content: space-between;
      text-wrap: wrap;
      overflow-wrap: break-word
     }
     #description p{
      text-wrap: wrap;
      max-width: 35vw;
      overflow-wrap: break-word;
      max-height: fit-content;
     }
</style>