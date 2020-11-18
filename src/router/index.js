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
    path: '/about',
    name:"about",
    component: () => import('../views/About.vue')
  },
  {
    path: '/jobs',
    name:"jobs",
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/technologies',
    name:"technologies",
    component: () => import('../views/Tech.vue')
  },
  {
    path: '/applications',
    name:"applications",
    component: () => import('../views/Applications.vue')
  },
  {
    path: '/downloads',
    name:"downloads",
    component: () => import('../views/Downloads.vue')
  },
  {
    path: '/contact',
    name:"contact",
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
