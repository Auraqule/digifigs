import React, { useState } from "react";
import Header from "./Header";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { GIFTSUGGESTIONS } from "../utils/data";
import Gift from "./Gift";
interface List {
  id: number;
  wishName: string;
  link: string;
  price: number | string;
  quantity: number;
  desc: string;
  img?: string;
}
type Iprops = {
  isModalOpen: boolean;
  isGiftSuggestions: boolean;
  setIsGiftSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalHomeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setList: React.Dispatch<React.SetStateAction<List[]>>;
};

interface GiftSuggestion {
  title: string;
  price: number | string;
  img: string;
  link: string;
  desc: string;
}

const GiftSuggestions = ({
  setIsModalOpen,
  isGiftSuggestions,
  isModalOpen,
  setIsModalHomeOpen,
  setIsGiftSuggestions,
  setList,
}: Iprops) => {
  const [selectedGift, setSelectedGift] = useState<string>("");
  const closeGiftSuggestionHandler = () => {
    setIsGiftSuggestions(false);
    setIsModalHomeOpen(true);
  };
  const [suggestionsList, setSuggestionsList] = useState<GiftSuggestion[]>([
    ...GIFTSUGGESTIONS,
  ]);
  return (
    <div
      className={`bg-white  relative sm:rounded-2xl transition-all duration-300 ease-out ${
        !isModalOpen && isGiftSuggestions
          ? "h-[75vh] opacity-0 overflow-hidden  w-[65%]"
          : " min-h-screen sm:min-h-[90vh] sm:h-[90vh] w-[100%] sm:w-[95%]"
      }  py-8 px-5 sm:p-12  max-w-[480px] `}
    >
      <div
        onClick={closeGiftSuggestionHandler}
        className="absolute top-6 sm:top-9 cursor-pointer text-gray-600"
      >
        <KeyboardBackspaceIcon color="inherit" fontSize="medium" />
      </div>
      <div
        onClick={() => setIsModalOpen(false)}
        className="absolute cursor-pointer right-10 top-6 sm:top-9"
      >
        <img src={close} alt="close modal" />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <img className="h-12" src={logo} alt="logo" />
        <h2 className="font-extrabold text-[#121212] text-2xl">
          Gift Suggestions
        </h2>
      </div>
      <div className="h-[75%] scrollbar-hide mt-6 overflow-y-scroll">
        {suggestionsList.map((gift: GiftSuggestion, i) => (
          <Gift
            key={i.toString()}
            gift={gift}
            suggestionsList={suggestionsList}
            setSuggestionsList={setSuggestionsList}
            setList={setList}
          />
        ))}
      </div>
      <div>
        <div className="flex items-center space-x-6 w-full">
          <button
            onClick={closeGiftSuggestionHandler}
            className="flex w-full h-[50px] rounded-lg justify-center hover:bg-[#ffddeb] space-x-2 border-2 border-[#EE2A7B] text-sm items-center"
          >
            <p>Cancel</p>
          </button>
          <button
            onClick={closeGiftSuggestionHandler}
            className="flex w-full h-[50px] bg-[#EE2A7B] text-white rounded-lg justify-center space-x-2  text-sm items-center"
          >
            <p>Done</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSuggestions;
