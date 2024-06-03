import React, { useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import backArrow from "/asset/icons/back-arrow.svg";
import arrowdown from "/asset/icons/arrowDown.svg";
import downArrow from "/asset/icons/down-arrow.svg";
import DocumentDetailsCard from "../components/DocumentDetailsCard";
import { Link } from "@tanstack/react-router";
import axios from 'axios';
import Comments from "../components/Comments";
import UserName from "../components/UserName";
import SideBar2 from "../components/SideBar2";

export const Route = createLazyFileRoute("/assignedtomedetails/$workflowId/$userId")({
  component: AssignedToMeDetails
});

function AssignedToMeDetails() {
  const params = Route.useParams();
  const workflowId = params.workflowId;
  const userId = params.userId;
  const [workflowDetail, setWorkflowDetail] = useState<any>(null);
  const [buttons, setButtons] = useState<any>({});
  const [comment, setComment] = useState<string>("");
  const [approveStatus, setApproveStatus] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/initiate/workflows/${workflowId}/user/${userId}`);
        setWorkflowDetail(data.workflow);
        console.log(data)
        setButtons(data.buttons || {});
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };

    if (workflowId && userId) {
      fetchData();
    }
  }, [workflowId, userId]);

  if (!workflowDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserName />
      <SideBar2 />
      <div className="mt-24 ml-80 mr-8 w-full h-full">
        <div>
          <div className="flex flex-row gap-6 text-bold items-center">
            <Link to="/assignedtome">
              <img src={backArrow} alt="Back Arrow" />
            </Link>
            <h1 className="text-teal-600 font-semibold text-2xl">
              {workflowDetail?.name}
            </h1>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col w-6/12 my-9 h-12 gap-9 border border-gray-500 border-opacity-10">
            <div className="flex flex-row justify-between py-3 px-6">
              <h3 className="text-teal-600">Workflow Information</h3>
              <a href="#">
                <img src={downArrow} alt="Arrow Down" />
              </a>
            </div>
            <div className="py-3 px-6 grid grid-cols-1 gap-4">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-teal-600">Status:</p>
                  <p className="text-gray-600">{workflowDetail?.status}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-teal-600">Current Stage:</p>
                  <p className="text-gray-600">{workflowDetail?.currentStageIndex}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-gray-500 border-opacity-10 gap-12 py-3 px-6">
              <div className="flex flex-row justify-between items-center w-full">
                <h4 className="text-teal-600">Documents</h4>
                <img src={arrowdown} alt="Arrow Down" />
              </div>
              {workflowDetail.requiredDocuments.concat(workflowDetail.additionalDocuments).map((doc, index) => (
                <DocumentDetailsCard key={index} doc={doc} />
              ))}
            </div>
          </div>
          <Comments
            workflowDetail={workflowDetail}
            setWorkflowDetail={setWorkflowDetail}
            comment={comment}
            setComment={setComment}
            approveStatus={approveStatus}
            setApproveStatus={setApproveStatus}
            buttons={buttons}
          />
        </div>
      </div>
    </div>
  );
}

export default AssignedToMeDetails;