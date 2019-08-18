import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import login from '@/components/login'
import videoPage from '@/components/videoPage'
import videoList from '@/components/videoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/VideoPage',
      name: 'VideoPage',
      component: videoPage
    },
    {
      path: '/VideoList',
      name: 'VideoList',
      component: videoList
    }
  ]
})
