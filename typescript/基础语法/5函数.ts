// 形参 a number b number 返回值为numbner
function add(a:number,b:number):number{
    //  return a+b+'' // 坑  因为指定了返回值为number
     return a+b
 }

 add(1,2)

//  never 不能执行到最后
// 1：错误  2:死循环（爬虫程序）
 function errEmiter():never{
    throw new Error(); // 场景1 有错误了；所以不可能执行完毕
    console.log('111');
    // while(true){}     //  场景2 一直为true 所以下面一直不可能执行完毕
}



// 以下为解构赋值类型注解的写法
function add1({first,s}:{first:number,s:number}):number{
    return first + s
}
add1({
    first:123,
    s:123
})


/**
 * <dyf> 声明一个类型变量
 * :dyf 使用静态类型
 * @param a 
 */
function foo<dyf>(a:dyf){

}

foo<string>('123') // dyf = string
foo<number>(123) // dyf = number
foo<boolean>(true) // dyf = boolean