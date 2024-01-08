import axios from 'axios';

const api = axios.create({
  baseURL: 'https://65720c1ed61ba6fcc0144a23.mockapi.io/',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
