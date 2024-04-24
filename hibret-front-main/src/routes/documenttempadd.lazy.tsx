import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Route = createFileRoute("/documenttempadd")({
  component: () => <DocumentAddTemp />,
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
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-700 bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 w-300 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
            <img src="/asset/icons/left-arrow.png" className="w-8 h-8 mr-2"/> {/* Adjust width and height */}
            <h2 className="text-[#4A176D] text-3xl font-bold">Add New Document Template</h2>
          </button>
        </div>
        <div className="mb-6 rounded-lg overflow-hidden">
          <h3 className="text-[#00B0AD] text-1xl font-bold">Document Information</h3>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Document Name */}
            <div className="mt-4">
              <label htmlFor="documentName" className="block font-bold">Document Name:</label>
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
            <div className="mt-4">
              <label htmlFor="documentType" className="block font-bold">Document Type:</label>
              <Dropdown options={documentoptions} onChange={(option) => setSelectedDocument(option)} value={selectedDocument} placeholder="Select an option" />
            </div>
          </form>
        </div>
  
        {/* Sections */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-[#00B0AD] text-1xl font-bold">Sections</h3>
          {section.map((item, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-black text-1xl font-bold">Section{index+1}</h3>
              <div className="mt-2 flex justify-between">
                <div className="w-1/2 pr-2">
                  <label htmlFor={`sectionHead${index}`} className="block font-bold">Section Head:</label>
                  <input 
                    type="text" 
                    id={`sectionHead${index}`} 
                    value={item.sectionHead} 
                    onChange={(e) => handleStageChange(index, 'sectionHead', e.target.value)} 
                    className="border rounded-md p-2 mt-1 w-full" 
                    required 
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor={`sectionType${index}`} className="block font-bold">Section Type:</label>
                  <Dropdown options={headoptions} onChange={(option) => setSelectedHead(option)} value={selectedHead} placeholder="Select an option" />
                </div>
              </div>
              {/* Section Necessity */}
              <div className="mt-4 ">
                <span className="block font-bold mr-2">Section Necessity:</span>
                <div className="flex items-center mt-2">
                  <input 
                    type="radio" 
                    id={`required${index}`} 
                    name={`sectionNecessity${index}`} 
                    value="Required" 
                    checked={sectionNecessity === 'Required'} 
                    onChange={() => setSectionNecessity('Required')} 
                    className="mr-1"
                  />
                  <label htmlFor={`required${index}`} className="mr-4">Required</label>
                  <input 
                    type="radio" 
                    id={`optional${index}`} 
                    name={`sectionNecessity${index}`} 
                    value="Optional" 
                    checked={sectionNecessity === 'Optional'} 
                    onChange={() => setSectionNecessity('Optional')} 
                    className="mr-1"
                  />
                  <label htmlFor={`optional${index}`}>Optional</label>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add more sections button */}
          <div className="mt-6">
            <button type="button" onClick={handleAddStage} className="flex items-center justify-center gap-2 bg-white hover:bg-gray-300 text-[#00B0AD] font-bold px-4 rounded border border-[#00B0AD] w-full">
              <img src="/asset/icons/plus-4.png" className="w-5" alt="Plus Icon" />
              Add More Sections
            </button>
          </div>
        </div>
  
        {/* Submit Button */}
        <div className="flex gap-4 justify-end items-center mt-6">
          <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Publish Template</button>
        </div>
      </div>
    </div>
  );
  
  
}

export default DocumentAddTemp;
