
// Object literal
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };
  
//   // Object properties
  console.log(person.name); // John Doe
  console.log(person.age); // 30
  console.log(person.occupation); // Software Engineer
  
//   Object methods
  person.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  person.sayHello(); // Hello, my name is John Doe
  
//   // Object prototypes
//   const employee = Object.create(person);
//   employee.company = "Acme Corporation";
  
//   console.log(employee.name); // John Doe
//   console.log(employee.age); // 30
//   console.log(employee.occupation); // Software Engineer
//   console.log(employee.company); // Acme Corporation
  
//   // Inheritance
//   const manager = Object.create(employee);
//   manager.manage = function(employees) {
//     console.log("I am managing " + employees.length + " employees");
//   };
  
//   manager.manage([person, employee]); // I am managing 2 employees
  
  // Encapsulation
//   const bankAccount = {
//     balance: 10000,
//     deposit: function(amount) {
//       this.balance += amount;
//     },
//     withdraw: function(amount) {
//       this.balance -= amount;
//     }
//   };
  
//   // The balance property is encapsulated, so it cannot be accessed directly.
//   // Instead, we must use the deposit() or withdraw() methods to change the balance.
//   console.log(bankAccount.balance); // 10000
//   bankAccount.deposit(500);
//   console.log(bankAccount.balance); // 10500
//   bankAccount.withdraw(200);
//   console.log(bankAccount.balance); // 10300
  
  // Abstraction
//   const shape = function() {
//     this.area = undefined;
//   };
  
//   shape.prototype.calculateArea = function() {
//     throw new Error("This method must be implemented by a subclass");
//   };
  
//   const circle = Object.create(shape);
//   circle.prototype.calculateArea = function() {
//     return Math.PI * this.radius * this.radius;
//   };
  
//   const square = Object.create(shape);
//   square.prototype.calculateArea = function() {
//     return this.width * this.height;
//   };
  
//   const circle1 = new circle();
//   circle1.radius = 5;
//   console.log(circle1.calculateArea()); // 78.53981633974483
  
//   const square1 = new square();
//   square1.width = 10;
//   square1.height = 10;
//   console.log(square1.calculateArea()); // 100
  
    
  // Polymorphism
// const shapes = [circle, square];

// for (const shape of shapes) {
//   shape.calculateArea(); // The correct calculateArea() method will be called for each shape.
// }

// Composition
// const car = {
//   make: "Honda",
//   model: "Accord",
//   engine: {
//     cylinderCount: 4,
//     horsepower: 150
//   },
//   wheels: [
//     {
//       type: "tire",
//       size: 17
//     },
//     {
//       type: "tire",
//       size: 17
//     },
//     {
//       type: "tire",
//       size: 17
//     },
//     {
//       type: "tire",
//       size: 17
//     }
//   ]
// };

// console.log(car.make); // Honda
// console.log(car.model); // Accord
// console.log(car.engine.cylinderCount); // 4
// console.log(car.engine.horsepower); // 150
// console.log(car.wheels[0].type); // tire
// console.log(car.wheels[1].size); // 17

// Destructuring assignment
// const { make, model } = car;

// console.log(make); // Honda
// console.log(model); // Accord

// Object spread operator
// const newCar = { ...car, color: "red" };

// console.log(newCar.color); // red

// // Object shorthand properties
// const person = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer"
// };

// const employee = {
//   company: "Acme Corporation",
//   ...person
// };

// console.log(employee.name); // John Doe
// console.log(employee.age); // 30
// console.log(employee.occupation); // Software Engineer
// console.log(employee.company); // Acme Corporation

// // Object keys
// const keys = Object.keys(person);

// console.log(keys); // ["name", "age", "occupation"]

// // Object values
// const values = Object.values(person);

// console.log(values); // ["John Doe", 30, "Software Engineer"]

// // Object iteration
// for (const key in person) {
//   console.log(key, person[key]);
// }

// // Object comparison
// const person1 = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer"
// };

// const person2 = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer"
// };

// console.log(person1 == person2); // true

// Object cloning
// const clonedPerson = JSON.parse(JSON.stringify(person));

// console.log(clonedPerson == person); // false
// console.log(clonedPerson === person); // false

// Object serialization
// const serializedPerson = JSON.stringify(person);

// console.log(serializedPerson); // {"name":"John Doe","age":30,"occupation":"Software Engineer"}

// for(key of serializedPerson){
//     console.log(key);
// }


// // Object deserialization
// const deserializedPerson = JSON.parse(serializedPerson);

// console.log(deserializedPerson); // {"name":"John Doe","age":30,"occupation":"Software Engineer"}

// for(k in deserializedPerson) console.log(k, deserializedPerson[k]);

// Object introspection
// console.log(Object.getOwnPropertyNames(person)); // ["name", "age", "occupation"]

// Object debugging
// console.log(person); // {name: "John Doe", age: 30, occupation: "Software Engineer"}

// Object testing
// const expect = require("expect");

// expect(person.name).toBe("John Doe");
// expect(person.age).toBe(30);
// expect(person.occupation).toBe("Software Engineer");
