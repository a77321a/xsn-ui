export default {
  settingConfig: {
    tableData: [
      {
        props: 'name',
        type: 'String',
        settings: '请参照src/assets/icon/iconfont.css || demo_index.html'
      },
      {
        props: 'color',
        type: 'String',
        settings: '可在调色板中选择颜色'
      },
      {
        props: 'size',
        type: 'String',
        settings: '默认20px。依照font-size来画icon的大小'
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
        arg: '无'
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
