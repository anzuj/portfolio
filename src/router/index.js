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
    component: () => import('../views/Portfolio.vue'),
    children: [
      {
        path: 'sapling',
        name:"sapling",
        component: () => import('../views/projects/Sapling.vue')
      },
      {
        path: 'czocha',
        name:"czocha",
        component: () => import('../views/projects/Czocha.vue')
      },
      {
        path: 'discussion',
        name:"discussion",
        component: () => import('../views/projects/Discussion.vue')
      },
      {
        path: 'monster',
        name:"monster",
        component: () => import('../views/projects/Monstergame.vue')
      },
      {
        path: 'signup',
        name:"signup",
        component: () => import('../views/projects/Signup.vue')
      },
      {
        path: 'beadinghub',
        name:"beadinghub",
        component: () => import('../views/projects/Beadinghub.vue')
      },
      {
        path: 'hireme',
        name:"hireme",
        component: () => import('../views/projects/Hireme.vue')
      }
      
    ]
  },
  {
    path: '/gallery',
    name:"gallery",
    component: () => import('../views/Gallery.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
