<!--
 * @Descripttion:
 * @Author:
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 18:27:43
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/btn/index.vue"
      target="_blank"
    >样例源码</a>
    <h6>基本用法:</h6>
    <x-btn size="sm" @click="_click">size:sm</x-btn>

    <x-btn size="md" @click="_click">size:md</x-btn>
    <x-btn size="lg" bgcolor="negative" @click="_click">size:lg</x-btn>

    <h6>禁用</h6>
    <x-btn size="md" disabled>禁用按钮</x-btn>

    <h6>loading</h6>
    <x-btn label="loading" size="md" :loading="true">加载中</x-btn>

    <h6>flip</h6>
    <x-btn label="flip" icon="add" size="md" flip>图标</x-btn>

    <!--  -->
    <f-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />

    <!--  -->
    <f-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageBtn',
  data() {
    return {
      config
    }
  },
  methods: {
    _click() {
      // this.$notify.success('click success')
    }
  }
}
</script>

<style>
</style>
