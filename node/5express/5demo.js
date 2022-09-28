import Express, {
    json
} from "express";
import fs from 'fs'
const app = Express();
app.listen(9527, () => {
    console.log('服务启动');
})


const router = Express.Router();

/**
 * 1: 确定地址 方式
 * 2: 确定参数:username  password 
 * 3: 确定参数规则   
 * username 3-6字母
 * password 3-6 数字
 */
router.get('/register', function (req, res) {
    // 1: 获取参数
    let {
        username,
        password
    } = req.query;
    // 2: 验证参数是否合法
    let userReg = /^[a-zA-Z]{3,6}$/;
    let padReg = /^\d{3,6}$/;
    if (!username || !password || !userReg.test(username) || !padReg.test(password)) {
        res.json({
            code: 1001,
            msg: "参数不合法"
        })
        return
    }
    console.log('注册参数合法了');
    // 3: 合法:将参数 添加 data/user.json 文件中
    // 3.1 读data/user.json
    let result = fs.readFileSync('./data/user.json');
    // 3.2 对结果进行数据格式化处理
    result = JSON.parse(String(result));
    console.log(result);
    // 4: 添加成功后提示注册成功
    let flag = false; // 记录是否存在用户 true 存在 false 不存在
    // 4.1 验证用户名是否存在
    result.forEach(item => {
        if (item.username === username) {
            flag = true;
            return
        }
    })
    // 4.2 存在响应用户已存在
    if (flag) {
        res.json({
            code: 200,
            msg: "用户已经注册"
        })
        return
    }

    // 4.3 不存在
    // 4.31 添加数据；
    result.push({
        username,
        password
    })
    // 4.32 更新data/user.josn
    fs.writeFile('./data/user.json', JSON.stringify(result), (err) => {
        if (err) {
            res.json({
                code: 500,
                msg: "服务器出错了"
            })
            return
        }
        res.json({
            code: 200,
            msg: "注册成功"
        })
    })

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
    let result = fs.readFileSync('./data/user.json');
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
    res.json({
        code: 200,
        msg: "login success",
        token: 'jflasjrou348023uj4rlewhr247'
    })

})
router.get('/goodlist', function (req, res) {
    // 1：获取参数 page
    let {
        page
    } = req.query;
    page = Number(page);
    // 2：读data/shop.json 文件
    let result = fs.readFileSync('./data/shop.json');
    result = JSON.parse(String(result));
    // console.log(result);


    // 3 从数组中取值每次取值去30个数据
    let data = [];
    //  1  0-29  2 30-59 
    let r = (page-1) * 30;
    for (let i = r, count = page * 30; i < count; i++) {
        data.push(result[i])
    }

    // 3：给客户端响应数据 30条数据
    res.json({
        data,
        code:200,
        len:data.length
    })
})


app.use('/api', router)