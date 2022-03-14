/**
 * Leecode No.599 两个列表的最小索引总和
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    const sameItemOfTwoList = new Map();
    const list1Len=list1.length
    for (let i = 0; i <list1Len ; i++) {
        if (list2.indexOf(list1[i]) > -1) {
            sameItemOfTwoList.set(list1[i], i + list2.indexOf(list1[i]))
        }
    }
    const keys = [...sameItemOfTwoList.keys()]
    const values = [...sameItemOfTwoList.values()]
    const valuesLen = values.length;
    const leastValue = Math.min(...values)
    const leastIndexs = []
    const result=[]
    for (let i = 0; i < valuesLen; i++) {
        if (values[i] === leastValue) {
            leastIndexs.push(i)
        }
    }
    const len=leastIndexs.length
    for (let i = 0; i <len ; i++) {
        result[i]=keys[leastIndexs[i]]
    }
    return result
}
console.log(findRestaurant(["Shogun","Piatti","Tapioca Express","Burger King","KFC"],
    ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
