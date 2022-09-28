import Express  from "express";
// 1:声明一个变量 gc
// 2:给变量赋值 module.js export.defalut导出内容(js任务数据类型)\
// 3:运行module.js
import gc from './module.js'
const app = Express();
app.listen(3000,()=>{
    console.log('服务启动');
})


// gc()
app.use(gc)

app.get('/login',function(req,res){
    console.log('login----参数--->',req.query);
    res.json({
        code:200,
        msg:'hellow word'
    })
})


app.get('/aa',function(req,res){
    console.log('aa----参数--->',req.query);
    res.json({
        code:200,
        msg:'hellow word'
    })
})