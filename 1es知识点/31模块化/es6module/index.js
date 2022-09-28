console.log(this); // undefined
console.log(moduleA);// {a:123} 证明 import 被提升到最顶端了
import moduleA from './a.js'
console.log(moduleA);
// export 导出 的 导入方式
import {init,a,point} from './some.js';
// bug 用export 导出的 不能用下面方式导入
// import some from './some.js';

init();
console.log(a);
console.log(point)


// 导入改名后的模块
import {aStatic,bStatic,getPoint,getUser} from './some_as.js';
console.log('some_name',aStatic);
console.log('some_name',bStatic);
console.log('some_name',getPoint);

console.log('some_name',getUser);

// 导入模块要时候;另起别名
import {a as wlj,b as xcy,fn as sun,point as Pointa } from './import_name.js'
console.log('import时候改名字',wlj);
console.log('import时候改名字',xcy);
console.log('import时候改名字',sun);
console.log('import时候改名字',Pointa);

// all.js 导出多个;一次性导入所有的
import *as obj from './all.js'
console.log('一次性导入所有的',obj);

// 导入一个js文件中 同时存在 exprot export default
// import ed from './c.js';
// import{ac,bc } from './c.js'
// console.log(ed);
// console.log(ac,bc);

// 一次性导入 export 和 export defalut
import ed,{ac,bc} from './c.js'
console.log(ed);
console.log(ac,bc);