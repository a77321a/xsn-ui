<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 16:37:47
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/directives/index.vue"
      target="_blank"
    >样例源码</a>
    <!--  -->
    <x-table
      class="mt-md"
      title="指令"
      hide-bottom
      :tableData="config.tableConfig.tableData"
      :columns="config.tableConfig.columns"
    />

    <h6>Loading:</h6>
    <x-btn label="loading" @click="toggleLoading">{{loading?'取消加载':'加载'}}</x-btn>
    <div
      class="text-center bg-light mt-md"
      style="width: 400px; height: 300px; line-height: 300px"
      v-loading="loading"
    >LOADING...</div>
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageDirectives',
  data () {
    return {
      config,
      loading: true
    }
  },
  methods: {
    toggleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>

<style>
</style>
