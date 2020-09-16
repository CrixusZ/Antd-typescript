const hello = (name) => {
  return `hello ${name}`
}

hello('zengjihao')

let isDone: boolean = false
let age: number = 122
let binaryNumberL: number = 0b1111
let name1: string = '111'
let u: undefined = undefined
let n: null = null
// undefined 和 null是所有类型的子类型

let num :number = undefined || null

let notSure: any = 4
notSure = 'dsadsad'
notSure = true

let numberOrString: number | string = 123

let arrOfNumbers: number[] = [1,2,3]

function test() {
  // 类数组
  console.log(arguments)
}
// 原组Tuple
let user: [string,number]=['znejgihao',2]


