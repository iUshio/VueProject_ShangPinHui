const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  //关闭eslint校验工具
  lintOnSave:false,
  // 关闭.map文件（该文件供打包后文件提示错误使用）
  productionSourceMap:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        /* 允许跨域 */
        // changeOrigin: true,
        // pathRewrite:{'^/api':''},
      }
    }
  }
})
