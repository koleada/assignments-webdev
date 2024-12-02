<template>
    <main>
    <section class="hero is-fullheight is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <!-- Logo Section -->
          <div class="logo mb-6">
            <i class="fas fa-dumbbell" style="font-size: 3rem; color: #00d1b2;"></i>
          </div>
        <!-- Sign-up Box -->
        <div class="box" style="border: 1px solid #00d1b2; border-radius: 8px; padding: 1rem;">
          <h1 class="title" style="color: #090a0c;">Sign Up</h1>

          <form @submit.prevent="submitForm">
            <!-- Name Field -->
            <div class="field">
              <label class="label has-text-black">Name:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="text" 
                  placeholder="Enter your name" 
                  v-model="name" 
                  required>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-black">Username:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="text" 
                  placeholder="Enter your name" 
                  v-model="username" 
                  required>
              </div>
            </div>

            <!-- Email Field -->
            <div class="field">
              <label class="label has-text-black">Email:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="email" 
                  placeholder="Enter your email" 
                  v-model="email" 
                  required>
              </div>
            </div>

            <div class="field">
              <label class="label has-text-black">Profile Image:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="tel" 
                  placeholder="https://website.com/my-image.jpg" 
                  v-model="profileImageUrl" 
                  required>
                
              </div>
            </div>

            <!-- Password Field -->
            <div class="field">
              <label class="label has-text-black">Password:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="password" 
                  placeholder="Create a password" 
                  v-model="password" 
                  required>
              </div>
            </div>

            <!-- Confirm Password Field -->
            <div class="field">
              <label class="label has-text-black">Confirm Password:</label>
              <div class="control">
                <input 
                  class="input is-primary is-rounded" 
                  type="password" 
                  placeholder="Confirm your password" 
                  v-model="confirmPassword" 
                  required>
              </div>
              <!-- Password Mismatch Message -->
              <p v-if="passwordError" class="help is-danger">{{ passwordError }}</p>
            </div>

            <!-- Sign-up Button -->
            <div class="field mt-5">
              <div class="control">
                <button 
                  class="button is-primary is-fullwidth" 
                  style="background-color: #00d1b2; color: black;" 
                  type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer Section -->
        <p class="has-text-white mt-4">
          Already have an account? 
          <a href="/login" class="has-text-primary" style="color: #00d1b2;">Log in here</a>.
        </p>
      </div>
    </div>
  </section>
</main>
</template>
  
  
<script lang="ts">
    import { routes } from 'vue-router/auto-routes'
    import { addNewUser } from '@/models/users'
    export default {
    data() {
        return {
        name: '',
        username: '',
        email: '',
        profileImageUrl: '',
        password: '',
        confirmPassword: '',
        passwordError: '' // To store password mismatch error message
        
        };
    },
    methods: {
        async submitForm() {
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
            this.passwordError = 'Passwords do not match';
        } else {
            // Clear error and proceed with form submission logic
            this.passwordError = '';
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Phone:', this.phone);
            console.log('Password:', this.password);
            // Add form submission logic here, e.g., send data to the backend

            try{
              const user = { name: this.name,  username: this.username, email: this.email,  profileImageUrl: this.profileImageUrl, password: this.password };
              const response = await addNewUser(user);

              if(!response.isSuccess){
                this.passwordError = 'Failed to register';
                return
              }
            }
            catch(error){
              this.passwordError = 'Failed to register';
              console.error(error);
              return
            }
            
            //redirect to login w/ sucess method\
            
            localStorage.setItem('newlySignedUpEmail', this.email);
            localStorage.setItem('success', true);
            this.$router.push('login');
        }
        }
    }
    };
</script>
  
  <style scoped>
  .hero-body, .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo{
    margin-top: 2vh;
  }
  .title{
    margin-bottom: 0!important;
  }
  .box {
    max-width: 40vw;
    width: 100%;
  }
  form{
    text-align: left;
  }
  label{
    font-size: 1rem!important
  }
  form input{
    height: 4vh;
  }
  ::placeholder {
    color: black;
    opacity: .8
  }
</style>