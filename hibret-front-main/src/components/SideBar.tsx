const SideBar = () => {
  return (
    <div className="flex flex-col w-72 mx-11 mt-11 h-full fixed bottom-0 left-0">
      <div className="flex flex-col gap-10 pt-4">
        <img src="/asset/hibret-logo.svg"  className="w-40 h-12"/>
        <hr className="border border-[#EFEFF4] w-60" />
      </div>

      <div className="flex flex-col mt-6 gap-5">
        <div className="category1 flex flex-col justify-center ">
          <h2 className=" text-sm text-[#667085] font-bold">Catagory1</h2>
          <div className=" flex flex-col mt-5 gap-3 justify-center">
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/dashboard.svg" />
              <p className=" text-sm text-[#667085]">Dashboard</p>
            </div>
            <div className="flex gap-2 ">
              <img
                className=" max-w-4"
                src="/asset/icons/user-management.svg"
              />
              <p className=" text-sm text-[#667085]">User Management</p>
            </div>
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/report.svg" />
              <p className=" text-sm text-[#667085]">Reports</p>
            </div>
          </div>
        </div>

        <div className="category2 flex flex-col justify-center ">
          <h2 className=" text-sm text-[#667085] font-bold">Catagory2</h2>
          <div className=" flex flex-col justify-center mt-5 gap-3">
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/dashboard.svg" />
              <p className=" text-sm text-[#667085]">Summary</p>
            </div>
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/some-list.svg" />
              <p className=" text-sm text-[#667085]">Lorem List</p>
            </div>
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/category-list.svg" />
              <p className=" text-sm text-[#667085]">Category List</p>
            </div>
          </div>
        </div>

        <div className="category3 flex flex-col justify-center">
          <h2 className=" text-sm text-[#667085] font-bold">Catagory3</h2>
          <div className=" flex flex-col mt-5 gap-3 justify-center">
            <div className="flex gap-2 ">
              <img className=" max-w-4" src="/asset/icons/placeholder.svg" />
              <p className=" text-sm text-[#667085]">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
