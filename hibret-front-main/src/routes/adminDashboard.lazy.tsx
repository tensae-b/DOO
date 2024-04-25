import { createFileRoute } from '@tanstack/react-router';
import AdminHead from '../components/adminHead';
import AdminMiddle from '../components/adminMiddle';
import AdminEnd from '../components/adminEnd';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export const Route = createFileRoute('/adminDashboard')({
  component: () => (
    <div className="mt-24 ml-80 mr-8">
      <NavBar/>
      <SideBar/>
      <AdminHead />
      <AdminMiddle />
      <AdminEnd />
    </div>
  )
});
