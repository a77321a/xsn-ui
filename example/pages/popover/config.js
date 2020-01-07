export default {
  emitConfig: {
    tableData: [
      {
        name: '@show',
        arg: '显示'
      },
      {
        name: '@hide',
        arg: '隐藏'
      },
      {
        name: '@toogle',
        arg: '自动显示隐藏'
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
        name: '',
        arg: '默认插槽'
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
