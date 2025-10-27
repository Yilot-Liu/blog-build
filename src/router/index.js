// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../Register.vue'
import Link from '../views/Link.vue'
import About from '../views/About.vue'
import Statistics from '../views/Statistics.vue'

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
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router