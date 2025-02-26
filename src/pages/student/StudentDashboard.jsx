import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import { LuArrowUpRight } from "react-icons/lu";

function StudentDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);

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
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-full min-h-svh flex flex-col z-10 bg-body-bg relative`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <StudentNavbar openSidebar={openSidebar} />
        <div className="w-full flex-1 overflow-y-auto flex flex-col gap-0 py-5 relative">
          {/* content */}
          <div className="w-full h-fit max-w-[1100px] mx-auto px-2.5">
            <h1 className="text-[28px] font-semibold">Explore</h1>

            <div className="w-full h-fit grid grid-cols-5 max-lg:grid-cols-4 gap-4 mt-3 py-1">
              {[
                { name: "Check N. Exam Results", path: "/student_dashboard" },
                { name: "Check N. Exam Results", path: "/student_dashboard" },
                { name: "Check N. Exam Results", path: "/student_dashboard" },
                { name: "Check N. Exam Results", path: "/student_dashboard" },
                { name: "Check N. Exam Results", path: "/student_dashboard" },
                { name: "Check N. Exam Results", path: "/student_dashboard" },
              ].map((service, index) => (
                <div
                  index={index}
                  className="group w-full h-full cursor-pointer text-text-color/90 ring-1 ring-card-bg-weak hover:bg-card-bg-weak rounded-2xl py-4 pl-4 pr-5 shadow-sm flex flex-col justify-between items-start gap-0"
                >
                  <h1 className="capitalize text-base leading-5 font-semibold group-hover:text-main-color ">
                    {service.name}
                  </h1>
                  <div className="w-full flex items-start justify-start group-hover:text-main-color mt-3 text-xl">
                    <LuArrowUpRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
