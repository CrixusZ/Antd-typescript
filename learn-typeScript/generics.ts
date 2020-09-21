// 泛型，名字随便起，相当于一个占位符
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1],tuple[0]]
}

const results = swap(['string', 124])
console.log(results)

// T类型的[]
function echoWithArr<T>(arg:T[]): T[] {
  console.log(arg.length)
  return arg
}
// 约束泛型 约束条件
interface IWithLength{
  length:number
}
function echoWithLength<T extends IWithLength>(arg:T): T {
  console.log(arg.length)
  return arg
}

const str1 = echoWithLength('str')
const obj = echoWithLength({length:10})
const arr2 = echoWithLength([1,2,3])

// 泛型在队列中的应用
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T{
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed(1))

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T,U>{
  key: T;
  value: U
}
let kp1: KeyPair<number, string>={
  key:124,value:'str'
}

let kp2: KeyPair<string, number>={
  key:'124',value:344
}

let arr:number[] = [1,2.3,4]
let arrTow: Array<number> = [1,2.3,4]

interface IPlus<T> {
  (a: T,b:T):T
}
function plus(a:number,b:number):number{
  return a+b
}
function connect(a:string,b:string):string{
  return a+b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect