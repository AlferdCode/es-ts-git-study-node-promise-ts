// 1：
// const express = require('express');// 导入安装第三方模块
// // 2: 创建服务对西安g
// const app = express()
// // 3：创建端口号  0-1000 系统中已经占位端口号
// app.listen(4001,()=>{
//     console.log('服务启动');
// })


import Express  from "express";
const app = Express();
app.listen(3000,()=>{
    console.log('服务启动');
})
