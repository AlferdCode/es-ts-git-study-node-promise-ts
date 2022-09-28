/**
 * 1:用什么声明变量
 *   let const var import function class
 * 2：变量赋值什么类型
 *    ... void never any 元组 自定义类型 
 * 3：变量赋值是什么
 *    = 
 * 
 * 语法：
 * let 变量:静态类型 = 变量赋值
 */
// 1: 声明一个变量a 2 a只能赋值number
let a:number;
a = 123;
// a = '123' // bug

let str:string = '123';
// str = 123;
let bool:boolean = true;
// any为任意类型。
let b:any = 123;
b = '2343';

