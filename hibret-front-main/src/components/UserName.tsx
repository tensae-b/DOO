import React, { useState, useEffect } from "react";
import { Link, } from "@tanstack/react-router";
import downArrow from "../../public/asset/icons/down-arrow.svg";
import notifcation from "../../public/asset/icons/notification.svg";
import avatar from "../../public/asset/icons/avatar.svg";
import { logoutUser } from "../services/api/authApi";
import { Button } from "@mui/material";

const UserName: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUsername(storedUser.username || "User");
    setRole(storedUser.role || "Role");
  }, []);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  const handleLogout = async () => {
    const { isError } = await logoutUser();
    if (!isError) {
      localStorage.clear();
      window.location.href = "/login"
    } else {
      console.error("Error during logout");
    }
  };

  return (
    <div className="search-bar flex justify-between mt-4 p-3 fixed top-0 left-80 right-0 bg-white">
      <div className="flex border border-[#667085] px-3 py-2 rounded-lg w-72 h-8 justify-between">
        <input type="text" placeholder="Search something...." />
        <img src="/asset/icons/search.svg" />
      </div>

      <div className="flex gap-6 items-center">
        <div className="relative">
          <img src={notifcation} onClick={() => setIsNotification((prev) => !prev)} className="max-w-6" alt="Notification Icon" />
          <div className="h-4 w-4 rounded-full bg-teal-400 text-white text-xs flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            2
          </div>

          {isNotification ? (
            <div className="max-h-72 w-80 shadow-lg absolute bg-white right-2 flex flex-col gap-4 p-4 border border-opacity-15">
              <div className="flex gap-2 items-center p-2 border-b border-opacity-20">
                <img src={avatar} className='h-8' />
                <div>
                  <p className="text-sm text-gray-400"><a className="text-teal-400">Workflow Name</a> was assigned to you</p>
                </div>
              </div>

              <div className="flex gap-2 items-center p-2 border-b border-opacity-20">
                <img src={avatar} className='h-8' />
                <div>
                  <p className="text-sm text-gray-400"><a className="text-teal-400">Workflow Name</a> was assigned to you</p>
                </div>
              </div>

              <a href="/notification"><button className="border-none h-8 text-teal-400 text-sm px-5">View all notifications</button></a>
            </div>
          ) : null}
        </div>

        <hr className="border border-[#EFEFF4] h-11" />
        <div className="flex gap-4 w-56 items-center">
          <img src={avatar} alt="Avatar" />
          <div onClick={toggle} className="flex relative gap-2 cursor-pointer">
            <div>
              <p>{username}</p>
              {/* <p className="text-sm text-gray-500">{role}</p> */}
            </div>
            <img src={isOpen ? "uparrow" : downArrow} className="max-w-4" alt="Dropdown Arrow" />
          </div>
          {isOpen ? (
            <div className="flex flex-col justify-center items-center gap-2 absolute top-14 right-2 h-auto w-44 py-4 border bg-white rounded-md shadow-lg">
              <Link to="/setNewPassword" className="w-full flex justify-center">
                <button className="border text-xs border-gray-300 w-32 py-1 text-gray-500 hover:bg-gray-100 rounded-md">
                  Change Password
                </button>
              </Link>
              <button onClick={handleLogout} className="border w-32 py-1 text-xs text-white bg-red-500 hover:bg-red-600 rounded-md">
                Log Out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserName;
