import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { FaUserGraduate, FaClipboardList, FaSchool } from "react-icons/fa";

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
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
                <FaClipboardList className="text-3xl text-green-500" />
                <div>
                  <h2 className="text-lg font-medium">Total Exams</h2>
                  <p className="text-xl font-bold">5</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
                <FaSchool className="text-3xl text-yellow-500" />
                <div>
                  <h2 className="text-lg font-medium">School Accounts</h2>
                  <p className="text-xl font-bold">3</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
                <FaUserGraduate className="text-3xl text-blue-500" />
                <div>
                  <h2 className="text-lg font-medium">Total Students</h2>
                  <p className="text-xl font-bold">239</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
