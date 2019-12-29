export default {
  options: [
    {
      label: 'test1',
      value: '1'
    },
    {
      label: 'test2',
      value: '2'
    },
    {
      label: 'test3',
      value: '3'
    },
    {
      label: 'test4',
      value: '4'
    },
    {
      label: 'test5',
      value: '5'
    }
  ],
  settingConfig: {
    tableData: [
      {
        props: 'placeholder',
        type: 'String',
        settings: '默认：请选择'
      },
      {
        props: 'mutiple',
        type: 'Boolean',
        settings: '多选，默认false'
      },
      {
        props: 'clearable',
        type: 'Boolean',
        settings: '清空选择，默认false'
      },
      {
        props: 'options',
        type: 'Array',
        settings: '对象由label, value组成'
      },
      {
        props: 'disabled',
        type: 'Boolean',
        settings: '默认false'
      },
      {
        props: 'filter',
        type: 'Boolean',
        settings: '默认false'
      },
      {
        props: 'border',
        type: 'String',
        settings: '可选outline(默认)，underline'
      },
      {
        props: 'autocomplete',
        type: 'Boolean',
        settings: '默认false, 开启后emit一个@searchemit，同时filter失效'
      },
      {
        props: 'noDataMsg',
        type: 'String',
        settings: '默认：暂无数据'
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
        name: '@select',
        arg: '选中的行项目（{label, value}）'
      },
      {
        name: '@search',
        arg: 'value(输入值)'
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
