function foo(req,res,next){
    console.log('监听是否有客户端访问服务器');
    console.log('获取所有接口参数',req.query);
    // req 公共的req
    next()
}
console.log('module.js');

// module.exports = foo;
export default foo;

