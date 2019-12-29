export default {
  settingConfig: {
    tableData: [
      {
        props: 'size',
        type: 'String',
        settings: '按钮大小，可选：sm, md, lg'
      },
      {
        props: 'label',
        type: 'String',
        settings: '按钮文本'
      },
      {
        props: 'bg-color',
        type: 'String',
        settings: '背景色， 默认primary，参考菜单‘颜色’'
      },
      {
        props: 'text-color',
        type: 'String',
        settings: '字体颜色，默认white，参考菜单‘颜色’'
      },
      {
        props: 'loading',
        type: 'Boolean',
        settings: '加载状态'
      },
      {
        props: 'icon',
        type: 'String',
        settings: '图标'
      },
      {
        props: 'flip',
        type: 'Boolean',
        settings:
          '背景色设为白色，字体颜色设为black或者textColor，优先级高于bg-color'
      },
      {
        props: 'disabled',
        type: 'Boolean',
        settings: '禁用'
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
