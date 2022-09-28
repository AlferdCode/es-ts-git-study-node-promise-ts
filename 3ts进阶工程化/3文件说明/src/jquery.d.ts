
interface JquerRes {
    html:(params:string)=>JquerRes
    css(params:{
        [propName:string]:string,
    }):JquerRes
    [propName:string]:(params:any)=>any
}

// 说明的$是一个函数

// 注意：function 作用：解释声明$是一个函数，不是定义函数
declare function $ (params:()=>void):void;

// 函数重载
// $ 形参可能是函数 可能是 string
// 如果只是参数不同，可以用联合类型实现。
// 如果不同参数不同返回值，只能用函数重载
declare function $(params:string):{
    // 1：解释：＄是一个函数
    // 2: 形参是string
    // 3: 返回值是一个对象
    html:(params:string)=> JquerRes
}


// $.fn 说明 $是一个对象
// 为了防止命名冲突，所以使用命名空间
declare namespace $ {
    // fn 是一个对象文件
    namespace fn {
        // new $.fn.init()
        class init{}
        // $.fn.init()
        function init():void
    }
} 
