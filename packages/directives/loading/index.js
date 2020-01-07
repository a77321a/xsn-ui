/* eslint-disable no-new */
import Vue from 'vue'
import Loading from './loading'

const loadingDirective = {};
loadingDirective.install = Vue => {

  Vue.directive('loading', {
    bind (el, binding) {
      if (el.style.position !== 'absolute' && el.style.position !== 'fixed') {
        el.style.position = 'relative'
      }
      const loading = Vue.extend(Loading)
      const _vm = new loading({
        data () {
          return {
            show: binding.value
          }
        }
      })
      el._vm = _vm
      const node = document.createElement('div')
      el.appendChild(node)

      _vm.$mount(node)

    },
    update (el, binding) {
      el._vm.show = binding.value
    },
    unbind (el) {
      el._vm = null
    }
  })
}

export default loadingDirective
