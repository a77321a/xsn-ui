<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-03-19 09:40:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 14:24:57
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/popover/index.vue"
      target="_blank"
    >
      样例源码
    </a>
    <h6>
      基本用法（在没有默认slot的组件中无法使用，必须用元素包裹才可以）:
    </h6>
    <p>
      可以通过v-model控制开关
      <br />
      宽度默认是父元素的宽度。
      <br />
      点击父元素自动显示隐藏，点击其他地方直接隐藏（display: block / none）
    </p>
    <x-btn>
      <span>点击弹出</span>
      <x-popover class=" font-normal">
        这是弹出框popover
      </x-popover>
    </x-btn>

    <x-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
    <!--  -->
    <x-table
      class="mt-md"
      title="插槽"
      hide-bottom
      :tableData="config.slotConfig.tableData"
      :columns="config.slotConfig.columns"
    />
  </div>
</template>

<script>
import config from './config';
export default {
  name: 'pagePopover',
  data () {
    return {
      config
    }
  },
  methods: {}
}
</script>

<style></style>
