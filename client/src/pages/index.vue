<script setup lang="ts">
  
</script>

<template>
  <section class="hero is-fullheight is-black">
    <!-- Hero Section -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <!-- Logo and Title -->
        <div class="mb-6">
          <i class="fas fa-dumbbell" style="font-size: 3rem; color: #00d1b2;"></i>
          <h1 class="title has-text-white mt-3 is-1">Track Your Fitness Journey</h1>
          <h2 class="subtitle has-text-white is-3">Achieve your goals and stay motivated</h2>
        </div>
        
        <!-- Add a relevant fitness image here -->
        <img id='mainImg' src='../assets/mainImg.jpeg' alt="Fitness Image" style="border-radius: 8px; margin-bottom: 2rem;">
        
        <!-- Call-to-Action Button -->
        <a class="button is-large" style="background-color: #00d1b2; color: white;" href="/signup">
          Get Started Now
        </a>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="section is-medium" style="background-color: white;">
    <div class="container">
      <div class="columns is-multiline has-text-centered">
        <!-- Feature 1 -->
        <div class="column is-one-third">
          <i class="fas fa-chart-line" style="font-size: 2rem; color: #00d1b2;"></i>
          <h3 class="title is-4 has-text-black mt-3">Track Progress</h3>
          <p class="has-text-grey-dark">Log workouts and track your progress with simple and intuitive charts.</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="column is-one-third">
          <i class="fas fa-heartbeat" style="font-size: 2rem; color: #00d1b2;"></i>
          <h3 class="title is-4 has-text-black mt-3">Monitor Health</h3>
          <p class="has-text-grey-dark">Track vital signs, such as heart rate, and get personalized insights.</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="column is-one-third">
          <i class="fas fa-users" style="font-size: 2rem; color: #00d1b2;"></i>
          <h3 class="title is-4 has-text-black mt-3">Community Support</h3>
          <p class="has-text-grey-dark">Connect with other fitness enthusiasts and stay motivated together.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="section is-medium is-black">
    <div class="container has-text-centered">
      <h2 class="title has-text-white">What Our Users Are Saying</h2>
      <div class="columns is-multiline">
        <!-- Testimonial 1 -->
        <div class="column is-half">
          <div class="box" style="border: 1px solid #00d1b2; background-color: black;">
            <p class="has-text-white">"This app transformed the way I work out. Tracking my progress keeps me motivated!"</p>
            <p class="has-text-grey mt-3">— John D.</p>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="column is-half">
          <div class="box" style="border: 1px solid #00d1b2; background-color: black;">
            <p class="has-text-white">"The health insights are amazing. It helped me monitor my heart rate and improve my performance."</p>
            <p class="has-text-grey mt-3">— Sarah K.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final Call-to-Action Section -->
  <section class="section is-large has-text-centered" style="background-color: #00d1b2;">
    <h2 class="title has-text-white">Ready to Get Fit?</h2>
    <p class="has-text-white mb-5">Sign up today and start tracking your fitness goals.</p>
    <a class="button is-large is-black" href="/sign-up">Join Now</a>
  </section>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
.hero-body {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#mainImg {
  max-width: 30%;
}

.box {
  border-radius: 8px;
}

.section.is-large {
  padding: 4rem 1.5rem;
}
.section.is-medium{
  padding: 2rem 2rem;
}
</style>

