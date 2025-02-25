import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";
import { LogoBlack, LogoBlue } from "../../assets";
import { HiOutlineHome } from "react-icons/hi";
import { RiHome9Line } from "react-icons/ri";
import { LiaPercentSolid } from "react-icons/lia";
import { VscPercentage } from "react-icons/vsc";
import { TbForms } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsHouse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleHelp, LuCircleUserRound, LuFlag } from "react-icons/lu";

function StudentSidebar() {
  const LinkStyle = `h-[36px] px-3 flex items-center justify-start gap-3 text-sm rounded-xl hover:bg-card-bg text-text-color/80 font-semibold`;
  const IconStyle = `text-xl -translate-y-[1px] <opacity-6></opacity-6>0`;
  return (
    <div className="w-[270px] h-svh sticky top-0 bg-sidebar-bg border-r border-stone-200 p-3 flex flex-col">
      <div className="flex items-center justify-start gap-1 p-2">
        <img src={LogoBlue} className="size-7" />
        <h1 className="text-lg font-medium">Grade Wave</h1>
      </div>
      {/* separator */}
      <div className="min-h-fit h-[1px] w-full bg-card-bg my-2"></div>
      {/* 1 */}
      <div className="flex-1 w-full block">
        <Link to="/student_dashboard" className={LinkStyle}>
          <BsHouse className={IconStyle} />
          Overview
        </Link>
        <Link to="/student_dashboard" className={LinkStyle}>
          <VscPercentage className={IconStyle} />
          Check Results
        </Link>
        <Link to="/student_dashboard" className={LinkStyle}>
          <AiOutlineUserAdd className={IconStyle} />
          Register Exams
        </Link>

        {/* separator */}
        <div className="min-h-fit h-[1px] w-full bg-card-bg my-2"></div>
        <Link to="/student_dashboard" className={LinkStyle}>
          <IoSettingsOutline className={IconStyle} />
          Settings
        </Link>
        <Link to="/student_dashboard" className={LinkStyle}>
          <LuCircleUserRound className={IconStyle} />
          Profile
        </Link>
      </div>
      <div className="w-full block">
        <Link to="/student_dashboard" className={LinkStyle}>
          <LuCircleHelp className={IconStyle} />
          Contact Support
        </Link>

        {/* separator */}
        <div className="min-h-fit h-[1px] w-full bg-card-bg my-2"></div>
        <Link to="/student_dashboard" className={LinkStyle}>
          <LuFlag className={IconStyle} />
          Report
        </Link>
      </div>
    </div>
  );
}

export default StudentSidebar;
