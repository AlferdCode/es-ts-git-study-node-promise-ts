// 再npm 依赖中 所有依赖的包的 解释说明文件特点 @types/npm_name
// 例如 jquey 的  @types/jquery 
// 例如　vue 的  @types/vue

$(function(){
    console.log('jquery 加载了');
    //  问题 对于 $ 同一个函数 参数 可能是 函数 也可以是string 以及其他如何解决
    $('body').html('初始化body').css({
        fontSize:"14px"
    })
    //1 当 $ 是一个对象如何解决
    //2 new 构造函数问题如何解决  
    let jquery=  new $.fn.init()
    console.log(jquery);
    
    $.fn.init();
  })

// 注意:联系写 某个库的解释说明文件.
// 如果未来ts写代码有问题了. 安装 @types/npm_bao 解决ts报错