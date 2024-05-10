import { ErrorMessage } from "@hookform/error-message";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import clsx from "clsx";
import { Key } from "react";
import { useFormContext } from "react-hook-form";

export const FormBuilder = ({
  title,
  type,
  options,
  fields,
  remove,
  index,
}: any) => {
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
  const {
    register,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const errorClassNames = ["input-error", "textarea-error"];
  const validateDocumentImage = (title, file) => {
    // validate the size
    if (file.type === "application/pdf") {
      setValue(title, file);
      clearErrors(title);
    }
    if (file.type != "application/pdf") {
      setError(title, {
        type: "filetype",
        message: "Only PDFs are valid.",
      });

      return;
    }
  };
  const HandleInput = () => {
    if (type === "select") {
      return (
        <>
          <select
            {...register(`sections[${index}].value`, {
              required: `${title} is Required`,
            })}
            className={clsx(
              "text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 ",
              {
                [errorClassNames.join(" ")]: errors?.[title],
              }
            )}
            defaultValue={""}
          >
            {/* <option value="" disabled>
              {placeholder}
            </option> */}
            {options?.map((option: any, index: Key | null | undefined) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="label-text-alt text-[hsl(var(--er))]">
            <ErrorMessage errors={errors} name={`${title}`} />
          </span>
        </>
      );
    } else if (type === "text") {
      return (
        <>
          <input
            {...register(title, { required: `${title} is Required` })}
            className={clsx(
              "w-full border border-[#EFEFF4] p-3 rounded-lg text-base",
              {
                [errorClassNames.join(" ")]: errors?.[title],
              }
            )}
            placeholder=""
          />
          <span className="label-text-alt text-[hsl(var(--er))]">
            <ErrorMessage errors={errors} name={`${title}`} />
          </span>
        </>
      );
    } else if (type === "upload") {
      return (
        <>
          <div
            className={clsx("flex items-center justify-center w-full", {
              [errorClassNames.join(" ")]: errors?.[title],
            })}
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img
                  src="/asset/icons/upload-icon.svg"
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                />

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, CSV, and JPEG (MAX. 800x400px)
                </p>
              </div>
              <input
                // {...register(title)}
                {...register(title)}
                type="file"
                // accept="image/png, image/gif, image/jpeg"
                onChange={(e) =>
                  validateDocumentImage(title, e.target.files[0])
                }
              />
            </label>
          </div>
          <span className="label-text-alt text-[hsl(var(--er))]">
            <ErrorMessage errors={errors} name={`${title}`} />
          </span>
        </>
      );
    } else {
      return (
        <>
          <div className="w-full">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="write your content ...."
              onChange={(e) => setValue(title, e)}
            />
          </div>
          <span className="label-text-alt text-[hsl(var(--er))]">
            <ErrorMessage errors={errors} name={`${title}`} />
          </span>
        </>
      );
    }
  };

  return (
    <div>
      <div className="my-3">
        <label className="label">
          <span className="label-text">{title}</span>
        </label>

        {/* {handleInput()} */}
        <HandleInput />
{/*         
        <button onClick={() => remove(index)}>Remove</button> */}
      </div>
    </div>
  );
};
