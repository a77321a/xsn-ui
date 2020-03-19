<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/modal/index.vue"
      target="_blank"
    >
      样例源码
    </a>
    <h6>
      基本用法(v-model控制开关):
    </h6>

    <x-btn label="点击弹窗" @click="show.middle = true" />
    <x-btn label="左侧弹窗" @click="show.left = true" />
    <x-btn label="右侧弹窗" @click="show.right = true" />
    <x-btn label="顶部弹窗" @click="show.top = true" />
    <x-btn label="底部弹窗" @click="show.bottom = true" />
    <x-modal v-model="show.middle" title="title">
      <template slot="body">
        <div class="text-center pt-lg">
          这是中间弹窗
        </div>
      </template>
      <template slot="footer">
        <div class="text-right full-width">
          <x-btn icon="save" label="保存" bg-color="positive" />
        </div>
      </template>
    </x-modal>

    <x-modal v-model="show.left" position="left">
      <template slot="body">
        <div class="text-center pt-lg">
          这是左侧弹窗
        </div>
      </template>
    </x-modal>

    <x-modal v-model="show.right" position="right">
      <template slot="body">
        <div class="text-center pt-lg">
          这是右侧弹窗
        </div>
      </template>
    </x-modal>

    <x-modal v-model="show.top" position="top">
      <template slot="body">
        <div class="text-center pt-lg">
          这是顶部弹窗
        </div>
      </template>
    </x-modal>

    <x-modal v-model="show.bottom" position="bottom">
      <template slot="body">
        <div class="text-center pt-lg">
          这是底部弹窗
        </div>
      </template>
    </x-modal>

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
  name: 'pageModal',
  data () {
    return {
      config,
      show: {
        middle: false,
        left: false,
        top: false,
        right: false,
        bottom: false
      }
    }
  }
}
</script>

<style></style>
