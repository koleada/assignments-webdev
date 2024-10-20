<template>
    <div class="main">
        <h1 class="title is-3">All Fitness Activity</h1>
    
        <div>
            <activity-card v-for="workout in workouts" :key="workout.id" :workout="workout" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { getAll, type Workout } from '@/models/workouts';
    import ActivityCard from '@/components/ActivityCard.vue';

    const workouts = ref<Workout[]>([]);
    workouts.value = getAll().data
</script>

<style scoped>
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        background-color: black;
        padding-bottom: 2vh;
    }
    .title{
        margin-top: 2vh;
        color: #00d1b2;
    }
    .media{
        background-color: black;
        color: #00d1b2;
    }
</style>