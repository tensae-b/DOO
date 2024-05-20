import { Key, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldArray,
} from "formik";
import { FormBuilderTrial } from "../components/FormBuilderTrial";
import "react-dropdown/style.css";
import axios from "axios";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export const Route = createFileRoute("/documenttempadd")({
  component: () => <DocumentAddTemp onClose={undefined} />,
});

const addSection = [
  {
    sectionId: String(new Date().getTime()),
    title: "Sections",
    content: [
      { title: "title", type: "text" },
      {
        title: "type",
        type: "select",
        options: ["text", "textarea", "select", "upload"],
      },
      {
        title: "isRequired",
        type: "radio",
        options: ["true", "Optional"],
      },
      {
        title: "Eligible-as-condition-criteria",
        type: "checkbox",
      },
    ],
  },
];
// const transformData = () => {};

function DocumentAddTemp({ onClose }) {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

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
  function getCategory(config: any) {
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
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/admin/category",
      headers: {},
    };

    getCategory(config);
  }, []);
  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <Formik
            initialValues={{
              content: addSection,
            }}
            onSubmit={async (values: { documentvalue: any }) => {
              await new Promise((r) => setTimeout(r, 500));
              // console.log(values);
              axios
                .post("http://localhost:5000/admin/documentTemplate", {
                  ...values.documentvalue,
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              console.log(values.documentvalue);
              // alert(JSON.stringify(values.documentvalue, null, 2));
            }}
          >
            {({ values }) => (
              <div className="">
                <div className="flex  mb-4">
                  <a href="/documenttemp">
                    <img
                      src="/asset/icons/back-arrow.svg"
                      className="w-8 h-8 mr-2"
                    />
                  </a>
                  <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
                    {/* Adjust width and height */}
                    <h2 className="text-[#4A176D] text-3xl font-bold">
                      Add New Document Template
                    </h2>
                  </button>
                </div>

                <Form>
                  <div className="mb-6 rounded-lg overflow-hidden flex flex-col gap-10">
                    {/* section1 */}
                    <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-lg">
                      <h3 className="text-[#00B0AD] text-1xl font-bold">
                        Document Information
                      </h3>
                      {/* Document Name */}
                      <div className="mt-4">
                        <label
                          htmlFor="documentvalue.title"
                          className="text-sm w-full"
                        >
                          Document Name*
                        </label>
                        <Field
                          type="text"
                          name="documentvalue.title"
                          className="border rounded-md p-2 mt-1 w-full" // Set width to full and remove fixed width
                          required
                        />
                      </div>
                      {/* Document Type */}
                      <div className="flex w-full gap-3">
                        <div className="w-full flex flex-col justify-center gap-2">
                          <label className="text-sm w-full">
                            Document Category*
                          </label>
                          <Field
                            name="documentvalue.categoryId"
                            as="select"
                            className="border rounded-md p-2 mt-1 w-full"
                            onChange={(e: { target: { value: any } }) =>
                              getSubCategory(e.target.value)
                            }
                            required
                          >
                            <option label="Select" value="" />
                            {category?.map((option: any, index) => (
                              <option
                                key={option}
                                label={option.name}
                                value={option._id}
                              />
                            ))}
                          </Field>
                        </div>
                        <div className="w-full flex flex-col justify-center gap-2">
                          <label className="text-sm w-full">
                            Document Subcategory*
                          </label>
                          <Field
                            name="documentvalue.subCategoryId"
                            as="select"
                            className="border rounded-md p-2 mt-1 w-full"
                            required
                          >
                            <option label="Select" value="" />
                            {subCategory?.map((option: any, index) => (
                              <option
                                key={option}
                                label={option.name}
                                value={option._id}
                              />
                            ))}
                          </Field>
                        </div>
                      </div>
                    </div>
                    {/* section2 */}

                    <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
                      <div className="flex flex-col w-full gap-7">
                        <label className="text-[#00B0AD] text-xl font-bold">
                          Section Title*
                        </label>
                        <Field
                          type="text"
                          name={`documentvalue.sections[0].title`}
                          className="border rounded-md p-2 mt-1 w-full"
                          required
                        />
                        <FieldArray name="content">
                          {({ push, remove }) => (
                            <div>
                              {values.content.length > 0 &&
                                values.content.map(
                                  (
                                    contents: { content: any[] },
                                    idx: Key | null | undefined
                                  ) => {
                                    return (
                                      <>
                                        {console.log(contents)}
                                        <hr />
                                        <div className="flex justify-between   ">
                                          {/* <h3 className="text-[#00B0AD] text-xl font-bold">
                                      {addSection[0].title}
                                    </h3>  */}
                                          {idx > 0 && (
                                            <div onClick={() => remove(idx)}>
                                              <img
                                                src="/asset/icons/delete.svg"
                                                className="max-w-6"
                                              />
                                            </div>
                                          )}
                                        </div>

                                        <div key={idx}>
                                          {contents.content.map(
                                            (data: any, i: any) => (
                                              <FormBuilderTrial
                                                {...data}
                                                index={idx}
                                                // parentIndex={idx}
                                              />
                                            )
                                          )}
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              <button
                                type="button"
                                className="flex items-center justify-center text-center w-full text-[#00B0AD] text-base border border-[#00B0AD] rounded-lg p-2"
                                onClick={() => {
                                  const newSection = {
                                    ...addSection[0],
                                    sectionId: String(new Date().getTime()),
                                  };
                                  try {
                                    push(newSection);
                                    console.log("Section added");
                                  } catch (error) {
                                    console.error(
                                      "Error occurred while adding section:",
                                      error
                                    );
                                  }
                                }}
                              >
                                Add More fields
                              </button>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end items-center mt-6">
                    <button
                      type="submit"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-base py-2 px-4 rounded"
                    >
                      Publish Template
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default DocumentAddTemp;
