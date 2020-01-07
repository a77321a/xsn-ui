export default {
  settingConfig: {
    tableData: [
      {
        props: 'title',
        type: 'String',
        desc: '标题'
      },
      {
        props: 'height',
        type: 'String',
        desc: '高度; body部分最小高度为400px'
      },
      {
        props: 'width',
        type: 'String',
        desc: '宽度; 最小宽度600px'
      },
      {
        props: 'position',
        type: 'String',
        desc: '默认middle， 可选left/right/top/bottom'
      },
      {
        props: 'wrapper-class',
        type: 'String',
        desc: '容器样式'
      },
      {
        props: 'content-class',
        type: 'String',
        desc: 'body样式'
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
        name: '描述',
        field: 'desc'
      }
    ]
  },
  slotConfig: {
    tableData: [
      {
        name: 'body',
        arg: ''
      },
      {
        name: 'footer',
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
