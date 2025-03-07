import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuShare,
  LuShare2,
} from "react-icons/lu";
import { Pfp } from "../../assets";
import { GiSportMedal, GiTrophy } from "react-icons/gi";

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
        <div className="w-full h-fit max-w-[1120px] px-5 min-h-[1000px] mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Dashboard
          </h1>

          <div className="w-full h-fit grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 mt-3 py-1">
            {[
              { name: "Check Results", path: "/student_check_results" },
              {
                name: "Register For Exams",
                path: "/student_register_for_exams",
              },
              { name: "Submit a complaint", path: "/student_dashboard" },
              { name: "Resources", path: "/student_past_papers" },
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
          <div className="w-full h-fit grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-3 py-1">
            <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
              <h1 className="text-base font-medium tracking-tight mt-3 mb-3 text-text-color/80 flex items-center justify-between">
                Announcements
                <Link
                  to="/student_notifications"
                  className="text-text-color-weak/60 text-sm hover:text-main-color"
                >
                  View all
                </Link>
              </h1>
              {[
                {
                  pfp: Pfp,
                  name: "Adminstrator",
                  publishedAt: "24/02/2025",
                  message:
                    "Reminder: students 4 days left to register for exams, the applications are closing on 28th February. If you have any issue, reach out via email.",
                },
                {
                  pfp: Pfp,
                  name: "Adminstrator",
                  publishedAt: "24/02/2025",
                  message:
                    "Reminder: students 4 days left to register for exams, the applications are closing on 28th February. If you have any issue, reach out via email.",
                },
              ].map((annoucement, index) => (
                <div
                  key={index}
                  className="w-full h-fit p-4 cursor-pointer hover:bg-card-bg-weak ring-1 ring-card-bg mb-1 rounded-2xl"
                >
                  <div className="w-full flex items-center justify-start gap-3 mb-3">
                    <div className="size-9 rounded-full bg-main-color p-1 aspect-square">
                      <img
                        src={annoucement.pfp}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="w-full flex items-start justify-center flex-col">
                      <h1 className="text-sm">{annoucement.name}</h1>
                      <h1 className="text-xs text-text-color-weak">
                        {annoucement.publishedAt}
                      </h1>
                    </div>
                    <button
                      title="share"
                      className="outline-none border-none p-1 text-text-color-weak hover:text-main-color flex items-center justify-center"
                    >
                      <LuShare2 className="text-lg" />
                    </button>
                  </div>
                  <h1 className="text-sm text-text-color/90">
                    {annoucement.message}
                  </h1>
                </div>
              ))}
            </div>
            <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
              <h1 className="text-base font-medium tracking-tight mt-3 mb-1 text-text-color/80 flex items-center justify-between">
                Glrobal Ranking 2024
              </h1>
              <h1 className="text-base font-medium tracking-tight mb-3 text-text-color-weak/70 flex items-center justify-between">
                #3 of 7,543
              </h1>
              <div className="flex items-center gap-3 bg-card-bg-weak rounded-2xl px-3 py-2 mb-1">
                <GiTrophy className="text-4xl text-[#e5a953]" />
                <h1 className="flex-1 text-left text-sm flex flex-col gap-0.5">
                  <span>Mugisha Kenny</span>
                  <span className="text-xs text-text-color-weak/60">MPC</span>
                </h1>
                <h1 className="text-text-color-weak text-sm font-bold">1st</h1>
              </div>
              <div className="flex items-center gap-3 bg-card-bg-weak rounded-2xl px-3 py-2 mb-1">
                <GiSportMedal className="text-4xl text-stone-400" />
                <h1 className="flex-1 text-left text-sm flex flex-col gap-0.5">
                  <span>Ineza Raissa</span>
                  <span className="text-xs text-text-color-weak/60">MPC</span>
                </h1>
                <h1 className="text-text-color-weak text-sm font-bold">2nd</h1>
              </div>
              <div className="flex items-center gap-3 bg-card-bg-weak rounded-2xl px-3 py-2 mb-1">
                <GiSportMedal className="text-4xl text-[#e3a782]" />
                <h1 className="flex-1 text-left text-sm flex flex-col gap-0.5">
                  <span>Mugisha Kenny</span>
                  <span className="text-xs text-text-color-weak/60">MPC</span>
                </h1>
                <h1 className="text-text-color-weak text-sm font-bold">3rd</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
