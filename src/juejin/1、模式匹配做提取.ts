import { getFips } from 'crypto'

type GetValueType<P> = P extends Promise<infer Value> ? Value : never

// Typescript 类型的模式匹配是通过 extends 对类型参数做匹配，结果保存到通过 infer 声明的局部类型变量里，如果匹配就能从该局部变量里拿到提取出的类型
type GetValueResult = GetValueType<Promise<'Forest'>>

// 获取第一个元素
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
    ? First
    : never

// GetFirstValue ==1
type GetFirstValue = GetFirst<[1, 2, 3, 4, 5]>

// 获取最后一个参数
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
    ? Last
    : never

// 7
type GetLastParam = GetLast<[1, 2, 3, 4, 5, 6, 7]>

// 去掉元素最后一个元素
type PopArray<Arr extends unknown[]> = Arr extends []
    ? []
    : Arr extends [...infer Rest, unknown]
    ? Rest
    : never

// [1, 23, 4, 2, 4, 234]
type PopArrayResult = PopArray<[1, 23, 4, 2, 4, 234, 2]>

// 去掉第一个元素
type UnshiftArray<Arr extends unknown[]> = Arr extends []
    ? []
    : Arr extends [unknown, ...infer Rest]
    ? Rest
    : never

// [2, 3, 4, 4, 234, 5]
type UnshiftArrayResult = UnshiftArray<[1, 2, 3, 4, 4, 234, 5]>

/************************************* string *****************************************/
// 判断字符串是否以某个前缀开头
type StartWith<
    Str extends string,
    Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false

type StartsWithResult = StartWith<'changlin in chengdu', 'changlin'>

// Replace
/**
 * Str 要替换的字符串
 * From 待替换的字符串
 */
type ReplaceStr<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}`
    : Str

// Forest best friend is chengdu
type ReplaceResult = ReplaceStr<'Forest best friend is ?', '?', 'chengdu'>

// Trim
// 实现去掉空白字符的Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
    | ' '
    | '\n'
    | '\t'}`
    ? TrimStrRight<Rest>
    : Str

type TrimRightResult = TrimStrRight<'lin         '>

type TrimStrLeft<Str extends string> = Str extends `${
    | ' '
    | '\n'
    | '\t'}${infer Rest}`
    ? TrimStrLeft<Rest>
    : Str

// 去掉左右的空格
type Trim<Str extends string> = TrimStrRight<TrimStrLeft<Str>>

type TrimValue = Trim<'         sdfsaf          '>

/************************************* function *****************************************/
// 匹配参数类型
type GetParameters<F extends Function> = F extends (
    ...args: infer Args
) => unknown
    ? Args
    : never

type ParametersResult = GetParameters<(name: string, age: number) => string>

// 提取返回参数类型
type GetReturnType<F extends Function> = F extends (
    ...args: any[]
) => infer ReturnType
    ? ReturnType
    : never

type ReturnTypeResult = GetReturnType<() => 'lin'>

// 匹配this指向问题
type GetThisParameterType<T> = T extends (
    this: infer ThisType,
    ...args: any[]
) => any
    ? ThisType
    : unknown

class Cat {
    name: string
    constructor() {
        this.name = 'mm'
    }

    hello(this: Cat) {
        return "hello, I'm" + this.name
    }
}

const cat = new Cat()
cat.hello()

// 构造器
interface Person {
    name: string
}

interface PersonConstructor {
    new (name: string): Person
}

type GetInstanceType<ConstructorType extends new (...args: any) => any> =
    ConstructorType extends new (...args: any) => infer InstanceType
        ? InstanceType
        : any

type GetInstanceTypeResult = GetInstanceType<PersonConstructor>

// 提取构造器的参数类型
type GetConstructorParameters<
    ConstructorType extends new (...args: any) => any
> = ConstructorType extends new (...args: infer ParametersType) => any
    ? ParametersType
    : never

type GetConstructorParametersResult =
    GetConstructorParameters<PersonConstructor>

// 索引类型
type GetRefProps<Props> = 'ref' extends keyof Props
    ? Props extends { ref?: infer Value | undefined }
        ? Value
        : never
    : never

type GetRefPropsResult = GetRefProps<{ ref: 1; name: 'lin' }>
