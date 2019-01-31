import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView
  }
  ]
})
