
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a id='logoLink' class="navbar-item special left" href="/">
      <i class="fas fa-dumbbell"></i>
    </a>
      <!-- the below nav burger is bound to view w/ the :class property so we can use vue to toggle it -->
       <!-- we also use @click to add a click event listener so we can just added a function to this. in this case we just toggle isOpen -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <!-- the vue binded class is used so we can alter the display of this vs the burger in vue -->
  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start" >

      <a class="navbar-item special left" href="/all-activity">
        All Activity
      </a>
      
      <div v-if="user != null">
        <a class="navbar-item special left" href="/my-activity" >
          My Activity
        </a>
      </div>

      <div v-if="user != null">
        <a class="navbar-item special left" href="/my-friends" >
          My Friends
        </a>
      </div>
      
      <div v-if="user != null">
        <a class="navbar-item special left" href="/my-profile" >
          My Profile
        </a>
      </div>

      <div v-if="user != null && user.userId == 0">
        <a class="navbar-item special left" href="/admin" >
          Admin
        </a>
      </div>

      <!-- <div class="navbar-item has-dropdown is-hoverable is-primary">
        <a class="navbar-link left">
          More
        </a>
        <div class="navbar-dropdown">
          
          <a class="navbar-item">
            Contact
          </a>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
      
    </div>

    <div class="navbar-end"  >
        <div class="navbar-item">
          <div class="buttons" v-if="user == null">
            <a class="button is-primary" id="signUp" href="/signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" style="font-weight: bold;" href="/login">
              Log in
            </a>
          </div>
          <div class="buttons" v-else>
            <div class="profile">
              <img :src="user.profileImageUrl" alt="Profile Pic" class="image is-64x64">
              <p>{{ user.username }}</p>
            </div>
            <button class="button is-light" 
                    style="background-color: white; color: black;"
                    type="submit" @click="logOut">
                    Log Out
            </button>
          </div>
        </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
  import  { getFriendByUserId } from "@/models/users";
  
  export default {
    
    data() {
        return {
          user:  null, 
          isOpen: false
        };
    },
    methods: {
      logOut(){
        localStorage.removeItem('loggedInUserId');
        localStorage.removeItem('jwtToken');
        this.$router.push('/').then(() => { location.reload(); })
        
      }, 
      async getUserData(userId: number) {
        try {
          getFriendByUserId(userId).then(data => {this.user = data.data});
          
        } catch (error) {
          console.error('Error fetching user data:', error);
          this.user = null; 
        }
      },
    },
    mounted() {
      const id = localStorage.getItem('loggedInUserId');

      if (id) {
        const numId = parseInt(id);
        this.getUserData(numId); 
      } else {
        this.user = null;
      }
    },

    
  };
  
  
</script>

<style scoped>
  .profile{
    display: flex;
    gap: 2vw;
    margin-right: 2vw;
  }
  .navbar {
    top: 100;
    position: fixed;
    width: 100%;
    height: 7vh!important;
    max-height: 7vh!important;
    background-color: #8D9195;
    font-weight: bold;
  }
  .navbar-brand{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-burger{
    color: #090a0c;
    height: 7vh!important;
  }
  #logoLink{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%!important;
  }
  .fa-dumbbell{
    font-size: 1.8rem;

  }
  
  a.navbar-link::after {
    border-color: #00d1b2!important /* Change to your desired color */
  }
  a.navbar-link:hover::after {
    border-color: white!important /* Change to your desired color */
  }
  .navbar-item a:hover {
    color: white; /* Change text color on hover */
    background-color: #00d1b2; /* Change background color on hover (using a Bulma color class) */
  }
  .navbar-link a:hover {
    color: white; /* Change text color on hover */
    background-color: #00d1b2; /* Change background color on hover (using a Bulma color class) */
  }
  button:hover {
    color: white!important; /* Change text color on hover */
    background-color: #00d1b2!important; /* Change background color on hover (using a Bulma color class) */
  }
  .special:hover, .left:hover {
    color: white!important; /* Change text color on hover */
    background-color: #00d1b2; /* Change background color on hover (using a Bulma color class) */
  }
  .navbar-item.left, .navbar-link.left{
    
    color: #090a0c;
    height: 100%!important;
  }
  .navbar-burger:hover{
    background-color: #8D9195;
  }
  .navbar-dropdown{
    background-color: white;
  }
 
</style>