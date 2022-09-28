import Express  from "express";
import path from 'path'
const app = Express();
app.listen(3000,()=>{
    console.log('服务启动');
})

// 指定那个一个目录下的文件为静态资源文件 
/**
 * Express.static() 指定服务的静态资源目录
 * 静态资源目录下文件都可以被浏览器方式; /  --> 查找public/index.html
 * 
 */

// 挂在静态资源中间件
app.use(Express.static(path.resolve('./www')))