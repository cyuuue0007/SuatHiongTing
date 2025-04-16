import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home }
]

const router = createRouter({
  history: createWebHistory('/SuatHiongTing/'),  // 加上 base path
  routes
})

export default router
