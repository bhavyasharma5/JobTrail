import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://jobtrail-backend.onrender.com/api/v1',
});

export default customFetch;
