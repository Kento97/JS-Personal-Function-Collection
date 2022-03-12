const data = [0, 1, 2, 3, 4];
const sum = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev + curr
    }, 0)
}

//斐波那契数列
//递归
const fib = (n) => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}

//动态规划
const dynamicFib = (n) => {
    if (n < 2) {
        return n;
    }
    let numArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        numArr.push(numArr[0] + numArr[1])
        numArr.splice(0, 1)
    }
    return numArr[1]
}
