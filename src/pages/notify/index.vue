<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/notify/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <f-btn
      label="info"
      bgColor="info"
      size="md"
      @click="_click('info')"
    />

    <f-btn
      label="warning"
      bgColor="warning"
      size="md"
      @click="_click('warning')"
    />

    <f-btn
      label="error"
      bgColor="negative"
      size="md"
      @click="_click('error')"
    />

    <f-btn
      label="success"
      bgColor="positive"
      size="md"
      @click="_click('success')"
    />

    <!--  -->
    <f-table
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
