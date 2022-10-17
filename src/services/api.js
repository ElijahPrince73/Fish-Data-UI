import axios from 'axios';

// Base axios instance
const client = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export default client;
