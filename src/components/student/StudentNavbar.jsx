import React, { useEffect, useRef, useState } from "react";
import { FiCommand, FiLogOut } from "react-icons/fi";
import { HiMenuAlt2, HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCardOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuQrCode, LuSearch, LuShare2 } from "react-icons/lu";
import { LogoBlue, Pfp } from "../../assets";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import {
  RiApps2AddFill,
  RiApps2AddLine,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import Loading from "../Loading";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const customAnimation = keyframes`
from{
  transform: scale(.9);
  opacity: 0;
}
to{
  transform: scale(1);
  opacity: 1;
}
`;
function StudentNavbar({ title, openSidebar }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const [showNotifPopup, setShowNotifPopup] = useState(false);
  const notifRef = useRef(null);
  const notifpopupRef = useRef(null);
  const handleLoginStudent = () => {
    sessionStorage.removeItem("loggedInStudent");
    setLoggingOut(true);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notifpopupRef.current &&
        !notifpopupRef.current.contains(event.target) &&
        notifRef.current &&
        !notifRef.current.contains(event.target)
      ) {
        setShowNotifPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowNotifPopup(false);
        setLogoutWarn(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="flex items-center justify-between text-lightBlackText p-2 z-20 max-lg:border-b sticky top-0 bg-white border-stone-100">
      {/* confirm */}
      {logoutWarn && (
        <Fade duration={200} triggerOnce>
          <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/15`}
          >
            <Reveal duration={200} triggerOnce keyframes={customAnimation}>
              <div
                className={`w-[280px] h-fit rounded-2xl bg-body-bg  shadow-lg p-5 ${
                  logoutWarn ? "scale-100 " : "scale-75"
                } `}
              >
                <TiWarning className="text-[40px] mx-auto text-amber-500" />
                <h1 className="mb-5 text-lg text-center max-w-[200px] mx-auto">
                  Are you sure you want to log out?
                </h1>
                <div className="w-full flex items-center flex-col gap-2">
                  <button
                    onClick={handleLoginStudent}
                    className="bg-main-color rounded-2xl border-none transition active:scale-95 text-white w-full flex items-center justify-center h-[42px]"
                  >
                    {!loggingOut ? "Logout" : <LoadingWhite size="small" />}
                  </button>
                  <button
                    onClick={() => setLogoutWarn(false)}
                    className="border border-card-bg rounded-2xl transition active:scale-95 text-text-color w-full flex items-center justify-center h-[40px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </Fade>
      )}
      <div className="w-full h-fit flex items-center justify-between gap-2 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 max-sm:gap-0">
          <button
            onClick={openSidebar}
            className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square hidden max-lg:flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl"
          >
            <HiOutlineMenuAlt1 className="text-2xl" />
          </button>
          {title ? (
            <h1 className="text-xl max-lg:text-2xl font-medium text-lightBlackText/80 max-sm:hidden">
              {title}
            </h1>
          ) : (
            <div className="flex flex-col max-sm:hidden px-2.5">
              <h1 className="text-sm font-medium tracking-tight text-lightBlackText/80">
                Good Morning, Guest!
              </h1>
            </div>
          )}
          <img src={LogoBlue} className="hidden max-sm:flex h-8 ml-2" />
        </div>
        <div className="flex items-center justify-end gap-0 max-lg:gap-2 relative">
          {/* <button className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl">
            <LuQrCode className="text-2xl" />
          </button> */}
          <button
            ref={notifRef}
            onClick={() => {
              setLogoutWarn(false);
              setShowNotifPopup(true);
            }}
            className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl relative"
          >
            <div className="bg-red-600 text-white aspect-square rounded-full h-[18px] w-[18px] text-xs font-medium absolute inset-y-0 right-0.5 ring-2 ring-body-bg flex items-center justify-center">
              2
            </div>
            <IoNotificationsOutline className="text-2xl" />
          </button>
          <button
            title="logout"
            onClick={() => {
              setShowNotifPopup(false);
              setLogoutWarn(true);
            }}
            className="text-lightBlackText/80 hover:text-mainColor p-1 h-[40px] aspect-square flex items-center justify-center max-sm:bg-card-bg-weak hover:bg-card-bg-weak hover:text-main-color rounded-xl"
          >
            <RiLogoutCircleRLine className="text-2xl" />
          </button>

          {showNotifPopup && (
            <div
              ref={notifpopupRef}
              className="absolute top-[120%] w-[290px] h-fit min-h-[400px] rounded-2xl ring-1 bg-white dark:bg-card-dark-1 ring-stone-200 dark:ring-card-dark-1 shadow-lg p-1.5"
            >
              <h1 className="text-base font-medium text-left tracking-tight pt-1 pb-2 px-1 border-b border-card-bg text-text-color/80 w-full">
                Notifications
              </h1>
              <div className="w-full h-fit flex flex-col gap-1 pt-2">
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
                  <Link
                    to="/student_notifications"
                    key={index}
                    className="w-full h-fit p-2 cursor-pointer hover:bg-card-bg-weak rounded-2xl"
                  >
                    <div className="w-full flex items-start justify-start gap-3">
                      <div className="size-8 rounded-full bg-main-color p-1 aspect-square">
                        <img
                          src={annoucement.pfp}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <h1 className="text-sm text-text-color/90 line-clamp-3 max-w-[700px]">
                        <strong>{annoucement.name}: </strong>
                        {annoucement.message} <br />
                      </h1>
                    </div>
                    <h1 className="text-sm text-text-color-weak/80 pl-[43px] mt-1">
                      3w
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentNavbar;
