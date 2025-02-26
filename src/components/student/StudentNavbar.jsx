import React from "react";
import { FiCommand } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { LogoBlue } from "../../assets";

function StudentNavbar({ title, openSidebar }) {
  return (
    <div className="flex items-center justify-between text-lightBlackText p-4 sticky top-0 bg-white z-20 border-b border-stone-100">
      <div className="flex items-center gap-2 max-sm:gap-0">
        <button
          onClick={openSidebar}
          className="text-3xl p-1 rounded-md hidden max-lg:flex text-lightBlackText/60"
        >
          <HiMenuAlt2 />
        </button>
        {title ? (
          <h1 className="text-xl max-lg:text-2xl font-medium text-lightBlackText/80 max-sm:hidden">
            {title}
          </h1>
        ) : (
          <div className="flex flex-col max-sm:hidden">
            <h1 className="text-sm font-medium tracking-tight text-lightBlackText/80">
              Good Morning, Kevin!
            </h1>
            <h1 className="text-sm font-medium text-lightBlackText/60">
              You have <span className="text-mainColor">23 unread</span>{" "}
              notifications
            </h1>
          </div>
        )}
        <img src={LogoBlue} className="hidden max-sm:flex h-11" />
      </div>
      <div className="flex items-center justify-end gap-1">
        <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-stone-100 hover:bg-stone-100 rounded-xl">
          <LuSearch className="text-xl" />
        </button>
        <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-stone-100 hover:bg-stone-100 rounded-xl">
          <IoCardOutline className="text-2xl" />
        </button>
        <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-stone-100 hover:bg-stone-100 rounded-xl">
          <FiCommand className="text-xl" />
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default StudentNavbar;
