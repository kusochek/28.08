// Функція, що самовизивається (IIFE)

// (function () {
//   console.log('Hello, world!');
// })();

// const animal = ((name) => {
//     return {
//         getAnimal: () => {
//             return name;
//         }
//     }
// })('Crocodile');
 
// console.log(animal.getAnimal());


// Temporal Dead Zone
// console.log(animal);
// if (true) {
//   console.log(animal);
//   const animal = 'Parrot';
//   console.log(animal);
// }


// High Order Function
// const ROLES = {
//   basic: 'basic',
//   vip: 'vip',
//   admin: 'admin',
// };

// const user = {
//   firstName: 'Oleksandra',
//   lastName: 'Dontsova',
//   birthday: '21-07-1995',
//   phoneNumber: '+380631895409',
//   roles: [ROLES.basic],
// };

// function userRender(userRoles) {
//   const { roles } = user; // [ROLES.admin]
//   const roleRender = userRoles.find(([role]) => roles.includes(role));
//   const [, RenderFn] = roleRender;
//   return RenderFn;
// }

// function userObject(basicUserRender, vipUserRender, adminUserRender) {
//   return userRender([
//     [ROLES.basic, basicUserRender],
//     [ROLES.vip, vipUserRender],
//     [ROLES.admin, adminUserRender],
//   ]);
// }

// function renderBasic() {
//   alert('Here is basic user!');
// }

// function renderVip() {
//   alert('Here is VIP user!');
// }

// function renderAdmin() {
//   alert('Here is Admin user!');
// }

// userObject(renderBasic, renderVip, renderAdmin)();

// Сборка мусора
// Выполняемая в данный момент функция, её локальные переменные и параметры.
// Другие функции в текущей цепочке вложенных вызовов, их локальные переменные и параметры.
// Глобальные переменные.
// const x = 10;

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// let family = marry({
//   name: 'John'
// }, {
//   name: 'Ann'
// });

// console.log(family);

// delete family.father;
// delete family.mother.husband;
// family = {};

// console.log(family.mother);

// Сборка по поколениям (Generational collection)
// Инкрементальная сборка (Incremental collection)
// Сборка в свободное время (Idle-time collection)


// Ниндзя-код
// Краткость – сестра таланта!
// код из jQuery
// i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

// Однобуквенные переменные
// Кто знает — не говорит. Кто говорит — не знает.

// Используйте сокращения
// list → lst.
// userAgent → ua.
// browser → brsr.

// Будьте абстрактны при выборе имени.
// Лучший кувшин лепят всю жизнь,
// Высокая музыка неподвластна слуху,
// Великий образ не имеет формы.

// Русские слова и сокращения
// var ssilka

// Хитрые синонимы
// Очень трудно найти чёрную кошку в тёмной комнате, особенно, когда её там нет.
// По возможности, договоритесь с членами своей команды. Если Вася в своих классах использует display.., то Валера – обязательно render.., а Петя – paint...

// Повторно используйте имена
// Когда целое разделено, его частям
// нужны имена.
// Уже достаточно имён.
// Нужно знать, когда остановиться.

// Добавляйте подчёркивания
// Добавляйте подчёркивания _ и __ к именам переменных. Например, _name или __value.
// Желательно, чтобы их смысл был известен только вам, а лучше – вообще без явной причины.

// Перекрывайте внешние переменные
// Находясь на свету, нельзя ничего увидеть в темноте.
// Пребывая же в темноте, увидишь все, что находится на свету.

// Мощные функции!
// Дао везде и во всём,
// и справа, и слева.
// Не ограничивайте действия функции тем, что написано в её названии. Будьте шире.



// EventLoop
// const a = 10;
// const b = 20;

// const button = document.querySelector('#clickBTN');
// button.addEventListener('click', () => console.log(a,b));

// setTimeout(() => console.log('Hello, world!'), 100);
// setTimeout(() => console.log('Hello, world!'), 4000);
// setTimeout(() => console.log('Hello, world!'), 5000);
// setTimeout(() => console.log('Hello, world!'), 6000);
// setTimeout(() => console.log('Hello, world!'), 7000);

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=20220917&valcode=EUR')
//   .then(data => data.json())
//   .then(response => console.log(response));

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=20220917&valcode=EUR')
//   .then(data => data.json())
//   .then(response => console.log(response));

// for (var i = 0; i < 6; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// Генераторы
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// let one = generator.next();
// alert(JSON.stringify(one)); // {value: 1, done: false}
// let two = generator.next();
// alert(JSON.stringify(two)); // {value: 2, done: false}
// let three = generator.next();
// alert(JSON.stringify(three)); // {value: 3, done: true}


// ЗАЩИЩЕННЫЕ МЕТОДЫ
// class CoffeeMachine {
//     _waterAmount = 0;
  
//     set waterAmount(value) {
//       if (value < 0) throw new Error('Отрицательное количество воды');
//       this._waterAmount = value;
//     }
  
//     get waterAmount() {
//       return this._waterAmount;
//     }
  
//     constructor(power) {
//       this._power = power;
//     }  
// }
  
//   // создаём новую кофеварку
//   let coffeeMachine = new CoffeeMachine(100);
  
//   // устанавливаем количество воды
//   coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

// class CoffeeMachine {
//     #waterLimit = 200;
  
//     #checkWater(value) {
//       if (value < 0) throw new Error('Отрицательный уровень воды');
//       if (value > this.#waterLimit) throw new Error('Слишком много воды');
//     }
//   }
  
//   let coffeeMachine = new CoffeeMachine();
  
//   // снаружи  нет доступа к приватным методам класса
//   coffeeMachine.#checkWater(); // Error
//   coffeeMachine.#waterLimit = 1000; // Error