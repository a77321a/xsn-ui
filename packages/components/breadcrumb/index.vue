<!--
 * @Descripttion: 面包屑组件
 * @Author: 辛顺宁
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 17:32:36
 -->
<template>
  <div class="x-breadcrumb">
    <template v-for="(opt, idx) in options">
      <router-link
        :key="'x_breadcrumb_link' + idx"
        :to="{
          path: opt.path,
          query: opt.query,
          param: opt.param
        }"
        :replace="replace"
        :class="opt.path === $route.path ? 'active' : ''"
      >
        <x-icon v-if="opt.icon" :name="opt.icon" style="color: inherit; font-size: inherit" />
        {{opt.label}}
      </router-link>
      <span
        v-if="idx < options.length - 1"
        :key="'x_breadcrumb_separator' + idx"
        class="pl-sm pr-sm"
      >{{separator}}</span>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.x-breadcrumb {
  font-size: 14px;
}
</style>
<script>
export default {
  name: 'XBreadcrumb',
  props: {
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    separator: {
      type: String,
      default () {
        return '>'
      }
    },
    replace: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>
