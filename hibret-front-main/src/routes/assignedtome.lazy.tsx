import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { workuser } from "../services/api/userworkApi";
import SideBar2 from "../components/SideBar2";
import UserName from "../components/UserName";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Route = createFileRoute("/assignedtome")({
  component: () => <AssignWork />,
});

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => (
      <Link to={`/assignedtomedetails/${params.row.workflow_id}`}>
        {params.value}
      </Link>
    ),
  },
  { field: "status", headerName: "Status", width: 130 },
 

  { field: "date", headerName: "Creation Date", width: 200 },
];

function AssignWork() {
  const [user, setUser] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [acceptanceStatus, setAcceptanceStatus] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await workuser("663c62145dd5d333dbdaaf00");
      console.log(response);
      const updatedUserData = response.data.map((item, index) => ({
        id: item.workflowId || `unknown-${index}`, // Ensure unique id for DataGrid
        workflow_id: item.workflowId || "Unknown",
        name: item.name || "Unnamed Workflow",
        status: item.status || "Unknown",
       
        date:item.createdAt
      }));
      setUser(updatedUserData);
    } catch (error) {
      console.error("Error fetching user workflow data:", error);
    }
  };

  const handleAccept = () => {
    setAcceptanceStatus("Accepted");
    console.log("Document accepted");
  };

  const handleReject = () => {
    setAcceptanceStatus("Rejected");
    console.log("Document rejected");
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
    setAcceptanceStatus(null);
  };

  return (
    <div className="flex">
      <SideBar2 />
      <div className="flex flex-col w-full ml-64">
        <UserName />
        <div className="flex flex-col mt-16 ml-8">
          <div className="flex flex-col gap-3 my-5">
            <h2 className="text-[#4A176D] text-3xl font-bold">Assigned workflow</h2>
            <p className="text-[#667085] text-base"> placeholder</p>
          </div>
          <div className="h-full w-full mt-4">
            <DataGrid
              rows={user}
              columns={columns}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowId={(row) => row.workflow_id} // Use workflow_id as row identifier
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignWork;
