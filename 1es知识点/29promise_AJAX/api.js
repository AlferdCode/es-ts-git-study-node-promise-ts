function getData(query) { // {aa:112}
   // return new Promise((resolve, resject) => {
   //    return $ajax({ url: 'http://localhost:3000/', data: query }).then(res => {
   //       console.log(res, 'api');
   //       resolve(res)
   //       // return res
   //    })
   // })

   return $ajax({ url: 'http://localhost:3000/', data: query }).then(res => {
      console.log(res, 'api');
      return res
   })
   
}