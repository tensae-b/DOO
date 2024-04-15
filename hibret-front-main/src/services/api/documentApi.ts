import axiosInstance from "./axiosInstance";


export const fetchDocument = async (userId: string) => {
    const { data } = await axiosInstance.get(`/documents?where[user][equals]=${userId}`);
    return data;
};

// create a new document
type CreateDocumentPayload = {
    title: string;
    content: string;
    type: string;
};

export const createDocument = async (payload: CreateDocumentPayload) => {
    const { data } = await axiosInstance.post("/documents", payload);
    return data;
};

export const getDocumentsToApprove = async () => {
    const { data } = await axiosInstance.get("/documents/workflow-visible");
    return data;
}

export const changeDocumentStatus = async ({ documentId, status }: { documentId: string, status: "Approved" | "Declined" }) => {
    const { data } = await axiosInstance.post(`/documents/update-workflow/${documentId}`, { status });
    return data;
}