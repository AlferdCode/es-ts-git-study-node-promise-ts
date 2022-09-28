/*
 *  https://www.whyone.ca.com/app/home?page=12&type_one='kafei'
 *  https:// 网络协议 传输层 https协议 一式两份，约束：客户端和服务段
 *  www    域名解析 ---> 云服务器控制台自己配置
 *  whyone.ca.com 域名
 *  www.whyone.ca.com/  域名地址 
 * /app/home  接口地址
 * ?page=12&type_one='kafei' 参数
 */
/**
 * 浏览器中输入url
 * 1：域名解析为
 *     ip     ----> 找到服务器（超级电脑）
 *     端口号 ---->  找到电脑上运行的服务
 * 2：接口地址 ----＞　服务器上具体接口，---> 运行某个函数
 * 3：参数    ----->  接口函数需要使用。
 * 4：以上全部正确返回浏览器需要全部内容
 */
// 用户输入url后浏览器做了哪些事情？
// 有几层网络协议，有哪些协议？


// 1：创建服务
// 2：创建接口
// 3：每个接口的开发思路
const http = require("http");
const gc = http.Server(function(req,res){
    console.log('有人访问服务器');
    res.end('hellow word')
})
gc.listen(3000,function(){
    console.log('node is ok');
})
