import { createFileRoute } from '@tanstack/react-router';
import AdminHead from '../components/adminHead';
import AdminMiddle from '../components/adminMiddle';
import AdminEnd from '../components/adminEnd';
import NavBar2 from '../components/NavBar';
import SideBar from '../components/SideBar';

export const Route = createFileRoute('/adminDashboard')({
  component: () => (
    <div className="mt-24  mr-8">
     <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar2 />
      <AdminHead />
      <AdminMiddle />
      <AdminEnd />
      </div>
      </div>
    </div>
  )
});
