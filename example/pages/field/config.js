export default {
  settingConfig: {
    tableData: [
      {
        props: 'label',
        type: 'String',
        settings: '必填'
      },
      {
        props: 'labelWidth',
        type: 'String',
        settings: '默认80px'
      },
      {
        props: 'error',
        type: 'Boolean',
        settings: '是否报错，默认false'
      },
      {
        props: 'errorMsg',
        type: 'String',
        settings: '报错信息'
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
  }
}
