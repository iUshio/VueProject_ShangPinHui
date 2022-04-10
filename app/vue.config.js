const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验工具
  lintOnSave:false,
  // 关闭.map文件（该文件供打包后文件提示错误使用）
  productionSourceMap:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211',
        // pathRewrite:{'^/api':''},
      }
    }
  }
})
