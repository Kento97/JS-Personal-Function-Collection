//返回一个数字对应的字符串
const num = 123;
console.log(num.toString());
//返回一个表示该对象的字符串
const obj = {
    name: '张三',
    age: 18
}
console.log(obj.toString());

function test() {
}

//检测对象类型
//(不用toString原因是防止对象内部对toString重写，所以直接用原型对象身上的toString，通过call改变this指向即可)
console.log(
    Object.prototype.toString.call(new RegExp())
)