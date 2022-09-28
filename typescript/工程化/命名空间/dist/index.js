"use strict";
var Child;
(function (Child) {
    function foo() {
        console.log('foo run');
    }
    Child.foo = foo;
})(Child || (Child = {}));
var Componets;
(function (Componets) {
    // 命名空间下 所有需要其他ts访问的 内容都需要通过exprot 导出
    class Header {
        constructor() {
            console.log('header run');
            Child.foo();
        }
    }
    Componets.Header = Header;
    // export 是ts中导出模块意思
    class content {
    }
    Componets.content = content;
    class footer {
    }
    Componets.footer = footer;
})(Componets || (Componets = {}));
// 注释说明文件,没有实质作用
/// <reference path="./demo.ts" />
// namespace 命令空间 
// Home 自定义 模块名
var Home;
(function (Home) {
    class Page {
        constructor() {
            // 命名空间不需要导入或者导出
            // 导入 Componets 下的Header 类
            this.header = new Componets.Header();
            console.log('page run');
        }
    }
    Home.Page = Page;
    Home.page = new Page();
})(Home || (Home = {}));
