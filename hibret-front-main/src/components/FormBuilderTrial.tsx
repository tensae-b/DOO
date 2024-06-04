// import { ErrorMessage } from "@hookform/error-message";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import clsx from "clsx";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { set, useFormContext } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useEffect } from "react";
import { collapseClasses } from "@mui/material";
import { useFormikContext } from "formik";

export const FormBuilderTrial = ({
  title,
  type,
  options,
  index,
}: //   required,
//   parentIndex,
any) => {
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };
  const [viewOptions, setViewOptions] = useState(false);
  const formik = useFormikContext();
  const [optionCount, setOptionCount] = useState([1]);
  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleInput = () => {
    if (type === "select") {
      return (
        <>
          <Field
            as="select"
            name={`documentvalue.sections[0].content.${index}.${title}`}
            required
            className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
            onChange={(e) => {
              if (e.target.value == "select") {
                setViewOptions(true);
                formik.setFieldValue(
                  `documentvalue.sections[0].content.${index}.type`,
                  "select"
                );
              } else {
                setViewOptions(false);
                formik.setFieldValue(
                  `documentvalue.sections[0].content.${index}.type`,
                  e.target.value
                );
              }
            }}
          >
            <option label="Select" value="" />
            {options?.map((option: any) => (
              <option key={option} label={option} value={option} />
            ))}
          </Field>
          {viewOptions && (
            <div className="my-4 flex flex-col gap-4">
              {optionCount.map((item, id) => (
                <div className="flex gap-2">
                  <Field
                    type="text"
                    placeholder="options"
                    className="border rounded-md p-2"
                    name={`documentvalue.sections[0].content.${index}.options.${id}`}
                  />
                  <div
                    onClick={() => {
                      formik.setFieldValue(
                        `documentvalue.sections[0].content[${index}].options`,
                        (prevOptions) =>
                          prevOptions.filter((option) => option.id !== id)
                      );
                    }}
                  >
                    {" "}
                    X{" "}
                  </div>
                </div>
              ))}

              <div
                className="bg-[#00B0AD] text-white text-base p-2 rounded-lg"
                onClick={() => {
                  setOptionCount((prevArray) => [...prevArray, 2]);
                  console.log(optionCount);
                }}
              >
                add options
              </div>
            </div>
          )}
        </>
      );
    } else if (type === "text") {
      return (
        <>
          {/* <label htmlFor={`content.${index}.${title}`}>{title}</label> */}
          <Field
            type="text"
            id={`content.${index}.${title}`}
            name={`documentvalue.sections[0].content.${index}.${title}`}
            className="border rounded-md p-2 mt-1 w-full"
            required
          />
        </>
      );
    }
    //  else if (type === "upload") {
    //   return (
    //     <>
    //       <div
    //         className={clsx("flex items-center justify-center w-full", {
    //         //   [errorClassNames.join(" ")]: errors?.[title],
    //         })}
    //       >
    //         <label
    //           htmlFor="dropzone-file"
    //           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
    //         >
    //           <div className="flex flex-col items-center justify-center pt-5 pb-6">
    //             <img
    //               src="/asset/icons/upload-icon.svg"
    //               className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
    //             />

    //             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
    //               <span className="font-semibold">Click to upload</span> or drag
    //               and drop
    //             </p>
    //             <p className="text-xs text-gray-500 dark:text-gray-400">
    //               PDF, CSV, and JPEG (MAX. 800x400px)
    //             </p>
    //           </div>
    //           <input
    //             type="file"
    //             required={required}
    //             // accept="image/png, image/gif, image/jpeg"
    //             // onChange={(e) =>
    //             //   validateDocumentImage(
    //             //     `section.${parentIndex}.content[${index}].value`,
    //             //     e.target.files[0]
    //             //   )
    //             // }
    //           />
    //         </label>
    //       </div>
    //       <span className="label-text-alt text-[hsl(var(--er))]">
    //         <ErrorMessage
    //         //   errors={errors}
    //           name={`section.${parentIndex}.content[${index}].value`}
    //         />
    //       </span>
    //     </>
    //   );
    // }
    else if (type == "radio") {
      return (
        <>
          <div
            role="group"
            aria-labelledby="my-radio-group "
            className="w-full flex gap-10 "
          >
            {options?.map(
              (
                option:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              ) => (
                <label>
                  <Field
                    type="radio"
                    name={`documentvalue.sections[0].content.${index}.${title}`}
                    required
                    value={option}
                  />
                  {option == "true" ? "required" : "optional"}
                </label>
              )
            )}
          </div>
        </>
      );
    } else if (type == "checkbox") {
      return (
        <Field
          type="checkbox"
          name={`documentvalue.sections[0].content.${index}.${title}`}
        />
      );
    }
    //     else {
    //   // console.log(editorContent);
    //   return (
    //     <>
    //       <div className="w-full">
    //         <ReactQuill
    //           theme="snow"
    //           modules={modules}
    //           formats={formats}
    //           placeholder="write your content ...."
    //         //   value={editorContent}
    //         //   onChange={(editorState) =>
    //             // onEditorStateChange(
    //             //   `section.${parentIndex}.content[${index}].value`,
    //             //   editorState
    //             // )
    //         //   }
    //         />
    //       </div>
    //       <span className="label-text-alt text-[hsl(var(--er))]">
    //         <ErrorMessage
    //         //   errors={errors}
    //           name={`section.${parentIndex}.content[${index}].value`}
    //         />
    //       </span>
    //     </>
    //   );
  };

  return (
    <div>
      <div className="my-3">
        <label className="label">
          <span className="label-text">{title}</span>
        </label>

        {handleInput()}
        {/* <HandleInput /> */}
        {/*         
        <button onClick={() => remove(index)}>Remove</button> */}
      </div>
    </div>
  );
};
