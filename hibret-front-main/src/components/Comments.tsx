import React, { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  workapprove,
  workareject,
  workforward,
  workback,
} from "../services/api/userworkApi";
import toast, { Toaster } from "react-hot-toast";

const Comments = ({
  workflowDetail,
  setWorkflowDetail,
  comment,
  setComment,
  approveStatus,
  setApproveStatus,
  buttons,
}) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const user: any = localStorage.getItem("user");
  const userid = JSON.parse(user);
  const handleApprove = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = userid._id;
      const workflowId = workflowDetail.workflow._id;
      console.log(workflowDetail.workflow._id);
      const { data, isError, error } = await workapprove(
        workflowId,
        userId,
        comment
      );
      if (!isError) {
        setApproveStatus("Workflow approved successfully.");
        setTimeout(function () {
          navigate({ to: "/assignedtome" });
        }, 3000);
        // setWorkflowDetail(data.workflow);
      } else {
        toast.error(error.response.data.message);

        setApproveStatus("Error approving workflow.");
      }
    } catch (error) {
      console.error("Error approving workflow:", error);
      setApproveStatus("Error approving workflow.");
    }
  };

  const handleReject = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = userid._id;
      const workflowId = workflowDetail.workflow._id;

      const { data, isError, error } = await workareject(
        workflowId,
        userId,
        comment
      );
      if (!isError) {
        setApproveStatus("Workflow rejected successfully.");
        setTimeout(function () {
          navigate({ to: "/assignedtome" });
        }, 3000);
        // setWorkflowDetail(data.workflow);
      } else {
        toast.error(error.response.data.message);

        setApproveStatus("Error rejecting workflow.");
      }
    } catch (error) {
      console.error("Error rejecting workflow:", error);
      setApproveStatus("Error rejecting workflow.");
    }
  };

  const handleForward = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = userid._id;
      const workflowId = workflowDetail.workflow._id;

      const { data, isError, error } = await workforward(
        workflowId,
        userId,
        comment
      );

      if (!isError) {
        setApproveStatus("Workflow forwarded successfully.");
        setTimeout(function () {
          navigate({ to: "/assignedtome" });
        }, 3000);
        // setWorkflowDetail(data.workflow);
      } else {
        toast.error(error.response.data.message);

        setApproveStatus("Error forwarding workflow.");
      }
    } catch (error) {
      // console.error("Error forwarding workflow:", error);

      setApproveStatus("Error forwarding workflow.");
    }
  };

  const handleBack = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = userid._id;
      const workflowId = workflowDetail.workflow._id;

      const { data, isError, error } = await workback(
        workflowId,
        userId,
        comment
      );
      if (!isError) {
        setApproveStatus("Workflow sent back successfully.");
        setTimeout(function () {
          navigate({ to: "/assignedtome" });
        }, 3000);
        // setWorkflowDetail(data.workflow);
      } else {
        console.log(error);

        toast.error(error.response.data.message);

        setApproveStatus("Error sending workflow back.");
      }
    } catch (error) {
      console.error("Error sending workflow back:", error);
      setApproveStatus("Error sending workflow back.");
    }
  };
  console.log(errorMessage);
  return (
    <div className="h-96 w-80 border border-gray-500 border-opacity-10 my-9 flex flex-col p-4 gap-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h5 className="text-teal-600">Comments/Feedback</h5>
      <div className="h-[500px] text-black ">
        {comment.map((item, index) => (
          <div key={index}>
            <p>{item.comment} </p>
          </div>
        ))}
      </div>

      {/* <input
        className="w-full h-44 border border-gray-500 border-opacity-10"
        placeholder="Enter your comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      /> */}

      {/* Conditionally render approve and reject buttons */}
      {workflowDetail.status !== "Approved" &&
        workflowDetail.status !== "Rejected" &&
        buttons.canApprove && (
          <div className="flex gap-8">
            <button
              className="w-44 h-9 border border-teal-500 rounded-md text-teal-500 text-sm"
              onClick={handleApprove}
            >
              Approve
            </button>
            <button
              className="w-44 h-9 border border-red-500 rounded-md text-red-600 text-sm"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        )}

      <h5 className="text-teal-600">Progression</h5>
      <div className="flex gap-8">
        <button
          onClick={handleForward}
          className={`w-44 h-9 border border-gray-400 rounded-md text-sm ${
            buttons.canMoveForward
              ? "text-gray-500"
              : "text-gray-200 cursor-not-allowed"
          }`}
          disabled={!buttons.canMoveForward}
        >
          Forward
        </button>
        <button
          onClick={handleBack}
          className={`w-44 h-9 border border-gray-400 rounded-md text-sm ${
            buttons.canMoveBackward
              ? "text-gray-500"
              : "text-gray-200 cursor-not-allowed"
          }`}
          disabled={!buttons.canMoveBackward}
        >
          Back
        </button>
      </div>

      {approveStatus && <p className="text-red-600 mt-4">{approveStatus}</p>}
    </div>
  );
};

export default Comments;
