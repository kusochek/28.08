// SIMPLE DATA IN TS

const value: number = 10;
const str: string = 'Hello!';
const bool: boolean = true;
const empty: null = null;
const nothing: undefined = undefined;

let x: number = 5;
// x = 'five'; Type 'string' is not assignable to type 'number'.


// OBJ AND ARRAY IN TS

const arr_1: string[] = ['hello', 'my', 'name', 'is', 'Helen'];
const arr_2: Array<number> = [1, 2, 3, 4, 5];

type UserData = {
  firstName: string;
  lastName: string;
  birthday: Date;
  haveChild?: boolean; // optional field
};

const user: UserData  = {
  firstName: 'Sasha',
  lastName: 'Dontsova',
  birthday: new Date('1995-07-21'),
  haveChild: false,
};

const user_2: UserData = {
  firstName: 'Oleh',
  lastName: 'Kolesnykov',
  birthday: new Date('1998-01-21'),
}

// CLASS
// INTERFACE

interface IHuman {
  age: number,
  name: string,
};

interface IWoman extends IHuman {
  haveLongHair: boolean,
  longNails?: boolean,
}

interface IMan extends IHuman {
  haveBraid: boolean;
  isSmoking?: boolean;
}

interface IBoy extends IMan {
  haveGirlfriend: boolean;
}

class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
}

class Woman extends Human {
  haveLongHair: boolean;
  longNails?: boolean;

  constructor(name: string, age: number, haveLongHair: boolean, longNails?: boolean) {
    super(name, age);
    this.haveLongHair = haveLongHair;
    this.longNails = longNails;
  }
}

class Man extends Human {
  haveBraid: boolean;
  isSmoking?: boolean;

  constructor(name: string, age: number, haveBraid: boolean, isSmoking?: boolean) {
    super(name, age);
    this.haveBraid = haveBraid;
    this.isSmoking = isSmoking;
  }
}

const Julia: IWoman = new Woman('Julia', 45, true, false);
const Pasha: IMan = new Man('Pasha', 35, true);

const Andrii: IMan = {
  name: 'Andrii',
  age: 24,
  haveBraid: true,
  isSmoking: false,
};

// TS extension
// ALIAS

type Order = string | undefined;

let food: Order = 'Steak';
food = undefined;

type Cat = {
  name: string;
  age: number;
  gender: 'male' | 'female',
};

// EXTENSIONS

type CatTwo = Cat & {
  hasHome: boolean;
}

const cat: Cat = {
  name: 'Marsik',
  age: 4,
  gender: 'male',
};

const cat_2: CatTwo = {
  name: 'Siri',
  age: 10,
  gender: 'female',
  hasHome: false,
};

// FUNCTION

function getSum(a: number, b: number): number {
  return a + b;
}

getSum(2, 3);

function doSomething(): void {
  console.log('Hello World!');
}

// const someVar: any = 10; // AVOID THIS
// const someVar: unknown = 10; // AVOID THIS


