import { useMutation, useQuery } from '@tanstack/react-query'

import { createDocument, fetchDocument } from '../api/documentApi'


export const useCreateDocumentMutation = () => {
    return useMutation({
        // todo: this might cause a problem later on if we have multiple create document mutations
        // we should probably use a unique key for each mutation to avoid conflicts
        mutationKey: ['create-document'],
        mutationFn: createDocument,
    });
};

export const useGetDocumentQuery = (userId: string) => {
    return useQuery({
        queryKey: ['document', userId],
        queryFn: () => fetchDocument(userId),
    });
};