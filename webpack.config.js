let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

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
    module: {
        rules: [
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
        })
    ]
}