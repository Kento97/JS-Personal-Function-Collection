function myNew(func, ...args) {
  let obj = {}
  obj.__proto__ = func.prototype
  let res = func.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Foo(num) {
  this.number = num
}

let foo1 = myNew(Foo, 1)
console.log(foo1 instanceof Foo)  // true
console.log(foo1.number)  // 1

let foo2 = new Foo(2)
console.log(foo2 instanceof Foo)  // true
console.log(foo2.number)  // 2
