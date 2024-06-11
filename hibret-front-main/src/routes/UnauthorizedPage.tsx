import React from 'react'
import SideBar2 from '../components/SideBar2'
import NavBar from '../components/NavBar'
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/UnauthorizedPage")({
  component: () => <UnauthorizedPage />,
});

const UnauthorizedPage = () => {
  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
     
        <div className="w-full flex flex-col  ml-80 mr-8">
      
         

          <div>
                
            <div className=''>
              <div className="flex justify-between opac ">
                <div className="flex flex-col gap-3 my-5">
                  <h2 className="text-[#4A176D] text-3xl font-bold">
                   
                  </h2>
                  
                </div>
               
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  src="/asset/nodocument.svg"
                  className=" max-w-80 max-h-80"
                />
                <h2 className="text-4xl text-[#6B7280] font-bold">
              You are not authorized to access this page
                </h2>
               
                <a
                  className="bg-[#00B0AD] flex gap-2 py-2 px-6 rounded-lg justify-center items-center text-white"
                  href="/workflowadd"
                >
                 
                  
                </a>
              </div>
            </div>
        
    </div>
        </div>
      </div>
    </div>
  )
}


