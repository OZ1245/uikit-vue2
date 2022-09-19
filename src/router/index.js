import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/views/InputView.vue')
  },
  {
    path: '/typography',
    name: 'Typography',
    component: () => import('@/views/TypographyView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
