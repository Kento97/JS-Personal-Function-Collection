class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
        console.log(this)
    }
}
const student = new Student('张三', 18);
student.sayHi();