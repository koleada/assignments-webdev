<template>
    <div class="main">
        <h1 class="title is-3">Your Friends:</h1>
    
        <div class="content">
            <div class="friend" v-for="user in userFriends" :key="user.userId">
                
                <FriendCard class='friend-card' :showFollowButtons="true" @unfollow="handleUnfollow" :user="user" />
                
            </div>

            <div v-if="userFriends.length == 0">
                <h3 class="subtitle is-5">No friends found. Add some friends to start following.</h3>
            </div>
            <button class="button is-primary" @click="openModel">Search For Friends</button>
        </div>
    </div>

    <div class="modal" :class="{ 'is-active': isModalOpen }">
      <div class="modal-background" @click="isModalOpen = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title title is-3" style="color: #00d1b2; margin-bottom: 0!important;">Search for Friends</p>
          <button class="delete" aria-label="close" @click="isModalOpen = false"></button>
        </header>

        <section class="modal-card-body">
          
            <div class="field">
                <label class="label">Search</label>
                <div class="control">
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Enter name or username"
                        v-model="searchQuery"
                    />
                    
                    <button class="button is-primary" @click="searchForFriends">
                        Search
                    </button>
                </div>
            </div>
          
          <div v-if="searchResults.length > 0" class="results">
            <h3 class="subtitle is-5">Search Results:</h3>
            <div v-for="friend in searchResults" :key="friend.id" class="searchResults">
                
                <FriendCard
                :user="friend"
                :showFollowButtons="true"
                actionType="follow"
                :follow="!friend.isFollowing"
                @follow="handleFollow"
                @unfollow="handleUnfollow"
                />
            </div>
          </div>
          <p v-else >No friends found.</p>
        </section>

        <footer class="modal-card-foot">
          <button class="button" @click="isModalOpen = false">Close</button>
        </footer>
      </div>
    </div>  
</template>

<script lang="ts">
    import FriendCard from "@/components/FriendCard.vue"
    import { getFriends, getFriendId, deleteFriend, addFriend, type Friend } from "@/models/friends"
    import { ref } from 'vue';
    import { getFriendByName, getFriendByUserId,  type User } from "@/models/users"

    
    export default {
        components: {
            FriendCard,
        },
        data() {
            return {
                userFriends: ref<User[]>([]), 
                isModalOpen: false,
                searchQuery: "",
                searchResults: [],
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
            async searchForFriends() {
                if (!this.searchQuery.trim()) return;
                const userId = localStorage.getItem("loggedInUserId")
                const token = localStorage.getItem("jwtToken") || ''
                if (!token) {
                    console.log('No token found');
                    return;
                }
                try {
                    this.searchResults = [];  
                    const response = await getFriendByName({"name": this.searchQuery.trim()}, token);
                    const people = response.data;

                    const response2 = await getFriends(userId, token)
                    const currentFriends = response2.data;
                    const friendIds = new Set(currentFriends.map((friend) => friend.friendUserId));

                    const processedResults = people
                        .filter((user) => user.userId != userId) 
                        .map((user) => ({
                            ...user,
                            isFollowing: friendIds.has(user.userId),
                    }));
                    console.log(processedResults)
                    this.searchResults = processedResults
                    
                } catch (error) {
                    console.error("Error searching for friends:", error);
                }
            },
            openModel() {
                this.searchResults = []; 
                this.searchQuery = '';
                this.isModalOpen = true; 
            },
            async handleFollow(friend: User) {
                const token = localStorage.getItem("jwtToken") || ''
                if (!token) {
                    console.log('No token found');
                    return;
                }
                try {
                    await addFriend({userId: parseInt(localStorage.getItem("loggedInUserId")), friendUserId: friend.userId}, token);
                    window.location.reload();
                } catch (error) {
                    console.log('Error following friend');
                }
            },
        },
        async mounted(){
            const users = ref<User[]>([]);
            try {
                const userId = localStorage.getItem("loggedInUserId");
                const token = localStorage.getItem("jwtToken") || ''
                if (!token) {
                    console.log('No token found');
                    return;
                }

                // Fetch friends
                const friendsResponse = await getFriends(userId, token);
                const friends = friendsResponse.data;

                friends.forEach(async (friend) => {
                    const user = await getFriendByUserId(friend.friendUserId);
                    
                    this.userFriends.push(user.data);
                });
            } catch (error) {
                console.error("Error fetching user friends:", error);
            }
            console.log(users.value);
        }
    }
        
    
    // const userId = localStorage.getItem("loggedInUserId");
    //     getFriends(userId).then((data) => friends.value = data.data)

    //     try {
    //     getFriendByUserId(f.value.friendUserId).then((data) => user.value = data.data);
    //     } catch (error) {
    //     console.log(error)
    //     } 


    

</script>

<style scoped>
    .main{
        background-color: black;
        height: 100vh;
        padding-top: 4vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .is-3, .is-5{
        color: #00d1b2;
    }
    .is-3{
        margin-bottom: 1.5rem;
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .control{
        display: flex;
        gap: 1rem;
    }
    .results .searchResults:not(:last-child){
        margin-bottom: 2rem;
    }
    .content .friend{
        margin-bottom: 2rem;
        width: 45vw;
    }
    .searchResults FriendCard {
        max-width: 90%;
    }
</style> 