import axios from '../service';

const countriesApi = {
  fetch: () => axios.get('/countries')
    .then(({ data, status, statusText }) => {
      if (status > 399) {
        throw new Error(statusText);
      }

      return data;
    })
    .catch((error) => {
      console.log(error.message);
    }),
};

const countryApi = {
  fetch: (id) => axios.get(`/countries/${id}`)
    .then(({ data, status, statusText }) => {
      if (status > 399) {
        throw new Error(statusText);
      }

      return data;
    })
    .catch((error) => {
      console.log(error.message);
    }),
};

export default { countriesApi, countryApi };
