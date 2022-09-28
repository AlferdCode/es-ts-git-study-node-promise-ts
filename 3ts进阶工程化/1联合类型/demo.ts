// 联合类型和类型保护

interface blc {
    fly: boolean,
    // 要求：say 属性是一个函数，并且返回值是一个对象
    say: () => {}
}

interface zy {
    fly: boolean,
    // 要求 unsay 是韩式；返回值是数组
    unsay: () => []
}
// :blc|zy 联合类型
// blc zy 都有的类型可以提示 可以使用；不同需要类型保护
function wlj(p: blc | zy) {
    // 断言是类型保护
    if (p.fly) {
        // p 如果使用 blc类型保护，那么执行 say()
        (p as blc).say()
    } else {
        // 否者执行 unsay() 函数
        (p as zy).unsay()
    }
}

// in语法类型保护
function wlj1(p: blc | zy) {
    // p 中 有没有 say 
    if ('say' in p) {
        p.say
    } else {
        p.unsay()
    }
    // bug
    //     if(p.say){
    //         p.say()
    //     }
}

// 使用typeof 实现类型保护
function sum(a: number | string, b: number) {
    if (typeof a === 'string') {
        return a + b
    } else {
        return a + b
    }
}
