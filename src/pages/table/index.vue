<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/table/index.vue" target="_blank">
      样例源码
    </a>
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
    <!--  -->
    <f-table
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
