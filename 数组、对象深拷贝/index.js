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

function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(data) {
    const obj = checkType(data) === "Array" ? [] : {};
    if (['Object', 'Array'].includes(checkType(data))) {
        for (let key in data) {
            const value = data[key];
            //如果拷贝的是简单类型直接进行赋值
            if (!['Object', 'Array'].includes(checkType(value))) {
                obj[key] = value;
            } else {
                //定义一个弱映射，初始化的时候将data本身加入到映射中
                const wm = new WeakMap();
                //如果拷贝的是复杂数据类型，第一次拷贝后存入 WeakMap
                //第二次再次遇到该值时直接赋值为null，结束递柜
                wm.set(data, true);
                if (wm.has(value)) {
                    obj[key] = null
                } else {
                    wm.set(value, true)
                    obj[key] = deepClone(value);
                }
            }
        }
    } else {
        return data;
    }
    return obj
}

log(deepClone(obj));