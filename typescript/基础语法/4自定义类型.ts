// 类型别名: 给某一个静态类型重新起一个名字，

type str = string;

// 自定义对象类型
type dataItem = {
    name: str
    age: number
}



// interface 接口 作用：自定义对象类型
interface item {
    name: string
    age: number
    test?: number  // ? 设置test可有可无的属性
    // foo():void //  注意：  voild 只能在function函数中才能设置没有返回值
    readonly a: boolean  // readonly 设置某个属性是只读属性
    [propName: string]: any //  当一个对象中存在属性名不确定时候
    bar(): number // bar 赋值为函数，返回值为number
}


// 代码沉余比较高的、静态类型
// let data:{
//     name:string
//     age:number
// }[] = [
//     {
//         name: "123",
//         age: 123
//     }, {
//         name: "123",
//         age: 123
//     },
// ]


let data: dataItem[] = [
    {
        name: "123",
        age: 123
    }, {
        name: "123",
        age: 123
    },
]

let obj: item = {
    name: 'dfasd',
    age: 123,
    // foo(){return 123},
    a: true,
    dd: "fasdf",
    bar() { return 123 }
}
// obj.a = false // bug，因为只读

// 对于自定义对象类型问题：
// 能用interface 不用ty0pe 类型别名


// interface 为函数
interface say {
    // word 形参类型为 string 返回值为 string
    (word: string): string
    // .... 不写其他规则了
}

const foo: say = (word) => {
    return '123'
}

// 可索引类型 数组后者 字符串对象
interface StringArray {
    // index　索引　为 number类型
    // 索引的赋值为string类型
    [index: number]: string;
}

let strs:StringArray = ['1','aaa']
let str1:StringArray = 'fasljfoweqj'

// 难题：静态类型之前是可以相互嵌套引用的？？？






/*
ts 代码分为两部分
1： 规则怎么写
2： 逻辑怎么写 js 
*/
