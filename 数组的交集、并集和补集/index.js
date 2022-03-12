const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5, 6];
//交集
const intersectionFn = (arr1, arr2) => {
    return arr1.filter((item1) => {
        return arr2.some((item2) => {
            return item1 === item2
        })
    })
}
//补集
const complementFn = (arr1, arr2) => {
    return arr2.filter((item1) => {
        return arr1.every((item2) => {
            return item1 !== item2
        })
    })
}
//并集
const unionFn = (arr1, arr2) => {
    return [...new Set([...arr1,...arr2])]
}
