import axiosInst from './axiosInst';


export const getRequiredDocument = async (workflowId: any) => {
    try {
        const response = await axiosInst.post(`http://localhost:5000/admin/workflow-templates/requiredDoc/${workflowId}`)
        const { data } = response;
        return { data, isLoading: false, isError: false }; // assuming isLoading and isError are handled elsewhere
    } catch (error) {
        console.error('Error fetching catagory:', error);
        return { data: null, isLoading: false, isError: true };
    }
};




