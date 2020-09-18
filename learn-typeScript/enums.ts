// 枚举 加上const为常量枚举 提升性能，内联枚举的方法
// 常量值可以使用常量枚举,计算枚举不能使用const声明
const enum Direction {
  // 数字枚举
  // Up = 10,
  // Down,
  // Left,
  // Right,
  // 字符串枚举
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

if (Direction.Up === 'UP'){
  console.log('go up!')
}