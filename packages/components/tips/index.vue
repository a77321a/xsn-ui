<script>
export default {
  name: 'FTips',
  mounted () {
    this.$nextTick(() => {
      const parent = this.$el.parentNode
      console.log(parent)
      if (parent.style.position !== 'absolute' || parent.style.position !== 'fixed') {
        parent.style.position = 'relative'
      }

      let _self = this
      const mouseover = function () {
        _self.$el.style.display = 'block'
        _self.$el.style.bottom = parent.offsetHeight + 5 + 'px'
      }
      _self._mouseover = mouseover

      const mouseleave = function () {
        _self.$el.style.display = 'none'
      }
      parent.addEventListener('mouseover', mouseover)
      parent.addEventListener('mouseleave', mouseleave)
    })
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'f-tips'
      },
      [
        this.$slots.default
      ]
    )
  }
}
</script>
