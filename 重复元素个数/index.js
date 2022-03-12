function duplicates(arr) {
  let map = new Map();
  let resultMap = arr.reduce((prev, curr) => {
    map.set(curr, map.get(curr) + 1 || 1);
    return prev;
  }, map);
  let list = [];
  for (let [key, value] of resultMap) {
    if (value > 1) {
      list.push(key);
    }
  }
  return list;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
