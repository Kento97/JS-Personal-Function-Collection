const data = [
    {userId: 1, name: '小明', ChineseScore: 90, MathScore: 10},
    {userId: 2, name: '小红', ChineseScore: 80, MathScore: 20},
    {userId: 3, name: '小白', ChineseScore: 70, MathScore: 40},
    {userId: 4, name: '小黑', ChineseScore: 20, MathScore: 30},
    {userId: 5, name: '小绿', ChineseScore: 10, MathScore: 50}
]
//找出语文成绩和数学之和等于100的学生
const filterStudent = (arr, target) => {
    let result = [];
    data.forEach((item) => {
        if (item.ChineseScore + item.MathScore >= target) {
            result.push(item.name);
        }
    })
    console.log(result);
    return result;
}
/**
 *
 * @param {Array<number>} nums
 * @param {number} target
 */
const twoSum = (nums, target) => {
    const result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let another = target - nums[i];
        if (nums.slice(0, i).indexOf(another) > -1) {
            result.push([nums.indexOf(another), i])
        }
    }
    console.log(result)
    return result
}

