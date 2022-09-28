import {
    pool
} from '../model/db.js'
/**
 * 1:定义参数 query  page number
 */
export function getPageShopList(req, res) {
    // 1: 获取page参数
    let {
        page
    } = req.query;

    // 2:验证参数是否合法
    if (!page || !Number(page)) {
        // 2.5 不合法响应参数不合法
        res.json({
            code: 4001,
            msg: '参数不合法'
        })
        return
    }
    // 3 合法,根据参数page 向数据库发送查询商品列表请求
    /**
     * limit n,m
     * limit 分页查询
     * n 从第几个索引查询
     * m 查询多少条数据
     * select * from goods  limit 0,30 去goods表中查询所有字段,从0开始查询30条数据
     */
    let sql = `select * from goods  limit ?,30`;
    let index = (page - 1) * 30;
    pool.query(sql, [index], (err, data) => {
        if (err) {
            console.log('request goods table errror ---->', err);
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        // 3.1 将查询结果响应给浏览器
        res.json({
            code: 200,
            data,
            msg: '获取成功',
            len: data.length,
        })
    })

}

// 获取一级分类商品
// 定义参数:type_one
export function getTypeShoplist(req, res) {
    // 1:获取一级分类请求参数 type_one
    let {
        type_one
    } = req.query;
    // 2: 验证参数是否合法
    if (!type_one) {
        // 2.5 不合法响应参数不合法
        res.json({
            code: 4001,
            msg: '参数不合法'
        })
        return
    }
    // 3: 合法:根据type_one 查询商品列表
    let sql = `select * from goods where type_one=?;`
    pool.query(sql, [type_one], (err, data) => {
        if (err) {
            console.log('request goods table errror ---->', err);
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        // 3.1 将查询结果响应给浏览器
        res.json({
            code: 200,
            msg: '获取分类商品成功',
            len: data.length,
            data,
        })
    })
}

// 获取商品详情
// 定义参数:id
export function getDeatail(req,res){
    // 1:获取参数傻瓜品id　id
    let { id } = req.query;
    // 2: 验证参数是否合法
    if(!id || !Number(id)){
        res.json({
            code: 4001,
            msg: '参数不合法'
        })
        return
    }
    // 3: 合法后向数据库发送 根据商品id 查询商品详请求;
    let sql = `select * from goods where Id = ?;`
    pool.query(sql,[id],(err,data)=>{
        if (err) {
            console.log('request goods table errror ---->', err);
            res.json({
                code: 5001,
                msg: '服务端出错了'
            })
            return
        }
        res.json({
            code: 200,
            msg: '获取商品详情成功',
            len: data.length,
            data,
        })
    })
}



