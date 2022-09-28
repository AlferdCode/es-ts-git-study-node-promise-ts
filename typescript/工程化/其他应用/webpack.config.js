// webpack.config.js 运行环境
console.log('执行环境滚为node');
// 什么时候执行
console.log('输入webpack 执行这个文件');
// 语法规则:
// node.js 语法规则
// 学习webpack 学习思路？
// 解决：开发者写的模块化代码，浏览器都不懂的问题
// 怎么解决的？
// 通过插件或者loader 读懂开发者的模块化，并进行 重新编译为 html css js 等代码
// ---> webpack 有哪些插件？哪些loader? 分别解决什么问题？
// 开发者学习哪些内容？
// 1：基础配置有哪些？
// 2：什么插件解决的是什么模块？
//   例如：es6 用 babel相关吵架呢
//        .ts 
//        .vue
//        .less
//        .sass 
// 3: webpack 还有很逗强大功能，有待探索。更友好你的工程化开发。

const path = require("path");
module.exports = {
    // 1：webpack.config.js 如何读到 开发者编写的代码？
    // ----> 通过entry 找到开发者的入口文件，从而实现编译所有魔魁啊，
    entry: "./src/index.ts",
    // 2: 用什么插件，将 .ts 编译为 es5的js? 
    //  ---> ts-loader
    // 2.1 再webpack.config.js中如何使用ts-loader
    // ---> 1 安装  编写ts-loader配置
    module: { // 编写loader配置
        rules: [ // 规则
            {
                test: /\.tsx?$/, // 匹配哪些文件后最
                use: 'ts-loader', // use 使用什么loader
                exclude: /node_modules/ // 不编译哪些文件
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    // 3：经过webpack处理后，把编译后的文件放在哪里呢？？？
    output: { // 配置打包后文件放在哪里
        path: path.resolve('./fsk'), // 配置打包后路径
        filename: 'my-first-webpack.bundle.js', // 输出的文件名
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}

// 总结：学习前端工具的思路是什么？