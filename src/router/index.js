import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signup from '../components/Signup'
import DustState from '../components/DustState'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/id',
      name: 'DustState',
      component: DustState
    }
  ]
})
