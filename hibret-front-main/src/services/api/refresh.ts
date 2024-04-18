import axios from 'axios';
import axiosInstance from './axiosInstance';


export const refreshtokener=async()=> {
    try {
      // Check if a refresh token exists in local storage
      const authCookie = localStorage.getItem('auth-session');
      if (!authCookie) {
        // No refresh token available, handle error or redirect to login
        console.error('No auth-session cookie found for refresh');
        return;
      }
  
      const token  = authCookie ? JSON.parse(authCookie).token : null;
  
      // Choose between REST API or GraphQL approach:
  
      // **REST API Approach:**
      const response = await axiosInstance.post(
        `/users/refresh-token`
      );
  
      const refresh=response.refreshedToken
      const exp=response.exp
  console.log(refresh);
  console.log(exp)
  
      // Update local storage and authorization header
      // localStorage.setItem(
      //   'auth-session',
      //   JSON.stringify({ token: refresh ,exp:exp})
      // );
      // axiosInstance.defaults.headers.common.Authorization = `Bearer ${refresh}`;
  
      return refresh; // Optionally return the refreshed token
    } catch (error) {
      console.error('Error refreshing token:', error);
      // Handle errors, potentially redirect to login or display an error message
    }
  }
  