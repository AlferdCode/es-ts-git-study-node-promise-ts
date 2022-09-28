// console.log(a)
// b.js 中b 变量污染了 a.js 中的b
// var b = '12342';
// 因为都在window 都是全局作用域下的b.
// 又因为一个作用域只能由一个变量。


if(!window.myPlugin){
    myPlugin = {}
}
myPlugin.foo = (function(){

    var b = '12342';

    return function(){
        return b
    }
})()

// 解决方式：
// let    不行   a.js  b.js 通过script 导入实在同一个作用域下。