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
        <label class="label">Profile Image:</label>
        <div class="control">
            <input class="input is-primary is-rounded" type="text" v-model="formData.profileImageUrl"  @input="updateNewUser" placeholder="https://my-image.com/example.jpg">
        </div>
        </div>

        <div v-if="adminForm" class="field">
            <div class="field">
            <label class="label">User ID:</label>
            <div class="control">
                <input class="input is-primary is-rounded" type="number" v-model="formData.userId"  @input="updateNewUser" placeholder="10000">
            </div>
            </div>
        </div>

        <div v-if="showPasswordFields" class="field">
            <div class="field">
            <label class="label">Password:</label>
            <div class="control">
                <input class="input is-primary is-rounded" type="password" v-model="formData.password"  @input="updateNewUser" placeholder="password">
            </div>
            </div>
        </div>
        
        <div v-if="showPasswordFields" class="field">
            <div class="field">
            <label class="label">Confirm Password:</label>
            <div class="control">
                <input class="input is-primary is-rounded" type="password" v-model="formData.confirmPassword"  @input="updateNewUser" placeholder="confirm password">
            </div>
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
            showPasswordFields: {
                type: Boolean,
                default: true, 
            },
            adminForm: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                formData: { 
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: -1,
                },
                passwordError: ''
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