export default {
  cssConfig: {
    tableData: [
      {
        name: 'flex布局',
        palce: '/css/core/flex.scss',
        eg: 'row; col-sm-2; col-md-3 ...'
      },
      {
        name: '颜色',
        palce: '/css/core/color.scss',
        eg: 'text-primary; bg-white ...'
      },
      {
        name: '文本位置',
        palce: '/css/core/align.scss',
        eg: 'text-center; text-left; text-right'
      },
      {
        name: '间距',
        palce: '/css/core/spacing.scss',
        eg: 'pa-sm; pl-md; pr-lg ...'
      },
      {
        name: '位置',
        palce: '/css/core/position.scss',
        eg: 'absolute; relative; abaolute-left'
      }
    ],
    columns: [
      {
        name: '名称',
        field: 'name'
      },
      {
        name: '位置',
        field: 'palce'
      },
      {
        name: '样例',
        field: 'eg'
      }
    ]
  }
}
