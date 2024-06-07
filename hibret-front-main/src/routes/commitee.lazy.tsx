import React, { useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { DataGrid } from '@mui/x-data-grid';
import '@mui/material/styles';
import UserName from '../components/UserName';
import SideBar from '../components/SideBar';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'numberOfMembers', headerName: 'Number of Members', width: 200 },
  { field: 'department', headerName: 'Department', width: 200 },
  { field: 'status', headerName: 'Status', width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      const { status } = params.row;
      if (status === 'Inactive') {
        return <div className='flex gap-0.5 my-2'>
           <button className='border p-1'><img src='/asset/icons/edit.svg'/></button>
           <button  className='border p-1'><img src='/asset/icons/delete.svg'/></button>
        </div>;
      } else {
        return null; // Return null if status is Active
      }
    },
  },
];

const CommitteeTable = () => {
  const [committees] = useState([
    { id: 1, name: 'Committee A', numberOfMembers: 3, department: 'HR', status: 'Active' },
    { id: 2, name: 'Committee B', numberOfMembers: 1, department: 'Finance', status: 'Inactive' },
    { id: 3, name: 'Committee C', numberOfMembers: 5, department: 'IT', status: 'Active' },
  ]);

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
    };

    return (
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full ml-32">
          <UserName />
          <div className="flex flex-col mt-16 ">
            <div className="h-full w-full mt-8 flex flex-col gap-6">
              <button className='border flex gap-2 mb-8 border-teal-500 text-teal-500 text-sm rounded-md px-6 py-4 w-24' onClick={handlePopup}>Add
                <img src='/asset/icons/downArrow.svg' />
              </button>
              <div><CommitteeTable /></div>
              {isPopup && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                  <div className='bg-white p-8 rounded shadow-lg flex flex-col gap-8 p-4'>
                    <form className="flex flex-col gap-4 " onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const name = form.elements['committeeName'].value;
                      const department = form.elements['department'].value;
                      const members = form.elements['members'].value;

                      if (!name || !department || !members || selectedMembers.length === 0) {
                        alert('All fields are required');
                      } else {
                        // Handle successful form submission
                      }
                    }}>
                       <div className='flex gap-4 mb-4'>
                        <a onClick={handlePopup}><img src='/asset/icons/back-arrow.svg'/></a>
                        
                        <h1 className=' text-teal-500'>Add new Commitee</h1>
                        </div>
                      <div className='flex gap-8'>
                       
                       <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Committee Name <span className="text-red-500">*</span>
                          <input name="committeeName" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required />
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Department <span className="text-red-500">*</span>
                          <select name="department" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required>
                            <option value="" disabled selected>Select a department</option>
                            <option>HR</option>
                            <option>Chief</option>
                          </select>
                        </label>
                      </div>
                      </div>
                      <div className='flex gap-8'>
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Number of Members <span className="text-red-500">*</span>
                          <input name="members" type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter number of members" required />
                        </label>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                          Member Names <span className="text-red-500">*</span>
                          <select name="memberNames" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" required multiple onChange={handleMemberSelect}>
                            <option>John Doe</option>
                            <option>Jane Smith</option>
                            <option>Mike Johnson</option>
                            <option>Emily Davis</option>
                          </select>
                        </label>
                        <div className="mt-2">
                          {selectedMembers.map(member => (
                            <span key={member} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{member}</span>
                          ))}
                        </div>
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
          </div>
        </div>
      </div>
    );
  },
});
