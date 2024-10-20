<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import NavBar from './components/NavBar.vue';


</script>

<template>
  <header>
    <NavBar/>
  </header>

  <div class="main-content">
    <!-- Your main content goes here -->
    <router-view />
  </div>
</template>

<style scoped>
  .main-content {
    padding-top: 7vh;
  }
</style>
