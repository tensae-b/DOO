// Sidebar.js

import React from 'react';

const SideBarUser = () => {
  return (
    <div className="flex flex-col w-72 mx-11 mt-11 h-full">
      <div className="flex flex-col gap-12">
        <img src="/asset/hibret-logo.svg" alt="logo" />
        <hr className="border border-[#EFEFF4]" />
      </div>
      <div className="flex flex-col mt-6 gap-5">
        <div className="category1 flex flex-col justify-center ">
          <h2 className="text-sm text-[#667085] font-bold">Category1</h2>
          <div className="flex flex-col mt-5 gap-3 justify-center">
            {/* Your other category elements */}
          </div>
        </div>
        <div className="category2 flex flex-col justify-center ">
          <h2 className="text-sm text-[#667085] font-bold">Category2</h2>
          <div className="flex flex-col justify-center mt-5 gap-3">
            {/* Your other category elements */}
            <div className="flex gap-2 " onClick={() => fetchData('6637c8abe966f294a2d804d3')}>
              <img className="max-w-4" src="/asset/icons/category-list.svg" alt="category-icon" />
              <p className="text-sm text-[#667085]">workflow</p>
            </div>
          </div>
        </div>
        <div className="category3 flex flex-col justify-center">
          <h2 className="text-sm text-[#667085] font-bold">Category3</h2>
          <div className="flex flex-col mt-5 gap-3 justify-center">
            {/* Your other category elements */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarUser;
