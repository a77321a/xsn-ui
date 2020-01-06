/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 15:14:06
 */
export default {
  settingConfig: {
    tableData: [
      {
        props: 'size',
        type: 'String',
        settings: '按钮大小，可选：small, medium, large'
      },
      {
        props: 'type',
        type: 'String',
        settings: '主题色，默认defalut，可选primary，success，error，text'
      },
      {
        props: 'round',
        type: 'Boolean',
        settings: '圆角按钮'
      },
      {
        props: 'circle',
        type: 'Boolean',
        settings: '图标按钮'
      },
      {
        props: 'loading',
        type: 'Boolean',
        settings: '加载状态'
      },
      {
        props: 'icon',
        type: 'String',
        settings: '前缀图标'
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
