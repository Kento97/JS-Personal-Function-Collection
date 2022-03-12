const result = [
    {name: '张三', age: 20},
    {name: '李四', age: 30},
    {name: '王五', age: 40}
]

const arrToObj = (data, realName, realValue) =>{
    const res={};
    data.forEach((item) => {
        res[item[realName]] = item[realValue];
    })
    return res
}
console.log(arrToObj(result, 'name', 'age'))