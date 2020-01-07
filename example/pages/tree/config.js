export default {
  settingConfig: {
    tableData: [
      {
        props: 'nodes',
        type: 'Array',
        settings: 'tree的数据，每一项可以包含label, value, expand。 没有value时，label被自动处理成value'
      },
      {
        props: 'selected',
        type: 'Array | String | Number',
        settings: '默认空字符串，多选时，被选择节点的value组成的数组；单选时是被选择节点的value。'
      },
      {
        props: 'mutiple',
        type: 'Boolean',
        settings: '是否多选, 默认false'
      },
      {
        props: 'leaf',
        type: 'Boolean',
        settings: '是否只有叶子节点可以选择'
      },
      {
        props: 'accordion',
        type: 'Boolean',
        settings: '默认false，打开节点时关闭其他所有节点'
      },
      {
        props: 'expandAll',
        type: 'Boolean',
        settings: '默认false，是否初始化打开所有节点'
      },
      {
        props: 'activeColor',
        type: 'String',
        settings: '默认positive（可选颜色参照颜色菜单页面），选中时的文本或者复选框颜色'
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
        name: '@select',
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
