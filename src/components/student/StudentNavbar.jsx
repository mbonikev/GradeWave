import React, { useState } from "react";
import { FiCommand, FiLogOut } from "react-icons/fi";
import { HiMenuAlt2, HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
import { LuQrCode, LuSearch } from "react-icons/lu";
import { LogoBlue } from "../../assets";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import {
  RiApps2AddFill,
  RiApps2AddLine,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import Loading from "../Loading";

function StudentNavbar({ title, openSidebar }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLoginStudent = () => {
    sessionStorage.removeItem("loggedInStudent");
    setLoggingOut(true);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };
  return (
    <div className="flex items-center justify-between text-lightBlackText p-2 z-20 max-lg:border-b sticky top-0 bg-white border-stone-100">
      <div className="w-full h-fit flex items-center justify-between gap-2 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 max-sm:gap-0">
          <button
            onClick={openSidebar}
            className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square hidden max-lg:flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl"
          >
            <HiOutlineMenuAlt1 className="text-2xl" />
          </button>
          {title ? (
            <h1 className="text-xl max-lg:text-2xl font-medium text-lightBlackText/80 max-sm:hidden">
              {title}
            </h1>
          ) : (
            <div className="flex flex-col max-sm:hidden px-2.5">
              <h1 className="text-sm font-medium tracking-tight text-lightBlackText/80">
                Good Morning, Guest!
              </h1>
            </div>
          )}
          <img src={LogoBlue} className="hidden max-sm:flex h-8 ml-2" />
        </div>
        <div className="flex items-center justify-end gap-0 max-lg:gap-2">
          <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl">
            <RiApps2AddLine className="text-2xl" />
          </button>
          <button
            title="logout"
            onClick={handleLoginStudent}
            className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl"
          >
            {!loggingOut ? (
              <RiLogoutCircleRLine className="text-2xl" />
            ) : (
              <Loading size="small" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentNavbar;
