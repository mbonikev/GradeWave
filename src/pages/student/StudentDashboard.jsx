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
    <div className="w-full h-fit flex-1 flex">
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <StudentNavbar openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-2.5 max-lg:px-5 min-h-[1000px] mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Dashboard
          </h1>

          <div className="w-full h-fit grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 mt-3 py-1">
            {[
              { name: "Check Results", path: "/student_dashboard" },
              { name: "Register For Exams", path: "/student_dashboard" },
              { name: "Submit a complaint", path: "/student_dashboard" },
              { name: "Manage schools", path: "/student_dashboard" },
            ].map((service, index) => (
              <Link
                to={service.path}
                index={index}
                className="group w-full h-full cursor-pointer text-text-color/90 ring-1 ring-card-bg-weak hover:bg-card-bg-weak rounded-2xl py-4 pl-4 pr-5 shadow-sm flex flex-col justify-between items-start gap-0"
              >
                <h1 className="capitalize text-base leading-6 font-medium tracking-tight group-hover:text-main-color ">
                  {service.name}
                </h1>
                <div className="w-full flex items-start justify-start text-main-color mt-4 text-xl">
                  <LuArrowUpRight />
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full grid grid-cols-2">
            <div className="w-full">
              <div className="text-xl font-medium tracking-tight mt-16 text-text-color/80 flex items-center justify-between w-full">
                Updates
                <Link to='/student_dashboard' className="text-sm px-5">view all</Link>
              </div>
            </div>
            <div className="w-full">
              <div className="text-xl font-medium tracking-tight mt-16 text-text-color/80 flex items-center justify-between w-full">
                Grobal Ranking
                <Link to='/student_dashboard' className="text-sm px-5">view all</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
