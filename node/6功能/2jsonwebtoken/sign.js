
import jwt from 'jsonwebtoken';


// token 生成\
/**
 * jwt.sing(obj,secent,options[,callback])
 * 作用：生成toKen
 * 参一:obj 每个人的身份信息 username password rule
 * 参二：密钥
 * 参三：token负载配置（过期时间，签发人，备案号，主题）
 * 参四（可有可无）：回调函数，token 生成后执行
 *    回参一：错误对象
 *    回参二：token
 * 无参四：有返回值，返回值为 token 
 */

let token =  jwt.sign({ // token的主体
    foo: 'bar',  
    name:"aaa"
},'my_token_miyao', {
    // algorithm: 'RS256' // bug
    expiresIn: 1000 * 3, // 过期时间
    issuer: '102 web', // 签发人
    subject: '主题', // 主题
    audience: 'custtom', // 受众对象
    jwtid:'1234687641546'  // 编号

});

console.log(new Date().getTime());
console.log(token);
setTimeout(()=>{
    /**
     * jwt.verify()
     * 作用：token验证，铭文解码token
     * 参一：token
     * 参二：密钥
     * 参三：回调函数  解密token完成后执行
     *    回参一：错误对象
     *    回参二：token详细信息(身份，过期时间 .....)          
     */
    // token 验证，
    jwt.verify(token,'my_token_miyao',(err,data)=>{
        console.log(err);
        console.log(data);
        console.log('token 生成时间',data.iat);
        console.log('token 到期时间',data.exp);
    })
    console.log(123);
},5000)