import { createFileRoute } from '@tanstack/react-router';
import AdminHead  from '../components/adminHead';
import UserCards from '../components/UserCards';
import UserEnd from '../components/UserEnd';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export const Route = createFileRoute('/userDashboard')({
  component: () => (

    <div>
      <NavBar/>
    <SideBar/>
    <div className="mt-24 ml-80 mr-8">
      
      <AdminHead/>
      <UserCards/>
      <UserEnd/>

  </div></div>
   
  )
});
