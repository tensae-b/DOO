import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/document")({
  component: () => <Document />,
});

function Document() {
  const data = [];
  const [showPopUp, setShowPopUp] = useState(false);
  const [activeTab, setActiveTab] = useState("Blank");
  let opacity;
  let active ="underline underline-offset-[20px] decoration-[#4A176D] text-[#4A176D] font-bold";
  let nonActive = "text-lg text-[#667085]";
  showPopUp ? (opacity = "opacity-30") : (opacity = "opacity-100");

  function openPopUp() {
    setShowPopUp(true);
  }
  function closePopUp() {
    setShowPopUp(false);
  }

 
  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          {data.length == 0 && (
            <div className={opacity}>
              <div className="flex justify-between opac ">
                <div className="flex flex-col gap-3 my-5">
                  <h2 className="text-[#4A176D] text-3xl font-bold">
                    Documents
                  </h2>
                  <p className="text-[#667085] text-base"> placeholder</p>
                </div>
                <div className="flex gap-4 justify-center items-center ">
                  <button
                    className="flex gap-2  px-4 py-2 rounded-lg text-[#00B0AD] items-center border-2 border-[#00B0AD]"
                    onClick={openPopUp}
                  >
                    Add
                    <img
                      src="/asset/icons/arrowDown.svg"
                      className="w-5 text-white"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  src="/asset/nodocument.svg"
                  className=" max-w-80 max-h-80"
                />
                <h2 className="text-4xl text-[#6B7280] font-bold">
                  No Documents Yet!
                </h2>
                <p className="text-xl text-center text-[#6B7280]">
                  To create a document click on the button bellow.
                </p>
                <button
                  className="bg-[#00B0AD] flex gap-2 py-2 px-6 rounded-lg justify-center items-center text-white"
                  onClick={openPopUp}
                >
                  <img src="/asset/icons/plus.svg" className="" />
                  Add New Document
                </button>
              </div>
            </div>
          )}

          {showPopUp && (
            <div className="w-full h-full max-w-[665px] absolute top-56 right-96 bg-white z-20 ">
              <div className=" flex gap-4 items-center my-7">
                <button onClick={closePopUp}>
                  <img src="asset/icons/back-arrow.svg" />
                </button>

                <h2 className=" text-[#4A176D] text-3xl font-bold">
                  Add New Document
                </h2>
              </div>
              <div className="flex gap-2 my-7">
                <p className="text-sm text-[#00B0AD]"> Path</p>
                <p className="text-sm italic ">Main / Folder 1 / Folder 2 / </p>
              </div>
              <div className="flex gap-4 w-full justify-evenly">
                <button
                  className="text-lg text-[#667085] active:font-bold"
                  onClick={() => {
                    setActiveTab("Blank");
                  }}
                >
                  Blank
                </button>
                <button
                  className="text-lg text-[#667085] active:font-bold"
                  onClick={() => {
                    setActiveTab("Upload");
                  }}
                >
                  Upload
                </button>
                <button
                  className="text-lg text-[#667085] active:font-bold"
                  onClick={() => {
                    setActiveTab("Template");
                  }}
                >
                  Template
                </button>
              </div>

              {activeTab == "Blank" && (
                <div className="mt-20 w-full flex justify-center ">
                  <Link to="/blankpage"
                    className="bg-[#00B0AD] flex gap-2 py-2 px-6 rounded-lg justify-center items-center text-white"
                    onClick={openPopUp}
                  >
                    <img src="/asset/icons/plus.svg" className="" />
                    Open Blank Document
                  </Link>
                </div>
              )}

              {activeTab == "Upload" && (
                <div className="mt-20 w-full flex flex-col justify-center items-center gap-12 ">
                  <input type="file" name="file" />
                  <button className="text-[#9EA9C1] text-base bg-[#F0F3F6] py-4 px-6 self-end">Upload</button>
                </div>
              )}

              {activeTab == "Template" && (
                <div className="mt-20 w-full flex flex-col justify-center gap-6">
                  <h3 className="text-[#00B0AD] text-xl font-bold">Choose Template Type</h3>
                  <div  className="text-[#D0D5DD] py-2 px-3 border border-[#D0D5DD] rounded-lg flex justify-between">
                  <input type="text" name="template" placeholder="Template Type"/>
                  <img src="asset/icons/arrowDown.svg" />
                     </div>
                  <button className="text-[#9EA9C1] text-base bg-[#F0F3F6] py-4 px-6 self-end">Open Template</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
