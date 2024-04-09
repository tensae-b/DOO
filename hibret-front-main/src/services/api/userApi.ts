import axios from 'axios';
import axiosInstance from './axiosInstance';

export const fetchUser = async (userId: string) => {
    const { data } = await axiosInstance.get(`/users/${userId}`);
    return data;
};

interface LoginCredentials {
    email: string;
    password: string;
}


export const login = async ({ email, password }: LoginCredentials) => {
    try {
        const { data } = await axiosInstance.post('/users/login', { email, password });
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data.errors && error.response.data.errors.length > 0) {
                throw new Error("Invalid login attempt. Please check your credentials and try again.");
            }
        }
        throw new Error("An unexpected error occurred. Please try again later.");
    }
};

export const getUserData = async () => {
    const { data } = await axiosInstance.get('/users/me');
    return data;
}

export const createUser = async ({ email, password, role }: { email: string, password: string, role: string }) => {
    const { data } = await axiosInstance.post('/users', { email, password, role });
    return data;
};

export const allUser= async()=>{
    const { data }= await axiosInstance.get('/users/allusers');
    return data;
}

export const verify = async({ email, password }: LoginCredentials)=>{
    try {
        const { data } = await axiosInstance.post('/users/verify', { email, password});
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
           
        }
        throw new Error("An unexpected error occurred. Please try again later.");
    }
}

export const getUser= async()=>{
    const { data }= await axiosInstance.get('/users');
    return data;
}

export const activateUser=async (userId :object)=>{
    
    const { data }= await axiosInstance.post(`/users/activate/${userId.id}`, );
    return data;
}