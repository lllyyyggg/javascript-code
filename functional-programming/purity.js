
// 所谓纯函数，就是一种自给自足的函数，只依赖于自己的参数，并且不会产生副作用。

function add(x, y) {
  return x + y;
};
// 这就是一个纯函数，函数只依赖于x, y, 不会对外界产生任何影响。
// let sum = add(1, 2);
// console.log(sum);
// 输出结果是3。


// let z = 1;
// add = function(x, y) {
//   return x + y + z;
// };

// sum = add(1, 2);
// console.log(sum);

// z = 2;

// sum = add(1, 2);
// console.log(sum);

// 此时add(1, 2)的值发生了变化，因为函数的输出依赖于一个外界的可变量。所以该函数不是一个纯函数。

let color = {name : 'green'};
function changeColor(color) {
  color['name'] = 'red';
}
// changeColor(color);
// console.log(color)
// { name: 'red' }

// 此时color的name发生了变化，函数changeColor对color对象产生了影响。所以该函数也不是一个纯函数。
