import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Archive from '@/components/Archive'
import Review from '@/components/Review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
      path: '/review/:selected',
      name: 'Review',
      component: Review,
      props: true
    }
  ]
})
