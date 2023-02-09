import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import archive from "../assets/archive.svg";
import arrowDown from "../assets/arrow-down.svg";
import discover from "../assets/discover.svg";
import message from "../assets/message.svg";
import cup from "../assets/cup.svg";
import giftWhite from "../assets/gift-white.svg";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

type Iprops = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
};
const SIDEBAR_NAVIGATIONS = [
  {
    title: "My wishlists",
    link: "",
  },
  {
    title: "Leaderboard",
    link: "",
  },
  {
    title: "Gift ideas",
    link: "",
  },
  {
    title: "Archive",
    link: "",
  },
  {
    title: "Support",
    link: "",
  },
];
const MobileNavigation = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: Iprops) => {
  const [selected, setSelected] = useState<string>("0");
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({ firstName: "", lastName: "", email: "" });

  //   <div className="w-full min-w-[220px] h-full  ">
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);
  return (
    <div
      className={` bg-[#14142B] h-full pt-12 fixed z-20 transition-all duration-300 ease-linear   top-0 bottom-0 ${
        isMobileMenuOpen
          ? "left-0  w-[70%] px-6 pb-6 opacity-100"
          : "w-[0%] left-0 opacity-0"
      } `}
    >
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute  text-white top-4 right-6"
        >
          <ClearRoundedIcon />
        </div>
      )}
      <img
        className={`cursor-pointer ${
          isMobileMenuOpen ? "opacity-100 block" : "opacity-0 hidden"
        } `}
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col h-[92%] items-center justify-between">
        <div
          className={`mt-[5vh]  flex-1 transition-all duration-500 ease-linear ${
            isMobileMenuOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {SIDEBAR_NAVIGATIONS.map((d, i) => (
            <div
              key={i.toString()}
              onClick={() => {
                setSelected(i.toString());
                setIsMobileMenuOpen(false);
              }}
              className={`mb-8 flex items-center space-x-3 cursor-pointer`}
            >
              <img
                className="w-4 h-4 object-contain"
                src={
                  i === 0
                    ? giftWhite
                    : i === 1
                    ? cup
                    : i === 2
                    ? discover
                    : i === 3
                    ? archive
                    : message
                }
                alt="icon"
              />
              <p
                className={`${
                  selected === i.toString() &&
                  "font-semibold text-white  underline underline-offset-4"
                } text-[#D5D8DF]`}
              >
                {d.title}
              </p>
              {i === 2 && (
                <p className="bg-[#FDC9FF] hover:bg-[#d484d7] py-[2px] px-2 rounded-[4px] text-sm">
                  New
                </p>
              )}
            </div>
          ))}
        </div>
        {/* BOTTOM */}
        <div
          className={`flex w-full items-center space-x-2 transition-all duration-500 ease-linear ${
            isMobileMenuOpen ? "opacity-100 block" : "opacity-0 hidden"
          } `}
        >
          <div className="min-w-[36px] hover:opacity-80 cursor-pointer min-h-[36px] bg-[#EE2A7B] border-2 border-white rounded-full grid place-content-center">
            <p className="text-white font-semibold uppercase">{`${
              user.firstName.charAt(0) + user.lastName.charAt(0)
            }`}</p>
          </div>
          <div className="text-white cursor-pointer capitalize text-sm whitespace-nowrap">
            {`${user.firstName + " " + user.lastName}`.substring(0, 20) + "..."}
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <img src={arrowDown} alt="down arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
