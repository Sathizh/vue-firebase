import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '@/views/Edit.vue'
import List from '@/views/List.vue'
import Create from '@/views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component:Edit
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
