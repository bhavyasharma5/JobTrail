import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://jobtrail-backend.onrender.com/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add request interceptor to add auth token if available
customFetch.interceptors.request.use(
  (config) => {
    // You could add any auth tokens from localStorage here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the error is a network error, provide a user-friendly message
    if (!error.response) {
      throw new Error('Network error. Please check your connection.');
    }

    // If the error is a 401 and we haven't tried to refresh the token yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh the session
        await customFetch.get('/auth/refresh-token');
        // If refresh successful, retry the original request
        return customFetch(originalRequest);
      } catch (refreshError) {
        // If refresh fails, redirect to login
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default customFetch;
