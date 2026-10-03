import axios from 'axios';

// Set NEXT_PUBLIC_API_URL to the deployed backend URL (e.g. on Vercel); defaults to the local NestJS server
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Expired or invalid token: clear it and send the user back to sign in.
    // Visitors who never signed in are redirected by SessionCheck instead.
    const hadSession = typeof window !== 'undefined' && localStorage.getItem('token');
    if (error.response?.status === 401 && hadSession) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('master');
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  },
);

export default api;
