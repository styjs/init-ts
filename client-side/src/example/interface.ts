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
// interface Counter {
//   (): void,
//   count: number
// }

// const getCounter = (): Counter => {
//   const c = () => { c.count++ }
//   c.count = 0
//   return c
// }

// 额外属性检查  当将对象字面量赋值给变量或者作为参数传递的时候, 对象字面量会被特殊对待而且经过"额外属性检查"
// interface SquareConfig {
//   color?: string,
//   width?: number
// }

// let s: SquareConfig

// s = {
//   colour: 'blue',
//   width: 100
// }
// error 对象文字只能制定已知的属性，colour不存在于类型“SquareConfig”中，是否要写入color

// 函数接口
// (参数列表): 返回值类型
// type SearchFunc = (source: string, subString: string) => boolean
// let mySearch: SearchFunc

// 可索引类型
// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray

// myArray = ['Bob', 'Fred']

// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// interface NotOkay {
//   [x: number]: Dog,
//   [x: string]: Animal
// }

// interface NotOkay {
//   [x: number]: Animal,
//   [x: string]: Dog
// }
// error number返回的类型不是string返回类型的子类  所以报错

// 类的接口
// 类的接口描述了类的公共部分，而不是公共和私有两部分，它不会检查类是否具有某些私有成员
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime (d: Date) {
//     this.currentTime = d
//   }
//   constructor(h:number, m:number) { }
// }

// 类是具有两个类型的： 静态部分的类型和实例的类型
// 当使用构造器签名去定义一个借口并试图顶一个类去实现这个接口的时候会得到一个错误
// interface ClockConstructor {
//   new (hour: number, minute: number)
// }

// class Clock implements ClockConstructor {
//   currnetTime: Date; // 实例部分
//   constructor (h: number, m: number) {} // 静态部分 不在检查范围内
// }
// // error 类型clock提供的内容与签名 “new (hour: number, minute: number): any不匹配”

// type ClockConstructor = new (hour: number, minute:number) => ClockInterface

// interface ClockInterface {
//   currentTime: number
//   tick()
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//   currentTime: number
//   constructor(h: number, m: number) {}
//   tick () {
//     console.log('beep beep')
//   }
// }

// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   currentTime: number
//   tick () {
//     console.log('tick tock')
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// digital.currentTime = 123456
// console.log(digital)

// 继承接口 extends 关键字
// interface Shape {
//   color: string
// }

// interface Square extends Shape {
//   sideLength: number
// }

// let square = {} as Square
// square.color = "blue"
// square.sideLength = 10
// console.log(square)

// 继承多个接口
// interface Shape {
//   color: string
// }

// interface PenStroke {
//   penWidth: number
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number
// }

// let square = {} as Square
// square.color = "hello"
// square.sideLength = 10
// square.penWidth = 50

// 混合类型 一个对象同事作为函数和对象使用
// interface Counter {
//   (start: number): string
//   interval: number
//   reset(): void
// }

// function getCounter(): Counter {
//   const counter = function (start: number) {} as Counter
//   counter.interval = 123
//   counter.reset = function () {}
//   return counter
// }

// 接口继承类
// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   select() {}
// }

// class TextBox extends Control {
//   select () {}
// }
