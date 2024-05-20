import { useEffect, useState } from "react";
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
import StageCondition from "../components/stageCondition";
import axios from "axios";

export const Route = createFileRoute("/workflowadd")({
  component: () => <WorkFlowAddTemp />,
});

function WorkFlowAddTemp() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [chosenDocuments, setChosenDocument] = useState<any[]>([]);
  function getSubCategory(value: any) {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/subCategory/cat/${value}`,
      headers: {},
    };

    axios(config)
      .then(function (response: { data: any }) {
        console.log(response.data);
        setSubCategory(response.data);
        console.log(subCategory);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }
  function requriedDocument(subCategoryId: any) {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/documentTemplate/sub/${subCategoryId}`,
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        setRequiredDocuments(response.data.templates);
        console.log(response.data.templates, "documenttemplate");
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  function getCategory() {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/admin/category",
      headers: {},
    };
    axios(config)
      .then(async function (response) {
        console.log(response.data);
        setCategory(response.data);

        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        return error;
        // console.log(error);
      });
  }
  const handleDeleteDocument = (title: any) => {
    console.log(title);
    setChosenDocument((prevDocuments) =>
      prevDocuments.filter((doc) => doc.title !== title)
    );
  };
  useEffect(() => {
    getCategory();
  }, []);
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

    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      stageTitle: "",
      hasCondition: "",
      allowAdditional: "",
      // documents:[],
      listCondition: "",
      group: "",
      department: "",
      Committee: "",
      role: "",
      permissionType: "",
      conditions: [
        {
          operator: "",
          condition: "",
          group: "",
          department: "",
          role: "",
          permissionType: "",
          Committee: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "workflowtemp",
  });

  const handleConditionChange = (index: any, newCondition: any) => {
    const newConditions: any = [...stageCondition];
    newConditions[index] = newCondition;
    setStageCondition(newConditions);
  };

  const handleGroupChange = (index: any, newCondition: any) => {
    const newConditions: any = [...stageGroup];
    newConditions[index] = newCondition;
    setStageGroup(newConditions);
  };

  const onSubmit = (data: any) => {
    console.log(data.workflowtemp, "template data");
  };
  return (
    <FormProvider {...methods}>
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-[75%]"
              >
                <div className="flex mt-10 gap-5">
                  <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10 w-full">
                    {/* section1 */}
                    <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                      <h3
                        className="text-[#00B0AD] text-1xl font-bold"
                        id=" Workflow Information"
                      >
                        Workflow Information
                      </h3>
                      {/* Document Name */}
                      <div className="mt-4">
                        <label
                          htmlFor="workflowName"
                          className="text-sm w-full"
                        >
                          Workflow Name*
                        </label>
                        <input
                          type="text"
                          id="WorkflowName"
                          {...register("workflowtemp.workflowName", {
                            required: true,
                          })}
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
                          <select
                            className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                            {...register("workflowtemp.workflowCategory", {
                              required: true,
                            })}
                            onChange={(e: { target: { value: any } }) =>
                              getSubCategory(e.target.value)
                            }
                          >
                            <option value="">Select Department</option>
                            {category?.map((option: any, index) => (
                              <option
                                key={index}
                                label={option.name}
                                value={option._id}
                              />
                            ))}
                          </select>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-2">
                          <label className="text-sm w-full">
                            Workflow Subcategory*
                          </label>
                          <select
                            className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                            {...register("workflowtemp.workflowSubcategory", {
                              required: true,
                            })}
                            onChange={(e: { target: { value: any } }) =>
                              requriedDocument(e.target.value)
                            }
                          >
                            <option value="">Select Department</option>
                            {subCategory?.map((option: any, index) => (
                              <option
                                key={index}
                                label={option.name}
                                value={option._id}
                              />
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* section 2 */}
                    <div>
                      <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                        <h3
                          className="text-[#00B0AD] text-1xl font-bold"
                          id="Required Documents"
                        >
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
                            <select
                              className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                              onChange={(e: { target: { value: any } }) => {
                                setChosenDocument((prevDocuments) => [
                                  ...prevDocuments,
                                  e.target.value,
                                ]);
                              }}
                            >
                              <option>Choose Required Documents</option>
                              {requiredDocuments?.map((option: any, index) => (
                                <option
                                  key={index}
                                  label={option.title}
                                  value={option.title}
                                />
                              ))}
                            </select>
                          </div>
                          <div className="flex gap-4 justify-center items-center w-full">
                            <input
                              type="checkbox"
                              // {...register("workflowtemp.allowAdditional")}
                            />
                            <label
                              htmlFor="additionalInfo"
                              className="text-sm w-full"
                            >
                              Allow Additional Information
                            </label>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <label
                            htmlFor="documentName"
                            className="text-sm w-full"
                          >
                            Order of appearance
                          </label>

                          {chosenDocuments.map((item, index) => (
                            <div className="flex gap-2">
                              <img src="/asset/icons/order.svg" />
                              <p className="text-[#667085] text-sm">{item}</p>
                              <div>
                                <img
                                  onClick={() => {
                                    handleDeleteDocument(item);
                                  }}
                                  src="/asset/icons/delete.svg"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* section 3 */}
                    <div className="condition-stages flex flex-col gap-7  border border-[#EFEFF4] rounded-lg  p-6">
                      <div className="flex flex-col gap-7">
                        {fields.map((field, index) => (
                          <div key={index}>
                            <div className="flex flex-col gap-5 mb-7">
                              <div className="flex justify-between w-full">
                                <h3
                                  className="text-[#00B0AD] text-xl font-bold"
                                  id="Stages"
                                >
                                  Stages
                                </h3>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="max-w-10"
                                >
                                  <img src="/asset/icons/delete.svg" />
                                </button>
                              </div>

                              {/* stage */}
                              <h2 className="text-[#667085] text-xl">
                                Stage_{index + 1}
                              </h2>
                              <div className="flex flex-col gap-5 w-full items-center justify-center">
                                <div className="flex flex-col gap-4 w-full">
                                  <label
                                    htmlFor="stageTitle"
                                    className="text-sm w-full"
                                  >
                                    Stage Title*
                                  </label>
                                  <input
                                    type="text"
                                    id="stagetitle"
                                    {...register(
                                      `workflowtemp.${index}.stageTitle`,
                                      { required: true }
                                    )}
                                    className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                                    required
                                  />
                                </div>
                                <div className="flex gap-5 w-full">
                                  <div className="flex gap-4 justify-center items-center ">
                                    <input
                                      type="checkbox"
                                      {...register(
                                        `workflowtemp.${index}.hasCondition`
                                      )}
                                      onChange={(e) => {
                                        handleConditionChange(
                                          index,
                                          e.target.checked
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor="hasCondition"
                                      className="text-sm w-full"
                                    >
                                      Stage has conditions?
                                    </label>
                                  </div>
                                  <div>
                                    <select
                                      {...register(
                                        `workflowtemp.${index}.ListCondition`
                                      )}
                                      className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                                    >
                                      <option>Select Condition</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {stageCondition[index] && (
                              <StageCondition
                                conditionIndex={index}
                                {...{ control, register }}
                              />
                            )}
                            {!stageCondition[index] && (
                              <div
                                key={field.id}
                                className="flex flex-col gap-5 w-full items-center justify-center mb-6"
                              >
                                {/* Document Name */}

                                <div className="flex gap-5 w-full">
                                  <div className="flex gap-4 justify-center items-center">
                                    <div
                                      role="group"
                                      aria-labelledby="my-radio-group "
                                      className="w-full flex gap-10 "
                                    >
                                      <div className="flex gap-2">
                                        <input
                                          type="radio"
                                          {...register(
                                            `workflowtemp.${index}.group`
                                          )}
                                          value="single"
                                          onChange={(e) => {
                                            handleGroupChange(
                                              index,
                                              e.target.value
                                            );
                                          }}
                                          defaultChecked
                                        />
                                        <label>Single Person</label>
                                      </div>
                                      <div className="flex gap-2">
                                        <input
                                          type="radio"
                                          {...register(
                                            `workflowtemp.${index}.group`
                                          )}
                                          value="committee"
                                          onChange={(e) => {
                                            handleGroupChange(
                                              index,
                                              e.target.value
                                            );
                                          }}
                                        />
                                        <label>Committee</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {stageGroup[index] == "committee" ? (
                                  <div className="w-full flex flex-col gap-2">
                                    <label className="text-sm w-full">
                                      Select Committee*
                                    </label>
                                    <select
                                      {...register(
                                        `workflowtemp.${index}.Committee`
                                      )}
                                      className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3"
                                    >
                                      <option>Select Committee</option>
                                    </select>
                                  </div>
                                ) : (
                                  <div className="w-full flex flex-col gap-2">
                                    <div className="w-full flex flex-col gap-2">
                                      <label className="text-sm w-full">
                                        Select Department*
                                      </label>
                                      <select
                                        {...register(
                                          `workflowtemp.${index}.department`
                                        )}
                                        className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3"
                                      >
                                        <option>Select Department</option>
                                      </select>
                                    </div>
                                    <div className="w-full flex gap-6">
                                      <div className="w-full flex flex-col gap-2">
                                        <label className="text-sm w-full">
                                          Select Role**
                                        </label>
                                        <select
                                          {...register(
                                            `workflowtemp.${index}.role`
                                          )}
                                          className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3"
                                        >
                                          <option>Select Role</option>
                                        </select>
                                      </div>
                                      <div className="w-full flex flex-col gap-2">
                                        <label className="text-sm w-full">
                                          Permission Type*
                                        </label>
                                        <select
                                          {...register(
                                            `workflowtemp.${index}.permissionType`
                                          )}
                                          className="text-[#667085] bg-white w-full text-sm border border-[#EFEFF4] rounded-lg p-3"
                                        >
                                          <option>Permission Type</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            append({
                              stageTitle: "",
                              hasCondition: "",
                              listCondition: "",
                              group: "",
                              department: "",
                              role: "",
                              permissionType: "",
                            })
                          }
                          className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
                        >
                          Add stage
                        </button>{" "}
                        {/* section 4*/}
                      </div>
                      <button
                        type="submit"
                        className=" w-full text-base px-6 py-2 text-[#00B0AD] bgt-white rounded-lg border border-[#00B0AD] flex items-center justify-center gap-3"
                      >
                        <img src="/asset/icons/plus-black.svg" /> Submit
                      </button>
                    </div>
                  </div>
                  <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
                    <p className="text-sm font-bold p-2">Quick Access</p>
                    <a
                      href="#Workflow Information"
                      className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]"
                    >
                      Workflow Information
                    </a>
                    <a href="#Required Documents" className="text-sm  p-2">
                      Required Documents
                    </a>
                    <a href="#Stages" className="text-sm  p-2">
                      Stages
                    </a>
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
