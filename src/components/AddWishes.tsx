import React, { useRef, useState } from "react";
import link from "../assets/link.svg";
import add from "../assets/add.svg";
import gift from "../assets/gift.svg";
import close from "../assets/close.svg";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
  setIsGiftSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalHomeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setList: React.Dispatch<React.SetStateAction<List[]>>;
  list: List[];
};
const AddWishes = ({
  setIsGiftSuggestions,
  setIsModalOpen,
  setIsModalHomeOpen,
  list,
  setList,
}: Iprops) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [wishName, setWishName] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState("₦");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWishName(e.target.value);
  };

  //  👇 FUNCTION TO EDIT TO WISHLIST
  const handleEdit = (
    id: number,
    newWishName: string,
    newLink: string,
    newPrice: string | number,
    newQuantity: number,
    newDesc: string
  ) => {
    setList((prevWish) =>
      prevWish.map((wish) => {
        if (wish.id === id) {
          return {
            ...wish,
            wishName: newWishName,
            link: newLink,
            price: newPrice,
            quantity: newQuantity,
            desc: newDesc,
          };
        }
        return wish;
      })
    );
  };

  //  👇 FUNCTION TO ADD TO WISHLIST
  const handleAdd = () => {
    setList((prev) => [
      ...prev,
      {
        id: prev.length,
        wishName: "",
        link: "",
        price: "",
        quantity: 0,
        desc: "",
      },
    ]);
  };
  //  👇 FUNCTION TO DELETE A WISH

  const handleDelete = (id: number) => {
    setList((prevWishList) => prevWishList.filter((wish) => wish.id !== id));
  };

  //  👇 FUNCTION TO CHANGE CURRENCY

  const handleChangeCurrency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="mt-3 overflow-y-scroll scrollbar-hide h-[212px]">
      <p className="font-medium">Add wishes</p>
      <p className="text-sm">Add wishes and other details.</p>
      {list.map((l, i) => (
        <div
          key={i}
          className="bg-[#F7F7F7] rounded-lg w-full relative  px-4 py-4 mt-4"
        >
          <div
            onClick={() => handleDelete(l.id)}
            className={`absolute cursor-pointer z-10 right-5 ${
              list[0].id === i ? "hidden" : "block"
            }`}
          >
            <img src={close} alt="delete wish" />
          </div>
          <div
            className={`text-sm opacity-90 flex space-x-3 items-center ${
              list[i].wishName ? "block" : "hidden"
            } `}
          >
            <input type="checkbox" className="w-4 h-4 accent-purple-600" />
            <p>wish name</p>
          </div>
          <input
            type="text"
            placeholder="wish name"
            value={l.wishName}
            onChange={(e) =>
              handleEdit(
                l.id,
                e.target.value,
                l.link,
                l.price,
                l.quantity,
                l.desc
              )
            }
            className="border-none pl-8 outline-none bg-transparent w-full"
          />
          {list[i].wishName && (
            <div>
              <div className="flex space-x-3 my-3 items-end">
                <img src={link} alt="link" />
                <input
                  type="text"
                  value={l.link}
                  onChange={(e) =>
                    handleEdit(
                      l.id,
                      l.wishName,
                      e.target.value,
                      l.price,
                      l.quantity,
                      l.desc
                    )
                  }
                  placeholder="Link e.g https://example.com"
                  className="border-none outline-none bg-transparent w-full"
                />
              </div>
              <div className="flex space-x-3  items-end">
                <select
                  value={selectedCurrency}
                  onChange={handleChangeCurrency}
                >
                  <option value="naira">₦ </option>
                  <option value="dollar">$</option>
                  <option value="euro">€</option>
                  <option value="british pounds sterling">£</option>
                </select>
                <input
                  type="tel"
                  value={l.price}
                  onChange={(e) =>
                    handleEdit(
                      l.id,
                      l.wishName,
                      l.link,
                      e.target.value,
                      l.quantity,
                      l.desc
                    )
                  }
                  placeholder="Price (optional)"
                  className="border-none outline-none bg-transparent w-full"
                />
              </div>
              <div className="flex space-x-3 my-3 items-end">
                <div className="text-base text-gray-500">
                  <AddShoppingCartIcon fontSize="inherit" color="inherit" />
                </div>
                <input
                  type="number"
                  min={1}
                  value={l.quantity}
                  onChange={(e) =>
                    handleEdit(
                      l.id,
                      l.wishName,
                      l.link,
                      l.price,
                      Number(e.target.value),
                      l.desc
                    )
                  }
                  placeholder="Quantity e.g 2"
                  className="border-none outline-none bg-transparent w-full"
                />
              </div>
              <div className="flex space-x-3 items-end">
                <div className="text-base text-gray-500">
                  <AutoAwesomeMosaicIcon fontSize="inherit" color="inherit" />
                </div>
                <input
                  type="text"
                  value={l.desc}
                  onChange={(e) =>
                    handleEdit(
                      l.id,
                      l.wishName,
                      l.link,
                      l.price,
                      l.quantity,
                      e.target.value
                    )
                  }
                  placeholder="Wish description"
                  className="border-none outline-none bg-transparent w-full"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <div>
        <div className="w-full border-dashed border-2 rounded-lg py-3 flex justify-center mt-2">
          <button onClick={handleAdd} className="flex  items-center space-x-2">
            <img src={add} alt="" />
            <p>Add another</p>
          </button>
        </div>
        <div
          onClick={() => {
            setIsGiftSuggestions(true);
            setIsModalHomeOpen(false);
          }}
          className="w-full flex cursor-pointer justify-center mt-3 space-x-2 pb-4"
        >
          <img src={gift} alt="" />
          <p className="text-[#EE2A7B]">Generate gift ideas</p>
        </div>
      </div>
    </div>
  );
};

export default AddWishes;
