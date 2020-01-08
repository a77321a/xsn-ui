<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 14:12:44
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/card/index.vue"
      target="_blank"
    >样例源码</a>

    <h3>基本用法:</h3>
    <div>
      <x-card header="卡片标题">
        <x-btn slot="right" type="text" @click="_click">操作</x-btn>
        <p>这里是body部分插槽的内容</p>
      </x-card>
    </div>
    <h3>无标题卡片:</h3>
    <div>
      <x-card>
        <p>这里是body部分插槽的内容</p>
      </x-card>
    </div>
    <h3>无展开卡片:</h3>
    <div>
      <x-card header="卡片标题" :drop="false">
        <x-btn slot="right" type="text" @click="_click">操作</x-btn>
        <p>这里是body部分插槽的内容</p>
      </x-card>
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
  data() {
    return {
      config
    }
  },
  methods: {
    _click() {
      this.$notify.success('click success')
    }
  }
}
</script>

<style>
</style>
