<!--
 * @Descripttion:
 * @Author:
 * @Date: 2019-12-29 17:02:27
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 15:11:19
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/btn/index.vue"
      target="_blank"
    >样例源码</a>
    <h4>不同尺寸:</h4>
    <p>Button组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <x-btn type="primary" size="small" @click="_click">小型按钮</x-btn>
    <x-btn type="primary" size="medium" @click="_click">中等按钮</x-btn>
    <x-btn type="primary" size="large" @click="_click">大型按钮</x-btn>
    <h4>基本用法:</h4>
    <x-btn>默认按钮</x-btn>
    <x-btn type="primary">主要按钮</x-btn>
    <x-btn type="success">成功按钮</x-btn>
    <x-btn type="error">失败按钮</x-btn>
    <x-btn type="text">文字按钮</x-btn>
    <x-btn type="primary" round>圆角按钮</x-btn>
    <x-btn @click="_click" icon="add" circle></x-btn>
    <p></p>
    <x-btn type="primary" long>长按钮</x-btn>

    <h4>禁用</h4>
    <x-btn size="medium" type="primary" disabled>禁用按钮</x-btn>
    <h4>加载</h4>
    <x-btn label="loading" type="primary" size="medium" :loading="true">加载中</x-btn>
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
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageBtn',
  data () {
    return {
      config
    }
  },
  methods: {
    _click () {
      // this.$notify.success('click success')
    }
  }
}
</script>

<style></style>
