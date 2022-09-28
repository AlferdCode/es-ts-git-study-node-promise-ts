const ajax = require('axios')
// console.log(ajax);
// ajax({
//     url:'http://www.baidu.com',
//     method:'get',
    
// }).then((result) => {
//    console.log(result.data); 
// }).catch((err) => {
// });

ajax.get('https://www.baidu.com').then((data)=>{
    console.log(data.data);
})
// XMLHttpRequest  浏览建立网络通信的对象 

// http / http2 / https    node.js的网络通信魔魁啊