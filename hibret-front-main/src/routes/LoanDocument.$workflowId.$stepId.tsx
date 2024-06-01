import "quill/dist/quill.snow.css";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import NavBar from "../components/NavBar";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
// import toast, { Toaster } from "react-hot-toast";
import { FormBuilder } from "../components/FormBuilder";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useState } from "react";

import useStepFormStore, { useFiles } from "../store/formStore";
import useStore from "../store/formStore";
import SideBar2 from "../components/SideBar2";

interface FormDataItem {
  title: string;
  content: {
    title: string;
    type: string;
    isRequired: boolean;
    _id: string;
    value: string;
  }[];
  multiple: boolean;
  _id: string;
}

export const Route = createFileRoute("/LoanDocument/$workflowId/$stepId")({
  loader: async ({ params: { workflowId, stepId } }) => {
 
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/workflow-templates/requiredDoc/${workflowId}`,
      headers: {},
    };
     
    const res = await axios(config);
    const data = await res.data;
    const addField=   {

      _id: '',
  
      title: 'Additional Data',
  
     
  
      sections: [
  
        {
  
          multiple: false,
  
          title: 'Additional info',
  
          content: [
  
            {
  
              title: 'Additional data',
  
              type: 'add-data',
  
              isRequired: false,
  
              _id: ''
  
            },
  
  
          ],
  
          _id: ''
  
        }
  
      ],
  
      
  
    }
    
    const formated = data.documents.flat();
   
    const additional= data.additional
if (additional){
    formated.push(addField)
}
    return { workflowId, stepId, formated, additional };
  },
  notFoundComponent: () => {
    return <p>step not found</p>;
  },
  component: LoanDocument,
});

function LoanDocument() {
  const [formdata, setFormData]= useState<FormDataItem[]>([])

  useEffect(()=>{
    setStepData(
      {
      templateId: step.formated[step.stepId]._id,
      title: step.formated[step.stepId].title,
      sections: formdata,
    });
  },[formdata])
  const navigate = useNavigate();
  const stepFormData = useStepFormStore((state: any) => state.stepFormData);
  const clearStepData = useStepFormStore((state: any) => state.clearFormData);
  const setStepData = useStepFormStore((state: any) => state.setStepFormData);
  const files = useFiles();
   console.log(files)
  const user: any=  localStorage.getItem('user');
  const userId = JSON.parse(user);

  // const setData = useStepFormStore((state:any) => state.setStepFormData)
  // const formdata: any[] = [];

  const step: any = Route.useLoaderData();
  
  
  
  const defaultValues = { sections: step.formated[step.stepId].sections };

  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues,
  });
  const { control, handleSubmit, reset } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "sections",
  });



  const onSubmit = async (data: any) => {
    // event?.preventDefault();
   
    const formData = new FormData();
    // Get files from Zustand state
   console.log(files)
  

    
    if (nextId ) {

      location.replace(
        `/LoanDocument/${step.workflowId}/${Number(step.stepId) + 1}`
      );
    }
  

    data.sections.map((content: any, index: any) => {
       console.log(content)
      setFormData([...formdata, content]);
      
      // content.content.map((item:any, index:any)=>{
      //   console.log(item.value)
      //   if(item.type == 'upload'){
       
      //   files.append('myfile',item.value)
      //   }
      // })
      
     
      // alert(JSON.stringify(content, null, 2));
    });
    console.log()
    files.forEach((file: any) => {
      console.log(file)
      formData.append('files', file);
    });


  
  //  console.log(files)
    // setForm(formdata);

    setStepData(
      {
      templateId: step.formated[step.stepId]._id,
      title: step.formated[step.stepId].title,
      sections: formdata,
    });

    // setStepData(
    //   ,)
    // useStepFormStore.setState((state: any) => ({
     
    // }));
     
    console.log(stepFormData, "stepformdata")
    
    if (!nextId ) {
      const documentData = {
        workflowTemplateId: step.workflowId,
        userId: userId._id,
        reqDoc: stepFormData,
        addDoc: {}
       
     
      };

      formData.append('documentData', JSON.stringify(documentData));
    

      // for (const key in documentData) {
      //   if (documentData.hasOwnProperty(key)) {
      //     console.log(documentData)
      //     formData.append(key, documentData[key]);
      //   }
      // }
     console.log(formData, 'dd')

   

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/admin/workflows",
        headers: {},
        formData
        

        // params: documentData,
       
      };
      
      axios(config)
        .then(function (response) {
          console.log(documentData, "document");
          console.log(JSON.stringify(response.data));
          toast.success("Successfully submited!");
                  // navigate({ to: "/document" });
          clearStepData();
        })
        .catch(function (error) {
          console.log(documentData, "document");
          toast.error("Please try again");
          console.log(error);
          clearStepData();
        });
      
//persistenet data deleted
      
    }
  };

  const done = "border border-[#4A176D] bg-[#4A176D]  border-double";
  const current = "border border-[#4A176D] border-2";
  const next = "border border-[#C6C6C6]";

  function addMore() {
    append(step.formated[step.stepId].sections);
  }

  function removeSection(sectionIndex: number) {
    remove(sectionIndex);
  }
  let nextId: boolean;
  if (Number(step.stepId) < step.formated.length - 1 ||(Number(step.stepId) ==step.formated.length && step.additonal) ) {
    nextId = true;
  } else {
    nextId = false;
  }

  return (
    <FormProvider {...methods}>
      <div className="mx-3 mb-10 ">
        <div className="flex">
          <SideBar2 />
          <div className="w-full flex flex-col ml-80 mr-8">
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
                    Cancel {stepFormData.LoanType}
                  </button>
                </div>
              </div>
              <div className="steps-bar flex w-full justify-center my-10">
                {step.formated.map((item: any, index: any) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <div className="flex gap-0 items-center justify-center">
                      <div className="flex flex-col">
                        <a
                          href={`/LoanDocument/${step.workflowId}/${index}`}
                          className={`flex p-5 w-12 h-12 justify-center items-center rounded-full max-w-20 max-h-20 ${
                            index == step.stepId
                              ? current
                              : index < step.stepId
                              ? done
                              : next
                          }`}
                        >
                          <img
                            className="max-w-10 max-h-10"
                            src={`${
                              index < step.stepId
                                ? "/asset/icons/tick.svg"
                                : index == step.stepId
                                ? "/asset/icons/dot.svg"
                                : ""
                            }`}
                          />
                        </a>
                      </div>
                      {index < step.formated.length - 1 && (
                        <img src="/asset/icons/Line.svg" />
                      )}
                    </div>
                    <p className="max-w-[20px] text-[#6F6F6F] text-xs">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-[#4A176D] text-2xl font-bold">
                {step.formated[step.stepId].title}
              </h2>
              <div className="flex mt-10 gap-5">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5 w-[75%]"
                >
                  <div className="form flex flex-col gap-4">
                    {fields?.map((item: any, parentIndex: number) => (
                      <div
                        key={parentIndex}
                        className="section1 flex flex-col p-6 border border-[#EFEFF4] gap-4 rounded-lg"
                      >
                       
                        <h3
                          id={`${item.title}`}
                          className="text-[#00B0AD] text-xl font-bold"
                        >
                          {item.title}
                        </h3>
                        <hr className="bg-[#EFEFF4]" />
                        {item?.content.map((content: any, idx: number) => {
                          return (
                            <div className="" key={idx}>
                              <FormBuilder
                                {...content}
                                index={idx}
                                parentIndex={parentIndex}
                              />
                            </div>
                          );
                        })}
                        <div className="flex gap-3 ">
                          {item.multiple == true && (
                            <button
                              type="button"
                              className="flex w-full justify-center items-center border border-[#00B0AD] text-[#00B0AD] p-2"
                              onClick={() => addMore()}
                            >
                              <img src="/asset/icons/plus-black.svg" /> Add more
                            </button>
                          )}

                          {item.multiple == true && fields.length > 1 && (
                            <button
                              type="button"
                              className="flex w-full justify-center items-center border border-[#00B0AD] text-[#00B0AD] p-2"
                              onClick={() => removeSection(parentIndex)}
                            >
                              <img src="/asset/icons/plus-black.svg" /> Remove
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                
                  
                  <button
                    type="submit"
                    className="text-base px-6 py-2 self-end bg-[#00B0AD] text-white"
                  >
                    {nextId || step.additional ? "continue" : "submit"}
                  </button>

                  <DevTool control={control} />
                </form>
             
                <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
                  <p className="text-sm font-bold p-2">Quick Access</p>
                  {step.formated[step.stepId].sections.map(
                    (item: any, index: any) => (
                      <a
                        className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]"
                        href={`#${item.title}`}
                      >
                        {item.title}
                      </a>
                    )
                  )}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
