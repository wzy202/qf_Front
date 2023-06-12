const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查

  //方式一
  // devServer: {
  //   proxy: 'http://localhost:8081'// 后端服务器路径（配置代理）
  // }

  //方式二
  devServer: {
    port: 80,

    proxy: {
      '/sx': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/hd': '' },
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/demo': '' },
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
