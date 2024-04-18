/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { refreshtokener } from './refresh';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});


axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // Retrieve the authentication token from local storage
    const authCookie = localStorage.getItem('auth-session');
    let token;
    let isExpired = true; // Assume token is expired by default

    try {
      // Parse the token and its expiration date from the authCookie
      token = authCookie ? JSON.parse(authCookie).token : null;
      const expiration = authCookie ? JSON.parse(authCookie).exp : null;

      // Check if expiration date exists and is in a valid format
      // if (expiration )) {
        // Convert expiration date to milliseconds since Unix epoch
        const expirationMillis = parseInt(expiration) * 1000;
        
        // Convert expiration date to a human-readable format
        const expirationDate = new Date(expirationMillis);
        const currentDate = new Date();

        // Check if expiration date is in the past (token expired)
        isExpired = expirationDate < currentDate;
        console.log(expirationDate)
      console.log(currentDate)
      console.log(isExpired)
      
      // } else {
      //   console.warn("Invalid or missing expiration format in authCookie.exp");
      // }
    } catch (error) {
      console.error('Failed to parse auth_token local storage:', error);
    }

    // If token exists and is not expired, attach it to the request headers
    if (token) {
      config.headers && (config.headers.Authorization = `Bearer ${token}`);
      console.log(isExpired)
      
      // If token is expired, refresh it
      const expo=true
      // if (expo) {
      //   const refreshedToken = await refreshtokener();
      //   console.log("refreshed")
      //   console.log(refreshedToken)
      // }



        
       
      //   if (refreshedToken) {
      //     config.headers.Authorization = `Bearer ${refreshedToken}`;
      //   }
      // }
    }

    return config;
  },
  // Handle request error
  (error: AxiosError) => Promise.reject(error)
);

export default axiosInstance;
