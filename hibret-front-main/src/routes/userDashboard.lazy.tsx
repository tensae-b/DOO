import { createFileRoute } from '@tanstack/react-router';
import AdminHead  from '../components/adminHead';
import UserCards from '../components/UserCards';
import UserEnd from '../components/UserEnd';
import NavBar2 from '../components/NavBar2';
import SideBar2 from '../components/SideBar2';

export const Route = createFileRoute('/userDashboard')({
  component: () => (

    <div>
      <NavBar2/>
    <SideBar2/>
    <div className="mt-24 ml-80 mr-8">
      
      <AdminHead/>
      <UserCards/>
      <UserEnd/>

  </div></div>
   
  )
});
