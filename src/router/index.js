import Vue from 'vue'
import VueRouter from 'vue-router'

import userRouter from './modules/user'
import newsRouter from './modules/news'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user/info'
  },
  ...userRouter,
  ...newsRouter
]

const router = new VueRouter({
  routes
})
router.beforeEach(async (to, from, next) => {
  next()
})
router.afterEach(async (to, from) => {
  console.log(to)
})
export default router
