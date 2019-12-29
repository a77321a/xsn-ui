/*
 * @Descripttion: 导入组件
 * @Author: 
 * @Date: 2019-12-29 11:28:33
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 11:32:30
 */

import TimeDeadLine from './src/TimeDeadLine'

TimeDeadLine.install = function (Vue) {
  Vue.component(TimeDeadLine.name, TimeDeadLine)
}

export default TimeDeadLine 