import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row w-screen ml-40 justify-start">
      <div className="mt-2">
        <img src={logo} alt="logo" />
      </div>

      <div className=" flex mt-2  flex-row gap-28 items-center space-x-8 ml-32 cursor-pointer justify-center  text-lg font-bold">
        <button className="relative">Home</button>
        <button className="relative">Services</button>
        <button className="relative">About Us</button>
        <button className="relative">Agents</button>
      </div>

      <div className=" flex rounded-lg  bg-green-400  mt-2 flex-row gap-28 items-center space-x-8 ml-32 cursor-pointer justify-center  text-lg font-medium">
        <div>
            <b className="relative p-2 ">
                Contact Us
            </b>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
