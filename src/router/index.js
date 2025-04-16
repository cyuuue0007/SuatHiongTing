import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home }
]

const router = createRouter({
  history: createWebHashHistory('/SuatHiongTing/'), // ✅ 用 Hash 模式
  routes
})

export default router
