<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/card/index.vue" target="_blank">
      样例源码
    </a>

    <h6>
      基本用法:
    </h6>
    <div>
      <f-card
        title="card title"
      >
        <x-btn
          slot="top-right"
          label="top-right-btn"
          text-color="primary"
          flip
          @click="_click"
        />
        <p>
          这里是body部分插槽的内容
        </p>
      </f-card>
    </div>

    <!--  -->
    <x-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />

    <!--  -->
    <x-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.slotConfig.tableData"
      :columns="config.slotConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageCard',
  data () {
    return {
      config
    }
  },
  methods: {
    _click () {
      this.$notify.info('click success')
    }
  }
}
</script>

<style>
</style>
