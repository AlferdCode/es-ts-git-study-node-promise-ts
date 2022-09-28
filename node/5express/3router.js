// 写接口方式三:router 路由中间件
import Express from "express";
const app = Express();
// 1: app 与 router  是独立的关系
const router = Express.Router(); // 是expres上的中间件


router.get('/login',function(req,res){
    // 路由上的接口
    res.json({
        code:'login'
    })
})


router.post('/aa',function(req,res){
    console.log('aa run');
    // 路由上的接口
    res.json({
        code:'aa'
    })
})
// 将路由中间件挂在到服务上 ---->路由上所有接口为服务接口...

app.use(router)


app.listen(3000,()=>{
    console.log('服务启动');
})