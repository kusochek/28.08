const API = 'https://api.chucknorris.io/jokes';

const controller = (action) => {
  return fetch(`${API}/${action}`).then((response) => response.json());
}

function getCategories() {
  controller('categories').then((data) => renderCategories(data));
}

function renderCategories(categories) {
  const categoryWrapper = document.querySelector('#category');

  categories.forEach((category) => {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'radio';
    input.name = 'category';
    input.value = category;

    label.append(input, category);
    categoryWrapper.append(label);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkedInput = document.querySelector('input[name=jokeType]:checked');
  const type = checkedInput.value;
  
  if (type === 'random') {
    controller('random').then((data) => console.log(data.value));
  }

  if (type === 'category') {
    const checkedCategory = document.querySelector('input[name=category]:checked');
    const categoryValue = checkedCategory.value;

    controller(`random?category=${categoryValue}`).then((data) => console.log(data.value));
  }

  if (type === 'search') {
    const searchField = document.querySelector('#searchText');
    const searchValue = searchField.value.toLowerCase();

    controller(`search?query=${searchValue}`).then((data) => console.log(data));
  }
});

getCategories();
