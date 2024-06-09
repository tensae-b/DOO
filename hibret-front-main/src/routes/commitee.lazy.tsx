import React, { useState, useEffect,useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { createLazyFileRoute } from '@tanstack/react-router';
import { DataGrid } from '@mui/x-data-grid';
import '@mui/material/styles';
import axios from 'axios';
import UserName from '../components/UserName';
import SideBar from '../components/SideBar';
import { fetchDepartment } from "../services/api/fetchDataApi";
import { Modal, Box, TextField, Button, Typography, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from "@mui/material";
import { fetchUser, createCommite, resendUser, activateUser, deactivateUser } from "../services/api/usersApi";

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'numberOfMembers', headerName: 'Number of Members', flex: 1 },
];

const CommitteeTable = () => {
  const [committees, setCommittees] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/committee');
        const data = response.data.map(committee => ({
          id: committee._id,
          name: committee.name,
          numberOfMembers: committee.members.length,
        }));
        setCommittees(data);
      } catch (error) {
        console.error('Error fetching committee data:', error);
      }
    };

    fetchCommittees();
  }, []);
 

  return (
    <div className="">
      <div className="w-4/5 bg-white p-4 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-teal-600">Committees</h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid className='text-sm text-gray-600' rows={committees} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/commitee')({
  component: () => {
    
    const [isPopup, setIsPopup] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [chairperson,setChairperson] = useState([]);
    const [department, setDepartment] = useState([]);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [users, setUsers] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");


  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
    const fetchData = useCallback(async () => {
      try {
        const { data, isError } = await fetchUser();
        console.log(data)
        if (!isError && data && data.users) {
          const updatedData = data.users.map((user) => ({
            id: user.userId,
            username: user.username,
            email: user.email,
            role_id: user.role_id,
            activationStatus: user.activationStatus,
            isSelected: false,
            accountCreationStatus: user.accountCreationStatus,
            loading: false, // Add loading state for each user
          }));
          setUsers(updatedData);
        } else {
          console.error('Invalid response data:', data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }, []);
    useEffect(() => {
      fetchData();
    }, [fetchData]);

    const handlePopup = () => {
      setIsPopup((prev) => !prev);
    };

    const handleMemberSelect = (event) => {
      const { options } = event.target;
      const selectedOptions = [];
      for (const option of options) {
        if (option.selected) {
          selectedOptions.push(option.value);
        }
      }
      setSelectedMembers(selectedOptions);
      setValue('memberNames', selectedOptions);
    };
    

    useEffect(() => {
      const getDepartment = async () => {
        try {
          const result = await fetchDepartment();
          if (!result.isError) {
            setDepartment(result.data);
          } else {
            console.log("Error fetching departments");
          }
        } catch (error) {
          console.error("Error fetching departments:", error);
        }
      };

      getDepartment();
    }, []);

    const onSubmit = async (data) => {
      try {
        // Extract member IDs
        const memberIds = selectedMembers.map((memberName) => {
          const member = users.find((user) => user.username === memberName);
          return member ? member.id : null;
        });
    
        // Extract chairperson ID
        const chairpersonUser = users.find((user) => user.username === data.chairperson);
        const chairpersonId = chairpersonUser ? chairpersonUser.id : null;
    
        // Make a POST request to create the committee
        const response = await createCommite({
          name: data.committeeName,
          members: memberIds,
          chairperson: chairpersonId, // Use chairperson ID
        });
    
        // Handle the response accordingly
        console.log("Committee created successfully:", response.data);
        setSnackbarMessage("commite created successfully");
        setSnackbarSeverity("success");
         // Close the popup
        setSnackbarOpen(true);
        // Optionally, reset form fields or handle any other post-submit actions
      } catch (error) {
        console.error("Error creating committee:", error);
        setSnackbarMessage("An error occurred");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        // Handle errors
      }
    };
    
    
    return (
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full ml-32">
          <UserName />
          <div className="flex flex-col mt-16">
            <div className="h-full w-full mt-8 flex flex-col gap-6">
              <button className='border flex gap-2 mb-8 border-teal-500 text-teal-500 text-sm rounded-md px-6 py-4 w-24' onClick={handlePopup}>Add
                <img src='/asset/icons/downArrow.svg' alt="downArrow" />
              </button>
              <div><CommitteeTable /></div>
              {isPopup && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                  <div className='bg-white p-8 rounded shadow-lg flex flex-col gap-8 p-4'>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                      <div className='flex gap-4 mb-4'>
                        <a onClick={handlePopup}><img src='/asset/icons/back-arrow.svg' alt="back-arrow" /></a>
                        <h1 className=' text-teal-500'>Add new Committee</h1>
                      </div>
                      <div className='flex gap-8'>
                        <div>
                          <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Committee Name <span className="text-red-500">*</span>
                            <input
                              name="committeeName"
                              type="text"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              {...register('committeeName', { required: true })}
                            />
                            {errors.committeeName && <span className="text-red-500 text-sm">This field is required</span>}
                          </label>
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Department <span className="text-red-500">*</span>
                            <select
                              name="department"
                              className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3"
                              {...register("department", { required: true })}
                            >
                              <option value="">Select</option>
                              {department.map((option) => (
                                <option key={option._id} value={option._id}>{option.name}</option>
                              ))}
                            </select>
                            {errors.department && <span className="text-red-500 text-sm">This field is required</span>}
                          </label>
                        </div>
                      </div>
                      <div className='flex gap-8'>
                        <div>
                          <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Number of Members <span className="text-red-500">*</span>
                            <input
                              name="members"
                              type="number"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              placeholder="Enter number of members"
                              {...register('members', { required: true })}
                            />
                            {errors.members && <span className="text-red-500 text-sm">This field is required</span>}
                          </label>
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Member Names <span className="text-red-500">*</span>
                            <select
                              name="memberNames"
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              multiple
                              onChange={handleMemberSelect}
                            >
                              {users.map(user => (
    <option key={user.userId} value={user.userId}>{user.username}</option>
))}

                            </select>
                            {errors.memberNames && <span className="text-red-500 text-sm">This field is required</span>}
                          </label>
                          <div className="mt-2">
                            {selectedMembers.map(member => (
                              <span key={member} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                {users.find(user => user.id === member)?.username || member}
                              </span>
                            ))}
                          </div>
                          <label className="block mb-2 text-sm font-semibold text-gray-700">
  Chairperson <span className="text-red-500">*</span>
  <select
    name="chairperson"
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
    onChange={(event) => setChairperson(event.target.value)}
    value={chairperson}
  >
    <option value="">Select Chairperson</option>
    {users.map((user) => (
      <option key={user.userId} value={user.userId}>
        {user.username}
      </option>
    ))}
  </select>
  {errors.chairperson && (
    <span className="text-red-500 text-sm">This field is required</span>
  )}
</label>

                        </div>
                      </div>
                      <div className="col-span-2">
                        <button type="submit" className="mt-4 ml-[40%] px-4 py-2 items-center bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
          </div>
        </div>
      </div>
    );
  },
});