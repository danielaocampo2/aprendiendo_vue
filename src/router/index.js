import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
