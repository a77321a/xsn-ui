<!--
 * @Descripttion: iconfont
 * @Author:
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 17:31:49
 -->
<template>
  <i
    :class="['iconfont icon' + name, color ? 'text-' + color : '']"
    :style="{fontSize: size}"
    @click="_click"
  ></i>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    name: {
      type: String,
      default () {
        return ''
      }
    },
    size: {
      type: String,
      default () {
        return '20px'
      }
    },
    color: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    _click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
@import './source/iconfont.css';
</style>
