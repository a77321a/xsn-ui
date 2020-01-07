/*
 * @Descripttion: 入口
 * @Author: 辛顺宁
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-07 18:02:19
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import xsnUI from '../packages/index.js'
import '../packages/css/index.css'
Vue.use(xsnUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
