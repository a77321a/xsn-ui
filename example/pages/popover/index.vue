<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/popover/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法（在没有默认slot的组件中无法使用，必须用元素包裹才可以）:
    </h6>
    <p>
      可以通过v-model控制开关
      <br>
      宽度默认是父元素的宽度。
      <br>
      点击父元素自动显示隐藏，点击其他地方直接隐藏（display: block / none）
    </p>

    <div class="bg-primary pa-sm border-radius mt-md" style="width: 100px">
      <span class="inline-block full-width text-white font-normal text-center cursor-pointer">点击弹出</span>
      <x-popover class="pa-sm font-normal">
        这是弹出框popover
      </x-popover>
    </div>

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
import config from './config'
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

<style>
</style>
