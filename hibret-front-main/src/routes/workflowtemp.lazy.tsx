
import React, { useState, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export const Route = createFileRoute("/workflowtemp")({
  component: () => <DocumentTemp />,
});
const WorkFlowAddTemp = lazy(() => import("./workflowadd.lazy"));
import { DataGrid, GridColDef, GridActionsCellParams } from '@mui/x-data-grid';
import NoData from "../components/NoData";

// import {
//   getAllUser,
//   verifyUser,
//   useCreateNewUser,
//   filterUsers,
// } from "../services/queries/userQuery";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 230 },
  { field: 'Type', headerName: 'Type', width: 130 },
  {
    field: 'status',
    headerName: 'status',
    width: 150,
    type: 'actions',
    renderCell: (params: GridActionsCellParams<any>) => {
      const onActive = () => {
        // Handle edit functionality for the specific row
        console.log('Edit button clicked for row:', params.id);
        // Implement logic to open an edit form or modal here (consider passing data)
      };

      const onInActive = () => {
        // Handle delete functionality for the specific row
        console.log('Delete button clicked for row:', params.id);
        // Implement logic to confirm and delete the row (consider user confirmation)
      };
      const imageSrc = params.row.status === "Active" ? "/asset/icons/dot.png" : "/asset/icons/dot2.png";


      return (
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => {
              if (params.row.status === "Active") {
                onActive();
              } else {
                onInActive();
              }
            }}
            className={`flex gap-2 px-4 py-2 bg-[#EEE4E0] rounded-lg  ${
              params.row.status === "Active" ? "text-[#00B0AD]" : "text-[#4A176D]"
            }`}
          >
            <img src={imageSrc} className="w-5"/>
            {params.row.status}
          </button>
        </div>
      );
    },
  },
  {
    field: 'actions',
    headerName: 'Action',
    width: 150,
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

const userData = [
  { id: 1, name: "John Doe", Type: "johndoe", status: "Active", Action: "Admin" },
  { id: 2, name: "Jane Smith", Type: "janesmith", status: "Inactive", Action: "Editor" },
  { id: 3, name: "Michael Brown", Type: "michaelbrown", status: "Active", Action: "Member" },
  { id: 4, name: "Alice Garcia", Type: "alicegarcia", status: "Active", Action: "Member" },
]





function DocumentTemp() {
  // const userData: any = [];
  const [user, setUser] = useState(userData);
  const [selectedTemplate, setSelectedTemplate] = useState(null); 
  const [showAddTemplate, setShowAddTemplate] = useState(false);
  const options = [
    'Template one', 'Template two', 'Template three'
  ];
  const defaultOption = options[0];
  const openAddTemplate = () => {
    setShowAddTemplate(true);
  };

  // Function to close the add template pop-up
  const closeAddTemplate = () => {
    setShowAddTemplate(false);
  };
  return (
    <div className="mx-3">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          {user.length == 0 && (
            <NoData title={"Workflow"} openPopUp={openAddTemplate} />
          )}
            {showAddTemplate && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <WorkFlowAddTemp onClose={closeAddTemplate} />
        </React.Suspense>
      )}

{user.length != 0 && (
            <><div className="flex justify-between">
              <div className="flex flex-col gap-3 my-5">
                <h2 className="text-[#4A176D] text-3xl font-bold">Workflow Template</h2>
                <Dropdown options={options} onChange={(option) => setSelectedTemplate(option)} value={selectedTemplate} placeholder="Select an option" />

              </div>
              <div className="flex gap-4 justify-center items-center">
                <button onClick={openAddTemplate} className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white">
                  <img src="/asset/icons/plus3.png" className="w-5" />
                  Add New
                </button>
              </div>
            </div><div className="h-full w-full mt">
                <DataGrid
                  rows={user}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  onRowSelectionModelChange={(id) => {
                    console.log(id);
                    // checked(id);
                  } } />
              </div></>
          )}
          
        </div>
      </div>
      {/* <button
        className="bg-black text-white p-5 self-end"
        onClick={() => {
          // Handle onClick logic here
        }}
      >
        ADD Template
      </button> */}
    </div>
  );
}
