// Vue Stuff
import Vue from 'vue'
import Router from 'vue-router'

// Import Pages for the Router
import Home from '@/components/Home'
import About from '@/components/About'
import Resources from '@/components/Resources'
import Login from '@/components/Login'
import Lounge from '@/components/Login/Lounge'
import Lab from '@/components/Login/Lab'
import Dashboard from '@/components/Dashboard'
import NotFound from '@/components/NotFound'
import Api from '@/components/Api'


// Setup Router Paths
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home redirect',
      component: Home
    },
    {
  	  path: '/home',
  	  name: 'home',
  	  component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: 'lounge',
          component: Lounge
        },
        {
          path: 'lab',
          component: Lab
        }
        ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    }
  ]
})
