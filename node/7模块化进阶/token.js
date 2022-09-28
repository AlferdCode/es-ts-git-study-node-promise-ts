import jwt from 'jsonwebtoken'
import fs from 'fs';
import path from 'path'

let privateSecent = fs.readFileSync(path.resolve('./private.key'));
/**
 * 生成token
 * @param {Object} options username password 
 * @returns 
 */
export function sign(options) {
    // Authorization
    let token = jwt.sign({
        ...options,
    }, privateSecent, {
        expiresIn:1000* 60 * 60 * 2,
        issuer: "102 web",
    })

    return token
}

export function vertify(req, res, next) {
    console.log('验证token');
    // token 哪里来的????
    console.log(req.headers);
    let token = req.headers.authorization;
    console.log(token);
    let tmier = new Date().getTime(); // 进入服务器的时间戳
    console.log(tmier);
    jwt.verify(token, privateSecent, (err, data) => {
        // 验证是否为有效token
        // console.log(err);
        if (err) {
            res.json({
                code: 4003,
                msg: '无效token'
            })
            return
        }
        console.log(data);
        console.log(tmier-data.timer);
        console.log(data.exp-data.iat);
        // 是否过期
        if (tmier-data.timer > data.exp-data.iat) {
            res.json({
                code: 4004,
                msg: "token过期"
            })
            return
        }

        req.user = {username:data.username};
        next()
    })
}

// $.ajax({
//     url:"addShopcar",
//     headers:{
//         Authorization: {
//             token:"fasdfasdf"
//         }
//     }
// })