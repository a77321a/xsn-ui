/*
 * @Descripttion: 处理
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 16:53:52
 */
import Notify from './notify.vue'

const XNotify = {
  install (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('Notify', Notify)

    function init (args) {
      // 清除已有提醒
      const exsitNotify = document.getElementsByClassName('x-notify')
      let top = 40
      if (exsitNotify.length > 0) {
        for (let i = exsitNotify.length - 1; i >= 0; i--) {
          top += Number((window.getComputedStyle(exsitNotify[i]).height).replace('px', '')) + 10
        }
      }

      let VueXNotify = Vue.extend({
        render (h) {
          let props = {
            top: top,
            type: args.type,
            msg: args.msg,
            show: this.show,
            icon: args.icon
          }
          return h('notify', { props })
        },
        data () {
          return {
            show: false
          }
        }
      })
      let newNotify = new VueXNotify()
      let vm = newNotify.$mount()
      let el = vm.$el
      document.body.appendChild(el)
      vm.show = true
      let timeout = setTimeout(() => {
        clearTimeout(timeout)
        vm.show = false
        if (document.body.contains(el)) {
          document.body.removeChild(el)
          newNotify.$destroy()
          let isExsitNotify = document.getElementsByClassName('x-notify')
          let top = 40
          if (isExsitNotify.length > 0) {
            for (let i = 0; i < isExsitNotify.length; i++) {
              isExsitNotify[i].style.transition = 'all .2s'
              isExsitNotify[i].style.top = top + 'px'
              top += Number((window.getComputedStyle(isExsitNotify[i]).height).replace('px', '')) + 10
            }
          }
        }
        vm = null

        args.callback && (typeof args.callback === 'function') && args.callback()
      }, args.duration ? args.duration : '3000')
    }
    Vue.prototype.$notify = {
      info (msg) {
        if (!msg) return
        init({
          type: 'info',
          msg: msg
        })
      },
      warning (msg) {
        if (!msg) return
        init({
          type: 'warning',
          msg: msg
        })
      },
      error (msg) {
        if (!msg) return
        init({
          type: 'error',
          msg: msg
        })
      },
      success (msg) {
        if (!msg) return
        init({
          type: 'success',
          msg: msg
        })
      }
    }
  }
}
export default XNotify
