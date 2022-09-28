// 注释说明文件,没有实质作用
/// <reference path="./demo.ts" />


// namespace 命令空间 
// Home 自定义 模块名
namespace Home {
    export class Page {
        constructor(){
            console.log('page run');
            
        }
        // 命名空间不需要导入或者导出
        // 导入 Componets 下的Header 类
         header = new Componets.Header()
    }
    export let page =  new Page()
}