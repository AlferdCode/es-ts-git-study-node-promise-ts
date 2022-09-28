// 联合类型: 当一个变量约束多种静态类型时候
let str: number | string | [];
str = '123'
str = 123
str = [];

interface dyf {
    name: '丁云菲' | '耿闯' | "250"   // 字面量类型的类和类型
    say: () => string;
}

interface gjj {
    name: "高俊杰" | "张岐",
    unsay: () => number
}

// 类型保护  as 
function foo(p: dyf | gjj) {
    if (p.name) {
        // p.say() // bug 在联合类型,有非公共属性的部分,如何开启类型保护

        // p 如何使用 dyf 类型 难么执行say
        (p as dyf).say()
    } else {
        // as 判断某一个变量,使用的哪一个静态类型.
        (p as gjj).unsay()
    }
}

foo({
    name: '250',
    say() {
        console.log('1232');

        return '123'
    }
})


// in

// in语法类型保护
function wlj1(p: dyf | gjj) {
    // p 中 有没有 say 
    // in作用:验证 say 是不是 p中内容.
    if ('say' in p) {
        p.say()
    } else {
        p.unsay()
    }
    // bug
    // if(p.say){ // 识别 gjj 上没有 say属性
    //     p.say()
    // }
}

wlj1({
    name: '250',
    say() {
        console.log('slj123213');
        return '123'
    }
})

// 很重要 