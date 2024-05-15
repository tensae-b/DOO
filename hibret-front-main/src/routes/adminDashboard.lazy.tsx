import { createFileRoute } from '@tanstack/react-router';
import AdminHead from '../components/adminHead';
import AdminMiddle from '../components/adminMiddle';
import AdminEnd from '../components/adminEnd';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export const Route = createFileRoute('/adminDashboard')({
  component: () => (
    <div className="mx-3 flex">
    <SideBar style={{ flex: '1 0 20%' }} /> {/* Set sidebar width to 20% */}
    <div className="" style={{ flex: '1 0 80%' }}> {/* Set report analytics part width to 80% */}
      <NavBar className="w-80%" />
      <div className="flex flex-col gap-3 my-5">
      <AdminHead />
      <AdminMiddle />
      <AdminEnd />
      </div>
    </div>
  </div>
  )
});
