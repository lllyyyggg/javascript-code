// 如果能把数据的操作放到一个盒子里面该多好。

const Container = x => ({
  x,
  map: f => Container(f(x)),
  join: () => x
})
Container.of = x => Container(x);


let map = f => m => m.map(f);
let join = m => m.join()

// 这样依赖我们可以这个盒子里面的内容进行诸多操作，不管盒子里面的是什么内容。


// const compose = require('./composing.js')
// const plus2AndDouble = compose(x => x * 2,x => x + 2)
// let box = Container(2);

// let result = join(map(plus2AndDouble)(box))

// 但是上面的这样的函数嵌套也非常难受。compose的前提是右边的函数的output是前一个函数的input

// const mapsAndJoins = compose(join ,map(plus2AndDouble));
// console.log(mapsAndJoins(box))

// 这样一来数据都在Container里面，操作都在外面进行定义，完成了数据和操作的隔离。
// 还不错吧。

module.exports.Container = Container;
