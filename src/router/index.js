import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Homepage from '@/components/Homepage'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
