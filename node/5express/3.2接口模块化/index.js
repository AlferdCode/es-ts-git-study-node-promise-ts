// 掌握代码的执行时间
import Express from 'express'
// 解决:index.js中 代码编写重复问题 (创建接口)
import config from './config.js'
const app = Express()
app.listen(8080,()=>{
    console.log('3000 serve running');
})

for(let i = 0;i<config.length;i++){
    let route = config[i];
    app[route.method](route.url,route.handler)
}

// app.get('/login',function(req,res){
//     res.json({code:"/login"})
// });

// app.get('/register',function(req,res){
//      res.josn({code:"register"})
// });


// app.get('/goodlist',function(req,res){

// })

// app.get('/detail',function(req,res){

// })

// app.get('/addshop',function(){

// })

// app.get('/delshop',function(){

// })



