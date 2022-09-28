// // 类本身也是一个静态类型
// class Point {
//     x: number;
//     y: number;
// }

// // 接口继承类的 Point 类
// interface Point3d extends Point {
//     z: number;
// }


// let point:Point3d = {
//     x:123,
//     y:123,
//     z:234
// }

// 抽象类abstract 也是一个静态类型   
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

// bug
let dog:Animal; // 创建一个抽象类的引用
// dog = new Animal() // 禁止创建抽象类的实例

// dog ={
//     makeSound(){},
//     move(){}
// }

interface test extends Animal {
    a:string
}

let obj:test = {
    a:"123",
    makeSound(){},
    move(){}
}

/**
 * 注意:
 * 当一个类本身也是一个静态类型的时候,注意:不能用于实例对象
 * 抽象类 关键字 abstract
 * 只能用于指定静态类型. interface接口可以继承类
 */