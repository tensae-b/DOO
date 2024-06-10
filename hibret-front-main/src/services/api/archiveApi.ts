import axios from 'axios';
import axiosInst from './axiosInst';
export const fetchArchive = async (workFlowId:any) => {
    try {
        const response = await axiosInst.get(`admin/documentTemplate/getArchived/${workFlowId}`)
        const { data } = response;
        console.log(data)
      
       
        return { data, isLoading: false, isError: false }; // assuming isLoading and isError are handled elsewhere
    } catch (error) {
        const {data}= error.response
        
        console.error('Error fetching catagory:', error);
        return { data, isLoading: false, isError: true };
    }
}