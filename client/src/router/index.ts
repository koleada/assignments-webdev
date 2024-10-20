import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

console.log("Auto-generated routes:", routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
