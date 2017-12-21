import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)
export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          label: 'Dashboard'
        },
        component: resolve => require(['@/views/Dashboard'], resolve)
      }
    ]
  }]
})
