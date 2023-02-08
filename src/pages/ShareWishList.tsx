import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const ShareWishList = () => {
  const navigate = useNavigate();
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
        <p className="text-lg sm:text-xl my-4 text-white">
          Hi there! Kindly sign up to continue using Giftly and share your
          wishlist with your family and friends.
        </p>
        <div className="flex  items-center space-x-6 w-full mt-8">
          <button
            onClick={() => navigate("/")}
            className="flex w-full h-[50px] rounded-lg justify-center hover:bg-[#ffddeb] space-x-2 bg-white text-sm sm:text-base items-center"
          >
            <p>Cancel</p>
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="flex w-full h-[50px] bg-[#EE2A7B] hover:bg-[#a53262] text-white rounded-lg justify-center space-x-2  text-sm sm:text-base items-center"
          >
            <p>Sign up</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShareWishList;
