/**
 * 1:定义泛型
 * 2:赋值什么静态类型
 * 3:给哪个变量绑定静态类型
 * 4:什么时候使用泛型?
 *   当一个变量的静态类型是动态的时候,使用泛型
 */
/**
 * <T> 定义泛型
 * arg:T 使用泛型
 * :T 使用泛型
 * 
 * <number> ---> T === number类型
 * identity<number>(123) 给泛型赋值
 */
//  function identity<T>(arg: T): T {
//     return arg;
// }

// identity<number>(123)
// identity<string>("myString");

// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }
// interface Item {
//     name:string;
// }
// loggingIdentity<Item>([{name:"aa"}])


// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;
// myIdentity<string>('123')


// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };


// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

// loggingIdentity({
//     length:3,
// })


// ???

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!