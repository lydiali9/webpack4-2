let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');

// 1. cleanWebpackPlugin 每次打包前先清除dist文件
// 2. copyWebpackPlugin 拷贝doc等文件打包到dist文件下
// 3. bannerPlugin 内置 打包文件头插入版权
module.exports = {
    // 多入口
    mode: 'production',
    entry: {
        home: './src/index.js',
    },
    output: {
        // [name]代表这个home 或者other
        filename: "[name].[hash:5].js",
        path: path.resolve(__dirname, 'dist')
    },
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
    watch: true,
    watchOptions: { // 监控的选项
        poll: 1000, // 每秒问我1000次
        aggregateTimeout: 500, // 防抖 我一直输入代码
        ignored: /node_modules/ // 不需要被监控的文件
    },
    resolve: { // 解析 第三方包 common
        modules: [path.resolve('node_modules')],
        // 扩展名 先找css 在找js
        extensions: ['.js', '.css', '.json', '.vue']
        // 在bootstrap下面先找style 在找main文件， 原因是优先会找main
        // mainFields: ['style', 'main']
        // 指定入口文件的名字 默认找index.js
        // mainFiles: []
        // import 'bootstrap/dist/css/bootstrap.css'; 引入太长 用别名
        // alias: {
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'wiki',
                to: './'
            }
        ]),
        new webpack.BannerPlugin('make 2019 by lynnli')
    ]
}