import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif, LogoWhite, Pfp } from "../../assets";
import { LuShare2 } from "react-icons/lu";
import ConfirmLogout from "../../components/ConfirmLogout";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import SchoolNavbar from "../../components/school/SchoolNavbar";

function AdminHelp() {
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

  const Notifications = [
    {
      pfp: LogoWhite,
      name: "School",
      publishedAt: "24/02/2025",
      message: "4 days left to register your students.",
    },
    {
      pfp: LogoWhite,
      name: "Student",
      publishedAt: "22/02/2025",
      message: "New guidelines for exam registration have been updated.",
    },
    {
      pfp: LogoWhite,
      name: "Student",
      publishedAt: "20/02/2025",
      message: "I can't login in my account, what should I do?",
    },
    {
      pfp: LogoWhite,
      name: "School",
      publishedAt: "18/02/2025",
      message: "Your school performance report is available.",
    },
  ];

  return (
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <SchoolSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <SchoolNavbar openSidebar={openSidebar} setLogoutWarn={setLogoutWarn} />
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto pb-10">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Notifications
          </h1>

          <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
            {Notifications.map((annoucement, index) => (
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

export default AdminHelp;
