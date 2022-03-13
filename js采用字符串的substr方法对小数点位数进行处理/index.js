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

console.log(subStr(1.23));