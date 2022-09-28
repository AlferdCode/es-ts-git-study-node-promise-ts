import { pool } from './db.js'
class UserTable {
    // 构造器
    constructor(){
        // 给实例对象添加静态属性
        this.sql = {
            selecttUserName:`SELECT * FROM user WHERE username = ?;`,
            insterUser:`INSERT INTO user (username,password) VALUES (?,?);`,
        }
    }

    // 查询user表中username
    getUser(query,callback){
        // 函数中this 为 UserTable 的实例对象
        pool.query(this.sql.selecttUserName,query,callback)
    }
    // user表中插入user
    addUser(query,callback){
        pool.query(this.sql.insterUser,query,callback)
    }

}

export default new UserTable()
/**
 * 导出 userTable实例对象
 * 静态属性 sql 
 * 原型属性 getUser  addUser
 * 
 * userTable.getUser()
 */



