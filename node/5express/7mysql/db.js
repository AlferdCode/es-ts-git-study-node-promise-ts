// 导入插件mysql 作用:建立node-serve 与 mysql链接
import mysql from 'mysql';

/**
 * mysql.createPool()
 * 作用: 创建连接池(多个链接)
 * 返回:pool 实例对象
 *     pool.query() 向数据库发送请求,并处理响应
 */
const pool  = mysql.createPool({
    connectionLimit : 10,// 一次性支持多少个链接
    host            : 'localhost',// 服务地址，远程的需要改远程地址
    user            : 'root', // 登录用户名
    port            : '3306', // 端口号
    password        : '12345678',// 登录密码
    database        : 'student'
  });

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
//   });

export default pool;

/**
 * 数据库client 与数据库server通信步骤
 * 第一步：建立数据库链接
 * 第二部：clent 向 server 通过sql语句发送请i去
 * 第三步：server 根据sql请求给 client响应
 */

// 官方文档 http://t.zoukankan.com/wjlbk-p-12633347.html