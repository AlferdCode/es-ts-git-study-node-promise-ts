var mysql = require("mysql")

var pool = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "123456",
	database: "biyao",
	port: "3306"
})

module.exports = pool;
// 访问服务地址
// 电脑的
// Http://ip:9528/api/goodList