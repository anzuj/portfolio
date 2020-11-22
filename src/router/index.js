import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: "home",
    component: () => import('../views/Home.vue')
  },
  // {
  //   path: '/home',
  //   name:"home",
  //   component: () => import('../views/Home.vue')
  // },
  {
    path: '/personal',
    name:"personal",
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/portfolio',
    name:"portfolio",
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/gallery',
    name:"gallery",
    component: () => import('../views/Gallery.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router