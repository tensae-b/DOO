import { create } from 'zustand';
import { Session } from './types';
import axiosInstance from '../api/axiosInstance'; // Import your axios instance

interface AuthState {
  session: Session | null;
  getSession: () => Session | null;
  setSession: (newSession: Session) => void;
  deleteSession: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  session: JSON.parse(localStorage.getItem('auth-session') || 'null'),

  getSession: () => {
    const session = JSON.parse(localStorage.getItem('auth-session') || 'null');
    return session;
  },

  setSession: async (newSession: Session) => {
    try {
      const response = await axiosInstance.post('/users/setsession', newSession); // Use axiosInstance

      if (!response.data.success) { // Assuming success property in response
        throw new Error('Failed to store session on server');
      }

      localStorage.setItem('auth-session', JSON.stringify(newSession));
      set({ session: newSession });
    } catch (error) {
      console.error('Error setting session:', error);
    }
  },

  deleteSession: async () => {
    // try {
    //   await axiosInstance.delete('/delete-session'); // Use axiosInstance
    // } catch (error) {
    //   console.error('Error deleting session on server:', error);
    // }

    localStorage.removeItem('auth-session');
    set({ session: null });
  },
}));

export default useAuthStore;
