import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/LoanDocument')({
  component: () => <LoanDocument/>
})

function LoanDocument(){
return(
  <div className="mx-3 mb-10 ">
  <div className="flex">
    <SideBar />
    <div className="w-full flex flex-col">
      <NavBar />
      </div>
      </div>
      </div>
);
}