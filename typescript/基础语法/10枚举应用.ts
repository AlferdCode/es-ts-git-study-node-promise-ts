// 枚举应用
// node or js 根据某个变量不同的状态；执行不同的代码
// 状态 可以使用枚举

// 案例一：开关业务
enum readStatus {
    oFF,
    ready,
    go,
}

// 根据不同状态，执行不行的代码
function run(state) {
    if (state === readStatus.oFF) {
        console.log('关闭开关');
        return false
    } else if (state === readStatus.ready) {
        console.log('准备中');
    } else if (state === readStatus.go) {
        console.log('可以执行了');
        return true
    }
}


// 案例二：根据服务器返回不同的状态码处理业务员
// 1：通过枚举提前定义好装填码
// 2：功能处理函数中使用枚举

// 练习
// 根据服务端状态码处理业务
// 200 请求成功
// 201 无效token
// 202 token 国企
// 203 用户名已经zhuxiao
// 500 服务端有bug
// 404 找不到页面
// 通过施一公枚举提高；代码可读性

enum resposeStatus {
    success = 200,
    noToken,
    tokenOutTime,
    user,
    urlerr = 404,
    serveErr = 500
}

// axios 请求拦截器中
function respose(data) {
    if (data.code == resposeStatus.success) {
        console.log('请求成功，渲染页面');
        return
    } else if (data.code == resposeStatus.noToken) {
        console.log('无效trequestCodeoken 请重新获取token');
        return
    } else if (data.code == resposeStatus.tokenOutTime) {
        console.log('token过去；请重新获取token');
        return
    } else if (data.code == resposeStatus.serveErr) {
        console.log('服务器出错了。跳转到 500页面');
        return
    } else if (data.code == resposeStatus.urlerr) {
        console.log('找不到这个页面 跳转到404');
    } else {
        console.log('哎呀出问题了');
    }

}