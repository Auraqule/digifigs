import React from "react";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <img className="h-12" src={logo} alt="logo" />
      <p className="mt-2 mb-[2px]">New wish list</p>
      <h2 className="font-extrabold text-[#121212] text-2xl">
        Create a wish list
      </h2>
    </div>
  );
};

export default Header;
