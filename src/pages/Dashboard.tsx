import React, { useState } from "react";
import { DashboardHeader, DashboardSidebar } from "../components";
import dashboard from "../assets/dashboard.svg";
import plus from "../assets/plus.svg";
import { Interests, Username } from "../components/dashboard-popups";

const Dashboard = () => {
  const [selectedSidebar, setSelectedSidebar] = useState<string>("My wishlist");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [activePopup, setActivePopup] = useState<string>("username");
  return (
    <section className="w-screen min-h-screen flex">
      {/* POPUPS */}
      <div className="fixed left-0 flex justify-center items-center right-0 top-0 bottom-0 z-10">
        {/* BACKDROP */}
        {isPopupOpen && (
          <div
            onClick={() => setIsPopupOpen(false)}
            className="absolute w-full h-full bg-black opacity-50"
          />
        )}
        {isPopupOpen && activePopup === "username" ? (
          <Username setActivePopup={setActivePopup} />
        ) : (
          isPopupOpen && <Interests setIsPopupOpen={setIsPopupOpen} />
        )}
      </div>
      <DashboardSidebar setSelectedSidebar={setSelectedSidebar} />
      <main className="flex-1 pb-6 ">
        <DashboardHeader selectedSidebar={selectedSidebar} />
        <div className="flex-1 mt-[10vh] flex justify-center items-center">
          <div className="max-w-[95%] sm:max-w-[420px] flex flex-col items-center text-center">
            <img src={dashboard} alt="dashboard" />
            <h2 className="font-bold sm:font-extrabold text-[#121212] mb-2 sm:mb-0 text-xl">
              We've never met a list we didn't like
            </h2>
            <p>
              Your first list doesn't need to be perfect. Just put it out there,
              and see if it helps receive the best gifts from your friends.
            </p>
            <button
              onClick={() => {
                setIsPopupOpen(true);
              }}
              className={`bg-[#EE2A7B] ${
                !isPopupOpen && "z-10"
              }  hover:opacity-80 flex items-center mt-10 rounded-lg  space-x-2 px-16`}
            >
              <img className="pt-[6px]" src={plus} alt="plus" />
              <p className="text-white py-3">Create Wishlist</p>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
