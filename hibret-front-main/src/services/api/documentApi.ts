import axiosInst from './axiosInst';

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