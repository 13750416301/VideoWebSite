import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import login from '@/components/login'
import videoPage from '@/components/videoPage'
import videoList from '@/components/videoList'
import imageList from '@/components/imageList'
import imagePage from '@/components/imagePage'
import videoTest from '@/components/videoTest'
import articleList from '@/components/articleList'
import space from '@/components/space'

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
    },
    {
      path: '/ImageList',
      name: 'ImageList',
      component: imageList
    },
    {
      path: '/ImagePage',
      name: 'ImagePage',
      component: imagePage
    },
    {
      path: '/VideoTest',
      name: 'VideoTest',
      component: videoTest
    },
    {
      path: '/ArticleList',
      name: 'ArticleList',
      component: articleList
    },
    {
      path: '/Space',
      name: 'Space',
      component: space
    }
  ]
})
