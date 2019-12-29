/*
 * @Descripttion: 配置文件
 * @Author: 辛顺宁
 * @Date: 2019-12-29 11:08:20
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-29 11:14:57
 */
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // packages和examples目录需要加入编译
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
}