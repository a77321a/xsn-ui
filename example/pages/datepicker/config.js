export default {
  settingConfig: {
    tableData: [
      {
        props: 'format',
        type: 'String',
        settings: '默认：YYYY-MM-DD'
      },
      {
        props: 'placeholder',
        type: 'String',
        settings: '默认：请选择日期'
      },
      {
        props: 'disabled',
        type: 'Boolean',
        settings: '默认false'
      },
      {
        props: 'border',
        type: 'String',
        settings: '默认border，可选underline'
      },
      {
        props: 'min',
        type: 'String',
        settings: '无默认'
      },
      {
        props: 'max',
        type: 'String',
        settings: '无默认'
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
        name: '@input',
        arg: 'value'
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
