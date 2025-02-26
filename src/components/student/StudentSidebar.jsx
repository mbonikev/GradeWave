import React from "react";
import {
  LuBell,
  LuChartPie,
  LuHistory,
  LuMedal,
  LuPlus,
  LuQrCode,
  LuSchool,
  LuSettings,
  LuUsers,
  LuWallet,
  LuX,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Space } from "antd";
import SidebarSectionTitle from "./SidebarSectionTitle";
import { TbHeadset } from "react-icons/tb";
import { IoCardOutline, IoStatsChart } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { PiExam, PiUserBold } from "react-icons/pi";
import { BsClipboardPlus } from "react-icons/bs";
import { SiReaddotcv } from "react-icons/si";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";

function StudentSidebar({ closeSidebar, showSidebar }) {
  const location = useLocation();
  return (
    <div
      className={`${
        showSidebar ? "w-[255px] max-sm:w-full" : "w-[225px] max-lg:w-0"
      } transition-all duration-300 z-30 bg-body-bg h-svh sticky top-0 left-0 max-lg:fixed flex flex-col bg-lightSidebarBg text-lightBlackText border-r border-stone-100 overflow-y-auto`}
    >
      <div className="w-full flex items-center justify-between px-2 pt-2 gap-1 select-none">
        <Link
          to="/student_profile"
          className={`w-[70%] max-w-fit flex items-center gap-2 pl-2 pr-4 h-[40px] font-medium rounded-xl hover:bg-card-bg-weak`}
        >
          <div className="h-[30px] text-lg aspect-square rounded-full flex items-center justify-center font-semibold bg-main-color text-white">
            G
          </div>
          <h1 className="leading-4 text-sm relative font-medium text-lightBlackText/70 truncate w-full">
            Guest
          </h1>
        </Link>
        <button className=" max-lg:hidden text-lightBlackText/80 hover:text-main-color p-1 h-[40px] min-w-fit aspect-square flex items-center justify-center hover:bg-card-bg-weak rounded-xl">
          <LuQrCode className="text-xl" />
        </button>
        <button
          onClick={closeSidebar}
          className="text-lightBlackText/80 hover:text-main-color p-1 h-[40px] min-w-fit aspect-square items-center justify-center hidden max-lg:flex max-lg:bg-stone-100 hover:bg-card-bg-weak rounded-xl"
        >
          <LuX className="text-xl" />
        </button>
      </div>
      {/* middle links */}
      <div className="flex-1 flex flex-col pl-5 pr-2 gap-1 select-none">
        <SidebarSectionTitle title={"General"} />
        <Link
          to={{
            pathname: "/student_dashboard",
            state: { pageBehavior: "silent" }, // Example state
          }}
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_dashboard"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <LuChartPie className="text-xl max-lg:text-2xl" />
          <p className="text-lightBlackText/70">Dashboard</p>
        </Link>

        {/* section */}
        <SidebarSectionTitle title={"School"} />
        <Link
          to="/student_schools"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_schools"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <LuSchool className="text-xl max-lg:text-2xl" />
          <p className="text-lightBlackText/70">My Schools</p>
        </Link>
        <Link
          to="/student_register_for_exams"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_register_for_exams"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <RiStickyNoteAddLine className="text-xl max-lg:text-2xl" />
          <p className="text-lightBlackText/70">Register for exams</p>
        </Link>
        <Link
          to="/student_check_results"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_check_results"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <LuMedal className="text-xl max-lg:text-2xl" />
          <p className="text-lightBlackText/70">Check Result</p>
        </Link>

        {/* section */}
        <SidebarSectionTitle title={"updates"} />
        <Link
          to="/student_notifications"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-between whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_notifications"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <span className="flex items-center gap-2">
            <GrAnnounce className="text-xl max-lg:text-2xl" />
            <p className="text-lightBlackText/70">Announcements</p>
          </span>
          <span className="text-xs ">2</span>
        </Link>
        {/* section */}
        <SidebarSectionTitle title={"tweaks"} />
        <Link
          to="/student_profile"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_profile"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <PiUserBold className="text-xl max-lg:text-2xl" />
          Profile
        </Link>
        <Link
          to="/student_settings"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/student_settings"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <LuSettings className="text-xl max-lg:text-2xl" />
          Settings
        </Link>
      </div>
      {/* bottom link */}
      <div className="flex flex-col py-2 pl-5 pr-2">
        <Link
          to="/"
          className={`rounded-xl min-w-fit text-sm relative flex items-center border-transparent justify-start whitespace-nowrap gap-2 group px-3 h-[35px] font-medium
          ${
            location.pathname === "/help-center"
              ? "active_sidebar_link bg-card-bg-weak text-main-color"
              : "text-lightBlackText/70 hover:bg-card-bg-weak"
          }
          `}
        >
          <TbHeadset className="text-xl max-lg:text-2xl" />
          Help Center
        </Link>
      </div>
    </div>
  );
}

export default StudentSidebar;
