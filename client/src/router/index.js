import VueAxios from 'vue-axios'
import axios from 'axios'
import Vue from 'vue'

const base = axios.create({

  baseURL: 'http://localhost:5000/'
})

Vue.use(VueAxios, base)

Vue.config.productionTip = false

import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Recommend from '@/components/Recommend'
import Juegos from '@/components/Juegos'
import Ficha from '@/components/Ficha'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/recommend',
      name: 'Recomendacion',
      component: Recommend
    },
    {
      path: '/juegos',
      name: 'Juegos',
      component: Juegos
    },
    {
      path: '/ficha/:id',
      name: 'ficha',
      component: Ficha
    }
  ]
})
