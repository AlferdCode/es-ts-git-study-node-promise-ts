
export const a = '123';
export const b = {};
export function fn(){}

export class point {} 

// 导出的 给变量换名字
export {a as aStatic,b as bStatic,fn as getUser,point as getPoint}