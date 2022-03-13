const isJSON = (str) => {
    try {
        let obj = JSON.parse(str);
        return !!(obj && Object.prototype.toString.call(obj) === '[object Object]');
    } catch (e) {
        return false;
    }
}
const str='{"name":"zhangsan","age":18}';
console.log(isJSON(str))