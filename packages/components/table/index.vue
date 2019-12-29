<template>
  <div class="fit" v-loading="loading">
    <slot name="top"></slot>
    <div
      v-if="!$scopedSlots.top && (title || $scopedSlots['top-right'])"
      class="toolbar no-padding"
    >
      <h5 class="no-margin no-padding text-bold toolbar-title">{{ title ? title : '' }}</h5>
      <div v-if="$scopedSlots['top-right']">
        <slot
          name="top-right"
        />
      </div>
    </div>

    <table class="f-table">
      <thead v-if="!noHeader">
        <slot name="head" :columns="columns"></slot>
        <tr v-if="!$scopedSlots.head">
          <th
            v-for="(col, thidx) in columns"
            :key="'thead_th_' + thidx"
            :class="[col.align ? 'text-' + col.align : 'text-left', fixed.includes('left') && thidx === 0 ? 'sticky-left' : '', fixed.includes('right') && thidx === columns.length - 1 ? 'sticky-right' : '']"
            :style="{
              width: col.width ? col.width : 'auto'
            }"
          >
            {{ col.name }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot name="body" :row="_computedTableData" :columns="columns"></slot>
        <template v-if="!$scopedSlots.body && _computedTableData.length > 0 && !loading">
          <tr
            v-for="(tr, tridx) in _computedTableData"
            :key="'tbody_tr_' + tridx"
          >
            <td
              v-for="(col, tdidx) in columns"
              :key="'tbody_tr_' + tridx + 'thead_td_' + tdidx"
              :class="col.align ? 'text-' + col.align : 'text-left'"
              :style="{
                width: col.width ? col.width : ''
              }"
            >
              {{ tr[col.field] }}
            </td>
          </tr>
        </template>

        <!-- no-data -->
        <tr v-if=" _computedTableData.length === 0 && !loading">
          <td
            class="text-center no-data-container"
            colspan="999"
          >
            {{ loading ? '' :noDataMsg }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="!hideBottom && pagination"
      class="text-right pa-sm font-normal text-faded"
    >
      当前页：
      <f-select
        v-model="currentPage"
        :options="_computedPageOptions"
        border="underline"
        class="text-center inline-block"
        style="width: 60px"
        @input="handlePageChanged"
      />
      每页行数：
      <f-select
        v-model="currentRowsPerPage"
        :options="_computedRowsPerPageOptions"
        border="underline"
        class="text-center inline-block"
        style="width: 60px"
        @input="handleRowsPerPageChanged"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FTable',
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    noDataMsg: {
      type: String,
      default () {
        return '暂无数据'
      }
    },
    fixed: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default () {
        return false
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    },
    noHeader: {
      type: Boolean,
      default () {
        return false
      }
    },
    hideBottom: {
      type: Boolean,
      default () {
        return false
      }
    },
    pagination: {
      type: Object | Boolean,
      default () {
        return {
          isServer: false, // 服务端分页，控制是否由上层处理分页请求
          page: 1, // 当前页
          rowsPerPage: 10, // 每页显示多少条, 默认10个
          rowsPerPageOptions: [10, 20, 30], // 选择每页显示多少个
          recordsTotal: 0 // 数据总数，必需的
        }
      }
    }
  },
  data () {
    return {
      currentRowsPerPage: this.pagination.rowsPerPage,
      currentPage: this.pagination.page
    }
  },
  computed: {
    _computedRowsPerPageOptions () {
      let result = this.pagination.rowsPerPageOptions.map(v => {
        let obj = {}
        obj.label = v
        obj.value = v
        return obj
      })
      return result
    },
    _totalPage () {
      return Math.ceil(this.pagination.recordsTotal / this.currentRowsPerPage)
    },
    _computedPageOptions () {
      let result = []
      for (let i = 1; i <= this._totalPage; i++) {
        let obj = {}
        obj.label = i
        obj.value = i
        result.push(obj)
      }
      return result
    },
    _computedTableData () {
      if (this.pagination && !this.hideBottom) {
        return this.tableData.slice(this.currentRowsPerPage * (this.currentPage - 1), this.currentRowsPerPage + this.currentRowsPerPage * (this.currentPage - 1))
      } else {
        return this.tableData
      }
    }
  },
  methods: {
    handleRowsPerPageChanged () {
      this.currentPage = 1
      if (this.pagination.isServer) {
        this.$emit('request', {
          page: 1,
          rowsPerPage: this.currentRowsPerPage
        })
      }
    },
    handlePageChanged (value) {
      this.currentPage = value
      if (this.pagination.isServer) {
        this.$emit('request', {
          page: value,
          rowsPerPage: this.currentRowsPerPage
        })
      }
    }
  }
}
</script>

<style>
</style>
