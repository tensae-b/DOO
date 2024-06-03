import axiosInst from './axiosInst';

export const fetchUser = async () => {
  try {
    const response = await axiosInst.get('api/admin/getAllUsers');
    const { data } = response;
    return { data, isLoading: false, isError: false };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { data: null, isLoading: false, isError: true };
  }
};

export const sendUser = async (selectedUsers) => {
  try {
    const response = await axiosInst.post('api/sendInvitation', { selectedUsers });
    const { data } = response;
    console.log(data);
    return { data, isLoading: false, isError: false };
  } catch (error) {
    console.error('Error sending user:', error);
    return { data: null, isLoading: false, isError: true };
  }
};

export const resendUser = async (selectedUser) => {
  try {
    const response = await axiosInst.post('api/resendInvitation', { identifier: selectedUser });
    const { data } = response;
    console.log(data);
    return { data, isLoading: false, isError: false };
  } catch (error) {
    console.error('Error resending user:', error);
    return { data: null, isLoading: false, isError: true };
  }
};

export const activateUser = async (userId) => {
  console.log(userId)
  try {
    const response = await axiosInst.put(`api/admin/users/${userId}/activate`);
    console.log(userId)
    const { data } = response;
    console.log({ data });
    console.log(userId)
    return { data, isLoading: false, isError: false };
  } catch (error) {
    console.error('Error activating user:', error);
    return { data: null, isLoading: false, isError: true };
  }
};

export const deactivateUser = async (userId) => {
  console.log(userId)
  try {
    console.log(userId)
    const response = await axiosInst.put(`api/admin/users/${userId}/deactivate`);
    const { data } = response;
    console.log({ data });
    console.log(userId)
    return { data, isLoading: false, isError: false };
  } catch (error) {
    console.error('Error deactivating user:', error);
    return { data: null, isLoading: false, isError: true };
  }
};
