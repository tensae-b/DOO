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
          content: addSection,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));

          alert(JSON.stringify(values.documentvalue, null, 2));
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
                    <label
                      htmlFor="documentvalue.documentName"
                      className="text-sm w-full"
                    >
                      Document Name*
                    </label>
                    <Field
                      type="text"
                      name="documentvalue.documentName"
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
                        name="documentvalue.documentCategory"
                        as="select"
                        className="border rounded-md p-2 mt-1 w-full"
                        required
                      >
                        <option label="Select" value="" />
                        <option label="general" value="general" />
                        <option label="contract" value="contract" />
                      </Field>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                      <label className="text-sm w-full">
                        Document Subcategory*
                      </label>
                      <Field
                        name="documentvalue.documentsubCategory"
                        as="select"
                        className="border rounded-md p-2 mt-1 w-full"
                        required
                      >
                        <option label="Select" value="" />
                        <option label="general" value="general" />
                        <option label="loan" value="loan" />
                      </Field>
                    </div>
                  </div>
                </div>
                {/* section2 */}

                <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
                  <div className="flex flex-col w-full gap-3">
                    <FieldArray name="content">
                      {({ push, remove }) => (
                        <div>
                          {values.content.length > 0 &&
                            values.content.map((contents, idx) => {
                              return (
                                <>
                                  <hr />
                                  <div className="flex justify-between my-10  ">
                                    <h3 className="text-[#00B0AD] text-xl font-bold">
                                      {addSection[0].title}
                                    </h3>
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
                                    {contents.content.map((data) => (
                                      <FormBuilderTrial {...data} index={idx} />
                                    ))}
                                  </div>
                                </>
                              );
                            })}
                          <button
                            type="button"
                            className="flex items-center justify-center text-center w-full text-[#00B0AD] text-base border border-[#00B0AD] rounded-lg p-2"
                            onClick={() => {
                              try {
                                push(addSection[0]);
                                console.log("Section added");
                              } catch (error) {
                                console.error(
                                  "Error occurred while adding section:",
                                  error
                                );
                              }
                            }}
                          >
                            Add More Sections
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
  );
}

export default DocumentAddTemp;
