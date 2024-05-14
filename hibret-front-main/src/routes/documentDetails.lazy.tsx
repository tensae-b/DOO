import { createLazyFileRoute } from "@tanstack/react-router";
import backArrow from '/asset/icons/back-arrow.svg' 
import arrowdown from '/asset/icons/arrowDown.svg'
import downArrow from '/asset/icons/down-arrow.svg'
import DocumentDetailsCard from "../components/DocumentDetailsCard";
import Comments from "../components/Comments";


export const Route = createLazyFileRoute("/documentDetails")({
  component: () => (
    <div className="mt-24 ml-80 mr-8 w-full h-full">
       <div> 
        <div className="flex flex-row gap-6 text-bold item-center ">
          <a href='' className="item-center"> <img src={backArrow}/></a>  
            <h1 className="text-teal-600 font-semibold text-2xl">Workflow Name</h1></div>
        
        <p className="text-gray-600 text-sm pl-12">Some Helper Text here</p>
       </div>
   <div className="flex gap-6">
       <div className="flex flex-col w-6/12 my-9  h-12 gap-9  border border-gray-500 border-opacity-10">
        <div className="flex flex-row justify-between py-3 px-6">
            <h3 className=" text-teal-600">Workflow information</h3>
             <img src={downArrow}/> 
        </div>
        <div className="flex flex-col  border border-gray-500 border-opacity-10 gap-12 py-3 px-6">
            <div className="flex flex-row justify-between items-center w-full">
                <h4  className=" text-teal-600">Documents</h4>
                <img src={arrowdown}/>
            </div>

            <DocumentDetailsCard/>
            <DocumentDetailsCard/>
            <DocumentDetailsCard/>
            <DocumentDetailsCard/>
            <DocumentDetailsCard/>

     </div>
       </div>

        <Comments/>
       </div>
        </div>
  ),
});
