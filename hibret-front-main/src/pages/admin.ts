import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure the path is correct
import { faEdit, faTrash,faSort,faArrowDown } from '@fortawesome/free-solid-svg-icons';


const DocumentTemplates = () => {
    const [data, setData] = useState([
        { isSelected: false, name: 'Template A', type: 'Document', status: 'Active', action: 'View' },
        { isSelected: false, name: 'Template B', type: 'Spreadsheet', status: 'Inactive', action: 'Edit' },
        // Add more objects for additional document templates
      ]);
    
      const handleStatusChange = (index, newStatus) => {
        setData(prevData =>
          prevData.map((item, i) => (i === index ? { ...item, status: newStatus } : item))
        );
      };
    
      const handleEdit = (index) => {
        // Implement logic to handle editing the template at index
        console.log('Edit template at index:', index);
      };
    
      const handleDelete = (index) => {
        // Implement logic to handle deleting the template at index
        console.log('Delete template at index:', index);
        // Update the data state after deletion (optional)
      };
    
      const handleCheckboxChange = (index) => {
        setData(prevData =>
          prevData.map((item, i) => (i === index ? { ...item, isSelected: !item.isSelected } : item))
        );
      };
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <NavBar />
          <table className="table-auto w-full text-gray-700"> {/* Set text color to gray */}
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">
                  
                  <img src="/asset/icons/arrowDown.svg" className=" max-w-4" /> {/* Sorting indicator */}
                </th>
                <th className="px-4 py-2 text-left">Name <FontAwesomeIcon icon={faArrowDown} /></th>
                <th className="px-4 py-2 text-left">Type <FontAwesomeIcon icon={faArrowDown} /></th>
                <th className="px-4 py-2 text-left">
                  Status <FontAwesomeIcon icon={faArrowDown} />
                </th>
                <th className="px-4 py-2 text-left">Action <FontAwesomeIcon icon={faArrowDown} /></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100"> {/* Hover effect for rows */}
                  <td className="px-4 py-2 flex items-center">
                    <input type="checkbox" className="mr-2" checked={item.isSelected} onChange={() => handleCheckboxChange(index)} />
                    
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.type}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        item.status === 'Active' ? 'bg-green-500' : 'bg-purple-600'
                      }`}
                      style={{ fontSize: '20px', backgroundColor: 'grey' ,color:'green'}} 
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex justify-start">
                    <button className="mr-2 text-gray-700 hover:text-blue-700" onClick={() => handleEdit(index)}> {/* Adjusted button color */}
                    <img className=" max-w-4" src="/asset/icons/edit.png" />
                    </button>
                    <button className="text-gray-700 hover:text-red-700" >
                    <img className=" max-w-4" src="/asset/icons/delete2.svg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DocumentTemplates;
