<template>
    <div class="main">
        <div class="top">
        <h1 class="title is-2">Admin Panel</h1>
        <button @click="showModal" class="button" id="formBtn">Add User</button>
            <div class="modal" :class="{ 'is-active': showForm }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title title is-3">Add User</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <add-user-form />
                    </section>
                    <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-primary" @click="closeModal">Submit</button>
                    </div>
                    </footer>
                </div>
            </div>
        </div>
        <div class="box">
            <table>
            <thead>
                <tr>
                <th>Profile Image</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>User ID</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userId">
                    <td><img :src="user.profileImageUrl" alt="Profile Image" class="image is-64x64"></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.userId }}</td>
                    <td class="actions">
                        <button @click="deleteUser(user.userId)" class="button"><i class="fal fa-trash" id="trash"></i></button>
                        <button @click="editUser(user)" class="button"><i class="far fa-edit"></i></button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
<script setup lang="ts">
    import AddUserForm from "@/components/AddUserForm.vue"
</script>
<script lang="ts">
    import { ref } from 'vue'
    import { getAll, type User } from '@/models/users';

    
    // <i class="far fa-edit"></i>
    // <i class="fal fa-trash"></i>
    export default {
        data() {
            return {
                users: ref<User[]>(getAll().data),
                showForm: false
            };
        },
        methods: {
            showModal() {
                this.showForm = true;
            },
            closeModal() {
                this.showForm = false;
            },
            deleteUser(userId: number) {
            // Implement your logic to delete the user
            console.log('Deleting user:', userId);
            },
            editUser(user: User) {
            // Implement your logic to edit the user
            console.log('Editing user:', user);
            }
        },
        
    };
</script>

<style scoped>
   .main{
    min-height: 100vh;
   }
    .top{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background-color: black;
        padding-top: 3rem;
    }
    #formBtn{
        margin-top: 2rem;
        background-color: #00d1b2;
        font-weight: bold;
    }
    table {
    border-collapse: collapse;
    background-color: #00d1b2;
    
    }
    .box{
        display: flex;
        justify-content: center;
        background-color: black;
        padding: 4rem;
        border-radius: 0;
    }
    h1{
        color: #00d1b2;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 1rem;
    }
    .modal-card-title{
        font-weight: bold;
        color: #00d1b2;
        margin-bottom: 0!important;
    }
</style>