// interface 接口
// 对对象的形状(shape)进行描述
// 对类class进行抽象
// Duck Typing(鸭子类型)动态编程语言的推断策略

interface IPerson {
  name: string;
  // ?可选属性
  age?: number;
  // 只读属性，只有创建对象时才能赋值
  readonly id: number;
}
let zeng: IPerson = {
  id: 1,
  name: 'zengjiahao',
  age: 30
}
