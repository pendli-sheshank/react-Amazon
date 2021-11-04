import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-colne-c5ba5.cloudfunctions.net/api',
});

export default instance;
