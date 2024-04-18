import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure the path is correct
import { faEdit, faTrash,faSort,faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';



const DocumentTemplates = () => {
  const styles = {
    tableCell: {
      padding: '4px 16px', // Adjust padding as needed
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: '#1DC4A9',
      marginRight: 10, // Adjust margin as needed
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 15,
      borderRadius: 20,
      backgroundColor: '#EEE4E0',
      color: '#19216a ',
      padding: '5px 5px', // Adjust padding as needed
      width: 100, // Adjust width as needed
    },
    activeText: {
      // Add styles for active state here (if needed)
      display: 'flex',
      alignItems: 'center',
      fontSize: 15,
      borderRadius: 20,
      backgroundColor: '#1DC4A9',
     
      width:150,
      color:'white',
      marginTop:100,
      marginRight: 700
    },
    texter:{
      color: 'hsl(252.43243243243245, 65.68047337278107%, 33.13725490196079%) ',
      fontSize: '1.6rem', // Adjust font size as needed
      marginBottom: '10px',
      fontWeight:'bold',
      width:150
      
    }
  };


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
        <div style={styles.flexContainer}>
          <div style={styles.texter}>Document Template
          
          </div>
          <div style={styles.activeText}>
            <button>
                   Add template
                    </button></div>
                    </div>
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
      <div style={styles.flexContainer}>
        
        <span style={styles.textContainer}>
        <div style={styles.circle}></div>
          <span className="active-text">{item.status}</span>
        </span>
      </div>
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
