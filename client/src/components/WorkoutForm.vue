<template>
    <div class="main">
    <div class="close">
        <i class="fa-solid fa-x"></i>
    </div>
    
    <div class="field">
    <label class="label">Workout Description:</label>
    <div class="control">
        <input class="input is-rounded is-primary" type="text" placeholder="">
    </div>
    </div>

    <div class="field">
    <label class="label">Location:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" placeholder="Central Park" >
        
    </div>
    </div>
    <div class="field">
    <label class="label">Duration:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" placeholder="60">
    </div>
    <p class="help">Number, in minutes</p>
    </div>
    <div class="field">
    <label class="label">Distance:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" placeholder="5">
    </div>
    <p class="help">Number, in miles</p>
    </div>
    <div class="field">
    <label class="label">Date</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="date" >
    </div>
    </div>
    <div class="field">
    <label class="label">Image</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" placeholder="https://my-workout.com/img.png">
    </div>
    <p class="help">URL to an image of your workout</p>
    </div>
    <div class="field">
    <label class="label">Type:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" placeholder="weight room">
    </div>
    <p class="help">What activity you did for this workout?</p>
    </div>
    
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>