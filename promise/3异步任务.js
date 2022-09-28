console.log(1);
setTimeout(()=>{
    console.log(2);
},0)
console.log(3)
let p = new Promise((resolve,reject)=>{
    console.log(4);// Promise 的回调同步执行的
    resolve()
})

console.log(5);
p.then(()=>{
    // then 回到是异步。
    // 总结：Promise 原型方法中api 都是异步执行的
    console.log(6);
})
console.log(7);