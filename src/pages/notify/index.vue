<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/notify/index.vue"
      target="_blank"
    >样例源码</a>
    <h6>基本用法:</h6>
    <x-btn label="info" bgcolor="info" size="md" @click="_click('info')" />

    <x-btn label="warning" bgcolor="warning" size="md" @click="_click('warning')" />

    <x-btn label="error" bgcolor="negative" size="md" @click="_click('error')" />

    <x-btn label="success" bgcolor="positive" size="md" @click="_click('success')" />

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
  data() {
    return {
      config
    }
  },
  methods: {
    _click(type) {
      this.$notify[type](type + ' notify')
    }
  }
}
</script>

<style>
</style>
