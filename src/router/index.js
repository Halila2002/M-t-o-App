import { createRouter, createWebHistory } from 'vue-router'
// main.js

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import HomePage from '../views/searchBar.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component:  
     HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
