import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
export const Route = createFileRoute("/documenter")({
  component: () => <DocumentTemp />,
});
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import {
//   getAllUser,
//   verifyUser,
//   useCreateNewUser,
//   filterUsers,
// } from "../services/queries/userQuery";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 230 },
  { field: 'username', headerName: 'username', width: 130 },
  { field: 'email', headerName: 'email', width: 330 },
  {field: 'role', headerName: 'role', width: 230},
  
 
];
const userData = [
  { id: 1, name: "John Doe", username: "johndoe", email: "john.doe@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", username: "janesmith", email: "jane.smith@example.com", role: "Editor" },
  { id: 3, name: "Michael Brown", username: "michaelbrown", email: "michael.brown@example.com", role: "Member" },
  { id: 4, name: "Alice Garcia", username: "alicegarcia", email: "alice.garcia@example.com", role: "Member" },
  { id: 5, name: "David Johnson", username: "davidjohnson", email: "david.johnson@example.com", role: "Member" },
];


function DocumentTemp() {
  // const userData: any = [];
  const [user, setUser] = useState(userData);
  
  return (
   
    <div className=" mx-3" >
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 my-5">
              <h2 className="text-[#4A176D] text-3xl font-bold">User Management</h2>
              <p className="text-[#667085] text-base"> placeholder</p>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <button onClick={() => {
          
          }} className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white">
                <img src="/asset/icons/export.svg" className="w-5"/>
               invite
              </button>
            </div>
          </div>
          <div className=" h-full w-full mt">
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
          console.log(id)
          // checked(id);

        }}
      />
      </div>
        </div>
      </div>
       <button
          className="bg-black text-white p-5 self-end"
          onClick={() => {
          }}
        >
          {" "}
          invite
        </button>
    </div>
  );
}