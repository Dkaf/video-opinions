import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import Home from '@/components/Home'
import About from '@/components/About'
import Archive from '@/components/Archive'
import Review from '@/components/Review'
import Admin from '@/components/Admin'
import AdminDashboard from '@/components/AdminDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Home
    },
    {
      path: '/youtube',
      name: 'YouTube',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/review/:name',
      name: 'Review',
      component: Review,
      props: true
    },
    {
      path: '/admin',
      redirect: (store.state.token) ? '/admin/dashboard' : null,
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    }
  ]
})
