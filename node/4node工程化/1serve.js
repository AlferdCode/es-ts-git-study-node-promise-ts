/**
 * 一台电脑；可以运行多个服务，端口号区分，端口号唯一
 * 一个服务上可以有多个接口，路由地址区分
 * ip 找到电脑位置
 * ip+端口，某电脑某个服务
 * ip+端口+路由 某服务上的接口
 */

// 我们学习：如何写服务，如何写接口。

// 1: 如何创建服务 端口号
// 1.1 导入express  -----> expres解决了哪些业务问题？
const express = require('express');
// 1.2 创建服务对象 ****  ----> 学习服务对象上有哪些内哦让那个
const app = express();
// 1.3 创建端口号生成服务
app.listen(3000,()=>{console.log('30000 serve running')})

// 启动服务：运行创建服务代码所在的文件。

app.get('/api/login',(req,res)=>{
    // 为什么要接受请求参数？参数将来有什么用？
    // 前端传递的参数key为什么是提前定义好的？？？
    let query = req.query;
    let username = query.username;
    console.log('获取请求参数----------->',query);

    // ------

    // 中间的代码；写的是接口的具体业务代码.....

    // -----

    // res.download('./package.json')\
    res.json({
        code:200,
        msg:"欢迎！欢迎！！！"
    })
})



