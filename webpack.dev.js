let { smart } = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = smart(base, {
    mode: 'development',
    devServer: {
        // 1 单个API代理
        // proxy: {
        //     '/api': 'http://localhost:3000' // 配置了一个代理
        // }
        // 2 重写API名代理
        // proxy: {
        //     '/api/*': { // 重写的方式 把请求代理到express服务器上
        //         target: 'http://localhost:3000/api',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '/api': ''
        //         }
        //     }// 配置了一个代理
        // }
        // 3 我们前端只是想单纯的来模拟数据
        // before(app) { // 提供的方法 钩子 这里不启动后端3000服务 也没有跨域的问题
        //     app.get('/user', (req,res) => {
        //         res.json({name: 'lynnli91'});
        //     })
        // }
        // 4 有服务端 不用代理来处理 能不能在服务端中启动webpack 端口用服务端端口

    },
    // 1. 源码映射 会单独生成一个sourcemap文件 出错了会标示当前报错的列和行
    // devtool: "source-map", // 增加映射文件 可以帮我们调试源代码
    // 2. b不会产生单独的文件 但是可以显示行和列
    // devtool: "eval-source-map",
    // 3. 不会产生列 但是是一个单独的映射文件
    // devtool: "cheap-module-source-map", // 产生后你可以保留起来
    // 4. 不会产生文件，集成在打包后的文件中，不会产生列
    devtool: "cheap-module-eval-source-map",
})