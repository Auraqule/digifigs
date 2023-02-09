import React, { useState } from "react";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import eye from "../assets/eye.svg";
import eyeClose from "../assets/eye-close.svg";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email })
    );
    navigate("/welcome");
  };

  return (
    <section className="w-screen min-h-screen  relative bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className={`bg-white z-20 relative  sm:rounded-2xl transition-all duration-300 ease-out  ${"min-h-screen sm:min-h-[90vh] sm:h-[90vh]  w-[100%]  sm:w-[95%]"}  py-8 px-5 sm:p-12  max-w-[480px] `}
      >
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute cursor-pointer right-10 top-6 sm:top-9"
        >
          <img src={close} alt="close modal" />
        </div>
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mt-4">
          <img className="h-12" src={logo} alt="logo" />
          <h2 className="font-extrabold text-[#121212] text-2xl">Sign up</h2>
          <p className="mt-2 mb-[2px] text-sm text-center px-3">
            You're just a few clicks away from creating your wish list.
          </p>
        </div>
        <div>
          {/* USER FORM INPUTS */}
          <form onSubmit={submitHandler} className="text-black mt-4 text-sm">
            <div className="flex items-center justify-between">
              {/* FIRSTNAME */}
              <div className="bg-[#F7F7F7] relative rounded-lg w-[48%] h-[56px] px-6">
                {firstName && (
                  <p className="text-[#3D3D3D] absolute top-2 text-xs">
                    First name
                  </p>
                )}
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  required
                  className={`w-full h-full ${
                    firstName && "pt-4"
                  }  bg-transparent outline-none border-none`}
                  type="text"
                />
              </div>
              {/* LASTNAME */}
              <div className="bg-[#F7F7F7] relative rounded-lg w-[48%] h-[56px] px-6">
                {lastName && (
                  <p className="text-[#3D3D3D] absolute top-2 text-xs">
                    Last name
                  </p>
                )}
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  required
                  className={`w-full h-full ${
                    lastName && "pt-4"
                  }  bg-transparent outline-none border-none`}
                  type="text"
                />
              </div>
            </div>
            {/* EMAIL */}
            <div className="bg-[#F7F7F7] relative rounded-lg w-full h-[56px] px-6 my-4">
              {email && (
                <p className="text-[#3D3D3D] absolute top-2 text-xs">Email</p>
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className={`w-full h-full ${
                  email && "pt-4"
                }  bg-transparent outline-none border-none`}
                type="email"
              />
            </div>
            {/* PASSWORD REGION */}
            <div className="my-4">
              {/* PASSWORD */}
              <div className="bg-[#F7F7F7] relative rounded-lg w-full h-[56px] px-6">
                {isPasswordVisible ? (
                  <img
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-5"
                    src={eye}
                    alt="visible password"
                  />
                ) : (
                  <img
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-5"
                    src={eyeClose}
                    alt="hidden password"
                  />
                )}
                {password && (
                  <p className="text-[#3D3D3D] absolute top-2 text-xs">
                    Password
                  </p>
                )}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className={`w-full h-full ${
                    password && "pt-4"
                  }  bg-transparent pr-8 outline-none border-none`}
                  type={isPasswordVisible ? "text" : "password"}
                />
              </div>
              <p className="text-xs mt-[2px] pl-2">
                Your password must contain at least 8 characters
              </p>
              <div className="bg-[#F7F7F7] relative rounded-lg w-full h-[56px] px-6 mt-4">
                {isConfirmPasswordVisible ? (
                  <img
                    onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                    className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-5"
                    src={eye}
                    alt="visible password"
                  />
                ) : (
                  <img
                    onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                    className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-5"
                    src={eyeClose}
                    alt="hidden password"
                  />
                )}
                {confirmPassword && (
                  <p className="text-[#3D3D3D] absolute top-2 text-xs">
                    Confirm password
                  </p>
                )}
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  required
                  className={`w-full h-full ${
                    confirmPassword && "pt-4"
                  }  bg-transparent outline-none border-none`}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                />
              </div>
            </div>
            {/* SUBMIT + OTHER AGREEMENT POLICIES */}
            <div>
              <button
                className={`w-full py-4 text-base hover:bg-[#e27ba6] ${
                  firstName && lastName && email && password && confirmPassword
                    ? "bg-[#EE2A7B] cursor-pointer"
                    : "bg-[#ad4d75] cursor-not-allowed"
                }  rounded-lg myt-4 mb-2 sm:mb-3 text-white`}
              >
                Sign up
              </button>
              <p className="text-xs text-center w-[80%] mx-auto">
                By signinig up on Giftly, you agree to our Privacy Policy and
                Terms of Service.
              </p>
              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <span className="font-medium cursor-pointer">Sign in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
