import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { auth: false, keepAlive: false },
      children:[
        
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: { auth: false, keepAlive: false },
      children:[
        
      ]
    },
    
  ]
})
