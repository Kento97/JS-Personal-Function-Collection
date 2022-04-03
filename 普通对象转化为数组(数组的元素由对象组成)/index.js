const result = {
    beijing: 100,
    shanghai: 60,
    shenzhen: 80,
    guangzhou: 90
}

const objToArr = (data, realName, realValue) => {
    const res = [];
    for (let key in data) {
        if (Reflect.ownKeys(data).includes(key)) {
            res.push({
                [realName]: key,
                [realValue]: data[key]
            })
        }
    }
    return res;
}
console.log(objToArr(result, 'city', 'value'))
