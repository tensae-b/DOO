import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Route = createFileRoute("/documenttempadd")({
  component: () => <DocumentAddTemp onClose={undefined} />,
});

function DocumentAddTemp({ onClose }) {
  // State variables to hold form data
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedHead, setSelectedHead] = useState(null); 
  const [section, setSection] = useState([{ sectionHead: "", Type: "" }]);
  const [sectionNecessity, setSectionNecessity] = useState('Required'); // Default to 'Required'
  const documentoptions = [
    'document one', 'document two', 'document three'
  ];
  const headoptions = [
    'Header one', 'Header two', 'Header three'
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log("document Name:", documentName);
    console.log("document Type:", documentName);
    console.log("head:", section);
    // Reset form fields after submission if needed
    setDocumentName('');
    setDocumentType('');
    // Close the modal
    onClose();
  };

  // Function to handle adding more stages
  const handleAddStage = () => {
    setSection([...section, { sectionHead: "", Type: "" }]);
  };

  // Function to handle updating stage information
  const handleStageChange = (index, key, value) => {
    const updatedSection = [...section];
    updatedSection[index][key] = value;
    setSection(updatedSection);
  };

  return (
    <div className="w-full h-fit max-w-[865px] absolute top-32 right-56 bg-white z-20 px-10 py-4 border-2 rounded-lg">
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
            <img src="/asset/icons/back-arrow.svg" className="w-8 h-8 mr-2"/> {/* Adjust width and height */}
            <h2 className="text-[#4A176D] text-3xl font-bold">Add New Document Template</h2>
          </button>
        </div>
        <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10">
          
          
          {/* section1 */}
          <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
          <h3 className="text-[#00B0AD] text-1xl font-bold">Document Information</h3>
            {/* Document Name */}
            <div className="mt-4">
              <label htmlFor="documentName"  className="text-sm w-full">Document Name*</label>
              <input 
                type="text" 
                id="documentName" 
                value={documentName} 
                onChange={(e) => setDocumentName(e.target.value)} 
                className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                required 
              />
            </div>
            {/* Document Type */}
            <div className="flex w-full gap-3">
              <div className="w-full flex flex-col justify-center gap-2">
              <label   className="text-sm w-full">Document Category*</label>
              <Dropdown options={documentoptions}  placeholder="Select an option" />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
              <label   className="text-sm w-full">Document Name*</label>
              <Dropdown options={documentoptions}  placeholder="Select an option" />
              </div>
            </div>
          </div>
{/* section2 */}
          <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
          <h3 className="text-[#00B0AD] text-1xl font-bold">Sections</h3>
          <div className="flex flex-col w-full gap-3">
              
              <div className="w-full flex flex-col justify-center gap-2">
              <label  className="text-sm w-full">Section Header*</label>
              <input 
                type="text" 
                className="border rounded-md p-2 mt-1 w-full" 
                required 
              />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
              <label   className="text-sm w-full">Section Type*</label>
              <Dropdown options={documentoptions} placeholder="Select an option" />
              </div>

              <div className="flex flex-col gap-5 h-fit">
              <label className="text-sm w-full">Section Necessity</label>
              <div className="w-full flex gap-10 ">
                <div className="flex gap-3 items-center justify-center">
                <input 
                type="radio" 
                className="w-4 h-4 text-white bg-[#4A176D] border-gray-300 focus:ring-[#4A176D]" 
               id="required"
              />
                <label htmlFor="required" className="text-sm w-full">Required <span className="text-[#8D98AF]">(Obligate the Officer to fill)</span> </label>
                </div>

                <div className="flex gap-3 items-center justify-center">
                <input 
                type="radio" 
                className="w-4 h-4 text-white bg-[#4A176D] border-gray-300" 
               id="optional"
              />
                <label htmlFor="optional" className="text-sm w-full">Optional <span className="text-[#8D98AF]"> (Give option to Officer to fill or not)</span> </label>
                </div>
                
              </div>
              <div className="flex gap-3 items-center justify-center">
                <input 
                type="checkbox" 
                className="w-4 h-4 text-white bg-[#4A176D] border-gray-300" 
               id="eligible"
              />
                <label htmlFor="eligible" className="text-sm w-full">Eligible as condition criteria </label>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      
         <button className="flex items-center justify-center text-center w-full text-[#00B0AD] text-base border border-[#00B0AD] rounded-lg p-2"> <img src="/asset/icons/plus-black.svg"/>Add More Sections</button>
        {/* Submit Button */}
        <div className="flex gap-4 justify-end items-center mt-6">
          <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-base py-2 px-4 rounded">Publish Template</button>
        </div>
      </div>
    </div>
  );
  
  
}

export default DocumentAddTemp;
