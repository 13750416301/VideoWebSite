import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import login from '@/components/login'
import videoPage from '@/components/videoPage'
import videoList from '@/components/videoList'
import videoListByArea from '@/components/videoListByArea'
import imageList from '@/components/imageList'
import imageListByArea from '@/components/imageListByArea'
import imagePage from '@/components/imagePage'
import videoTest from '@/components/videoTest'
import articleList from '@/components/articleList'
import articleListByArea from '@/components/articleListByArea'
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
      path: '/VideoListByArea',
      name: 'VideoListByArea',
      component: videoListByArea
    },
    {
      path: '/ImageList',
      name: 'ImageList',
      component: imageList
    },
    {
      path: '/ImageListByArea',
      name: 'ImageListByArea',
      component: imageListByArea
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
      path: '/ArticleListByArea',
      name: 'ArticleListByArea',
      component: articleListByArea
    },
    {
      path: '/Space',
      name: 'Space',
      component: space
    }
  ]
})
