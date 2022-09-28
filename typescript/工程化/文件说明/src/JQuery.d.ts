

// 说明的$是一个函数

// 注意：function 作用：解释声明$是一个函数，不是定义函数
declare function $ (params:()=>void):void;

interface Style {
    width?:string
    height?:string
    fontSize?:string
}

interface jqueryRes {
    html:(str:string)=>jqueryRes
    css(params:Style):jqueryRes
}

declare function $ (params:string):jqueryRes;

// 説明$是一個對象
// namespace 解决命名冲突问题
declare namespace $ {
    // $.fn
    namespace fn {
        // new $.fn.init() 为一个实例类
        // 是一个静态类型 
        class init{
            constructor(params:any)
        };
        // $.fn.init() 是一个函数
        function init():void;
    }
}