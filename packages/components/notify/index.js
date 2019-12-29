import Notify from './notify.vue'

const FNotify = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('Notify', Notify)

    function init(args) {

      // 清除已有提醒
      const exsitNotify = document.getElementsByClassName('f-notify')
      if (exsitNotify.length > 0) {
        for (let i = exsitNotify.length-1 ; i >= 0 ; i--) {
          exsitNotify[i].remove()
        }
      }

      let VueFNotify = Vue.extend({
        render(h) {
          let props = {
            type: args.type,
            msg: args.msg,
            show: this.show,
            icon: args.icon
          }
          return h('notify', {props})
        },
        data() {
          return {
            show: false
          }
        }
      })
      let newNotify = new VueFNotify()
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
        }

        vm = null

        args.callback && (typeof args.callback === 'function') && args.callback()
      }, args.duration ? args.duration : '2000')
    }

    Vue.prototype.$notify = {
      info(msg) {
        if (!msg) return
        init({
          type: 'info',
          msg: msg
        })
      },
      warning(msg) {
        if (!msg) return
        init({
          type: 'warning',
          msg: msg
        })
      },
      error(msg) {
        if (!msg) return
        init({
          type: 'error',
          msg: msg
        })
      },
      success(msg) {
        if (!msg) return
        init({
          type: 'success',
          msg: msg
        })
      }
    }
  }
}
export default FNotify
