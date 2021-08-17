class Person {
    // 类上定义的属性一定是描绘这个类本身特征的变量，不能把一些无关的变量定义成泪属性中
    name: string | undefined // TypeScript4.0之前没有赋值的解决方案一
    age: number = 0 // 另一种解决方案就是默认值

    doEat(who: string, address: string) {
        // 方法的默认值时void
        console.log(`${this.name} and ${who} for the eat`)
    }
}

// 给对象复制的两种方式
// 方法一：通过类中的属性或者方法来赋值
// 方法二：通过构造函数来赋值

const person = new Person()
person.name = 'Forest'
person.age = 22

interface HomeCateGory {
    title: string // 显示名称
    icon: string // 图标链接
    link: string // 跳转链接
    code: string // 前端页面处理的一个标识，按我给的固定值输出
    isEnabled: boolean // 是否开启黑名单，为true时不显示当前数据项
    operate: 'none' | 'openDirectTopUpListPage' | 'openMobileRechargePage' // 操作类型，除后两种特殊的操作类型外，其余的默认为none
}

const homeCategory: HomeCateGory[] = [
    {
        title: 'Game Cards', // 点卡
        icon: '', // 图标链接
        link: '', // 跳转链接
        code: 'game-cards',
        isEnabled: true, // 是否开启黑名单
        operate: 'none' // 默认为none
    },
    {
        title: 'Gift Cards', // 礼品卡
        icon: '',
        link: '',
        code: 'gift-card',
        isEnabled: true,
        operate: 'none'
    },
    {
        title: 'CD-Keys', // CD-Keys
        icon: '',
        link: '',
        code: 'cd-key',
        isEnabled: true,
        operate: 'none'
    },
    {
        title: 'Game Console Cards', // 游戏平台点卡
        icon: '',
        link: '',
        code: 'console-points',
        isEnabled: true,
        operate: 'none'
    },
    {
        title: 'Shopping', // 购物卡
        icon: '',
        link: '',
        code: 'shopping',
        isEnabled: true,
        operate: 'none'
    },
    {
        title: 'Music', // 音乐
        icon: '',
        link: '',
        code: 'music',
        isEnabled: true,
        operate: 'none'
    },
    {
        title: 'Game Top Up', // 游戏充值
        icon: '',
        link: '',
        code: 'all',
        isEnabled: true,
        operate: 'openDirectTopUpListPage'
    },
    {
        title: 'Mobile Recharge', // 手机充值
        icon: '',
        link: '',
        code: '',
        isEnabled: true,
        operate: 'openMobileRechargePage'
    }
]

interface TabBarItem {
    name: string // 当前项名称："Home" ｜"Cards" | "Recharge" | "Cart" | "Mine"
    activeIcon: string // 当前项未激活图标链接
    inactiveIcon: string // 当前项激活图标链接
    isEnabled: boolean // 是否开启黑名单
}

interface TabBar {
    activeColor: string // 底部文字激活颜色
    inactiveColor: string // 底部文字未激活颜色
    tab: TabBarItem[]
}

const tabBar: TabBar = {
    activeColor: '#FF4500',
    inactiveColor: '#999',
    tab: [
        { name: 'Home', activeIcon: '', inactiveIcon: '', isEnabled: true },
        { name: 'Cards', activeIcon: '', inactiveIcon: '', isEnabled: true },
        { name: 'Recharge', activeIcon: '', inactiveIcon: '', isEnabled: true },
        { name: 'Cart', activeIcon: '', inactiveIcon: '', isEnabled: true },
        { name: 'Mine', activeIcon: '', inactiveIcon: '', isEnabled: true }
    ]
}

