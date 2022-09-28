// 注释生明，目的为了开发者可以读懂；你导入哪一个模块
/// <reference path="./component.ts" />

// namespace 命名空间，相当于 ts的模块化语法
namespace Home {
    export class Page {
        constructor() {
            // 不需要导入命名空间，ts可以自动找到所有的命名空间
            let header = new Component.Header();
            header.init();
            let p:Component.Child.Test ;
            p = {
                name:"ccc"
            }
        }
    }
}

let home = new Home.Page()