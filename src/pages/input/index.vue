<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/input/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <f-input
      v-model="inputValue"
    />

    <!-- underline -->
    <h6>
      number（min: 1, max: 10）
    </h6>
    <f-input
      v-model="inputValue"
      type="number"
      :min="1"
      :max="10"
    />

    <!-- underline -->
    <h6>
      underline ( border="underline" )
    </h6>
    <f-input
      v-model="inputValue"
      border="underline"
    />

    <h6>
      clearable
    </h6>
    <f-input
      v-model="inputValue"
      clearable
    />

    <!-- after -->
    <h6>
      after ( { icon: 'telephone', handler() } )
    </h6>
    <f-input
      v-model="inputValue"
      border="underline"
      :after="{
        icon: 'telephone',
        handler () {
          afterHandler()
        }
      }"
    />

    <h6>
      disabled
    </h6>
    <f-input
      v-model="inputValue"
      disabled
    />

    <h6>
      textarea
    </h6>
    <f-input
      v-model="inputValue"
      type="textarea"
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
  name: 'pageFormInput',
  data () {
    return {
      config,
      inputValue: ''
    }
  },
  methods: {
    _search () {
      console.log('search')
    },
    afterHandler () {
      alert('after handler')
    }
  }
}
</script>

<style>
</style>
