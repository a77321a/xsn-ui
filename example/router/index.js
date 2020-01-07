import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index')
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('@/pages/css/index')
    },
    {
      path: '/color',
      name: 'color',
      component: () => import('@/pages/color/index')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('@/pages/icon/index')
    },
    {
      path: '/btn',
      name: 'btn',
      component: () => import('@/pages/btn/index')
    },
    {
      path: '/field',
      name: 'field',
      component: () => import('@/pages/field/index')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('@/pages/input/index')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('@/pages/radio/index')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/pages/select/index')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/pages/checkbox/index')
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: () => import('@/pages/datepicker/index')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('@/pages/modal/index')
    },
    {
      path: '/popover',
      name: 'popover',
      component: () => import('@/pages/popover/index')
    },
    {
      path: '/tips',
      name: 'tips',
      component: () => import('@/pages/tips/index')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/pages/tree/index')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/pages/table/index')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('@/pages/directives/index')
    },
    {
      path: '/notify',
      name: 'notify',
      component: () => import('@/pages/notify/index')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('@/pages/card/index')
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: () => import('@/pages/breadcrumb/index')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('@/pages/carousel/index')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/pages/progress/index')
    }
  ]
})
