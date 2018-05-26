import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/List';
import Detail from '@/components/Detail';

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
      component: () => import('@/components/Grid')
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