const drew = [
    {
        code: 'all',
        name: '热卖',
        id: 0,
        mode: 2,
        position: 0,
        cards: {
            code: 200,
            message: 'success',
            amount: 58,
            nextPage: false,
            cardList: [
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/6.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/6.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/6.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/6.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzYucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '6',
                    region_id: '6',
                    name: 'MyCard (TW)',
                    code: 'mycard-taiwan-hongkong',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'MyCard (TW)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/28.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/28.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/28.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/28.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '28',
                    region_id: '1',
                    name: 'MyCard (MY)',
                    code: 'mycard-top-up-card',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'MyCard (MY)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/39.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/39.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/39.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/39.jpg',
                    id: '39',
                    region_id: '10',
                    name: 'QQ Coin 腾讯Q币 (CN)',
                    code: 'qq-xun-teng-qb-card',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'QQ Coin 腾讯Q币 (CN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/56.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/56.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/56.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/56.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '56',
                    region_id: '1',
                    name: 'Garena Shells (MY)',
                    code: 'garena-shells',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Garena Shells (MY)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/70.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/70.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/70.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/70.jpg',
                    id: '70',
                    region_id: '68',
                    name: 'Cherry Credits CC',
                    code: 'cherry-credits-cc',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Cherry Credits CC'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/118.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/118.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/118.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/118.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '118',
                    region_id: '1',
                    name: 'Razer Gold Malaysia (MYR)',
                    code: 'razer-gold-malaysia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Razer Gold Malaysia (MYR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/181.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/181.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/181.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/181.jpg',
                    id: '181',
                    region_id: '68',
                    name: 'Razer Gold USD (Global Pin)',
                    code: 'razer-gold-usd-global',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Razer Gold USD (Global Pin)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/191.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/191.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/191.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/191.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '191',
                    region_id: '15',
                    name: 'iTunes Gift Card (US)',
                    code: 'itunes-gift-card-united-states',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iTunes Gift Card (US)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/196.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/196.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/196.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/196.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '196',
                    region_id: '15',
                    name: 'Steam Wallet Code (USD)',
                    code: 'steam-wallet-card-code-global',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Steam Wallet Code (USD)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/214.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/214.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/214.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/214.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '214',
                    region_id: '4',
                    name: 'TrueMoney e-Pins (TH)',
                    code: 'truemoney-th',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'TrueMoney e-Pins (TH)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/220.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/220.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/220.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/220.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEzNC5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '220',
                    region_id: '134',
                    name: 'iTunes Gift Card (JP)',
                    code: 'itunes-gift-card-japan',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iTunes Gift Card (JP)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/221.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/221.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/221.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/221.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEzNC5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '221',
                    region_id: '134',
                    name: 'Japan Webmoney (Yen¥)',
                    code: 'japan-webmoney-prepaid-card',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Japan Webmoney (Yen¥)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/225.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/225.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/225.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/225.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '225',
                    region_id: '15',
                    name: 'Google Play Gift Card (US)',
                    code: 'google-play-gift-card-united-states',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Google Play Gift Card (US)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/255.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/255.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/255.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/255.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '255',
                    region_id: '1',
                    name: 'Razer Pin Direct Top Up (MY)',
                    code: 'razer-gold-direct-top-up-card-malaysia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Razer Pin Direct Top Up (MY)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/275.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/275.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/275.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/275.jpg',
                    id: '275',
                    region_id: '68',
                    name: 'GoCash (Global)',
                    code: 'gocash-game-card',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'GoCash (Global)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/279.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/279.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/279.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/279.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '279',
                    region_id: '15',
                    name: 'Karma Koin',
                    code: 'karma-koin-us',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Karma Koin'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/284.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/284.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/284.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/284.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '284',
                    region_id: '1',
                    name: 'Steam Wallet Code (MYR)',
                    code: 'steam-wallet-card-malaysia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Steam Wallet Code (MYR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/331.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/331.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/331.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/331.jpg',
                    id: '331',
                    region_id: '69',
                    name: 'Battle.net Balance Card (SEA)',
                    code: 'battlenet-balance-card-sea',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Battle.net Balance Card (SEA)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/344.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/344.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/344.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/344.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzI4LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '344',
                    region_id: '28',
                    name: 'iTunes Gift Card (AU)',
                    code: 'itunes-gift-card-australia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iTunes Gift Card (AU)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/347.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/347.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/347.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/347.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzI4LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '347',
                    region_id: '28',
                    name: 'Xbox Live Gift Card (AU)',
                    code: 'xbox-live-gift-cards-australia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Xbox Live Gift Card (AU)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/364.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/364.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/364.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/364.jpg',
                    id: '364',
                    region_id: '5',
                    name: 'Vinaphone (VN)',
                    code: 'vinaphone-prepaid-card',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Vinaphone (VN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/372.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/372.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/372.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/372.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '372',
                    region_id: '5',
                    name: 'Zing Card (VN)',
                    code: 'zing-card-vn',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Zing Card (VN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/374.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/374.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/374.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/374.jpg',
                    id: '374',
                    region_id: '68',
                    name: 'TQ Point Card (Global)',
                    code: 'tq-point-card',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'TQ Point Card (Global)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/402.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/402.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/402.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/402.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzExLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '402',
                    region_id: '11',
                    name: 'Steam Wallet Code (HKD)',
                    code: 'steam-wallet-card-hkd',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Steam Wallet Code (HKD)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/405.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/405.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/405.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/405.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzY3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '405',
                    region_id: '67',
                    name: 'Neosurf Prepaid (EU)',
                    code: 'neosurf-prepaid-card',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Neosurf Prepaid (EU)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/418.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/418.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/418.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/418.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzY3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '418',
                    region_id: '67',
                    name: 'Riot Points Gift Card (EU)',
                    code: 'lol-riot-points-europe',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Riot Points Gift Card (EU)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/419.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/419.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/419.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/419.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzI5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '419',
                    region_id: '29',
                    name: 'PlayStation Network Card (AT)',
                    code: 'playstation-network-card-psn-austria',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PlayStation Network Card (AT)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/444.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/444.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/444.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/444.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzUxLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '444',
                    region_id: '51',
                    name: 'Riot Points Gift Card (BR)',
                    code: 'lol-riot-points-brazil',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Riot Points Gift Card (BR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/450.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/450.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/450.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/450.jpg',
                    id: '450',
                    region_id: '68',
                    name: 'NCsoft NCoin (Global) ',
                    code: 'ncsoft-ncoin-card',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'NCsoft NCoin (Global) '
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/480.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/480.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/480.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/480.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzUxLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '480',
                    region_id: '51',
                    name: 'Steam Wallet Code (BRL)',
                    code: 'steam-wallet-card-brazil',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Steam Wallet Code (BRL)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/514.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/514.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/514.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/514.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzUxLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '514',
                    region_id: '51',
                    name: 'Battle.net Balance Card (BR)',
                    code: 'battlenet-balance-card-brazil',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Battle.net Balance Card (BR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/547.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/547.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/547.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/547.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '547',
                    region_id: '15',
                    name: 'Roblox Gift Card (US)',
                    code: 'roblox-game-card-us',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Roblox Gift Card (US)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/549.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/549.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/549.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/549.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '549',
                    region_id: '1',
                    name: 'GASH Card (MY)',
                    code: 'gash-card-my',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'GASH Card (MY)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/570.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/570.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/570.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/570.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '570',
                    region_id: '10',
                    name: 'iTunes Gift Card (CN)',
                    code: 'itunes-gift-card-china',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iTunes Gift Card (CN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/571.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/571.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/571.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/571.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '571',
                    region_id: '10',
                    name: 'JD.com Gift Card (CN)',
                    code: 'jing-dong-e-card',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'JD.com Gift Card (CN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/596.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/596.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/596.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/596.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '596',
                    region_id: '1',
                    name: 'iflix (MY)',
                    code: 'iflix-malaysia',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iflix (MY)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/628.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/628.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/628.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/628.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzM3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '628',
                    region_id: '37',
                    name: 'Spotify (BE)',
                    code: 'spotify-gift-card-belgium',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Spotify (BE)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/658.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/658.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/658.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/658.jpg',
                    id: '658',
                    region_id: '67',
                    name: 'G2A Gift Cards (EURO)',
                    code: 'g2a-gift-card-euro',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'G2A Gift Cards (EURO)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/694.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/694.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/694.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/694.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzcyLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '694',
                    region_id: '72',
                    name: 'Xbox Live Gift Card (CL)',
                    code: 'xbox-live-gift-cards-chile',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Xbox Live Gift Card (CL)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/698.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/698.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/698.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/698.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzMyLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '698',
                    region_id: '32',
                    name: 'PlayStation Network Card (BH)',
                    code: 'playstation-network-card-psn-bahrain',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PlayStation Network Card (BH)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/708.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/708.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/708.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/708.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzIwOS5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '708',
                    region_id: '209',
                    name: 'Google Play Gift Card (SA)',
                    code: 'google-play-gift-card-saudi',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Google Play Gift Card (SA)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/715.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/715.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/715.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/715.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEwMC5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '715',
                    region_id: '100',
                    name: 'Deezer Gift Card (FR)',
                    code: 'deezer-gift-card-fr',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Deezer Gift Card (FR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/726.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/726.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/726.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/726.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '726',
                    region_id: '4',
                    name: 'Line Prepaid Card (TH)',
                    code: 'line-prepaid-card-th',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Line Prepaid Card (TH)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/734.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/734.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/734.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/734.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEyMy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '734',
                    region_id: '123',
                    name: 'PlayStation Network Card (IN)',
                    code: 'playstation-network-card-psn-india',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PlayStation Network Card (IN)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/741.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/741.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/741.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/741.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzIwOS5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '741',
                    region_id: '209',
                    name: 'Xbox Live Gift Card (SA)',
                    code: 'xbox-live-gift-cards-saudi',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Xbox Live Gift Card (SA)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/743.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/743.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/743.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/743.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE4My5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '743',
                    region_id: '183',
                    name: 'iTunes Gift Card (NO)',
                    code: 'itunes-gift-card-norway',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'iTunes Gift Card (NO)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/745.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/745.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/745.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/745.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzEwOC5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,g_center',
                    id: '745',
                    region_id: '108',
                    name: 'PlayStation Network Card (GR)',
                    code: 'playstation-network-card-psn-greece',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PlayStation Network Card (GR)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/747.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/747.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/747.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/747.jpg',
                    id: '747',
                    region_id: '68',
                    name: 'oBucks Card (USD)',
                    code: 'openbucks-card-usd',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'oBucks Card (USD)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/748.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/748.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/748.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/748.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzYucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTAw,g_center',
                    id: '748',
                    region_id: '6',
                    name: 'Razer Gold Taiwan (TWD)',
                    code: 'razer-gold-taiwan',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Razer Gold Taiwan (TWD)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/749.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/749.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/749.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/749.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzExLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '749',
                    region_id: '11',
                    name: 'Razer Gold Hong Kong (HKD)',
                    code: 'razer-gold-hongkong',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Razer Gold Hong Kong (HKD)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/843.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/843.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/843.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/843.jpg',
                    id: '843',
                    region_id: '68',
                    name: 'PUBG Mobile UC Redeem Code (Global)',
                    code: 'pubgm-uc-global-code',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PUBG Mobile UC Redeem Code (Global)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/882.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/882.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/882.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/882.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzI1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '882',
                    region_id: '25',
                    name: 'Steam Wallet Code (ARS)',
                    code: 'steam-wallet-card-argentina',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Steam Wallet Code (ARS)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/972.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/972.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/972.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/972.jpg',
                    id: '972',
                    region_id: '68',
                    name: 'HitPoints USD\t',
                    code: 'hit-points-usd',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'HitPoints USD\t'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/983.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/983.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/983.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/983.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzE1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '983',
                    region_id: '15',
                    name: 'Twitch Gift Card USD',
                    code: 'twitch-gift-card-us',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Twitch Gift Card USD'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/995.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/995.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/995.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/995.jpg',
                    id: '995',
                    region_id: '68',
                    name: 'PUDDING Pay (NetEase Games)',
                    code: 'pudding-pay',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'PUDDING Pay (NetEase Games)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/998.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/998.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/998.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/998.jpg',
                    _flag_img:
                        '/watermark,image_YXBwL2ZsYWdfYXBwLzI4LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzEwMA,g_center',
                    id: '998',
                    region_id: '28',
                    name: 'Neosurf Prepaid (AU)',
                    code: 'neosurf-prepaid-card-au',
                    position: 1,
                    show_flag: '1',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Neosurf Prepaid (AU)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/999.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/999.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/999.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/999.jpg',
                    id: '999',
                    region_id: '68',
                    name: 'Free Fire Diamonds Pins (Garena)',
                    code: 'free-fire-diamonds-pin-garena',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Free Fire Diamonds Pins (Garena)'
                },
                {
                    _top_sale_img:
                        'https://seagm-media.seagmcdn.com/material/1042.jpg',
                    _card_img: 'https://seagm-media.seagmcdn.com/card/1042.gif',
                    _cover_img:
                        'https://seagm-media.seagmcdn.com/item_480/1042.png',
                    _icon_img:
                        'https://seagm-media.seagmcdn.com/icon_400/1042.jpg',
                    id: '1042',
                    region_id: '5',
                    name: 'Scoin (VN)',
                    code: 's-coin-vnd',
                    position: 1,
                    show_flag: '0',
                    explain: '',
                    explain_zh: '',
                    name_zh: 'Scoin (VN)'
                }
            ]
        }
    },
    {
        id: 1,
        name: 'Game Cards',
        code: 'game-cards',
        mode: 2,
        position: 0,
        counts: 174,
        type_id: 1
    },
    {
        id: 22,
        name: 'Mobile Game Cards',
        code: 'mobile-game-cards',
        mode: 2,
        position: 0,
        counts: 2,
        type_id: 22
    },
    {
        id: 21,
        name: 'Payment Cards',
        code: 'payment-cards',
        mode: 2,
        position: 1,
        counts: 48,
        type_id: 21
    },
    {
        id: 5,
        name: 'Gift Cards',
        code: 'gift-card',
        mode: 2,
        position: 2,
        counts: 72,
        type_id: 5
    },
    {
        id: 6,
        name: 'CD-Key',
        code: 'cd-key',
        mode: 2,
        position: 3,
        counts: 27,
        type_id: 6
    },
    {
        id: 3,
        name: 'Game Console Cards',
        code: 'console-points',
        mode: 2,
        position: 3,
        counts: 68,
        type_id: 3
    },
    {
        id: 16,
        name: 'Shopping',
        code: 'shopping',
        mode: 2,
        position: 5,
        counts: 28,
        type_id: 16
    },
    {
        id: 14,
        name: 'Video Streaming',
        code: 'video-on-demand',
        mode: 6,
        position: 5,
        counts: 25,
        type_id: 14
    },
    {
        id: 15,
        name: 'Music',
        code: 'music',
        mode: 2,
        position: 5,
        counts: 23,
        type_id: 15
    },
    {
        id: 4,
        name: 'Mobile Cards',
        code: 'mobile-reloads',
        mode: 2,
        position: 6,
        counts: 26,
        type_id: 4
    },
    {
        id: 7,
        name: 'Tools',
        code: 'tools',
        mode: 2,
        position: 7,
        counts: 5,
        type_id: 7
    },
    {
        id: 20,
        name: 'Social App',
        code: 'social-app',
        mode: 2,
        position: 8,
        counts: 3,
        type_id: 20
    },
    {
        id: 11,
        name: 'Software',
        code: 'software',
        mode: 2,
        position: 8,
        counts: 2,
        type_id: 11
    },
    {
        id: 8,
        name: 'Freebie Codes',
        code: 'freebie-newbie-code',
        mode: 2,
        position: 20,
        counts: 3,
        type_id: 8
    }
]
