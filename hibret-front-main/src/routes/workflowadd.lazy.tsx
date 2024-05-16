import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from "react-dropdown";
import {
  useFieldArray,
  useForm,
  FormProvider,
  FieldArrayMethodProps,
} from "react-hook-form";
import "react-dropdown/style.css";

export const Route = createFileRoute("/workflowadd")({
  component: () => <WorkFlowAddTemp />,
});

function WorkFlowAddTemp() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>();
  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className="mt-10">
            <div className="header flex items-center gap-3 ">
              <a href="/workflowtemp">
                <img src="/asset/icons/back-arrow.svg" />
              </a>
              <h2 className="text-[#4A176D] text-3xl font-bold">
                Add New Workflow Template
              </h2>
            </div>

            <div className="flex mt-10 gap-5">
              <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10 w-full">
                {/* section1 */}
                <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                  <h3 className="text-[#00B0AD] text-1xl font-bold" id=" Workflow Information">
                    Workflow Information
                  </h3>
                  {/* Document Name */}
                  <div className="mt-4">
                    <label htmlFor="documentName" className="text-sm w-full">
                      Workflow Name*
                    </label>
                    <input
                      type="text"
                      id="documentName"
                      {...register("documentName", { required: true })}
                      className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                      required
                    />
                  </div>
                  {/* Document Type */}
                  <div className="flex w-full gap-3">
                    <div className="w-full flex flex-col justify-center gap-2">
                      <label className="text-sm w-full">
                        Workflow Category*
                      </label>
                      <input
                        type="text"
                        className="border rounded-md p-2 mt-1 w-full"
                        {...register("documentCategory", { required: true })}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                      <label className="text-sm w-full">
                        Workflow Subcategory*
                      </label>
                      <input
                        type="text"
                        className="border rounded-md p-2 mt-1 w-full"
                        {...register("documentSubcategory", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                {/* section 2 */}
                <div>
                  <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                    <h3 className="text-[#00B0AD] text-1xl font-bold" id="Required Documents">
                      Required Documents
                    </h3>
                    {/* Document Name */}
                    <div className="flex flex-row gap-10 w-full items-center justify-center">
                      <div className="flex flex-col gap-4 w-full">
                        <label
                          htmlFor="documentName"
                          className="text-sm w-full"
                        >
                          Document Templates
                        </label>
                        <select className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ">
                          <option>Choose Required Documents</option>
                        </select>
                      </div>
                      <div className="flex gap-4 justify-center items-center w-full">
                        <input type="checkbox" name="additionalInfo" />
                        <label
                          htmlFor="additionalInfo"
                          className="text-sm w-full"
                        >
                          Allow Additional Information
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label htmlFor="documentName" className="text-sm w-full">
                        Order of appearance
                      </label>
                      <div className="flex gap-2">
                        <img src="/asset/icons/order.svg" />
                        <p className="text-[#667085] text-sm">Chosen Required Documents 1</p>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* section 3 */}
                 <div className="flex flex-col gap-7">
                 <div>
                  <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                    <h3 className="text-[#00B0AD] text-xl font-bold" id="Stages">
                    Stages
                    </h3>
                    {/* stage */}
                    <h2 className="text-[#667085] text-xl">Stage_01</h2>
                    <div className="flex flex-col gap-5 w-full items-center justify-center">
                     
                      <div className="flex flex-col gap-4 w-full">
                        <label
                          htmlFor="documentName"
                          className="text-sm w-full"
                        >
                         Stage Title*
                        </label>
                        <input
                      type="text"
                      id="stagetitle"
                      {...register("stagetitle", { required: true })}
                      className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                      required
                    />
                      </div>
                      <div className="flex gap-5 w-full">
                      <div className="flex gap-4 justify-center items-center ">
                        <input type="checkbox" name="additionalInfo" />
                        <label
                          htmlFor="additionalInfo"
                          className="text-sm w-full"
                        >
                          Stage has conditions?
                        </label>
                      </div>
                      <div>
                      <select className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ">
                          <option>Select  Condition</option>
                        </select>
                      </div>
                      </div>
                      
                    </div>

                    <div className="flex flex-col gap-3">
                      <label htmlFor="documentName" className="text-sm w-full">
                        Order of appearance
                      </label>
                      <div className="flex gap-2">
                        <img src="/asset/icons/order.svg" />
                        <p className="text-[#667085] text-sm">Chosen Required Documents 1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* section 4*/}
                <div>
                  <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                    
                    {/* Document Name */}
                    <h2 className="text-[#667085] text-xl">Conditon_01</h2>
                    <div className="flex flex-col gap-5 w-full items-center justify-center">
                     
                      <div className="flex flex-row items-start justify-center w-full border border-[#EFEFF4] rounded-lg">
                      <select className=" w-[10%] text-sm bg-white  border-r-2 border-[#D0D5DD] p-3 ">
                          <option className="text-[#667085]">{ `>`}</option>
                        </select>
                        <input
                      type="text"
                      id="condition"
                      {...register("condition", { required: true })}
                      className=" p-2 mt-1 w-full" // Set width to full and remove fixed width
                      required
                    />
                      </div>
                      <div className="flex gap-5 w-full">
                      <div className="flex gap-4 justify-center items-center ">
                        <div className="flex gap-2">
                        
                        <input type="radio" name="group" id='single'/>
                        <label htmlFor='single'>Single Person</label>
                        </div>
                       <div className="flex gap-2">
                       
                        <input type="radio" name="group" id='committee'/>
                        <label htmlFor='committee'>Committee</label>
                       </div>
                       
                        
                      </div>
                      
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label className="text-sm w-full">Select Department*</label>
                      <select className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ">
                          <option>Select  Department</option>
                        </select>
                      </div>
                      <div className="w-full flex gap-6">
                      <div className="w-full flex flex-col gap-2">
                        <label className="text-sm w-full">Select Role**</label>
                      <select className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ">
                          <option>Select Role</option>
                        </select>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label className="text-sm w-full">Permission Type*</label>
                      <select className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ">
                          <option>Permission Type</option>
                        </select>
                      </div>
                      </div>
                      <button type="submit" className=" w-full text-base px-6 py-2 text-[#00B0AD] bgt-white rounded-lg border border-[#00B0AD] flex items-center justify-center gap-3"><img src="/asset/icons/plus-black.svg"/> Add Variant </button>
                    </div> 

                    
                  </div>
                 
                </div>
                <button type="submit" className=" w-full text-base px-6 py-2 text-[#00B0AD] bgt-white rounded-lg border border-[#00B0AD] flex items-center justify-center gap-3"><img src="/asset/icons/plus-black.svg"/> Add More Stages </button>
                </div>
              </div>
              <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
                <p className="text-sm font-bold p-2">Quick Access</p>
                <a  href='#Workflow Information' className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]">
                Workflow Information
                </a >
                <a  href='#Required Documents'  className="text-sm  p-2">Required Documents</a>
                <a  href='#Stages'  className="text-sm  p-2">Stages</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlowAddTemp;
