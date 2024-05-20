import { createLazyFileRoute } from "@tanstack/react-router";
import backArrow from "/asset/icons/back-arrow.svg";
import DocumentDetailsCard from "../components/DocumentDetailsCard";
import UserName from "../components/UserName";
import SideBar2 from "../components/SideBar2";
import Comm from "../components/Comm";
import AuditTrial from "../components/AuditTrial";
import { useState, useEffect, useRef } from "react";
import arrowdown from "/asset/icons/arrowDown.svg";
import downArrow from "/asset/icons/down-arrow.svg";
import WorkflowInformation from "../components/WorkflowInformation";

export const Route = createLazyFileRoute("/assignedbymedetails")({
  component: () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const underlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const activeTabElement = document.getElementById(`tab-${activeTab}`);
      if (underlineRef.current && activeTabElement) {
        underlineRef.current.style.width = `${activeTabElement.offsetWidth}px`;
        underlineRef.current.style.left = `${activeTabElement.offsetLeft}px`;
      }
    }, [activeTab]);

    return (
      <div>
        <UserName />
        <SideBar2 />
        <div className="mt-24 ml-80 mr-8 w-full h-full">
          <div>
            <div className="flex flex-row gap-6 font-bold items-center">
              <a href="#" className="items-center">
                <img src={backArrow} alt="Back" />
              </a>
              <h1 className="text-teal-600 font-semibold text-2xl">
                Workflow Name
              </h1>
            </div>
            <p className="text-gray-600 text-sm pl-12">Some Helper Text here</p>
          </div>
          <div className="flex relative mt-9 ">
            <div
              id="tab-1"
              className={`cursor-pointer py-2 px-4 ${activeTab === 1 ? "text-purple-900" : "text-gray-500"}`}
              onClick={() => setActiveTab(1)}
            >
              Details
            </div>
            <div
              id="tab-2"
              className={`cursor-pointer py-2 px-4 ${activeTab === 2 ? "text-purple-900" : "text-gray-500"}`}
              onClick={() => setActiveTab(2)}
            >
              Audit Trial
            </div>
            <div
              id="tab-3"
              className={`cursor-pointer py-2 px-4 ${activeTab === 3 ? "text-purple-900" : "text-gray-500"} `}
              onClick={() => setActiveTab(3)}
            >
              Comments(2)
            </div>
            <div
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-purple-900 transition-all duration-300 rounded-md"
              style={{ width: 0, left: 0 }}
            />
          </div>
          <div className="flex flex-col gap-9  w-6/12  mt-7">
            {activeTab === 1 && (
              <div >
                
               <WorkflowInformation/>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col   border p-6">
                {" "}
                <div className="text-lg text-teal-600 mb-8">
                  {" "}
                  Audit Trial{" "}
                </div>{" "}
                <div className="flex flex-col gap-4">
                  {" "}
                  <AuditTrial /> <AuditTrial /> <AuditTrial />
                </div>{" "}
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex flex-col  border p-6">
                {" "}
                <div className="text-lg text-teal-600 mb-8"> Comments</div>{" "}
                <div className="flex flex-col gap-4">
                  {" "}
                  <Comm /> <Comm /> <Comm />
                </div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
});
