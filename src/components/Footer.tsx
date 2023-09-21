import React from "react";
import {
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: React.FC = () => {
  const showToastMessage = () => {
    toast.success("Success!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-[1440px] mx-auto py-12 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 justify-between border-t-2 border-[#dadada63]">
        <div className="max-w-[360px] ">
          <img alt="" src="/assets/HOOLE.png" className="h-20 cursor-pointer" />
          <p className="py-4">
            Watch movies the way they were meant to be seen - in stunning high
            definition, with crisp sound, and uninterrupted streaming.
          </p>
          <div className="flex justify-between md:w-[50%] my-6">
            <a href="/">
              <BiLogoLinkedin size={30} color="black" />
            </a>
            <a href="/">
              <BiLogoInstagram size={30} color="black" />
            </a>
            <a href="/">
              <BiLogoTwitter size={30} color="black" />
            </a>
            <a href="/">
              <BiLogoYoutube size={30} color="black" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center  mt-6 ">
          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <input
              className="p-3 flex w-60 rounded-md text-black rounded-md border-2 border-[#dadada63] indent-2 p-4 outline-none  rounded-bl "
              type="email"
              placeholder="Email"
            />
            <button
              onClick={showToastMessage}
              className="bg-[black] hover:bg-[#dadada63] hover:text-[#13426ca6]  text-white rounded-md font-medium w-[200px] cursor-pointer  my-6 px-6 py-3 "
            >
              Contact Me!
            </button>
          </div>
          <p>
            Contact me for mail{" "}
            <span className="text-[#72e9ae] px-2 cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
