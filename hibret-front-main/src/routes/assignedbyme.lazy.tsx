import { createLazyFileRoute } from '@tanstack/react-router';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@tanstack/react-router';
import filter from '/asset/icons/filter.svg';
import emptyStateImage from '../../public/asset/nodocument.svg';
import { ownerWork } from '../services/api/ownerWorkApi';

import UserName from '../components/UserName';
import SideBar2 from '../components/SideBar2';

export const Route = createLazyFileRoute('/assignedbyme')({
  component: () => {
    const userId = '663c62145dd5d333dbdaaf00';
    const [workflowData, setWorkflowData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [selectedTab, setSelectedTab] = useState('All'); // State to manage selected tab

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await ownerWork(userId);
          setWorkflowData(result.data || []);
          setIsLoading(false);
          setIsError(result.isError);
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [userId]);

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen bg-green-100">
          <div className="rounded-full h-20 w-20 bg-teal-400 animate-ping"></div>
        </div>
      );
    }

    const columns = [
      { 
        field: 'workflowName', 
        headerName: 'Name', 
        width: 200,
        renderCell: (params) => (
          <Link
            className="cursor-pointer text-blue-500 underline"
            to={`/assignedbymedetails/${params.row.id}`}
          >
            {params.value}
          </Link>
        ),
      },
      { field: 'categoryName', headerName: 'Category', width: 200 },
      { field: 'subCategoryName', headerName: 'Sub Category', width: 200 },
      { field: 'status', headerName: 'Document Status', width: 200 },
    ];

    // Filter rows based on selected tab
    const filteredRows = workflowData
      .filter((workflow) => {
        if (selectedTab === 'All') return true;
        if (selectedTab === 'Ongoing') return workflow.status === 'Pending';
        if (selectedTab === 'Completed') return workflow.status === 'Approved';
        return true;
      })
      .map((workflow) => ({
        id: workflow._id,
        workflowName: workflow.workflowName,
        categoryName: workflow.categoryName,
        subCategoryName: workflow.subCategoryName,
        status: workflow.status,
      }));

    return (
      <div>
        <UserName />
        <SideBar2 />
        <div className="mt-24 ml-80 mr-8">
          <div className="flex gap-4 mb-9 ml-4 text-sm">
            <p
              className={`cursor-pointer ${selectedTab === 'All' ? 'border-b-4 rounded-xs border-gray-600' : ''}`}
              onClick={() => setSelectedTab('All')}
            >
              All
            </p>
            <p
              className={`cursor-pointer ${selectedTab === 'Ongoing' ? 'border-b-4 rounded-xs border-gray-600' : ''}`}
              onClick={() => setSelectedTab('Ongoing')}
            >
              Ongoing
            </p>
            <p
              className={`cursor-pointer ${selectedTab === 'Completed' ? 'border-b-4 rounded-xs border-gray-600' : ''}`}
              onClick={() => setSelectedTab('Completed')}
            >
              Completed
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex border border-[#667085] px-3 py-2 rounded-lg w-72 h-8 justify-between">
              <input type="text" placeholder="Search something..." className="text-sm text-gray-400" />
              <img src="/asset/icons/search.svg" alt="Search Icon" />
            </div>
            <div className="flex gap-1 items-center">
              <img src={filter} alt="Filter Icon" />
              <p className="text-md text-gray-600">Filters</p>
            </div>
          </div>

          {filteredRows.length === 0 ? (
            <div className="mt-9 w-full h-96 flex flex-col items-center justify-center">
              <img src={emptyStateImage} alt="No Workflow Available" className="w-48 h-48" />
              <p className="mt-4 text-gray-500">There is no workflow available</p>
            </div>
          ) : (
            <div className="mt-9 w-full h-96">
              <DataGrid 
                rows={filteredRows} 
                columns={columns} 
                pageSize={10} 
                disableSelectionOnClick // Disable row selection on click
                components={{
                  NoRowsOverlay: () => (
                    <div className="flex justify-center items-center h-full">
                      <p className="text-gray-400">No rows</p>
                    </div>
                  )
                }}
                sx={{
                  '& .MuiDataGrid-cell': {
                    fontSize: '0.875rem', // 14px
                    color: '#9CA3AF', // Gray-400
                  },
                  '& .MuiDataGrid-columnHeaders': {
                    fontSize: '0.875rem', // 14px
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
});
