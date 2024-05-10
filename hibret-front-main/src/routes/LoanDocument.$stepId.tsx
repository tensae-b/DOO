import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { useFieldArray, useForm, FormProvider, FieldArrayMethodProps } from "react-hook-form";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { createFileRoute } from "@tanstack/react-router";
import { FormBuilder } from "../components/FormBuilder";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
const steps = [
  {
    id: 1,
    title: "Personal information",
    section: [
      {
        sectionId: 1,
        title: "Loan Information",
        content: [
          { title: "Borrower Name", type: "text", required: true },
          {
            title: "Loan Type",
            type: "select",
            options: ["Personal", "Business"],
            required: true,
          },
        ],
        multiple: false,
      },
      {
        sectionId: 1,
        title: " Bank Information",
        content: [
          { title: "Bank account number", type: "text", required: true },
          {
            title: "Bank account type",
            type: "select",
            options: ["saving"],
            required: true,
          },
          { title: "Add another account", type: "text", required: false },
        ],
        multiple: false,
      },
    ],
  },
  {
    id: 2,
    title: "Collateral information",
    section: [
      {
        sectionId: 1,
        title: "Collateral Information",
        content: [
          { title: "Collateral Type", type: "text", required: true },
          {
            title: "Collateral Description",
            type: "text-editor",
            required: true,
          },
          { title: "Documents", type: "upload", required: true },
        ],
        multiple: true,
      },
    ],
  },
];

export const Route = createFileRoute("/LoanDocument/$stepId")({
  loader: async ({ params: { stepId } }) => {
    const res = steps.find((step) => step.id === Number(stepId));
    return res;
  },
  notFoundComponent: () => {
    return <p>step not found</p>;
  },
  component: LoanDocument,
});

function LoanDocument() {
  const step: any = Route.useLoaderData();
  
  const defaultValues = { data: step.section[0].content };
  const methods = useForm({ mode: "onChange", defaultValues });
  let [sectionAdd, setSectionAdd]= useState(0)
  const { control, handleSubmit } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "data",
  });
  const onSubmit = (data: any) => console.log(data, "submission");

  const done = "border border-[#4A176D] bg-[#4A176D]  border-double";
  const current = "border border-[#4A176D] border-2";
  const next = "border border-[#C6C6C6]";

  function addMore(sectionIndex: FieldArrayMethodProps | undefined) {
    console.log(sectionIndex)
    step.section.map((item: any)=>{
   
      if(item.sectionId== sectionIndex){
        item.content.map((sectionContent: any)=>{
          append(
            { title: sectionContent.title , type: sectionContent.type, required: sectionContent.required },
            
          );
          setSectionAdd(sectionAdd+1);
        })
      }
      
    })
    
  }

  function removeSection(sectionIndex: FieldArrayMethodProps | undefined) {
  
    step.section.map((item: any)=>{
   
      if(item.sectionId== sectionIndex){
        item.content.map((sectionContent: any)=>{
          remove(
            { title: sectionContent.title , type: sectionContent.type, required: sectionContent.required },
            
          );
          setSectionAdd(sectionAdd+1);
        })
      }
      
    })
    
  }

  return (
    <FormProvider {...methods}>
      <div className="mx-3 mb-10 ">
        <div className="flex">
          <SideBar />
          <div className="w-full flex flex-col">
            <NavBar />
            <div className="mt-10">
              <div className="header flex justify-between">
                <h2 className="text-[#00B0AD] text-3xl font-bold">
                  Loan Application Workflow
                </h2>
                <div className="flex gap-4">
                  <button
                    className={` text-base px-6 py-2  text-[#9EA9C1] border border-[#9EA9C1] border-dotted rounded-lg`}
                  >
                    Save as Draft
                  </button>
                  <button
                    className={` text-base px-6 py-2 border border-[#DC251C] border-dotted text-[#DC251C] font-semibold rounded-lg`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="steps-bar flex w-full justify-center my-10">
                {steps.map((item, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <div className="flex gap-0 items-center justify-center">
                      <div className="flex flex-col">
                        <a
                          href={`/LoanDocument/${item.id}`}
                          className={`flex p-5 w-12 h-12 justify-center items-center rounded-full max-w-20 max-h-20 ${
                            item.id == step.id
                              ? current
                              : item.id < step.id
                              ? done
                              : next
                          }`}
                        >
                          <img
                            className="max-w-10 max-h-10"
                            src={`${
                              item.id < step.id
                                ? "/asset/icons/tick.svg"
                                : item.id == step.id
                                ? "/asset/icons/dot.svg"
                                : " "
                            }`}
                          />
                        </a>
                      </div>
                      {item.id < steps.length && (
                        <img src="/asset/icons/Line.svg" />
                      )}
                    </div>
                    <p className="max-w-[20px] text-[#6F6F6F] text-xs">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <>
                <h2 className="text-[#4A176D] text-2xl font-bold">
                  {step.title}
                </h2>
                <div className="flex mt-10 gap-5">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                   

                    className="flex flex-col gap-5 w-[75%]"
                  >
                    <div className="form flex flex-col gap-4">
                      {step.section.map((item: any) => (
                       
                        <div className="section1 flex flex-col p-6 border border-[#EFEFF4] gap-4 rounded-lg">
                          <h3 className="text-[#00B0AD] text-xl font-bold">
                            {item.title}
                          </h3>
                          <hr className="bg-[#EFEFF4]" />
                          {fields.map((field, index) => {
                            return (
                              <FormBuilder
                                {...field}
                                key={index}
                                index={index}
                                remove={removeSection}
                                field={field}
                              />
                            );
                          })}
                        
                       <div className="flex gap-3 "> 
                       {item.multiple == true && (
                            <button
                              type="button"
                              className="flex w-full justify-center items-center border border-[#00B0AD] text-[#00B0AD] p-2"
                              onClick={() => addMore(item.sectionId)}
                            >
                              <img src="/asset/icons/plus-black.svg" /> Add more
                            </button>
                          )}
                          {(item.multiple == true && sectionAdd >=1) && (
                            <button
                              type="button"
                              className="flex w-full justify-center items-center border border-[#00B0AD] text-[#00B0AD] p-2"
                              onClick={() => removeSection(item.sectionId)}
                            >
                              <img src="/asset/icons/plus-black.svg" /> Remove
                            </button>
                          )}
                       </div>
                          
                        </div>
                      ))}
                    </div>
                    <button type="submit">test submit</button>
                    <a
                      href={`/LoanDocument/${step.id + 1}`}
                      className={` text-base px-6 py-2 self-end ${
                        null != null
                          ? "bg-[#00B0AD] text-white"
                          : "bg-[#F0F3F6] text-[#9EA9C1]"
                      }`}
                    >
                      Continue
                    </a>
                    <DevTool control={control} />
                  </form>
                  <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
                    <p className="text-sm font-bold p-2">Quick Access</p>
                    <p className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]">
                      Personal Information
                    </p>
                    <p className="text-sm  p-2">Account Details</p>
                    <p className="text-sm  p-2">Employment Details</p>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
