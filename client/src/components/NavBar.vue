<script lang="ts">
import{ RouterLink } from 'vue-router';
import { ref } from 'vue';

  const isOpen = ref(false)


</script>
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a id='logoLink' class="navbar-item special left" href="/">
      <i class="fas fa-dumbbell"></i>
    </a>
      <!-- the below nav burger is bound to view w/ the :class property so we can use vue to toggle it -->
       <!-- we also use @click to add a click event listener so we can just added a function to this. in this case we just toggle isOpen -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
      :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <!-- the vue binded class is used so we can alter the display of this vs the burger in vue -->
  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
    <div class="navbar-start" >

      <a class="navbar-item special left">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable left">
        <a class="navbar-link left">
          More
        </a>

        <div class="navbar-dropdown ">
          <a class="navbar-item ">
            About
          </a>
          <a class="navbar-item ">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item ">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" id="signUp" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .navbar{
    top: 100;
    position: fixed;
    width: 100%;
    height: 7vh;
    background-color: #8D9195;
    font-weight: bold;
    
  }
  .navbar-burger{
    color: #090a0c;
  }
  #logoLink{
    display: flex;
    justify-content: center;
    align-items: center;
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
  .special:hover {
    color: white; /* Change text color on hover */
     background-color: #00d1b2; /* Change background color on hover (using a Bulma color class) */
  }
  .navbar-item.left, .navbar-link.left{
    
    color: #090a0c;
  }
  
</style>