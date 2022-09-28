# 中间件

- 第三方  (别人写的,我直接用)
- express内置的 (我直接用)
- 我写的,我自己用,**我写的我给别人用**

## 如何自定义中间件
应用:
- 1: 所有接口都需要处理的业务,统一中间件方式解决.  
   - token
   - 参数验证
   - 错误异常处理
   - 接口日志管理
- 2: 个别多个(3个以上)接口,统一业务,也可以通过**条件中间件解决**

技术角度:
- 模块化导出一个函数

~~~js
function foo(req,res,next){
    console.log('foo run');
    next()
}
export default foo;

~~~
~~~js
import Express  from "express";
import gc from './module.js'
const app = Express();
app.listen(3000,()=>{
    console.log('服务启动');
})
app.use(gc)
~~~


##　如何使用第三方中间

~~~
一查二看三下四导五用
~~~
- 一查, 自己搜索找到需要使用什么中间件
- 二看, 看中间件使用说明文档
-  三下, 通过 npm 将中间件下载到项目中
-  四导, 项目需要使用的文件中导入下载的中间件
-  五用, 根据使用文档 app.use(中间件) 