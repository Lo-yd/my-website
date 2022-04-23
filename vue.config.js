module.exports = {
  //关闭eslint
  lintOnSave: false,
  // 代理解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.lovedd.cool/wp-json',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}