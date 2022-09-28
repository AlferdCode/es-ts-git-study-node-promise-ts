interface Style{
    color?:string
    fontSize?:string
    width?:string
    [propName:string]:any
}

interface jqueryRes {
    html(str:string):jqueryRes
    css(params:Style):jqueryRes
    append(params:jqueryRes):jqueryRes
}  
//解决 找不到模块“jquery”或其相应的类型声明
declare module 'jquery'{
    function $(param:()=>void):void
    // 类型“void”上不存在属性“html”。ts(2339)
    function $(param:string): jqueryRes

    // 说明在模块化中 $ 是一个对象
    namespace ${
        namespace fn {
            class init{}
            function init():jqueryRes
        }
    }
//  解决  类型 "typeof import("jquery")" 没有调用签名
    export = $
}