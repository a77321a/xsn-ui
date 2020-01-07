export default {
  tableConfig: {
    tableData: [
      {
        props: 'loading',
        type: 'Boolean',
        arg: 'v-loading',
        desc: 'loading效果'
      },
      {
        props: 'closeoverlay',
        type: 'Boolean',
        arg: 'v-close-overlay',
        desc: '当页面发生点击emit时，点击对象并不是或者并不包含被绑定元素时，被绑定元素自动关闭（display: block / none）'
      }
    ],
    columns: [
      {
        name: '指令',
        field: 'props'
      },
      {
        name: '类型',
        field: 'type'
      },
      {
        name: '参数',
        field: 'arg'
      },
      {
        name: '描述',
        field: 'desc'
      }
    ]
  }
}
