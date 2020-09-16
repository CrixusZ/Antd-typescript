// 函数声明,默认参数,可选参数
function add (x:number, y:number = 10, z?:number): number{
  if(typeof z === 'number'){
    return x + y + z
  }
  return x + y
}
let result = add(2,3,3)
// 函数表达式,自己也有自己的类型
const add1 = function(x:number, y:number = 10, z?:number): number{
  if(typeof z === 'number'){
    return x + y + z
  }
  return x + y
}
const add2: (x:number, y:number, z?:number) => number = add
// 类型推论
let str = 'str'
// str = 123//报错