import React from "react";
import Starx from "../assets/StarX91-Logo.svg";
import { GiFlatStar } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { GrServices } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  bg-black w-full h-auto md:h-21 p-4 ">
      <div className="flex w-full md:w-36 bg-white mb-4 md:mb-0 mx-auto md:mx-0 h-12 rounded-3xl items-center justify-center">
        <img src={Starx} alt="starx logo" className="h-8 md:h-8" />
      </div>
      <div className="flex flex-wrap bg-zinc-900 mr-24  w-full md:w-1/4 rounded-3xl justify-center md:justify-between">
        <button className="w-20 h-14 ml-4  my-1 py-1 rounded-md flex flex-col items-center">
          <GrServices className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[11px] font-semibold ">Services</p>
        </button>
        <button className="bg-zinc-800 w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <GiFlatStar className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[13px] font-bold my-1">Star Stork</p>
        </button>
        <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <IoSettingsSharp className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Settings</p>
        </button>
        <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
          <IoIosAddCircle className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-[12px] font-semibold">Add</p>
        </button>
      </div>
      <button className="flex bg-zinc-700 w-12 my-4 md:my-0 h-12 rounded-full mx-auto md:mx-0"></button>
    </div>
  );
};

export default Navbar;
