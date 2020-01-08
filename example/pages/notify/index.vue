<!--
 * @Descripttion: 通知
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 16:21:06
 -->
<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/notify/index.vue"
      target="_blank"
    >样例源码</a>
    <h6>基本用法:</h6>
    <x-btn type="info" @click="handleClick('info')">信息</x-btn>
    <x-btn type="warning" @click="handleClick('warning')">警告</x-btn>
    <x-btn type="error" @click="handleClick('error')">失败</x-btn>
    <x-btn type="success" @click="handleClick1('success')">成功</x-btn>
    <!--  -->
    <div class="f-coad-wrapper">
      <pre>
        &lt;template&gt;
          &lt;x-btn type="info" @click="handleClick('info')"&gt;信息&lt;/x-btn&gt;
          &lt;x-btn type="warning" @click="handleClick('warning')"&lt;警告&gt;/x-btn&gt;
          &lt;x-btn type="error" @click="handleClick('error')"&gt;失败&lt;/x-btn&gt;
          &lt;x-btn type="success" @click="handleClick('success')"&gt;成功&lt;/x-btn&gt;
        &lt;/template&gt;
        export default {
          methods: {
            handleClick (type) {
              this.$notify[type](type + ' notify')
            },
            handleClick1(){
              this.$notify({
                type: type,
                msg: msg,
              })
            }
          }
        }
      </pre>
    </div>
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageNotify',
  data () {
    return {
      config
    }
  },
  methods: {
    handleClick (type) {
      this.$notify[type](type + ' notify')
    }
    // handleClick1 () {
    //   this.$notify.success({
    //     duration: 100000,
    //     msg: 'success notify'
    //   })
    // }
  }
}
</script>

<style>
</style>
