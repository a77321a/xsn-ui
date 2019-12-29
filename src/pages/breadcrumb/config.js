export default {
  options: [
    {
      icon: 'home',
      path: '/',
      label: '主页'
    },
    {
      path: '/css',
      label: '样式表'
    },
    {
      path: '/breadcrumb',
      label: '面包屑'
    }
  ],
  settingConfig: {
    tableData: [
      {
        props: 'options',
        type: 'Array',
        settings: '配置项，包含icon, path, query, param'
      },
      {
        props: 'separator',
        type: 'String',
        settings: '分隔符，默认为/'
      },
      {
        props: 'replace',
        type: 'Boolean',
        settings: '路由是否开启replace模式'
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
  optionsConfig: {
    tableData: [
      {
        name: 'icon',
        type: 'String',
        arg: '每一项路由文本前置icon，颜色和字体大小为继承'
      },
      {
        name: 'label',
        type: 'String',
        arg: '显示文本'
      },
      {
        name: 'path',
        type: 'String',
        arg: '路径'
      },
      {
        name: 'query',
        type: 'Object',
        arg: ''
      },
      {
        name: 'param',
        type: 'Object',
        arg: ''
      }
    ],
    columns: [
      {
        name: '属性',
        field: 'name'
      },
      {
        name: '类型',
        field: 'type'
      },
      {
        name: '描述',
        field: 'arg'
      }
    ]
  }
}
