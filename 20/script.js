// IMAGE BASE 64
const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.readAsDataURL(file);
	  reader.onload = () => resolve(reader.result);
	  reader.onerror = error => resolve('');
	});
}


// API

const API = 'https://65720c1ed61ba6fcc0144a23.mockapi.io';

const METHOD = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
};

async function controller(action, method = METHOD.GET, body) {
	const headers = {
		'Content-type': 'application/json; charset=UTF-8',
	};

	const request = {
		method,
		headers,
	};

	if (body) request.body = JSON.stringify(body);

	const response = await fetch(`${API}/${action}`, request);
	const data = await response.json();

	return data;
}

// RENDER USER

const TODAY = new Date();
const userWrapper = document.querySelector('#userInfo');

function getUserAge(birthDate) {
  const diffDate = TODAY - new Date(birthDate);

  return new Date(diffDate).getFullYear() - 1970;
} 

function renderUser(user) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const top = document.createElement('div');
  const name = document.createElement('h3');
  const age = document.createElement('h3');
  const cat = document.createElement('p');
  const email = document.createElement('p');

  card.classList.add('card');
  top.classList.add('card-top');

  image.src = user.avatar;
  name.innerText = user.name;
  age.innerText = getUserAge(user.birthday);
  cat.innerText = user.cat;
  email.innerText = user.email;

  top.append(name, age);
  card.append(image, top, cat, email);
  userWrapper.append(card);
}

// LOGIN USER

const loginButton = document.querySelector('#login');

async function fetchUsers() {
  const users = await controller('/users');

  return users;
}

async function fetchUser(userId) {
  const user = await controller(`/users/${userId}`);

  return user;
}

async function loginUser() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const users = await fetchUsers();
  const foundUser = users.find((userToFind) => userToFind.email.toLowerCase() === email.trim().toLowerCase());

  if (!foundUser?.id) {
    alert('You are not register yet! Please fill registration form!');
    return;
  }

  if (foundUser.password !== password) {
    alert('Password is wrong!');
    return;
  }

  const user = await fetchUser(foundUser.id);
  renderUser(user);
}

loginButton.addEventListener('click', loginUser);

// REGISTER USER

const registerButton = document.querySelector('#register');

async function getUserInfo() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#emailReg').value;
  const password = document.querySelector('#passwordReg').value;
  const cat = document.querySelector('#cat').value;
  const avatar = document.querySelector('#avatar');

  const imageInBase64 = await getBase64(avatar.files[0]);

  const newUserData = {
    name, email, password, cat, avatar: imageInBase64
  };

  return newUserData;
}

async function registerUser() {
  const body = await getUserInfo();

  const newUser = await controller('/users', METHOD.POST, body);
  console.log(newUser);
}

registerButton.addEventListener('click', registerUser);
