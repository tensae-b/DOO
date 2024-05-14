import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import NoData from "../components/NoData";
export const Route = createLazyFileRoute("/document")({
  component: () => <Document />,
});

import axios from "axios";

function Document() {
  const data = [];
  const [showPopUp, setShowPopUp] = useState(false);
  const [workflow, setWorkflow]= useState([])
  useEffect(()=>{
   

    var config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: 'http://localhost:5000/admin/workflow-templates',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setWorkflow(response.data)
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },[])

  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  let opacity;

  showPopUp ? (opacity = "opacity-30") : (opacity = "opacity-100");

  function openPopUp() {
    setShowPopUp(true);
  }
  function closePopUp() {
    setShowPopUp(false);
  }

  function handleChange(e: any) {
    console.log(e.target.value);
    setSelectedWorkflow(e.target.value);
  }

  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          {data.length == 0 && (
            <NoData title={"Document"} openPopUp={openPopUp} />
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

              <div className="flex flex-col gap-6 w-full p-6">
                <div className=" flex flex-col gap-3">
                  <h2 className="text-[#00B0AD] text-xl font-bold">
                    Choose Workflow Type
                  </h2>
                  <select
                    id="document-type"
                    className="text-[#667085] text-sm border border-[#D0D5DD] border-dashed rounded-md px-3 py-2"
                    onChange={handleChange}
                  >
                    <option>
                      <img src="/icons/select-icon.svg" />
                      Select Workflow Type
                    </option>
                    {workflow?.map((option: any, index) => (
                          
                          <option key={option} label={option.name} value={option._id} />
                        ))}
                  </select>
                </div>

                <a
                  href="LoanDocument/1"
                  className={` text-base px-6 py-2 self-end ${
                    selectedWorkflow != null
                      ? "bg-[#00B0AD] text-white"
                      : "bg-[#F0F3F6] text-[#9EA9C1]"
                  }`}
                >
                  Continue
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
