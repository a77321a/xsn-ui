export default {
  settingConfig: {
    tableData: [
      {
        props: 'checkedIcon',
        type: 'String',
        settings: '选中状态的图标'
      },
      {
        props: 'unCheckedIcon',
        type: 'String',
        settings: '未选中状态的图标'
      },
      {
        props: 'color',
        type: 'String',
        settings: '颜色，，默认blue，未选中faded'
      },
      {
        props: 'size',
        type: 'String',
        settings: 'fontSize值，默认12px'
      },
      {
        props: 'label',
        type: 'String',
        settings: '文字标签'
      },
      {
        props: 'val',
        type: 'String | Boolean',
        settings: '用于修改单选框的v-model。'
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
        name: '@click',
        arg: ''
      },
      {
        name: '@input',
        arg: 'val'
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
  }
}
