import axios from 'axios';

const api = axios.create({
    baseURL: 'hppt://localhost:3333',
})

export default api;