// 传统的，如果我们想同时对一个字符串进行如下两个操作。
// 1. 提升为大写
// 2. 在尾部添加!

function process(s) {
  return s.toUpperCase() + '!';
}

// console.log(process('hello world'))

// 但是明显的这样的效果不好。
// 1. 嵌套了太多层
// 2. 如果是对数组进行连续处理，那么效率很低，因为每次都要重新遍历。

function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

function upperCase(s) {
  return s.toUpperCase();
}

function emphasize(s) {
  return `${s}!`;
}

// process = compose(emphasize, upperCase);

// let s = process('hello world');
// console.log(s)

// 同样的达到了效果，但是更加直观吧。

// 如果需要compose很多函数呢？

compose = (...arguments) => {
   const size = arguments.length ;
   const id = x => x;
   if(size === 0) return id;
   if(size === 1)
     return arguments[0];
   const composeHelp = (f, g) =>  x => g(f(x))
   return arguments.reverse().reduce(composeHelp, id)
 }

// process = compose(s => s.split('').join('_'),emphasize, upperCase)
// s = process('hello world');
// console.log(s)

module.exports = compose;
