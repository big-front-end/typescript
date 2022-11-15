export default class Person {
    constructor(
        public name: string,
        public age: number,
        public phone: string,
        public address: string
    ) { }


    sports(who: string, address: string): void {//方法默认的返回值为void
        console.log(`${this.name}和${who}吃饭,在${address}吃饭`)
    }
}

const person = new Person('forest', 22, '12344311234', 'ChengDu', )
console.log('person:', person)
// person: Person {
//   name: 'forest',
//   age: 22,
//   phone: '12344311234',
//   address: 'ChengDu'
// }

