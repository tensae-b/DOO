import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const Route = createFileRoute("/documenttempadd")({
  component: () => <DocumentAddTemp onClose={undefined} />,
});

function DocumentAddTemp({ onClose }) {
  // State variables to hold form data
  const [documentName, setDocumentName] = useState("");

  const [required, setRequired] = useState(true);
  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {};

  return (
    <div className="w-full h-fit max-w-[865px] absolute top-32 right-72 bg-white z-20 px-10 py-4 border-2 rounded-lg">
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <img src="/asset/icons/back-arrow.svg" className="w-8 h-8 mr-2" />{" "}
            {/* Adjust width and height */}
            <h2 className="text-[#4A176D] text-3xl font-bold">
              Add New Document Template
            </h2>
          </button>
        </div>
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
              <input
                type="text"
                id="documentName"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
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
                  required
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <label className="text-sm w-full">Document Name*</label>
                <input
                  type="text"
                  className="border rounded-md p-2 mt-1 w-full"
                  required
                />
              </div>
            </div>
          </div>
          {/* section2 */}
          <div className="flex flex-col gap-5 p-6 border border-[#EFEFF4] rounded-sm ">
            <h3 className="text-[#00B0AD] text-1xl font-bold">Sections</h3>
            <div className="flex flex-col w-full gap-3">
              <div className="w-full flex flex-col justify-center gap-2">
                <label className="text-sm w-full">Section Header*</label>
                <input
                  type="text"
                  className="border rounded-md p-2 mt-1 w-full"
                  required
                />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <label className="text-sm w-full">Section Type*</label>
                <select
                  id="document-type"
                  className="text-[#667085] w-full text-sm border border-[#EFEFF4] rounded-lg p-3 "
                >
                  <option>Short text</option>
                  <option>Long text(one sentence and above)</option>
                  <option>Select field(with multiple options)</option>
                  <option>uploaded document</option>
                </select>
              </div>

              <div className="flex flex-col gap-5 h-fit">
                <label className="text-sm w-full">Section Necessity</label>
                <div className="w-full flex gap-10 ">
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="required"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Required"
                      control={
                        <Radio
                          sx={{
                            color: "#4A176D",
                            "&.Mui-checked": {
                              color: "#4A176D",
                            },
                          }}
                        />
                      }
                      label="Required"
                    />
                    <FormControlLabel
                      value="optional"
                      control={
                        <Radio
                          sx={{
                            color: "#4A176D",
                            "&.Mui-checked": {
                              color: "#4A176D",
                            },
                          }}
                        />
                      }
                      label="Optional"
                    />
                  </RadioGroup>
                  {/* <div className="flex gap-3 items-center justify-center">
                    <input
                      type="radio"
                      className="w-4 h-4 text-white bg-[#4A176D] border-gray-300 focus:ring-[#4A176D]"
                      id="required"
                    />
                    <label htmlFor="required" className="text-sm w-full">
                      Required{" "}
                      <span className="text-[#8D98AF]">
                        (Obligate the Officer to fill)
                      </span>{" "}
                    </label>
                  </div> */}

                  {/* <div className="flex gap-3 items-center justify-center">
                    <input
                      type="radio"
                      className="w-4 h-4 text-white bg-[#4A176D] border-gray-300"
                      id="optional"
                    />
                    <label htmlFor="optional" className="text-sm w-full">
                      Optional{" "}
                      <span className="text-[#8D98AF]">
                        {" "}
                        (Give option to Officer to fill or not)
                      </span>{" "}
                    </label>
                  </div> */}
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-white bg-[#4A176D] border-gray-300"
                    id="eligible"
                  />
                  <label htmlFor="eligible" className="text-sm w-full">
                    Eligible as condition criteria{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="flex items-center justify-center text-center w-full text-[#00B0AD] text-base border border-[#00B0AD] rounded-lg p-2">
          {" "}
          <img src="/asset/icons/plus-black.svg" />
          Add More Sections
        </button>
        {/* Submit Button */}
        <div className="flex gap-4 justify-end items-center mt-6">
          <button
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-base py-2 px-4 rounded"
          >
            Publish Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentAddTemp;
