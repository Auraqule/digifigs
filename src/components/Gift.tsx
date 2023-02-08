import React from "react";

const Gift = ({ gift, setList, suggestionsList, setSuggestionsList }: any) => {
  const { id, title, price, img, link, desc } = gift;

  //  👇 FUNCTION TO ADD TO WISHLIST
  const handleAdd = (
    wishName = "",
    link = "",
    price = "",
    quantity = 1,
    desc = ""
  ) => {
    setList((prev: any) => [
      ...prev,
      {
        id: prev.length,
        wishName,
        link,
        price,
        quantity,
        desc,
      },
    ]);
  };
  // 👇 REMOVE A WISH SUGGESTION AFTER IT HAS BEEN ADDED
  const handleRemove = (id: number) => {
    setSuggestionsList((prev: any) => prev.filter((d: any) => d.id !== id));
  };
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-[4px]" src={img} alt={title} />
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm">NGN {price}</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleRemove(id);
            handleAdd(title, link, price, 1, desc);
          }}
          className="flex rounded-lg py-2 px-6 hover:bg-pink-300 border-2 border-gray-400 font-medium"
        >
          <p>Add</p>
        </button>
      </div>
      <div className="h-[.5px] my-4 w-full  bg-[#D5D8DF]" />
    </section>
  );
};

export default Gift;
