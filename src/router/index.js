import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // ✅ 把這行改掉！

const routes = [
  { path: '/', name: 'home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router