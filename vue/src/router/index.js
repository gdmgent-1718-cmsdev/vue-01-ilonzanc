import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CreateArticle from '@/components/CreateArticle'
import ReadArticle from '@/components/ReadArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReadArticle',
      component: ReadArticle
    },
    {
      path: '/create',
      name: 'CreateArticle',
      component: CreateArticle
    }
  ]
})
