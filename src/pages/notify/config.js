export default {
  settingConfig: {
    tableData: [
      {
        props: 'info',
        desc: 'this.$notify.info(your msg)'
      },
      {
        props: 'warning',
        desc: 'this.$notify.warning(your msg)'
      },
      {
        props: 'error',
        desc: 'this.$notify.error(your msg)'
      },
      {
        props: 'success',
        desc: 'this.$notify.success(your msg)'
      }
    ],
    columns: [
      {
        name: '属性',
        field: 'props'
      },
      {
        name: '描述',
        field: 'desc'
      }
    ]
  }
}
