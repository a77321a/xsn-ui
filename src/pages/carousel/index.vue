<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/carousel/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <div class="full-width">
      <f-carousel height="350px">
        <f-carousel-item>
          <div class="text-white text-bold fit row items-center flex-center bg-negative" style="font-size: 24px">
            carousel-item-1
          </div>
        </f-carousel-item>
        <f-carousel-item>
          <div class="text-white text-bold fit row items-center flex-center bg-blue" style="font-size: 24px">
            carousel-item-2
          </div>
        </f-carousel-item>
        <f-carousel-item>
          <div class="text-white text-bold fit row items-center flex-center bg-primary" style="font-size: 24px">
            carousel-item-3
          </div>
        </f-carousel-item>
        <f-carousel-item>
          <div class="text-white text-bold fit row items-center flex-center bg-positive" style="font-size: 24px">
            carousel-item-4
          </div>
        </f-carousel-item>
      </f-carousel>
    </div>

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
      title="事件"
      hide-bottom
      :tableData="config.eventConfig.tableData"
      :columns="config.eventConfig.columns"
    />

    <!--  -->
    <f-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />

    <f-table
      class="mt-md"
      title="子组件"
      hide-bottom
      :tableData="config.childSettingConfig.tableData"
      :columns="config.childSettingConfig.columns"
    />
    <f-table
      class="mt-md"
      title="子组件插槽"
      hide-bottom
      :tableData="config.childSlotConfig.tableData"
      :columns="config.childSlotConfig.columns"
    />
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageCarousel',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
