import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  linkActiveClass:'lactive',
  mode:'hash',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/info',
    name: 'info',
    component: HelloWorld,
  }]
})
