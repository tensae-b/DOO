// import { useEffect, useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import SideBarUser from "../components/sidebaruser";
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import axios from 'axios';

// export const Route = createFileRoute("/assignedwork")({
//   component: () => <AssignWork />,
// });

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'workflow_name', headerName: 'Workflow Name', width: 230 },
//   { field: 'stage_num', headerName: 'Stage Num', width: 130 },
//   { field: 'stage_status', headerName: 'Stage Status', width: 140 },
//   { field: 'workflowTemplate', headerName: 'Workflow Template', width: 230 },
//   { field: 'status', headerName: 'Status', width: 130 },
// ];

// function AssignWork() {
//   const [user, setUser] = useState([]);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [acceptanceStatus, setAcceptanceStatus] = useState(null);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/admin/userWorkflow/663c5ec36ad0227294c45793`);
//       const updatedUserData = response.data.map((item) => {
//         if (item.workflows && item.workflows.length > 0 && item.workflows[0].workflowId) {
//           return {
//             id: item._id,
//             workflow_name: item.workflows[0].workflowId.workflowTemplate,
//             stage_num: item.workflows[0].workflowId.currentStageIndex,
//             stage_status: item.workflows[0].workflowId.status,
//             workflowTemplate: item.workflows[0].workflowId.workflowTemplate,
//             status: item.workflows[0].workflowId.status,
//           };
//         } else {
//           // Handle the case where workflowId is null
//           return {
//             id: item._id,
//             workflow_name: 'Unknown', // Provide a default value or handle it accordingly
//             stage_num: 'Unknown',
//             stage_status: 'Unknown',
//             workflowTemplate: 'Unknown',
//             status: 'Unknown',
//           };
//         }
//       });
//       setUser(updatedUserData);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching user workflow data:', error);
//     }
//   };
  

//   const handleRowClick = (row) => {
//     setSelectedRow(row.row);
//     setAcceptanceStatus(null); // Reset acceptance status when a new row is selected
//   };

//   const handleAccept = () => {
//     // Implement logic for accepting the document
//     setAcceptanceStatus("Accepted");
//     console.log("Document accepted");
//   };

//   const handleReject = () => {
//     // Implement logic for rejecting the document
//     setAcceptanceStatus("Rejected");
//     console.log("Document rejected");
//   };

//   const handleCloseModal = () => {
//     setSelectedRow(null);
//     setAcceptanceStatus(null); // Reset acceptance status when closing the modal
//   };

//   return (
//     <div className="mx-3 flex">
//       <SideBarUser fetchData={fetchData} style={{ flex: '1 0 20%' }} /> {/* Pass fetchData function as prop */}
//       <div className="w-full flex flex-col" style={{ flex: '1 0 80%' }}>
//         <NavBar />
//         {selectedRow ? (
//           <div className="modal fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-75 z-50">
//             <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
//               <span className=" bg-gray-200  top-0 right-0 mt-0 mr-0 rounded-lg mb-4" onClick={handleCloseModal}>
//                 <img src="/asset/icons/left-arrow.png" className="w-8 h-8 "/> 
//               </span>
//               <h2>{selectedRow.workflow_name}</h2>
//               <p>Document Name: {selectedRow.workflow_name}</p>
//               <div className="mt-4 flex justify-between">
//                 {acceptanceStatus ? (
//                   <p className="text-xl font-bold">{acceptanceStatus}</p>
//                 ) : (
//                   <>
//                     <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
//                       Accept
//                     </button>
//                     <button onClick={handleReject} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex justify-between">
//             <div className="flex flex-col gap-3 my-5">
//               <h2 className="text-[#4A176D] text-3xl font-bold">Assigned workflow</h2>
//               <p className="text-[#667085] text-base"> placeholder</p>
//             </div>
//             {/* <div className="flex gap-4 justify-center items-center ">
//               <button className="flex gap-2 bg-[#00B0AD] px-4 py-2 rounded-lg text-white">
//                 <img src="/asset/icons/export.svg" className="w-5"/>
//                 invite
//               </button>
//             </div> */}
//           </div>
//         )}
//         <div className="h-full w-full mt">
//           <DataGrid
//             rows={user}
//             columns={columns}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//             onRowClick={(row) => handleRowClick(row)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AssignWork;
