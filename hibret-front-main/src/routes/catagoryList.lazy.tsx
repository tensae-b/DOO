import React, { useState, lazy, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SubCatagoryView from "../components/subCatagoryView";
import {
  DeleteCatag,
  EditCatag,
  fetchCatag,
} from "../services/api/catagoryApi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import CatagAdd from "../components/addCatagory..lazy";
export const Route = createFileRoute("/catagoryList")({
  component: () => <CatagoryList />,
});

import { DataGrid, GridColDef, GridActionsCellParams } from "@mui/x-data-grid";
import { fetchSubCatag } from "../services/api/fetchDataApi";
import toast from "react-hot-toast";
import { Box, Modal, Typography } from "@mui/material";

function CatagoryList() {
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [editCatagory, setEditCatagory] = useState(false);
  const [catagoryName, setCatagoryName] = useState("");
  const [catagoryId, setCatagoryId] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const [newCatagory, setNewCatagory] = useState("");
  const handleClose = () => setOpen(false);
  const catagoryClose = () => setEditCatagory(false);
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
          console.log({ params });

          setCatagoryName(params.row.catagoryname);
          setCatagoryId(params.id);
          setEditCatagory(true);
        };

        const onDelete = () => {
          // Handle delete functionality for the specific row
          DeleteCatag(params.id).then((result) => {
            if (!result.isError) {
              console.log("deleted");
              setReload(!reload);
              toast.success("Deleted");
            } else {
              toast.error("no subcatagories");
            }
          });
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
  const [reload, setReload] = useState(true);
  const [showAddTemplate, setShowAddTemplate] = useState(false);
  console.log(modalData);

  useEffect(() => {
    async function fetchCategories() {
      const { data, isError } = await fetchCatag();
      if (!isError) {
        const updatedUserData = data.map((category: any, index: any) => ({
          id: category._id,
          catagoryname: category.name,
        }));
        setUser(updatedUserData);
      }
    }
    fetchCategories();
  }, [reload]);
  const openAddTemplate = () => {
    setShowAddTemplate(true);
  };

  const closeAddTemplate = () => {
    setShowAddTemplate(false);
    setReload(!reload);
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
          {showAddTemplate && <CatagAdd closePopup={closeAddTemplate} />}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-white items-center justify-center absolute top-[20%] left-[30%] h-[300px] p-10 rounded-md">
              <div className="text-[#36d7b7] text-xl font-semibold ">
                SubCatagories
              </div>

              <SubCatagoryView data={modalData} />
              {/* {modalData.map((item: any, index: any) => {
                return (
                  <div className="mx-5 my-2" key={index}>
                    {item.name}
                  </div>
                );
              })} */}
            </Box>
          </Modal>

          <Modal
            open={editCatagory}
            onClose={catagoryClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-white items-center justify-center absolute top-[20%] left-[30%] p-10 rounded-md">
              <div className=" flex gap-4">
                <input
                  type="text"
                  placeholder={catagoryName}
                  className="border"
                  onChange={(e) => {
                    setNewCatagory(e.target.value);
                  }}
                />
                <button
                  className="bg-[#00B0AD] p-2 rounded-lg text-white"
                  onClick={() => {
                    EditCatag(catagoryId, newCatagory).then((result) => {
                      if (!result.isError) {
                        console.log("deleted");
                        setReload(!reload);
                        toast.success("Deleted");
                      } else {
                        toast.error("no subcatagories");
                      }
                    });
                  }}
                >
                  Edit
                </button>
              </div>
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
