import axios from 'axios';

export default axios.create({
    baseURL: 'https://corona-nepal-api.herokuapp.com'
});
