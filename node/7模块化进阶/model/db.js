import mysql from 'mysql'

export  const pool = mysql.createPool({
    connectionLimit : 100,// 一次性支持多少个链接
    host            : 'localhost',// 服务地址，远程的需要改远程地址
    user            : 'root', // 登录用户名
    port            : '3306', // 端口号
    password        : '12345678',// 登录密码
    database        : 'biyao'
})






