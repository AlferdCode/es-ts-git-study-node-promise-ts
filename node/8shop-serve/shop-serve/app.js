var express = require("express");
var cors = require("cors");
const bodyParser = require('body-parser');

// 引入接口模块
var api=require("./api/api.js")


var app=express();

app.use(express.static('./dist'))
// 跨域配置 模块
app.use(cors());
// 处理Post请求
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
// })
app.use('/upload',express.static(__dirname+'/upload'))
app.use('/www',express.static(__dirname+'/www'))
app.use("/api",api);
app.listen(9527,()=>{
    console.log("9527");
})


