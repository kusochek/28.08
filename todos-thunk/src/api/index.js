import axios from './service';

const api = {
  fetch: () => axios.get('/todos').then(({ data }) => data),
  delete: (id) => axios.delete(`/todos/${id}`).then(({ data }) => data),
  update: (id, params) => axios.put(`/todos/${id}`, params).then(({ data }) => data),
  create: (params) => axios.post('/todos', params).then(({ data }) => data),
};

export default api;
