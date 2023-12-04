// 💜 🤍
const API = 'https://api.chucknorris.io/jokes';
const JOKE_STORAGE_KEY = 'favoriteJokes';

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
const cardWrapper = document.querySelector('.card-wrapper');
const favoriteWrapper = document.querySelector('.favorite-wrapper');

const typeFetches = {
  random: () => controller('random').then((data) => [data]),
  category: () => {
    const checkedCategory = document.querySelector('input[name=category]:checked');
    const categoryValue = checkedCategory.value;

    return controller(`random?category=${categoryValue}`).then((data) => [data]);
  },
  search: () => {
    const searchField = document.querySelector('#searchText');
    const searchValue = searchField.value.toLowerCase();

    return controller(`search?query=${searchValue}`).then((data) => data.result);
  },
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkedInput = document.querySelector('input[name=jokeType]:checked');
  const type = checkedInput.value;
  
  typeFetches[type]()
    .then((jokes) => {
      jokes.forEach((joke) => {
        renderJokeCard(joke, cardWrapper);
      });
    });
});

function renderJokeCard(joke, wrapper, isPrepend = false) {
  const jokeCard = document.createElement('div');
  const favorite = document.createElement('div');
  const jokeId = document.createElement('p');
  const jokeText = document.createElement('p');

  jokeCard.classList.add('card');
  favorite.classList.add('favorite');
  jokeId.classList.add('joke-id');
  jokeText.classList.add('joke');

  favorite.innerText = isFavorite(joke.id) ? '💜' : '🤍';
  jokeId.innerText = joke.id;
  jokeText.innerText = joke.value;

  favorite.addEventListener(('click'), () => {
    favorite.innerText = !isFavorite(joke.id) ? '💜' : '🤍';
    !isFavorite(joke.id) ? setJokeToLocalStorage(joke) : removeJokeFromLocalStorage(joke);
  });

  jokeCard.append(favorite, jokeId, jokeText);

  if (!isPrepend) {
    wrapper.append(jokeCard);
  } else {
    wrapper.prepend(jokeCard);
  }
}

function getJokesFromLocalStorage() {
  const favoriteJokes = localStorage.getItem(JOKE_STORAGE_KEY);
  return favoriteJokes ? JSON.parse(favoriteJokes) : [];
}

function setJokeToLocalStorage(joke) {
  const updatedFavoriteJokes = [joke, ...getJokesFromLocalStorage()];
  localStorage.setItem(JOKE_STORAGE_KEY, JSON.stringify(updatedFavoriteJokes));

  renderJokeCard(joke, favoriteWrapper, true);
}

function removeJokeFromLocalStorage(joke) {
  const favoriteJokes = getJokesFromLocalStorage();
  const updatedFavoriteJokes = favoriteJokes.filter((favoriteJoke) => favoriteJoke.id !== joke.id);
  console.log(updatedFavoriteJokes);

  localStorage.setItem(JOKE_STORAGE_KEY, JSON.stringify(updatedFavoriteJokes));
  favoriteWrapper.innerHTML = '';
  renderJokesFromStorage();
}

function renderJokesFromStorage() {
  const favoriteJokes = getJokesFromLocalStorage();
  favoriteJokes.forEach((joke) => {
    renderJokeCard(joke, favoriteWrapper);
  });
}

function isFavorite(id) {
  const favoriteJokes = getJokesFromLocalStorage();
  return !!favoriteJokes.find((favoriteJoke) => favoriteJoke.id === id)?.id;
}

getCategories();
renderJokesFromStorage();



// localStorage.setItem('isWinter', JSON.stringify({ name: 'Sasha' }));
// const isWInterFromLocalStorage = localStorage.getItem('isWinter');
// console.log(isWInterFromLocalStorage);
