<template>
    
    <div class="profile">
        <div class="top">
            <h1 class="title is-2">Welcome, {{ user.name }}</h1>
        </div>
        <div class="box">
            <div class="columns is-vcentered">
            
                <div class="column is-narrow">
                <figure class="image is-64x64">
                    <img :src="user.profileImageUrl" alt="Profile Image" />
                </figure>
                </div>
                
                <div class="column">
                <p><strong>Name:</strong> {{ user.name }}</p>
                <p><strong>Username:</strong> {{ user.username }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p>
                    <strong>Profile Image URL: </strong> 
                    <a :href="user.profileImageUrl" target="_blank">{{ user.profileImageUrl }}</a>
                </p>
                </div>
            </div>
        </div>
        <div class="main-buttons">
            <button @click="showModal" class="button is-primary" id="formBtn1">Edit Profile</button>
            <button @click="showPasswordModel" class="button is-primary" id="formBtn2">Change Password</button>
            <button @click="openDeleteModal(user)" class="button is-danger">Delete Account</button>
        </div>
    </div>
        <div class="modal" :class="{ 'is-active': showForm }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title title is-3" style="color: #00d1b2;  margin-bottom: 0!important;">{{ isEditMode ? 'Change Password' : 'Edit Your Profile' }}:</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <p v-if="passwordError" class="help is-danger">{{ passwordError }}</p>
                    <add-user-form :newUser="newUser" :show-password-fields="isEditMode" @add-user="updateUser" />
                </section>
                <footer class="modal-card-foot">
                <div class="buttons">
                    <button class="button is-primary" @click="saveUserEdits()">Submit</button>
                </div>
                </footer>
            </div>
        </div>
        <div class="modal" :class="{ 'is-active': showDeleteModal }">
            <div class="modal-background" @click="closeDeleteModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title title is-3" style="color: #00d1b2;  margin-bottom: 0!important;">Delete User?</p>
                    <button class="delete" aria-label="close" @click="closeDeleteModal"></button>
                </header>
                <section class="modal-card-body" id="deleteUserModelBody">
                    <div>Are you sure you want to delete your account?</div>
                    <div class="buttons">
                        <button class="button is-danger" @click="deleteAUser(selectedUser.userId)">Confirm</button>
                        <button class="button" @click="closeDeleteModal">Cancel</button>
                    </div>
                </section>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeDeleteModal"></button>
        </div>
</template>

<script lang="ts">
import { getUserById, deleteUser, updateExistingUser, type User } from '@/models/users';
import AddUserForm from "@/components/AddUserForm.vue"

    export default { 
        components: {
            AddUserForm,
        },
        data() {
            return {
                showForm: false,
                isEditMode: false,
                newUser: { 
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: -1,
                },
                passwordError: '',
                user: { 
                    name: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '', 
                    profileImageUrl: '',
                    userId: -1,
                },
                showDeleteModal: false,
            };
        },
        methods: {
            showModal() {
                this.showForm = true;
                
            },
            showPasswordModel(){
                this.isEditMode = true;
                this.showForm = true;
            },
            closeModal() {
                this.showForm = false;
                this.isEditMode = false;
                this.passwordError = ''
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
                const token = localStorage.getItem('jwtToken') || ''
                if (this.newUser.userId != localStorage.getItem("loggedInUserId")) {
                    this.passwordError = "You are not authorized to edit this account.";
                    return;
                }
                if (!token){
                    this.passwordError = "You are not authorized to edit this account.";
                    return;
                }
                await deleteUser(userId, token)
                this.$router.push('/').then(() => window.location.reload());
            },
            async saveUserEdits() {
                if (this.newUser.userId != localStorage.getItem("loggedInUserId")) {
                    this.passwordError = "You are not authorized to edit this account.";
                    return;
                }
                const token = localStorage.getItem('jwtToken') || ''
                if (!token){
                    this.passwordError = "You are not authorized to edit this account.";
                    return;
                }
                if (this.isEditMode) {

                    if (this.newUser.password!== this.newUser.confirmPassword){
                        this.passwordError = "Passwords do not match.";
                        return;
                    }
                
                    else{
                        delete this.newUser.confirmPassword;
                        await updateExistingUser(this.newUser.userId, this.newUser, token);
                        this.closeModal(); // Close the modal after saving edits
                        window.location.reload(); 
                    }
                }
                else {
                    delete this.newUser.confirmPassword;
                    delete this.newUser.password;
                    console.log(this.newUser)
                    await updateExistingUser(this.newUser.userId, this.newUser, token);
                    this.closeModal(); 
                    window.location.reload(); 
                }
                
            },
            updateUser(updatedUser: User) {
                this.newUser = updatedUser; 
            },
        },
        async mounted() {
            const token = localStorage.getItem("jwtToken") || ''
            if (!token) {
                console.log('No token found');
                this.$router.push('/')
            }
            const userId = localStorage.getItem("loggedInUserId") || null;
            if (userId) {
                const response = await getUserById(parseInt(userId), token);
                if (response.isSuccess) {
                    const user = response.data;
                    delete user.password;
                    this.newUser = {...user };
                    this.user = {...user };
                } else {
                    console.error("Failed to fetch user data.");
                }
            }
        }
    }
</script>

<style scoped>
   
    .is-2 {
        margin-bottom: 1.5rem;
        padding-top: 4vh;
        color: #8d9195;
    }

    .box p:not(:last-child) {
        margin-bottom: 1.5rem;
    }
    .profile {
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: black;
        height: 100vh;
    }
    .box {
        width: 50vw;
        background-color: #00d1b2;
        margin-bottom: 1.5rem!important;
    }
    .main-buttons {
        display: flex;
        gap: 1rem;
    }
    .main-buttons button {
        width: 15vw!important;
    }
    #deleteUserModelBody{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1vh;
        align-items: center;
    }
</style>