// Деструктивне присвоєння, деструктуризація

// const colors = ['RED', 'GREEN', 'BLUE', 'YELLOW', ['BLACK', 'WHITE', ['GOLD', 'PLATINUM']], 'TRANSPARENT', 'GRAY'];

// const REJECTED = colors[0];
// const ACTIVE = colors[1];
// const PENDING = colors[2];
// const WAITING = colors[3];
// const UNKNOW = colors[4][0];
// const color = colors[100];

// const data = [{ id: 1, url: 'https://....' }];

// const video = data[0];

// const otherColors = colors.splice

// const [REJECTED, ACTIVE, PENDING, WAITING, [UNKNOW, FILLED, [VIP, LUX]], ...otherColors] = colors;

// console.log(REJECTED, ACTIVE, PENDING, WAITING, UNKNOW, FILLED, VIP, LUX);
// console.log(otherColors);

// const userData = ['Dasha', 'Florova', ['cats', ['Pushka', 'Kukushka'], 'dogs', ['Dusya']], ['job', ['IT', 'Frontend developer']]];

// const [
//   NAME,
//   SECOND_NAME,
//   [
//     PET_CATS,
//       [PET_CAT_PUSHKA, PET_CAT_KUKUSHKA],
//     PET_DOGS,
//       [PET_DOG_DUSYA],
//   ],
//   [PROFFESION,
//     [DIRECTION, MAJOR]
//   ],
//   IS_ALREADY_FINISHED_STUDY = true,
// ] = userData;

// const user = {
//   firstName: 'Marsik',
//   lastName: 'Scotland',
//   city: 'Wroclaw',
//   age: 3,
//   toys: ['ball', 'bird', 'ananas', 'christmas tree'],
//   owner: {
//     firstName: 'Sasha',
//     lastName: 'Dontsova',
//     age: 28,
//     job: {
//       quality: 'Senior',
//       type: 'frontend developer',
//     },
//   },
// };

// const userTwo = {
//   firstName: 'Marsik',
//   lastName: 'Scotland',
//   city: 'Wroclaw',
//   age: 3,
// };

// const lastName = user.lastName;
// const lastName = user.lastName;

// const {
//   lastName,
//   age,
//   toys: [toyOne, toyTwo, ...otherToys],
//   toys,
//   owner: { firstName, lastName: ownerLastName, age: ownerAge, job: { quality, type }, job },
// } = user;
// // const { lastName: lastNameUserTwo, age: ageUserTwo } = userTwo;

// console.log(lastName, age, toyOne, toyTwo, otherToys, toys);
// console.log(firstName, ownerLastName, ownerAge, quality, type, job);
// console.log(lastNameUserTwo, ageUserTwo);

// const creative = {
//   id: 'some-id-1',
//   name: 'Video Name',
//   url: 'https://url.com',
//   size: '1000200',
//   lineItems: [
//     { id: 'line-item-id-1', name: 'Line Item 1' },
//     { id: 'line-item-id-2', name: 'Line Item 2' },
//   ],
//   asset: {
//     id: 'asset-1',
//     creativeManager: 'Katya',
//     status: ['LIVE', 'ACTIVE'],
//   },
// };

// // const { lineItems, name } = creative;
// // const { lineItems: [{ id, name }, { id: idTwo, name: nameTwo }] } = creative;
// // const { asset: { creativeManager } } = creative;
// const { asset: { status: [firstStatus] } } = creative;
// // const { id, name } = lineItemOne;
// // const { id, name } = lineItemTwo;
// console.log(firstStatus);


// MODULES
// MVC - MODEL VIEW CONTROLLER
import sum from './components/model.js';
import { x, y, getRandomNumber } from './components/view.js';

const randomNumber = getRandomNumber();
console.log(randomNumber);

const result = sum(x, y);
const randomResult = sum(x, randomNumber);

console.log(result);
console.log(randomResult);

// npm
