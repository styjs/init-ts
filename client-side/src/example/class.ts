// class Greeter {
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet () {
//     return 'Hello, ' + this.greeting
//   }
// }

// let greeter = new Greeter('world')

// 继承
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}`)
//   }
// }

// class Dog extends Animal {
//   bark () {
//     console.log('woof woof')
//   }
// }

class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name:string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name:string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake("Sammy the Python")
let tom: Animal = new Horse("Tommy the palomino")

sam.move()
tom.move()
