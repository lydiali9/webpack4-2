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
    // 源码映射 会单独生成一个sourcemap文件 出错了会标示当前报错的列和行
    devtool: "source-map", // 增加映射文件 可以帮我们调试源代码
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