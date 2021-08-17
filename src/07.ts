/**
 * - 对现有的数组进行封装，让数组增删改查更加好用
 * - 提供get方法remove方法，显示方法[add方法]
 * 其中需求中的remove方法有两个，我们用方法重载来实现
 */

class ArrayList {
    // 1、定义一个引用属性[数组]
    constructor(public element: object[]) {}

    // 2、根据索引来查询数组中指定元素
    get(index: number) {
        return this.element[index]
    }

    // 显示方法
    show() {
        this.element.map(item => {
            console.log('item:', item)
        })
    }

    // 按索引删除返回删除的索引
    // 按传入的对象去删除，返回删除的对象
    remove(value: number): number
    remove(value: object): object
    remove(value: number | object): number | object {
        this.element = this.element.filter((item, index) => {
            if (typeof value === 'number') {
                return value !== index
            } else {
                return value !== item
            }
        })
        return value
    }
}

const students = [
    { name: 'Forest', age: 22 },
    { name: 'clin', age: 18 },
    { name: 'lin', age: 20 }
]
const arr = new ArrayList(students)
// console.log(arr.remove(0))
console.log(arr.remove({ name: 'clin', age: 18 }))
arr.show()
