import React from "react";
import plus from "../assets/plus.svg";
import search from "../assets/search.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

type Iprops = {
  selectedSidebar: string;
};
const DashboardHeader = ({ selectedSidebar }: Iprops) => {
  return (
    <header className="px-4 sm:px-12 py-4 sticky top-0 flex items-center justify-between border-b-[1px] border-[#D5D8DF]">
      <div>
        <h2 className="font-medium text-[#121212] whitespace-nowrap">
          {selectedSidebar}
        </h2>
      </div>
      <div className="hidden sm:flex pl-8 items-center space-x-12">
        <div className="w-[20vw] flex items-center space-x-2 sm:min-w-[320px] py-3 px-6 bg-[#F7F7F7] rounded-lg">
          <img
            className="w-4 h-4 object-contain opacity-80"
            src={search}
            alt="search"
          />
          <input
            className="outline-none border-none bg-transparent w-full h-full"
            placeholder="Find friends"
            type="text"
          />
        </div>
        <button className="bg-[#EE2A7B] hover:opacity-80 sm:min-w-[180px] flex items-center space-x-2 rounded-lg py-2 px-5">
          <img className="pt-[6px]" src={plus} alt="plus" />
          <p className="text-white">Create Wishlist</p>
        </button>
      </div>
      <div className="sm:hidden">
        <MenuOutlinedIcon />
      </div>
    </header>
  );
};

export default DashboardHeader;
