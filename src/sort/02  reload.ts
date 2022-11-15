// 中文排序
function sortChinese<T>(arr: Array<T>): T[] {
    return arr.sort((first, second) =>
        (first as any).localeCompare(second, 'zh-CN')
    )
}

// 字符串自排序
function sortStr(str: string): string {
    return str.split('').sort().join('')
}

// 是否是中文
function isChinese<T>(arr: T): boolean {
    return (arr as any).some((item: string) => /[\u4e00-\u9fa5]/.test(item))
}

function quickSort<T>(data: T[]): T[] {
    if (data.length <= 1) return data
    const middleIndex = Math.floor(data.length / 2)
    const middle = data.splice(middleIndex, 1)[0]
    const left = []
    const right = []
    for (let i = 0; i < data.length; i++) {
        data[i] < middle ? left.push(data[i]) : right.push(data[i])
    }
    return quickSort(left).concat([middle], quickSort(right))
}

// 重载
function sort(data: string): string
function sort<T>(data: T): T
function sort(data: any): any {
    if (data instanceof Array) {
        // 中文
        if (isChinese(data)) {
            return sortChinese(data)
        }
        let ar = data.map(item =>
            typeof item === 'string' ? sortStr(item) : item
        )
        return quickSort(ar)
    }
    if (typeof data === 'string') {
        return sortStr(data)
    }
    return quickSort(data as any)
}

const res = sort([1, 344.345, 513, 14, 3151, 636, 7356, 8655])
res.forEach(item => console.log(item))

const str = sort('herdfgaqwesdfasgasdfsdg')
console.log(str)
console.log(str.replace('s', '*'))
export default {}
