// RENDER EXIST USERS
// const controller = (action) => fetch(action).then((data) => data.json());
const wrapper = document.querySelector('.wrapper');

// controller('json/users.json')
// 	.then((data) => {
// 		Promise.allSettled(data.users.map((user) => controller(`json/${user.name.toLowerCase()}.json`)))
// 			.then((response) => {
// 				return response
// 					.filter((promiseResult) => promiseResult.status !== 'rejected')
// 					.map((promiseResult) => promiseResult.value);
// 			})
// 			.then((users) => {
				// users.forEach((user) => {
				// 	const ul = document.createElement('ul');
				// 	const name = document.createElement('li');
				// 	const avatar = document.createElement('li');

				// 	name.innerText = user.name;
				// 	avatar.innerText = user.avatar;

				// 	ul.append(name, avatar);
				// 	wrapper.append(ul);
				// });
// 			})
// 	});


// async/await
// try catch

// async function controller(action) {
// 	const request = await fetch(action);
// 	const data = await request.json();

// 	return data;
// }

// async function getUserData() {
// 	const data = await controller('json/users.json');

// 	const promiseResult = await Promise.allSettled((data.users.map((user) => controller(`json/${user.name.toLowerCase()}.json`))));
// 	promiseResult
// 		.filter((promiseResult) => promiseResult.status !== 'rejected')
// 		.forEach((promiseResult) => renderUser(promiseResult.value));
// }

// function renderUser(user) {
// 	const ul = document.createElement('ul');
// 	const name = document.createElement('li');
// 	const avatar = document.createElement('li');

// 	name.innerText = user.name;
// 	avatar.innerText = user.avatar;

// 	ul.append(name, avatar);
// 	wrapper.append(ul);
// }

// getUserData();


// EXAMPLE 1
// FIND USER BY EMAIL AND RENDER HIM

// const button = document.querySelector('#button');

// async function controller(action) {
// 	try {
// 		const request = await fetch(action);
// 		const data = await request.json();
	
// 		return data;
// 	} catch(err) {
// 		console.log(err);
// 	}
// }

// async function loginUser(email) {
// 	try {
// 		const data = await controller('json/users.json');
// 		const userInDataBase = data.users.find((user) => user.email === email);
	
// 		if (userInDataBase.name) {
// 			const user = await controller(`json/${userInDataBase.name.toLowerCase()}.json`);
// 			renderUser(user);
// 		}
// 	} catch(err) {
// 		console.log(err);
// 	} finally {
// 		console.log('Hello!');
// 	}
// }

// function renderUser(user) {
// 	const ul = document.createElement('ul');
// 	const name = document.createElement('li');
// 	const avatar = document.createElement('li');

// 	name.innerText = user.name;
// 	avatar.innerText = user.avatar;

// 	ul.append(name, avatar);
// 	wrapper.append(ul);
// }

// button.addEventListener('click', () => {
// 	const email = document.querySelector('#email').value;

// 	if (email) loginUser(email);
// });




// REST

// API: https://jsonplaceholder.typicode.com/

// 'https://jsonplaceholder.typicode.com/comments?userId=1'

// URL
// 	protocol http/https
// 	domain
// 	path
// 	queryParameter

// METHOD
// 	GET – получение данных
// 	POST * – отправка данных на сервер в теле запроса (body)
// 	PUT * – отправка данных на сервер в теле запроса (обновление ресурса)
// 	PATCH * – отправка данных на сервер в теле запроса
// 	DELETE

// BODY

// HEADERS – служебная информация (кодировка, сжатие, сервер, кеширование)

// STATUS
// 	100
// 		101

// 	200
// 		201
// 		204

// 	300
// 		301
// 		302

// 	400 – ошибка на фронте
// 		401
// 		403
// 		404

// 	500 – ошибка на сервере
// 		502
// 		503

// https://jsonplaceholder.typicode.com/

// REST – архитектура клиент-серверного взаимодействия
// свод правил (рекомендаций), по которым клиент (web app, mobile app) и сервер должны между собой взаимодействовать

// REST говорит, что нужно думать о данных, которые хранятся на сервере как о ресурсе.
// У каждого ресурса на сервере есть свой URL. 

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /posts     body:{name: Alex, age: 21} // – запрос на ресурс posts c телом запроса, id всегда назначает только сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{id: 101, name: Ivan} // в body отправляются все поля объекта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // в body отправляется только то, что изменилось
// <== {id: 101, name: Eve, age: 21}

// DELETE – /posts/:id
// <== {}

// RESTfull Api – сферический конь в вакууме 😌

// const API = "https://jsonplaceholder.typicode.com";

// const API = 'https://jsonplaceholder.typicode.com';
// const createButton = document.querySelector('#create');
// const updateButton = document.querySelector('#update');
// const deleteButton = document.querySelector('#delete');

// const METHOD = {
// 	GET: 'GET',
// 	POST: 'POST',
// 	PUT: 'PUT',
// 	PATCH: 'PATCH',
// 	DELETE: 'DELETE',
// };

// async function controller(action, method = METHOD.GET, body) {
// 	const headers = {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	};

// 	const request = {
// 		method,
// 		headers,
// 	};

// 	if (body) request.body = JSON.stringify(body);

// 	const response = await fetch(action, request);
// 	const data = await response.json();

// 	return data;
// }

// async function getPosts() {
// 	const posts = await controller(`${API}/posts`);
// 	console.log(posts);
// }

// async function createPost() {
// 	const newPost = {
// 		title: 'foo',
//     body: 'bar',
//     userId: 1,
// 	};
// 	const response = await controller(`${API}/posts`, METHOD.POST, newPost);
// 	console.log(response);
// }

// async function updatePost(postId) {
// 	const currentPost = await controller(`${API}/posts/${postId}`);

// 	const updatedPost = { ...currentPost, title: 'Some Title', body: 'Body', userId: 7 };
// 	const response = await controller(`${API}/posts/${postId}`, METHOD.PUT, updatedPost);
// 	console.log(response);
// }

// async function updateFieldPost(postId) {
// 	const response = await controller(`${API}/posts/${postId}`, METHOD.PATCH, { title: 'New Title' });
// 	console.log(response);
// }

// async function deletePost(postId) {
// 	const response = await controller(`${API}/posts/${postId}`, METHOD.DELETE);
// 	console.log(response);
// }

// getPosts();

// createButton.addEventListener('click', createPost);
// updateButton.addEventListener('click', () => updateFieldPost(10));
// deleteButton.addEventListener('click', () => deletePost(9));
