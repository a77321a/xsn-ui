export default {
  settingConfig: {
    tableData: [
      {
        props: 'percentage',
        type: 'Number',
        settings: '进度，范围0 - 100'
      },
      {
        props: 'showLabel',
        type: 'Boolean',
        settings: '显示进度文本，默认false'
      },
      {
        props: 'color',
        type: 'String',
        settings: '进度条颜色， 默认primary'
      },
      {
        props: 'width',
        type: 'String',
        settings: '进度条宽度，默认150px'
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
