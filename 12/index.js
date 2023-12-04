// USER rewrite
// function Human() {}
// Human.prototype.run = function() {
//   let time = 2;

//   if (this.smoking) time *= 2;

//   return time;
// }

// function Men(name, boroda, smoking = false) {
//   this.name = name;
//   this.boroda = boroda;
//   this.smoking = smoking
// }

// Men.prototype = Object.create(Human.prototype);
// Men.prototype.getBoroda = function() {
//   return `${this.name} ${this.boroda ? 'have' : 'haven\'t'} boroda!`
// }

// const Anton = new Men('Anton', false, true);
// console.log(Anton);
// console.log(Anton.run());
// console.log(Anton.getBoroda());

// function Women(name, hasChild, smoking) {
//   this.name = name;
//   this.hasChild = hasChild;
//   this.smoking = smoking
// }

// Women.prototype = Object.create(Human.prototype);
// Women.prototype.run = function() {
//   let time = Human.prototype.run.call(this);

//   if (this.hasChild) time /= 3;
//   return time;
// }

// const Anna = new Women('Anna', true, true);
// console.log(Anna);
// console.log(Anna.run());

// for (let key in Anna) {
//   console.log(key);
// }

// class Human {
//   constructor(name, smoking) {
//     this.name = name;
//     this.smoking = smoking;
//   }

//   getRunTime() {
//     let time = 2;
//     if (this.smoking) time *= 2;

//     return time;
//   }
// }

// class Men extends Human {
//   constructor(name, smoking, boroda) {
//     super(name, smoking);
//     this.boroda = boroda;
//   }

//   getBoroda() {
//     return `${this.name} ${this.boroda ? 'have' : 'haven\'t'} boroda!`;
//   }
// }

// const Anton = new Men('Anton', false, true);
// console.log(Anton);
// console.log(Anton.getRunTime());
// console.log(Anton.getBoroda());

// class Women extends Human {
//   #someVariable = 10; // private variable
//   constructor(name, smoking, haveChild){
//     super(name, smoking);
//     this.haveChild = haveChild;
//     this._someSaveVariable = 20; // saved variable
//   }

//   setWaterTotheChainik() {
//     this._someSaveVariable = 100;
//   }

//   getRunTime() {
//     let time = super.getRunTime();

//     if (this.haveChild) time /= 3;
//     return time;
//   }
// }

// const Anna = new Women('Anna', true, true);
// console.log(Anna);
// console.log(Anna.getRunTime());

// for (let key in Anna) {
//   console.log(key);
// }


// Plane
// Write an "Airplane Simulator" for large and small airplanes
// The airplane simulator should be able to "allow" a plane's flight depending on the wind speed
// For large planes, there should also be a check for a sufficient number of passengers
// The method should return the phrase Takeoff for PLANE is approved/not approved.

const CROSSWIND = 10;

class Plane {
  constructor(name, maxCrosswind) {
    this.name = name;
    this.maxCrosswind = maxCrosswind;
  }

  takeoff(pass) {
    return `Takeoff for ${this.name} is ${this.getFlightData(pass).every((data) => data)
      ? 'approved'
      : 'not approved'
    }`;
  }

  getFlightData() {
    return [this.checkCrosswind()];
  }

  checkCrosswind() {
    return CROSSWIND < this.maxCrosswind;
  }
}

class Airlainer extends Plane {
  constructor(name, maxCrosswind, minPasssanger) {
    super(name, maxCrosswind);
    this.minPasssanger = minPasssanger;
  }

  getFlightData(currentPassangerValue) {
    return [...super.getFlightData(), this.checkValueOfPassanger(currentPassangerValue)];
  }

  checkValueOfPassanger(currentPassangerValue) {
    return this.minPasssanger < currentPassangerValue;
  }
}

class Airbatics extends Plane {
  constructor(name, maxCrosswind) {
    super(name, maxCrosswind);
  }
}

const Boeing747 = new Airlainer('Boeing 747', 40, 50);
const Extra310 = new Airbatics('Extra 310', 15);

console.log(Boeing747.takeoff(100));
console.log(Extra310.takeoff());


// const numbers = [1,2,3,4,5];
// const numbersTwo = [100,200,300,400,500];
// const numbersFore = [100,200,300,400,500];

// const numbersThree = [...numbers, ...numbersTwo, ...numbersFore];
// console.log(numbersThree);

// const user = {
//   name: 'Anton',
//   age: 28,
//   favColor: 'red',
// };

// const additionalInformation = {
//   pet: ['cat', 'dog', 'spider'],
//   favFood: 'banana',
//   name: 'Lily',
// };

// const fullUser = { ...user, ...additionalInformation, pet: [ ...additionalInformation.pet, 'fox'] };
// console.log(fullUser);



// GETTER, SETTER (new, old)
// CARS examples

// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   getMaxSpeed() {
//     return this.speed || 300;
//   }

//   setMaxSpeed(value) {
//     this.speed = value * 2;
//   }
// }

// const BMWX5 = new Car('BMW X5');
// const AudiRS = new Car('Audi RS');

// console.log(BMWX5);
// console.log(AudiRS);

// console.log(BMWX5.getMaxSpeed());
// AudiRS.setMaxSpeed(170);
// console.log(AudiRS.getMaxSpeed());

// class CarOld {
//   constructor(name) {
//     this.name = name;
//   }

//   get maxSpeed() {
//     return this.speed || 300;
//   }

//   set maxSpeed(value) {
//     this.speed = value * 2;
//   }
// }

// const BMWX5Old = new CarOld('BMW X5');
// const AudiRSOld = new CarOld('Audi RS');

// for (let key in BMWX5Old) {
//   console.log(key);
// }

// console.log(BMWX5Old);
// console.log(AudiRSOld);

// console.log(BMWX5Old.maxSpeed);

// AudiRSOld.maxSpeed = 170;
// console.log(AudiRSOld.maxSpeed);


// Authorisation


// Define Property
// object.freeze, Object.seal