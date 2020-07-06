import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Film from '../views/Film'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    component: Film
  }
]

const router = new VueRouter({
  routes
})

export default router
