const arr=[0,1,0,2,0,3,0,4,5,0];
// let arr2=[]
// arr.reverse().forEach((item) => {
//     item === 0 ? arr2.push(item)
//                : arr2.splice(0,0,item)
// })
// console.log(arr2)
let len=arr.length;
for (let i = 0; i < len; i++) {
    console.log(i)
    if(arr[i]===0){
        arr.splice(i,1);
        arr.push(0);
        i--;
        len--;
    }
}
console.log(arr)