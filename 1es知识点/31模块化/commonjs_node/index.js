const moduleA = require('./moduleA');
const moduleB = require("./moduleB");
moduleB.a = 'new b '
console.log(moduleA.a);
console.log(moduleB.a);
// 模块独立性

// 问题：require() 函数   module.exports 对象 web浏览器没有、
// 所有不支持web端
console.log(module);
console.log(module.exports);
