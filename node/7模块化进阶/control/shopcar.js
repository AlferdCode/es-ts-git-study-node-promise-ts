import { pool } from '../model/db.js'
export function addShopCar (req,res){
    // 1:获取请求参数
    let { Id,count} = req.query;
    let { username } = req.user;
    // 2:验证参数是否合法
    if(!Id || !count || !Number(Id) || !Number(count)){
        res.json({
            code:4001,
            msg:"参数不合法"
        })
        return
    }
    // 3:往shopcar 中插入字段
    let sql = `INSERT INTO shopcar (goodId,username,count) VALUES (?,?,?);`;
    pool.query(sql,[Id,username,count],(err,data)=>{
        if(err){
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        res.json({
            code:200,
            msg:"添加购物车成功"
        })
    })
}


