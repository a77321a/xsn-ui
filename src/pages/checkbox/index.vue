<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/checkbox/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <div>
      <f-checkbox
        v-model="selection"
        val="test1"
        label="test1"
      />
      <f-checkbox
        v-model="selection"
        val="test2"
        label="test2"
      />
      <f-checkbox
        v-model="selection"
        val="test3"
        label="test3"
      />
    </div>

    <h6>
      不显示图标:
    </h6>
    <div>
      <f-checkbox
        v-model="selection"
        :show-icon="false"
        val="test1"
        label="test1"
      />
      <f-checkbox
        v-model="selection"
        :show-icon="false"
        val="test2"
        label="test2"
      />
      <f-checkbox
        v-model="selection"
        :show-icon="false"
        val="test3"
        label="test3"
      />
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
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageCheckbox',
  data () {
    return {
      config,
      selection: []
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
