import axios from '../initial';

const magicItems = {
  get: () => axios.get('/magic_items')
    .then((data) => data)
    .catch((error) => console.log(error)),
  post: (params) => axios.post('/magic_items', params)
    .then((data) => data)
    .catch((error) => console.log(error)),
  put: (id, params) => axios.put(`/magic_items/${id}`, params),
  delete: (id) => axios.delete(`/magic_items/${id}`),
};

export default magicItems;