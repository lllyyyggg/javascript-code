// 有很多时候我们处理的数据不一定就是满足条件的，比如说对一个数字进行concat操作。

// console.log(undefined.concat(' is one'));
// Cannot read property 'concat' of undefined

// 这使得我们不得不频繁的去判断是否为空，导致代码中弥漫着大量的空判断。

// 那么此时就可以用Maybe来避免空的判断。

const Maybe = x => ({
  x,
  // 如果不为空才对元素进行操作。
  map: f => (x === undefined || x === null) ? Maybe(null) : Maybe(f(x)),
  join: (failure, success) => (x === undefined || x === null) ? failure() : success(x)
})
Maybe.of = x => Maybe(x)

// const compose = require('./composing.js')

// let map = f => m => m.map(f);
// let join = (f, s) => m => m.join(f, s);

// let box = Maybe.of('hello')
// let box2 = Maybe.of(undefined)
// const upperAndRoar = compose(s => s + '!', s => s.toUpperCase())

// let failure = msg => () => msg;
// let success = () => x => x;
// const mapAndJoin = compose(join(failure('空指针啦,兄弟!'), success()), map(upperAndRoar))

// console.log(mapAndJoin(box))
// console.log(mapAndJoin(box2))

// 虽然是空指针，但是不会报错。

module.exports = Maybe;
