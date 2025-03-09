import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { LuPlus } from "react-icons/lu";

function AdminExams() {
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
    <div className="w-full h-fit overflow-y-auto flex-1 flex">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <AdminSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 overflow-y-auto relative bg-body-bg`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <AdminNavbar openSidebar={openSidebar} setLogoutWarn={setLogoutWarn} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 min-h-[1000px] mx-auto">
          <div className="w-full flex items-center justify-between gap-3 pb-2 border-b border-card-bg-weak">
            <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80 w-full">
              Exams
            </h1>
            <button
              // onClick={() => setShowEditModal(true)}
              className="py-2 mt-3 px-4 max-sm:px-2.5 w-fit whitespace-nowrap rounded-xl flex items-center justify-center gap-1 bg-transparent hover:bg-main-color active:scale-[.98] text-text-color hover:text-white text-sm font-medium"
            >
              <LuPlus className="text-xl" />
              <span className="max-sm:hidden">New Exam</span>
            </button>
          </div>
          <h1 className="text-sm font-normal my-4 text-text-color-weak">
            # Primary
          </h1>
          <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-end max-md:flex-col mb-4">
            <div className="w-full flex flex-col gap-1 text-sm ">
              <h1 className="text-base font-bold text-text-color/80">
                Primary Leaving Examination (PLE), 2025-2026
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registration Status:</strong>{" "}
                <span className="text-green-700/80 font-medium">Open</span>
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Closing on:</strong>{" "}
                <span className="font-medium text-text-color/80">
                  July 3, 2025
                </span>
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registered:</strong>{" "}
                <span className="font-medium text-text-color/80">2,239</span>
              </h1>
            </div>
            <Link
              to="/student_register_for_exams"
              className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
            >
              Extend
            </Link>
          </div>
          <h1 className="text-sm font-normal mb-4 mt-10 text-text-color-weak">
            # O-Level
          </h1>
          <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-end max-md:flex-col mb-4">
            <div className="w-full flex flex-col gap-1 text-sm ">
              <h1 className="text-base font-bold text-text-color/80">
                ORDINARY LEVEL NATIONAL EXAMINATION (O-Level Exam), 2025-2026
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registration Status:</strong>{" "}
                <span className="text-green-700/80 font-medium">Open</span>
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Closing on:</strong>{" "}
                <span className="font-medium text-text-color/80">
                  July 3, 2025
                </span>
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registered:</strong>{" "}
                <span className="font-medium text-text-color/80">14,239</span>
              </h1>
            </div>
            <Link
              to="/student_register_for_exams"
              className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
            >
              Extend
            </Link>
          </div>
          <h1 className="text-sm font-normal mb-4 mt-10 text-text-color-weak">
            # A-Level
          </h1>
          {[
            {
              name: "ADVANCED LEVEL NATIONAL EXAMINATION (A-Level Exam) , 2025-2026",
              count: "3,293",
            },
            {
              name: "Teacher Training College (TTC) National Examination, 2025-2026",
              count: "941",
            },
            { name: "TVET National Examinations, 2025-2026", count: "2,141" },
          ].map((exam, index) => (
            <div
              key={index}
              className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-center max-md:flex-col mb-4"
            >
              <div className="w-full flex flex-col gap-1 text-sm ">
                <h1 className="text-base font-bold text-text-color/80">
                  {exam.name}
                </h1>
                <h1 className="text-text-color/50">
                  <strong className="font-medium">Registration Status:</strong>{" "}
                  <span className="text-green-700/80 font-medium">Open</span>
                </h1>
                <h1 className="text-text-color/50">
                  <strong className="font-medium">Closing on:</strong>{" "}
                  <span className="font-medium text-text-color/80">
                    July 3, 2025
                  </span>
                </h1>
                <h1 className="text-text-color/50">
                  <strong className="font-medium">Registered:</strong>{" "}
                  <span className="font-medium text-text-color/80">
                    {exam.count}
                  </span>
                </h1>
              </div>
              <div className="w-full flex items-center justify-end gap-2">
                <Link
                  to="/student_register_for_exams"
                  className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
                >
                  Extend
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminExams;
