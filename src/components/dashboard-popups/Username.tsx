import React, { useState } from "react";
import logo from "../../assets/logo.svg";
type Iprops = {
  setActivePopup: React.Dispatch<React.SetStateAction<string>>;
};
const Username = ({ setActivePopup }: Iprops) => {
  const [username, setUsername] = useState<string>("");
  const nextHandler = () => {
    username && setActivePopup("interests");
  };
  return (
    <div className="bg-white z-20 w-[95%] sm:w-[380px] rounded-xl sm:rounded-2xl py-8 sm:py-10 px-8 sm:px-10">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center mt-4">
        <img className="h-10 object-contain" src={logo} alt="logo" />
        <h2 className="font-extrabold mt-4 text-[#121212] text-2xl">
          Create a username
        </h2>
        <p className="mt-2 mb-[2px] text-sm text-center">
          Create a unique username personalized for yourself on Giftly.
        </p>
      </div>
      {/* USERENAME */}
      <div className="bg-[#F7F7F7] relative rounded-lg w-full h-[56px] px-6 my-4">
        {username && (
          <p className="text-[#3D3D3D] absolute top-2 text-xs">Username</p>
        )}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className={`w-full h-full ${
            username && "pt-4"
          }  bg-transparent outline-none border-none`}
          type="text"
        />
      </div>
      {/* SUBMIT */}
      <button
        onClick={nextHandler}
        className={`w-full py-4 text-base hover:bg-[#e27ba6] ${
          username
            ? "bg-[#EE2A7B] cursor-pointer"
            : "bg-[#ad4d75] cursor-not-allowed"
        }  rounded-lg myt-4 mb-2 sm:mb-3 text-white`}
      >
        Next step
      </button>
    </div>
  );
};

export default Username;
