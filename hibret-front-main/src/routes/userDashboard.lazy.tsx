import { createFileRoute } from '@tanstack/react-router';
import AdminHead  from '../components/adminHead';
import UserCards from '../components/UserCards';
import UserEnd from '../components/UserEnd';
import UserName from '../components/UserName';
import SideBar2 from '../components/SideBar2';
import UserName from "../components/UserName";

export const Route = createFileRoute('/userDashboard')({
  component: () => (
    <div className="mt-24 ml-80 mr-8">
      <UserName/>
      <SideBar2/>
      <AdminHead/>
      <UserCards/>
      <UserEnd/>

  </div>
  )
});
