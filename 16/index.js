// const amount = 250;

// const obizianka = new Promise((resolve, reject) => {
//   amount >= 200
//     ? resolve('Hey, Nazar! I have enough money. Please take it, thank you!') 
//     : reject('I don\'t have enough money, please ask again later.');
// });

// obizianka
//   .then(
//     (message) => {
//       console.log(message);
//     },
//     (error) => {
//       console.log(error);
//       return Promise.reject(100);
//     }
//   )
//   .then(
//     () => {
//       return 'Let\'s go to the bar!';
//     },
//     (value) => {
//       return value >= 200 ? 'Let\'s go to the bar!' : 'Oops, I dont have money yet!'
//     }
//   )
//   .then(
//     (message) => {
//       console.log(message);
//     }
//   )


// const TICKETS = 60;

// const concert = new Promise((resolve, reject) => {
//   TICKETS >= 100 ? resolve(TICKETS) : reject(TICKETS);
// });

// console.log(concert);

// concert
//   .then(
//     (tickets) => {
//       return `Concert gonna be! ${tickets} tickets had been sold out!`;
//     },
//     (tickets) => {
//       console.log(`${tickets} had been sold out! Trying to sold out another tickets!`);
//       return tickets >= 70
//         ? `Student will buy ${100 - tickets}. Concert goona be!`
//         : Promise.reject(`Concert canceled. ${tickets} had been sold out :(`)
//     },
//   )
//   .then(
//     (message) => {
//       console.log(message);
//     }
//   )
//   .catch(
//     (error) => {
//       console.log(error);
//     }
//   )
//   .finally(
//     () => {
//       console.log('Waiting for the next concert');
//     }
//   )
