interface Test {
    a:string
}

// extends 接口继承
// study 中有了Test 所有的配置
interface study extends Test{
    foo():string
}

let obj:study = {
    foo(){
        return '123'
    },
    a:'123'
}

