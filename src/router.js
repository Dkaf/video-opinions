import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/HomePage'
import AdminPage from '@/AdminPage'
import AdminDashboard from '@/AdminDashboard'
import VideoReview from '@/VideoReview'
import MovieReviews from '@/MovieReviews'
import YoutubeReviews from '@/YoutubeReviews'

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
      path: '/movies',
      name: 'Movies',
      component: MovieReviews
    },
    {
      path: '/youtube',
      name: 'Youtube',
      component: YoutubeReviews
    },
    {
      path: '/review/:name',
      name: 'Review',
      component: VideoReview,
      props: true
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    }
  ]
})
