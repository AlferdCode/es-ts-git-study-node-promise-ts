async function getDate() {
    // 1:return 
    // 2 await 
    // 3 $ajax()
    // 执行顺序是什么？

    //  return 返回的是 $ajax()的返回值promise实例
    return await $ajax({
        url: 'http://localhost:3000',
    })
}