/*
 * @Descripttion: 导入组件
 * @Author: 
 * @Date: 2019-12-29 11:28:33
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 11:45:49
 */

import TimeDeadLine from './src/index.vue'

TimeDeadLine.install = function (Vue) {
  Vue.component(TimeDeadLine.name, TimeDeadLine)
}

export default TimeDeadLine 