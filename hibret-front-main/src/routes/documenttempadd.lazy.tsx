import { useState } from "react";
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

export const Route = createFileRoute("/documenttempadd")({
  component: () => <DocumentAddTemp onClose={undefined} />,
});
const addSection = [
  {
    sectionId: 1,
    title: "Sections",
    content: [
      
      { title: "Section-Header", type: "text" },
      {
        title: "Section-Type",
        type: "select",
        options: [
          "Short-Text",
          "Long-Text",
          "Select-options",
          "Uploaded-Document",
        ],
      },
      {
        title: "Section-Necessity",
        type: "radio",
        options: ["Required", "Optional"],
      },
      {
        title: "Eligible-as-condition-criteria",
        type: "checkbox",
      },
    ],
  },
];
function DocumentAddTemp({ onClose }) {
  return (
    <div className="w-full h-fit max-w-[865px] absolute top-32 right-72 bg-white z-20 px-10 py-4 border-2 rounded-lg">
      <Formik
        initialValues={{
          content: addSection[0].content
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <div className="">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={onClose}
                className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <img
                  src="/asset/icons/back-arrow.svg"
                  className="w-8 h-8 mr-2"
                />{" "}
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
                    <label htmlFor="documentName" className="text-sm w-full">
                      Document Name*
                    </label>
                    <Field
                      type="text"
                      name="documentName"
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
                        name="documentCategory"
                        type="text"
                        className="border rounded-md p-2 mt-1 w-full"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                      <label className="text-sm w-full">
                        Document Subcategory*
                      </label>
                      <Field
                        name="documentSubcategory"
                        type="text"
                        className="border rounded-md p-2 mt-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                {/* section2 */}

                {addSection.map((item) => (
                  
                  <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
                    <h3 className="text-[#00B0AD] text-1xl font-bold">
                      {item.title}
                    </h3>
                    <div className="flex flex-col w-full gap-3">
                      <FieldArray name="content">
                        {({ push }) => (
                          <div>
                            {values.content.length > 0 &&
                            values.content.map((contents, idx) => {
                              {
                                console.log({ addSection }, "here");
                              }
                              return (
                                <div key={idx}>
                                  <FormBuilderTrial
                                    // title={contents.title}
                                    // type={contents.type}
                                    // options={contents.options}
                                    {...contents}
                                    index={idx}
                                    // parentIndex={parentIndex}
                                  />
                                </div>
                              );
                            })}
                            <button
                              type="button"
                              onClick={() => {
                                try {
                                  push({ 
                                    ...addSection[0].content
                                  });
                                  console.log("Section added");
                                } catch (error) {
                                  console.error("Error occurred while adding section:", error);
                                }
                              }}
                            >
                              add
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                ))}
                {/* <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
                <h3 className="text-[#00B0AD] text-1xl font-bold">Sections</h3>
                <div className="flex flex-col w-full gap-3">
                  <div className="w-full flex flex-col justify-center gap-2">
                    <label className="text-sm w-full">Section Header*</label>

                    <Field
                      type="text"
                      name="sectionHeader"
                      className="border rounded-md p-2 mt-1 w-full"
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2">
                    <label className="text-sm w-full">Section Type*</label>
                    <Field
                      component="select"
                      name="documentType"
                      className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                    >
                      <option value="short-text">Short text</option>
                      <option value="long-text">
                        Long text(one sentence and above)
                      </option>
                      <option value="select">
                        Select field(with multiple options)
                      </option>
                      <option value="upload">uploaded document</option>
                    </Field>
                  </div>

                  <div className="flex flex-col gap-5 h-fit">
                    <label className="text-sm w-full">Section Necessity</label>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group "
                      className="w-full flex gap-10 "
                    >
                      <label>
                        <Field type="radio" name="required" value="required" />
                        required
                      </label>
                      <label>
                        <Field type="radio" name="required" value="optional" />
                        optional
                      </label>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                      <Field
                        type="checkbox"
                        className="w-4 h-4 text-white bg-[#4A176D] border-gray-300"
                        name="eligible"
                      />
                      <label htmlFor="eligible" className="text-sm w-full">
                        Eligible as condition criteria{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>

              <div className="flex items-center justify-center text-center w-full text-[#00B0AD] text-base border border-[#00B0AD] rounded-lg p-2">
                {" "}
                <img src="/asset/icons/plus-black.svg" />
                Add More Sections
              </div>
              {/* Submit Button */}
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
  );
}

export default DocumentAddTemp;
