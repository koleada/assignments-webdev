<template>
    <div>
        <div class="main">
            <div class="top">
                <h1 class="title is-3" v-if="user != null">{{ user.name }}'s Profile</h1>
            </div>

            <FriendCard class="friendCard" v-if="user != null" :showFollowButtons="showFollowButtons" :user="user" :follow="!isFollowing" @unfollow="handleUnfollow" @follow="handleFollow"/>
            
            <!-- Workouts -->
            <h2 class="title is-3">Workouts</h2>
            <div v-if="workouts.length === 0">No workouts available.</div>
            <div class="workouts">
                <div class="workoutCard" v-for="workout in workouts" :key="workout.id">
                    <WorkoutCard  :workout="workout" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { useRoute } from "vue-router";
  import FriendCard from "@/components/FriendCard.vue";
  import WorkoutCard from "@/components/ActivityCard.vue";
  import { getFriendByUserId, type User } from "@/models/users"
  import { getFriendId, addFriend, deleteFriend } from "@/models/friends";
  import { getWorkoutsByUserId, type Workout } from "@/models/workouts";
  import { ref } from 'vue';
  
  export default {
    components: {
      FriendCard,
      WorkoutCard,
    },
    data() {
        return {
            user: null,
            workouts: ref<Workout[]>([]),
            isFollowing: null,
            showFollowButtons: false
        }
    },
    methods: {  
        async handleUnfollow(friend: User) {
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                return;
            }
            const response = await getFriendId(parseInt(localStorage.getItem("loggedInUserId")), friend.userId, token);
            const friendId = response.data.id
            
            try {
                await deleteFriend(friendId, token);
                window.location.reload();
            } catch (error) {
                console.log('Error unfollowing friend');
            }
        },
        async handleFollow(friend: User) {
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                return;
            }
                
            try {
                await addFriend({userId: localStorage.getItem("loggedInUserId"), friendUserId: friend.userId}, token);
                window.location.reload();
            } catch (error) {
                console.log('Error following friend');
            }
        }
    },
    async mounted() {
      const route = useRoute(); 
      const userId = route.params.id; 
      const token = localStorage.getItem("jwtToken") || ''
      
  
      try {
        
        const userProfile = await getFriendByUserId(userId);
        this.user = userProfile.data;

        if (token){
            this.showFollowButtons = true
            const response = await getFriendId(parseInt(localStorage.getItem("loggedInUserId")), userId, token);
            if (response.isSuccess) {
                this.isFollowing = true
            }
            else{
                this.isFollowing = false
            }
        }
        else{
            this.showFollowButtons = false; 
        }

        const userWorkouts = await getWorkoutsByUserId(userId);
        this.workouts = userWorkouts.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error("Error fetching user profile or workouts:", error);
      }
    
    },

};
</script>

<style scoped>
    .main{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
    }
    .top{
        margin-top: 4vh;
        margin-bottom: 2vh;
    }
    .is-3{
        color: #00d1b2;
    }
    .workouts .workoutCard {
        margin-bottom: 2vh;
    }
    .main .friendCard {
        width: 40vw;
    }
</style>