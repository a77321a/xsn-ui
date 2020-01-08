<!--
 * @Descripttion: 通知
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 15:45:16
 -->
<template>
  <transition name="fade">
    <div :style="positionStyle" class="x-notify" :class="type" v-show="show">
      <x-icon v-if="icon" :name="icon" size="14px" />
      {{msg}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XNotify',
  props: {
    type: {
      type: String,
      default () {
        return ''
      }
    },
    top: {
      type: Number,
      default () {
        return 40
      }
    },
    icon: {
      type: String,
      default () {
        return ''
      }
    },
    msg: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    positionStyle () {
      return {
        top: `${this.top}px`
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
