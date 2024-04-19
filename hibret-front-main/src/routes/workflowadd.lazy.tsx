import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Route = createFileRoute("/workflowadd")({
  component: () => <WorkFlowAddTemp />,
});

function WorkFlowAddTemp({ onClose }) {
  // State variables to hold form data
  const [workflowName, setWorkflowName] = useState('');
  const [workflowType, setWorkflowType] = useState('');
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [selectedAuth, setSelectedAuth] = useState(null); 
  const [stages, setStages] = useState([{ title: "", authorization: "" }]);
  const wokflowoptions = [
    'Workflow1 one', 'Workflow1 two', 'Workflow1 three'
  ];
  const authorizationoptions = [
    'Authorization one', 'Authorization two', 'Authorization three'
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log("Workflow Name:", workflowName);
    console.log("Workflow Type:", workflowType);
    console.log("Stages:", stages);
    // Reset form fields after submission if needed
    setWorkflowName('');
    setWorkflowType('');
    // Close the modal
    onClose();
  };

  // Function to handle adding more stages
  const handleAddStage = () => {
    setStages([...stages, { title: "", authorization: "" }]);
  };

  // Function to handle updating stage information
  const handleStageChange = (index, key, value) => {
    const updatedStages = [...stages];
    updatedStages[index][key] = value;
    setStages(updatedStages);
  };

  return (
<div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-700 bg-opacity-50 overflow-y-auto">
  <div className="bg-white rounded-lg p-8 w-300 overflow-y-auto" >
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
            <img src="/asset/icons/left-arrow.png" className="w-8 h-8 mr-2"/> {/* Adjust width and height */}
            <h2 className="text-[#4A176D] text-3xl font-bold">Add New Workflow Template</h2>
          </button>
        </div>
        <h3 className="text-[#00B0AD] text-1xl font-bold">Workflow Information</h3>
        
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Workflow Name */}
          <div className="mt-4">
            <label htmlFor="workflowName" className="block font-bold">Workflow Name:</label>
            <input 
              type="text" 
              id="workflowName" 
              value={workflowName} 
              onChange={(e) => setWorkflowName(e.target.value)} 
              className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
              required 
            />
          </div>
          {/* Workflow Type */}
          <div className="mt-4">
            <label htmlFor="workflowType" className="block font-bold">Workflow Type:</label>
            
          </div><Dropdown options={wokflowoptions} onChange={(option) => setSelectedWorkflow(option)} value={selectedWorkflow} placeholder="Select an option" />
          
          {/* Stages */}
          {stages.map((stage, index) => (
            <div className="text-1xl mt-300 ">
              <h3 className="text-[#00B0AD] text-1xl font-bold  mt-10">Stages</h3>
            <div key={index} className="mt-6 flex justify-between">
                 
              <div className="w-1/2 pr-2">
                <label htmlFor={`stageTitle${index}`} className="block font-bold">Stage Title:</label>
                <input 
                  type="text" 
                  id={`stageTitle${index}`} 
                  value={stage.title} 
                  onChange={(e) => handleStageChange(index, 'title', e.target.value)} 
                  className="border rounded-md p-2 mt-1 w-full" 
                  required 
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor={`stageAuth${index}`} className="block font-bold">Stage Authorization:</label>
              
                <Dropdown   className="w-full"options={authorizationoptions} onChange={(option) => setSelectedAuth(option)} value={selectedAuth} placeholder="Select an option" />
              </div>
            </div>
            </div>
          ))}
          
          {/* Add more stages button */}
          {/* Add more stages button */}
          <div className="mt-6">
  <button type="button" onClick={handleAddStage} className="flex items-center justify-center gap-2 bg-white hover:bg-gray-300 text-[#00B0AD] font-bold px-4 rounded border border-[#00B0AD] w-full">
    <img src="/asset/icons/plus-4.png" className="w-5" alt="Plus Icon" />
    Add More Stages
  </button>
</div>



          
          {/* Submit Button */}
          <div className="flex gap-4 justify-end items-center mt-6">
  <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Publish Template</button>
</div>

        </form>
      </div>
    </div>
  );
}

export default WorkFlowAddTemp;
