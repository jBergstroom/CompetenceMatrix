import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import List from './components/List'
import Competence from './components/Competence'
import SkillsView from './components/Skills'
import _persons from './data/personal.json'
import _skills from './data/skills.json'
/* eslint-disable no-new */

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    persons: _persons.ListOfPersons,
    skills: _skills
  }
})

const routes = [
  { path: '/list', component: List },
  { path: '/start', component: Competence },
  { path: '/', redirect: '/start' },
  { path: '/skill/:id', component: SkillsView }
]

window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
