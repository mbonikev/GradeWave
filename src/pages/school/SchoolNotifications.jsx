import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif, LogoWhite, Pfp } from "../../assets";
import { LuShare2 } from "react-icons/lu";
import ConfirmLogout from "../../components/ConfirmLogout";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import SchoolNavbar from "../../components/school/SchoolNavbar";

function SchoolNotifications() {
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
            Announcements
          </h1>

          <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
            {[
              {
                pfp: LogoWhite,
                name: "System",
                publishedAt: "24/02/2025",
                message: "4 days left to register Your Students",
              },
            ].map((annoucement, index) => (
              <div
                key={index}
                className="w-full h-fit p-4 cursor-pointer hover:bg-card-bg-weak ring-1 ring-card-bg-weak mb-1 rounded-2xl"
              >
                <div className="w-full flex items-center justify-start gap-3 mb-3">
                  <div className="size-9 rounded-full bg-main-color p-1.5 aspect-square">
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
                <h1 className="text-sm text-text-color/90 line-clamp-2 max-w-[700px]">
                  {annoucement.message}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolNotifications;
