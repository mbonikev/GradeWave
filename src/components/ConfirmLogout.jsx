import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import Loading from "./Loading";
import LoadingWhite from "./LoadingWhite";
function ConfirmLogout({ logoutWarn, setLogoutWarn }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLoginStudent = () => {
    sessionStorage.removeItem("loggedInStudent");
    sessionStorage.removeItem("loggedInSchool");
    sessionStorage.removeItem("loggedInAdmin");
    setLoggingOut(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  const customAnimation = keyframes`
  from{
    // transform: scale(.9);
    opacity: 0;
  }
  to{
    // transform: scale(1);
    opacity: 1;
  }
  `;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
    >
      <Reveal
        duration={200}
        triggerOnce
        keyframes={customAnimation}
        className="w-full h-full"
      >
        <div className="w-full h-full relative flex items-center justify-center">
          <div
            onClick={() => setLogoutWarn(false)}
            className=" w-full h-full absolute top-0 left-0 bg-black/15 z-10"
          ></div>
          <div
            className={`w-[320px] h-fit rounded-2xl bg-body-bg  shadow-lg p-5 z-20 ${
              logoutWarn ? "scale-100 transition-all " : "scale-75"
            } `}
          >
            <TiWarning className="text-[40px] mx-auto text-amber-500" />
            <h1 className="mb-5 text-lg text-center max-w-[200px] mx-auto">
              Are you sure you want to log out?
            </h1>
            <div className="w-full flex items-center max-sm:flex-col-reverse gap-2">
              <button
                onClick={() => setLogoutWarn(false)}
                className="border border-card-bg rounded-2xl transition active:scale-95 text-text-color w-full flex items-center justify-center h-[40px]"
              >
                Cancel
              </button>
              <button
                onClick={handleLoginStudent}
                className="bg-main-color rounded-2xl border-none transition active:scale-95 text-white w-full flex items-center justify-center h-[42px]"
              >
                {!loggingOut ? "Logout" : <LoadingWhite size="small" />}
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default ConfirmLogout;
