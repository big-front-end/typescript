// function handleLog(message: string, nickname?: string) {
//     const time = new Date().toLocaleTimeString()
//     console.log(time, message, nickname ?? '')
// }

// handleLog('今天天气不错～～') // 上午7:09:59 今天天气不错～～
// handleLog('今天天气不错～～', 'Forest') // 上午7:09:59 今天天气不错～～ Forest

// type Content = {
//     id?: number
//     nickname?: string
// }

// function handleLog(message: string, content: Content = {}) {
//     const time = new Date().toLocaleTimeString()
//     console.log(time, message, content?.nickname)
// }

// function handleSum(numbers: number[]) {
//     return numbers.reduce((total, n) => total + n, 0)
// }

// console.log(handleSum([1, 1, 2, 3, 5, 8, 13, 21, 34])) // 88

// {
//     function handleSum() {
//         return Array.from(arguments).reduce((total, n) => total + n, 0)
//     }

//     console.log(handleSum(1, 1, 2, 3, 5, 8, 13, 21, 34))
// }

// {
//     function handleAdd(a: number, b: number) {
//         return a + b
//     }

//     handleAdd(1, 2) // 3
//     handleAdd.apply(null, [1, 2]) // 3
//     handleAdd.call(null, 1, 2) // 3
//     handleAdd.bind(null, 1, 2)() // 3
// }

// let obj = {
//     that() {
//         return this
//     }
// }
// console.log(obj.that())

// function formatDate() {
//     return `${new Date().getFullYear()}-${
//         new Date().getMonth() + 1
//     }-${new Date().getDay()}`
// }

// function handle() {
//     console.log(this)
// }

// handle()
// console.log(formatDate())

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a
        ;[a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next()) // { value: 0, done: false }
console.log(fibonacciGenerator.next()) // { value: 1, done: false }
console.log(fibonacciGenerator.next()) // { value: 1, done: false }
console.log(fibonacciGenerator.next()) // { value: 2, done: false }
console.log(fibonacciGenerator.next()) // { value: 3, done: false }
console.log(fibonacciGenerator.next()) // { value: 5, done: false }
console.log(fibonacciGenerator.next()) // { value: 8, done: false }

let numbers = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i++) {
            yield i
        }
    }
}

type User = (nickname: string, email: string) => void

let user: User = (nickname, email) => {
    console.log(`${nickname}的邮箱：${email}`)
}

user('Forest', '767425412@qq.com') // Forest的邮箱：767425412@qq.com

function times(f: (index: number) => void, n: number) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

times(n => console.log(n), 6)

// type Resever = {
//     (from: Date, to: Date, destination: string): Resevation
//     (from: Date, destination: string): Resevation
// }

// let resever: Resever = (from, to, destination) => {

// }

type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

function createElement(tag: 'a'): HTMLAnchorElement
function createElement(tag: 'canvas'): HTMLCanvasElement
function createElement(tag: 'table'): HTMLTableElement
function createElement(tag: string): HTMLElement {
    // ...
}

