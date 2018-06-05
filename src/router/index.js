import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, _, next) => {
  if (to.path === '/teacher') {
    document.title = '师资力量'
  } else {
    document.title = 'Hust'
  }
  next()
})

export default router
