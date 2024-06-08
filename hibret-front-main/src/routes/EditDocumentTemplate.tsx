import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import toast, { Toaster } from "react-hot-toast";
import Dropdown from "react-dropdown";
import {
  useFieldArray,
  useForm,
  FormProvider,
  FieldArrayMethodProps,
} from "react-hook-form";
import "react-dropdown/style.css";
import StageCondition from "../components/stageCondition";
import axios from "axios";
import {
  fetchCatag,
  fetchDepartment,
  fetchRequiredDocument,
  fetchRole,
  fetchSubCatag,
  fetchtCommittee,
} from "../services/api/fetchDataApi";

export const Route = createFileRoute("/EditDocumentTemplate")({
  component: () => <WorkFlowAddTemp />,
});
const addSection = {
  title: "trial document template",
  subCategoryId: "6662896904b1482ab5876cf1",
  sections: [
    {
      title: "loan information",
      content: [
        {
          title: "loan name",
          type: "text",
          isRequired: "true",
          conditionLogic: true,
        },
        {
          title: "loan type",
          type: "select",
          options: ["eduaction ", "business"],
          isRequired: "Optional",
        },
      ],
    },
  ],
  depId: "6661c53bfc6f3eba0d27b7de",
  categoryId: "6662896104b1482ab5876cb8",
};

function WorkFlowAddTemp() {


  const [category, setCategory] = useState([]);
  const [department, setDepartment] = useState([]);
  const [committee, setCommittee] = useState([]);
  const [role, setRoles] = useState([]);
  const [depId, setDepId] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [requiredDocuments, setRequiredDocuments] = useState<any[]>([]);
  const [chosenDocuments, setChosenDocument] = useState<any[]>([]);
  const navigate = useNavigate();

 






  const [stageCondition, setStageCondition] = useState([]);
  const [stageGroup, setStageGroup] = useState([]);
  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  const { control, reset } = methods;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      sectionTitle: "",
      sectionType: "",
      sectionRequired: "",
      sectionCondition: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "document",
  });


  const onSubmit = (data: any) => {
    console.log(data.workflowtemp, "template data");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/admin/workflow-templates",
      headers: {},
      data: data.workflowtemp,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("Successfully toasted!");

        navigate({ to: "/workflowtemp" });
      })
      .catch(function (error) {
        console.log(error);

        toast.error("please try again");
      });
  };

  return (
    <FormProvider {...methods}>
      <Toaster position="top-center" reverseOrder={false} />
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
                  Edit Document Template
                </h2>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full"
              >
                <div className="flex mt-10 gap-5">
                  <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10 w-full">
                    {/* section1 */}
                    <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                      <h3
                        className="text-[#00B0AD] text-1xl font-bold"
                        id=" Workflow Information"
                      >
                        Document Information
                      </h3>
                      {/* Document Name */}
                      <div className="mt-4">
                        <label
                          htmlFor="workflowName"
                          className="text-sm w-full"
                        >
                          Document Name*
                        </label>
                        <input
                          type="text"
                          id="documentName"
                          {...register("document.name", {
                            required: true,
                          })}
                          placeholder={addSection.title}
                          className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                          required
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="workflow.department"
                          className="text-sm w-full"
                        >
                         department
                        </label>
                        <p>{addSection.depId}</p>
                        
                      </div>
                      {/* Document Type */}
                      <div className="flex w-full gap-3">
                        <div className="w-full flex flex-col justify-center gap-2">
                          <label className="text-sm w-full">
                          Catagory
                          </label>
                        <p>{addSection.categoryId}</p>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-2">
                          <label className="text-sm w-full">
                          SubCatagory
                          </label>
                          <p>{addSection.subCategoryId}</p>
                          
                        </div>
                      </div>
                    </div>

                    {/* section 2 */}
                    <div>
                      <div className="my-4">
                        <label
                          htmlFor="documentName"
                          className="text-[#00B0AD] text-xl font-bold "
                        >
                          Section Title*
                        </label>
                        <input
                          type="text"
                          id="documentName"
                          {...register("document.sections.name", {
                            required: true,
                          })}
                          placeholder={addSection.sections[0].title}
                          className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                          required
                        />
                      </div>
                      {addSection.sections[0].content.map((item, index) => (
                        <div className="flex flex-col gap-4">
                          <h3 className="text-[#00B0AD] text-lg font-bold my-3">
                            {" "}
                            Section {index + 1}
                          </h3>
                          <div className="flex flex-col gap-4 w-full">
                            <label
                              htmlFor="sectionTitle"
                              className="text-sm w-full"
                            >
                              title
                            </label>
                            <input
                              type="text"
                              id="sectiontitle"
                              {...register(
                                `document.section.content.${index}.title`,
                                { required: true }
                              )}
                              placeholder={
                                addSection.sections[0].content[index].title
                              }
                              className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                              required
                            />
                          </div>
                          <div className="flex flex-col gap-4 w-full">
                            <label
                              htmlFor="stageTitle"
                              className="text-sm w-full"
                            >
                              type
                            </label>
                            <select
                              id="sectiontype"
                              {...register(
                                `document.section.content.${index}.type`,
                                { required: true }
                              )}
                              defaultValue={
                                addSection.sections[0].content[index].type
                              }
                              className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                              required
                            >
                              <option value="text">text</option>
                              <option value="textarea">textarea</option>
                              <option value="select">select</option>
                              <option value="upload">upload</option>
                              <option value="date">date</option>
                              <option value="number">number</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-4 w-full">
                            <label
                              htmlFor="sectionTitle"
                              className="text-sm w-full"
                            >
                             is it Required
                            </label>
                            <div className= "flex gap-3"> 
                              <div className= "flex gap-3"> 
                              <label>true</label>
                            <input
                              type="radio"
                              id="required"
                              {...register(
                                `document.section.content.${index}.required`,
                                { required: true }
                              )}
                             
                             
                              required
                            />
                            
                            </div>
                            <div className= "flex gap-3">
                            <label>false</label>
                            <input
                              type="radio"
                              id="required"
                              {...register(
                                `document.section.content.${index}.required`,
                                { required: true }
                              )}
                              
                       
                              
                             
                              required
                            />
                           
                            </div>
                            </div>
                            
                          </div>
                          <div className="flex gap-3 w-full">
                            <label
                              htmlFor="sectionTitle"
                              
                            >
                             condition
                            </label>
                            <input
                              type="checkbox"
                              id="required"
                              {...register(
                                `document.section.content.${index}.condition`,
                                { required: true }
                              )}
                             
                              
                              required
                            />
                          </div>
                        </div>
                      ))}

                      {fields.map((field, index) => (
                        <div key={index}>
                          <div className="flex flex-col gap-4 w-full">
                            <label
                              htmlFor="stageTitle"
                              className="text-sm w-full"
                            >
                              title
                            </label>
                            <input
                              type="text"
                              id="sectiontitle"
                              {...register(
                                `document.section.${index}.sectionTitle`,
                                { required: true }
                              )}
                              className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                              required
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          append({
                            sectionTitle: "",
                          })
                        }
                        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
                      >
                        Add section
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default WorkFlowAddTemp;
