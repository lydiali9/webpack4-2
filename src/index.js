// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
import './style'; // 省略后缀名 style.css
// console.log('hom111qwqwqwqwewewr11e');
//
// class Log {
//     constructor() {
//         console.log('出错了')
//     }
// }
//
// let log = new Log();


let url = '';

if(DEV === 'dev') {
    url = 'http://localhost:3000';
} else {
    url = 'http://www.baidu.com';
}
console.log(url);
console.log('----------------');

console.log(typeof FLAG);
console.log(EXPORESSION);

let xhr = new XMLHttpRequest();

// http://localhost:8080 webpack-ev-server的服务, 再把请求转发给3000
// http-proxy
// 1
// xhr.open('GET', '/api/user', true);
// 2
xhr.open('GET', '/user', true);
xhr.onload = function () {
    console.log(xhr.response);
}

xhr.send();