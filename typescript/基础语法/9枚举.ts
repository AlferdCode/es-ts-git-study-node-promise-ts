/**
 * enum 定义枚举, 表示一段有序的数字.每个数字带有一定的意义
 * readyState 自定义枚举名字
 * 默认从0开始
 */

enum readyState {
    up,
    down,
    left,
    rigth,
    success=200,
    e,
    f,
    g,
    h=300,
    n,
    m,
    w=400,
    q,
    a,
    b,
    c,
    d,
}
console.log(readyState.up);
console.log(readyState.success);
console.log(readyState.e);
console.log(readyState.f);
console.log(readyState.g);
console.log(readyState.h);
console.log(readyState.n);
console.log(readyState.m);
console.log(readyState.w);
console.log(readyState.q);
console.log(readyState.a);
console.log(readyState.b);
console.log(readyState.c);


