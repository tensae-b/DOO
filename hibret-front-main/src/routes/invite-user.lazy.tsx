import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UserTabs from '../components/UserTabs'
import { fetchUser } from "../services/api/usersApi";
export const Route = createFileRoute("/invite-user")({
  component: () => <InviteNewUser />,
});
import { DataGrid, GridColDef } from "@mui/x-data-grid";
let buttonName="send"

// import {
//   getAllUser,
//   verifyUser,
//   useCreateNewUser,
//   filterUsers,
// } from "../services/queries/userQuery";
import { Box } from "@mui/material";
import axios from 'axios';

const columns: GridColDef[] = [
  { field: "id", headerName:"id", headerClassName: 'field-header', width: 70 },
  { field: "name", headerName: "name", headerClassName: 'field-header',cellClassName: 'field-cell', width: 230 },
  { field: "username", headerName: "username", headerClassName: 'field-header', width: 130 },
  { field: "email", headerName: "email", headerClassName: 'field-header', width: 330 },
  { field: "role", headerName: "role", headerClassName: 'field-header', width: 230 },
  {
    field: 'action',
    headerName: 'Action',
    width: 1800,
    sortable: false,
    
    renderCell: (params) => {
        const onClick = (e) => {
          checked(params.row.id);
          const currentRow = params.row;
          console.log(params.row)
          return alert(JSON.stringify(currentRow, null, 4));
        };
        
        

        
        return (
          <div className=''>
            <button className=' border border-red-500 px-5  rounded-md text-red-500 mr-3' onClick={onClick}>{buttonName}</button>
            </div>
        );
    },
  }
];
const sampleUserData = [
  { id: 1, name: "John Doe", username: "john_doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", username: "jane_smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", username: "alice_johnson", email: "alice@example.com", role: "Editor" },
  // Add more sample data as needed
];


function InviteNewUser() {
  const userData: any = [];
  const [user, setUser] = useState(sampleUserData); 
  const [filtered, setFilter] = useState({
    category: "",
    value: "",
  });
  const emailList: any = [];
 
  // const columns: GridColDef[] = [
  //   { field: "id", headerName:"id", headerClassName: 'field-header', width: 70 },
  //   { field: "name", headerName: "name", headerClassName: 'field-header',cellClassName: 'field-cell', width: 230 },
  //   { field: "username", headerName: "username", headerClassName: 'field-header', width: 130 },
  //   { field: "email", headerName: "email", headerClassName: 'field-header', width: 330 },
  //   { field: "role", headerName: "role", headerClassName: 'field-header', width: 230 },
  //   {
  //     field: 'action',
  //     headerName: 'Action',
  //     width: 180,
  //     sortable: false,
      
  //     renderCell: (params) => {
  //         const onClick = (e) => {
  //           console.log("hey")
  //           emailList.push({
  //             email: params.row.email,
  //             role:  params.row.role,
  //           });
  //           console.log(emailList);
  //           verifying();
  //         };
          
          
  
          
  //         return (
  //           <div className=''>
  //             <button className=' border border-red-500 px-5  rounded-md text-red-500 mr-3' onClick={onClick}>{buttonName}</button>
  //             </div>
  //         );
  //     },
  //   }
  // ];

  // const { data, isLoading, isError } = getAllUser();
  // console.log(data);

  // const [fetch, setFetch] = useState(true);
  // const [popup, setPopUp] = useState(false);
  // const [popupMessage, setPopupMessage]= useState("")

  // const { mutateAsync: verify }: any = verifyUser();
  // const { mutateAsync: createUser } = useCreateNewUser();
  // const { mutateAsync: filter }: any = filterUsers();
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/getAllUsers');
      
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  // async function verifying() {
  //   for (let i = 0; i < emailList.length; i++) {
  //     let email = emailList[i].email;
  //     let role = emailList[i].role;
  //     console.log(email, role);
  //     const random = Math.random() * 100;
  //     const password = email.substring(0, 2) + Math.floor(random);

  //     const res = await verify({ email, password });

  //     console.log(res);

  //     if (res == "success") {
  //       setPopUp(true);
  //         setPopupMessage(`Email has been sent to ${email} `)
  //       setTimeout(()=>{
  //         setPopUp(false)
  //         setPopupMessage("")
  //       },3000)
        
  //       console.log({ email, password, role });
  //       const userData = await createUser({ email, password, role });

  //       console.log({ userData });
  //     }
  //   }
  // }

  // function handleChange(event: any) {
  //   if (event.target.name == "search") {
  //     setFilter((prevState) => ({
  //       ...prevState,
  //       value: event.target.value,
  //     }));
  //   } else {
  //     setSelectedOption(event.target.value);
  //     setFilter((prevState) => ({
  //       ...prevState,
  //       category: event.target.value,
  //     }));
  //   }
  // }
  // function checked(userid: any) {
  //   for (let i = 0; i < user.length; i++) {
  //     for (let j = 0; j < userid.length; j++) {
  //       if (user[i].id == userid[j]) {
  //         emailList.push({
  //           email: user[i].email,
  //           role: user[i].role,
  //         });
  //       }
  //     }
  //   }

  //   console.log(emailList);
  // }

  // async function handelSubmit() {
  //   const data = await filter(filtered);

  //   for (let i = 0; i < data.length; i++) {
  //     userData.push({
  //       id: data[i].id,
  //       email: data[i].email,
  //       role: data[i].role,
  //     });
  //     setUser(userData);
  //   }
  //   console.log(data);
  // }
  return (
    <div className=" mx-3">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          
          <NavBar />
          

          <div className="flex justify-between">
            <div className="flex flex-col gap-3 my-5">
              <h2 className="text-[#4A176D] text-3xl font-bold">
                User Management
              </h2>
              {/* {popup && (<div className=" w-full bg-[#00B0AD] text-white p-3 self-center rounded-md">
            {popupMessage}
            </div>
            )} */}
              <p className="text-[#667085] text-base"> placeholder</p>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <button
                onClick={() => {
                  // verifying();
                }}
                className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white"
              >
                <img src="/asset/icons/export.svg" className="w-5" />
                invite
              </button>
            </div>
          </div>
          <UserTabs/>
          <div className=" h-full w-full mt">
          <Box
      sx={{
       
       
        '& .field-header': {
         color: '#667085',
         fontSize: '14px',
         fontWeight: 500
        },

        '& .field-cell': {
          fontWeight: 'bold',
        },
      }}
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
                // checked(id);
              }}
            />
            </Box>
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <input
          type="text "
          placeholder="typehere"
          name="search"
          onChange={handleChange}
          required
        />
        <div>
          <label htmlFor="role"> role</label>
          <input
            type="radio"
            value="role"
            name="role"
            checked={selectedOption === "role"}
            onChange={handleChange}
          />
          <label htmlFor="email"> email</label>
          <input
            type="radio"
            value="email"
            name="email"
            checked={selectedOption === "email"}
            onChange={handleChange}
          />
        </div>
        <button onClick={handelSubmit}> filter</button>
      </div>

      <div className="mt-32 mx-10 flex flex-col gap-10">
        {user.map((item: any) => (
          <div className="flex gap-10">
            <h1>{item.email}</h1>
            <p>{item.role}</p>
            <input
              type="checkbox"
              onChange={() => {
                checked(item.email, item.role);
              }}
            />

            <br />
          </div>
        ))}
       
      </div> */}
      {/* <button
        className="bg-black text-white p-5 self-end"
        onClick={() => {
          verifying();
        }}
      >
        {" "}
        invite
      </button> */}
    </div>
  );
}
