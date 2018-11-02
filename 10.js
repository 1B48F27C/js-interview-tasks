// We have Person class. How to create inherited object SoftwareTester with new property
// named 'profession' and overridden 'introduction' method?
// How to create public and private properties?

function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduction = function() {
  console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
}