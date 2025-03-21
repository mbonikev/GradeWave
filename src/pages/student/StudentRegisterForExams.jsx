import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import ConfirmLogout from "../../components/ConfirmLogout";

function StudentRegisterForExams() {
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
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <StudentNavbar openSidebar={openSidebar} setLogoutWarn={setLogoutWarn} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 min-h-[1000px] mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 mb-10 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Register For Exams
          </h1>
          <h1 className="text-sm font-normal my-4 text-text-color-weak">
            # Primary
          </h1>
          <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-center max-md:flex-col mb-4">
            <div className="w-full flex flex-col gap-1 text-sm ">
              <h1 className="text-base font-bold text-text-color/80">
                Primary Leaving Examination (PLE), 2025-2026
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registration Status:</strong>{" "}
                <span className="text-green-700/80 font-medium">Open</span>
              </h1>
            </div>
            <Link
              to="/student_register_for_exams"
              className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
            >
              Register
            </Link>
          </div>
          <h1 className="text-sm font-normal mb-4 mt-10 text-text-color-weak">
            # O-Level
          </h1>
          <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-center max-md:flex-col mb-4">
            <div className="w-full flex flex-col gap-1 text-sm ">
              <h1 className="text-base font-bold text-text-color/80">
                ORDINARY LEVEL NATIONAL EXAMINATION (O-Level Exam), 2025-2026
              </h1>
              <h1 className="text-text-color/50">
                <strong className="font-medium">Registration Status:</strong>{" "}
                <span className="text-green-700/80 font-medium">Open</span>
              </h1>
            </div>
            <Link
              to="/student_register_for_exams"
              className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
            >
              Register
            </Link>
          </div>
          <h1 className="text-sm font-normal mb-4 mt-10 text-text-color-weak">
            # A-Level
          </h1>
          {[
            {
              name: "ADVANCED LEVEL NATIONAL EXAMINATION (A-Level Exam) , 2025-2026",
            },
            {
              name: "Teacher Training College (TTC) National Examination, 2025-2026",
            },
            { name: "TVET National Examinations, 2025-2026" },
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
              </div>
              <Link
                to="/student_register_for_exams"
                className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
              >
                Register
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentRegisterForExams;
