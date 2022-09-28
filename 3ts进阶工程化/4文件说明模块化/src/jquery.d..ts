// 解决 import $ from 'jquery'
// ---> ts 中使用的模块问题

// 说明：import 导入的'jquery' 是一个模块
declare module 'jquery' {
    // 配置使用的模块
    interface jqueryInterface {
        html: (html: string) => jqueryInterface
        css: (style: {}) => jqueryInterface
        append: (jq: jqueryInterface) => jqueryInterface
    }

    function $(param:()=>void):void
    function $(param:string):jqueryInterface

    namespace $ {
        namespace fn{
            function init():void;
            class init{}
        }
    }


    // 导出 对 $的解释说明，才能有效
    export = $;

}

