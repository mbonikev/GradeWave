import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif, Pfp } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import { LuShare2 } from "react-icons/lu";
import ConfirmLogout from "../../components/ConfirmLogout";

function StudentNotifications() {
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
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
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
        <StudentNavbar
          openSidebar={openSidebar}
          setLogoutWarn={setLogoutWarn}
        />
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto pb-10">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Notifications
          </h1>

          <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
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
                className="w-full h-fit p-2 cursor-pointer hover:bg-card-bg-weak rounded-2xl"
              >
                <div className="w-full flex items-start justify-start gap-3">
                  <div className="size-8 rounded-full bg-main-color p-1.5 aspect-square">
                    <img
                      src={annoucement.pfp}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <h1 className="text-sm text-text-color/90 line-clamp-3 max-w-[700px]">
                      <strong>{annoucement.name} </strong>
                      {annoucement.message} <br />
                    </h1>
                    <h1 className="text-sm text-text-color-weak/80 mt-1">2d</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentNotifications;
