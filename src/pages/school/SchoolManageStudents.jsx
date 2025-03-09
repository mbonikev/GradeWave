import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowRight } from "react-icons/lu";

function SchoolManageStudents() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
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

  const promotions = [
    {
      year: "2024-2025",
      levels: [
        { name: "O-Level", totalStudents: 348, passed: 321 },
        { name: "A-Level", totalStudents: 820, passed: 812 },
      ],
    },
    {
      year: "2023-2024",
      levels: [
        { name: "O-Level", totalStudents: 300, passed: 280 },
        { name: "A-Level", totalStudents: 750, passed: 730 },
      ],
    },
    {
      year: "2022-2023",
      levels: [
        { name: "O-Level", totalStudents: 380, passed: 355 },
        { name: "A-Level", totalStudents: 900, passed: 875 },
      ],
    },
    {
      year: "2021-2022",
      levels: [
        { name: "O-Level", totalStudents: 400, passed: 375 },
        { name: "A-Level", totalStudents: 850, passed: 820 },
      ],
    },
    {
      year: "2020-2021",
      levels: [
        { name: "O-Level", totalStudents: 370, passed: 340 },
        { name: "A-Level", totalStudents: 780, passed: 765 },
      ],
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
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Manage Students
          </h1>
          <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-5">
            {promotions.map((promotion, index) => (
              <div key={index} className="w-full h-fit">
                <div className="w-full flex items-center justify-between mt-3 mb-3">
                  <h1 className="block text-sm font-medium text-text-color whitespace-nowrap">
                    Promotion: <strong>{promotion.year}</strong>
                  </h1>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm">
                  <table className="w-full text-left">
                    <thead className="bg-card-bg-weak">
                      <tr>
                        <th className="px-4 py-2">Level</th>
                        <th className="px-4 py-2">Total Students</th>
                        <th className="px-4 py-2">Passed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {promotion.levels.map((level, idx) => (
                        <tr key={idx} className="border-t">
                          <td className="px-4 py-2 w-[120px]">
                            <Link
                              to={"/"}
                              className="text-main-color-school hover:underline"
                            >
                              {level.name}
                            </Link>
                          </td>
                          <td className="px-4 py-2">{level.totalStudents}</td>
                          <td className="px-4 py-2">{level.passed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolManageStudents;
