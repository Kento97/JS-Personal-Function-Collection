const arr=[0,1,0,2,0,3,0,4];
let arr2=[]
arr.reverse().forEach((item) => {
    item === 0 ? arr2.push(item)
               : arr2.splice(0,0,item)
})
console.log(arr2)