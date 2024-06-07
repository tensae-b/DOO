import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "@tanstack/react-router";

interface Workflow {
  _id: string;
  workflowName: string;
  status: string;
  createdAt: string;
  categoryName: string;
  subCategoryName: string;
}

interface User {
  _id: string;
  username: string;
  role: {
    _id: string;
    name: string;
    permissions: string[];
  };
}

const UserEnd = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [assignedByMeRows, setAssignedByMeRows] = useState<Workflow[]>([]);
  const [assignedToMeRows, setAssignedToMeRows] = useState<Workflow[]>([]);
const user: any = localStorage.getItem("user");
    const userData = JSON.parse(user);

    const userId = userData._id;

  const fetchAssignedByMeWorkflows = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/initiate/workflows/owner/${userId}`);
      const data = await response.json();

      // Set rows with _id as id
      setAssignedByMeRows(data.map((row, index) => ({ ...row, id: `assignedByMe-${row._id}` })));
    } catch (error) {
      console.error("Error fetching assigned by me workflows:", error);
    }
  };

  const fetchAssignedToMeWorkflows = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/initiate/userWorkflow/${userId}`);
      const data = await response.json();

      // Set rows with _id as id
      setAssignedToMeRows(data.map((row, index) => ({ ...row, id: `assignedToMe-${row._id}` })));
    } catch (error) {
      console.error("Error fetching assigned to me workflows:", error);
    }
  };

  fetchAssignedByMeWorkflows(userId);
  fetchAssignedToMeWorkflows(userId);

  if (!user) return <div>Loading...</div>; // Handle case where user data is not yet loaded

  const { permissions } = userData.role;

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Modified columns with link rendering for workflowName
  const assignedByMeColumns = [
    { 
      field: "workflowName", 
      headerName: "Workflow Name", 
      width: 224,
      renderCell: (params) => (
        <Link
          className="cursor-pointer text-blue-500 underline"
          to={`/assignedbymedetails/${params.row._id}`} // Use _id as row id
        >
          {params.value}
        </Link>
      )
    },
    { field: "status", headerName: "Status", width: 224 },
    { field: "createdAt", headerName: "Creation Date", width: 224 },
  ];

  // Modified columns for "Assigned to Me" page
  const assignedToMeColumns = [
    { 
      field: "workflowName", 
      headerName: "Workflow Name", 
      width: 224,
      renderCell: (params) => (
        <Link
          className="cursor-pointer text-blue-500 underline"
          to={`/assignedtomedetails/${params.row._id}`} // Use _id as row id
        >
          {params.value}
        </Link>
      )
    },
    { field: "status", headerName: "Status", width: 224 },
    { field: "createdAt", headerName: "Creation Date", width: 224 },
  ];

  return (
    <div className="mt-12 flex gap-6">
      <div className="w-3/4 h-full pl-6 pr-2 border border-gray-900 border-opacity-5">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {permissions.includes('create-workflow') && (
            <Tab
              label="Assigned by Me"
              className={`text-sm ${selectedTab === 0 ? 'border-b-2 border-purple-900' : 'border-b-2 border-gray-700'}`}
            />
          )}
         {permissions.includes('get-assigned')&&(
            <Tab
              label="Assigned to Me"
              className={`text-sm ${selectedTab === 1 ? 'border-b-2 border-purple-900' : 'border-b-2 border-gray-700'}`}
            />
          )} 
        </Tabs>
        {selectedTab === 0 && (
          <Box p={3}>
            <DataGrid
              rows={assignedByMeRows}
              columns={assignedByMeColumns}
              autoHeight
              disableSelectionOnClick
              className="gap-10"
              pageSize={5} // Set the number of rows per page to 5
            />
          </Box>
        )}
        {selectedTab === 1 && (
          <Box p={3}>
            <DataGrid
              rows={assignedToMeRows}
              columns={assignedToMeColumns} // Use assignedToMeColumns for "Assigned to Me" page
              autoHeight
              disableSelectionOnClick
              className="gap-10"
              pageSize={5} // Set the number of rows per page to 5
            />
          </Box>
        )}
      </div>
      <div className="border border-opacity-5 w-96 flex flex-col gap-4 px-8 py-4">
  <h4 className="text-lg font-semibold text-purple-900">User Permissions</h4>
  <ul className="list-disc">
  {permissions.includes("get-assigned") && (
    <li className="text-sm text-gray-500">You are only allowed to receive assignments; you cannot initiate any workflows.</li>
  )}
  {permissions.includes("create-workflow") && (
    <li className="text-sm text-gray-500">You are only allowed to initiate workflows; nobody can assign workflows to you.</li>
  )}
  {permissions.includes("get-assigned") && permissions.includes("create-workflow") && (
    <li className="text-sm text-gray-500">You are allowed both to receive assignments and to initiate workflows.</li>
  )}
</ul>

</div>

    </div>
  );
};

export default UserEnd;
