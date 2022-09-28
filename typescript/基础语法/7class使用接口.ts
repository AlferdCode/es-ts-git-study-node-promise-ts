interface Person{
    name: string
    age?:number
    say():number
}

/**
 * implements Person 作用 让 user类中 使用Persion 接口
 * 适合约束类中 特点的属性.
 */
class User implements Person{
    constructor(){

    }

    name = '123';
    say(){
        return 123
    }
    // bar test 可有可无的属性
    bar = 123;
    test = '1232'
    // age = 'fassdfasd' // bug
}

