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

//reduce 去重
function arrayDeduplication(array) {
    try {
        array.forEach((ele) => {
            if (typeof ele !== "string" && typeof ele !== "number") {
                throw "警告：数组元素必须是字符串或者数字";
            }
        });
        return array.reduce((prev, curr) => {
            if (prev.indexOf(curr) === -1) {
                prev.push(curr);
            }
            return prev;
        }, []);
    } catch (error) {
        console.log(error);
    }
}
