# jsonwebtoken

> 租用是生成token 


## token

简单理解：随机字符串

主要内容：
- Header（头部）
- Payload（负载）
- Signature（签名）


### 负载
- iss (issuer)：签发人
- exp (expiration time)：过期时间
- sub (subject)：主题
- aud (audience)：受众
- nbf (Not Before)：生效时间
- iat (Issued At)：签发时间
- jti (JWT ID)：编号

### 作用

> 代替session验证 身份


##　基本使用

安装:

> npm install jsonwebtoken -D

使用

生成token


验证token 