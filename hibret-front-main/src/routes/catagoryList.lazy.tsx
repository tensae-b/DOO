import React, { useState, lazy, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { fetchCatag } from "../services/api/catagoryApi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import CatagAdd from "./addCatagory..lazy";
export const Route = createFileRoute("/catagoryList")({
  component: () => <CatagoryList />,
});

import { DataGrid, GridColDef, GridActionsCellParams } from "@mui/x-data-grid";
import { fetchSubCatag } from "../services/api/fetchDataApi";
import toast from "react-hot-toast";
import { Box, Modal, Typography } from "@mui/material";

// import {
//   getAllUser,
//   verifyUser,
//   useCreateNewUser,
//   filterUsers,
// } from "../services/queries/userQuery";

const userData = [
  { id: 1, catagoryname: "John Doe", Action: "Admin" },
  { id: 2, catagoryname: "Jane Smith", Action: "Editor" },
  { id: 3, catagoryname: "Michael Brown", Action: "Member" },
  { id: 4, catagoryname: "Alice Garcia", Action: "Member" },
];

function CatagoryList() {
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 230 },
    { field: "catagoryname", headerName: "catagoryname", width: 230 },
    // { field: 'accountdocument', headerName: 'accountdocument', width: 130 },
    // { field: 'accountworkflows', headerName: 'accountworkflows', width: 130 },

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

    {
      field: "View",
      headerName: "View Subcatagories",
      width: 150,
      type: "actions",
      renderCell: (params: GridActionsCellParams<any>) => {
        const view = () => {
          handleOpen();
          console.log(params.id);
          fetchSubCatag(params.id).then((result) => {
            if (!result.isError) {
              setModalData(result.data);
            } else {
              toast.error("no subcatagories");
            }
          });
        };

        return (
          <div className="flex justify-around">
            <button
              onClick={view}
              className="border border-[#36d7b7] p-3 rounded-md text-base"
            >
              view
            </button>
          </div>
        );
      },
    },
  ];
  const [user, setUser] = useState([]);
  const [showAddTemplate, setShowAddTemplate] = useState(false);
  console.log(modalData);
  useEffect(() => {
    async function fetchCategories() {
      const { data, isError } = await fetchCatag();
      if (!isError) {
        const updatedUserData = data.map((category, index) => ({
          id: category._id,
          catagoryname: category.name,
        }));
        setUser(updatedUserData);
      }
    }
    fetchCategories();
  }, []);
  const openAddTemplate = () => {
    setShowAddTemplate(true);
  };

  const closeAddTemplate = () => {
    setShowAddTemplate(false);
  };

  return (
    //integrated
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
                Catagory List
              </h2>
              {/* <Dropdown options={options} onChange={(option) => setSelectedTemplate(option)} value={selectedTemplate} placeholder="Select an option" /> */}
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={openAddTemplate}
                className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white"
              >
                <img src="/asset/icons/plus3.png" className="w-5" />
                Add Catagory
              </button>
            </div>
          </div>
          {showAddTemplate && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <CatagAdd onClose={closeAddTemplate} />
            </React.Suspense>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-white items-center justify-center absolute top-[20%] left-[60%] p-10 rounded-md">
              <div className="text-[#36d7b7] text-xl font-semibold ">
                SubCatagories
              </div>
              {modalData.map((item: any, index: any) => {
                return (
                  <div className="mx-5 my-2" key={index}>
                    {item.name}
                  </div>
                );
              })}
            </Box>
          </Modal>
          <div
            className={`h-full w-full mt  ${
              showAddTemplate ? "opacity-20" : "opacity-100"
            }`}
          >
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
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatagoryList;
