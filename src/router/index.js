// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Register from '../Register.vue'
import Link from '../link.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/link',
    name: 'Link',
    component: Link
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router