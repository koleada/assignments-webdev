<template>
  <section class="hero is-fullheight is-black">
    <div class="hero-body">
      <div class="container has-text-centered">
        <!-- Logo Section -->
        <i class="fas fa-dumbbell logo" style="font-size: 3rem; color: #00d1b2;"></i>
        
        <div>
          <div id="error" class="subtitle is-5" v-if='errorMessage' style="color: red; font-size: 1rem;">{{ errorMessage }}</div>
        </div>
        <!-- Login Box -->
        <div class="box" style="border: 2px solid #00d1b2; border-radius: 8px; padding: 2rem;">
          
          <h5 class="title is-3 has-text-black" style="margin: 2vh; text-align: center; color: #8D9195;" >Login</h5>
          <form @submit.prevent="submitForm">
            <!-- Email Field -->
            <div class="field">
              <label class="label has-text-black" >Email:</label>
              <div class="control">
                <input 
                  class="input is-medium is-primary is-rounded" 
                  type="email" 
                  placeholder="Enter your email" 
                  v-model="email" 
                  
                  required>
                 
              </div>
            </div>

            <!-- Password Field -->
            <div class="field">
              <label class="label has-text-black">Password:</label>
              <div class="control">
                <input 
                  class="input is-medium is-primary is-rounded" 
                  type="password" 
                  placeholder="Enter your password" 
                  v-model="password" 
                  required>
                  
              </div>
            </div>

            <!-- Login Button -->
            <div class="field mt-5">
              <div class="control">
                <button 
                  class="button is-medium is-fullwidth" 
                  style="background-color: #00d1b2; color: white;"
                  type="submit">
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer Section -->
        <p class="has-text-white mt-4">
          Don't have an account? 
          <a href="/signup" class="has-text-primary" style="color: #00d1b2;">Sign up here</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from '@/models/users'
    
    export default {
        props: ['message'],
        data() {
            return {
            email: '',
            password: '',
            errorMessage: '',
            };
        },
        methods: {
            submitForm() {
            // Add your form submission logic here
            const user = login(this.email, this.password)
            
            if(user){
              localStorage.setItem('loggedInUserId', user.userId);
              this.$router.push('/my-activity').then(() => {
                window.location.reload();
              });
            }
            else{
              this.errorMessage = 'Invalid email or password';
            }
            localStorage.removeItem('email');
            localStorage.removeItem('sucess');
            }
        },
        mounted(){
            this.email = localStorage.getItem('newlySignedUpEmail') || '';
            let successCheck = localStorage.getItem('success');
            if(successCheck === 'true'){
                document.getElementById('successMessage').innerHTML = 'Thanks for signing up, we look forward to helping you reach your fitness goals!';
                localStorage.removeItem('success');
                console.log(this.success);
            }
            
            
        },
        
        
        
        
    };
    
</script>

<style scoped>
.hero-body, .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vh;
}
.logo{
    margin-top: 4vh;
}
form input{
  height: 5vh;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left
}
#successMessage{
  color: #00d1b2;
  max-width: 40vw;
}
::placeholder {
    color: black;
    opacity: .8
}
</style>
