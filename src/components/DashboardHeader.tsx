import React, { useState } from "react";
import plus from "../assets/plus.svg";
import search from "../assets/search.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MobileNavigation from "./MobileNavigation";

type Iprops = {
  selectedSidebar: string;
  setSelectedSidebar: React.Dispatch<React.SetStateAction<string>>;
};
const DashboardHeader = ({ selectedSidebar, setSelectedSidebar }: Iprops) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="px-4  sm:px-12 py-4 sticky top-0 flex items-center justify-between border-b-[1px] border-[#D5D8DF]">
      <div className="">
        <h2 className="font-medium hidden sm:block text-[#121212] whitespace-nowrap">
          {selectedSidebar}
        </h2>
      </div>
      {/* MOBILE MENU HAMBURGER */}
      <div onClick={() => setIsMobileMenuOpen(true)} className="sm:hidden">
        <MenuOutlinedIcon />
      </div>
      <div className=" pl-8 flex w-full justify-end  items-center space-x-12">
        <div className="w-[70vw] sm:w-[20vw] flex items-center space-x-2 sm:min-w-[320px] py-3 px-6 bg-[#F7F7F7] rounded-lg">
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
        <button className="bg-[#EE2A7B] hidden sm:flex hover:opacity-80 sm:min-w-[180px]  items-center space-x-2 rounded-lg py-2 px-5">
          <img className="pt-[6px]" src={plus} alt="plus" />
          <p className="text-white">Create Wishlist</p>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed top-0 bottom-0 left-0 right-0 bg-black/50"
        />
      )}
      <div>
        <MobileNavigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
