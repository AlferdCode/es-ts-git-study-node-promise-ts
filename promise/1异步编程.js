// 运行程序：同步 异步
// 同步：按照编码顺序有序执行，或者或，按照逻辑有序执行
// 异步：与编码顺序无关需要触发条件。。。。

console.log(1)
console.log(1)
console.log(1)
// 写在前面最后输出异步。。。
setTimeout(()=>{
    console.log(2)
},0)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)


