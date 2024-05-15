import { createFileRoute } from '@tanstack/react-router';
import backArrow from '/asset/icons/back-arrow.svg';
import WorkflowInformation from '../components/WorkflowInformation';
import DocumentDetailsCard from '../components/DocumentDetailsCard';

export const Route = createFileRoute('/WorkflowaAsignedByMe')({
  component: () => (
    <div className="mt-24 ml-80 mr-8">
      <div>
        <div className="flex flex-row gap-6 text-bold item-center">
          <a href='' className="item-center"> <img src={backArrow} alt="Back Arrow" /></a>  
          <h1 className="text-teal-600 font-semibold text-2xl">Workflow Name</h1>
        </div>
        <p className="text-gray-600 text-sm pl-12">Some Helper Text here</p>
      </div>
      <div  className="flex flex-col w-6/12 my-9  h-12 gap-9  border border-gray-500 border-opacity-10">
        <WorkflowInformation />
      <DocumentDetailsCard />
      </div>
      
    </div>
  )
});
