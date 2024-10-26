<template>
    <div class="main">
    <div class="close">
        <i class="fa-solid fa-x"></i>
    </div>
    
    <div class="field">
    <label class="label">Name:</label>
    <div class="control">
        <input class="input is-rounded is-primary" type="text" v-model="formData.name"  @input="updateNewUser" placeholder="John Doe">
    </div>
    </div>

    <div class="field">
    <label class="label">Username:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" v-model="formData.username"  @input="updateNewUser" placeholder="johndoe1" >
        
    </div>
    </div>
    <div class="field">
    <label class="label">Email:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="email" v-model="formData.email"  @input="updateNewUser" placeholder="johndoe@example.com">
    </div>
    </div>
    <div class="field">
    <label class="label">Password:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" v-model="formData.password"  @input="updateNewUser" placeholder="password">
    </div>
    </div>
    <div class="field">
    <label class="label">Profile Image:</label>
    <div class="control">
        <input class="input is-primary is-rounded" type="text" v-model="formData.profileImageUrl"  @input="updateNewUser" placeholder="https://my-image.com/example.jpg">
    </div>
    </div>
    </div>
</template>

<script lang="ts">

    export default {
        props: {
            newUser: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                formData: { 
                    name: '',
                    username: '',
                    password: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: -1,
                }
            };
        },
        watch: {
            newUser: {
                immediate: true,
                handler(newVal) {
                    this.formData = {
                    ...newVal,
                    };
                },
            },
        },
        methods: {
            updateNewUser() {
                this.$emit('add-user', {
                    ...this.formData,
                });
            },
        },
        
    };

</script>   

<style scoped>

</style>