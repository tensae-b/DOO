// import { useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Dropdown from "react-dropdown";
// import { useFieldArray, useForm, FormProvider, FieldArrayMethodProps } from "react-hook-form";
// import "react-dropdown/style.css";

// export const Route = createFileRoute("/userData")({
//   component: () => <UserData />,
// });

// function UserData() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     control, 
//     formState: { errors },
//   } = useForm<any>()
//   return (
//     <div className="mx-3 mb-10 ">
//       <div className="flex">
//         <SideBar />
//         <div className="w-full flex flex-col">
//           <NavBar />
//           <div className="mt-10">
//             <div className="header flex items-center gap-3 ">
//               <a href="/assignedwork">
//                 <img src="/asset/icons/back-arrow.svg" />
//               </a>
//               </div>

//             <div className="flex mt-10 gap-5">
//               <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10 w-full">
//                 {/* section1 */}
//           <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
//             <h3 className="text-[#00B0AD] text-1xl font-bold">
//               Document Information
//             </h3>
//             {/* Document Name */}
           
//             {/* Document Type */}
            
//             </div>
//           </div>
//               </div>
//               <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
//               <p className="text-sm font-bold p-2">Quick Access</p>
//               <p className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]">
//                 Personal Information
//               </p>
//               <p className="text-sm  p-2">Account Details</p>
//               <p className="text-sm  p-2">Employment Details</p>
//             </div>
//             </div>
 
          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserData;
