namespace Componets{
    // 命名空间下 所有需要其他ts访问的 内容都需要通过exprot 导出
    export class Header {
        constructor(){
            console.log('header run');
            Child.foo();
        }
    }
    // export 是ts中导出模块意思
    export class content {

    }
    export class footer {

    }
}