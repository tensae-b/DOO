import React from 'react'
import { Link } from '@tanstack/react-router'


const SideBar2 = () => {
  return (
    <div className="flex flex-col w-64 mx-6 mt-11 h-full fixed left-0 top-0 ">
    <div className="flex flex-col gap-12 m-0 ">
      <img src="/asset/icons/hibret2.svg" className='h-16 justify-start' />
      <hr className="border border-[#EFEFF4]" />
    </div>

    <div className="flex flex-col mt-6 gap-5">
      <div className="category1 flex flex-col justify-center ">
        <h2 className=" text-sm text-[#667085] font-bold">Catagory1</h2>
        <div className=" flex flex-col mt-5 gap-3 justify-center">
          <div className="flex gap-2 ">
            <img className=" max-w-4" src="/asset/icons/dashboard.svg" />
            <p className=" text-sm text-[#667085]">Dashboard</p>
          </div>
          <div className="flex gap-2 ">
            <img
              className=" max-w-4"
              src="/asset/icons/user-management.svg"
            />
            <Link to="/document" className=" text-sm text-[#667085] [&.active]:font-bold">Documents</Link>
            
          </div>
          <div className="flex gap-2 ">
            <img className=" max-w-4" src="/asset/icons/report.svg" />
            <p className=" text-sm text-[#667085]">Reports</p>
          </div>
        </div>
      </div>

      <div className="category2 flex flex-col justify-center ">
          <h2 className=" text-sm text-[#667085] font-bold">WorkFlows</h2>
          <div className=" flex flex-col justify-center mt-5 gap-3">
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/dashboard.svg" />
              <Link to="/assignedTome" className=" text-sm text-[#667085]">Assigned To Me</Link>
            </div>
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/some-list.svg" />
              <Link to="/assignedByme" className=" text-sm text-[#667085]">Assigned By Me</Link>
            </div>
            
          </div>
        </div>

      <div className="category3 flex flex-col justify-center">
        <h2 className=" text-sm text-[#667085] font-bold">Catagory3</h2>
        <div className=" flex flex-col mt-5 gap-3 justify-center">
          <div className="flex gap-2 ">
            <img className=" max-w-4" src="/asset/icons/placeholder.svg" />
            <p className=" text-sm text-[#667085]">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SideBar2