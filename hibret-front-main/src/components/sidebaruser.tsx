import { Link } from "@tanstack/react-router";

const SideBar = () => {
  return (
    <div className="flex flex-col w-72 mx-11 mt-11 h-full">
      <div className="flex flex-col gap-12">
        <img src="/asset/hibret-logo.svg" />
        <hr className="border border-[#EFEFF4]" />
      </div>

      <div className="flex flex-col mt-6 gap-5">
        <div className="category1 flex flex-col justify-center ">
          <h2 className="text-sm text-[#667085] font-bold">Category 1</h2>
          <div className="flex flex-col mt-5 gap-3 justify-center">
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/dashboard.svg" />
              <p className="text-sm text-[#667085]">Dashboard</p>
            </div>
            <div className="flex gap-2 ">
              <img
                className="max-w-4"
                src="/asset/icons/user-management.svg"
              />
              <Link to="/assignedwork" className="text-sm text-[#667085]">assigned for me</Link>
            </div>
            {/* <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/report.svg" />
              <Link to="/adminreport" className="text-sm text-[#667085]">Reports</Link>
            </div> */}
          </div>
        </div>

        <div className="category2 flex flex-col justify-center ">
          <h2 className="text-sm text-[#667085] font-bold">Category 2</h2>
          <div className="flex flex-col justify-center mt-5 gap-3">
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/dashboard.svg" />
              <p className="text-sm text-[#667085]">Summary</p>
            </div>
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/dashboard.svg" />
              <Link to="/workflowtemp" className="text-sm text-[#667085]">Workflow</Link>
            </div>
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/dashboard.svg" />
              <Link to="/documentemp" className="text-sm text-[#667085]">document template</Link>
            </div>
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/some-list.svg" />
              <p className="text-sm text-[#667085]">Lorem List</p>
            </div>
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/category-list.svg" />
              <Link to="/catagoryList" className="text-sm text-[#667085]">Category List</Link>
            </div>
          </div>
        </div>

        <div className="category3 flex flex-col justify-center">
          <h2 className="text-sm text-[#667085] font-bold">Category 3</h2>
          <div className="flex flex-col mt-5 gap-3 justify-center">
            <div className="flex gap-2 ">
              <img className="max-w-4" src="/asset/icons/placeholder.svg" />
              <p className="text-sm text-[#667085]">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
