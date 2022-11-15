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

// 中、英、数字组合排序
function sort<T>(data: T): string | T[] {
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

const city = [
    '武汉',
    '郑州',
    '太原',
    '南昌',
    '北京',
    '上海',
    '广州',
    '深圳',
    '长沙',
    '西安',
    '成都',
    '重庆',
    '昆明',
    '贵阳',
    '拉萨',
    '海口',
    '银川',
    '乌鲁木齐',
    '兰州',
    '西宁',
    '呼和浩特',
    '香港',
    '澳门'
]
const ar = [
    'adc',
    'dsre',
    'cde',
    'ers',
    'fsegh',
    'ghei',
    'jkdfl',
    'lrtmn',
    'mnor',
    'perqr',
    'qwrs',
    'tusasv',
    'uvew',
    'wxgy',
    'xjtyz'
]
const str = 'lrswxaijpvmndefgbcuhoykqtz'
console.log('========================================')
// console.log('字母排序 元素自排序：', sort(ar))
// console.log('中文字符串排序：', sort('我是中国人'))
// console.log('中文数组排序：', sort(city))
// console.log('字母排序：', sort(str))
quickSort([
    1, 2, 3, 4, 3, 332, 3223, 3, 2342, 432, 2354, 234, 63, 65, 84, 453, 25, 573
])

export default {}
