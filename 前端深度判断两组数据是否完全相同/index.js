const preProps = {
    components: [
        {type: 'title', config: {color: '#f00', dataConfig: [{x: 1, y: 2}]}},
        {type: 'bar', config: {color: '#0a0', dataConfig: [{x: 1, y: 2}]}},
    ]
}
const nextProps = {
    components: [
        {type: 'title', config: {color: '#f00', dataConfig: [{x: 1, y: 2}]}},
        {type: 'bar', config: {color: '#0a0', dataConfig: [{x: 1, y: 2}]}},
    ]
}

const isEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
}
console.log(isEqual(preProps, nextProps))