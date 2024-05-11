import React, { useState, useEffect, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DataGrid, GridColDef, GridActionsCellParams } from '@mui/x-data-grid';

export const Route = createFileRoute("/documentemp")({
  component: () => <DocumentTemp />,
});

const DocumentAddTemp = lazy(() => import("./documenttempadd.lazy"));

function DocumentTemp() {
  const [user, setUser] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const options = ['Template one', 'Template two', 'Template three'];
  const [showAddTemplate, setShowAddTemplate] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/admin/documentTemplate`);
      const transformedData = response.data.map(template => ({
        id: template._id,
        title: template.title,
        subCategory: template.subCategoryId.name,
        conditionLogic: template.conditionLogic ? "True" : "False",
      }));
      setUser(transformedData);
    } catch (error) {
      console.error('Error fetching user workflow data:', error);
    }
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'subCategory', headerName: 'Sub Category', width: 200 },
    { field: 'conditionLogic', headerName: 'Condition Logic', width: 200 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 200,
      type: 'actions',
      renderCell: (params: GridActionsCellParams<any>) => {
        const onEdit = () => {
          // Handle edit functionality for the specific row
          console.log('Edit button clicked for row:', params.id);
          // Implement logic to open an edit form or modal here (consider passing data)
        };
  
        const onDelete = () => {
          // Handle delete functionality for the specific row
          console.log('Delete button clicked for row:', params.id);
          // Implement logic to confirm and delete the row (consider user confirmation)
        };
  
        return (
          <div className="flex justify-around">
            <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
              <img src="/asset/icons/edit.png" className="w-5"/>
            </button>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700">
              <img src="/asset/icons/delete.svg" className="w-5"/>
            </button>
          </div>
        );
      },
    },
  ];
  


  const openAddTemplate = () => {
    setShowAddTemplate(true);
  };

  const closeAddTemplate = () => {
    setShowAddTemplate(false);
  };

  return (
    <div className="mx-3">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className={`flex justify-between ${showAddTemplate ? "opacity-20" : "opacity-100"}`} >
            <div className="flex flex-col gap-3 my-5 opa">
              <h2 className="text-[#4A176D] text-3xl font-bold">Document Template</h2>
              <Dropdown options={options} onChange={(option) => setSelectedTemplate(option)} value={selectedTemplate} placeholder="Select an option" />
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button onClick={openAddTemplate} className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white">
                <img src="/asset/icons/plus3.png" className="w-5"/>
                Add New
              </button>
            </div>
          </div>
          {showAddTemplate && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <DocumentAddTemp onClose={closeAddTemplate} />
            </React.Suspense>
          )}
          <div className={`h-full w-full mt ${showAddTemplate ? "opacity-20" : "opacity-100"}`}>
            <DataGrid
              rows={user}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentTemp;
