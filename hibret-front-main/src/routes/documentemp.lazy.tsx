import React, { useState, lazy, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from "react-dropdown";

import "react-dropdown/style.css";
export const Route = createFileRoute("/documentemp")({
  component: () => <DocumentTemp />,
});
const DocumentAddTemp = lazy(() => import("./documenttempadd.lazy"));
import { DataGrid, GridColDef, GridActionsCellParams } from "@mui/x-data-grid";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 270 },
  { field: "documentTitle", headerName: "Title", width: 230 },

  {
    field: "actions",
    headerName: "Action",
    width: 150,
    type: "actions",
    renderCell: (params: GridActionsCellParams<any>) => {
      const onEdit = () => {
        // Handle edit functionality for the specific row
        console.log("Edit button clicked for row:", params.id);
        // Implement logic to open an edit form or modal here (consider passing data)
      };

      const onDelete = () => {
        // Handle delete functionality for the specific row
        console.log("Delete button clicked for row:", params.id);
        // Implement logic to confirm and delete the row (consider user confirmation)
      };

      return (
        <div className="flex justify-around">
          <button
            onClick={onEdit}
            className="text-blue-500 hover:text-blue-700"
          >
            <img src="/asset/icons/edit.png" className="w-5" />
          </button>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700"
          >
            <img src="/asset/icons/delete.svg" className="w-5" />
          </button>
        </div>
      );
    },
  },
];

function DocumentTemp() {
  // const userData: any = [];
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/admin/documentTemplate",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "document temp data");
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [user, setUser] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const options = ["Template one", "Template two", "Template three"];
  const defaultOption = options[0];
  const [showAddTemplate, setShowAddTemplate] = useState(false);
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
          <div
            className={`flex justify-between ${
              showAddTemplate ? "opacity-20" : "opacity-100"
            }`}
          >
            <div className="flex flex-col gap-3 my-5 opa">
              <h2 className="text-[#4A176D] text-3xl font-bold">
                Document Template
              </h2>
              <Dropdown
                options={options}
                onChange={(option) => setSelectedTemplate(option)}
                value={selectedTemplate}
                placeholder="Select an option"
              />
            </div>
            <div className="flex gap-4 justify-center items-center">
              <a
                href="/documenttempadd"
                className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white"
              >
                <img src="/asset/icons/plus3.png" className="w-5" />
                Add New
              </a>
            </div>
          </div>
          {showAddTemplate && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <DocumentAddTemp onClose={closeAddTemplate} />
            </React.Suspense>
          )}
          <div
            className={`h-full w-full mt  ${
              showAddTemplate ? "opacity-20" : "opacity-100"
            }`}
          >
            <DataGrid
              rows={user}
              getRowId={(row) => row._id}
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
              }}
            />
          </div>
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
