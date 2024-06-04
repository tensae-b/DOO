import { createFileRoute } from '@tanstack/react-router';
import AdminHead from '../components/adminHead';
import AdminMiddle from '../components/adminMiddle';
import AdminEnd from '../components/adminEnd';
import NavBar2 from '../components/NavBar';
import SideBar from '../components/SideBar';
import UserName from '../components/UserName';



export const Route = createFileRoute('/adminDashboard')({
  component: () => (
   

<div>
  <div className='flex gap-10'>
    <div className='fixed top-0 left-0'> <SideBar/></div>
    <div className=''><UserName /></div>
   
    <div className='className=" ml-44 mr-2" '>
      
      
      <div className='mt-28'>
      <AdminHead/>
      <AdminMiddle/>
      <AdminEnd/>
      </div>

    </div>
    

  </div>


</div>


    
  )
});
