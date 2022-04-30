// 该文件需要放在脚手架创建项目中的根目录下
module.exports = { // 之所以是node模块，是因为配置项给webpack加载，webpack基于nodejs
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, // 关闭语法检查
    // 开启代理服务器（方式一）
    /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' },
                // ws: true, // 用于支持websocket
                // changeOrigin: true // 用于控制请求头中的host值，跨域伪装
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
}