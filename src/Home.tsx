import { useState } from "react";
import reactLogo from "./assets/react.svg";
import settings from "./assets/settings.svg";
import trash from "./assets/trash.svg";
import send from "./assets/send.svg";
import close from "./assets/close.svg";
import {
  AddWishes,
  DeleteModal,
  GiftSuggestions,
  Header,
  ListDetails,
} from "./components";
import { useNavigate } from "react-router-dom";
interface List {
  id: number;
  wishName: string;
  link: string;
  price: number | string;
  quantity: number;
  desc: string;
  img?: string;
}
function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalHomeOpen, setIsModalHomeOpen] = useState<boolean>(true);
  const [isDeletePrompt, setIsDeletePrompt] = useState<boolean>(false);
  const [isGiftSuggestions, setIsGiftSuggestions] = useState<boolean>(false);
  const [list, setList] = useState<List[]>([
    {
      id: 0,
      wishName: "",
      link: "",
      price: "",
      quantity: 1,
      desc: "",
      img: "",
    },
  ]);
  return (
    <section className="w-screen min-h-screen  relative bg-pink-600 flex justify-center items-center ">
      {!isModalOpen && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex absolute top-1/2 left-1/2 w-[80%] sm:px-2 justify-center sm:w-1/2 md:w-1/4 xl:w-1/6 transform z-10 -translate-x-1/2 -translate-y-1/2  h-[50px] bg-white text-[#EE2A7B] rounded-lg  font-medium items-center"
        >
          <p>Create a wishlist for free</p>
        </button>
      )}
      {/* BACKDROP */}
      <div
        onClick={() => {
          setIsModalOpen(false);
        }}
        className={`absolute top-0 left-0 cursor-pointer ${
          isModalOpen ? "block" : "hidden"
        } right-0 bottom-0 bg-gray-800 opacity-50`}
      />
      <div
        className={`bg-white  relative sm:rounded-2xl transition-all duration-300 ease-out ${
          isGiftSuggestions ? "hidden" : "block"
        } ${
          !isModalOpen || !isModalHomeOpen || isGiftSuggestions
            ? "h-[75vh] opacity-0 overflow-hidden  sm:w-[65%]"
            : "min-h-screen sm:min-h-[90vh] sm:h-[90vh]  w-[100%]  sm:w-[95%]"
        }  py-8 px-5 sm:p-12  max-w-[480px] `}
      >
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute cursor-pointer right-10 top-6 sm:top-9"
        >
          <img src={close} alt="close modal" />
        </div>
        <Header />
        <ListDetails />
        <AddWishes
          list={list}
          setList={setList}
          setIsGiftSuggestions={setIsGiftSuggestions}
          setIsModalOpen={setIsModalOpen}
          setIsModalHomeOpen={setIsModalHomeOpen}
        />
        <div>
          <div className="flex space-x-2 items-center mb-4 pt-5 cursor-pointer">
            <img src={settings} alt="" />
            <p className="text-sm">Privacy and Sharing</p>
          </div>
          <div className="flex items-center space-x-6 w-full">
            <button
              onClick={() => {
                setIsDeletePrompt(true);
                setIsModalHomeOpen(false);
              }}
              className="flex w-full h-[50px] rounded-lg justify-center hover:bg-[#ffddeb] space-x-2 border-2 border-[#EE2A7B] text-sm items-center"
            >
              <img src={trash} alt="delete wish" />
              <p>Delete</p>
            </button>
            <button
              onClick={() => navigate("/share-wishlist")}
              className="flex w-full h-[50px] bg-[#EE2A7B] text-white rounded-lg justify-center space-x-2  text-sm items-center"
            >
              <img src={send} alt="send wish" />
              <p>Share</p>
            </button>
          </div>
        </div>
      </div>
      {isGiftSuggestions && (
        <GiftSuggestions
          setIsModalHomeOpen={setIsModalHomeOpen}
          isGiftSuggestions={isGiftSuggestions}
          setIsGiftSuggestions={setIsGiftSuggestions}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setList={setList}
        />
      )}
      {isDeletePrompt && isModalOpen && (
        <DeleteModal
          list={list}
          setList={setList}
          setIsDeletePrompt={setIsDeletePrompt}
          setIsModalHomeOpen={setIsModalHomeOpen}
        />
      )}
    </section>
  );
}

export default Home;
