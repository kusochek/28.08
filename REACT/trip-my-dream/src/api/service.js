import axios from 'axios';

export default axios.create({
  baseURL: 'https://65a57bb252f07a8b4a3f3932.mockapi.io/api/v1',
  hedaers: { 'Content-type': 'application/json' },
});
