// 有时候Maybe不能给我很好的错误信息，有时候希望如果是错误的信息就忽略后面的执行。

const Left = x => ({
  x,
  map: f => Left(x),
  join: (iffailure) => iffailure(x)
})

Left.of = x => Left(x);

const Right = x => ({
  x,
  map: f => Right(f(x)),
  join:() => x
})
Right.of = x => Right(x)


let getStringBox = s => {
  if(s === undefined || s === null)
    return Left.of(s);
  else
    return Right.of(s);
}


const compose = require('./composing.js')

// let map = f => m => m.map(f);
// let join = f => m => m.join(f);
// let iffailure = msg => x => ({
//   code : -1,
//   msg : msg + ': ' + x
// });
// let mapAndJoin = compose(join(iffailure('错误的参数')), map(s => s.toUpperCase()))
// console.log(mapAndJoin(getStringBox('hello')))
// console.log(mapAndJoin(getStringBox(undefined)))

// 这里可以返回合适的信息，而不是报错。哈哈哈。
// Either盒子一般用来处理异常。
