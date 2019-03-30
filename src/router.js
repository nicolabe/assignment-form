import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Details from './views/Details.vue'
import Activities from './views/Activities.vue'

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
      path: '/activities',
      name: 'activities',
      component: Activities
    }
  ]
})
