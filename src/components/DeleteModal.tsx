import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const DeleteModal = ({
  list,
  setList,
  setIsDeletePrompt,
  setIsModalHomeOpen,
}: any) => {
  const deleteWishListHandler = (wishList: any) => {
    setList(wishList.filter((_: any, index: any) => index === 0));
    cancelHandler();
  };
  const cancelHandler = () => {
    setIsDeletePrompt(false);
    setIsModalHomeOpen(true);
  };
  return (
    <div className="w-[95vw] sm:w-[50vw] max-w-[480px] fixed  text-center z-20 rounded-2xl p-12 bg-white">
      <div className="w-12 h-12 text-white rounded-full grid place-content-center bg-[#EE2A7B] mx-auto">
        <DeleteOutlineIcon color="inherit" />
      </div>
      <h2 className="mt-6 mb-4 text-2xl font-black">Delete wish list</h2>
      <p className="text-lg ]">
        Are you sure you want to delete this list? Note: By deleting, all wishes
        will be deleted with it.
      </p>
      <button
        onClick={() => deleteWishListHandler(list)}
        className="w-full py-3 hover:bg-[#e27ba6] bg-[#EE2A7B] rounded-lg my-4 text-white"
      >
        Delete wish list
      </button>
      <p onClick={cancelHandler} className="w-full cursor-pointer">
        Cancel
      </p>
    </div>
  );
};

export default DeleteModal;
// EE2A7B
