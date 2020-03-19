<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/progress/index.vue"
      target="_blank"
      >样例源码</a
    >
    <h6>基本用法:</h6>

    <x-btn label="change percentage" @click="_click" />

    <p>默认(最小宽度150)：</p>
    <x-progress class="mt-md" :percentage="percentage" />

    <p>显示进度文本:</p>
    <x-progress class="mt-md" :percentage="percentage" show-label />

    <p>改变颜色</p>
    <x-progress
      class="mt-md"
      color="positive"
      :percentage="percentage"
      show-label
    />

    <p>改变宽度(300px)</p>
    <x-progress class="mt-md" width="300px" :percentage="percentage" />

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
import config from './config';
export default {
  name: 'pageProgress',
  data () {
    return {
      config,
      percentage: 50
    }
  },
  methods: {
    _click () {
      this.percentage = Math.random().toFixed(2) * 100
    }
  }
}
</script>
