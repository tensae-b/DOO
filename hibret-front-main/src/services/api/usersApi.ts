import axios from 'axios';
import axiosInst from './axiosInst';
export const fetchUser = async () => {
    const { data } = await axiosInst.get(`/admin/getAllUsers`);
    return data;
};
