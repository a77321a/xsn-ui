export default {
  settingConfig: {
    tableData: [
      {
        props: 'body-class',
        type: 'String',
        settings: 'body部分的class'
      },
      {
        props: 'body-style',
        type: 'Object',
        settings: 'body部分的style'
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
  slotConfig: {
    tableData: [
      {
        name: '(default)',
        arg: 'body部分的内容'
      },
      {
        name: 'top-right',
        arg: '头部最右侧的插槽'
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
