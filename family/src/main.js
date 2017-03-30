// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

//定义路由组件
const WorkerMap=require('./components/workermap.vue')
const WorkerAge=require('./components/workerage.vue')


const routes=[
  {path:'/',redirect:'workerage'},//todo33
  {path:'/workermap',component:WorkerMap},
  {path:'/workerage',component:WorkerAge}
]

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
