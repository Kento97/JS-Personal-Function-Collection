/**
 * toLocaleString(locale,options)妙用
 * locale: 可选参数，默认值为undefined，表示使用浏览器的默认语言环境，
 * options: 可选参数，默认值为undefined，表示使用默认的格式化选项，
 */

//千位数字分割
const numOne=123456.123;
console.log(numOne.toLocaleString());//123,456.123

//数字转为百分比
const numTwo=0.12;
console.log(numTwo.toLocaleString('zh',{
    style:'percent',
}));//12.00%

//数字转化为货币表示法
const numThree=100000000;
console.log(numThree.toLocaleString('zh-CN',{
    style:'currency',
    currency:'CNY',
    currencyDisplay:'name',
}));