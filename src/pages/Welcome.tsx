import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({ firstName: "", lastName: "", email: "" });
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    console.log(user);
  }, []);

  return (
    <section className="w-screen  flex items-center justify-center h-screen bg-[#14142B]">
      <button
        onClick={() => navigate("/")}
        className="flex absolute top-4 sm:top-6 right-6 sm:right-10 w-[160px] sm:w-[240px] h-[50px] rounded-lg justify-center hover:bg-[#ffddeb]  bg-white text-sm sm:text-base items-center"
      >
        <p>Go back to site</p>
      </button>
      <div className="w-[90%] sm:w-1/2 sm:max-w-[480px]">
        <img src={logo} alt="logo" />
        <p className="text-xl sm:text-2xl mt-4 mb-2 font-bold text-white">
          Hello <span className="capitalize">{user?.firstName}</span> Welcome to
          Griftly 🎉
        </p>
        <p className="text-lg sm:text-xl  text-white">
          To continue using Griftly, head over to your inbox and click on the
          verification link we just sent you.
        </p>

        <div className="flex  items-center space-x-6 w-full mt-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex w-full h-[50px] text-[#EE2A7B] transition-all duration-300 rounded-lg justify-center hover:bg-[#ffddeb] space-x-2 bg-transparent text-sm sm:text-base items-center"
          >
            <p>Resend email</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
