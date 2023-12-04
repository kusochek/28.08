// Define Property
// Object.freeze, Object.seal

// const dishes = {
//   first: 'borsch',
//   second: 'piureshka z kotlelka',
//   dessert: 'pyrozhok',
//   additional: ['apple', 'banana', 'orange'],
// };

// Object.freeze(dishes);
// Object.seal(dishes);
// dishes.second = 'makaroshky z kotletka';
// delete dishes.first;
// console.log(dishes);

// Object.defineProperty(dishes, 'first', {
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// dishes.first = 'grybna zupa';
// delete dishes.first;

// Object.defineProperty(dishes, 'drink', {
//   value: 'kompot',
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });

// console.log(dishes);

// for (let key in dishes) {
//   console.log(dishes[key]);
// }


// window
// location
// history (back, forward)

// var a = 10;

// a = 15;
// console.log(window);
// console.log(document);
// console.log(location);


// var, let, const
// new lexical environment

// console.log(value);
// console.log(window);
// debugger;
// var value = 10;
// const value = 10;
// debugger;

// f1();

// function f1() {
//   debugger;
//   var a = 15;
//   console.log(value, a);

//   function f2() {
//     debugger;
//     var a = 10;
//     console.log(a);
//   }

//   f2();
// }

// console.log(a);
// f1();

// f2(); // error

// debugger;
// console.log(value);
// const value = 10;
// let value2 = 15;
// debugger;
// console.log(value);


// function f1() {
//   debugger;
//   const a = 15;
//   console.log(value, a);

//   function f2() {
//     debugger;
//     const a = 10;
//     console.log(a);
//   }

//   f2();
// }

// f1();


// VAR: LOCAL (only for function), GLOBAL (everything else)
// CONST, LET: LOCAL (only for function), SCRIPT (global), BLOCK (for, if, else {})

// for (let i = 0; i < 10; i++) {
//   debugger;
//   console.log(i);
// }

// for (; i < 20; i ++) {
//   console.log(i);
// }


// setInterval, setTimeout
// Timer of Colors

// function getRundomNumber() {
//   return Math.floor(Math.random() * 256);
// }

// function generateRGBColor() {
//   return `rgb(${getRundomNumber()}, ${getRundomNumber()}, ${getRundomNumber()})`;
// }

// const root = document.querySelector('.root');

// const divList = [];

// for (let i = 1; i < 10; i++) {
//   const div = document.createElement('div');

//   div.innerText = i;
//   div.style.backgroundColor = generateRGBColor();

//   divList.push(div);
// };

// root.append(...divList);

// setInterval(() => {
//   divList.forEach((div) => {
//     div.style.backgroundColor = generateRGBColor();
//   });
// }, 2000);


// onmouseenter
// onmouseleave
// onmouseover
// onmouseout
// onclick
// ondblclick
// onmousedown
// onmouseup
// oncontextmenu

// const block = document.querySelector('.block');
// const innerBlock = document.querySelector('.inner-block');

// block.onclick = () => {
//   console.log('Block clicked');
// };
// innerBlock.onclick = () => {
//   console.log('Inner block clicked');
// };

// block.addEventListener('click', () => {
//   console.log('Block clicked');
// });

// innerBlock.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Inner block clicked');
// });

// block.onmouseenter = () => {
//   console.log('Mouse enter');
// }

// block.onmouseleave = () => {
//   console.log('Mouse leave');
// }

// block.onmouseover = () => {
//   console.log('Mouse over');
// }

// block.onmouseout = () => {
//   console.log('Mouse out');
// }

// block.onmousemove = () => {
//   console.log('Mouse move');
// }

// block.ondblclick = () => {
//   console.log('Mouse dbl click');
// }

// block.onmousedown = () => {
//   console.log('Mouse down');
// }

// block.onmouseup = () => {
//   console.log('Mouse up');
// }

// block.onclick = () => {
//   console.log('Mouse click');
// }


// Drag and Drop

// const block = document.querySelector('.block');

// let x = null;
// let y = null;

// let isClickActive = false;

// block.onmousedown = (e) => {
//   x = e.screenX;
//   y = e.screenY;

//   isClickActive = true;
//   console.log(x, y);
// };

// block.onmousemove = (e) => {
//   if (!isClickActive) return;

//   let _x = e.screenX;
//   let _y = e.screenY;

//   console.log(_x, _y);

//   const diffX = _x - x;
//   const diffY = _y - y;

//   console.log(diffX, diffY);

//   block.style.left = `${parseInt(block.style.left || 0) + diffX}px`;
//   block.style.top = `${parseInt(block.style.top || 0) + diffY}px`;

//   x = _x;
//   y = _y;
// };

// block.onmouseup = () => {
//   isClickActive = false;
// }


// keypress, keydown, keyup

// const block = document.querySelector('.block');

// const STEP = 10;

// const operations = {
//   37: (block) => block.style.left = `${parseInt(block.style.left || 0) - STEP}px`,
//   38: (block) => block.style.top = `${parseInt(block.style.top || 0) - STEP}px`,
//   39: (block) => block.style.left = `${parseInt(block.style.left || 0) + STEP}px`,
//   40: (block) => block.style.top = `${parseInt(block.style.top || 0) + STEP}px`,
// };

// function setStepToBlock(e) {
//   operations[e.keyCode](block);
// }

// document.addEventListener('keydown', setStepToBlock);

// const submit = document.querySelector('#submit');

// const userData = {};

// submit.addEventListener('click', () => {
//   // const firstName = document.querySelector('.first-name');
//   // const secondName = document.querySelector('.last-name');

//   // const params = {
//   //   [firstName.name]: firstName.value,
//   //   [secondName.name]: secondName.value,
//   // };

//   console.log(userData);
// });

// const firstName = document.querySelector('.first-name');
// const secondName = document.querySelector('.last-name');

// firstName.addEventListener('input', (e) => {
//   userData[e.target.name] = e.target.value;
// });

// secondName.addEventListener('input', (e) => {
//   userData[e.target.name] = e.target.value;
// });




