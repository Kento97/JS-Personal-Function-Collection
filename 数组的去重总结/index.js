const dataList = [1, 2, 3, 4, 5, 2, 1];

//for循环去重
const forRemoveDuplicates = (arr) => {
    let result = [];
    arr.forEach((item) => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    })
    return result;
};

//利用过滤器去重
const filterRemoveDuplicates = (arr) => {
    return arr.filter((item, index, self) => {
        return self.indexOf(item) === index;
    })
};
//利用Set去重
const es6RemoveDuplicates = (arr) => {
    return [...new Set(arr)];
};
