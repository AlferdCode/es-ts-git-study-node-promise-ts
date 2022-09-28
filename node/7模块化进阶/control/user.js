import {
    pool
} from '../model/db.js'
import userTable from '../model/user.js'
import {
    sign
} from '../token.js'
/**
 * 4001参数不合法
 * 5001 请求数据库出现问题
 * 1: 定义参数:
 * 
 */
export function login(req, res) {
    // 1:获取请求参数:username password
    let {
        username,
        password
    } = req.query;
    // 2:验证参数是否合法
    let userRule = /^\w{3,8}$/;
    let psdRule = /^[0-9]{3,8}$/;
    // 2.5 根据错误有限原则;先写不合法的响应
    if (!username || !password || !userRule.test(username) || !psdRule.test(password)) {
        res.json({
            code: 4001,
            msg: '参数不合法'
        })
        return
    }


    // 3 合法 判断用户是否存在？ （用户数据在哪了？）
    userTable.getUser([username], (err, data) => {
        if (err) {
            console.log('request user table errror ---->', err);
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        // 验证用户是否存在条件
        // 3.2 不存在,响应,用户为注册
        if (data.length === 0) {
            res.json({
                code: 201,
                msg: '用户不存在'
            })
            return
        }
        // 4 存在；验证密码是否一致?
        if (data[0].password !== password) {
            res.json({
                code: 202,
                msg: '用户或者密码不存在'
            })
            return
        }
        let token = sign({
            username,
            password,
            timer:new Date().getTime(), // 为了让每次登录生成token不一一昂
        })
        res.json({
            code: 200,
            msg: '登录成功',
            token,
        })
    })


    // 3.1 向数据库发送查询请求,根据username 查询用户是否存在
    // let sql = `SELECT * FROM user WHERE username = ?;`;
    // pool.query(sql, [username], (err, data) => {
    //     if (err) {
    //         console.log('request user table errror ---->', err);
    //         res.json({
    //             code: 5001,
    //             msg: '服务端出错了'
    //         })
    //         return
    //     }
    //     // 验证用户是否存在条件
    //     // 3.2 不存在,响应,用户为注册
    //     if (data.length === 0) {
    //         res.json({
    //             code: 201,
    //             msg: '用户不存在'
    //         })
    //         return
    //     }
    //     // 4 存在；验证密码是否一致?
    //     if(data[0].password!==password){
    //         res.json({
    //             code: 202,
    //             msg: '用户或者密码不存在'
    //         })
    //         return
    //     }
    //     res.json({
    //         code: 200,
    //         msg: '登录成功',
    //         token:"fasdfasdfweqr"
    //     })
    // })


}
export function register(req, res) {
    // 1: 定义参数:username password
    let {
        username,
        password
    } = req.query;
    // 2:验证参数
    let userRule = /^\w{3,8}$/;
    let psdRule = /^[0-9]{3,8}$/;
    //如果没有username password 或者 不满足正则,参数不合法
    if (!username || !password || !userRule.test(username) || !psdRule.test(password)) {
        res.json({
            code: 4001,
            msg: '参数不合法'
        })
        return
    }
    // 3:参数合法,验证用户是否存在?
    // 3.1 查看user表中是否有 name
    userTable.getUser([username], (err, data) => {
        if (err) {
            console.log('request user table errror ---->', err);
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        if (data.length !== 0) {
            res.json({
                code: 201,
                msg: '用户已经存在'
            })
            return
        }
        userTable.addUser([username, password], (err, data) => {
            if (err) {
                console.log('insert into user table errror ---->', err);
                res.json({
                    code: 5001,
                    msg: '服务端出错了'
                })
                return
            }
            // console.log(data);
            res.json({
                code: 200,
                msg: '注册成功',
                data,
            })
        })
    })

    // 请求出数据库非模块化代码
    //     let sql = `SELECT username FROM user WHERE username = ?;`;
    //     pool.query(sql, [username], (err, data) => {
    //         if (err) {
    //             console.log('request user table errror ---->', err);
    //             res.json({
    //                 code: 5001,
    //                 msg: '服务端出错了'
    //             })
    //             return
    //         }
    //         if (data.length !== 0) {
    //             res.json({
    //                 code: 201,
    //                 msg: '用户已经存在'
    //             })
    //             return
    //         }
    //         console.log('开始注册新用户');
    //         // 将usernmae password 插入到user 表中

    //         let sql = `INSERT INTO user (username,password) VALUES (?,?);`
    //         pool.query(sql, [username, password], (err, data) => {
    //             if (err) {
    //                 console.log('insert into user table errror ---->', err);
    //                 res.json({
    //                     code: 5001,
    //                     msg: '服务端出错了'
    //                 })
    //                 return
    //             }
    //             // console.log(data);
    //             res.json({
    //                 code:200,
    //                 msg:'注册成功',
    //                 data,
    //             })
    //         })
    //     })
}