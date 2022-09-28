import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken';
import fs from 'fs'

const app = express();
const router = express.Router()
var privateKey = fs.readFileSync('private.key');
app.listen(3000, () => {
    console.log('3000 running');
})
router.get('/login', function (req, res) {
    // 1: 获取参数
    let {
        username,
        password
    } = req.query;
    // 2：验证参数是否合法
    let userReg = /^[a-zA-Z]{3,6}$/;
    let padReg = /^\d{3,6}$/;
    if (!username || !password || !userReg.test(username) || !padReg.test(password)) {
        res.json({
            code: 1001,
            msg: "参数不合法"
        })
        return
    }
    // 3：判断data/user.json是否存在用户
    let result = fs.readFileSync('./user.json');
    result = JSON.parse(String(result));
    console.log(result);
    let flag = false; // true 存在 false 不存在
    let user = {}; // 记录当前登录用户的数据
    for (let i = 0; i < result.length; i++) {
        if (result[i].username === username) {
            flag = true;
            user = result[i];
            break
        }
    }
    // 不存在 响应去注册
    if (!flag) {
        res.json({
            code: 200,
            msg: "用户没注册"
        })
        return
    }

    // 存在 验证密码是否一致
    if (password !== user.password) {
        res.json({
            code: 200,
            msg: "用户名或者密码不正确"
        })
        return
    }
    /**
     * jwt.sign() 生成token
     */
    var token = jwt.sign({
        ...user
    }, privateKey, {
        // algorithm: 'RS256', // bug
        expiresIn: 60 * 60, // TOKEN 过期时间
        issuer: '102 web',
        subject: '主题',
        audience: 'custtom',
        jwtid: '1234687641546'
    });
    res.json({
        code: 200,
        msg: "login success",
        token: token,
    })

})

// 需要验证token
router.get('/a', function (req,res) {
    let token = req.query.token;

    jwt.verify(token,privateKey,(err,data)=>{

        res.json({
            code:200,
            userInfo:data
        })
    })
})

// 必须要在 use(router) 之前写
app.use(cors())
app.use(router)