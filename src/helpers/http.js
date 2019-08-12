import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_TRELLO_API
})

export default http;
