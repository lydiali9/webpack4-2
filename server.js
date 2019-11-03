// express node的一个框架

let express = require('express');
let app = express();
let webpack = require('webpack');

// 中间件 可以在服务端启动webpack
let middle = require('webpack-dev-middleware');
let config = require('./webpack.config.js');

let compiler = webpack(config);

app.use(middle(compiler));


// app.get('/api/user', (req, res) => {
//     res.json({name: 'I am lynnli'});
// })

app.get('/user', (req, res) => {
    res.json({name: 'I am lynnli111'});
})

app.listen(3000);