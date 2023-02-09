import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
type Iprops = {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
interface Interest {
  id: number;
  category: string;
}
const OPTIONS: Interest[] = [
  {
    id: 0,
    category: "Women Fashion",
  },
  {
    id: 1,
    category: "Men Fashion",
  },
  {
    id: 2,
    category: "Shoes",
  },
  {
    id: 3,
    category: "Skin care",
  },
  {
    id: 4,
    category: "Sport",
  },
  {
    id: 5,
    category: "Gadgets",
  },
  {
    id: 6,
    category: "Jewelry & watches",
  },
  {
    id: 7,
    category: "Beauty & hair",
  },
  {
    id: 8,
    category: "Bags & shoes",
  },
  {
    id: 9,
    category: "Phones",
  },
  {
    id: 10,
    category: "Laptops",
  },
  {
    id: 11,
    category: "Studio lights",
  },
  {
    id: 12,
    category: "Money",
  },
  {
    id: 13,
    category: "Electronics",
  },
  {
    id: 14,
    category: "Jerseies",
  },
];
const Interests = ({ setIsPopupOpen }: Iprops) => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const completeHandler = () => {
    setIsPopupOpen(false);
    console.log(selectedInterests);
  };
  const handleSelectedInterests = (id: number) => {
    setSelectedInterests((prev) => {
      if (prev.includes(id)) {
        return prev.filter((f) => f !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="bg-white z-20 w-[95%] sm:w-[440px] rounded-xl sm:rounded-2xl py-6 sm:py-10 ">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center mt-4 px-8 sm:px-10">
        <img className="h-10 object-contain" src={logo} alt="logo" />
        <h2 className="font-bold sm:font-extrabold mt-4 text-[#121212] text-xl sm:text-2xl">
          What are you into these days?
        </h2>
        <p className="mt-2 mb-[2px] text-[#2E2E3A] text-sm text-center">
          Select <span className="font-medium">at least 5</span> interests to
          help us personalise your Giftly experience.
        </p>
      </div>

      {/* SELECTION MENU */}
      <div className="h-80 px-6 sm:px-10 grid grid-cols-3 gap-2 sm:gap-4 my-6 scrollbar-hide overflow-y-scroll">
        {OPTIONS.map((d, i) => (
          <div
            key={d.id}
            onClick={() => handleSelectedInterests(d.id)}
            className={`h-[96px] ${
              selectedInterests.includes(d.id)
                ? "bg-[#14142B] text-white"
                : "bg-white border-[1px]  border-[#D5D8DF] "
            }  rounded-lg p-2 text-xs sm:text-sm relative cursor-pointer`}
          >
            {selectedInterests.includes(d.id) && (
              <div className="absolute text-sm sm:text-base  top-2 right-2">
                <DoneOutlinedIcon fontSize="inherit" />
              </div>
            )}
            <p className="absolute bottom-2">{d.category}</p>
          </div>
        ))}
      </div>

      {/* SUBMIT */}
      <div className="bg-white px-8 sm:px-10 pt-6 border-t-[1px] border-[#D5D8DF]">
        <button
          onClick={completeHandler}
          disabled={selectedInterests.length < 5}
          className={`w-full py-4 text-base hover:bg-[#e27ba6] ${
            selectedInterests.length > 4
              ? "bg-[#EE2A7B] cursor-pointer"
              : "bg-[#ad4d75] cursor-not-allowed"
          }  rounded-lg myt-4 mb-2 sm:mb-3 text-white`}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Interests;
