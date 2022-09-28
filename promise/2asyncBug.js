// 例子
// 分析程序思路：根据思路认为程序输出 1 2 3 4 5 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// ------> 期望结果，不能完成你的程序

console.log(1);
let p = new Promise((resolve,reject)=>{
    console.log(2);
    resolve()
})
setTimeout(()=>{
    console.log(5);
})

p.then(()=>{
    console.log(3);
}).then(()=>{
    console.log(4);

})

// 异步关键：找异步程序执行结束的出口？？？
// 异步bug,异步方式解决。
