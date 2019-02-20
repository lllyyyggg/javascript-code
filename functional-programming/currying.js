// 柯里化是将一个接受多个参数的纯函数转变成只有固定参数的纯函数，
// 但是这个函数返回接受剩余的参数。

function add(x, y) {
  return x + y;
}

// let sum = add(1, 2);
// console.log(sum);
// 3
// 上面的函数可以接受两个函数，将函数改造下。

// add = function(x) {
//   return function(y) {
//     return x + y;
//   }
// };
//
// let increment = add(1);
// let addTen = add(10);
// let n = increment(2);
// console.log(n);
// n = addTen(2);
// console.log(n);
// 3
// 12

// 那么此时完成一个通用的柯里化的工具。
let curry = function(fn) {
  let limit = fn.length;
  // 返回一个函数
  return f = function() {
    // 将arguments对象的内容封装到数组中
    let args = [].slice.call(arguments, 0);
    // 如果参数足够了，直接返回
    if(args.length >= limit) {
      return fn.apply(null, args);
    }else {
      // 如果参数不够，再返回一个函数
      return f2 = function() {
        // 新函数继续获取参数
        let args2 = [].slice.call(arguments, 0);
        // 继续执行f的逻辑，如果两个函数参数个数还不够，那么继续返回f2，直到参数够。
        return f.apply(null, args.concat(args2));
      }
    }
  }
  return f;
}


// const increment = curry(add)(1)
// const add10 = curry(add)(10)
// console.log(increment(1))
// console.log(add10(2))

module.exports = curry;
