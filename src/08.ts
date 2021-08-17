// 构造器重载
// 计算正方形的面积
// 计算创建正方形对象，可以给构造器传递宽和高
// 也可以给构造器传递一个包含了宽和高的形状参数和对象，这样需要用构造器重载

type TypeChartParam = {
    width?: number
    height?: number
    radius?: number
}

class Square {
    width: number
    height: number

    // 构造器重载
    constructor(width: number, height: number) // 重载签名
    constructor(value: TypeChartParam) // 重载签名
    constructor(value: any, height: number = 1) { // 实现签名
        if (typeof value === 'object') {
            this.width = value.width
            this.height = value.height
        } else {
            this.width = value
            this.height = height
        }
    }

    getArea() {
        return this.height * this.width
    }
}

let square = new Square(40, 50)
console.log('🚀 ~ file: 08.ts ~ line 30 ~ square', square.getArea())
let chartPartamObj: TypeChartParam = { width: 50, height: 90 }
let s2 = new Square(chartPartamObj)
console.log('🚀 ~ file: 08.ts ~ line 32 ~ chartPartamObj', s2.getArea())
