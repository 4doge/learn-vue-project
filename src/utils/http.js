import axios from 'axios';
import NProgress from 'nprogress';
import { apiHost } from '@/config.js';

const http = axios.create({
  baseURL: apiHost
});

http.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

http.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default http;
