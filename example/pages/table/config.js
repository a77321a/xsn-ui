export default {
  settingConfig: {
    tableData: [
      {
        props: 'tableData',
        type: 'Array',
        settings: ''
      },
      {
        props: 'columns',
        type: 'Array',
        settings: 'align, width, field'
      },
      {
        props: 'noDataMsg',
        type: 'String',
        settings: '默认：暂无数据'
      },
      {
        props: 'fixed',
        type: 'Array',
        settings: 'left, right'
      },
      {
        props: 'title',
        type: 'String',
        settings: '标题'
      },
      {
        props: 'loading',
        type: 'Boolean',
        settings: ''
      },
      {
        props: 'pagination',
        type: 'Object | Boolean',
        settings: 'isServer, page, rowsPerPage, rowsPerPageOptions'
      },
      {
        props: 'hideBottom',
        type: 'Boolean',
        settings: '默认false'
      }
    ],
    columns: [
      {
        name: '属性',
        field: 'props'
      },
      {
        name: '类型',
        field: 'type'
      },
      {
        name: '配置项',
        field: 'settings'
      }
    ]
  },
  emitConfig: {
    tableData: [
      {
        name: '@request',
        arg: '{page(哪一页), rowsPerPage（请求多少行）}'
      }
    ],
    columns: [
      {
        name: 'emit名称',
        field: 'name'
      },
      {
        name: '参数值',
        field: 'arg'
      }
    ]
  },
  slotConfig: {
    tableData: [
      {
        name: 'top',
        arg: '位于标题和表头之间'
      },
      {
        name: 'top-right',
        arg: '表头最右侧'
      },
      {
        name: 'head',
        arg: 'thead'
      },
      {
        name: 'body',
        arg: 'tbody'
      }
    ],
    columns: [
      {
        name: '插槽名称',
        field: 'name'
      },
      {
        name: '描述',
        field: 'arg'
      }
    ]
  }
}
