import React, { useEffect, useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { fetchUser, sendUser, resendUser, activateUser, deactivateUser } from "../services/api/usersApi";
import { DataGrid, GridColDef, GridActionsCellParams } from "@mui/x-data-grid";

export const Route = createFileRoute("/invite-user")({
  component: () => <InviteNewUser />,
});

const useActivationButton = (initialStatus) => {
  const [buttonText, setButtonText] = useState(initialStatus === "Activated" ? "Deactivate" : "Activate");
  const [buttonColor, setButtonColor] = useState(initialStatus === "Activated" ? "#00B0AD" : "#00B0AD");

  useEffect(() => {
    setButtonText(initialStatus === "Activated" ? "Deactivate" : "Activate");
    setButtonColor(initialStatus === "Activated" ? "#00B0AD" : "#00B0AD");
  }, [initialStatus]);

  return { buttonText, buttonColor };
};

const columns = (handleStatusChange, handleAction) => [
  { field: "username", headerName: "Username", headerClassName: 'field-header', width: 150 },
  { field: "email", headerName: "Email", headerClassName: 'field-header', width: 300 },
  { field: "role_id", headerName: "Role ID", headerClassName: 'field-header', width: 150 },
  {
    field: 'activationStatus',
    headerName: 'Status',
    width: 150,
    renderCell: (params: GridActionsCellParams<any>) => {
      const { buttonText, buttonColor } = useActivationButton(params.row.activationStatus);

      return (
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => handleStatusChange(params.row)}
            className={`flex gap-2 px-4 py-2 bg-[#EEE4E0] rounded-lg text-white`}
            style={{ color: buttonColor }}
          >
            <img src="/asset/icons/dot.png" className="w-5" style={{ color: buttonColor }} />
            {buttonText}
          </button>
        </div>
      );
    },
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    sortable: false,
    renderCell: (params) => {
      const buttonText = params.row.accountCreationStatus === "Sent" ? "Resend" : "Send";

      return (
        <button className='border border-red-500 px-9 rounded-md text-red-500 mr-3' onClick={() => handleAction(params.row)}>
          {buttonText}
        </button>
      );
    },
  },
];

function InviteNewUser() {
  const [users, setUsers] = useState([]);
  const [refreshButtonText, setRefreshButtonText] = useState("Refresh");

  const fetchData = useCallback(async () => {
    try {
      const { data, isError } = await fetchUser();
      if (!isError && data && data.users) {
        const updatedData = data.users.map((user) => ({
          id: user._id,
          username: user.username,
          email: user.email,
          role_id: user.role_id,
          activationStatus: user.activationStatus,
          isSelected: false,
          accountCreationStatus: user.accountCreationStatus,
        }));
        setUsers(updatedData);
      } else {
        console.error('Invalid response data:', data);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (row) => {
    try {
      if (row.activationStatus === "Activated") {
        await deactivateUser(row.id);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === row.id ? { ...user, activationStatus: "Deactivated" } : user
          )
        );
      } else {
        await activateUser(row.id);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === row.id ? { ...user, activationStatus: "Activated" } : user
          )
        );
      }
    } catch (error) {
      console.error('Error changing user status:', error);
      console.error('Request details:', error.config);
    }
  };

  const handleAction = async (row) => {
    try {
      if (row.accountCreationStatus === "Sent") {
        await resendUser(row.username);
      } else {
        await sendUser([row.username]);
      }
      fetchData(); // Refresh data to get updated statuses
    } catch (error) {
      console.error('Error sending invitation:', error);
    }
  };

  const sendCheckedUsers = async () => {
    try {
      const selectedUsernames = users
        .filter((row) => row.isSelected)
        .map((row) => row.username);
      await sendUser(selectedUsernames);
    } catch (error) {
      console.error('Error sending invitations:', error);
    }
  };

  return (
    <div className="mx-3">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 my-5">
              <h2 className="text-[#4A176D] text-3xl font-bold">User Management</h2>
              <p className="text-[#667085] text-base"> placeholder</p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white" onClick={sendCheckedUsers}>
                <img src="/asset/icons/export.svg" className="w-5" />
                invite
              </button>
            </div>
          </div>
          <div className="h-full w-full mt-3">
            <DataGrid
              rows={users}
              columns={columns(handleStatusChange, handleAction)}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowSelectionModelChange={(selectionModel) => {
                const selectedIds = new Set(selectionModel);
                setUsers((prevUsers) =>
                  prevUsers.map((user) => ({
                    ...user,
                    isSelected: selectedIds.has(user.id),
                  }))
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteNewUser;
