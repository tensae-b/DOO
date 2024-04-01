import axiosInstance from "./axiosInstance";

export const fetchDocument = async (userId: string) => {
    const { data } = await axiosInstance.get(`/documents?where[user]=${userId}`);
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