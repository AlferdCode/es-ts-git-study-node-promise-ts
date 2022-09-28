// 1:引入jqury
// 二次封装回调函数方式
// 解决了；1：贡公共地址 公共请求方式的问题
// function axios (options) { 
//     let baseUrl = 'http://localhost:9527/api';
//     // let url =option.url;
//     // let method = option.method
//     let { url="",method='get',data={},success }  = options
//     $.ajax({
//         method,
//         data,
//         url:baseUrl+url,
//         success(data){
//             success(data)
//         },
//         // success:function(){},
//         error:()=>{

//         }
//     })
// }


// axios({
//     url:"/login",
//     data:{
//         aa:"123"
//     },
//     success(res){

//     }
// })


// 让封装支持promise 风格。。。
function axios(options) {
    let baseUrl = 'http://localhost:9527/api';
    // let url =option.url;
    // let method = option.method
    let {
        url = "", method = 'get', data = {}, success
    } = options
    return new Promise((resolve, reject) => {
        $.ajax({
            method,
            data,
            url: baseUrl + url,
            success(res) {
                resolve(res)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

let p = axios({
    url: "/login",
    method: "post",
    data: {}
});
p.then((res) => {


}).catch((err) => {

});

// 支持 promise 回调语法
function _axios(options) {
    let baseUrl = 'http://localhost:9527/api';
    // let url =option.url;
    // let method = option.method
    let {
        url = "", method = 'get', data = {}, success
    } = options
    return new Promise((resolve, reject) => {
        $.ajax({
            method,
            data,
            url: baseUrl + url,
            success(res) {
                let data = res.data;
                if (data.code === 4) {
                    alert('你的参数不合法')
                } else if (data.code === 0) {
                    alert('你的token过期了')
                } else if (data === 3) {
                    alert('服务器出错误了请练习管理元')
                } else {
                    if (typeof success === 'function') {
                        success(res)
                    };
                    resolve(res);
                }
            },
            error(err) {
                reject(err)
            }
        })
    })
}


axios({
    url: "/login",
    data: {
        aa: "123"
    },
    success(res) {

    }
})

// 