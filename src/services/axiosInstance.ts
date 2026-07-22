import axios from 'axios';
import { logout } from '../store/slices/authSlice';

let injectedStore: any;
export const injectStore = (_store: any) => {
  injectedStore = _store;
};

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/api/v1', // Replace with real API
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor Request: Add token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from Redux Store if injected
    const token = injectedStore?.getState()?.auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor Response: Handle errors
axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;
    
    // If 401 Unauthorized and not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
       originalRequest._retry = true;
       
       // Handle token refresh or logout
       injectedStore?.dispatch(logout());
    }
    
    return Promise.reject(error?.response?.data || error);
  }
);
