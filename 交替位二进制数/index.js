/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
  return parseInt(n).toString(2).split('').every((item, index, arr) => {
    if (index === 0) return true
    return item !== arr[index - 1]
  })
};
console.log(hasAlternatingBits(5));
