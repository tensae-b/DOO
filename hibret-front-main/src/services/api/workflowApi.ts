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


export const fetchWorkflowName = async () => {
    try {
        const response = await axiosInst.get(`http://localhost:5000/admin/workflow-templates/getAll`, {withCredentials: true})
        const { data } = response;
        return { data, isLoading: false, isError: false }; // assuming isLoading and isError are handled elsewhere
    } catch (error) {
        console.error('Error fetching catagory:', error);
        return { data: null, isLoading: false, isError: true };
    }
};

export const deleteWorkflowTemplate = async (workFlowId:any) => {
    try {
        const response = await axiosInst.delete(`/admin//workflow-templates/delete/${workFlowId}`)
        const { data } = response;
       
        return { data, isLoading: false, isError: false }; // assuming isLoading and isError are handled elsewhere
    } catch (error) {
        const {data}= error.response
        
        console.error('Error fetching catagory:', error);
        return { data, isLoading: false, isError: true };
    }

};

export const getWorkflowTemplate = async (workFlowId:any) => {
    try {
        const response = await axiosInst.get(`/admin/workflow-templates/get/${workFlowId}`)
        const { data } = response;
       console.log(data)
        return { data, isLoading: false, isError: false }; // assuming isLoading and isError are handled elsewhere
    } catch (error) {
        const {data}= error.response
        
        console.error('Error fetching catagory:', error);
        return { data, isLoading: false, isError: true };
    }
};