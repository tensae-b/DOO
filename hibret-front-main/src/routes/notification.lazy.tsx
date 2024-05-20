import { createLazyFileRoute } from '@tanstack/react-router'
import avatar from "../../public/asset/icons/avatar.svg";
import SideBar2 from '../components/SideBar2';
import UserName from '../components/UserName'


export const Route = createLazyFileRoute('/notification')({
    component: () => <div> 
         <UserName/>
        <SideBar2/>
        
         <div className=" mt-40 ml-80 mr-8 w-full h-full ">
            <div className='shadow-lg w-7/12 flex flex-col gap-4 px-12 py-6 border border-opacity-15'>  <h1 className='text-teal-400 text-2xl'>Notifications</h1>
    <div className="flex gap-2 items-center p-2  border-b  border-opacity-20">
      <img src={avatar} className='h-8'/>
      <div>
        <p className="text-sm text-gray-400"> <a className="text-teal-400">Workflow Name</a> was assigned to you</p>
      </div>
    </div>

    <div className="flex gap-2 items-center p-2  border-b  border-opacity-20">
      <img src={avatar} className='h-8'/>
      <div>
        <p className="text-sm text-gray-400"> <a className="text-teal-400">Workflow Name</a> was assigned to you</p>
      </div>
    </div>

  </div>
          

    
      
  </div> </div>
})