import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowLeft, LuSearch } from "react-icons/lu";
import { Students } from "../../content/Students";

function SchoolPromotionDetails() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const { year, level } = useParams();
  const openSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => {
      setAnimateShowSidebar(true);
    }, 50);
  };
  const closeSidebar = () => {
    setAnimateShowSidebar(false);
    setTimeout(() => {
      setShowSidebar(false);
    }, 100);
  };


  return (
    <div className="w-full h-fit flex-1 flex relative">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <SchoolSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 bg-white overflow-y-auto relative`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <SchoolNavbar setLogoutWarn={setLogoutWarn} openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 mb-10 mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80 flex items-center gap-2">
            <Link
              to="/school_manage_students"
              className="size-9 rounded-full bg-card-bg-weak hover:bg-card-bg flex items-center justify-center"
            >
              <LuArrowLeft className="text-xl stroke-[3px]" />
            </Link>
            {level} - {year}
          </h1>
          <div className="w-full flex items-center justify-end gap-2 mt-5 mb-4">
            <select
              name="Type"
              className="block w-[120px] max-md:w-fit px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
              // value={level}
              // onChange={(e) => setLevel(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Passed">Passed</option>
              <option value="Failed">Failed</option>
            </select>
            <div className="flex-1 max-w-[230px] max-md:max-w-full h-fit relative">
              <LuSearch className="absolute top-0 bottom-0 my-auto left-2.5 text-text-color-weak " />
              <input
                type="text"
                className="block w-full max-sm:flex-1 pl-8 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm placeholder:text-text-color-weak"
                placeholder="Search"
                // value={level}
                // onChange={(e) => setLevel(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm">
            <table className="w-full text-left">
              <thead className="bg-card-bg-weak">
                <tr>
                  <th className="px-4 py-2 w-[40px] text-center">
                    <span className="flex gap-0.5 justify-center pl-2 w-full ">
                      N <sub className="pt-1">o</sub>
                    </span>
                  </th>
                  <th className="px-4 py-2">Student ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Progress</th>
                  <th className="px-4 py-2">Combination</th>
                  <th className="px-4 py-2 w-[90px]"></th>
                </tr>
              </thead>
              <tbody>
                {Students.map((student, index) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2 w-[40px] text-center text-text-color-weak/70">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 w-[130px]">{student.id}</td>
                    <td className="px-4 py-2 w-[280px]">{student.name}</td>
                    <td className="px-4 py-2">{student.status}</td>
                    <td className="px-4 py-2">{student.progress}</td>
                    <td className="px-4 py-2 text-text-color-weak/60">
                      {level === "A-Level" ? student.combination : "N/A"}
                    </td>
                    <td className="px-4 py-2 flex items-center justify-center gap-1 w-[90px]">
                      <Link
                        to="/school_promotion_details/2024-2025/O-Level"
                        className="text-main-color-school"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolPromotionDetails;
