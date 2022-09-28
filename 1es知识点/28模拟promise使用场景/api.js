function getData() { 
    return new Promise(function(resoleve,reject){
   // 模拟向服务器发送请异步代码
      setTimeout(()=>{
          if(data){
              resoleve(data)
          }else{
              reject("请求失败了")
          }
      },1000)
    })

}