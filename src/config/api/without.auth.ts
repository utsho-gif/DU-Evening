import axios from 'axios';
import { CONFIG } from '.';

const AxiosWithoutAuthInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 24000,
});

AxiosWithoutAuthInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default AxiosWithoutAuthInstance;
