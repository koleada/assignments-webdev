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
      </div>
      <div class="media-content">
        <div class="content">
          
            
          <div id="top">
            <div><strong>{{ user.name }}</strong> - <small>@{{ user.username }}</small></div>
            <small>Location - {{ workout.location }}</small>
            <small>{{ new Date(workout.dateOfPosting).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</small>
            <button v-if="showDeleteButton" class="delete" @click="deleteWorkout" aria-label="close"></button>
          </div>
          <div id="descAndImg">
          <div id="description">
            <p> 
              {{ workout.description }}
              <br>
            </p>
          </div>
          <figure class="image">
            <img :src="workout.imageUrl" alt="Workout Image" class="workoutImg" style="margin-top: 2vh; margin-right: 1vw;" />
          </figure>
        </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
    import type { Workout } from '@/models/workouts';
    import { getUserById } from '@/models/users';
    import { ref, defineProps, defineEmits } from 'vue';
    
    const props = defineProps<{
        workout: Workout, 
        showDeleteButton: {
            type: Boolean,
            default: false,
        },
    }>()

    const w= ref(props.workout);
    const user = getUserById(w.value.userId);

    
    const emit = defineEmits(["delete-workout"]);

    const deleteWorkout = () => {
      emit("delete-workout", w.value.id);
    };
    
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