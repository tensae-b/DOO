import React, { useState } from 'react';
import upArrow from '../../public/asset/icons/upArrow.svg';
import downArrow from '../../public/asset/icons/down-arrow.svg';
import notifcation from '../../public/asset/icons/notification.svg';
import avatar from        '../../public/asset/icons/avatar.svg';
import { Button } from '@mui/material';
const UserName: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="search-bar flex justify-between mt-4 p-3 fixed top-0 left-80 right-0 bg-white">
      <div className="flex px-3 py-2 rounded-lg w-72 h-8 justify-between">
        {/* Your search bar content goes here */}
      </div>

      <div className="flex gap-6 items-center">
        <img src={notifcation} className="max-w-6" alt="Notification Icon" />
        <hr className="border border-[#EFEFF4] h-11" />
        <div className="flex gap-4 w-56 items-center">
          <img src={avatar} alt="Avatar" />
          <div onClick={toggle} className="flex relative gap-2 cursor-pointer">
            <p>Maxwell Anderson</p>
            <img src={isOpen ? upArrow : downArrow} className="max-w-4" alt="Dropdown Arrow" />
          </div>
          {isOpen?<div className='flex flex-col  items-center gap-2 absolute top-14 h-24  w-44 py-2 border bg-white rounded-md'>
          <button className='border border-gray-600 w-36 border-opacity-50 text-gray-500 hover:bg-slate-200 rounded-md'>Change Password</button>
             <button className='border border-red-600  bg-[#DC251C] w-36 text-white hover:bg-red-700 rounded-md'>Log Out</button>
             
          </div>:<div> </div>}
        </div>
      </div>
    </div>
  );
}

export default UserName;
