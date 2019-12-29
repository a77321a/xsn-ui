const CloseOverlayDirective = {};
CloseOverlayDirective.install = Vue => {
  Vue.directive('CloseOverlay', {
    inserted (el, binding, vnode) {
      const handler = function (e) {
        if (!el.contains(e.target) && !el.parentNode.contains(e.target)) {
          el.style.display = 'none'
        }
      }
      el._close = handler
      document.body.addEventListener('click', handler)
    },
    unbind (el) {
      document.body.removeEventListener('click', el._close)
      delete el._close
    }
  })
}

export default CloseOverlayDirective
