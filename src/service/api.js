import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1512'
});

export default api;

// https://topicos-backend.herokuapp.com
// http://localhost:1512