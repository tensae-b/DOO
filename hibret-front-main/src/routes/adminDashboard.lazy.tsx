import { createFileRoute } from '@tanstack/react-router';
import AdminHead from '../components/adminHead';
import AdminMiddle from '../components/adminMiddle';
import AdminEnd from '../components/adminEnd';
import NavBar2 from '../components/NavBar2';
import SideBar2 from '../components/SideBar2';

export const Route = createFileRoute('/adminDashboard')({
  component: () => (
    <div className="mt-24 ml-80 mr-8">
      <NavBar2/>
      <SideBar2/>
      <AdminHead />
      <AdminMiddle />
      <AdminEnd />
    </div>
  )
});
