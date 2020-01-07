<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-07 17:44:04
 -->
<template>
  <div class="x-card">
    <div class="toolbar">
      <div class="toolbar-title">{{title}}</div>
      <slot name="right"></slot>
      <x-btn
        size="small"
        :icon="isShowBody ? 'arrowTop-fill' : 'arrowBottom'"
        circle
        class="ml-sm"
        @click="_toogleShowBody"
      />
    </div>
    <div class="x-card-body" :class="bodyClass" :style="bodyStyle" v-show="isShowBody">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCard',
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    bodyClass: {
      type: String,
      default () {
        return ''
      }
    },
    bodyStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isShowBody: true
    }
  },
  methods: {
    _toogleShowBody () {
      this.isShowBody = !this.isShowBody
    }
  }
}
</script>
