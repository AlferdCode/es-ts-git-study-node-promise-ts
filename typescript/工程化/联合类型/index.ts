// 交叉类型：多种类型交叉使用
function foo<T,U>(a:T,b:U){

}

foo<string,number>('111',123)

interface Test {
    a:string
}

foo<Test,number>({a:''},123);


// <T>定义静态类型
class Student<T>{
    user = '123'
    // 再类的内部使用泛型
    getName(a:T){}
}
let a = new Student<string>()
// a.getName(213) // bug
a.getName('123kk')