import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const About = () => import('@/views/About.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Inicio'
    }
  },
  {
    path: '/quienes-somos',
    name: 'About',
    component: About,
    meta: {
      title: 'Quiénes Somos'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  routes,
})

export default router