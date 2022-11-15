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
    constructor(value: any, height: number = 1) {
        // 实现签名
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

const card: any = [
    {
        code: 'game-cards',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Game Cards'
    },
    {
        code: 'gift-card',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Gift Cards'
    },
    {
        code: 'cd-key',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'CD-Keys'
    },
    {
        code: 'console-points',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Game Console Cards'
    },
    {
        code: 'shopping',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Shopping'
    },
    {
        code: 'music',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Music'
    },
    {
        code: 'all',
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Game Top Up',
        toFuc: '[Function toFuc]'
    },
    {
        svg: '<ComIcon name="ComIcon" size = { 41.666666666666664} source={ [Object]} />',
        title: 'Mobile Recharge',
        toFuc: '[Function toFuc]'
    }
]

const resultList = [
    {
        id: 1,
        name: 'Game Cards',
        code: 'game-cards',
        mode: 2,
        position: 0,
        counts: 173,
        type_id: 1,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/11.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/11.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/11.png`
    },
    {
        id: 22,
        name: 'Mobile Game Cards',
        code: 'mobile-game-cards',
        mode: 2,
        position: 0,
        counts: 2,
        type_id: 22,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/33.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/33.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/33.png`
    },
    {
        id: 21,
        name: 'Payment Cards',
        code: 'payment-cards',
        mode: 2,
        position: 1,
        counts: 48,
        type_id: 21,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/02.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/02.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/02.png`
    },
    {
        id: 5,
        name: 'Gift Cards',
        code: 'gift-card',
        mode: 2,
        position: 2,
        counts: 75,
        type_id: 5,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/03.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/03.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/03.png`
    },
    {
        id: 6,
        name: 'CD-Key',
        code: 'cd-key',
        mode: 2,
        position: 3,
        counts: 28,
        type_id: 6,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/04.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/04.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/04.png`
    },
    {
        id: 3,
        name: 'Game Console Cards',
        code: 'console-points',
        mode: 2,
        position: 3,
        counts: 68,
        type_id: 3,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/22.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/22.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/22.png`
    },
    {
        id: 16,
        name: 'Shopping',
        code: 'shopping',
        mode: 2,
        position: 5,
        counts: 29,
        type_id: 16,
        icon1: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/21.png`,
        icon2: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/21.png`,
        icon3: `https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/21.png`
    },
    {
        id: 14,
        name: 'Video Streaming',
        code: 'video-on-demand',
        mode: 6,
        position: 5,
        counts: 25,
        type_id: 14,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/11.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/11.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/11.png'
    },
    {
        id: 15,
        name: 'Music',
        code: 'music',
        mode: 2,
        position: 5,
        counts: 23,
        type_id: 15,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/12.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/12.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/12.png'
    },
    {
        id: 4,
        name: 'Mobile Cards',
        code: 'mobile-reloads',
        mode: 2,
        position: 6,
        counts: 26,
        type_id: 4,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/32.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/32.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/32.png'
    },
    {
        id: 7,
        name: 'Tools',
        code: 'tools',
        mode: 2,
        position: 7,
        counts: 5,
        type_id: 7,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/13.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/13.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/13.png'
    },
    {
        id: 20,
        name: 'Social App',
        code: 'social-app',
        mode: 2,
        position: 8,
        counts: 3,
        type_id: 20,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/23.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/23.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/23.png'
    },
    {
        id: 11,
        name: 'Software',
        code: 'software',
        mode: 2,
        position: 8,
        counts: 2,
        type_id: 11,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/24.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/24.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/24.png'
    },
    {
        id: 8,
        name: 'Freebie Codes',
        code: 'freebie-newbie-code',
        mode: 2,
        position: 20,
        counts: 3,
        type_id: 8,
        icon1: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/48w/15.png',
        icon2: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/96w/15.png',
        icon3: 'https://seagm-media.oss-ap-southeast-1.aliyuncs.com/app/icons/category/144w/15.png',
    }
]
