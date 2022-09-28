// 1:如何node内置对象？
// 导入内置http模块
const http = require('http'); // 会去运行的node/node_modules中找http
// http: 发送http请求 创建http服务器

// 创建http服务
const app = http.Server(function (req, res) {
    // 当有人访问3000 服务执行
    // req 请求报文
    // res 响应报文

    // 发送http请求。----> 服务器可以向服务器发送请求，并且没有跨域拦截
    http.get("http://www.baidu.com", (result) => {
        let rawData = '';
        // xx.on('事件名'，事件处理函数)
        // 监听响应事件。
        result.on('data', (chunk) => {
            // 异步自行
            rawData += chunk;
            console.log(rawData);
            res.write(rawData)
            // res.end()
        });
    })

})

app.listen(3000)