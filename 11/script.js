
// arr.concat([123, 1245, 333]);
// let arr = [
//     1,
//     2,
//     length: 2,
//     __proto__: Array(0)
//     at: ƒ at()
//     concat: ƒ concat()
//     constructor: ƒ Array()
//     copyWithin: ƒ copyWithin()
//     entries: ƒ entries()
//     every: ƒ every()
//     fill: ƒ fill()
//     filter: ƒ filter()
//     find: ƒ find()
//     findIndex: ƒ findIndex()
//     findLast: ƒ findLast()
//     findLastIndex: ƒ findLastIndex()
//     flat: ƒ flat()
//     flatMap: ƒ flatMap()
//     forEach: ƒ forEach()
//     includes: ƒ includes()
//     indexOf: ƒ indexOf()
//     join: ƒ join()
//     keys: ƒ keys()
//     lastIndexOf: ƒ lastIndexOf()
//     length: 0
//     map: ƒ map()
//     pop: ƒ pop()
//     push: ƒ push()
//     reduce: ƒ reduce()
//     reduceRight: ƒ reduceRight()
//     reverse: ƒ reverse()
//     shift: ƒ shift()
//     slice: ƒ slice()
//     some: ƒ some()
//     sort: ƒ sort()
//     splice: ƒ splice()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     unshift: ƒ unshift()
//     values: ƒ values()
//     Symbol(Symbol.iterator): ƒ values()
//     Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
//     [[Prototype]]: Object
//     constructor: ƒ Object()
//     hasOwnProperty: ƒ hasOwnProperty()
//     isPrototypeOf: ƒ isPrototypeOf()
//     propertyIsEnumerable: ƒ propertyIsEnumerable()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     valueOf: ƒ valueOf()
//     __defineGetter__: ƒ __defineGetter__()
//     __defineSetter__: ƒ __defineSetter__()
//     __lookupGetter__: ƒ __lookupGetter__()
//     __lookupSetter__: ƒ __lookupSetter__()
//     __proto__: (...)
//     get __proto__: ƒ __proto__()
//     set __proto__: ƒ __proto__()
// ];


// __proto__
// prototype
// myMethod (str)

// const string = 'Hello';

// string.__proto__.push = function(prevValue, newValue) {
//   return prevValue + newValue;
// };

// console.log(string.push(string, ', world!'));

// const firstName = new String('Sasha');
// console.log(firstName.push(firstName, ' Dontsova'));

// function func() {
//   console.log(this);
// }

// String.prototype.push = function (newValue) {
//   console.log(this);
//   return this + newValue;
// };

// const str = 'Hello';

// console.log(str.push(' World!'));

// const arr = [1,2,3];
// arr.push(4);


// obj includs methods
// 3 common obj, with methods
// this


// myPush

// const disney = ['Ariel', 'Anna', 'Elza', 'Mulan'];

// Array.prototype.push = function() {
//   for (let i = 0; i < arguments.length; i++) {
//     this[this.length] = arguments[i];
//   }
// };

// disney.push('Moana', 'Cinderela');
// console.log(disney);


// Object prototype
// Object.create()

// const Father = {
//   firstName: 'Denys',
//   lastName: 'Kozak',
//   age: 35,
//   haveCar: true,
//   getInfo() {
//     return `Hello! My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old!`;
//   },
// };

// console.log(Father.getInfo());

// const Child = Object.create(Father);

// Child.firstName = 'Yaroslav';
// Child.age = 10;

// console.log(Child);
// console.log(Child.getInfo());
// const Child = {
//   firstName: 'Yaroslav',
//   age: 10,
// };


// Function-constructor

// function Parent(firstName, lastName, age, haveCar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.haveCar = haveCar;
// }

// Parent.prototype.getInfo = function() {
//   return `Hello! My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old!`;
// }

// const father = new Parent('Denys', 'Kozak', 35, true);
// const mother = new Parent('Anna', 'Kozak', 33, false)
// console.log(father.getInfo());
// console.log(mother.getInfo());


// const users = [
//   {
//     name: "Dasha",
//     age: 5,
//     color: "red",
//   },
//   {
//     name: "Kolya",
//     age: 10,
//     color: "blue",
//   },
//   {
//     name: "Milka",
//     age: 8,
//     color: "pink",
//   },
// ];

// function User(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
// }

// User.prototype.renderUser = function() {
//   const ul = document.createElement('ul');

//   Object.keys(this).forEach((key) => {
//     const li = document.createElement('li');
//     li.innerText = this[key];

//     ul.append(li);
//   })

//   document.body.append(ul);
// }

// users
//   .map((user) => {
//     const newUser = new User(user.name, user.age, user.color);
//     console.log(newUser);
//     return newUser;
//   })
//   .forEach((user) => user.renderUser());


// strong lvl
// HUMAN (call apple bind)

function Human() {}
Human.prototype.run = function() {
  let time = 2;

  if (this.smoking) time *= 2;

  return time;
}

function Men(name, boroda, smoking = false) {
  this.name = name;
  this.boroda = boroda;
  this.smoking = smoking
}

Men.prototype = Object.create(Human.prototype);
Men.prototype.getBoroda = function() {
  return `${this.name} ${this.boroda ? 'have' : 'haven\'t'} boroda!`
}

const Anton = new Men('Anton', false, true);
console.log(Anton);
console.log(Anton.run());
console.log(Anton.getBoroda());

function Women(name, hasChild, smoking) {
  this.name = name;
  this.hasChild = hasChild;
  this.smoking = smoking
}

Women.prototype = Object.create(Human.prototype);
Women.prototype.run = function() {
  let time = Human.prototype.run.call(this);

  if (this.hasChild) time /= 3;
  return time;
}

const Anna = new Women('Anna', true, true);
console.log(Anna);
console.log(Anna.run());

// const Ariel = {
//   name: 'Ariel',
//   favColor: 'blue',
//   getFavColor(pet, pet2) {
//     console.log(`${this.name} her favorite color is ${this.favColor}. Her pet is ${pet} ${pet2}`);
//   },
// };

// const Mulan = {
//   name: 'Mulan',
//   favColor: 'green',
// };

// // call, apply, bind
// Ariel.getFavColor('fish');
// Ariel.getFavColor.call(Mulan, 'lizzard', 'horse');
// Ariel.getFavColor.apply(Mulan, ['lizzard', 'horse']);
// const newFunc = Ariel.getFavColor.bind(Mulan);
// newFunc('lizzard', 'horse');
// newFunc();
// newFunc();
// newFunc();
