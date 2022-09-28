const fs = require('fs');
/**
 * node.js中api特点
 * moduleName.api([options,],(err,res)=>{})
 * 1：api的回到函数异步执行
 *    api执行同步的
 * 2：回调函数有两个参数
 *    err 错误信息
 *    data api执行 
 */

/**
 * fs.readFile(path,callback)
 * 1：文件路径
 * 2：读完后执行的回调函数
 *   res 读文件结果 默认 buffer格式数据
 */
fs.readFile('./a.txt',(err,res)=>{
    console.log(res);
    console.log(String(res));
})

let data = {
    code:"2000",
    list:[]
}

/**
 * fs.writeFile(path,str_context,callback)
 * 往文件中写内容
 * path:文件路径
 * str_context 写的内容
 * callback 写完后执行函数
 * 用途：爬虫的数据写入到json文件中
 */
fs.writeFile('./b.json',JSON.stringify(data),(err,)=>{
    console.log('写完了');
})

fs.mkdir('./zidingyi',function(){
    console.log('创建目录文昌');
    fs.writeFile('./zidingyi/b.json',JSON.stringify(data),(err,)=>{
        console.log('写完了');
    })
})