/**
    * es6之前  寄生组合继承 
    */
{
  function Parent(name) {
    this.name = name
    this.arr = [1, 2, 3]
  }

  Parent.prototype.say = () => {
    console.log('Hi');
  }

  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }

  //  核心代码 通过Object.create创建新对象 子类 和 父类就会隔离
  // Object.create：创建一个新对象，使用现有的对象来提供新创建的对象的__proto__ 
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}



/**
*   es6继承 使用关键字class
*/
{
  class Parent {
    constructor(name) {
      this.name = name
      this.arr = [1, 2, 3]
    }
  }
  class Child extends Parent {
    constructor(name, age) {
      super(name)
      this.age = age
    }
  }
}
