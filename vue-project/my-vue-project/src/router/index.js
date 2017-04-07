import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import pageQuiList from '../pages/pageQuiList'
import pageQuiNav from '../pages/pageQuiNav'
import pageQuiButton from '../pages/pageQuiButton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'pageQuiList',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'pageQuiNav',
      component: pageQuiNav
    },
    {
      path: '/btn',
      name: 'pageQuiButton',
      component: pageQuiButton
    }
  ]
})
