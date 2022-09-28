async function getView(){
//   let data = await getDateStore();
  // 7 getDateStore();
  // 8:.then()
  
  getDateStore().then(data=>{
      console.log(data,'根据data进行业务处理');
  })
}

// 1: promise怎么参数给你
// let res = await p() await 返回值是什么或者 then 回参是什么