// type infer 类型参数

import { Key } from 'readline'

// type：类型别名；就是生命一个变量存储某个类型
type num = Promise<number>

// infer：用于类型的提取，然后存到一个变量里相当于局部变量
type GetValueType<P> = P extends Promise<infer Value> ? Value : never

// 相当于如下
type isTwo<T> = T extends 2 ? true : false

// 重新构造

// 将一个元组合并成一个二维数组
type Zip<
    One extends [unknown, unknown],
    Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
    ? Other extends [infer OtherFirst, infer OtherSecond]
        ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
        : []
    : []

// [[1, "chengdu"], [2, "du"]]
type Merge = Zip<[1, 2], ['chengdu', 'du']>

// 任意个元素组合
type ZipMore<One extends unknown[], Other extends unknown[]> = One extends [
    infer OneFirst,
    ...infer OneRest
]
    ? Other extends [infer OtherFirst, ...infer OtherRest]
        ? [[OneFirst, OtherFirst], ...ZipMore<OneRest, OtherRest>]
        : []
    : []

// [[1, "c"], [2, "h"], [3, "e"], [4, "n"], [5, "g"], [6, "d"], [7, "u"]]
type ZipResultTest = ZipMore<
    [1, 2, 3, 4, 5, 6, 7],
    ['c', 'h', 'e', 'n', 'g', 'd', 'u']
>

// 字符串类型的重新构造
type CapitalizeStr<Str extends string> =
    Str extends `${infer First}${infer Rest}`
        ? `${Uppercase<First>}${Rest}`
        : Str

// Changlin
type TextStr = CapitalizeStr<'changlin'>

type CameCase<Str extends string> =
    Str extends `${infer Left}_${infer Right}${infer Rest}`
        ? `${Left}${Uppercase<Right>}${CameCase<Rest>}`
        : Str

// "chengDu"
type CameCaseResult = CameCase<'cheng_du'>

// 删除字符串中的某个子串
type DropSubStr<
    Str extends string,
    SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
    ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
    : Str

type DropSubStrResult = DropSubStr<'chengdu~~', '~'>

// 函数类型的重新构造
type AppendArgument<Func extends Function, Arg> = Func extends (
    ...args: infer Args
) => infer ReturnType
    ? (...args: [...Args, Arg]) => ReturnType
    : never
type AppendAndArgumentResult = AppendArgument<(name: string) => boolean, number>

type Mapping<Obj extends object> = {
    [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]]
}

type res = Mapping<{ a: 1; b: 2 }>

type UppercaseKey<Obj extends object> = {
    [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

type UppercaseKeyResult = UppercaseKey<{ name: 'changlin'; age: 23 }>

// 内置的高级类型
type UppercaseKeys<obj extends Record<string, any>> = {
    [Key in keyof obj as Uppercase<Key & string>]: obj[Key]
}

type UppercaseKeyResults = UppercaseKeys<{ name: 'changlin'; age: 23 }>

// 转换成只读属性
type ToReadonly<T> = {
    readonly [Key in keyof T]: T[Key]
}

type ReadonlyResult = ToReadonly<{ name: 'changlin'; age: 23 }>

type PartialResult = Partial<{ name: 'changlin'; age: 23 }>

// 去掉readonly
type ToMutable<T> = {
    -readonly [Key in keyof T]: T[Key]
}

type ToMutableResult = ToMutable<{
    readonly name: 'changlin'
    readonly age: 23
}>

// 去掉可选修饰符
type ToRequired<T> = {
    [Key in keyof T]-?: T[Key]
}

type ToRequiredResult = ToRequired<{ name?: 'changlin'; age?: 23 }>

// 根据值的类型做过滤
type FilterByValueType<obj extends Record<string, any>, ValueType> = {
    [Key in keyof obj as obj[Key] extends ValueType ? Key : never]: obj[Key]
}

interface Person {
    name: string
    age: number
    hobby: string[]
}

type FilterResult = FilterByValueType<Person, string | string[]>
