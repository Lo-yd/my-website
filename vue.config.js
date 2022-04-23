module.exports = {
  //关闭eslint
  lintOnSave: false,
  // 代理解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'www.lovedd.cool/wp-json'
      }
    }
  }

}