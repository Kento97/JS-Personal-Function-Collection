//两个数组中完全独立的数据 
const a = [1, 2, 4], b = [1, 3, 8, 4];
const newArr = [...a, ...b].filter((item, _, arr) => {
  return arr.indexOf(item) === arr.lastIndexOf(item);
})
console.log(newArr); //[ 2, 3, 8 ]
