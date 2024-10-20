import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes'; 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(router)

app.mount('#app')
