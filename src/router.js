import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Details from './views/Details.vue'
import Summary from './views/Summary.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    }
  ]
})
