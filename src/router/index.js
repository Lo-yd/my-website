import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home'),
  }
]

const router = new VueRouter({
  routes
})

export default router