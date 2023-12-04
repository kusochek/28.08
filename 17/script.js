// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// User.getName();

// const Pasha = new User('Pasha');
// Pasha.getName();

// class Promise {
//   constructor(f1) {
//     this.f1 = f1;
//   }

//   then() {
//     this.f1();
//   }

//   catch() {

//   }

//   finally() {

//   }
// }

// Promise.catch();

// const somePromise = new Promise(() => {

// });

// somePromise.catch();


// METHODS OF PROMISE

const parse = (data) => JSON.parse(data);

const controller = (method, action) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, action);
  xhr.send();

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        xhr.status < 400 ? resolve(parse(xhr.response)) : reject(xhr.statusText);
      }
    });
  });
};

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const response = parse(data);
//     response.animals.forEach((animal) => {
//       controller('GET', `json/${animal}.json`)
//         .then((data) => {
//           const response = parse(data);
//           console.log(response.name);
//         })
//         .catch((err) => console.log(err));
//     })
//   })
//   .catch((err) => console.log(err));

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const responseAnimals = parse(data).animals;
//     controller('GET', `json/${responseAnimals[0]}.json`)
//       .then((data) => {
//         const response = parse(data);
//         console.log(response.name);

//         controller('GET', `json/${responseAnimals[1]}.json`)
//           .then((data) => {
//             const response = parse(data);
//             console.log(response.name);

//             controller('GET', `json/${responseAnimals[2]}.json`)
//               .then((data) => {
//                 const response = parse(data);
//                 console.log(response.name);
//               })
//               .catch((err) => console.log(err));
//           })
//         .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));


// PROMISE.ALL

// Promise.all([
//   controller('GET', 'json/dog.json'),
//   controller('GET', 'json/fox.json'),
//   controller('GET', 'json/cat.json'),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     Promise.all(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         const wrapper = document.querySelector('.wrapp');
//         data.forEach((animal) => {
//           const p = document.createElement('p');
//           p.innerText = animal.name;

//           wrapper.append(p);
//         })
//       })
//       .catch((err) => console.log(err))
//   })
//   .catch((err) => console.log(err));


// PROMISE.ALLSETTLED

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     Promise.allSettled(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((promises) => {
//         console.log(promises);
//         promises.forEach((promise) => {
//           const wrapper = document.querySelector('.wrapp');
//           if (promise.status === 'fulfilled') {
//             const p = document.createElement('p');
//             p.innerText = promise.value.name;
  
//             wrapper.append(p);
//           } else {
//             throw new Error(promise.reason);
//           }
//         })
//       })
//       .catch((err) => console.log(err))
//   })
//   .catch((err) => console.log(err));


// PROMISE.RACE

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     Promise.race(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err))
//   })
//   .catch((err) => console.log(err));


// PROMISE.ANY

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     Promise.any(data.animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err))
//   })
//   .catch((err) => console.log(err));

