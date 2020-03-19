<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-03-19 09:40:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 14:28:04
 -->
<template>
  <div class="x-popover" v-close-overlay>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XPopover',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      const parent = this.$el.parentNode
      if (
        parent.style.position !== 'absolute' ||
        parent.style.position !== 'fixed'
      ) {
        parent.style.position = 'relative';
      }

      const handler = _ => {
        this.toggle()
        this.$el.style.top = parent.offsetHeight + 'px';
      }
      this._handler = handler
      parent.addEventListener('click', handler)

      const resizeHandler = () => {
        this.resize()
      };
      this._resizeHandler = resizeHandler
      window.addEventListener('resize', resizeHandler)
    })
  },
  destroyed () {
    const parent = this.$el.parentNode
    parent.removeEventListener('click', this._handler)

    window.removeEventListener('resize', this.resizeHandler)
  },
  watch: {
    value: {
      immediate: true,
      handler (val, oldVal) {
        this.$nextTick(() => {
          val ? this.show() : this.hide()
        })
      }
    }
  },
  methods: {
    show () {
      this.$el.style.display = 'block';
      this.resize()
      this.$emit('input', true)
    },
    hide () {
      this.$el.style.display = 'none';
      this.$emit('input', false)
    },
    toggle () {
      this.$el.style.display =
        this.$el.style.display === 'block' ? this.hide() : this.show()
    },
    resize () {
      this.$el.style.top = this.$el.parentNode.offsetHeight + 'px';
    }
  }
}
</script>

<style></style>
