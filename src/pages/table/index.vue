<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 16:27:33
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/table/index.vue"
      target="_blank"
    >样例源码</a>
    <!--  -->

    <x-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      stripe
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />
    <!--  -->
    <x-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
    <!--  -->
    <x-table
      class="mt-md"
      title="插槽"
      hide-bottom
      :tableData="config.slotConfig.tableData"
      :columns="config.slotConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageTable',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
