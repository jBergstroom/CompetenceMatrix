import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import TestView from './components/TestView'
import Competence from './components/Competence'

/* eslint-disable no-new */

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/hello', component: TestView },
  { path: '/start', component: Competence },
  { path: '/app', component: App },
  { path: '/', redirect: '/app' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
