function debounce(fn, wait) {
  let timer = null; //注意点1：借助闭包
  return function (...args) {
    if (timer) clearTimeout(timer); //注意点2：清除定时器
    timer = setTimeout(() => {
      fn.apply(this, args) //注意点3：setTimout会发生this隐式丢失；改变this指向为调用debounce所指的对象。
    }, wait)
  }
}



