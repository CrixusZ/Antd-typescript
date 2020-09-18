class Animal {
  // 公开属性
  // public name: string;
  // 私有属性 不能读不能写
  // private name: string;
  // 保护属性 在子集可读可写
  // protected name: string;
  // 只读属性 只能读不能写
  readonly name: string;
  static categoies: string[] = ['mamal','bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name:string) {
    this.name = name
  }
  public run(){
    return `${this.name} is running`
  }
}
console.log(Animal.categoies)
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake))
console.log(snake.run())
// snake.name = '222'
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const mi = new Dog('nuomi')
console.log(mi.run())
console.log(mi.bark())

class Cat extends Animal {
  constructor (name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return `Meow, ${super.run()}`
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())


interface Radio {
  switchRadio(trigger:boolean):void;
}
interface RadioWithBattery extends Radio {
  checkBatterStatus();
}
interface Battery {
  checkBatterStatus();
}
class Car implements Radio{
  switchRadio(){

  }
}

class Cellphone implements RadioWithBattery{
  switchRadio(){

  }
  checkBatterStatus(){

  }
}