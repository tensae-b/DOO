import React from "react";
import toast from "react-hot-toast";
import { DataGrid, GridColDef, GridActionsCellParams } from "@mui/x-data-grid";

const subCatagoryView = (modalData: any) => {
  console.log({ modalData });
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 230 },
    { field: "name", headerName: "Sub-catagory Name", width: 230 },
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
        };

        const onDelete = () => {
          // Handle delete functionality for the specific row
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
  return (
    <DataGrid
      rows={modalData.data}
      getRowId={(row) => row._id}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      onRowSelectionModelChange={(id) => {
        console.log(id);
      }}
    />
  );
};

export default subCatagoryView;
