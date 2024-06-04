import UserName from '../components/UserName';
import SideBar2 from '../components/SideBar2';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export const Route = createLazyFileRoute('/changepassword')({
  component: () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState<boolean>(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);

    useEffect(() => {
      setValidationErrors([]); // Initialize validationErrors when component mounts
    }, []);

    const validatePassword = (password: string): string[] => {
      const errors: string[] = [];
      // Your validation logic here, push any validation errors to the errors array
      return errors;
    };

    const handleChangePassword = async () => {
      const errors = validatePassword(newPassword);
      if (!errors) {
        console.error('Validation errors is undefined');
        return;
      }
      setValidationErrors(errors);
      if (errors.length > 0) {
        return; // If there are validation errors, do not proceed
      }

      try {
        // Send a PUT request to the backend endpoint
        const response = await axios.put('http://localhost:5000/api/change-password', {
          oldPassword: oldPassword,
          newPassword: newPassword
        });

        // Handle the response as needed
        console.log(response.data);
      } catch (error) {
        // Handle network error
        console.error('Network error:', error);
      }
    };

    const toggleOldPasswordVisibility = () => {
      setIsOldPasswordVisible((prevState) => !prevState);
    };

    const toggleNewPasswordVisibility = () => {
      setIsNewPasswordVisible((prevState) => !prevState);
    };

    return (
      <div>
        <UserName />
        <SideBar2 />
        <div className='flex item-center justify-center pt-56'>
          <div className='w-[400px] h-[320px] flex items-center justify-center flex-col gap-6 p-0'>
            <h1 className='text-3xl font-raleway bg-gradient-to-r text-transparent bg-clip-text from-teal-500 to-purple-900'>
              Change Password
            </h1>
            <p className='text-gray-600 text-sm'>Enter a new password for your account</p>
            <div className='relative w-full'>
              <input
                type={isOldPasswordVisible ? 'text' : 'password'}
                placeholder='Old password'
                className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border h-12 rounded-md border-gray-600'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleOldPasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
              >
                <img 
                  src={isOldPasswordVisible ? "/asset/icons/visible.png" : "/asset/icons/not-visible.png"} 
                  alt={isOldPasswordVisible ? "Hide Password" : "Show Password"} 
                  className="w-5 h-5"
                />
              </button>
            </div>
            {validationErrors && validationErrors.length > 0 && (
              <ul className='text-xs text-gray-500 text-left w-full pl-2 pr-8'>
                {validationErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <div className='relative w-full'>
              <input
                type={isNewPasswordVisible ? 'text' : 'password'}
                placeholder='Enter a new password'
                className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-600 text-sm border rounded-md h-12 border-gray-600'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
              >
                <img 
                  src={isNewPasswordVisible ? "/asset/icons/visible.png" : "/asset/icons/not-visible.png"} 
                  alt={isNewPasswordVisible ? "Hide Password" : "Show Password"} 
                  className="w-5 h-5"
                />
              </button>
            </div>
            <button
              className='mt-2 bg-teal-500 rounded-md w-full h-12'
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    );
  },
});
