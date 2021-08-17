// let result: unknown;
// result.toFixed(); // 提示 ts(2571)

import { type } from 'os'

// /**
//  * 第一种方式定义数组
//  */
// // 子元素是数字类型的数组
// let arrayOfNumber: number[] = [1, 2, 3];
// // 子元素是字符串类型的数组
// let arrayOfString: string[] = ['x', 'y', 'z'];

// /**
//  * 第二种方式定义数组
//  */
// // 子元素是数字类型的数组
// let arrayOfNumber: Array<number> = [1, 2, 3];
// // 子元素是字符串类型的数组
// let arrayOfString: Array<string> = ['x', 'y', 'z'];

let b: [string, number, boolean] = ['Forest', 22, false]

let trainFars: [number, number?][] = [[10, 23.5], [2, 6.28], [9.42]]

let friends: [string, ...string[]] = ['Forest', 'Sare', 'Tali', 'Chloe']

let list: [number, boolean, ...string[]] = [23, false, 'a', 'b', 'c']

let args: readonly number[] = [1, 2, 3, 4, 5]
let nums: readonly number[] = args.concat(4, 5, 6)
console.log('args:', args) // args: [ 1, 2, 3, 4, 5 ]
console.log('nums:', nums) // nums: [1, 2, 3, 4, 5, 4, 5, 6]

// args[2] = 10
// args.push(30) // 报错 类型“readonly number[]”上不存在属性“push”

// let letter:readonly string[] = ["A", "B", "C"]
// let num:readonly ReadonlyArray<number> = [1, 2, 3, 4, 5]
const enum Language {
    English,
    Spanish,
    Russian
}

// 访问一个有效的枚举键
let english = Language.English //
console.log('🚀 ~ file: 03.ts ~ line 48 ~ english', english) // 0

type Age = number

type Person = {
    name: string
    age: Age
    email: string
}

let age: Age = 22
let forest: Person = {
    name: 'Forest',
    age,
    email: '767425412@qq.com'
}
console.log('🚀 ~ file: 03.ts ~ line 60 ~ forest', forest)
