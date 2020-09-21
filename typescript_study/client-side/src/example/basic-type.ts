// 布尔类型
// let bool: boolean = false
// let bool: boolean
// bool = false
// bool = 123 error

// 数值类型
// let num: number

// 字符串类型
// let str: string

// 数组类型
// let arr: number[]
// arr = [1, 2, 3]

// 元组类型
// let tuple: [string, number, boolean]
// tuple = ['str', 123, false]

// 枚举类型
// enum Roles {
//   SUPER_ADMIN,
//   ADMIN,
//   USER
// }

// console.log(Roles.USER)

// any 类型
// let value: any
// value = 'abc'
// value = 123
// const arr4: any[] = [1, 'a']

// void类型
// const consoleText = (text: string): void => console.log(text)

// null和undefined 其他类型的子类型

// never类型
// const errFunc = (message: string): never => {
//   throw new Error(message)
// }
// const infinitFunc = (): never => {
//   while(true) {}
// }

// object
// let obj = {
//   name: 'lison'
// }
// let obj2 = obj
// obj2.name = 'L'
// console.log(obj)

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
getLength(123)
