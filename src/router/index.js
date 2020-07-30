import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Try from '@/components/Try'
import Axios from '@/components/axios/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/try',
      name: 'Try',
      component: Try
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/axios/get',
      name: 'Axios.get',
      component: () => import('@/components/axios/QuicklyGet')
    },
    {
      path: '/axios/post-register',
      name: 'Register',
      component: () => import('@/components/axios/Register')
    },
    {
      path: '/axios/post-login',
      name: 'Login',
      component: () => import('@/components/axios/Login')
    }
  ]
})
