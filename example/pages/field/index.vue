<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/field/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>

    <f-field
      class="mt-md"
      label="名称"
      required
    >
      <f-input
        v-model="inputValue"
      />
    </f-field>

    <h6>
      报错：
    </h6>
    <f-field
      class="mt-md"
      label="电话号码"
      :error="true"
      error-msg="请输入正确的电话号码"
      required
    >
      <f-input
        v-model="inputValue"
        type="number"
      />
    </f-field>

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
  name: 'pageField',
  data () {
    return {
      config,
      inputValue: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
