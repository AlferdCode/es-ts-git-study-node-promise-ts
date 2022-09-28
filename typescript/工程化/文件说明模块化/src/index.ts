// 问题：导入模块
// $ 是 jquery 模块下的 $ 
import $ from 'jquery'

$(function () {
    $('body').html('你好哈').css({
        'color': "red",
        fontSize: '30px'
    }).append($('<h1>hellow word</h1>'))
    new $.fn.init()
    $.fn.init()

})