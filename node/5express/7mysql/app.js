import Express  from "express";
// 
import pool from './db.js'
const app = Express();
const router = Express.Router();


router.get('/add',(req,res)=>{

    // ???
    let sql = 'insert into user (age,name) values (?,?);';
    // let sql = `insert into user values (name,id,age)`
    // 向数据库发送请求
    pool.query(sql,['12','falsdkj'],function(err,data){
        // 数据库有响应时候执行
        if(err){
            res.json({
                code:500,
                err
            })
            return
        }
        res.json({
            code:200,
            data,
        })
    })
})

router.get('/del',()=>{
    
})

router.get('/up',()=>{
    
})

router.get('/list',(req,res)=>{
    /**
     * selct 查询
     * * 所有字段 (表头)
     * from 链接表
     * user 表明
     */
   
    let sql = `select * from user;`
     /**
     * pool.query(sql,[],callback)
     * 作用：向数据库发送请求
     * 参一：sql语句类型是字符串
     * 参二: 数组,给sql语句赋values值
     * 参三: 数据库响应处理函数
     *    回参一:错误对象
     *    回参二:数据库响应的数据
     */

    pool.query(sql,[],function(err,data){
        // 数据库有响应时候执行
        if(err){
            res.json({
                code:500,
                err
            })
            return
        }
        res.json({
            code:200,
            data,
        })
    })
})


app.use('/api',router)


app.listen(3000,()=>{
    console.log('服务启动');
})
