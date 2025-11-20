// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../Register.vue'
import Link from '../views/link.vue'
import About from '../views/about.vue'
import Statistics from '../views/Statistics.vue'
import Test from '../views/test.vue'
import Post from '../views/Post.vue'

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
  },
  {
    path:'/test',
    name:'test',
    component: Test
  }
  ,
  {
    path: '/post/:slug',
    name: 'Post',
    component: Post
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router