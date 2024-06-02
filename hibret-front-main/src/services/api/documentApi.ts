import axios from 'axios';
import axiosInst from './axiosInst';
import toast from 'react-hot-toast';

export const fetchdoc = async (workId) => {
  try {
    const response = await axiosInst.get(`initiate/reqDoc/workflows/${workId}`);
    const { data } = response;
    console.log(data)
    return { data, isLoading: false, isError: false }; 
  } catch (error) {
    console.error('Error fetching detail:', error);
    return { data: null, isLoading: false, isError: true };
  }
};

export const initiateWorkflow = async (formData: any)=>{
  try {
    const response = await axiosInst.post('http://localhost:5000/initiate/workflows', formData);
    const { data } = response;
    console.log(data)
    return { data, isLoading: false, isError: false }; 
  } catch (error) {
    console.error('Error fetching detail:', error);
    return { data: null, isLoading: false, isError: true };
  }
  // try {
  //   const config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'http://localhost:5000/admin/workflows',
  //     headers: {},
  //     data: formData,
  //   };
    
  //   const response = await axios(config);
  //   console.log(response);
  //   return response;
  // } catch (error) {
  //   console.error(error);
  //   return 'error';
  // }
}