/**
 * LeetCode NO.2044
 * 执行用时：1184 ms , 在所有 JavaScript 提交中击败了5.56%的用户
 * 内存消耗：77.8 MB , 在所有 JavaScript 提交中击败了5.55%的用户
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
    let childList = [[]];
    const numsLen = nums.length;
    for (let i = 0; i < numsLen; i++) {
        const tempRes = childList.map((subset) => {
            const one = subset.concat([]);
            one.push(nums[i]);
            return one;
        })
        childList = childList.concat(tempRes);
    }
    // childList.splice(0, 1)
    const bitwiseOr_Res = childList.map((item) => {
        if (item.length <2) {
            return item[0] || 0
        } else {
            return item.reduce((prev, curr) => {
                return prev | curr
            })
        }
    })
    const maxValue = Math.max(...bitwiseOr_Res);
    const bitwiseOr_Res_len = bitwiseOr_Res.length;
    let cnt = 0;
    for (let i = 0; i < bitwiseOr_Res_len; i++) {
        if (bitwiseOr_Res[i] === maxValue) {
            cnt++
        }
    }
    return cnt;
};
console.log(countMaxOrSubsets([3,2,1,5]))