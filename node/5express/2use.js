// 管道函数
import Express  from "express";
const app = Express();
app.listen(3000,()=>{
    console.log('服务启动');
})
// 1 next()作用：执行下一个管道函数
// 谁是管道函数？？？
// app.use 的回调函数就是管道函数

// 1：app.use() 启动服务执行use
// 2: use的回调是客户端访问服务执行。
// 3：app.use 的回调函数；req/res 为一个对象

// app.use(function(req,res,next){
//     console.log('user 1');
//     req.test = '看看第一个use能蹦呢获取'
//     // 重点：  理解 next的特点
//     next()
// },function(req,res,next){
//     console.log('use ++');
//     next()
// },function(req,res,next){
//     // 1 个use 可以有n个回调函数
//     console.log('use ---');
//     next()
// })
// app.use(function(req,res,next){
//     console.log('user 2');
//     console.log(req.test); // 证明多个use只有一个req 
//     req.test = 'aaaa'
//     next()
// })
// app.use(function(req,res,next){
//     console.log('user 3');
//     console.log(req.test);
//     next()
// })

// 为什么上面的所有回到函数全部都会执行？？？？？


// 注意:按需执行 use回调.
// use() 形参一:控制执

app.use('/api',function(req,res,next){
    // 执行条件;地址 /api
    console.log('api use ');
    next()
})
app.use('/api/c',function(req,res,next){
    // 找bug;
    console.log('api c use ');
    next()
})




app.use('/cc',function(req,res,next){
    // 执行条件 地址/cc
    console.log('cc use ');
})




