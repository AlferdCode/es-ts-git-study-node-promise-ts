import express from 'express'
import path from 'path'
import http from 'http'
const app = express();
const router = express.Router()
app.listen(8080, () => {
    console.log('8080 running');
})

router.get('/b', function (req, res, next) {
    http.get('http://localhost:3000/b', (result) => {
        // 监听响应事件。
        let rawData = ''
        result.on('data', (chunk) => {
            // 异步自行
            rawData += chunk;
            console.log(rawData);
            res.json({
                code: 200,
                msg: 'proxy',
                data: rawData
            })
        })
    });

})


app.use(function (req, res, next) {
    console.log('有人访问服务8080');
    next()
})
app.use(express.static(path.resolve('./public')))
app.use(router)

console.log('test node mon ');