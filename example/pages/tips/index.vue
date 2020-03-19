<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-03-19 09:40:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 14:47:33
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/tips/index.vue"
      target="_blank"
    >
      样例源码
    </a>

    <h6>
      基本用法（在没有默认slot的组件中无法使用，必须用元素包裹才可以）：
    </h6>
    <span class="inline-block cursor-pointer">
      <x-icon type="warning" name="warning" />
      <x-tips>
        tips message
      </x-tips>
    </span>
    <span class="inline-block cursor-pointer">
      <x-btn>默认按钮</x-btn>
      <x-tips>
        tips message
      </x-tips>
    </span>

    <!--  -->
    <x-table
      class="mt-md"
      title="slot"
      hide-bottom
      :tableData="config.slotConfig.tableData"
      :columns="config.slotConfig.columns"
    />
  </div>
</template>

<script>
import config from './config';
export default {
  name: 'pageTips',
  data () {
    return {
      config
    }
  }
}
</script>

<style></style>
