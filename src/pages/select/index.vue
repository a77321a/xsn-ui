<template>
  <div>
    <a href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/select/index.vue" target="_blank">
      样例源码
    </a>
    <h6>
      基本用法:
    </h6>
    <f-select
      v-model="selection"
      :options="config.options"
    />
    <h6>
      underline:
    </h6>
    <f-select
      v-model="selection"
      :options="config.options"
      border="underline"
    />
    <h6>
      可筛选：
    </h6>
    <f-select
      v-model="selection"
      :options="config.options"
      filter
    />

    <h6>
      可多选
    </h6>
    <f-select
      v-model="selections"
      :options="config.options"
      filter
      mutiple
      clearable
    />

    <h6>
      禁用
    </h6>
    <f-select
      v-model="selection"
      disabled
      :options="config.options"
    />

    <h6>
      自动完成
    </h6>
    <f-select
      v-model="autoVal"
      autocomplete
      :options="autoOpts"
      @search="_search"
    />
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
  name: 'pageFormSelect',
  data () {
    return {
      config,
      selection: '2',
      selections: [],
      autoVal: '',
      autoOpts: []
    }
  },
  methods: {
    _search (value) {
      this.autoOpts = []
      if (value) {
        setTimeout(() => {
          this.autoOpts = [
            {
              label: 'res1',
              value: 'res1'
            },
            {
              label: 'res2',
              value: 'res2'
            },
            {
              label: 'res3',
              value: 'res3'
            }
          ]
        }, 200)
      }
    }
  }
}
</script>

<style>
</style>
