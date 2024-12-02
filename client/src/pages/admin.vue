<template>
    <div class="main">
        <div class="top">
        <h1 class="title is-3">Admin Panel</h1>
        <button @click="showModal" class="button" id="formBtn">Add User</button>
            <div class="modal" :class="{ 'is-active': showForm }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title title is-3">{{ isEditMode ? 'Edit User' : 'Add User' }}</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <p v-if="passwordError" class="help is-danger">{{ passwordError }}</p>
                        <add-user-form :newUser="newUser" :adminForm=true  :show-password-fields="!isEditMode" @add-user="updateUser" />
                    </section>
                    <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-primary" @click="isEditMode ? saveUserEdits() : addUser()">Submit</button>
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
                        <button @click="openDeleteModal(user)" class="button"><i class="far fa-trash-alt"></i></button>
                        <button @click="editUser(user)" class="button"><i class="fas fa-user-edit"></i></button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="modal" :class="{ 'is-active': showDeleteModal }">
            <div class="modal-background" @click="closeDeleteModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title title is-3">Delete User?</p>
                    <button class="delete" aria-label="close" @click="closeDeleteModal"></button>
                </header>
                <section class="modal-card-body" id="deleteUserModelBody">
                    <p>Are you sure you want to delete this user?</p>
                    <p><strong>{{ selectedUser?.name }}</strong></p>
                    <div class="buttons">
                        <button class="button is-danger" @click="deleteAUser(selectedUser.userId)">Confirm</button>
                        <button class="button" @click="closeDeleteModal">Cancel</button>
                    </div>
                </section>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeDeleteModal"></button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import AddUserForm from "@/components/AddUserForm.vue"
</script>
<script lang="ts">
    import { ref } from 'vue'
    import { getAll, deleteUser, addNewUser, updateExistingUser, type User } from '@/models/users';

    
    export default { 
        meta: {
            requiresAdmin: true, 
        },
        components: {
            AddUserForm,
        },
        data() {
            return {
                users: ref<User[]>([]),
                showForm: false,
                isEditMode: false,
                showDeleteModal: false,
                newUser: { 
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: '',
                },
                passwordError: '',
            };
        },
        methods: {
            showModal() {
                this.showForm = true;
                this.isEditMode = false; // Reset edit mode
                this.newUser = { 
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: '',
                };
            },
            closeModal() {
                this.showForm = false;
            },
            openDeleteModal(user) {
                this.selectedUser = user;
                this.showDeleteModal = true;
            },
            closeDeleteModal() {
                this.selectedUser = null;
                this.showDeleteModal = false;
            },
            async deleteAUser(userId: number) {
                const token = localStorage.getItem("jwtToken") || ''
                if (!token) {
                    console.log('No token found');
                    return;
                }
                
                await deleteUser(userId, token)
                window.location.reload();
            },
            editUser(user: User) {
                delete user.password
                this.newUser = { ...user }; // Prefill form with user's data
                this.isEditMode = true; // Set edit mode
                this.showForm = true; // Show modal
            },
            async addUser() {

                if (this.newUser.password === this.newUser.confirmPassword){
                    delete this.newUser.userId
                    await addNewUser(this.newUser); 
                    this.newUser = { 
                        name: '',
                        username: '',
                        password: '',
                        email: '', 
                        profileImageUrl: '',
                        userId: -1,
                    };
                    this.showForm = false; // Close the modal after adding the workout
                    window.location.reload();
                }
                else{
                    this.passwordError = "Passwords do not match";
                    this.newUser.password = ''
                    this.newUser.confirmPassword = ''
                }
            },
            async saveUserEdits() {
                const token = localStorage.getItem("jwtToken") || ''
                if (!token) {
                    console.log('No token found');
                    return;
                }
                
                delete this.newUser.password
                delete this.newUser.confirmPassword
                await updateExistingUser(this.newUser.userId, this.newUser, token);
                this.closeModal(); // Close the modal after saving edits
                window.location.reload();
            },
            updateUser(updatedUser: User) {
                this.newUser = updatedUser; 
            },
        },
        async mounted() {
            const id = localStorage.getItem('loggedInUserId') || null
            if (id != 0){
                this.$router.push('/');
            }
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                return;
            }
            getAll(token).then((data) => this.users = data.data);
            
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
        min-height: 100%;
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
        padding-bottom: 20vh;
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
    tbody .button {
        width: 2vw;
    }
    tbody .button:first-child {
        margin-right: .5rem;
    }
</style>