import { createFileRoute } from '@tanstack/react-router';
import ReportHead from '../components/ReportHead';
import ReportMiddle from '../components/ReportMiddle';
import ReportEnd from '../components/ReportEnd';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export const Route = createFileRoute('/adminreport')({
  component: () => (
    <div className="mx-3 flex">
      <SideBar style={{ flex: '1 0 20%' }} /> {/* Set sidebar width to 20% */}
      <div className="" style={{ flex: '1 0 80%' }}> {/* Set report analytics part width to 80% */}
        <NavBar className="w-80%" />
        <div className="flex flex-col gap-3 my-5">
          <ReportHead /> {/* No need to specify width */}
          <ReportMiddle />
          <ReportEnd />
        </div>
      </div>
    </div>
  )
});