let arr = [1, 3, 2, 4, 5, 6, 8, 7, 10, 9];
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        //每一轮比较都要去掉最后的i个已经较大的数
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp
            }
        }
    }
    return array
}
console.log(bubbleSort(arr))
