import { useState } from 'react'; // Import useState hook
import { createLazyFileRoute } from '@tanstack/react-router';
import { reset } from '../services/api/usersApi';

export const Route = createLazyFileRoute('/setNewPassword')({
  component: () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
      try {
        // Call reset function with old password and new password
        const result = await reset(oldPassword, newPassword);
        // console.log(oldPassword)
        // console.log(newPassword)

        // Handle the result as needed
        if (!result.isError) {
          // Password changed successfully
          // You may redirect to another page or show a success message
        } else {
          // Handle error
          console.log(result)
          console.error('Error changing password:', result.error);
        }
      } catch (error) {
        // Handle network error
        console.error('Network error:', error);
      }
    };

    return (
      <div className='flex item-center justify-center pt-56'>
        <div className='w-[400px] h-[320px] flex items-center justify-center flex-col gap-6 p-0'>
          <h1 className='text-3xl font-raleway bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900'>
            Setup New Password
          </h1>
          <p className='text-gray-600 text-sm'>Enter a new password for your account</p>
          <input
            type='password'
            placeholder='old password'
            className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border h-12 rounded-md border-gray-600'
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          {/* Update input values and onChange handlers */}
          <input
            type='password'
            placeholder='Enter a new password'
            className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border rounded-md h-12 border-gray-600'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
         
          {/* Add onClick event handler */}
          <button
            className='mt-2 bg-teal-500 rounded-md w-full h-12'
            onClick={handleChangePassword} // Call handleChangePassword function
          >
            Change Password
          </button>
        </div>
      </div>
    );
  },
});
