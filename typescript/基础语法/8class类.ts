//  ???
interface  Person{
    name:string
    age:number
}
// 如何定义一个类
class Person {
    // constructor 是什么?什么时候执行
    // 构造器
    // 执行:new Person  super()
    constructor(options){
        let { name,age } = options
        // this  是谁呢??  new 实例的对象
        this.name = name;
        // 给实例对象添加静态属性age
        this.age = age;
    }
    private cname = 'aaaa'
    protected a = '在类内部或者子类中访问'
    public b = '任意的位置都可以访问'
    // 添加是原型方法
    get(){
        console.log(this.cname); 
        console.log(this.b);
        return this.name
    }
}

// 类的作用:创建实例对象
let p = new Person({
    name:"丁云非",
    age:123
})
console.log(p.get());
// console.log(p.cname); // bug 

console.log(p);

// ----> 注意:class类是可以创建一些其他的静态类型

interface User extends Person {
    test:string
}
class User extends Person {
    constructor(options){
        // 触发Person类的构造器
        super({name:'耿闯',age:123});
        this.test = options.test;
    }
    foo(){
        console.log(this.a);
        console.log(this.b);
    }
}

let u = new User({
    test:'123'
})
console.log(u.get());
console.log(u);
u.foo()
console.log(u.b);

// console.log(u.a);

/**
 * private 只能在类的内部访问
 * protected 在类一级子类中访问
 * public 公共属性;类内部和外部都可以访问
 */
