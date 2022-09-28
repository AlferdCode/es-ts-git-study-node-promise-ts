// 元组
// 1: 约束变量赋值为数组
// 2：数组元素赋值页约束
// 3：数组长度都限制

let arr:[number,string,number] = [1,'1',12];
arr.push('123213'); // 没有错误
console.log(arr);


// 对象的静态类型
let data:{
    code:number
    name:string
} = {
    code:200,
    name:"aga",
    // age:123 // bug
}


// 数组
// nums 赋值为数组，数组元素只能是number 长度不限制
let nums:number[] = [1,2,3,4,4,5,6,];
let strs:string[] = ['123']

let list:{
    name:string
    age:number
    dec:string
}[] = [
    {
        name:"afdsf",
        age:123,
        dec:'123123',
        // a:123 // bug:
    }
]

// ts 没有js灵活，
// 当js代码两大时候，bug 隐藏在项目内部，而ts是一个具有强大的类型检查的语言。


// 函数
// :()=>number 要求赋值为函数，并且返回值为number类型
const getSage:()=>number = ()=>{
    return 123 
}
// :void 函数不能有返回值
function foo():void{

    // return 1231 
}
// 类
class Person{}
// :Person 越苏静态类型为类实例对象。
const perphon:Person = new Person()


