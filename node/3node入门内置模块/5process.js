// procee 系统的进程模块
// 用process 区分代码的运行环境
// 未来在框架的工程化开发中；用来区分前端代码的运行环境

console.log(process.env);

process.env.NODE_ENV = 'development'
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV==='development'){
    console.log('开发环境');
}

process.env.NODE_ENV = 'production'
if(process.env.NODE_ENV==='production'){
    console.log('生产环境');
}