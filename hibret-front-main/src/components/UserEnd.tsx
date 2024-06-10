import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "@tanstack/react-router";

// Define your interfaces

const UserEnd = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [assignedByMeRows, setAssignedByMeRows] = useState<Workflow[]>([]);
  const [assignedToMeRows, setAssignedToMeRows] = useState<Workflow[]>([]);
  const user: any = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const userId = userData._id;

  useEffect(() => {
    const fetchAssignedByMeWorkflows = async (userId: string) => {
      try {
        const response = await fetch(
          `http://localhost:5000/initiate/workflows/owner/${userId}`
        );
        const data = await response.json();
        setAssignedByMeRows(
          data.map((row, index) => ({ ...row, id: `assignedByMe-${row._id}` }))
        );
      } catch (error) {
        console.error("Error fetching assigned by me workflows:", error);
      }
    };

    const fetchAssignedToMeWorkflows = async (userId: string) => {
      try {
        const response = await fetch(
          `http://localhost:5000/initiate/userWorkflow/${userId}`
        );
        const data = await response.json();
        setAssignedToMeRows(
          data.map((row, index) => ({ ...row, id: `assignedToMe-${row._id}` }))
        );
      } catch (error) {
        console.error("Error fetching assigned to me workflows:", error);
      }
    };

    fetchAssignedByMeWorkflows(userId);
    fetchAssignedToMeWorkflows(userId);
  }, [userId]);

  if (!user) return <div>Loading...</div>; // Handle case where user data is not yet loaded

  const { permissions } = userData.role;

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Modified columns with link rendering for workflowName
  const assignedByMeColumns = [
    // Define your columns
  ];

  // Modified columns for "Assigned to Me" page
  const assignedToMeColumns = [
    // Define your columns
  ];

  const AssignedByMeTable = () => {
    if (assignedByMeRows.length === 0) {
      return (
        <div className="flex items-center flex-col justify-center gap-2">
          <img src="/asset/nodocument.svg" className="h-44" />
          <p className="text-purple-900 font-semibold">You didnt intiate any Workflow, Currently</p>
        </div>
      );
    }

    return (
      <DataGrid
        rows={assignedByMeRows}
        columns={assignedByMeColumns}
        autoHeight
        disableSelectionOnClick
        className="gap-10"
        pageSize={5} // Set the number of rows per page to 5
      />
    );
  };

  const AssignedToMeTable = () => {
    if (assignedToMeRows.length === 0) {
      return  <div className="flex items-center flex-col justify-center gap-2">
      <img src="/asset/nodocument.svg" className="h-44" />
      <p className="text-purple-900 font-semibold" >There is  no workflow assigned to you, currently</p>
    </div>;
    }

    return (
      <DataGrid
        rows={assignedToMeRows}
        columns={assignedToMeColumns} // Use assignedToMeColumns for "Assigned to Me" page
        autoHeight
        disableSelectionOnClick
        className="gap-10"
        pageSize={5} // Set the number of rows per page to 5
      />
    );
  };

  return (
    <div className="mt-8 flex gap-2 mb-4">
      <div className="w-10/12 h-3/4 pl-6 pr-2 border border-gray-900 border-opacity-5">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {permissions.includes("create-workflow") && (
            <Tab
              label="Assigned by Me"
              className={`text-sm ${
                selectedTab === 0
                  ? "border-b-2 border-purple-900"
                  : "border-b-2 border-gray-700"
              }`}
            />
          )}
          {permissions.includes("get-assigned") && (
            <Tab
              label="Assigned to Me"
              className={`text-sm ${
                selectedTab === 1
                  ? "border-b-2 border-purple-900"
                  : "border-b-2 border-gray-700"
              }`}
            />
          )}
        </Tabs>
        {selectedTab === 0 && (
          <Box p={3}>
            <AssignedByMeTable />
          </Box>
        )}
        {selectedTab === 1 && (
          <Box p={3}>
            <AssignedToMeTable />
          </Box>
        )}
      </div>
      <div className="border border-opacity-5 w-96 flex flex-col gap-4 px-8 py-4">
  <h4 className="text-lg font-semibold text-purple-900">User Permissions</h4>
  <ul className="list-disc">
  {permissions.includes("get-assigned") && !permissions.includes("create-workflow")&&(
    <li className="text-sm text-gray-500 justify-paragraph">You are only allowed to receive assignments; you cannot initiate any workflows.</li>
  )}
  {permissions.includes("create-workflow") && !permissions.includes("get-assigned") && (
    <li className="text-sm text-gray-500 justify-paragraph">You are only allowed to initiate workflows; nobody can assign workflows to you.</li>
  )}
  {permissions.includes("get-assigned") && permissions.includes("create-workflow") && (
    <li className="text-sm text-gray-500 justify-paragraph">You are allowed both to receive assignments and to initiate workflows.</li>
  )}
</ul>

</div>
    </div>
  );
};

export default UserEnd;
