import { createLazyFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import filter from '/asset/icons/filter.svg';
import minus from '/asset/icons/minus.svg';
import downArrow from '/asset/icons/down-arrow.svg';
import AssignedToMeCard from '../components/AssignedToMeCard';
import UserName from '../components/UserName';
import SideBar2 from '../components/SideBar2';

export const Route = createLazyFileRoute('/assignedByme')({
  component: () => {
    const [workflows, setWorkflows] = useState([
      {
        name: "Loan Approval Workflow with Condition",
        dateCreated: new Date().toISOString(),
        type: 'Loan',
        status: 'Approved'
      },
      {
        name: "Loan Approval",
        dateCreated: new Date().toISOString(),
        type: 'Loan',
        status: 'Pending'
      },
      {
        name: "Workflow with Condition",
        dateCreated: new Date().toISOString(),
        type: 'Loan',
        status: 'Rejected'
      }
    ]);

    return (
      <div>
        <UserName />
        <SideBar2 />
        <div className="mt-24 ml-80 mr-8">
          <div className="flex gap-4 mb-9 ml-4">
            <p>All</p>
            <p>Ongoing</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex border border-[#667085] px-3 py-2 rounded-lg w-72 h-8 justify-between">
              <input type="text" placeholder="Search something..." />
              <img src="/asset/icons/search.svg" alt="Search Icon" />
            </div>
            <div className="flex gap-1 items-center">
              <img src={filter} alt="Filter Icon" />
              <p className="text-md text-gray-600">Filters</p>
            </div>
          </div>

          <div className="mt-9 flex flex-col w-full">
            <div className="flex border-b border-gray-500 border-opacity-20 gap-10">
              <div className="py-3 px-4 h-11 w-24">
                <img src={minus} alt="" width="4" height="4" />
              </div>
              <div className="py-3 px-6 flex items-center gap-1 text-xs text-gray-600 w-96">
                <p>Name</p>
                <img src={downArrow} alt="" />
              </div>
              <div className="py-3 px-6 flex items-center gap-1 text-xs text-gray-600 w-96">
                <p>Date Created</p>
                <img src={downArrow} alt="" />
              </div>
              <div className="py-3 px-6 flex items-center gap-1 text-xs text-gray-600 w-96">
                <p>Type</p>
                <img src={downArrow} alt="" />
              </div>
              <div className="py-3 px-6 flex items-center gap-1 text-xs text-gray-600 w-96">
                <p>Document Status</p>
                <img src={downArrow} alt="" />
              </div>
              <div className="py-3 px-6 flex items-center gap-1 text-xs text-gray-600 w-96">
                <p></p>
              </div>
            </div>
            {workflows.map((workflow, index) => (
              <AssignedToMeCard
                key={index}
                link="/assignedbymedetails"
                name={workflow.name}
                dateCreated={workflow.dateCreated}
                type={workflow.type}
                status={workflow.status}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
});
