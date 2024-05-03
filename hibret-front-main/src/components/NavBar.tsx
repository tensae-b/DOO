const NavBar = () => {
  return (
    <div className="search-bar flex justify-between mt-6 h-12 fixed right-0 left-72 top-0">
      <div className="flex justify-between items-center border border-[#667085] px-3 py-2 rounded-lg w-80 h-10">
        <input type="text" placeholder="Search something...." className="w-72 placeholder:text-sm"/>
        <img src="/asset/icons/search.svg"  className="h-4 w-4"/>
      </div>

      <div className="flex gap-6 items-center">
        <img src="/asset/icons/notification.svg" className=" max-w-6 " />
        <hr className=" border border-[#EFEFF4] h-11" />
        <div className="flex gap-4 w-56 items-center ">
          <img src="/asset/icons/avatar.svg" />
          <div className="flex gap-2">
            <p className="">Maxwell Anderson</p>
            <img src="/asset/icons/arrowDown.svg" className=" max-w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
