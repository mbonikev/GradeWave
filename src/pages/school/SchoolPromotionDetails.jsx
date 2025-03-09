import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowLeft, LuSearch } from "react-icons/lu";

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
  const students = [
    {
      id: 942534084,
      name: "Mukamana Diane",
      status: "Passed",
      progress: "95%",
      promotion: "2024-2025",
      combination: "MCB",
    },
    {
      id: 120534084,
      name: "Kwizera Jean",
      status: "Passed",
      progress: "85%",
      promotion: "2024-2025",
      combination: "SOD",
    },
    {
      id: 220534084,
      name: "Iradukunda Aline",
      status: "Passed",
      progress: "78%",
      promotion: "2023-2024",
      combination: "MCE",
    },
    {
      id: 320534084,
      name: "Nshimiyimana Eric",
      status: "Passed",
      progress: "72%",
      promotion: "2025-2026",
      combination: "MPC",
    },
    {
      id: 420534084,
      name: "Umutoni Sandrine",
      status: "Passed",
      progress: "70%",
      promotion: "2024-2025",
      combination: "MCB",
    },
  ];
  const oLevelStudents = [
    {
      id: 510534084,
      name: "Ingabire Florence",
      status: "Passed",
      progress: "90%",
      promotion: "2024-2025",
    },
    {
      id: 110534084,
      name: "Hakizimana Yves",
      status: "Passed",
      progress: "88%",
      promotion: "2024-2025",
    },
    {
      id: 210534084,
      name: "Uwase Claudine",
      status: "Passed",
      progress: "79%",
      promotion: "2023-2024",
    },
    {
      id: 310534084,
      name: "Mugisha Patrick",
      status: "Passed",
      progress: "78%",
      promotion: "2025-2026",
    },
    {
      id: 410534084,
      name: "Niyonsaba Kevin",
      status: "Passed",
      progress: "75.93%",
      promotion: "2024-2025",
    },
  ];
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
                  <th className="px-4 py-2 w-[40px]">
                    <span className="flex gap-0.5">
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
                {oLevelStudents.map((student, index) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2 w-[40px]">{index + 1}</td>
                    <td className="px-4 py-2 w-[130px]">{student.id}</td>
                    <td className="px-4 py-2 w-[280px]">{student.name}</td>
                    <td className="px-4 py-2">{student.status}</td>
                    <td className="px-4 py-2">{student.progress}</td>
                    <td className="px-4 py-2 text-text-color-weak/60">N/A</td>
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
