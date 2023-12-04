// XMLHttpRequest
// GET, POST, PUT, PATCH, DELETE

// const parse = (data) => JSON.parse(data);

// const xml = new XMLHttpRequest();
// xml.open('GET', 'request/fil.json');
// xml.send();

// xml.addEventListener('readystatechange', () => {
//   if (xml.readyState === 4 && xml.status < 400) {
//     const response = parse(xml.response);
//     response.data.forEach((item) => console.log(item));
//   }

//   if (xml.status >= 400) {
//     console.log("Oops... something wrong!");
//   }
// })

// const response = parse(xml.response);

// response.data.forEach((item) => console.log(item));

// console.log('Meow!');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


// RENDER FRIENDS
// const wrapper = document.querySelector('.wrapp');

// const parse = (data) => JSON.parse(data);

// function requestData(method, path, cb) {
//   const xml = new XMLHttpRequest();
//   xml.open(method, path);
//   xml.send();
  
//   xml.addEventListener('readystatechange', () => {
//     if (xml.readyState === 4 && xml.status < 400) {
//       const response = parse(xml.response);
      
//       cb(response.data);
//     }
//   })
// }


function renderCard(data) {
  console.log(1);
  data.forEach((friend) => {
    const card = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h3');
    const age = document.createElement('p');

    avatar.src = friend.avatar;
    name.innerText = friend.name;
    age.innerText = friend.age;

    card.classList.add('card');
    age.classList.add('age');

    card.append(avatar, name, age);
    wrapper.append(card);
  });
}

function renderCardCar(data) {
  console.log(2);
  data.forEach((friend) => {
    const card = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h3');
    const age = document.createElement('p');
    const color = document.createElement('p');

    avatar.src = friend.avatar;
    name.innerText = friend.name;
    age.innerText = friend.age;
    color.innerText = friend.color;

    card.classList.add('card');
    age.classList.add('age');

    card.append(avatar, name, age, color);
    wrapper.append(card);
  });
}

// requestData('GET', 'request/fileB.json', renderCard);
// requestData('GET', 'request/fileC.json', renderCardCar);


// PROMISE
// const wrapper = document.querySelector('.wrapp');
// const parse = (data) => JSON.parse(data);

// function requestData(method, action) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, action);
//   xhr.send();

//   return new Promise((resolve, reject) => {
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.readyState === 4 && xhr.status < 400) {
//         console.log(xhr);
//         resolve(xhr.response);
//       }
//     })
//   });
// }

// requestData('GET', 'request/fileB.json')
//   .then(
//     (data) => {
//       const parsedData = parse(data);
//       renderCard(parsedData.data);
//     }
//   )
//   .then(
//     () => {
//       requestData('GET', 'request/fileC.json')
//         .then((data) => {
//           const parsedData = parse(data);
//           renderCardCar(parsedData.data);
//         })
//     }
//   )


// FETCH

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })

