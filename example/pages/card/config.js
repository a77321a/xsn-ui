/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors:
 * @LastEditTime: 2020-01-08 10:50:23
 */
export default {
  settingConfig: {
    tableData: [
      {
        props: 'body-class',
        type: 'String',
        settings: 'body部分的class'
      },
      {
        props: 'body-style',
        type: 'Object',
        settings: 'body部分的style'
      },
      {
        props: 'drop',
        type: 'Boolean',
        settings: '是否展示展开按钮'
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
  slotConfig: {
    tableData: [
      {
        name: '(default)',
        arg: 'body部分的内容'
      },
      {
        name: 'right',
        arg: '头部最右侧的插槽'
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
