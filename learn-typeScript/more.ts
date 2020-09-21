jQuery()
// type aliases 类型别名
type PlusType = (x:number,y:number) => number 

function sum(x:number,y:number):number{
  return x + y
}
const sum2: PlusType = sum

// 联合类型 通过类型别名，返回一个string或者一个方法返回值string
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n:NameOrResolver):string{
  if(typeof n === 'string'){
    return n
  } else {
    return n()
  }
}

// type assertion类型断言 必须是联合类型中的类型，不能断言成其他
function getLength(input:string | number):number{
  // const str = input as String
  // if(str.length){
  //   return str.length
  // }else{
  //   const number = input as Number
  //   return number.toString().length
  // }
  // <string>input类型断言简写
  if((<string>input).length){
    return (<string>input).length
  }else{
    input.toString().length
  }
}