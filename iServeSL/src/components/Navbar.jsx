// Copyright ©2024 SachinAkash01, All rights reserved.
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/iServeSL.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const registerNavigate = () => {
    navigate("/signup");
  };

  const loginNavigate = () => {
    navigate("/login");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img className="w-[120px] mx-auto my-4" src={Logo} />
      <h1 className="w-full text-3xl font-bold text-[#ff7300]">iServeSL</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hoverEffect">Home</li>
        <li className="p-4 hoverEffect">About</li>
        <li className="p-4 hoverEffect" onClick={registerNavigate}>
          Register
        </li>
        <li className="p-4 hoverEffect" onClick={loginNavigate}>
          Account
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ff7300] m-4">
          iServeSL
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600" onClick={registerNavigate}>
          Register
        </li>
        <li className="p-4 border-b border-gray-600" onClick={loginNavigate}>
          Account
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
