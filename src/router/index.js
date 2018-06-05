import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: () => import('@/components/Details')
    }, {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/components/Detail')
    }, {
      path: '/teacher',
      name: 'Teacher',
      component: () => import('@/components/Teacher')
    }
  ]
})
