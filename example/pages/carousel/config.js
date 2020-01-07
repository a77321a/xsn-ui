export default {
  settingConfig: {
    tableData: [
      {
        props: 'height',
        type: 'String',
        settings: '默认：200px'
      },
      {
        props: 'duration',
        type: 'Number',
        settings: '轮播间隔时间，默认3000'
      },
      {
        props: 'autoplay',
        type: 'Boolean',
        settings: '自动播放，默认true'
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
        arg: 'index(当前轮播图的页码，从1开始)',
        desc: '也可以使用v-model来控制和获取轮播图的当前页'
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
      },
      {
        name: '描述',
        field: 'desc'
      }
    ]
  },
  eventConfig: {
    tableData: [
      {
        name: 'prev()',
        arg: '上一张'
      },
      {
        name: 'next()',
        arg: '下一张'
      },
      {
        name: 'jump(index)',
        arg: '跳转第几张（从1开始）'
      }
    ],
    columns: [
      {
        name: '事件名称',
        field: 'name'
      },
      {
        name: '参数值',
        field: 'arg'
      }
    ]
  },
  childSettingConfig: {
    tableData: [
      {
        props: 'imgSrc',
        type: 'String',
        settings: '图片地址'
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
  childSlotConfig: {
    tableData: [
      {
        name: 'default',
        arg: ''
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
