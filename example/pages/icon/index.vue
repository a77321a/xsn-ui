<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/icon/index.vue" target="_blank">
      样例源码
    </a>
    <p>
      按钮素材来自于<a href="https://www.iconfont.cn/" target="_blank">阿里巴巴矢量图标图</a>
    </p>
    <h6>
      基本用法:
    </h6>
    <x-icon
      name="settings"
    />
    <h6>
      name
    </h6>
    <x-icon
      name="down"
    />
    <x-icon
      name="address"
    />
    <x-icon
      name="camera"
    />
    <x-icon
      name="home"
    />
    <x-icon
      name="brightness"
    />

    <h6>
      color
    </h6>
    <x-icon
      name="settings"
      color="positive"
    />
    <x-icon
      name="settings"
      color="primary"
    />
    <x-icon
      name="settings"
      color="negative"
    />
    <x-icon
      name="settings"
      color="light"
    />
    <x-icon
      name="settings"
      color="dark"
    />

    <h6>
      size
    </h6>
    <x-icon
      name="settings"
      size="9px"
    />
    <x-icon
      name="settings"
      size="14px"
    />
    <x-icon
      name="settings"
      size="20px"
    />
    <x-icon
      name="settings"
      size="24px"
    />
    <x-icon
      name="settings"
      size="30px"
    />

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
  name: 'pageIcon',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
