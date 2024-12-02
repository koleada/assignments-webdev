<template>
    <div class="main">
    <div class="close">
        <i class="fa-solid fa-x"></i>
    </div>
    
    <div class="field">
    <label class="label">Workout Description:</label>
    <div class="control">
        <input class="input is-rounded is-primary" v-model="formData.description" @input="updateNewWorkout" type="text" placeholder="">
    </div>
    </div>

    <div class="field">
    <label class="label">Location:</label>
    <div class="control">
        <input class="input is-primary is-rounded" v-model="formData.location" @input="updateNewWorkout" type="text" placeholder="Central Park" >
        
    </div>
    </div>
    <div class="field">
    <label class="label">Duration:</label>
    <div class="control">
        <input class="input is-primary is-rounded" v-model.number="formData.duration" @input="updateNewWorkout" type="text" placeholder="60">
    </div>
    <p class="help">Number, in minutes</p>
    </div>
    <div class="field">
    <label class="label">Distance:</label>
    <div class="control">
        <input class="input is-primary is-rounded" v-model.number="formData.distance" @input="updateNewWorkout" type="text" placeholder="5">
    </div>
    <p class="help">Number, in miles</p>
    </div>
    <div class="field">
    <label class="label">Date</label>
    <div class="control">
        <input class="input is-primary is-rounded" v-model="formData.dateOfPosting" @input="updateNewWorkout" type="datetime-local" >
    </div>
    </div>
    <div class="field">
    <label class="label">Image</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" v-model="formData.imageUrl" @input="updateNewWorkout" placeholder="https://my-workout.com/img.png">
    </div>
    <p class="help">URL to an image of your workout</p>
    </div>
    <div class="field">
    <label class="label">Type:</label>
    <div class="control">
        <input class="input is-primary is-rounded" v-model="formData.type" type="text" @input="updateNewWorkout" placeholder="weight room">
    </div>
    <p class="help">What activity you did for this workout?</p>
    </div>
    
    </div>
</template>

<script lang="ts">
    

    export default {
        props: {
            newWorkout: {
                type: Object,
                required: true,
            },
            initialData: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {
                formData: { 
                    id: null,
                    description: '',
                    dateOfPosting: '',
                    imageUrl: '', 
                    distance: 0,
                    location: '',
                    type: '',
                    duration: 0,
                }
            };
        },
        watch: {
            newWorkout: {
                immediate: true,
                handler(newVal) {
                    this.formData = {
                    ...newVal,
                    };
                },
            },
        },
        methods: {
            updateNewWorkout() {
            this.$emit('add-workout', {
                ...this.formData,
            });
            },
        },
        
    };

</script>   

<style scoped>

</style>