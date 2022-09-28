// 处理文件路径，从来不校验文件是否存在，
const path = require('path');

console.log(__dirname); // 绝对路径。目录路径
console.log(__filename); // 运行文件，文件路径

/**
 * path.resolve() 相对路径，变为绝对路径
 */
console.log(path.resolve('./a.js'));//C:\Users\yq\Desktop\10期\node\3node入门内置模块\a.js

/**
 * path.join() 拼接路径,将所有参数拼接到一起变为绝对路径
 */
console.log(path.join('./a','./c','./c.js'))

console.log(path.join(__dirname,'./a.js'));

