const NavBar = () => {
  return (
    <div className="search-bar flex justify-between mt-11 p-3">
      <div className="flex border border-[#667085] px-3 py-2 rounded-lg ">
        <input type="text" placeholder="Search something...." />
        <img src="/asset/icons/search.svg" />
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
