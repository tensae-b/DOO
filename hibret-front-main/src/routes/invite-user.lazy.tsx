import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
export const Route = createFileRoute("/invite-user")({
  component: () => <InviteNewUser />,
});
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import {
  getAllUser,
  verifyUser,
  useCreateNewUser,
  filterUsers,
} from "../services/queries/userQuery";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 230 },
  { field: "username", headerName: "username", width: 130 },
  { field: "email", headerName: "email", width: 330 },
  { field: "role", headerName: "role", width: 230 },
];

function InviteNewUser() {
  const userData: any = [];
  const [user, setUser] = useState([]);
  // const [selectedOption, setSelectedOption] = useState("role");
  const [filtered, setFilter] = useState({
    category: "",
    value: "",
  });
  const emailList: any = [];

  const { data, isLoading, isError } = getAllUser();
  console.log(data);

  const [fetch, setFetch] = useState(true);
  const { mutateAsync: verify }: any = verifyUser();
  const { mutateAsync: createUser } = useCreateNewUser();
  const { mutateAsync: filter }: any = filterUsers();
  function fetchData() {
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching users</div>;

    for (let i = 0; i < data.length; i++) {
      userData.push({
        id: data[i].id,
        name: data[i].name,
        username: data[i].username,
        email: data[i].email,
        role: data[i].role,
      });

      setUser(userData);
    }
  }

  useEffect(() => {
    fetchData();
  }, [!isLoading]);

  async function verifying() {
    for (let i = 0; i < emailList.length; i++) {
      let email = emailList[i].email;
      let role = emailList[i].role;
      console.log(email, role);
      const random = Math.random() * 100;
      const password = email.substring(0, 2) + Math.floor(random);

      const res = await verify({ email, password });

      console.log(res);
      if (res == "success") {
        console.log({ email, password, role });
        const userData = await createUser({ email, password, role });

        console.log({ userData });
      }
    }
  }

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
  function checked(userid: any) {
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < userid.length; j++) {
        if (user[i].id == userid[j]) {
          emailList.push({
            email: user[i].email,
            role: user[i].role,
          });
        }
      }
    }

    console.log(emailList);
  }

  async function handelSubmit() {
    const data = await filter(filtered);

    for (let i = 0; i < data.length; i++) {
      userData.push({
        id: data[i].id,
        email: data[i].email,
        role: data[i].role,
      });
      setUser(userData);
    }
    console.log(data);
  }
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
              <p className="text-[#667085] text-base"> placeholder</p>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <button
                onClick={() => {
                  verifying();
                }}
                className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white"
              >
                <img src="/asset/icons/export.svg" className="w-5" />
                invite
              </button>
            </div>
          </div>
          <div className="tab flex flex-col mb-10">
            <div className="tabs flex gap-7">
              <div className="flex flex-col gap-3 items-center">
              <Link to="/manage-user" className="[&.active]:font-bold">
            All
          </Link>{" "}
              <hr className=" w-12 text-[#EFEFF4]"/>
              </div>
               <div className="flex flex-col gap-3 items-center">
               <h3>Invitation</h3>
               <hr className=" w-36 text-[#EFEFF4]"/>
               </div>
             
            </div>
            <hr className=" max-w-36 text-[#EFEFF4]"/>
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
                console.log(id);
                checked(id);
              }}
            />
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
      <button
        className="bg-black text-white p-5 self-end"
        onClick={() => {
          verifying();
        }}
      >
        {" "}
        invite
      </button>
    </div>
  );
}
