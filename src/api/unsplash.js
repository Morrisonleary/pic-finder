import axios from 'axios'

const KEY = process.env.REACT_APP_API_UNSPLASH;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: KEY
    }
});