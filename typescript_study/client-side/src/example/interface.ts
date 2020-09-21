// 为代码定义结构 遵循规范
// const getFullName = ({ firstName, lastName}) => {
//   return firstName + lastName
// }

// getFullName({
//   firstName: '哈哈哈',
//   lastName: 'chen'
// })

// interface NameInfo {
//   firstName: string,
//   lastName: string
// }

// type AddFunc = (num1: number, num2: number) => number
// const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//   [id: number]: string
// }

// const role1: RoleDic = {
//   'a': '123'
// }

// interface RoleDic {
//   [id: string]: string
// }

// const role1: RoleDic = {
//   'a': '123',
//   1: 'admin'
// }


// 接口继承
// interface Vegetables {
//   color: string
// }

// interface Tomato extends Vegetables {
//   radius: number
// }

// interface Carrot extends Vegetables {
//   length: number
// }

// const carrot: Carrot = {
//   color: 'orange',
//   length: 123
// }

// 计数器
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
