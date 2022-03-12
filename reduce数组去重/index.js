/**
 * reduce数组去重
 * @param {(string|number)[]} array
 */
function arrayDeduplication(array) {
  try {
    array.forEach((ele) => {
      if (typeof ele !== "string" && typeof ele !== "number") {
        throw "警告：数组元素必须是字符串或者数字";
      }
    });
    const result = array.reduce((prev, curr) => {
      if (prev.indexOf(curr) === -1) {
        prev.push(curr);
      }
      return prev;
    }, []);
    return result.sort();
  } catch (error) {
    console.log(error);
  }
}
