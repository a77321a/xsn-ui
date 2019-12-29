<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/directives/index.vue" target="_blank">
      样例源码
    </a>
    <!--  -->
    <f-table
      class="mt-md"
      title="指令"
      hide-bottom
      :tableData="config.tableConfig.tableData"
      :columns="config.tableConfig.columns"
    />

    <h6>
      Loading:
    </h6>
    <f-btn
      label="loading"
      @click="toggleLoading"
    />
    <div
      class="text-center bg-light mt-md"
      style="width: 400px; height: 300px; line-height: 300px"
      v-loading="loading"
    >
      LOADING...
    </div>

  </div>
</template>

<script>
import config from './config'
export default {
  name: 'pageDirectives',
  data () {
    return {
      config,
      loading: true
    }
  },
  methods: {
    toggleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>

<style>
</style>
