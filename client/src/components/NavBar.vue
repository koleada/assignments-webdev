<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a id='logoLink' class="navbar-item special left" href="/home">
      <i class="fas fa-dumbbell"></i>
    </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
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
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
</style>