import axios from 'axios';
import { CONFIG } from '.';

const AxiosAuthInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 1800000,
});

AxiosAuthInstance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (config: any) => {
    const token = await localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosAuthInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      //   store.dispatch(logoutAction());
    }
    return Promise.reject(error);
  }
);

export { AxiosAuthInstance };
