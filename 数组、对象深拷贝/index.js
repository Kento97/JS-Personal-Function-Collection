const obj = {
    a: 1,
    b: NaN,
    c: {
        d: [1, 2, 3],
        e: undefined
    },
    d: {
        f: {
            g: () => {

            }
        }
    }
}
const {log} = console
function checkType(target){
    return Object.prototype.toString.call(target).slice(8, -1);
}
function deepClone(targetData){
    let type=checkType(targetData);
    let result;
    if(type==="Array"){
        result=[];
        const arrLen=targetData.length;
        for (let i = 0; i < arrLen; i++) {
            result.push(deepClone(targetData[i]));
        }
    } else if (type==="Object"){
        result={};
        for (let key in targetData) {
            if (targetData.hasOwnProperty(key)) {
                result[key]=deepClone(targetData[key]);
            }
        }
    }else {
        return targetData;
    }
    return result;
}
log(deepClone(obj));