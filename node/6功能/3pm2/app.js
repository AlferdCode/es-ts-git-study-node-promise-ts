import express from 'express'
import cors from 'cors'

const app = express();
const router = express.Router()
app.listen(3000, () => {
    console.log('3000 running');
})
let arr = []

router.get('/test', (req, res) => {
    arr.push({
        a: 123
    })
    // console.log(a);
    res.json({
        msg: '测试nodemon 监听的问题'
    })
})
router.get('/b', (req, res) => {
    console.log('访问b');
    arr.push(123)
    res.json({
        msg: '测试pm2'
    })
})
console.log('访问服务了');
router.get('/c', (req, res) => {
    // console.log(abc); // bug　
    console.log('访问c');
    arr.push(123)
    res.json({
        msg: '测试pm2 c'
    })
})
// 必须要在 use(router) 之前写
app.use(cors())
app.use(router)