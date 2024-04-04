import { allUser, getUserData, verify } from './../api/userApi';
import { useMutation, useQuery } from '@tanstack/react-query'
import { login, createUser } from "../api/userApi"
//post
export const useLoginMutation = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: login,
    });
};
//get
export const useGetCurrentUser = () => {
    return useQuery({ queryKey: ['me'], queryFn: getUserData })
}

export const useCreateNewUser = () => {
    return useMutation({
        mutationKey: ['new-user'],
        mutationFn: createUser,
    })
}

export const getAllUser =()=>{
    return useQuery({queryKey:['all-user'], queryFn: allUser})
}

export const verifyUser = () => {
    return useMutation({
        mutationKey: ['verify'],
        mutationFn: verify,
    });
};