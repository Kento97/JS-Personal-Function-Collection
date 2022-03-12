// [
//     { name: '小明', grade: '一年级' },
//     { name: '小张', grade: '一年级' },
//     { name: '小赵', grade: '一年级' },
//     { name: '张三', grade: '二年级' },
//     { name: '李四', grade: '二年级' },
//     { name: '王五', grade: '二年级' },
//     { name: 'tom', grade: '三年级' },
//     { name: 'lilei', grade: '三年级' },
//     { name: 'mary', grade: '三年级' }
// ]

const gradeList = [
    {grade1: '一年级'},
    {grade2: '二年级'},
    {grade3: '三年级'},
]

const studentList = [
    {grade1: ['小明', '小张', '小赵']},
    {grade2: ['张三', '李四', '王五']},
    {grade3: ['tom', 'lilei', 'mary']},
]

const parseDataFn = (data, gradeList) => {
    const result = [];
    const gradeObj = {};
    gradeList.forEach((item) => {
        gradeObj[Object.keys(item)[0]] = Object.values(item)[0];
    })
    data.forEach((item) => {
        Object.values(item)[0].forEach((Item) => {
            result.push({
                name: Item,
                grade: gradeObj[Object.keys(item)[0]]
            })
        })
    })
    console.log(result)
    return result;
}
parseDataFn(studentList, gradeList);