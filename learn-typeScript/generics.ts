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
