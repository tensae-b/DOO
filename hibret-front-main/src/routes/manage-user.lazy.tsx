import { createLazyFileRoute, Link } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/manage-user")({
  component: () => <ManageUser />,
});
import { getUsers, useActivate } from "../services/queries/userQuery";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 230 },
  { field: "email", headerName: "email", width: 330 },
  { field: "role", headerName: "role", width: 230 },
  { field: "activated", headerName: "activated", width: 230 },
];
function ManageUser() {
  const { mutateAsync: activate }: any = useActivate();
  async function deactivate(id: any, activated: any) {
    const res = await activate({ id, activated });
    console.log(res);
    //  console.log(activated)
  }

  const { data } = getUsers();
  

  return (
    <div className="mx-3">
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
                
                className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white"
              >
                <img src="/asset/icons/export.svg" className="w-5" />
                Export
              </button>
            </div>
          </div>
          <div className="tab flex flex-col mb-10">
            <div className="tabs flex gap-7">
              <div className="flex flex-col gap-3 items-center">
              <Link to="/manage-user" className="[&.active]:font-bold">
            All
          </Link>
              <hr className=" w-12 text-[#EFEFF4]"/>
              </div>
               <div className="flex flex-col gap-3 items-center justify-center">
               <Link to="/invite-user" className="[&.active]:font-bold">
               Invitation
          </Link>
               <hr className=" w-36 bg-[#4A176D]"/>
               </div>
             
            </div>
            <hr className=" max-w-36 text-[#EFEFF4]"/>
          </div>
      {data && <div className=" h-full w-full mt">
          <DataGrid
            rows={data.docs}
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
            }}
          />
        </div>}
      {/* <div className="mt-32 mx-10 flex flex-col gap-10">
        {data &&
          data.docs.map((item: any) => (
            <div className="flex gap-10">
              <h1>{item.email}</h1>
              <p>{item.role}</p>
              {item.activated ? (
                <button
                  className="bg-black text-white p-5"
                  onClick={() => {
                    deactivate(item.id, item.activated);
                  }}
                >
                  {" "}
                  deactivate
                </button>
              ) : (
                <button
                  className="bg-black text-white p-5"
                  onClick={() => {
                    deactivate(item.id, item.activated);
                  }}
                >
                  activate
                </button>
              )}

              <br />
            </div>
          ))}
      </div> */}
    </div>
    </div>
    </div>
  );
}
