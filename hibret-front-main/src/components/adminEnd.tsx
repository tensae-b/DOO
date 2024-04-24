import React from "react";

const adminEnd = () => {
  return (
    <div className="end flex  gap-6 mt-10">
      <div className="w-[670px] h-72 top-[-18.125rem] left-[20.75rem] rounded-lg border border-gray-200 p-6 gap-6">
        <div className="header flex justify-between">
          <h3>Document Data</h3>
          <div className="flex items-center font-urbanist text-gray-600 text-xs leading-4 gap-4">
            <div className="flex items-center gap-1">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="2.5" fill="#4A176D" />
              </svg>
              Rejected
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="2.5" fill="#4A176D" />
              </svg>
              Approved
            </div>
          </div>
        </div>
        <div className=" w-84 border top-559 left-356 mt-4 border-gray-200 border-opacity-50"></div>
        <div className=" flex  mt-6 h-48 gap-4  px-6">
          <div className="flex flex-col items-center">
            <svg
              width="9"
              height="136"
              viewBox="0 0 9 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="8" height="33" rx="4" fill="#00B0AD" />
              <rect
                x="0.5"
                y="37"
                width="8"
                height="99"
                rx="4"
                fill="#4A176D"
              />
            </svg>
            <p className="mt-4 font-urbanist text-gray-600 text-xs leading-4 text-center">
              January
            </p>
          </div>
        </div>
       
        <div> </div>
      </div>
       
      <div className="w-[650px] left-[20.75rem] rounded-lg border border-gray-200 p-6 ">
          <div>Recent Notification</div>

          <div className="m-12 flex flex-col gap-6">
            
            <div>
            <h3 className="font-inter font-medium text-base leading-snug text-gray-600">Today</h3>
            <p className="font-inter font-normal text-xs leading-tight text-gray-700">Document 1 by 4:00pm PST for Sep 27 - Oct 10</p>
            <div className=" w-84 border top-559 left-356 mt-4 border-gray-200 border-opacity-50"></div>
              </div> 


              <div className="flex items-center justify-between">
              <div>
            <h3 className="font-inter font-medium text-base leading-snug text-gray-600">Monday, 22 Mar 2021</h3>
            <p className="font-inter font-normal text-xs leading-tight text-gray-700">Jeffrey Reid asked for rework </p>
           </div>
           <div className="bg-slate-200  rounded-full w-12 h-12">
              </div>
              
            
            
            <div className=" w-84 border top-559 left-356 mt-4 border-gray-200 border-opacity-50"></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default adminEnd;
