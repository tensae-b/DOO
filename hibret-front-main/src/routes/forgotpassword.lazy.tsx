import { useState } from 'react'; // Import useState hook
import { createFileRoute } from '@tanstack/react-router';
import lock from '../../public/asset/icons/lock.svg';
import { forgot } from '../services/api/usersApi';

export const Route = createFileRoute('/forgotpassword')({
  component: () => {
    const [email, setEmail] = useState(''); // State to hold email input value

    const handleResetPassword = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Call forgot function with the email input value
      const result = await forgot(email);

      // Handle the result as needed
      if (!result.isError) {
        // Reset form or show success message
      } else {
        // Handle error
      }
    };

    return (
      <div className='flex item-center justify-center pt-56'>
        <div className='w-[400px] h-[320px] flex items-center justify-center flex-col p-0'>
          <img src={lock} alt='Lock Icon' />

          <h1 className='text-3xl font-raleway pb-2 pt-8'>Forgot Password</h1>
          <p className='text-gray-400 text-sm w-56 text-center'>
            No worries, we’ll send you reset password instructions.
          </p>
          <form className='flex flex-col gap-6 w-full pt-8'>
            {/* Update input value and onChange handler */}
            <input
              type='email'
              placeholder='Enter Your email'
              className='w-full placeholder:text-xs py-2 px-3 placeholder:text-gray-400 text-sm border h-10 rounded-md border-gray-600'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Add onClick event handler */}
            <button
              className='bg-slate-100 text-gray-400 text-xs rounded-md w-full h-10'
              onClick={handleResetPassword} // Call handleResetPassword function
            >
              Reset Password
            </button>
          </form>
          <a className='text-gray-400 text-xs pt-3' href='/login'>
            Back to Login
          </a>
        </div>
      </div>
    );
  },
});
