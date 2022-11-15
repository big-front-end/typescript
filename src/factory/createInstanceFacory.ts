class CommercialBank {
    constructor(public address: string, public name: string) {
        this.address = address
        this.name = name
    }

    loan() {
        console.log(`${this.name} 发起贷款`)
    }
}

function createInstanceFactory<T>(Constructor: { new (...args: any): T }) {
    console.log(`${Constructor.name} 创建实例`)
    return new Constructor('ChengDu', 'Forest')
}

const commercialBank = createInstanceFactory(CommercialBank)
commercialBank.loan()

type MyClassDecorator = <T>(targetClass: { new (...args: any[]): T }) => any
// function Controller(rootPath: string): MyClassDecorator {
//     return function (targetClass) {
//         return function <T>(targetClass: { new (...agrs: any[]): T }) {}
//     }
// }

function Controller(rootPath: string): MyClassDecorator {
    return function (targeClass) {}
}
