import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/HomePage'
import AdminPage from '@/AdminPage'
import VideoReview from '@/VideoReview'

Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/review/:name',
      name: 'Review',
      component: VideoReview,
      props: true
    }
  ]
})
