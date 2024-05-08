import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const Route = createFileRoute("/workflowadd")({
  component: () => <WorkFlowAddTemp />,
});

function WorkFlowAddTemp() {
  return (
    <div className="mx-3 mb-10 ">
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <NavBar />
          <div className="mt-10">
            <div className="header flex ">
              <a>
                <img src="/asset/icons/back-arrow.svg" />
              </a>
              <h2 className="text-[#4A176D] text-3xl font-bold">
                Add New Workflow Template
              </h2>
            </div>

            <div className="quick-acess flex flex-col p-4 border border-[#EFEFF4] w-[25%] gap-2 rounded-lg">
              <p className="text-sm font-bold p-2">Quick Access</p>
              <p className="text-sm bg-[#E0F1F3] rounded-lg p-2 text-[#00B0AD]">
                Personal Information
              </p>
              <p className="text-sm  p-2">Account Details</p>
              <p className="text-sm  p-2">Employment Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlowAddTemp;
