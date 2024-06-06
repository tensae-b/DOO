import React from 'react';
import { workapprove, workareject, workforward, workback } from "../services/api/userworkApi";

const Comments = ({
  workflowDetail,
  setWorkflowDetail,
  comment,
  setComment,
  approveStatus,
  setApproveStatus,
  buttons
}) => {
  const handleApprove = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = '663c62145dd5d333dbdaaf00';
      const workflowId = workflowDetail._id;
      console.log(workflowDetail._id)
      const { data, isError } = await workapprove(workflowId, userId, comment);
      if (!isError) {
        setApproveStatus("Workflow approved successfully.");
        setWorkflowDetail(data.workflow);
      } else {
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
      const userId = '663c62145dd5d333dbdaaf00';
      const workflowId = workflowDetail._id;

      const { data, isError } = await workareject(workflowId, userId, comment);
      if (!isError) {
        setApproveStatus("Workflow rejected successfully.");
        setWorkflowDetail(data.workflow);
      } else {
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
      const userId = '663c62145dd5d333dbdaaf00';
      const workflowId = workflowDetail._id;

      const { data, isError } = await workforward(workflowId, userId, comment);
      if (!isError) {
        setApproveStatus("Workflow forwarded successfully.");
        setWorkflowDetail(data.workflow);
      } else {
        setApproveStatus("Error forwarding workflow.");
      }
    } catch (error) {
      console.error("Error forwarding workflow:", error);
      setApproveStatus("Error forwarding workflow.");
    }
  };

  const handleBack = async () => {
    if (!workflowDetail) {
      console.error("No workflow detail available");
      return;
    }

    try {
      const userId = '663c62145dd5d333dbdaaf00';
      const workflowId = workflowDetail._id;

      const { data, isError } = await workback(workflowId, userId, comment);
      if (!isError) {
        setApproveStatus("Workflow sent back successfully.");
        setWorkflowDetail(data.workflow);
      } else {
        setApproveStatus("Error sending workflow back.");
      }
    } catch (error) {
      console.error("Error sending workflow back:", error);
      setApproveStatus("Error sending workflow back.");
    }
  };

  return (
    <div className="h-96 w-80 border border-gray-500 border-opacity-10 my-9 flex flex-col p-4 gap-4">
      <h5 className="text-teal-600">Comments/Feedback</h5>
      <input
        className="w-full h-44 border border-gray-500 border-opacity-10"
        placeholder="Enter your comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Conditionally render approve and reject buttons */}
      {workflowDetail.status !== "Approved" && workflowDetail.status !== "Rejected" && buttons.canApprove && (
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
            buttons.canMoveForward ? "text-gray-500" : "text-gray-200 cursor-not-allowed"
          }`}
          disabled={!buttons.canMoveForward}
        >
          Forward
        </button>
        <button
          onClick={handleBack}
          className={`w-44 h-9 border border-gray-400 rounded-md text-sm ${
            buttons.canMoveBackward ? "text-gray-500" : "text-gray-200 cursor-not-allowed"
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
