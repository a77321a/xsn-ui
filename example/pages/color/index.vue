<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/packages/css/core/color.scss" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法(具体可参照css/core/color.scss):
    </h6>
    <p class="font-normal">
      使用text-或bg-前缀作为类名来改变文本的颜色或背景的颜色。
      <br>
      eg: text-black; text-primary; bg-black; bg-paimary
    </p>

    <h6>
      主要颜色:
    </h6>
    <div
      class="row"
    >
      <div
        v-for="(item, idx) in config.mainColors"
        :key="'page_main_color_' + idx"
        class="col-sm-4 col-md-2 font-normal pa-sm text-center text-white"
      >
        <div
          class="pa-md overflow-hidden text-ellipsis"
          :class="'bg-' + item"
        >
          {{item}}
        </div>
      </div>
    </div>

    <h6>
      颜色列表:
    </h6>
    <div
      class="row"
    >
      <div
        v-for="(item, idx) in config.colors"
        :key="'page_color_' + idx"
        class="col-sm-4 col-md-2 font-normal pa-sm text-center text-negative"
      >
        <div
          class="pa-md"
          :class="'bg-' + item"
        >
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageColor',
  data () {
    return {
      config
    }
  }
}
</script>

<style>
</style>
