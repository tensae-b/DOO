import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { fetchUser, sendUser,resendUser,activateUser,deactivateUser,fetchWorkflow} from "../services/api/usersApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from 'axios';

export const Route = createFileRoute("/invite-user")({
  component: () => <InviteNewUser />,
});

const columns: GridColDef[] = [
  { field: "username", headerName: "Username", headerClassName: 'field-header', width: 150 },
  { field: "email", headerName: "Email", headerClassName: 'field-header', width: 300 },
  { field: "role_id", headerName: "Role ID", headerClassName: 'field-header', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    type: 'actions',
    renderCell: (params: GridActionsCellParams<any>) => {
      const [buttonText, setButtonText] = useState(params.row.status === "Activated" ? "Deactivated" : "Activated");
      const buttonColor = params.row.status === "Activated" ? "#00B0AD" : "#4A176D";
      const [button, setButtonCol] = useState( params.row.status === "Activated" ? "#00B0AD" : "#4A176D");
      const [isLoading, setIsLoading] = useState(false);
     const onActive = async () => {
  try {
    const userId = params.row.id;
    console.log('Activating user:', userId);
    const { data } = await activateUser(userId);
    console.log({ data });
    setButtonText("Deactivated"); // Update state directly
  } catch (error) {
    console.error('Error activating user:', error);
  }
};

const onInActive = async () => {
  try {
    const userId = params.row.id;
    console.log('Deactivating user:', userId);
    const { data } = await deactivateUser(userId);
    console.log({ data });
    setButtonText("Activated"); // Update state directly
  } catch (error) {
    console.error('Error deactivating user:', error);
  }
};

      const imageSrc =  "/asset/icons/dot.png" ;

      return (
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => {
              params.row.status === "Activated" ? onInActive() : onActive();
            }}
            className={`flex gap-2 px-4 py-2 bg-[#EEE4E0] rounded-lg text-white`}
            style={{ color: "#00B0AD"}}
          >
            <img src={imageSrc} className="w-5"   style={{ color: "#00B0AD"}}/>
            {buttonText}
          </button>
        </div>
      );
    },
  },
  //
  // New column for Action
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    sortable: false,
    renderCell: (params) => {
      const onClick = async () => {
        try {
          const username = params.row.username;
          console.log('Sending invitation to user:', username);

          // Call either resendUser or sendUser based on accountCreationStatus
          if (params.row.accountCreationStatus === "Sent") {
            const { data } = await resendUser(username);
            console.log({ data });
          } else {
            const { data } = await sendUser([username]);
            console.log({ data });
          }
        } catch (error) {
          console.error('Error sending invitation:', error);
        }
      };

      const buttonText = params.row.accountCreationStatus === "Sent" ? "Resend" : "Send";

      return (
        <button className='border border-red-500 px-9 rounded-md text-red-500 mr-3' onClick={onClick}>{buttonText}</button>
      );
    },
  },
];

function InviteNewUser() {
  const [user, setUser] = useState([]); 
  const [refreshButtonText, setRefreshButtonText] = useState("Refresh");


  const fetchData = async () => {
    try {
      const { data } = await fetchUser();
      // Extracting necessary fields and updating the state
      const updatedData = data.users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        role_id: user.role_id,
        status: user.activationStatus, // Include status property
        isSelected: false, // Initialize isSelected property
        accountCreationStatus: user.accountCreationStatus // Add accountCreation property
      }));
      setUser(updatedData);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // Other functions like toggleSelection and sendCheckedUsers remain the same
  const sendCheckedUsers = async () => {
    try {
      const selectedUsernames = user
        .filter((row) => row.isSelected)
        .map((row) => row.username);
      console.log(selectedUsernames); // Extract usernames of selected users

      // Check if "accountCreation" property exists
      const isAccountCreationExist = user.some((row) => row.accountCreation);

      if (isAccountCreationExist) {
        // If "accountCreation" exists, change button text to "Resend"
        console.log("Resend functionality to be implemented...");
      } else {
        // If "accountCreation" doesn't exist, proceed with "Send" functionality
        const { data } = await sendUser(selectedUsernames);
        console.log({ data });
      }
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
            <div className="flex gap-4 justify-center items-center ">
              <button className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white" onClick={sendCheckedUsers}>
                <img src="/asset/icons/export.svg" className="w-5" />
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
              onRowSelectionModelChange={(selectionModel) => {
                const selectedIds = new Set(selectionModel);
                setUser((prevUser) =>
                  prevUser.map((user) => ({
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
