<!--
 * @Descripttion: 通知
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 14:15:48
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/notify/index.vue"
      target="_blank"
    >样例源码</a>
    <h6>基本用法:</h6>
    <x-btn type="info" @click="_click('info')">信息</x-btn>
    <x-btn type="warning" @click="_click('warning')">警告</x-btn>
    <x-btn type="error" @click="_click('error')">失败</x-btn>
    <x-btn type="success" @click="_click('success')">成功</x-btn>
    <!--  -->
    <x-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageNotify',
  data () {
    return {
      config
    }
  },
  methods: {
    _click (type) {
      this.$notify[type](type + ' notify')
    }
  }
}
</script>

<style>
</style>
