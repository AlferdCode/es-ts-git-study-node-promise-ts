// ts --> tsc 编译js ---> 1demo.js -> 运行是1demo.js
let a:number = 123;
console.log(a);

// 由于每次编译，学习效率过低
// 所以安装 ts-node@8.4.1 版本 可以在node上直接运行ts 
// npm i ts-node@8.4.1 -D
// npx ts-node -v