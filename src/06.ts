// 函数签名
/**
 * 函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 返回值类型
 */

type MessageType = 'audio' | 'image' | string
type Message = {
    id: number
    count: string
    message: string
}
type ReturnTypes = Message | Message[] | undefined
function getMessage(id: number): Message
function getMessage(value: MessageType): Message[]
function getMessage(type: any) {
    if (typeof type === 'number') return { id: 2, count: '', message: '' }
    else return [{ id: 2, count: '', message: '' }]
}
