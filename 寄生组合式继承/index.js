//寄生组合式继承

function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
}

Parent6.prototype.getName = function () {
    return this.name;
}

function Child6() {
    Parent6.call(this);
    this.friends = 'child6';
}

function clone(parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

clone(Parent6, Child6);
Child6.prototype.getFriends = function () {
    return this.friends;
}

let person6 = new Child6();
console.log(person6);
console.log(person6.getName());
console.log(person6.getFriends());
// 它可以解决组合继承 父类被调用两次和在不同层级属性重复的问题。
