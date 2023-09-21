import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1440px] w-full mx-auto px-4 text-white z-10 border-b-2 border-[#dadada63]">
      <img alt="" src="/assets/HOOLE.png" className="h-32 p-6 cursor-pointer" />
      <ul className=" hidden md:flex cursor-pointer p-6">
        <li>
          <Search />
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden z-10 text-[#13426ca6] "
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%] z-10"
        }
      >
        <img
          alt=""
          src="/assets/HOOLE.png"
          className="w-36 my-4 mx-auto cursor-pointer"
        />
        <li className="p-4 border-b border-gray-600 cursor-pointer">
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
