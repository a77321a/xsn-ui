export default {
  settingConfig: {
    tableData: [
      {
        props: 'placeholder',
        type: 'String',
        settings: '默认：请输入'
      },
      {
        props: 'type',
        type: 'String',
        settings: '默认text,可选number,textarea'
      },
      {
        props: 'min',
        type: 'Number',
        settings: '最小值，type是number时生效'
      },
      {
        props: 'max',
        type: 'Number',
        settings: '最大值，type是number时生效'
      },
      {
        props: 'border',
        type: 'String',
        settings: '可选outline(默认)，underline'
      },
      {
        props: 'clearable',
        type: 'Boolean',
        settings: '默认false'
      },
      {
        props: 'after',
        type: 'Object',
        settings: '{ icon: "", handler() { your callback function } }'
      },
      {
        props: 'disabled',
        type: 'Boolean',
        settings: '默认false'
      },
      {
        props: 'readonly',
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
        name: '@input',
        arg: 'value'
      },
      {
        name: '@focus',
        arg: ''
      },
      {
        name: '@blur',
        arg: ''
      },
      {
        name: '@enter',
        arg: 'value'
      },
      {
        name: '@change',
        arg: ''
      },
      {
        name: '@clear',
        arg: ''
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
