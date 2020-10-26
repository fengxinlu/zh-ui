import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'button',
  component: () => import('../views/button.vue')
}, {
  path: '/text',
  name: 'text',
  component: () => import('../views/text.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
