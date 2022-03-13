//subStr获取小数点位数
function subStr(num) {
    let str = num.toString();
    let index = str.indexOf(".");
    if (index === -1) {
        return 0;
    } else {
        return str.substr(index + 1).length;
    }
}

const add = (num1, num2) => {
    let result = 0;
    const num1Len = subStr(num1);
    const num2Len = subStr(num2);
    const maxLen = Math.max(num1Len, num2Len);
    const maxTimes = Math.pow(10, maxLen);
    result = (num1 * maxTimes + num2 * maxTimes) / maxTimes;
    return result;
}
console.log(add(0.1, 0.2))