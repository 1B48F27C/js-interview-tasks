// What is missing?

function Person(first, last, age) {
    this.name = {
      first,
      last
    };
    this.age = age;  
  };
  
  Person.getInfo = function(){
     console.log(`${this.name.first} + ${this.name.last}, age is ${this.age}`);
  }
  
  var customer = new Person("Ivan", "Ivanov", 25);
  customer.getInfo();
  