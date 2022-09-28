/**
 * 写接口思路是什么?
 * 1:创建服务
 * 2:定义接口地址
 * 3:定义接口请求方式
 * 4:如果获取请求参数
 * 5:确认接口是做什么? (使用参数做一些内容)
 * 6:输出接口运行结果? (怎么给客户端响应)
 */
/**
 * 接口:
 * 1:如何处理请求?
 *   1.1 问:传参的方式是什么? 
 *      - query 
 *      - params
 *      - body
 *      - 以上就是传参的方式.
 *    1.2问:参数具体内容是什么?
 *      - 服务端开发定义
 *    1.3问题:参数的数据格式是什么???
 *      - xml
 *      - json
 *      - form-data
 *      - urlencode
 *      - .... 直到http通信的数据格式有哪些
 * 2:如何做出响应?
 */

// 写接口方式三:router 路由中间件
import Express from "express";
import bodyParser from 'body-parser'
const app = Express();
// 1: app 与 router  是独立的关系
const router = Express.Router(); // 是expres上的中间件

// 1:如何获取query参数
router.post('/login', function (req, res) {
    console.log('login run');
    /**
     * 定义传参方式:query   ?username='ssss'&password=123
     * 定义参数内容 username password 
     * 定义参数格式:json
     * 定义参数赋值的具体的规则:
     *   1:usename  3-6为字母
     *   2:password 3位置的数字
     * 
     */
    let {
        username,
        password
    } = req.query;
    let userReg = /^[a-zA-Z]{3,6}$/;
    let padReg = /^\d{3}$/;
    // 如果usename password 参数不满住要求.
    if ( !username || !password || !userReg.test(username) || !padReg.test(password)) {
        // 告诉客户端参数不合法
        res.json({
            code:1001,
            msg:"参数不合法"
        })
        return
    }

    console.log('参数合法');
    res.json({
        code:200,
        msg:"login"
    })

})

/**
 * 定义地址:/test/params-value/params-valuve
 * 定义的参数：id 
 * 传参格式 :params 参数, 参数在服务端写好了,前端只需要根据位置 传对应的参数就可以了
 *   /test/123/sfsf23
 *   {id:123,token:sfsf23}
 */

router.get('/test/:id/:token',function(req,res){
    console.log(req.url); // 获取请i去地址 在中间件中用
    console.log(req.method); // 获取请求  在中间件中用
    console.log(req.headers); // 获取请求头
    console.log(req.query);   // 获取:query 参数 ?key=value
    console.log(req.params);  // 获取 params 参数 向url地址一样的参数./url/value
    console.log(req.body);    // 获取body参数 urlencode / json 数据,formdata 不能获取
    // console.log(req);
    res.json({
        code:'test'
    })
})


/**
 * 如何接受 body 传参 urlencode /json格式数据
 * 需要使用第三方中间 body-parser 
 */
router.post('/b',function(req,res){
    console.log('body参数=================>',req.body);    // 获取body参数 urlencode / json 数据,formdata 不能获取
    // console.log(req);
    res.json({
        code:'body urlencode 格式数据'
    })
})

app.use(function(req,res,next){

    console.log("执行中间件,来了老弟.....");
    console.log(req.query);
    console.log('-------------------分解----------------------------');
    next();
})
app.use(bodyParser.urlencoded())

app.use(router)


app.listen(3000, () => {
    console.log('服务启动');
})