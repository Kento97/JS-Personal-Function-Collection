const formInfo = [
    {
        fieldId: 1,
        value: undefined
    },
    {
        fieldId: 2,
        value: undefined
    },
    {
        fieldId: 3,
        value: undefined
    }
]

// const newFormInfo = formInfo.map((item) => {
//     const value = item.value === undefined ? '' : item.value;
//     return {...item, value}
// })
console.log(JSON.stringify(formInfo, (_, value) => {
    return value === undefined ? '' : value
}))