<!--
 * @Descripttion: 通知
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors:
 * @LastEditTime: 2020-01-08 10:42:59
 -->
<template>
  <transition name="fade">
    <div class="x-notify" :class="type" v-show="show">
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
