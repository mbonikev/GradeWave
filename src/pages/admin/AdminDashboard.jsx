import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { FaUserGraduate, FaClipboardList, FaSchool } from "react-icons/fa";
import { LuCalendarDays, LuChartPie, LuCircleCheckBig, LuUsers } from "react-icons/lu";

function AdminDashboard() {
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

  const stats = [
    {
      title: "Total Candidates",
      value: 1200,
      icon: <LuUsers className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-blue-500" />,
    },
    {
      title: "Passed Candidates",
      value: 900,
      icon: (
        <LuCircleCheckBig className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-green-500" />
      ),
    },
    {
      title: "Average Score",
      value: "78%",
      icon: (
        <LuChartPie className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-yellow-500" />
      ),
    },
    {
      title: "Promotion",
      value: "2024-2025",
      icon: (
        <LuCalendarDays className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-purple-500" />
      ),
    },
  ];

  return (
    <div className="w-full h-fit flex-1 flex relative">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <AdminSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <AdminNavbar setLogoutWarn={setLogoutWarn} openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 mb-10 mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Dashboard
          </h1>
          <div className="py-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 max-md:p-5 flex items-center justify-between bg-white shadow-sm rounded-2xl border border-card-bg-weak"
                >
                  <div>
                    <h3 className="text-sm font-medium mb-1 text-text-color-weak">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-text-color">
                      {stat.value}
                    </p>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
