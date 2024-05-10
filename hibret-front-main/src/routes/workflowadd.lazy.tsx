import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from "react-dropdown";
import { useFieldArray, useForm, FormProvider, FieldArrayMethodProps } from "react-hook-form";
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
  } = useForm<any>()
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
            <h3 className="text-[#00B0AD] text-1xl font-bold">
              Document Information
            </h3>
            {/* Document Name */}
            <div className="mt-4">
              <label htmlFor="documentName" className="text-sm w-full">
                Document Name*
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
                <label className="text-sm w-full">Document Category*</label>
                <input
                  type="text"
                  className="border rounded-md p-2 mt-1 w-full"
                  {...register("documentCategory", { required: true })}
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <label className="text-sm w-full">Document Subcategory*</label>
                <input
                  type="text"
                  className="border rounded-md p-2 mt-1 w-full"
                  {...register("documentSubcategory", { required: true })}
                />
              </div>
            </div>
          </div>
              </div>
              <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
              <p className="text-sm font-bold p-2">Quick Access</p>
              <p className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]">
                Personal Information
              </p>
              <p className="text-sm  p-2">Account Details</p>
              <p className="text-sm  p-2">Employment Details</p>
            </div>
            </div>
 
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlowAddTemp;
